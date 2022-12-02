<?php
namespace plugin\admin\app\common;

class LayuiForm
{

    /**
     * 生成的html代码
     * @var string
     */
    protected $htmlContent = '';

    /**
     * 生成的js代码
     * @var string
     */
    protected $jsContent = '';

    /**
     * 获取生成的html代码
     * @param $indent
     * @return string
     */
    public function html($indent = 0)
    {
        return str_replace("\n", "\n" . str_repeat('    ', $indent), $this->htmlContent);
    }

    /**
     * 获取生成的js代码
     * @param $indent
     * @return string
     */
    public function js($indent = 0)
    {
        return str_replace("\n", "\n" . str_repeat('    ', $indent), $this->jsContent);
    }

    /**
     * 获取控件及相关参数
     * @param $options
     * @return array
     */
    protected function options($options)
    {
        array_walk_recursive($options, function(&$item){
            if (is_string($item)) {
                $item = htmlspecialchars($item);
            }
        });
        $field = $options['field']??'';
        $props = !empty($options['props']) ? $options['props'] : [];
        $verify_string = !empty($props['lay-verify']) ? ' lay-verify="'.$props['lay-verify'].'"' : '';
        $required_string = strpos($verify_string, 'required') ? ' required' : '';
        $label = !empty($options['label']) ? '<label class="layui-form-label'.$required_string.'">'.$options['label'].'</label>' : '';
        $value = $props['value'] ?? '';
        $class = $props['class'] ?? 'layui-input-block';

        return [$label, $field, $value, $props, $verify_string, $required_string, $class];
    }

    /**
     * input输入框
     * @param $options
     * @return void
     */
    public function input($options)
    {
        [$label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);

        $placeholder_string = !empty($props['placeholder']) ? ' placeholder="'.$props['placeholder'].'"' : '';
        $autocomplete_string = !empty($props['autocomplete']) ? ' autocomplete="'.$props['autocomplete'].'"' : '';
        $disabled_string = !empty($props['disabled']) ? ' disabled' : '';
        $type = $props['type'] ?? 'text';

        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $label
    <div class="$class">
        <input type="$type" name="$field" value="$value"$disabled_string$required_string$verify_string$placeholder_string$autocomplete_string class="layui-input">
    </div>
</div>

EOF;
    }

    /**
     * input数字输入框
     * @param $options
     * @return void
     */
    public function inputNumber($options)
    {
        $options['props']['type'] = 'number';
        $this->input($options);
    }

    /**
     * 输入框范围
     * @param $options
     * @return void
     */
    public function inputRange($options)
    {
        [$label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);
        $type = $props['type'] ?? 'text';

        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $label
    <div class="$class">
        <div class="layui-input-block">
            <input type="$type" autocomplete="off" name="{$field}[]" class="layui-input inline-block" placeholder="开始">
            -
            <input type="$type" autocomplete="off" name="{$field}[]" class="layui-input inline-block" placeholder="结束">
        </div>
    </div>
</div>

EOF;
    }

    /**
     * 数字输入框范围
     * @param $options
     * @return void
     */
    public function inputNumberRange($options)
    {
        $options['props']['type'] = 'number';
        $this->inputRange($options);
    }

    /**
     * 密码输入框
     * @param $options
     * @return void
     */
    public function inputPassword($options)
    {
        $options['props']['type'] = 'password';
        $this->input($options);
    }

    /**
     * 文本域
     * @param $options
     * @return void
     */
    public function textArea($options)
    {
        [$label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);

        $placeholder_string = !empty($props['placeholder']) ? ' placeholder="'.$props['placeholder'].'"' : '';

        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $label
    <div class="$class">
        <textarea name="$field"$required_string$verify_string$placeholder_string class="layui-textarea">$value</textarea>
    </div>
</div>

EOF;
    }

