import{aP as _,a as f,cB as g,r as C,bz as u,aQ as l,o as h,aR as k,p as o,j as t,q as n,t as F,i as w}from"./index.0d073eaa.js";import{P as S}from"./index.566277e5.js";import"./index.e9a84cba.js";import"./index.0972fd96.js";import"./useSize.bb4e5ce5.js";import"./eagerComputed.156e81ff.js";import"./useWindowSizeFn.ef20ece8.js";import"./useContentViewHeight.01b9d1c6.js";import"./ArrowLeftOutlined.90d2e05e.js";import"./index.8680e4c4.js";import"./transButton.8c1b1a4f.js";const y=f({components:{CollapseContainer:g,PageWrapper:S},setup(){const e=C(null),{enter:s,toggle:a,exit:i,isFullscreen:c}=u(),{toggle:m}=u(e);return{enter:s,toggleDom:m,toggle:a,isFullscreen:c,exit:i,domRef:e}}}),D=n(" Enter Window Full Screen "),W=n(" Toggle Window Full Screen "),b=n(" Exit Window Full Screen "),x=n(" Enter Dom Full Screen "),B={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},P=n(" Exit Dom Full Screen ");function E(e,s,a,i,c,m){const r=l("a-button"),p=l("CollapseContainer"),d=l("PageWrapper");return h(),k(d,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:o(()=>[t(p,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.enter,class:"mr-2"},{default:o(()=>[D]),_:1},8,["onClick"]),t(r,{color:"success",onClick:e.toggle,class:"mr-2"},{default:o(()=>[W]),_:1},8,["onClick"]),t(r,{color:"error",onClick:e.exit,class:"mr-2"},{default:o(()=>[b]),_:1},8,["onClick"]),n(" Current State: "+F(e.isFullscreen),1)]),_:1}),t(p,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[x]),_:1},8,["onClick"])]),_:1}),w("div",B,[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[P]),_:1},8,["onClick"])],512)]),_:1})}var G=_(y,[["render",E]]);export{G as default};
