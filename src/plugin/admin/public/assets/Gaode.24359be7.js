var c=(e,r,t)=>new Promise((n,o)=>{var i=a=>{try{s(t.next(a))}catch(p){o(p)}},f=a=>{try{s(t.throw(a))}catch(p){o(p)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(i,f);s((t=t.apply(e,r)).next())});import{u as d}from"./useScript.77b2b9d3.js";import{aP as u,a as l,r as m,H as h,o as w,h as M,bc as _,af as y,k as b}from"./index.0d073eaa.js";const g="https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b",k=l({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:r}=d({src:g});function t(){return c(this,null,function*(){yield r(),yield y();const n=b(e);if(!n)return;const o=window.AMap;new o.Map(n,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})})}return h(()=>{t()}),{wrapRef:e}}});function v(e,r,t,n,o,i){return w(),M("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var x=u(k,[["render",v]]);export{x as default};
