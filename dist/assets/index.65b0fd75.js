import{_ as J}from"./GiFooter.30909a3b.js";import{g as K}from"./index.b30770a2.js";import{d as G,eK as O,eL as Y,r as _,h as o,o as b,c as M,b as e,w as t,m as j,i as l,l as R,a as F,eM as Z,J as q,W as H,Z as Q,j as s,_ as N,eA as X,P as ee,I as L,Y as te,M as I,p as oe,e as ne}from"./index.b2a0c0c7.js";import"./index.463d26de.js";import{u as ae}from"./usePagination.b6374f51.js";import"./viewer.4bc9063f.js";import{g as se}from"./index.77e2e246.js";const le=s("\u5C0F"),ie=s("\u9ED8\u8BA4"),ue=s("\u4E2D"),ce=s("\u5927"),_e={class:"table-box"},re={name:"GiTable",inheritAttrs:!1},de=G({...re,emits:["refresh"],setup(m,{expose:f,emit:y}){const C=O(),z=Y(),B=_(null),g=_(!1),h=_("small"),v=_(!0),r=_(null),{isFullscreen:w,toggle:k}=K(r),E=()=>{y("refresh")};return f({tableRef:B}),(i,c)=>{const x=o("a-space"),u=o("a-switch"),d=o("a-tooltip"),S=o("icon-refresh"),a=o("a-button"),V=o("icon-fullscreen"),A=o("icon-fullscreen-exit"),D=o("icon-apps"),p=o("a-radio"),T=o("a-radio-group"),$=o("a-row"),P=o("a-table");return b(),M("div",{class:Q(["gi-table",{fullscreen:l(w)}]),ref_key:"giTableRef",ref:r},[e($,{justify:"space-between"},{default:t(()=>[e(x,null,{default:t(()=>[j(i.$slots,"custom-extra",{},void 0,!0)]),_:3}),e(x,{size:15},{default:t(()=>[e(d,{content:"\u6591\u9A6C\u7EB9"},{default:t(()=>[e(u,{modelValue:g.value,"onUpdate:modelValue":c[0]||(c[0]=n=>g.value=n),size:"medium"},null,8,["modelValue"])]),_:1}),e(d,{content:"\u5237\u65B0"},{default:t(()=>[e(a,{size:"mini",class:"gi_hover_btn",onClick:E},{icon:t(()=>[e(S,{size:18})]),_:1})]),_:1}),e(d,{content:"\u5168\u5C4F"},{default:t(()=>[e(a,{size:"mini",class:"gi_hover_btn",onClick:l(k)},{icon:t(()=>[l(w)?(b(),R(A,{key:1,size:18})):(b(),R(V,{key:0,size:18}))]),_:1},8,["onClick"])]),_:1}),e(d,{content:"\u663E\u793A\u8FB9\u6846"},{default:t(()=>[e(a,{size:"mini",class:"gi_hover_btn",onClick:c[1]||(c[1]=n=>v.value=!v.value)},{icon:t(()=>[e(D,{size:18})]),_:1})]),_:1}),e(T,{type:"button",size:"mini",modelValue:h.value,"onUpdate:modelValue":c[2]||(c[2]=n=>h.value=n)},{default:t(()=>[e(p,{value:"mini"},{default:t(()=>[le]),_:1}),e(p,{value:"small"},{default:t(()=>[ie]),_:1}),e(p,{value:"medium"},{default:t(()=>[ue]),_:1}),e(p,{value:"large"},{default:t(()=>[ce]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:3}),F("div",_e,[e(P,H(l(C),{stripe:g.value,size:h.value,bordered:{cell:v.value},ref_key:"tableRef",ref:B}),Z({_:2},[q(Object.keys(l(z)),n=>({name:n,fn:t(()=>[j(i.$slots,n,{},void 0,!0)])}))]),1040,["stripe","size","bordered"])])],2)}}});const pe=N(de,[["__scopeId","data-v-26f176cb"]]),U=m=>(oe("data-v-098a8b71"),m=m(),ne(),m),me={class:"table-page"},fe=U(()=>F("span",null,"\u65B0\u589E",-1)),ge=U(()=>F("span",null,"\u5220\u9664",-1)),he=U(()=>F("span",null,"\u5BFC\u5165",-1)),ve=s("\u5F00\u542F"),be=s("\u5173\u95ED"),ye=s("\u4FEE\u6539"),Ce=s("\u8BE6\u60C5"),ze=s("\u5220\u9664"),Be=G({name:"CustomTable"}),we=G({...Be,setup(m){const f=_(!1),y=_([]),{current:C,pageSize:z,total:B,changeCurrent:g,changePageSize:h,setTotal:v}=ae(()=>{r()}),r=async()=>{try{f.value=!0;const i=await se({current:C.value,pageSize:z.value});y.value=i.data.list,v(i.data.total)}catch(i){return i}finally{f.value=!1}};r();const w=()=>{I.info("\u70B9\u51FB\u4E86\u65B0\u589E")},k=()=>{I.info("\u70B9\u51FB\u4E86\u5220\u9664")},E=()=>{I.info("\u70B9\u51FB\u4E86\u5BFC\u5165")};return(i,c)=>{const x=o("icon-plus"),u=o("a-button"),d=o("icon-delete"),S=o("icon-export"),a=o("a-table-column"),V=o("a-avatar"),A=o("a-switch"),D=o("a-popconfirm"),p=o("a-space"),T=pe,$=J,P=X("loading");return b(),M("div",me,[ee((b(),R(T,{"row-key":"id",data:y.value,scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:{showPageSize:!0,total:l(B),current:l(C),pageSize:l(z)},onPageChange:l(g),onPageSizeChange:l(h),onRefresh:r},{"custom-extra":t(()=>[e(u,{type:"primary",onClick:w},{icon:t(()=>[e(x)]),default:t(()=>[fe]),_:1}),e(u,{type:"primary",status:"danger",onClick:k},{icon:t(()=>[e(d)]),default:t(()=>[ge]),_:1}),e(u,{onClick:E},{icon:t(()=>[e(S)]),default:t(()=>[he]),_:1})]),columns:t(()=>[e(a,{title:"\u5E8F\u53F7",width:66,align:"center"},{cell:t(n=>[s(L(n.rowIndex+1),1)]),_:1}),e(a,{title:"\u59D3\u540D","data-index":"name",width:120}),e(a,{title:"\u5934\u50CF",width:80},{cell:t(({record:n})=>[e(V,{size:30,style:te({backgroundColor:n.color})},{default:t(()=>[s(L(n.name[0]),1)]),_:2},1032,["style"])]),_:1}),e(a,{title:"\u624B\u673A\u53F7","data-index":"phone",width:150}),e(a,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"startTime",ellipsis:"",tooltip:""}),e(a,{title:"\u5730\u5740","data-index":"address",ellipsis:"",tooltip:""}),e(a,{title:"\u72B6\u6001",width:100},{cell:t(({record:n})=>[e(A,{modelValue:n.status,"onUpdate:modelValue":W=>n.status=W,size:"medium"},{checked:t(()=>[ve]),unchecked:t(()=>[be]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(a,{title:"\u64CD\u4F5C",width:200,align:"center"},{cell:t(({record:n})=>[e(p,null,{default:t(()=>[e(u,{type:"primary",size:"mini"},{default:t(()=>[ye]),_:1}),e(u,{size:"mini"},{default:t(()=>[Ce]),_:1}),e(D,{type:"warning",content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?"},{default:t(()=>[e(u,{type:"primary",status:"danger",size:"mini"},{default:t(()=>[ze]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data","pagination","onPageChange","onPageSizeChange"])),[[P,f.value]]),e($)])}}});const De=N(we,[["__scopeId","data-v-098a8b71"]]);export{De as default};