    /**
     * 上传组件
     * @param $options
     * @return void
     */
    public function upload($options)
    {
        [$label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);

        $props['accept'] = $props['accept'] ?? 'file';
        $props['url'] = $props['url'] ?? '/app/admin/upload/file';
        $id = $this->createId($field);

        $props['field'] = $props['field'] ?? '__file__';
        unset($props['lay-verify']);
        $options_string = '';
        foreach ($props as $key => $item) {
            if (is_array($item)) {
                $item = json_encode($item, JSON_UNESCAPED_UNICODE);
                $options_string .= "\r\n        $key: $item,";
            } else {
                $options_string .= "\r\n        $key: '$item',";
            }
        }

        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $label
    <div class="$class">
        <span>$value</span>
        <input type="text" style="display:none" name="$field" value="$value" />
        <button type="button" class="pear-btn pear-btn-primary pear-btn-sm" id="$id">
            <i class="layui-icon">&#xe67c;</i>上传文件
        </button>
    </div>
</div>

EOF;
        $this->jsContent .= <<<EOF

// 字段 {$options['label']} $field
layui.use(['upload', 'layer', 'jquery', 'popup', 'util'], function() {
    let input = layui.jquery('#$id').prev();
    input.prev().html(input.val());
    layui.upload.render({
        elem: '#$id',$options_string
        done: function (res) {
            if (res.code) return layui.popup.failure(res.msg);
            this.item.prev().val(res.data.path).prev().html(layui.util.escape(res.data.path));
        }
    });
});

EOF;
    }

    /**
     * 图片上传组件
     * @param $options
     * @return void
     */
    public function uploadImage($options)
    {
        [$label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);
        $props['acceptMime'] = $props['acceptMime'] ?? 'image/gif,image/jpeg,image/jpg,image/png';
        $props['url'] = $props['url'] ?? '/app/admin/upload/image';
        $id = $this->createId($field);

        unset($props['lay-verify']);
        $props['field'] = $props['field'] ?? '__file__';
        $options_string = '';
        foreach ($props as $key => $item) {
            if (is_array($item)) {
                $item = json_encode($item, JSON_UNESCAPED_UNICODE);
                $options_string .= "\r\n        $key: $item,";
            } else {
                $options_string .= "\r\n        $key: '$item',";
            }
        }

        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $label
    <div class="$class">
        <img style="max-width:90px;max-height:90px;" src=""/>
        <input type="text" style="display:none" name="$field" value="$value" />
        <button type="button" class="pear-btn pear-btn-primary pear-btn-sm" id="$id">
            <i class="layui-icon">&#xe67c;</i>上传图片
        </button>
    </div>
</div>

EOF;
        $this->jsContent .= <<<EOF

// 字段 {$options['label']} $field
layui.use(['upload', 'layer', 'jquery'], function() {
    let input = layui.jquery('#$id').prev();
    input.prev().attr('src', input.val());
    layui.upload.render({
        elem: '#$id',$options_string
        done: function (res) {
            if (res.code > 0) return layui.layer.msg(res.msg);
            this.item.prev().val(res.data.path).prev().attr('src', res.data.path);
        }
    });
});

EOF;

    }

    /**
     * 日期时间选择组件
     * @param $options
     * @return void
     */
    public function dateTimePicker($options)
    {
        $options['props']['type'] = 'datetime';
        $this->datePicker($options);
    }

    /**
     * 日期选择组件
     * @param $options
     * @return void
     */
    public function datePicker($options)
    {
        [$label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);
        $value_string = $value ? ' value="'.$value.'"' : '';
        $options_string = '';
        unset($props['required'], $props['lay-verify'], $props['value']);
        foreach ($props as $key => $item) {
            if (is_array($item)) {
                continue;
            }
            $options_string .= "\r\n        $key: '$item',";
        }
        $id = $this->createId($field);

        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $label
    <div class="$class">
        <input type="text" name="$field" id="$id"$value_string$required_string$verify_string autocomplete="off" class="layui-input">
    </div>
</div>

EOF;
        $this->jsContent .= <<<EOF

// 字段 {$options['label']} $field
layui.use(['laydate'], function() {
    layui.laydate.render({
        elem: '#$id',$options_string
    });
})

EOF;
    }

