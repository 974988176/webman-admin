import{B as _,T as E}from"./TableImg.2aabef6a.js";import"./BasicForm.d11b68fd.js";import{u as T}from"./useTable.13a8b0ff.js";import{aP as k,a as y,aQ as u,o as t,h as c,j as A,p as m,F as C,q as p,t as s,aS as i,aR as r}from"./index.0d073eaa.js";import{T as f}from"./index.e317a008.js";import{A as B}from"./index.0972fd96.js";import{d as I}from"./table.5cb529f7.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./useForm.868c8e81.js";import"./index.566277e5.js";import"./index.e9a84cba.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./useSize.bb4e5ce5.js";import"./transButton.8c1b1a4f.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./uuid.2b29000c.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./get.49a42f2e.js";import"./DeleteOutlined.247d1f35.js";import"./index.a8c197b8.js";import"./useRefs.e81831e2.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./index.c05f9254.js";import"./FullscreenOutlined.401a7bcd.js";import"./index.0fb15725.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.32117fb5.js";import"./index.dd1f987c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f8a2fd00.js";import"./index.2ed1a060.js";/* empty css              *//* empty css              */import"./index.e8daa066.js";import"./index.81899e8a.js";import"./index.ffb8ac7d.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";const b=[{title:"ID",dataIndex:"id"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],x=y({components:{BasicTable:_,TableImg:E,Tag:f,Avatar:B},setup(){const[a]=T({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:I,columns:b,bordered:!0,showTableSetting:!0});return{registerTable:a}}}),h={class:"p-4"};function D(a,v,w,L,S,$){const n=u("Tag"),F=u("Avatar"),d=u("TableImg"),g=u("BasicTable");return t(),c("div",h,[A(g,{onRegister:a.registerTable},{bodyCell:m(({column:e,record:o,text:l})=>[e.key==="id"?(t(),c(C,{key:0},[p(" ID: "+s(o.id),1)],64)):i("",!0),e.key==="no"?(t(),r(n,{key:1,color:"green"},{default:m(()=>[p(s(o.no),1)]),_:2},1024)):i("",!0),e.key==="avatar"?(t(),r(F,{key:2,size:60,src:o.avatar},null,8,["src"])):i("",!0),e.key==="imgArr"?(t(),r(d,{key:3,size:60,simpleShow:!0,imgList:l},null,8,["imgList"])):i("",!0),e.key==="imgs"?(t(),r(d,{key:4,size:60,imgList:l},null,8,["imgList"])):i("",!0),e.key==="category"?(t(),r(n,{key:5,color:"green"},{default:m(()=>[p(s(o.no),1)]),_:2},1024)):i("",!0)]),_:1},8,["onRegister"])])}var St=k(x,[["render",D]]);export{St as default};
