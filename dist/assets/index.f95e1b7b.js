import{O as q,E as B,P as V,Q as G,R as U,y as X,i as y,L as D,u as N,f as j,S as Y}from"./vendor.1acd98e9.js";function x(e){return G()?(U(e),!0):!1}const b=typeof window!="undefined",Z=e=>typeof e=="string",$=()=>{};function ee(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const te=e=>e();var k=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,oe=(e,t)=>{var r={};for(var n in e)re.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&k)for(var n of k(e))t.indexOf(n)<0&&ne.call(e,n)&&(r[n]=e[n]);return r};function ae(e,t,r={}){const n=r,{eventFilter:a=te}=n,o=oe(n,["eventFilter"]);return D(e,ee(a,t),o)}function M(e,t=!0){q()?B(e):t?e():V(e)}function Ce(e=!1){if(X(e))return t=>{e.value=typeof t=="boolean"?t:!e.value};{const t=y(e);return[t,n=>{t.value=typeof n=="boolean"?n:!t.value}]}}function E(e){var t;const r=N(e);return(t=r==null?void 0:r.$el)!=null?t:r}const m=b?window:void 0;b&&window.document;b&&window.navigator;b&&window.location;function P(...e){let t,r,n,a;if(Z(e[0])?([r,n,a]=e,t=m):[t,r,n,a]=e,!t)return $;let o=$;const _=D(()=>N(t),c=>{o(),!!c&&(c.addEventListener(r,n,a),o=()=>{c.removeEventListener(r,n,a),o=$})},{immediate:!0,flush:"post"}),l=()=>{_(),o()};return x(l),l}function De(e,t,r={}){const{window:n=m,ignore:a}=r;if(!n)return;const o=y(!0),l=[P(n,"click",i=>{const f=E(e),w=i.composedPath();!f||f===i.target||w.includes(f)||!o.value||a&&a.length>0&&a.some(g=>{const p=E(g);return p&&(i.target===p||w.includes(p))})||t(i)},{passive:!0,capture:!0}),P(n,"pointerdown",i=>{const f=E(e);o.value=!!f&&!i.composedPath().includes(f)},{passive:!0})];return()=>l.forEach(i=>i())}function se(e,t={}){const{window:r=m}=t;let n;const a=y(!1),o=()=>{!r||(n||(n=r.matchMedia(e)),a.value=n.matches)};return M(()=>{o(),!!n&&("addEventListener"in n?n.addEventListener("change",o):n.addListener(o),x(()=>{"removeEventListener"in o?n.removeEventListener("change",o):n.removeListener(o)}))}),a}const L=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},C="__vueuse_ssr_handlers__";L[C]=L[C]||{};const ie=L[C];function H(e,t){return ie[e]||t}function le(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const ue={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function ce(e,t,r,n={}){var a;const{flush:o="pre",deep:_=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,shallow:i,window:f=m,eventFilter:w,onError:g=s=>{console.error(s)}}=n,p=N(t),S=le(p),v=(i?Y:y)(t),u=(a=n.serializer)!=null?a:ue[S];if(!r)try{r=H("getDefaultStorage",()=>{var s;return(s=m)==null?void 0:s.localStorage})()}catch(s){g(s)}function h(s){if(!(!r||s&&s.key!==e))try{const d=s?s.newValue:r.getItem(e);d==null?(v.value=p,c&&p!==null&&r.setItem(e,u.write(p))):typeof d!="string"?v.value=d:v.value=u.read(d)}catch(d){g(d)}}return h(),f&&l&&P(f,"storage",s=>setTimeout(()=>h(s),0)),r&&ae(v,()=>{try{v.value==null?r.removeItem(e):r.setItem(e,u.write(v.value))}catch(s){g(s)}},{flush:o,deep:_,eventFilter:w}),v}function Q(e){return se("(prefers-color-scheme: dark)",e)}var fe=Object.defineProperty,T=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ve=(e,t)=>{for(var r in t||(t={}))de.call(t,r)&&I(e,r,t[r]);if(T)for(var r of T(t))pe.call(t,r)&&I(e,r,t[r]);return e};function ge(e={}){const{selector:t="html",attribute:r="class",window:n=m,storage:a,storageKey:o="vueuse-color-scheme",listenToStorageChanges:_=!0,storageRef:l}=e,c=ve({auto:"",light:"light",dark:"dark"},e.modes||{}),i=Q({window:n}),f=j(()=>i.value?"dark":"light"),w=l||(o==null?y("auto"):ce(o,"auto",a,{window:n,listenToStorageChanges:_})),g=j({get(){return w.value==="auto"?f.value:w.value},set(u){w.value=u}}),p=H("updateHTMLAttrs",(u,h,s)=>{const d=n==null?void 0:n.document.querySelector(u);if(!!d)if(h==="class"){const K=s.split(/\s/g);Object.values(c).flatMap(O=>(O||"").split(/\s/g)).filter(Boolean).forEach(O=>{K.includes(O)?d.classList.add(O):d.classList.remove(O)})}else d.setAttribute(h,s)});function S(u){var h;p(t,r,(h=c[u])!=null?h:u)}function v(u){e.onChanged?e.onChanged(u,S):S(u)}return D(g,v,{flush:"post",immediate:!0}),M(()=>v(g.value)),g}var we=Object.defineProperty,he=Object.defineProperties,me=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Oe=(e,t)=>{for(var r in t||(t={}))_e.call(t,r)&&F(e,r,t[r]);if(A)for(var r of A(t))ye.call(t,r)&&F(e,r,t[r]);return e},be=(e,t)=>he(e,me(t));function Ne(e={}){const{valueDark:t="dark",valueLight:r="",window:n=m}=e,a=ge(be(Oe({},e),{onChanged:(l,c)=>{var i;e.onChanged?(i=e.onChanged)==null||i.call(e,l==="dark"):c(l)},modes:{dark:t,light:r}})),o=Q({window:n});return j({get(){return a.value==="dark"},set(l){l===o.value?a.value="auto":a.value=l?"dark":"light"}})}var R,z;b&&(window==null?void 0:window.navigator)&&((R=window==null?void 0:window.navigator)==null?void 0:R.platform)&&/iP(ad|hone|od)/.test((z=window==null?void 0:window.navigator)==null?void 0:z.platform);var Se=Object.defineProperty,J=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ee=(e,t)=>{for(var r in t||(t={}))Pe.call(t,r)&&W(e,r,t[r]);if(J)for(var r of J(t))$e.call(t,r)&&W(e,r,t[r]);return e};const je={top:0,left:0,bottom:0,right:0,height:0,width:0};Ee({text:""},je);function Me({window:e=m,initialWidth:t=1/0,initialHeight:r=1/0}={}){const n=y(t),a=y(r),o=()=>{e&&(n.value=e.innerWidth,a.value=e.innerHeight)};return o(),M(o),P("resize",o,{passive:!0}),{width:n,height:a}}export{Ce as a,Me as b,De as o,Ne as u};