    /**
     * 日期时间范围选择组件
     * @param $options
     * @return void
     */
    public function dateTimePickerRange($options)
    {
        $options['props']['type'] = 'datetime';
        $this->datePickerRange($options);
    }

    /**
     * 日期范围选择组件
     * @param $options
     * @return void
     */
    public function datePickerRange($options)
    {
        [$label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);
        if (!isset($options['props']['type'])) {
            $options['props']['type'] = 'date';
        }
        $options_string = '';
        unset($props['required'], $props['lay-verify'], $props['value']);
        foreach ($props as $key => $item) {
            if (is_array($item)) {
                continue;
            }
            $options_string .= "\r\n        $key: '$item',";
        }
        $id = $this->createId($field);
        $id_start = "$id-date-start";
        $id_end = "$id-date-end";
        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $label
    <div class="$class">
        <div class="layui-input-block" id="$id">
            <input type="text" autocomplete="off" name="{$field}[]" id="$id_start" class="layui-input inline-block" placeholder="开始时间">
            -
            <input type="text" autocomplete="off" name="{$field}[]" id="$id_end" class="layui-input inline-block" placeholder="结束时间">
        </div>
    </div>
</div>

EOF;
        $this->jsContent .= <<<EOF

// 字段 {$options['label']} $field
layui.use(['laydate'], function() {
    layui.laydate.render({
        elem: '#$id',
        range: ['#$id_start', '#$id_end'],$options_string
    });
})

EOF;
    }

    /**
     * 创建id
     * @param $field
     * @return mixed
     */
    protected function createId($field)
    {
        return $field;
    }

    /**
     * 图标选择组件
     * @param $options
     * @return void
     */
    public function iconPicker($options)
    {
        [$label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);

        $value_string = $value ? ' value="'.$value.'"' : '';
        $id = $this->createId($field);
        $options_string = '';
        foreach ($props as $key => $item) {
            if (is_array($item)) {
                $item = json_encode($item, JSON_UNESCAPED_UNICODE);
                $options_string .= "\r\n                $key: $item,";
            } else {
                $options_string .= "\r\n                $key: '$item',";
            }
        }

        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $label
    <div class="$class">
        <input name="$field" id="$id"$value_string$required_string$verify_string />
    </div>
</div>

EOF;

        $this->jsContent .= <<<EOF

// 字段 {$options['label']} $field
layui.use(['iconPicker'], function() {
    layui.iconPicker.render({
        elem: '#$id',
        type: 'fontClass',
        page: false,$options_string
    });
});

EOF;

    }

    /**
     * swtich组件
     * @param $options
     * @return void
     */
    public function switch($options)
    {
        [$label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);

        $value = (int)$value;
        $disabled_string = !empty($props['disabled']) ? ' disabled' : '';
        $lay_text = !empty($props['lay-text']) ? "lay-text=\"{$props['lay-text']}\"" : '';

        $id = $this->createId($field);

        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $label
    <div class="$class">
        <input type="checkbox" id="$id" lay-filter="$field"$disabled_string$required_string lay-skin="switch" $lay_text/>
        <input type="text" style="display:none" name="$field" value="$value"$required_string />
    </div>
</div>

EOF;

        $this->jsContent .= <<<EOF

// 字段 {$options['label']} $field
layui.use(['form', 'jquery'], function() {
    layui.jquery('#$id').attr('checked', layui.jquery('input[name="$field"]').val() != 0);
    layui.form.render();
    layui.form.on('switch($field)', function(data) {
        layui.jquery('input[name="$field"]').val(this.checked ? 1 : 0);
    });
})

EOF;

    }

