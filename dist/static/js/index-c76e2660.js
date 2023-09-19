import{U as e,V as a,eI as t,eJ as i,ex as l,d as n,u as o,a as s,eE as d,eK as c,e as u,H as r,eL as p,f,o as m,c as _,h as v,w as h,k as y,F as g,t as w,i as k,q as x,P as C,v as j,N as I,Z as M,$ as F,M as b,S as L,s as T,p as N,l as S,g as R,n as q}from"./index-06391a41.js";import{f as B,i as V}from"./file-map-2a15779f.js";import{a as K}from"./index.es-54a234e8.js";/* empty css               */import $ from"./FileNavPath-b03a231c.js";import E from"./FileGrid-8fb6bf33.js";import P from"./FileList-3045bc33.js";import U from"./index-7c794ce3.js";import z from"./index-63a9da21.js";import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-e02005a8.js";import H from"./index-95092ff3.js";import"./FileImg-b2c1bdc5.js";import"./FileRightMenu-2a1f9b73.js";function J(e,a){const n=document.createElement("div");document.body.appendChild(n);const o=t(e,{...a,onClose:()=>{setTimeout((()=>{o.unmount(),document.body.removeChild(n)}),350)}});o.use(i),o.use(l),o.mount(n)}const Z=e=>(N("data-v-582848c3"),e=e(),S(),e),A={class:"file-main"},D=Z((()=>R("span",null,"上传文件",-1))),O=Z((()=>R("span",null,"上传文件夹",-1))),Q=q(n({__name:"index",setup(t){var i;const l=o(),n=s(),{width:N}=d(),S=c(),R=u(!1),q=u([]),Z=u("0");Z.value=(null==(i=l.query.fileType)?void 0:i.toString())||"0";const Q=async()=>{try{R.value=!0,W.value=!1;const i=await(t={fileType:Z.value},e.get(`${a}/file/list`,t));q.value=i.data.list}catch(i){return i}finally{R.value=!1}var t};r((()=>{Q()})),p((e=>{var a;e.query.fileType&&(Z.value=null==(a=e.query.fileType)?void 0:a.toString(),Q())}));const W=u(!1),X=e=>{if(b.success(`点击了文件-${e.name}`),V.includes(e.extendName)&&e.src){const a=q.value.filter((e=>V.includes(e.extendName))).map((e=>e.src||"")),t=a.findIndex((a=>a===e.src));a.length&&K({options:{initialViewIndex:t},images:a})}"mp4"===e.extendName&&J(G,{fileInfo:e}),"mp3"===e.extendName&&function(e){J(H,{fileInfo:e})}(e)},Y=e=>{S.addSelectedFileItem(e)},ee=(e,a)=>{b.success("点击了"+e),"delete"===e&&L.warning({title:"提示",content:"是否删除该文件？",hideCancel:!1}),"rename"===e&&J(z,{fileInfo:a}),"move"===e&&function(e){J(U,{fileInfo:e})}(a),"detail"===e&&n.push({path:"/file/detail"})},ae=()=>{L.warning({title:"提示",content:"是否确认删除？",hideCancel:!1})};return(e,a)=>{const t=f("icon-upload"),i=f("a-button"),l=T,n=f("a-doption"),o=f("a-dropdown"),s=f("a-option"),d=f("a-select"),c=f("a-input"),u=f("icon-search"),r=f("a-input-group"),p=f("a-space"),b=f("icon-delete"),L=f("icon-select-all"),V=f("icon-swap"),K=f("a-tooltip"),U=f("icon-filter"),z=f("icon-apps"),G=f("icon-list"),H=f("a-button-group"),J=f("a-row"),Z=f("a-empty"),Q=f("a-spin");return m(),_("div",A,[v($),v(J,{justify:"space-between",class:"row-operate"},{default:h((()=>[v(p,null,{default:h((()=>[v(o,null,{content:h((()=>[v(n,null,{icon:h((()=>[v(l,{name:"upload-file"})])),default:h((()=>[D])),_:1}),v(n,null,{icon:h((()=>[v(l,{name:"upload-folder"})])),default:h((()=>[O])),_:1})])),default:h((()=>[v(i,{type:"primary",shape:"round"},{icon:h((()=>[v(t)])),default:h((()=>[y("上传")])),_:1})])),_:1}),v(r,null,{default:h((()=>[v(d,{style:{width:"150px"},placeholder:"请选择"},{default:h((()=>[(m(!0),_(g,null,w(k(B),(e=>(m(),x(s,{key:e.value},{icon:h((()=>[(m(),x(C(e.icon),{size:"18",color:"#999"}))])),default:h((()=>[y(j(e.name),1)])),_:2},1024)))),128))])),_:1}),v(c,{placeholder:"请输入关键词...","allow-clear":""}),v(i,{type:"primary"},{icon:h((()=>[v(u)])),default:h((()=>[y("搜索")])),_:1})])),_:1})])),_:1}),k(N)>715?(m(),x(p,{key:0},{default:h((()=>[k(W)?(m(),x(i,{key:0,disabled:!k(S).selectedFileIdList.length,type:"primary",status:"danger",onClick:ae},{icon:h((()=>[v(b)])),_:1},8,["disabled"])):I("",!0),v(i,{type:"primary",onClick:a[0]||(a[0]=e=>W.value=!k(W))},{icon:h((()=>[v(L)])),default:h((()=>[y(j(k(W)?"取消批量":"批量操作"),1)])),_:1}),v(H,null,{default:h((()=>[v(K,{content:"传输列表",position:"bottom"},{default:h((()=>[v(i,{onClick:a[1]||(a[1]=e=>R.value=!k(R))},{icon:h((()=>[v(V)])),_:1})])),_:1}),v(K,{content:"排序",position:"bottom"},{default:h((()=>[v(i,null,{icon:h((()=>[v(U)])),_:1})])),_:1}),v(K,{content:"视图",position:"bottom"},{default:h((()=>[v(i,{onClick:k(S).changeViewMode},{icon:h((()=>["grid"===k(S).viewMode?(m(),x(z,{key:0})):(m(),x(G,{key:1}))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})):I("",!0)])),_:1}),v(Q,{class:"file-wrap",loading:k(R)},{default:h((()=>[M(v(E,{data:k(q),isBatchMode:k(W),selectedFileIdList:k(S).selectedFileIdList,onClick:X,onCheck:Y,onRightMenuClick:ee},null,8,["data","isBatchMode","selectedFileIdList"]),[[F,k(q).length&&"grid"==k(S).viewMode]]),M(v(P,{data:k(q),isBatchMode:k(W),onClick:X,onRightMenuClick:ee},null,8,["data","isBatchMode"]),[[F,k(q).length&&"list"==k(S).viewMode]]),M(v(Z,null,null,512),[[F,!k(q).length]])])),_:1},8,["loading"])])}}}),[["__scopeId","data-v-582848c3"]]);export{Q as default};
