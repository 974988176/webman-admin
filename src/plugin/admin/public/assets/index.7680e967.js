import{a as _,aK as v,r as t,b,f as x,k as e,o as y,h as w,j as H,p as k,i as S,n as c,bc as l,aI as z,aP as R}from"./index.0d073eaa.js";import{u as C}from"./useWindowSizeFn.ef20ece8.js";import{a as B}from"./useContentViewHeight.01b9d1c6.js";const L=["src"],$=_({__name:"index",props:{frameSrc:v.string.def("")},setup(p){const i=t(!0),g=t(50),s=t(window.innerHeight),o=t(),{headerHeightRef:m}=B(),{prefixCls:r}=b("iframe-page");C(d,150,{immediate:!0});const f=x(()=>({height:`${e(s)}px`}));function d(){const n=e(o);if(!n)return;const a=m.value;g.value=a,s.value=window.innerHeight-a;const u=document.documentElement.clientHeight-a;n.style.height=`${u}px`}function h(){i.value=!1,d()}return(n,a)=>(y(),w("div",{class:c(e(r)),style:l(e(f))},[H(e(z),{spinning:i.value,size:"large",style:l(e(f))},{default:k(()=>[S("iframe",{src:p.frameSrc,class:c(`${e(r)}__main`),ref_key:"frameRef",ref:o,onLoad:h},null,42,L)]),_:1},8,["spinning","style"])],6))}});var N=R($,[["__scopeId","data-v-179381bf"]]);export{N as default};