    /**
     * 下拉选择组件
     * @return void
     */
    public function select($options)
    {
        $options['props']['model'] = array_merge_recursive([
            'icon' => 'hidden',
            'label' => [
                'type' => 'text',
            ]
        ], $options['props']['model'] ?? []);
        $options['props']['clickClose'] = $options['props']['clickClose'] ?? 'true';
        $options['props']['radio'] = $options['props']['radio'] ?? 'true';
        $this->apiSelect($options);
    }

    /**
     * 下拉多选组件
     * @return void
     */
    public function selectMulti($options)
    {
        $options['props']['toolbar'] = array_merge_recursive([
            'show' => true,
            'list' => [ 'ALL', 'CLEAR', 'REVERSE' ]
        ], $options['props']['toolbar'] ?? []);
        $this->apiSelect($options);
    }

    /**
     * 树单选组件
     * @return void
     */
    public function treeSelect($options)
    {
        $options['props']['model'] = array_merge_recursive([
            'icon' => 'hidden',
            'label' => [
                'type' => 'text',
            ]
        ], $options['props']['model'] ?? []);
        $options['props']['clickClose'] = $options['props']['clickClose'] ?? 'true';
        $options['props']['radio'] = $options['props']['radio'] ?? 'true';
        $options['props']['tree'] = array_merge_recursive([
            'show' => true,
            'strict' => false,
            'clickCheck' => true,
            'clickExpand' => false
        ], $options['props']['tree'] ?? []);
        $this->apiSelect($options);
    }

    /**
     * 树多选组件
     * @return void
     */
    public function treeSelectMulti($options)
    {
        $options['props']['tree'] = array_merge_recursive(['show' => true], $options['props']['tree'] ?? []);
        $options['props']['toolbar'] = array_merge_recursive([
            'show' => true,
            'list' => [ 'ALL', 'CLEAR', 'REVERSE' ]
        ], $options['props']['toolbar'] ?? []);
        $this->apiSelect($options);
    }

    /**
     * 选择框，支持单选、多选、树形选择
     * @see https://maplemei.gitee.io/xm-select/
     * @param $options
     * @return void
     */
    public function apiSelect($options)
    {
        [$select_label, $field, $value, $props, $verify_string, $required_string, $class] = $this->options($options);

        $default_value_string = isset($props['initValue']) && $props['initValue'] != '' ? $props['initValue'] : $value;
        $url = $props['url'] ?? '';
        $options_string = '';
        unset($props['lay-verify'], $props['url']);
        foreach ($props as $key => $item) {
            if (is_array($item)) {
                $item = json_encode($item, JSON_UNESCAPED_UNICODE);
                $options_string .= "\r\n".($url?'                ':'        ')."$key: $item,";
            } else {
                $options_string .= "\r\n".($url?'                ':'        ')."$key: '$item',";
            }
        }

        $id = $this->createId($field);
        if ($url) {
            $this->jsContent .= <<<EOF

// 字段 {$options['label']} $field
layui.use(['jquery', 'xmSelect'], function() {
    layui.jquery.ajax({
        url: '$url',
        dataType: 'json',
        success: function (e) {
            let value = layui.jquery('#$id').attr('value');
            let initValue = value ? value.split(',') : [];
            layui.xmSelect.render({
                el: '#$id',
                name: '$field',
                initValue: initValue,
                data: e.data, $options_string
            })
        }
    });
});

EOF;
        } else {
            $this->jsContent .= <<<EOF

// 字段 {$options['label']} $field
layui.use(['jquery', 'xmSelect'], function() {
    let value = layui.jquery('#$id').attr('value');
    let initValue = value ? value.split(',') : [];
    layui.xmSelect.render({
        el: '#$id',
        name: '$field',
        initValue: initValue,$options_string
    })
});

EOF;
        }

        $this->htmlContent .= <<<EOF

<div class="layui-form-item">
    $select_label
    <div class="$class">
        <div name="$field" id="$id"$verify_string$required_string value="$default_value_string" ></div>
    </div>
</div>

EOF;

    }

