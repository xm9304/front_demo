import{e as y,q as z,r as a,o as p,c as f,w as c,a as o,g as w,D as N,C as D,t as A,u as v,F as L,z as q,B as P,h,i as U,E as M,G as K,H as j,I as V,T as O,K as J,J as Q,L as W}from"./vendor.7906bdb0.js";import{u as $,a as X,b as G}from"./index.edb41901.js";import{_ as k}from"./index.700e99ba.js";import{_ as Y}from"./avatar.d240db71.js";import{u as Z,a as ee}from"./index.a01faaf0.js";const ne=r=>(q("data-v-0ed731b7"),r=r(),P(),r),te=ne(()=>h("div",{class:"logo"},null,-1)),oe=y({setup(r){const n=z(),i=$(),t=u=>{i.setActivePath(u.path),n.push(u.path)};return(u,m)=>{const e=a("GiSvgIcon"),l=a("a-menu-item"),s=a("a-menu"),_=a("a-layout-sider");return p(),f(_,{collapsible:"",breakpoint:"xl",class:"gi-aside"},{default:c(()=>[te,o(s,{"selected-keys":[v(i).activePath],style:{width:"100%",height:"100%"}},{default:c(()=>[(p(!0),w(L,null,N(v(i).menuList,d=>(p(),f(l,{key:d.path,onClick:b=>t(d)},{icon:c(()=>[o(e,{class:"menu-icon",name:d.icon},null,8,["name"])]),default:c(()=>[D(" "+A(d.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["selected-keys"])]),_:1})}}});var se=k(oe,[["__scopeId","data-v-0ed731b7"]]),ae="./assets/logo.1ea765ca.png",R={exports:{}};/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/(function(r){(function(){var n=typeof window!="undefined"&&typeof window.document!="undefined"?window.document:{},i=r.exports,t=function(){for(var e,l=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,_=l.length,d={};s<_;s++)if(e=l[s],e&&e[1]in n){for(s=0;s<e.length;s++)d[l[0][s]]=e[s];return d}return!1}(),u={change:t.fullscreenchange,error:t.fullscreenerror},m={request:function(e,l){return new Promise(function(s,_){var d=function(){this.off("change",d),s()}.bind(this);this.on("change",d),e=e||n.documentElement;var b=e[t.requestFullscreen](l);b instanceof Promise&&b.then(d).catch(_)}.bind(this))},exit:function(){return new Promise(function(e,l){if(!this.isFullscreen){e();return}var s=function(){this.off("change",s),e()}.bind(this);this.on("change",s);var _=n[t.exitFullscreen]();_ instanceof Promise&&_.then(s).catch(l)}.bind(this))},toggle:function(e,l){return this.isFullscreen?this.exit():this.request(e,l)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,l){var s=u[e];s&&n.addEventListener(s,l,!1)},off:function(e,l){var s=u[e];s&&n.removeEventListener(s,l,!1)},raw:t};if(!t){i?r.exports={isEnabled:!1}:window.screenfull={isEnabled:!1};return}Object.defineProperties(m,{isFullscreen:{get:function(){return Boolean(n[t.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[t.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(n[t.fullscreenEnabled])}}}),i?r.exports=m:window.screenfull=m})()})(R);var E=R.exports;const ce=y({setup(r){const n=U(!1),i=()=>{n.value=E.isFullscreen},t=()=>{E.toggle()};return M(()=>{E.on("change",i)}),K(()=>{E.off("change",i)}),(u,m)=>{const e=a("icon-fullscreen"),l=a("icon-fullscreen-exit");return p(),w("span",{class:"gi-fullscreen-icon",onClick:t},[n.value?(p(),f(l,{key:1,style:{"font-size":"18px"}})):(p(),f(e,{key:0,style:{"font-size":"18px"}}))])}}});var le=k(ce,[["__scopeId","data-v-b8912720"]]);const re=y({setup(r){const n=$(),i=Z({selector:"body",attribute:"arco-theme",valueDark:"dark",valueLight:"light",storageKey:"arco-theme",onChanged(u){n.toggleTheme(u)}}),t=ee(i);return(u,m)=>{const e=a("a-button");return p(),f(e,{class:"toggle-theme-btn",size:"mini",onClick:v(t)},{icon:c(()=>[(p(),f(j(v(n).theme==="light"?"icon-sun-fill":"icon-moon-fill"),{size:18}))]),_:1},8,["onClick"])}}});var ie=k(re,[["__scopeId","data-v-6df983de"]]);const C=r=>(q("data-v-67ec94ed"),r=r(),P(),r),ue=C(()=>h("img",{src:ae},null,-1)),_e={class:"gi_hover"},de=C(()=>h("img",{src:Y},null,-1)),pe={class:"option-item"},me={style:{background:"#1677ff"}},fe=C(()=>h("span",null,"\u4E2A\u4EBA\u4E2D\u5FC3",-1)),he={class:"option-item"},ve={style:{background:"#ff7d00"}},ge=C(()=>h("span",null,"\u9000\u51FA\u767B\u5F55",-1)),be=y({setup(r){const n=z(),i=$(),t=X(),u=()=>{n.push("/")},m=()=>{n.push("/user")},e=()=>{V.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",hideCancel:!1,onOk:()=>{n.replace("/login")}})};return(l,s)=>{const _=a("icon-notification"),d=a("a-tooltip"),b=a("a-avatar"),S=a("icon-down"),B=a("a-button"),x=a("icon-user"),F=a("a-doption"),I=a("icon-export"),T=a("a-dropdown"),g=a("a-space"),H=a("a-layout-header");return p(),f(H,null,{default:c(()=>[h("section",{class:"system-logo",onClick:u},[ue,h("span",_e,A(v(i).systemName),1)]),o(g,{class:"system-head",size:"medium"},{default:c(()=>[o(d,{content:"\u6D88\u606F\u901A\u77E5",position:"bl"},{default:c(()=>[o(_,{class:"gi_hover",size:"18"})]),_:1}),o(le,{class:"gi_hover"}),o(ie),o(b,{size:32},{default:c(()=>[de]),_:1}),o(T,{trigger:"hover"},{content:c(()=>[o(F,{onClick:m},{default:c(()=>[h("div",pe,[h("span",me,[o(x)]),fe])]),_:1}),o(F,{onClick:e},{default:c(()=>[h("div",he,[h("span",ve,[o(I)]),ge])]),_:1})]),default:c(()=>[o(B,{type:"text",class:"username"},{default:c(()=>[h("span",null,A(v(t).userName),1),o(S)]),_:1})]),_:1})]),_:1})]),_:1})}}});var ye=k(be,[["__scopeId","data-v-67ec94ed"]]);const ke=y({setup(r){const n=G();return(i,t)=>{const u=a("router-view"),m=a("a-layout");return p(),f(m,{class:"gi-main"},{default:c(()=>[o(u,null,{default:c(({Component:e,route:l})=>[o(O,{name:"fade-transform",mode:"out-in",appear:""},{default:c(()=>[(p(),f(J,{include:v(n).cacheList},[(p(),f(j(e)))],1032,["include"]))]),_:2},1024)]),_:1})]),_:1})}}});var xe=k(ke,[["__scopeId","data-v-cf42d42a"]]);const Fe={class:"nav-tab"},we=D("\u5173\u95ED\u5F53\u524D\u9875\u7B7E"),Ee=D("\u5173\u95ED\u6240\u6709\u9875\u7B7E"),Ce=y({setup(r){const n=Q(),i=z(),t=G();M(()=>{u()}),W(()=>n.path,()=>{u()});const u=()=>{t.addTabItem({name:n.meta.title||"\u672A\u547D\u540D",path:n.path,componentName:n.name}),n.meta.keepAlive&&t.addCacheItem(n.name)},m=s=>{console.log("\u70B9\u51FB\u524D",t.cacheList),i.push({path:s})},e=s=>{let _=t.tabList.find(d=>d.path===s);t.removeTabItem(s),t.removeCacheItem(_.componentName),console.log("\u5173\u95ED\u540E",t.cacheList)},l=()=>{t.clearTabList()};return(s,_)=>{const d=a("a-tab-pane"),b=a("icon-settings"),S=a("a-button"),B=a("icon-minus-circle-fill"),x=a("a-doption"),F=a("icon-close-circle-fill"),I=a("a-dropdown"),T=a("a-tabs");return p(),w("div",Fe,[o(T,{type:"card-gutter",editable:"","active-key":v(n).path,"onUpdate:active-key":_[1]||(_[1]=g=>v(n).path=g),onTabClick:m,onDelete:e},{extra:c(()=>[o(I,{trigger:"hover"},{content:c(()=>[o(x,{onClick:_[0]||(_[0]=g=>e(v(n).path))},{icon:c(()=>[o(B,{size:20,style:{color:"#ff7d00"}})]),default:c(()=>[we]),_:1}),o(x,{onClick:l},{icon:c(()=>[o(F,{size:20,style:{color:"#f53f3f"}})]),default:c(()=>[Ee]),_:1})]),default:c(()=>[o(S,{type:"primary",class:"extra-btn"},{icon:c(()=>[o(b,{size:18})]),_:1})]),_:1})]),default:c(()=>[(p(!0),w(L,null,N(v(t).tabList,g=>(p(),f(d,{key:g.path,title:g.name,closable:g.path!=="/home"},null,8,["title","closable"]))),128))]),_:1},8,["active-key"])])}}});var Se=k(Ce,[["__scopeId","data-v-c853c2c0"]]);const Be=y({setup(r){return(n,i)=>{const t=a("a-layout");return p(),f(t,{class:"gi-layout"},{default:c(()=>[o(se),o(t,null,{default:c(()=>[o(ye),o(Se),o(xe)]),_:1})]),_:1})}}});var $e=k(Be,[["__scopeId","data-v-2a7c8210"]]);export{$e as default};