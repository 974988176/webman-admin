var f=(t,c,r)=>new Promise((i,l)=>{var m=o=>{try{a(r.next(o))}catch(n){l(n)}},p=o=>{try{a(r.throw(o))}catch(n){l(n)}},a=o=>o.done?i(o.value):Promise.resolve(o.value).then(m,p);a((r=r.apply(t,c)).next())});import{B as y}from"./TableImg.2aabef6a.js";import{j as R}from"./BasicForm.d11b68fd.js";import{u as k}from"./useTable.13a8b0ff.js";import{a as A,g as D,b as P}from"./common.f56e6fca.js";import{b as $}from"./index.c05f9254.js";import U from"./Update.01355e05.js";import{aP as O,r as C,a as x,bf as S,aQ as h,o as j,h as N,j as b,p as F,bM as V,aO as q,dC as T,q as G,x as H}from"./index.0d073eaa.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./useForm.868c8e81.js";import"./index.566277e5.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useSize.bb4e5ce5.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./index.e317a008.js";import"./uuid.2b29000c.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./get.49a42f2e.js";import"./DeleteOutlined.247d1f35.js";import"./index.a8c197b8.js";import"./useRefs.e81831e2.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./index.0fb15725.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.32117fb5.js";import"./FullscreenOutlined.401a7bcd.js";import"./index.dd1f987c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f8a2fd00.js";import"./index.2ed1a060.js";/* empty css              *//* empty css              */import"./index.e8daa066.js";import"./index.81899e8a.js";import"./index.ffb8ac7d.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";import"./index.abdcab42.js";import"./index.aa6b7013.js";import"./index.78efd931.js";import"./PlusOutlined.64d8e001.js";const v="/app/admin/auth/adminrule/select",B="/app/admin/auth/adminrule/insert",E="/app/admin/auth/adminrule/update",K="/app/admin/auth/adminrule/delete",g="/app/admin/auth/adminrule/schema",u=C({schemas:[]}),Q=x({components:{ModalInserOrEdit:U,BasicTable:y,TableAction:R},setup(){const{createMessage:t}=H(),{success:c}=t,r=C([]),i=C("");S(()=>f(this,null,function*(){const s=yield A(g),I=s.columns;for(let e of I)if(e.primary_key){i.value=e.field;break}const M=s.forms;u.value.schemas=[];for(let e of M)if(e.searchable&&(e.search_type=="between"?(u.value.schemas.push({field:`${e.field}[0]`,component:"Input",label:e.comment||e.field,colProps:{offset:1,span:5}}),u.value.schemas.push({field:`${e.field}[1]`,component:"Input",label:"\u3000\u5230",colProps:{span:5}})):u.value.schemas.push({field:e.field,component:"Input",label:e.comment||e.field,colProps:{offset:1,span:10}})),e.list_show){let _={dataIndex:e.field,title:e.comment||e.field,sorter:e.enable_sort};e.control=="IconPicker"&&(_.width=50,_.customRender=({record:w})=>V(q,{icon:w[e.field]})),r.value.push(_)}}));const[l,{openModal:m}]=$(),[p,{reload:a}]=k({api:D(v,{format:"tree"}),columns:r,useSearchForm:!0,bordered:!0,isTreeTable:!0,formConfig:u,pagination:!1,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(s){return f(this,null,function*(){if(!i.value){T("\u5F53\u524D\u8868\u6CA1\u6709\u4E3B\u952E\uFF0C\u65E0\u6CD5\u7F16\u8F91");return}m(!0,{selectUrl:v,insertUrl:B,updateUrl:E,schemaUrl:g,column:i.value,value:s[i.value]})})}function n(s){return f(this,null,function*(){if(!i.value){T("\u5F53\u524D\u8868\u6CA1\u6709\u4E3B\u952E\uFF0C\u65E0\u6CD5\u5220\u9664");return}yield P(K,{column:i.value,value:s[i.value]}),c("\u5220\u9664\u6210\u529F"),a()})}function d(){m(!0,{selectUrl:v,insertUrl:B,updateUrl:E,schemaUrl:g})}return{registerTable:p,handleEdit:o,handleDelete:n,openRowModal:d,register:l,reload:a}}}),z={class:"p-4"},J=G(" \u6DFB\u52A0\u8BB0\u5F55 ");function L(t,c,r,i,l,m){const p=h("a-button"),a=h("TableAction"),o=h("BasicTable"),n=h("ModalInserOrEdit");return j(),N("div",z,[b(o,{onRegister:t.registerTable,showTableSetting:""},{toolbar:F(()=>[b(p,{type:"primary",onClick:t.openRowModal},{default:F(()=>[J]),_:1},8,["onClick"])]),action:F(({record:d})=>[b(a,{actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,d)},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",popConfirm:{title:"\u662F\u5426\u5220\u9664\uFF1F",confirm:t.handleDelete.bind(null,d)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),b(n,{onRegister:t.register,minHeight:300,onReload:t.reload},null,8,["onRegister","onReload"])])}var eo=O(Q,[["render",L]]);export{eo as default};
