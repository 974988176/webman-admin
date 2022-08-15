var z=Object.defineProperty,R=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var P=(t,e,r)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))L.call(e,r)&&P(t,r,e[r]);if(v)for(var r of v(e))U.call(e,r)&&P(t,r,e[r]);return t},b=(t,e)=>R(t,V(e));import{a as q,r as F,b as G,cy as H,f as d,k as s,j as u,b3 as C,cz as J,aU as K,cA as Q,cB as T,a$ as X,cx as Y}from"./index.0d073eaa.js";import{D as S}from"./index.875b4490.js";import{g as Z}from"./get.49a42f2e.js";function tt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!J(t)}const et={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:t=>["small","default","middle",void 0].includes(t),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}};var nt=q({name:"Description",props:et,emits:["register"],setup(t,{slots:e,emit:r}){const m=F(null),{prefixCls:_}=G("description"),w=H(),g=d(()=>o(o({},t),s(m))),f=d(()=>b(o({},s(g)),{title:void 0})),$=d(()=>!!s(g).title),A=d(()=>o({canExpand:!1},s(f).collapseOptions)),B=d(()=>o(o({},s(w)),s(f)));function E(n){m.value=o(o({},s(m)),n)}function I({label:n,labelMinWidth:i,labelStyle:a}){if(!a&&!i)return n;const l=b(o({},a),{minWidth:`${i}px `});return u("div",{style:l},[n])}function M(){const{schema:n,data:i}=s(f);return s(n).map(a=>{const{render:l,field:h,span:W,show:x,contentMinWidth:D}=a;if(x&&C(x)&&!x(i))return null;const O=()=>{var j;const c=(j=s(f))==null?void 0:j.data;if(!c)return null;const p=Z(c,h);return p&&!X(c).hasOwnProperty(h)?C(l)?l("",c):"":C(l)?l(p,c):p!=null?p:""},k=D;return u(S.Item,{label:I(a),key:h,span:W},{default:()=>{if(!D)return O();const c={minWidth:`${k}px`};return u("div",{style:c},[O()])}})}).filter(a=>!!a)}const y=()=>{let n;return u(S,K({class:`${_}`},s(B)),tt(n=M())?n:{default:()=>[n]})},N=()=>{const n=t.useCollapse?y():u("div",null,[y()]);if(!t.useCollapse)return n;const{canExpand:i,helpMessage:a}=s(A),{title:l}=s(g);return u(T,{title:l,canExpan:i,helpMessage:a},{default:()=>n,action:()=>Q(e,"action")})};return r("register",{setDescProps:E}),()=>s($)?N():y()}});const ct=Y(nt);export{ct as D};
