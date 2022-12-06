<?php

namespace plugin\admin\app\controller;

use plugin\admin\app\common\Util;
use plugin\admin\app\model\AdminRole;
use plugin\admin\app\model\AdminRule;
use support\exception\BusinessException;
use support\Request;
use support\Response;

/**
 * 权限菜单
 */
class AdminRuleController extends Crud
{
    /**
     * 不需要权限的方法
     *
     * @var string[]
     */
    public $noNeedAuth = ['get', 'permission'];

    /**
     * @var AdminRule
     */
    protected $model = null;

    /**
     * 构造函数
     */
    public function __construct()
    {
        $this->model = new AdminRule;
    }

    /**
     * 浏览
     * @return Response
     */
    public function index(): Response
    {
        return view('admin-rule/index');
    }

    /**
     * 查询
     * @param Request $request
     * @return Response
     * @throws BusinessException
     */
    public function select(Request $request): Response
    {
        $this->syncRules();
        return parent::select($request);
    }

    /**
     * 获取菜单
     * @param Request $request
     * @return Response
     */
    function get(Request $request): Response
    {
        $rules = $this->getRules(admin('roles'));
        $items = AdminRule::orderBy('weight', 'desc')->get()->toArray();
        $types = $request->get('type', '0,1');
        $types = is_string($types) ? explode(',', $types) : [0, 1];
        $items_map = [];
        foreach ($items as $item) {
            $item['pid'] = (int)$item['pid'];
            $item['name'] = $item['title'];
            $item['value'] = $item['id'];
            $items_map[$item['id']] = $item;
        }
        $formatted_items = [];
        foreach ($items_map as $index => $item) {
            //$items_map[$index]['type'] = $items_map[$index]['href'] ? 1 : 0;
            $items_map[$index]['icon'] = $items_map[$index]['icon'] ? "layui-icon {$items_map[$index]['icon']}" : '';
            if ($item['pid'] && isset($items_map[$item['pid']])) {
                $items_map[$item['pid']]['children'][] = &$items_map[$index];
            }
        }
        foreach ($items_map as $item) {
            if (!$item['pid']) {
                $formatted_items[] = $item;
            }
        }

        // 超级管理员权限为 *
        if (!in_array('*', $rules)) {
            $this->removeUncontain($formatted_items, 'id', $rules);
        }
        $this->removeUncontain($formatted_items, 'type', $types);
        $formatted_items = array_values($formatted_items);
        foreach ($formatted_items as &$item) {
            $this->arrayValues($item);
        }
        return $this->json(0, 'ok', $formatted_items);
    }

    /**
     * 获取控制器详细权限
     * @param Request $request
     * @return Response
     */
    public function permission(Request $request): Response
    {
        $controller = $request->get('controller');
        if (!$controller) {
            return $this->json(0, 'ok', []);
        }
        $rules = $this->getRules(admin('roles'));
        // 超级管理员
        if (in_array('*', $rules)) {
            return $this->json(0, 'ok', ['*']);
        }
        // 获取详细权限
        $controller_search = str_replace('\\', '\\\\', $controller);
        $keys = AdminRule::where('key', 'like', "$controller_search%")
            ->whereIn('id', $rules)->pluck('key');
        $permissions = [];
        $prefix_length = strlen($controller);
        foreach ($keys as $key) {
            if ($key === $controller) {
                $permissions = ['*'];
                break;
            }
            $permissions[] = substr($key, $prefix_length);
        }
        return $this->json(0, 'ok', $permissions);
    }

    /**
     * 根据类同步规则到数据库
     * @return void
     */
    protected function syncRules()
    {
        $items = $this->model->where('key', 'like', '%\\\\%')->get()->keyBy('key');
        $methods_in_db = [];
        $methods_in_files = [];
        foreach ($items as $item) {
            $class = $item->key;
            if (strpos($class, '@')) {
                $methods_in_db[$class] = $class;
                continue;
            }
            if (class_exists($class)) {
                $reflection = new \ReflectionClass($class);
                $properties = $reflection->getDefaultProperties();
                $no_need_auth = array_merge($properties['noNeedLogin'] ?? [], $properties['noNeedAuth'] ?? []);
                $class = $reflection->getName();
                $pid = $item->id;
                $methods = $reflection->getMethods(\ReflectionMethod::IS_PUBLIC);
                foreach ($methods as $method) {
                    $method_name = $method->getName();
                    if (strtolower($method_name) === 'index' || strpos($method_name, '__') === 0 || in_array($method_name, $no_need_auth)) {
                        continue;
                    }
                    $name = "$class@$method_name";

                    $methods_in_files[$name] = $name;
                    $title = Util::getCommentFirstLine($method->getDocComment()) ?: $method_name;
                    $menu = $items[$name] ?? [];
                    if ($menu) {
                        if ($menu->title != $title) {
                            AdminRule::where('key', $name)->update(['title' => $title]);
                        }
                        continue;
                    }
                    $menu = new AdminRule;
                    $menu->pid = $pid;
                    $menu->key = $name;
                    $menu->title = $title;
                    $menu->type = 2;
                    $menu->save();
                }
            }
        }
        // 从数据库中删除已经不存在的方法
        $menu_names_to_del = array_diff($methods_in_db, $methods_in_files);
        if ($menu_names_to_del) {
            //AdminRule::whereIn('key', $menu_names_to_del)->delete();
        }
    }

