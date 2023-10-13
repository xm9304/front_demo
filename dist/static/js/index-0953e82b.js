import{U as e,V as a,eK as t,eL as l,ey as i,d as n,u as o,a as s,eM as d,e as c,I as u,eN as r,f as p,o as f,c as m,g as _,w as v,l as y,F as h,v as g,i as w,s as k,Q as x,x as b,O as C,$ as j,a0 as I,M,S as F,t as T,p as N,m as S,h as q,q as B}from"./index-f2ac5032.js";import{f as R,i as V}from"./file-map-2a15779f.js";import{a as $}from"./index.es-2452d5a8.js";/* empty css               */import L from"./FileNavPath-16d945ac.js";import K from"./FileGrid-5a5f3acd.js";import U from"./FileList-cdb34c1b.js";import z from"./index-8a5c1ffc.js";import E from"./index-55b75e48.js";import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-55aadb5d.js";import O from"./index-f2680581.js";import"./FileImg-cdb8de08.js";import"./FileRightMenu-eb707d64.js";function P(e,a){const n=document.createElement("div");document.body.appendChild(n);const o=t(e,{...a,onClose:()=>{setTimeout((()=>{o.unmount(),document.body.removeChild(n),(null==a?void 0:a.callback)&&(null==a||a.callback())}),350)}});o.use(l),o.use(i),o.mount(n)}let Q="";const A=e=>(N("data-v-fac0fa4b"),e=e(),S(),e),D={class:"file-main"},H=A((()=>q("span",null,"上传文件",-1))),J=A((()=>q("span",null,"上传文件夹",-1))),W=B(n({__name:"index",setup(t){var l;const i=o(),n=s(),N=d(),S=c(!1),q=c([]),B=c("0");B.value=(null==(l=i.query.fileType)?void 0:l.toString())||"0";const A=async()=>{try{S.value=!0,W.value=!1;const l=await(t={fileType:B.value},e.get(`${a}/file/list`,t));q.value=l.data.list}catch(l){return l}finally{S.value=!1}var t};u((()=>{A()})),r((e=>{var a;e.query.fileType&&(B.value=null==(a=e.query.fileType)?void 0:a.toString(),A())}));const W=c(!1),X=e=>{if(M.success(`点击了文件-${e.name}`),V.includes(e.extendName)&&e.src){const a=q.value.filter((e=>V.includes(e.extendName))).map((e=>e.src||"")),t=a.findIndex((a=>a===e.src));a.length&&$({options:{initialViewIndex:t},images:a})}"mp4"===e.extendName&&P(G,{fileInfo:e}),"mp3"===e.extendName&&function(e){if(!Q)Q=e.id,P(O,{fileInfo:e,callback:()=>{Q=""}})}(e)},Y=e=>{N.addSelectedFileItem(e)},Z=(e,a)=>{M.success("点击了"+e),"delete"===e&&F.warning({title:"提示",content:"是否删除该文件？",hideCancel:!1}),"rename"===e&&P(E,{fileInfo:a}),"move"===e&&function(e){P(z,{fileInfo:e})}(a),"detail"===e&&n.push({path:"/file/detail"})},ee=()=>{F.warning({title:"提示",content:"是否确认删除？",hideCancel:!1})};return(e,a)=>{const t=p("icon-upload"),l=p("a-button"),i=T,n=p("a-doption"),o=p("a-dropdown"),s=p("a-option"),d=p("a-select"),c=p("a-input"),u=p("icon-search"),r=p("a-input-group"),M=p("a-space"),F=p("icon-delete"),B=p("icon-select-all"),V=p("icon-swap"),$=p("a-tooltip"),z=p("icon-filter"),E=p("icon-apps"),G=p("icon-list"),O=p("a-button-group"),P=p("a-row"),Q=p("a-empty"),A=p("a-spin");return f(),m("div",D,[_(L),_(P,{justify:"space-between",class:"row-operate"},{default:v((()=>[_(M,{wrap:""},{default:v((()=>[_(o,null,{content:v((()=>[_(n,null,{icon:v((()=>[_(i,{name:"upload-file"})])),default:v((()=>[H])),_:1}),_(n,null,{icon:v((()=>[_(i,{name:"upload-folder"})])),default:v((()=>[J])),_:1})])),default:v((()=>[_(l,{type:"primary",shape:"round"},{icon:v((()=>[_(t)])),default:v((()=>[y("上传")])),_:1})])),_:1}),_(r,null,{default:v((()=>[_(d,{style:{width:"150px"},placeholder:"请选择"},{default:v((()=>[(f(!0),m(h,null,g(w(R),(e=>(f(),k(s,{key:e.value},{icon:v((()=>[(f(),k(x(e.icon),{size:"18",color:"#999"}))])),default:v((()=>[y(b(e.name),1)])),_:2},1024)))),128))])),_:1}),_(c,{placeholder:"请输入关键词...","allow-clear":""}),_(l,{type:"primary"},{icon:v((()=>[_(u)])),default:v((()=>[y("搜索")])),_:1})])),_:1})])),_:1}),_(M,{wrap:""},{default:v((()=>[w(W)?(f(),k(l,{key:0,disabled:!w(N).selectedFileIds.length,type:"primary",status:"danger",onClick:ee},{icon:v((()=>[_(F)])),_:1},8,["disabled"])):C("",!0),_(l,{type:"primary",onClick:a[0]||(a[0]=e=>W.value=!w(W))},{icon:v((()=>[_(B)])),default:v((()=>[y(b(w(W)?"取消批量":"批量操作"),1)])),_:1}),_(O,null,{default:v((()=>[_($,{content:"传输列表",position:"bottom"},{default:v((()=>[_(l,{onClick:a[1]||(a[1]=e=>S.value=!w(S))},{icon:v((()=>[_(V)])),_:1})])),_:1}),_($,{content:"排序",position:"bottom"},{default:v((()=>[_(l,null,{icon:v((()=>[_(z)])),_:1})])),_:1}),_($,{content:"视图",position:"bottom"},{default:v((()=>[_(l,{onClick:w(N).changeViewMode},{icon:v((()=>["grid"===w(N).viewMode?(f(),k(E,{key:0})):(f(),k(G,{key:1}))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),_(A,{class:"file-wrap",loading:w(S)},{default:v((()=>[j(_(K,{data:w(q),isBatchMode:w(W),selectedFileIds:w(N).selectedFileIds,onClick:X,onCheck:Y,onRightMenuClick:Z},null,8,["data","isBatchMode","selectedFileIds"]),[[I,w(q).length&&"grid"==w(N).viewMode]]),j(_(U,{data:w(q),isBatchMode:w(W),onClick:X,onRightMenuClick:Z},null,8,["data","isBatchMode"]),[[I,w(q).length&&"list"==w(N).viewMode]]),j(_(Q,null,null,512),[[I,!w(q).length]])])),_:1},8,["loading"])])}}}),[["__scopeId","data-v-fac0fa4b"]]);export{W as default};