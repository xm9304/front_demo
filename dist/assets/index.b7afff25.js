var r=Object.defineProperty,_=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var n=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,s=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(o)for(var t of o(a))u.call(a,t)&&n(e,t,a[t]);return e},c=(e,a)=>_(e,f(a));import{f as p,q as v,_ as m,d,U as h,z as g,k as x,o as k,c as I,p as w,e as S,a as y}from"./index.b2a3891b.js";function B(){const e=p(!0);return v(()=>{const a=document.querySelector("#iframe");a.attachEvent?a.attachEvent("onload",function(){e.value=!1}):a.onload=function(){e.value=!1}}),{loading:e}}const D=e=>(w("data-v-f04cfd4a"),e=e(),S(),e),E={class:"link-page"},b=D(()=>y("iframe",{id:"iframe",src:"https://arco.design/vue/component/button",frameborder:"0"},null,-1)),q=[b],z=d({name:"ArcoDesign"}),A=d(c(s({},z),{setup(e){const{loading:a}=B();return(t,C)=>{const i=h("loading");return g((k(),I("div",E,q)),[[i,x(a)]])}}}));var U=m(A,[["__scopeId","data-v-f04cfd4a"]]);export{U as default};