    /**
     * 构建表单
     * @param $table
     * @param $type
     * @return LayuiForm
     */
    static public function buildForm($table, $type = 'insert')
    {
        if (!in_array($type, ['insert', 'update', 'search'])) {
            $type = 'insert';
        }
        $filter = $type === 'search' ? 'searchable' : 'form_show';
        $form = new LayuiForm();
        $schema = Util::getSchema($table);
        $forms = $schema['forms'];
        $columns = $schema['columns'];
        $primary_key = $schema['table']['primary_key'][0] ?? null;

        foreach ($forms as $key => $info) {
            if (empty($info[$filter])) {
                continue;
            }
            $field = $info['field'];
            $default = $columns[$key]['default'];
            $control = strtolower($info['control']);
            // 搜索框里上传组件替换为input
            if ($type == 'search' && in_array($control, ['upload', 'uploadimg'])) {
                $control = 'input';
                $info['control_args'] = '';
            }

            $props = Util::getProps($control, $info['control_args']);
            // 增加修改记录验证必填项
            if ($filter == 'form_show' && !isset($props['lay-verify']) && !$columns[$key]['nullable'] && $default === null && ($field !== 'password' || $type === 'insert')) {
                $props['lay-verify'] = 'required';
            }
            // 增加记录显示默认值
            if ($type === 'insert' && !isset($props['value']) && $default !== null) {
                $props['value'] = $default;
            }
            // 表单不显示主键
            if ($filter == 'form_show' && $primary_key && $field == $primary_key) {
                continue;
            }
            // 范围查询
            if ($type == 'search' && $info['search_type'] == 'between' && method_exists($form, "{$control}Range")) {
                $control = "{$control}Range";
            }

            $options = [
                'label' => $info['comment'] ?: $field,
                'field' => $field,
                'props' => $props,
            ];

            $form->{$control}($options);
        }
        return $form;
    }

