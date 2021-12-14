import{r as p,o as f,c as _,a as h,b as g,d as v,e as A,A as I,f as y}from"./vendor.52ecf1d7.js";const E=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};E();var L=(t,r)=>{const a=t.__vccOpts||t;for(const[n,e]of r)a[n]=e;return a};const O={};function P(t,r){const a=p("router-view");return f(),_(a)}var S=L(O,[["render",P]]);const R="modulepreload",u={},k="/",i=function(r,a){return!a||a.length===0?r():Promise.all(a.map(n=>{if(n=`${k}${n}`,n in u)return;u[n]=!0;const e=n.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":R,e||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),e)return new Promise((l,m)=>{s.addEventListener("load",l),s.addEventListener("error",m)})})).then(()=>r())},x=[{path:"/login",name:"Login",component:()=>i(()=>import("./index.a6d32e35.js"),["assets/index.a6d32e35.js","assets/index.0a4c37b2.css","assets/vendor.52ecf1d7.js"])},{path:"/",redirect:"/home",name:"Layout",component:()=>i(()=>import("./index.a63d0a53.js"),["assets/index.a63d0a53.js","assets/index.8d6ba9ef.css","assets/vendor.52ecf1d7.js","assets/avatar.d240db71.js"]),children:[{path:"/home",name:"Home",component:()=>i(()=>import("./index.0469b2fb.js"),["assets/index.0469b2fb.js","assets/index.8c64dd20.css","assets/avatar.d240db71.js","assets/vendor.52ecf1d7.js"]),meta:{title:"\u9996\u9875",keepAlive:!1}},{path:"/indicator-manage",name:"IndicatorManage",component:()=>i(()=>import("./index.503bbf89.js"),["assets/index.503bbf89.js","assets/index.6105f9ac.css","assets/vendor.52ecf1d7.js"]),meta:{title:"\u6307\u6807\u7BA1\u7406",keepAlive:!1}},{path:"/indicator-manage/add",name:"IndicatorManageAdd",component:()=>i(()=>import("./index.ee839448.js"),["assets/index.ee839448.js","assets/index.26a43b1b.css","assets/vendor.52ecf1d7.js"]),meta:{title:"\u6307\u6807\u7BA1\u7406-\u65B0\u589E",keepAlive:!1}},{path:"/indicator-manage/detail",name:"IndicatorManageDetail",component:()=>i(()=>import("./index.c0f54f6d.js"),["assets/index.c0f54f6d.js","assets/index.284886af.css","assets/vendor.52ecf1d7.js"]),meta:{title:"\u6307\u6807\u7BA1\u7406-\u8BE6\u60C5",keepAlive:!1}},{path:"/user",name:"user",component:()=>i(()=>import("./index.8d4c9820.js"),["assets/index.8d4c9820.js","assets/index.b74d030b.css","assets/avatar.d240db71.js","assets/vendor.52ecf1d7.js"]),meta:{title:"\u4E2A\u4EBA\u4E2D\u5FC3",keepAlive:!1}}]}],d=h({history:g(),routes:x});d.onError(t=>{console.log("error:",t)});const b={systemName:"GI\u6570\u636E\u91C7\u96C6\u7BA1\u7406\u7CFB\u7EDF",activePath:JSON.parse(localStorage.getItem("ActivePath"))||"/home",menuList:[{icon:"IconRobot",id:"GZT",name:"\u5DE5\u4F5C\u53F0",path:"/home"},{icon:"IconCopyright",id:"ZBGL",name:"\u6307\u6807\u7BA1\u7406",path:"/indicator-manage"},{icon:"IconSettings",id:"ZBGL",name:"\u4E2A\u4EBA\u4E2D\u5FC3",path:"/user"}]},V={storeGetMenuList(t){return t.menuList}},j={storeSetActivePath(t,r){t.activePath=r,localStorage.setItem("ActivePath",JSON.stringify(r))}};var D={namespaced:!0,state:b,getters:V,mutations:j};const N={user:JSON.parse(localStorage.getItem("USER"))||{account:"",deptId:"",email:"",id:"",isAdmin:!1,name:"",phone:""}},T={storeUser(t){return t.user}},$={storeSetUser(t,r){const{account:a,deptId:n,email:e,id:o,isAdmin:s,name:l,phone:m}=r;t.user={account:a,deptId:n,email:e,id:o,isAdmin:s,name:l,phone:m},localStorage.setItem("USER",JSON.stringify(t.user))}},G={};var w={namespaced:!0,state:N,getters:T,mutations:$,actions:G};const B=v({modules:{app:D,user:w}});const c=A(S);c.use(d);c.use(B);c.use(I);c.use(y);c.mount("#app");export{L as _};
