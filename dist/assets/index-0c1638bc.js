import{T as _e,r as q}from"./runtime-dom.esm-bundler-aa2e2a76.js";import{I as ve,C as ge,T as ye,S as re,F as Ce,f,o as a,d,R as H,Q as u,j as c,n as C,b as _,h as se,k as $e,l as ie,W as Ee,a9 as ke,v as Se,O as be,r as h,c as k,i as T,a as S,w as Oe,J as Ne}from"./_plugin-vue_export-helper-e17621df.js";const v=Object.prototype.toString;function x(e){return v.call(e)==="[object Array]"}function qt(e){return v.call(e)==="[object Null]"}function Xt(e){return v.call(e)==="[object Boolean]"}function le(e){return v.call(e)==="[object Object]"}const Ft=e=>v.call(e)==="[object Promise]";function V(e){return v.call(e)==="[object String]"}function $(e){return v.call(e)==="[object Number]"&&e===e}function we(e){return e===void 0}function W(e){return typeof e=="function"}function Jt(e){return le(e)&&Object.keys(e).length===0}function Qt(e){return e===window}const en=e=>(e==null?void 0:e.$)!==void 0;function tn(e){return le(e)&&"$y"in e&&"$M"in e&&"$D"in e&&"$d"in e&&"$H"in e&&"$m"in e&&"$s"in e}const Le=Symbol("ArcoConfigProvider");var Te=Object.defineProperty,Ie=Object.defineProperties,Pe=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,F=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t)=>{for(var n in t||(t={}))Me.call(t,n)&&F(e,n,t[n]);if(X)for(var n of X(t))je.call(t,n)&&F(e,n,t[n]);return e},ze=(e,t)=>Ie(e,Pe(t));const Be="A",Re="arco",U="$arco",nn=e=>{var t;return(t=e==null?void 0:e.componentPrefix)!=null?t:Be},on=(e,t)=>{var n;t&&t.classPrefix&&(e.config.globalProperties[U]=ze(Ae({},(n=e.config.globalProperties[U])!=null?n:{}),{classPrefix:t.classPrefix}))},p=e=>{var t,n,o;const r=ge(),s=ve(Le,void 0),i=(o=(n=s==null?void 0:s.prefixCls)!=null?n:(t=r==null?void 0:r.appContext.config.globalProperties[U])==null?void 0:t.classPrefix)!=null?o:Re;return e?`${i}-${e}`:i};var J;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(J||(J={}));var Q;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})(Q||(Q={}));const w=e=>Boolean(e&&e.shapeFlag&1),b=(e,t)=>Boolean(e&&e.shapeFlag&6),De=(e,t)=>Boolean(e&&e.shapeFlag&8),L=(e,t)=>Boolean(e&&e.shapeFlag&16),G=(e,t)=>Boolean(e&&e.shapeFlag&32),I=e=>{var t,n;if(e)for(const o of e){if(w(o)||b(o))return o;if(L(o,o.children)){const r=I(o.children);if(r)return r}else if(G(o,o.children)){const r=(n=(t=o.children).default)==null?void 0:n.call(t);if(r){const s=I(r);if(s)return s}}else if(x(o)){const r=I(o);if(r)return r}}},rn=e=>{if(!e)return!0;for(const t of e)if(t.children)return!1;return!0},He=(e,t)=>{if(e&&e.length>0)for(let n=0;n<e.length;n++){const o=e[n];if(w(o)||b(o)){const s=W(t)?t(o):t;return e[n]=ye(o,s,!0),!0}const r=Y(o);if(r&&r.length>0&&He(r,t))return!0}return!1},Y=e=>{if(L(e,e.children))return e.children;if(x(e))return e},ae=e=>{var t,n;if(w(e))return e.el;if(b(e)){if(((t=e.el)==null?void 0:t.nodeType)===1)return e.el;if((n=e.component)!=null&&n.subTree){const o=ae(e.component.subTree);if(o)return o}}else{const o=Y(e);return Ue(o)}},Ue=e=>{if(e&&e.length>0)for(const t of e){const n=ae(t);if(n)return n}},P=(e,t=!1)=>{var n,o;const r=[];for(const s of e??[])w(s)||b(s)||t&&De(s,s.children)?r.push(s):L(s,s.children)?r.push(...P(s.children,t)):G(s,s.children)?r.push(...P((o=(n=s.children).default)==null?void 0:o.call(n),t)):x(s)&&r.push(...P(s,t));return r};function sn(e){function t(n){const o=[];return n.forEach(r=>{var s,i;re(r)&&r.type===Ce?G(r,r.children)?o.push(...t(((i=(s=r.children).default)==null?void 0:i.call(s))||[])):L(r,r.children)?o.push(...t(r.children)):V(r.children)&&o.push(r.children):o.push(r)}),o}return t(e)}const ee=e=>{if(e)return W(e)?e:()=>e},ce=(e,t)=>{var n;const o=[];if(b(e,e.type))e.type.name===t?e.component&&o.push(e.component.uid):(n=e.component)!=null&&n.subTree&&o.push(...ce(e.component.subTree,t));else{const r=Y(e);r&&o.push(...xe(r,t))}return o},xe=(e,t)=>{const n=[];if(e&&e.length>0)for(const o of e)n.push(...ce(o,t));return n},Z=()=>{},K=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),ln=(()=>K?Z:(e,t,n,o=!1)=>{e.addEventListener(t,n,o)})(),an=(()=>K?Z:(e,t,n,o=!1)=>{e.removeEventListener(t,n,o)})(),cn=(e,t)=>{if(!e||!t)return!1;let n=t;for(;n;){if(n===e)return!0;n=n.parentNode}return!1},Ve=e=>{const t=document.createElement("div");return t.setAttribute("class",`arco-overlay arco-overlay-${e}`),t},We=(e,t)=>{var n;return K?Z():(n=(t??document).querySelector(e))!=null?n:void 0},un=(e,t)=>{if(V(e)){const n=e[0]==="#"?`[id='${e.slice(1)}']`:e;return We(n,t)}return e},dn=(e,t)=>{const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return{top:n.top-o.top,bottom:o.bottom-n.bottom,left:n.left-o.left,right:o.right-n.right,width:n.width,height:n.height}},fn=e=>e.tagName==="BODY"?document.documentElement.scrollHeight>window.innerHeight:e.scrollHeight>e.offsetHeight,pn=e=>e.tagName==="BODY"?window.innerWidth-(document.documentElement.offsetWidth||document.body.offsetWidth):e.offsetWidth-e.clientWidth;var m=(e,t)=>{for(const[n,o]of t)e[n]=o;return e};const Ge=f({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(){return{prefixCls:p("icon-hover")}}});function Ye(e,t,n,o,r,s){return a(),d("span",{class:u([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:e.size!=="medium",[`${e.prefixCls}-disabled`]:e.disabled}])},[H(e.$slots,"default")],2)}var Ze=m(Ge,[["render",Ye]]);const Ke=f({name:"IconClose",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const t=p("icon"),n=c(()=>[t,`${t}-close`,{[`${t}-spin`]:e.spin}]),o=c(()=>{const r={};return e.size&&(r.fontSize=$(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:n,innerStyle:o}}}),qe=["stroke-width","stroke-linecap","stroke-linejoin"],Xe=_("path",{d:"M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"},null,-1),Fe=[Xe];function Je(e,t,n,o,r,s){return a(),d("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:u(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},Fe,14,qe)}var M=m(Ke,[["render",Je]]);const Qe=Object.assign(M,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+M.name,M)}}),et=f({name:"IconInfoCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const t=p("icon"),n=c(()=>[t,`${t}-info-circle-fill`,{[`${t}-spin`]:e.spin}]),o=c(()=>{const r={};return e.size&&(r.fontSize=$(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:n,innerStyle:o}}}),tt=["stroke-width","stroke-linecap","stroke-linejoin"],nt=_("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",fill:"currentColor",stroke:"none"},null,-1),ot=[nt];function rt(e,t,n,o,r,s){return a(),d("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:u(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},ot,14,tt)}var j=m(et,[["render",rt]]);const st=Object.assign(j,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+j.name,j)}}),it=f({name:"IconCheckCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const t=p("icon"),n=c(()=>[t,`${t}-check-circle-fill`,{[`${t}-spin`]:e.spin}]),o=c(()=>{const r={};return e.size&&(r.fontSize=$(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:n,innerStyle:o}}}),lt=["stroke-width","stroke-linecap","stroke-linejoin"],at=_("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",fill:"currentColor",stroke:"none"},null,-1),ct=[at];function ut(e,t,n,o,r,s){return a(),d("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:u(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},ct,14,lt)}var A=m(it,[["render",ut]]);const dt=Object.assign(A,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+A.name,A)}}),ft=f({name:"IconExclamationCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const t=p("icon"),n=c(()=>[t,`${t}-exclamation-circle-fill`,{[`${t}-spin`]:e.spin}]),o=c(()=>{const r={};return e.size&&(r.fontSize=$(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:n,innerStyle:o}}}),pt=["stroke-width","stroke-linecap","stroke-linejoin"],mt=_("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",fill:"currentColor",stroke:"none"},null,-1),ht=[mt];function _t(e,t,n,o,r,s){return a(),d("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:u(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},ht,14,pt)}var z=m(ft,[["render",_t]]);const vt=Object.assign(z,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+z.name,z)}}),gt=f({name:"IconCloseCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const t=p("icon"),n=c(()=>[t,`${t}-close-circle-fill`,{[`${t}-spin`]:e.spin}]),o=c(()=>{const r={};return e.size&&(r.fontSize=$(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:n,innerStyle:o}}}),yt=["stroke-width","stroke-linecap","stroke-linejoin"],Ct=_("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",fill:"currentColor",stroke:"none"},null,-1),$t=[Ct];function Et(e,t,n,o,r,s){return a(),d("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:u(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},$t,14,yt)}var B=m(gt,[["render",Et]]);const kt=Object.assign(B,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+B.name,B)}}),St=["info","success","warning","error"],mn=["onFocus","onFocusin","onFocusout","onBlur","onChange","onBeforeinput","onInput","onReset","onSubmit","onInvalid","onKeydown","onKeypress","onKeyup","onCopy","onCut","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onSelect","autocomplete","autofocus","maxlength","minlength","name","pattern","readonly","required"],bt=f({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const t=p("icon"),n=c(()=>[t,`${t}-loading`,{[`${t}-spin`]:e.spin}]),o=c(()=>{const r={};return e.size&&(r.fontSize=$(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:n,innerStyle:o}}}),Ot=["stroke-width","stroke-linecap","stroke-linejoin"],Nt=_("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),wt=[Nt];function Lt(e,t,n,o,r,s){return a(),d("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:u(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},wt,14,Ot)}var R=m(bt,[["render",Lt]]);const Tt=Object.assign(R,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+R.name,R)}}),It=1e3,Pt=5e3,Mt=1;class jt{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=t=>(t==="message"?Array.from(this.popupStack.message).pop()||Pt:Array.from(this.popupStack.popup).pop()||It)+Mt,this.add=t=>{const n=this.getNextZIndex(t);return this.popupStack[t].add(n),t==="dialog"&&this.popupStack.popup.add(n),n},this.delete=(t,n)=>{this.popupStack[n].delete(t),n==="dialog"&&this.popupStack.popup.delete(t)},this.isLastDialog=t=>this.popupStack.dialog.size>1?t===Array.from(this.popupStack.dialog).pop():!0}}const D=new jt;function At(e,{visible:t,runOnMounted:n}={}){const o=se(0),r=()=>{o.value=D.add(e)},s=()=>{D.delete(o.value,e)},i=()=>e==="dialog"?D.isLastDialog(o.value):!1;return $e(()=>t==null?void 0:t.value,l=>{l?r():s()},{immediate:!0}),n&&(ie(()=>{r()}),Ee(()=>{s()})),{zIndex:ke(o),open:r,close:s,isLastDialog:i}}const zt=f({name:"Message",components:{AIconHover:Ze,IconInfoCircleFill:st,IconCheckCircleFill:dt,IconExclamationCircleFill:vt,IconCloseCircleFill:kt,IconClose:Qe,IconLoading:Tt},props:{type:{type:String,default:"info"},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},duration:{type:Number,default:3e3},resetOnUpdate:{type:Boolean,default:!1},resetOnHover:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=p("message");let o=0;const r=()=>{t("close")},s=()=>{e.duration>0&&(o=window.setTimeout(r,e.duration))},i=()=>{o&&(window.clearTimeout(o),o=0)};return ie(()=>{s()}),Se(()=>{e.resetOnUpdate&&(i(),s())}),be(()=>{i()}),{handleMouseEnter:()=>{e.resetOnHover&&i()},handleMouseLeave:()=>{e.resetOnHover&&s()},prefixCls:n,handleClose:r}}});function Bt(e,t,n,o,r,s){const i=h("icon-info-circle-fill"),l=h("icon-check-circle-fill"),g=h("icon-exclamation-circle-fill"),fe=h("icon-close-circle-fill"),pe=h("icon-loading"),me=h("icon-close"),he=h("a-icon-hover");return a(),d("li",{role:"alert",class:u([e.prefixCls,`${e.prefixCls}-${e.type}`,{[`${e.prefixCls}-closable`]:e.closable}]),onMouseenter:t[1]||(t[1]=(...E)=>e.handleMouseEnter&&e.handleMouseEnter(...E)),onMouseleave:t[2]||(t[2]=(...E)=>e.handleMouseLeave&&e.handleMouseLeave(...E))},[e.showIcon?(a(),d("span",{key:0,class:u(`${e.prefixCls}-icon`)},[H(e.$slots,"icon",{},()=>[e.type==="info"?(a(),k(i,{key:0})):e.type==="success"?(a(),k(l,{key:1})):e.type==="warning"?(a(),k(g,{key:2})):e.type==="error"?(a(),k(fe,{key:3})):e.type==="loading"?(a(),k(pe,{key:4})):T("v-if",!0)])],2)):T("v-if",!0),_("span",{class:u(`${e.prefixCls}-content`)},[H(e.$slots,"default")],2),e.closable?(a(),d("span",{key:1,class:u(`${e.prefixCls}-close-btn`),onClick:t[0]||(t[0]=(...E)=>e.handleClose&&e.handleClose(...E))},[S(he,null,{default:Oe(()=>[S(me)]),_:1})],2)):T("v-if",!0)],34)}var Rt=m(zt,[["render",Bt]]);function Dt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!re(e)}var Ht=f({name:"MessageList",props:{messages:{type:Array,default:()=>[]},position:{type:String,default:"top"}},emits:["close","afterClose"],setup(e,t){const n=p("message-list"),{zIndex:o}=At("message",{runOnMounted:!0});return()=>{let r;return S(_e,{class:[n,`${n}-${e.position}`],name:"fade-message",tag:"ul",style:{zIndex:o.value},onAfterLeave:()=>t.emit("afterClose")},Dt(r=e.messages.map(s=>{const i={default:ee(s.content),icon:ee(s.icon)};return S(Rt,{key:s.id,type:s.type,duration:s.duration,closable:s.closable,resetOnUpdate:s.resetOnUpdate,resetOnHover:s.resetOnHover,onClose:()=>t.emit("close",s.id)},i)}))?r:{default:()=>[r]})}}}),Ut=Object.defineProperty,xt=Object.defineProperties,Vt=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,Wt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable,ne=(e,t,n)=>t in e?Ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))Wt.call(t,n)&&ne(e,n,t[n]);if(te)for(var n of te(t))Gt.call(t,n)&&ne(e,n,t[n]);return e},ue=(e,t)=>xt(e,Vt(t));class Yt{constructor(t,n){this.messageCount=0,this.add=s=>{var i;this.messageCount++;const l=(i=s.id)!=null?i:`__arco_message_${this.messageCount}`;if(this.messageIds.has(l))return this.update(l,s);const g=Ne(N({id:l},s));return this.messages.value.push(g),this.messageIds.add(l),{close:()=>this.remove(l)}},this.update=(s,i)=>{for(let l=0;l<this.messages.value.length;l++)if(this.messages.value[l].id===s){const g=!we(i.duration);Object.assign(this.messages.value[l],ue(N({},i),{id:s,resetOnUpdate:g}));break}return{close:()=>this.remove(s)}},this.remove=s=>{for(let i=0;i<this.messages.value.length;i++){const l=this.messages.value[i];if(l.id===s){W(l.onClose)&&l.onClose(s),this.messages.value.splice(i,1),this.messageIds.delete(s);break}}},this.clear=()=>{this.messages.value.splice(0)},this.destroy=()=>{this.messages.value.length===0&&this.container&&(q(null,this.container),document.body.removeChild(this.container),this.container=null,y[this.position]=void 0)};const{position:o="top"}=t;this.container=Ve("message"),this.messageIds=new Set,this.messages=se([]),this.position=o;const r=S(Ht,{messages:this.messages.value,position:o,onClose:this.remove,onAfterClose:this.destroy});(n??oe._context)&&(r.appContext=n??oe._context),q(r,this.container),document.body.appendChild(this.container)}}const y={},de=[...St,"loading"],O=de.reduce((e,t)=>(e[t]=(n,o)=>{V(n)&&(n={content:n});const r=N({type:t},n),{position:s="top"}=r;return y[s]||(y[s]=new Yt(r,o)),y[s].add(r)},e),{});O.clear=e=>{var t;e?(t=y[e])==null||t.clear():Object.values(y).forEach(n=>n==null?void 0:n.clear())};const oe=ue(N({},O),{install:e=>{const t={clear:O.clear};for(const n of de)t[n]=(o,r=e._context)=>O[n](o,r);e.config.globalProperties.$message=t},_context:null});export{x as A,Ue as B,Le as C,rn as D,He as E,Xt as F,dn as G,P as H,Ze as I,xe as J,tn as K,G as L,St as M,Ft as N,K as O,We as P,Jt as Q,sn as R,Z as S,pn as T,fn as U,cn as V,m as _,st as a,dt as b,vt as c,kt as d,Qe as e,ee as f,p as g,we as h,V as i,W as j,Ve as k,oe as l,en as m,I as n,un as o,ln as p,an as q,Qt as r,on as s,nn as t,At as u,$ as v,Tt as w,qt as x,le as y,mn as z};
