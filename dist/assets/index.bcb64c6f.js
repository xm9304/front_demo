var b=Object.defineProperty,w=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var l=(n,e,a)=>e in n?b(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,p=(n,e)=>{for(var a in e||(e={}))A.call(e,a)&&l(n,a,e[a]);if(d)for(var a of d(e))D.call(e,a)&&l(n,a,e[a]);return n},_=(n,e)=>w(n,M(e));import E from"./index.f02f36d7.js";import I from"./index.18a0196f.js";import F from"./index.f099b615.js";import L from"./index.652e6370.js";import N from"./index.68f52af7.js";import{_ as S,d as h,f as g,r as U,g as f,o as t,c as v,a as s,b as V,w as r,F as z,l as K,k as i,I as y,t as R}from"./index.3186fae8.js";import"./avatar.d240db71.js";import"./system.1c32aeb3.js";import"./axios.41755a39.js";const $={class:"system-manage"},j={class:"left"},q={class:"right"},G=h({name:"SystemManage"}),H=h(_(p({},G),{setup(n){const e=g("01"),a=g(0),u=U([{id:"01",name:"\u90E8\u95E8\u7BA1\u7406",value:I,icon:"icon-mind-mapping"},{id:"02",name:"\u7528\u6237\u7BA1\u7406",value:F,icon:"icon-user-group"},{id:"03",name:"\u89D2\u8272\u7BA1\u7406",value:L,icon:"icon-robot"},{id:"04",name:"\u83DC\u5355\u7BA1\u7406",value:N,icon:"icon-menu"},{id:"05",name:"\u4E2A\u4EBA\u4E2D\u5FC3",value:E,icon:"icon-user"}]),x=(c,m)=>{e.value=c.id,a.value=m};return(c,m)=>{const k=f("a-menu-item"),C=f("a-menu");return t(),v("div",$,[s("section",j,[V(C,{style:{width:"200px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":[e.value],"show-collapse-button":""},{default:r(()=>[(t(!0),v(z,null,K(u,(o,B)=>(t(),i(k,{key:o.id,onClick:J=>x(o,B)},{icon:r(()=>[(t(),i(y(o.icon),{size:18}))]),default:r(()=>[s("span",null,R(o.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["default-selected-keys"])]),s("section",q,[(t(),i(y(u[a.value].value)))])])}}}));var ne=S(H,[["__scopeId","data-v-9f873c96"]]);export{ne as default};
