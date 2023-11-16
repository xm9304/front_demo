import{V as e,W as a,eO as t,eP as l,eB as i,d as n,u as o,a as s,eQ as d,e as c,J as u,eR as r,f as p,o as f,c as m,g as _,w as v,l as y,F as h,x as g,i as w,t as k,R as x,y as C,P as j,a2 as b,a3 as I,M,S as F,v as N,p as T,n as B,h as R,s as S}from"./index-5690b7e6.js";import{f as V,i as q}from"./file-2a15779f.js";import{a as P}from"./index.es-3293c8aa.js";/* empty css               */import L from"./FileNavPath-5675c9d8.js";import W from"./FileGrid-e628fca7.js";import $ from"./FileList-c18170a2.js";import z from"./index-ff981bdd.js";import E from"./index-94100f98.js";import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-3545cf19.js";import J from"./index-a618c95e.js";import"./FileImg-b4aa4d62.js";import"./FileRightMenu-dc0dfbf3.js";function O(e,a){const n=document.createElement("div");document.body.appendChild(n);const o=t(e,{...a,onClose:()=>{setTimeout((()=>{o.unmount(),document.body.removeChild(n),(null==a?void 0:a.callback)&&(null==a||a.callback())}),350)}});o.use(l),o.use(i),o.mount(n)}let Q="";const U=e=>(T("data-v-d81ce59e"),e=e(),B(),e),Y={class:"file-main"},A=U((()=>R("span",null,"上传文件",-1))),D=U((()=>R("span",null,"上传文件夹",-1))),H=S(n({__name:"index",setup(t){var l;const i=o(),n=s(),T=d(),B=c(!1),R=c([]),S=c("0");S.value=(null==(l=i.query.fileType)?void 0:l.toString())||"0";const U=async()=>{try{B.value=!0,H.value=!1;const l=await(t={fileType:S.value},e.get(`${a}/file/list`,t));R.value=l.data.records}catch(l){return l}finally{B.value=!1}var t};u((()=>{U()})),r((e=>{var a;e.query.fileType&&(S.value=null==(a=e.query.fileType)?void 0:a.toString(),U())}));const H=c(!1),K=e=>{if(M.success(`点击了文件-${e.name}`),q.includes(e.extendName)&&e.src){const a=R.value.filter((e=>q.includes(e.extendName))).map((e=>e.src||"")),t=a.findIndex((a=>a===e.src));a.length&&P({options:{initialViewIndex:t},images:a})}"mp4"===e.extendName&&O(G,{fileInfo:e}),"mp3"===e.extendName&&function(e){if(!Q)Q=e.id,O(J,{fileInfo:e,callback:()=>{Q=""}})}(e)},X=e=>{T.addSelectedFileItem(e)},Z=(e,a)=>{M.success("点击了"+e),"delete"===e&&F.warning({title:"提示",content:"是否删除该文件？",hideCancel:!1}),"rename"===e&&O(E,{fileInfo:a}),"move"===e&&function(e){O(z,{fileInfo:e})}(a),"detail"===e&&n.push({path:"/file/detail"})},ee=()=>{F.warning({title:"提示",content:"是否确认删除？",hideCancel:!1})};return(e,a)=>{const t=p("icon-upload"),l=p("a-button"),i=N,n=p("a-doption"),o=p("a-dropdown"),s=p("a-option"),d=p("a-select"),c=p("a-input"),u=p("icon-search"),r=p("a-input-group"),M=p("a-space"),F=p("icon-delete"),S=p("icon-select-all"),q=p("icon-swap"),P=p("a-tooltip"),z=p("icon-filter"),E=p("icon-apps"),G=p("icon-list"),J=p("a-button-group"),O=p("a-row"),Q=p("a-empty"),U=p("a-spin");return f(),m("div",Y,[_(L),_(O,{justify:"space-between",class:"row-operate"},{default:v((()=>[_(M,{wrap:""},{default:v((()=>[_(o,null,{content:v((()=>[_(n,null,{icon:v((()=>[_(i,{name:"upload-file"})])),default:v((()=>[A])),_:1}),_(n,null,{icon:v((()=>[_(i,{name:"upload-folder"})])),default:v((()=>[D])),_:1})])),default:v((()=>[_(l,{type:"primary",shape:"round"},{icon:v((()=>[_(t)])),default:v((()=>[y("上传")])),_:1})])),_:1}),_(r,null,{default:v((()=>[_(d,{style:{width:"150px"},placeholder:"请选择"},{default:v((()=>[(f(!0),m(h,null,g(w(V),(e=>(f(),k(s,{key:e.value},{icon:v((()=>[(f(),k(x(e.icon),{size:"18",color:"#999"}))])),default:v((()=>[y(C(e.name),1)])),_:2},1024)))),128))])),_:1}),_(c,{placeholder:"请输入关键词...","allow-clear":""}),_(l,{type:"primary"},{icon:v((()=>[_(u)])),default:v((()=>[y("搜索")])),_:1})])),_:1})])),_:1}),_(M,{wrap:""},{default:v((()=>[w(H)?(f(),k(l,{key:0,disabled:!w(T).selectedFileIds.length,type:"primary",status:"danger",onClick:ee},{icon:v((()=>[_(F)])),_:1},8,["disabled"])):j("",!0),_(l,{type:"primary",onClick:a[0]||(a[0]=e=>H.value=!w(H))},{icon:v((()=>[_(S)])),default:v((()=>[y(C(w(H)?"取消批量":"批量操作"),1)])),_:1}),_(J,null,{default:v((()=>[_(P,{content:"传输列表",position:"bottom"},{default:v((()=>[_(l,{onClick:a[1]||(a[1]=e=>B.value=!w(B))},{icon:v((()=>[_(q)])),_:1})])),_:1}),_(P,{content:"排序",position:"bottom"},{default:v((()=>[_(l,null,{icon:v((()=>[_(z)])),_:1})])),_:1}),_(P,{content:"视图",position:"bottom"},{default:v((()=>[_(l,{onClick:w(T).changeViewMode},{icon:v((()=>["grid"===w(T).viewMode?(f(),k(E,{key:0})):(f(),k(G,{key:1}))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),_(U,{class:"file-wrap",loading:w(B)},{default:v((()=>[b(_(W,{data:w(R),isBatchMode:w(H),selectedFileIds:w(T).selectedFileIds,onClick:K,onCheck:X,onRightMenuClick:Z},null,8,["data","isBatchMode","selectedFileIds"]),[[I,w(R).length&&"grid"==w(T).viewMode]]),b(_($,{data:w(R),isBatchMode:w(H),onClick:K,onRightMenuClick:Z},null,8,["data","isBatchMode"]),[[I,w(R).length&&"list"==w(T).viewMode]]),b(_(Q,null,null,512),[[I,!w(R).length]])])),_:1},8,["loading"])])}}}),[["__scopeId","data-v-d81ce59e"]]);export{H as default};