    /**
     * 查询前置方法
     * @param Request $request
     * @return array
     * @throws BusinessException
     */
    protected function selectInput(Request $request): array
    {
        [$where, $format, $page_size, $field, $order] = parent::selectInput($request);
        // 允许通过type=0,1格式传递菜单类型
        $types = $request->get('type');
        if ($types && is_string($types)) {
            $where['type'] = ['in', explode(',', $types)];
        }
        // 默认weight排序
        if (!$field) {
            $field = 'weight';
            $order = 'desc';
        }
        return [$where, $format, $page_size, $field, $order];
    }

    /**
     * 添加
     * @param Request $request
     * @return Response
     * @throws BusinessException
     */
    public function insert(Request $request): Response
    {
        if ($request->method() === 'GET') {
            return view('admin-rule/insert');
        }
        $data = $this->insertInput($request);
        $key = $data['key'] ?? '';
        if ($this->model->where('key', $key)->first()) {
            return $this->json(1, "菜单标识 $key 已经存在");
        }
        $data['pid'] = empty($data['pid']) ? 0 : $data['pid'];
        $this->doInsert($data);
        return $this->json(0);
    }

    /**
     * 更新
     * @param Request $request
     * @return Response
     * @throws BusinessException
     */
    public function update(Request $request): Response
    {
        if ($request->method() === 'GET') {
            return view('admin-rule/update');
        }
        [$id, $data] = $this->updateInput($request);
        if (!$row = $this->model->find($id)) {
            return $this->json(2, '记录不存在');
        }
        $data['pid'] = $data['pid'] ?: 0;
        if ($data['pid'] == $row['id']) {
            return $this->json(2, '不能将自己设置为上级菜单');
        }
        $this->doUpdate($id, $data);
        return $this->json(0);
    }
    
    /**
     * 删除
     * @param Request $request
     * @return Response
     */
    public function delete(Request $request): Response
    {
        $ids = $this->deleteInput($request);
        // 子规则一起删除
        $delete_ids = $children_ids = $ids;
        while($children_ids) {
            $children_ids = $this->model->whereIn('pid', $children_ids)->pluck('id')->toArray();
            $delete_ids = array_merge($delete_ids, $children_ids);
        }
        $this->doDelete($delete_ids);
        return $this->json(0);
    }

    /**
     * 移除不包含某些数据的数组
     * @param $array
     * @param $key
     * @param $values
     * @return void
     */
    protected function removeUncontain(&$array, $key, $values)
    {
        foreach ($array as $k => &$item) {
            if (!is_array($item)) {
                continue;
            }
            if (!$this->arrayContain($item, $key, $values)) {
                unset($array[$k]);
            } else {
                if (!isset($item['children'])) {
                    continue;
                }
                $this->removeUncontain($item['children'], $key, $values);
            }
        }
    }

    /**
     * 判断数组是否包含某些数据
     * @param $array
     * @param $key
     * @param $values
     * @return bool
     */
    protected function arrayContain(&$array, $key, $values): bool
    {
        if (!is_array($array)) {
            return false;
        }
        if (isset($array[$key]) && in_array($array[$key], $values)) {
            return true;
        }
        if (!isset($array['children'])) {
            return false;
        }
        foreach ($array['children'] as $item) {
            if ($this->arrayContain($item, $key, $values)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 递归删除某些key
     * @param $array
     * @param $keys
     * @return void
     */
    protected function recursiveRemove(&$array, $keys)
    {
        if (!is_array($array)) {
            return;
        }
        foreach ($keys as $key) {
            unset($array[$key]);
        }
        foreach ($array as &$item) {
            $this->recursiveRemove($item, $keys);
        }
    }

    /**
     * 获取权限规则
     * @param $roles
     * @return array
     */
    protected function getRules($roles): array
    {
        $rules_strings = $roles ? AdminRole::whereIn('id', $roles)->pluck('rules') : [];
        $rules = [];
        foreach ($rules_strings as $rule_string) {
            if (!$rule_string) {
                continue;
            }
            $rules = array_merge($rules, explode(',', $rule_string));
        }
        return $rules;
    }

    /**
     * 递归重建数组下标
     * @return void
     */
    protected function arrayValues(&$array)
    {
        if (!is_array($array) || !isset($array['children'])) {
            return;
        }
        $array['children'] = array_values($array['children']);

        foreach ($array['children'] as &$child) {
            $this->arrayValues($child);
        }
    }

}
