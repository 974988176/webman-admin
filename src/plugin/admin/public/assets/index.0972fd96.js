import{a as V,y as X,r as f,C as D,f as G,cF as J,a1 as C,H as K,af as z,c1 as Q,M as o,j as g,_,cd as U,N as A,S as Y,aq as Z}from"./index.0d073eaa.js";import{u as $}from"./useSize.bb4e5ce5.js";import{e as aa}from"./eagerComputed.156e81ff.js";var ta=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:X.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},ea=V({name:"AAvatar",inheritAttrs:!1,props:ta(),slots:["icon"],setup:function(a,w){var x=w.slots,d=w.attrs,p=f(!0),j=f(!1),h=f(1),m=f(null),b=f(null),P=D("avatar",a),I=P.prefixCls,N=$(),n=G(function(){return a.size==="default"?N.value:a.size}),O=J(),l=aa(function(){if(Y(a.size)==="object"){var e=Z.find(function(r){return O.value[r]}),t=a.size[e];return t}}),R=function(t){return l.value?{width:"".concat(l.value,"px"),height:"".concat(l.value,"px"),lineHeight:"".concat(l.value,"px"),fontSize:"".concat(t?l.value/2:18,"px")}:{}},y=function(){if(!(!m.value||!b.value)){var t=m.value.offsetWidth,r=b.value.offsetWidth;if(t!==0&&r!==0){var s=a.gap,c=s===void 0?4:s;c*2<r&&(h.value=r-c*2<t?(r-c*2)/t:1)}}},T=function(){var t=a.loadError,r=t==null?void 0:t();r!==!1&&(p.value=!1)};return C(function(){return a.src},function(){z(function(){p.value=!0,h.value=1})}),C(function(){return a.gap},function(){z(function(){y()})}),K(function(){z(function(){y(),j.value=!0})}),function(){var e,t,r=a.shape,s=a.src,c=a.alt,W=a.srcset,H=a.draggable,B=a.crossOrigin,v=Q(x,a,"icon"),i=I.value,F=(e={},o(e,"".concat(d.class),!!d.class),o(e,i,!0),o(e,"".concat(i,"-lg"),n.value==="large"),o(e,"".concat(i,"-sm"),n.value==="small"),o(e,"".concat(i,"-").concat(r),r),o(e,"".concat(i,"-image"),s&&p.value),o(e,"".concat(i,"-icon"),v),e),M=typeof n.value=="number"?{width:"".concat(n.value,"px"),height:"".concat(n.value,"px"),lineHeight:"".concat(n.value,"px"),fontSize:v?"".concat(n.value/2,"px"):"18px"}:{},k=(t=x.default)===null||t===void 0?void 0:t.call(x),u;if(s&&p.value)u=g("img",{draggable:H,src:s,srcset:W,onError:T,alt:c,crossorigin:B},null);else if(v)u=v;else if(j.value||h.value!==1){var S="scale(".concat(h.value,") translateX(-50%)"),q={msTransform:S,WebkitTransform:S,transform:S},L=typeof n.value=="number"?{lineHeight:"".concat(n.value,"px")}:{};u=g(U,{onResize:y},{default:function(){return[g("span",{class:"".concat(i,"-string"),ref:m,style:_(_({},L),q)},[k])]}})}else u=g("span",{class:"".concat(i,"-string"),ref:m,style:{opacity:0}},[k]);return g("span",A(A({},d),{},{ref:b,class:F,style:[M,R(!!v),d.style]}),[u])}}}),sa=ea;export{sa as A};
