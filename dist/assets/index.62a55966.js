var b=Object.defineProperty,w=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var l=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))A.call(e,a)&&l(t,a,e[a]);if(d)for(var a of d(e))D.call(e,a)&&l(t,a,e[a]);return t},_=(t,e)=>w(t,M(e));import E from"./index.d627a539.js";import F from"./index.414dc901.js";import I from"./index.13a17ec8.js";import N from"./index.72a09fe0.js";import z from"./index.092ce0fd.js";import{_ as L,d as h,r as g,g as S,h as f,o as n,c as v,a as s,b as U,w as r,F as V,z as K,l as i,N as y,y as R}from"./index.670b3728.js";import"./index.5ba9d294.js";import"./system.76d5e06c.js";import"./GiSvgIcon.9b98d9d6.js";import"./GiTitle.1022c6ca.js";import"./index.88aaa5a8.js";import"./usePagination.d9e17d5c.js";import"./viewer.ecc815ea.js";import"./avatar.d240db71.js";import"./useArea.a1c854e7.js";const $={class:"system-manage"},j={class:"left"},q={class:"right"},G=h({name:"SystemManage"}),H=h(_(p({},G),{setup(t){const e=g("01"),a=g(0),m=S([{id:"01",name:"\u90E8\u95E8\u7BA1\u7406",value:F,icon:"icon-mind-mapping"},{id:"02",name:"\u7528\u6237\u7BA1\u7406",value:I,icon:"icon-user-group"},{id:"03",name:"\u89D2\u8272\u7BA1\u7406",value:N,icon:"icon-robot"},{id:"04",name:"\u83DC\u5355\u7BA1\u7406",value:z,icon:"icon-menu"},{id:"05",name:"\u4E2A\u4EBA\u4E2D\u5FC3",value:E,icon:"icon-user"}]),x=(u,c)=>{e.value=u.id,a.value=c};return(u,c)=>{const k=f("a-menu-item"),C=f("a-menu");return n(),v("div",$,[s("section",j,[U(C,{style:{width:"200px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":[e.value],"show-collapse-button":""},{default:r(()=>[(n(!0),v(V,null,K(m,(o,B)=>(n(),i(k,{key:o.id,onClick:J=>x(o,B)},{icon:r(()=>[(n(),i(y(o.icon),{size:18}))]),default:r(()=>[s("span",null,R(o.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["default-selected-keys"])]),s("section",q,[(n(),i(y(m[a.value].value)))])])}}}));var me=L(H,[["__scopeId","data-v-9f873c96"]]);export{me as default};
