import{I as B}from"./index.98e89309.js";import{B as h}from"./TableImg.2aabef6a.js";import"./BasicForm.d11b68fd.js";import{P as S}from"./index.566277e5.js";import{aP as E,a as F,r as I,aQ as e,o as i,aR as d,p as s,j as f,h as b,aW as g,F as C,q as P}from"./index.0d073eaa.js";import"./index.c05f9254.js";import"./useWindowSizeFn.ef20ece8.js";import"./FullscreenOutlined.401a7bcd.js";import"./useForm.868c8e81.js";import"./index.965098be.js";import"./Checkbox.476f6e92.js";import"./index.1491cab6.js";import"./index.e8b360cf.js";import"./eagerComputed.156e81ff.js";import"./index.7075e2b7.js";import"./index.04f7e044.js";import"./index.e317a008.js";import"./uuid.2b29000c.js";import"./index.2b5ea4f6.js";import"./_baseIteratee.3919e7cf.js";import"./get.49a42f2e.js";import"./DeleteOutlined.247d1f35.js";import"./index.a8c197b8.js";import"./useRefs.e81831e2.js";import"./Form.48352728.js";import"./Col.a2eadc78.js";import"./useFlexGapSupport.474c31b7.js";import"./useSize.bb4e5ce5.js";import"./index.0fb15725.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.32117fb5.js";import"./index.dd1f987c.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f8a2fd00.js";import"./index.2ed1a060.js";/* empty css              *//* empty css              */import"./index.e8daa066.js";import"./index.81899e8a.js";import"./index.ffb8ac7d.js";import"./download.bb4c9304.js";import"./base64Conver.08b9f4ec.js";import"./index.31930d74.js";import"./index.1d29734e.js";import"./uniqBy.ac0f9c38.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";const k=F({components:{BasicTable:h,ImpExcel:B,PageWrapper:S},setup(){const t=I([]);function c(p){t.value=[],console.log(p);for(const n of p){const{header:u,results:l,meta:{sheetName:m}}=n,o=[];for(const r of u)o.push({title:r,dataIndex:r});t.value.push({title:m,dataSource:l,columns:o})}}return{loadDataSuccess:c,tableListRef:t}}}),v=P(" \u5BFC\u5165Excel ");function D(t,c,p,n,u,l){const m=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return i(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:s(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:s(()=>[f(m,{class:"m-3"},{default:s(()=>[v]),_:1})]),_:1},8,["onSuccess"]),(i(!0),b(C,null,g(t.tableListRef,(a,x)=>(i(),d(r,{key:x,title:a.title,columns:a.columns,dataSource:a.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var kt=E(k,[["render",D]]);export{kt as default};
