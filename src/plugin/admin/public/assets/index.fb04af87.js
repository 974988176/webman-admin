var w=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,y=(e,t)=>{for(var o in t||(t={}))E.call(t,o)&&B(e,o,t[o]);if(b)for(var o of b(t))I.call(t,o)&&B(e,o,t[o]);return e},F=(e,t)=>A(e,C(t));import{aP as V,a as L,I as f,m as O,fi as P,E as S,f as h,eJ as W,a$ as x,aQ as r,o as g,aR as N,p as u,i as s,j as l,q as c,t as d,h as k,aW as $,F as R}from"./index.0d073eaa.js";import{T as J}from"./index.e317a008.js";import{P as M}from"./index.566277e5.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useSize.bb4e5ce5.js";import"./eagerComputed.156e81ff.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";const U=L({components:{PageWrapper:M,[f.name]:f,InputTextArea:f.TextArea,Tag:J},setup(){const e=O({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:o,send:v,close:T,open:D}=P(e.server,{autoReconnect:!1,heartbeat:!0});S(()=>{if(o.value)try{const a=JSON.parse(o.value);e.recordList.push(a)}catch(a){e.recordList.push({res:o.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const n=h(()=>t.value==="OPEN"),p=h(()=>n.value?"success":"red"),i=h(()=>[...e.recordList].reverse());function m(){v(e.sendValue),e.sendValue=""}function _(){n.value?T():D()}return F(y({status:t,formatToDateTime:W},x(e)),{handlerSend:m,getList:i,toggle:_,getIsOpen:n,getTagColor:p})}}),j={class:"flex"},q={class:"w-1/3 bg-white p-4"},Q={class:"flex items-center"},z=s("span",{class:"text-lg font-medium mr-4"}," \u8FDE\u63A5\u72B6\u6001: ",-1),G=s("hr",{class:"my-4"},null,-1),H={class:"flex"},K=c(" \u670D\u52A1\u5730\u5740 "),X=s("p",{class:"text-lg font-medium mt-4"},"\u8BBE\u7F6E",-1),Y=s("hr",{class:"my-4"},null,-1),Z=c(" \u53D1\u9001 "),ee={class:"w-2/3 bg-white ml-4 p-4"},te=s("span",{class:"text-lg font-medium mr-4"}," \u6D88\u606F\u8BB0\u5F55: ",-1),se=s("hr",{class:"my-4"},null,-1),oe={class:"max-h-80 overflow-auto"},ae={class:"flex items-center"},ne=s("span",{class:"mr-2 text-primary font-medium"},"\u6536\u5230\u6D88\u606F:",-1);function re(e,t,o,v,T,D){const n=r("Tag"),p=r("a-input"),i=r("a-button"),m=r("InputTextArea"),_=r("PageWrapper");return g(),N(_,{title:"WebSocket \u793A\u4F8B"},{default:u(()=>[s("div",j,[s("div",q,[s("div",Q,[z,l(n,{color:e.getTagColor},{default:u(()=>[c(d(e.status),1)]),_:1},8,["color"])]),G,s("div",H,[l(p,{value:e.server,"onUpdate:value":t[0]||(t[0]=a=>e.server=a),disabled:""},{addonBefore:u(()=>[K]),_:1},8,["value"]),l(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:u(()=>[c(d(e.getIsOpen?"\u5173\u95ED\u8FDE\u63A5":"\u5F00\u542F\u8FDE\u63A5"),1)]),_:1},8,["type","onClick"])]),X,Y,l(m,{placeholder:"\u9700\u8981\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u5185\u5BB9",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[1]||(t[1]=a=>e.sendValue=a),allowClear:""},null,8,["disabled","value"]),l(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:u(()=>[Z]),_:1},8,["disabled","onClick"])]),s("div",ee,[te,se,s("div",oe,[s("ul",null,[(g(!0),k(R,null,$(e.getList,a=>(g(),k("li",{class:"mt-2",key:a.time},[s("div",ae,[ne,s("span",null,d(e.formatToDateTime(a.time)),1)]),s("div",null,d(a.res),1)]))),128))])])])])]),_:1})}var De=V(U,[["render",re]]);export{De as default};
