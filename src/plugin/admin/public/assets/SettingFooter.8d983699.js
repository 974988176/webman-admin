import{aG as k,a as h,dp as b,b as R,dE as v,l as O,dx as M,aI as c,o as T,h as x,j as o,p as i,q as d,t as u,n as A,c as B,fg as P,k as C,dP as m,f4 as $,f5 as j,x as F}from"./index.656c725e.js";import{C as I}from"./CopyOutlined.b755f8d6.js";import{R as N}from"./RedoOutlined.b54223ae.js";const w=h({name:"SettingFooter",components:{CopyOutlined:I,RedoOutlined:N},setup(){const e=b(),{prefixCls:p}=R("setting-footer"),{t:s}=B(),{createSuccessModal:g,createMessage:r}=F(),f=v(),l=O(),t=M();function a(){const{isSuccessRef:n}=P(JSON.stringify(C(t.getProjectConfig),null,2));C(n)&&g({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function S(){try{t.setProjectConfig(m);const{colorWeak:n,grayMode:_}=m;$(n),j(_),r.success(s("layout.setting.resetSuccess"))}catch(n){r.error(n)}}function y(){localStorage.clear(),t.resetAllState(),e.resetState(),f.resetState(),l.resetState(),location.reload()}return{prefixCls:p,t:s,handleCopy:a,handleResetSetting:S,handleClearAndRedo:y}}});function D(e,p,s,g,r,f){const l=c("CopyOutlined"),t=c("a-button"),a=c("RedoOutlined");return T(),x("div",{class:A(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),d(" "+u(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(a,{class:"mr-2"}),d(" "+u(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(a,{class:"mr-2"}),d(" "+u(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var W=k(w,[["render",D],["__scopeId","data-v-2d4de409"]]);export{W as default};