    /**
     * 构建表格
     * @param $table
     * @param $indent
     * @return array|string|string[]
     */
    static public function buildTable($table, $indent = 0)
    {
        $schema = Util::getSchema($table);
        $forms = $schema['forms'];

        $codes = '';
        $cols = '';
        $api = '';
        $api_result = '';

        foreach ($forms as $info) {
            $title = $info['comment'] ?: $info['field'];
            $hide_str = $info['list_show'] ? '' : "\n		hide: true,";
            $sort_str = $info['enable_sort'] ? "\n		sort: true," : '';
            $field = $info['field'];
            $templet = '';
            $schema = <<<EOF
title: '$title',
		field: '$field',$hide_str$sort_str
EOF;

            $control = strtolower($info['control']);
            switch ($control) {
                case 'switch':
                    $props = Util::getProps($info['control'], $info['control_args']);
                    $lay_text = $props['lay-text'] ?? '';
                    $templet = <<<EOF

		templet: function (d) {
			let field = '$field';
			form.on('switch('+field+')', function (data) {
				let load = layer.load();
				let postData = {};
				postData[field] = data.elem.checked ? 1 : 0;
				postData[PRIMARY_KEY] = this.value;
				$.post(UPDATE_API, postData, function (res) {
					layer.close(load);
					if (res.code) {
                        return layui.popup.failure(res.msg);
                    }
					return layui.popup.success('操作成功');
				})
			});
			let checked = d[field] === 1 ? 'checked' : '';
			return '<input type="checkbox" value="'+d[PRIMARY_KEY]+'" lay-filter="'+field+'" lay-skin="switch" lay-text="$lay_text" '+checked+'/>';
		}
EOF;
                    break;

                case 'iconpicker':
                    $templet = <<<EOF

		templet: function (d) {
			return '<i class="layui-icon ' + d['$field'] + '"></i>';
		}
EOF;
                    break;
                case 'upload':
                    $templet = <<<EOF

		templet: function (d) {
			return '<a href="' + d['$field'] + '" target="_blank">' + d['$field'] + '</a>';
		}
EOF;
                    break;
                case 'uploadimage':
                    $templet = <<<EOF

		templet: function (d) {
			return '<img src="'+d.avatar+'" style="max-width:32px;max-height:32px;" alt="" />';
		}
EOF;
                    break;

            }

            if (in_array($control, ['select', 'selectmulti', 'treeselect', 'treeselectmulti'])) {
                $props = Util::getProps($info['control'], $info['control_args']);

                if (isset($props['url'])) {
                    $api .= "apis.push(['$field', '{$props['url']}']);";
                    $api_result .= "apiResults['$field'] = [];";
                } else if (!empty($props['data'])) {
                    $options = [];
                    foreach ($props['data'] as $option) {
                        if (isset($option['value']) && isset($option['name'])) {
                            $options[$option['value']] = $option['name'];
                        }
                    }
                    $api_result .= "apiResults['$field'] = " . json_encode($options, JSON_UNESCAPED_UNICODE) . ";\r\n";
                }

                $templet = <<<EOF

		templet: function (d) {
			let field = '$field';
			if (typeof d[field] == "undefined") return '';
			let items = [];
			layui.each((d[field] + '').split(','), function (k , v) {
				items.push(apiResults[field][v] || v);
			});
			return items.join(',');
		}
EOF;

            }

            $cols .= <<<EOF
,{
		$schema$templet
	}
EOF;

        }

        $cols = <<<EOF

// 表头参数
let cols = [
	{
		type: 'checkbox'
	}$cols,{
		title: "操作",
		toolbar: "#table-bar",
		align: "center",
		fixed: "right",
	}
];

EOF;
        if (!$api && $api_result) {
            $codes = <<<EOF
// 获取表格中下拉或树形组件数据
let apiResults = {};
$api_result
EOF;
        } else if ($api && !$api_result) {
            $codes = <<<EOF
// 获取表格中下拉或树形组件数据
let apis = [];
$api
EOF;
        } else if ($api && $api_result) {
            $codes = <<<EOF
// 获取表格中下拉或树形组件数据
let apis = [];
$api
let apiResults = {};
$api_result
EOF;
        }

        if ($api) {
            $codes = <<<EOF
$cols
// 渲染表格
function render()
{
    table.render({
        elem: '#data-table',
        url: SELECT_API,
        page: true,
        cols: [cols],
        skin: 'line',
        size: 'lg',
        toolbar: '#table-toolbar',
        autoSort: false,
        defaultToolbar: [{
            title: '刷新',
            layEvent: 'refresh',
            icon: 'layui-icon-refresh',
        }, 'filter', 'print', 'exports']
    });
}

$codes
let count = apis.length;
layui.each(apis, function (k, item) {
    let [field, url] = item;
    $.ajax({
        url: url,
        dateType: 'json',
        success: function (res) {
            function travel(items) {
                for (let k in items) {
                    let item = items[k];
                    apiResults[field][item.value] = item.name;
                    if (item.children) {
                        travel(item.children);
                    }
                }
            }
            travel(res.data);
        },
        complete: function () {
            if (--count === 0) {
                render();
            }
        }
    });
});
if (!count) {
    render();
}

EOF;

        } else {
            $codes = <<<EOF
$cols
// 渲染表格
table.render({
    elem: '#data-table',
    url: SELECT_API,
    page: true,
    cols: [cols],
    skin: 'line',
    size: 'lg',
    toolbar: '#table-toolbar',
    autoSort: false,
    defaultToolbar: [{
        title: '刷新',
        layEvent: 'refresh',
        icon: 'layui-icon-refresh',
    }, 'filter', 'print', 'exports']
});

$codes
EOF;

        }

        return str_replace("\n", "\n" . str_repeat('	', $indent), $codes);

    }


}