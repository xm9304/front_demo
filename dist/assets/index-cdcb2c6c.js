import{_ as E}from"./index-eff2ca9b.js";import{d as G,eM as Q,eN as q,g as d,eO as H,r as o,o as x,c as L,a as e,w as t,V as U,u as n,I as j,e as $,f as l,h as k,eP as J,b as K,eQ as X,n as Y,_ as M,eR as Z,t as F,D as ee,W as te,N,p as oe,j as ne}from"./index-080ea662.js";import{u as ae}from"./usePagination-8f780dca.js";import{g as se}from"./index-f5fb4cab.js";const le={class:"table-box"},ie=G({name:"GiTable",inheritAttrs:!1,__name:"index",emits:["refresh"],setup(g,{expose:b,emit:w}){const h=Q(),C=q(),u=d(null),p=d(!1),m=d("small"),v=d(!0),_=d(null),{isFullscreen:V,toggle:S}=H(_),i=()=>{w("refresh")};return b({tableRef:u}),(z,c)=>{const s=o("a-space"),T=o("a-switch"),f=o("a-tooltip"),I=o("icon-refresh"),y=o("a-button"),D=o("icon-fullscreen"),R=o("icon-fullscreen-exit"),P=o("icon-apps"),a=o("a-radio"),B=o("a-radio-group"),O=o("a-row"),W=o("a-table");return x(),L("div",{class:Y(["gi-table",{fullscreen:n(V)}]),ref_key:"giTableRef",ref:_},[e(O,{justify:"space-between"},{default:t(()=>[e(s,null,{default:t(()=>[U(z.$slots,"custom-extra",{},void 0,!0)]),_:3}),e(s,{size:15},{default:t(()=>[e(f,{content:"斑马纹"},{default:t(()=>[e(T,{modelValue:n(p),"onUpdate:modelValue":c[0]||(c[0]=r=>j(p)?p.value=r:null),size:"medium"},null,8,["modelValue"])]),_:1}),e(f,{content:"刷新"},{default:t(()=>[e(y,{size:"mini",class:"gi_hover_btn",onClick:i},{icon:t(()=>[e(I,{size:18})]),_:1})]),_:1}),e(f,{content:"全屏"},{default:t(()=>[e(y,{size:"mini",class:"gi_hover_btn",onClick:n(S)},{icon:t(()=>[n(V)?(x(),$(R,{key:1,size:18})):(x(),$(D,{key:0,size:18}))]),_:1},8,["onClick"])]),_:1}),e(f,{content:"显示边框"},{default:t(()=>[e(y,{size:"mini",class:"gi_hover_btn",onClick:c[1]||(c[1]=r=>v.value=!n(v))},{icon:t(()=>[e(P,{size:18})]),_:1})]),_:1}),e(B,{type:"button",size:"mini",modelValue:n(m),"onUpdate:modelValue":c[2]||(c[2]=r=>j(m)?m.value=r:null)},{default:t(()=>[e(a,{value:"mini"},{default:t(()=>[l("小")]),_:1}),e(a,{value:"small"},{default:t(()=>[l("默认")]),_:1}),e(a,{value:"medium"},{default:t(()=>[l("中")]),_:1}),e(a,{value:"large"},{default:t(()=>[l("大")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:3}),k("div",le,[e(W,X(n(h),{stripe:n(p),size:n(m),bordered:{cell:n(v)},ref_key:"tableRef",ref:u}),J({_:2},[K(Object.keys(n(C)),r=>({name:r,fn:t(()=>[U(z.$slots,r,{},void 0,!0)])}))]),1040,["stripe","size","bordered"])])],2)}}});const ce=M(ie,[["__scopeId","data-v-0d54e80f"]]),A=g=>(oe("data-v-cb2e9df3"),g=g(),ne(),g),_e={class:"table-page"},re=A(()=>k("span",null,"新增",-1)),de=A(()=>k("span",null,"删除",-1)),ue=A(()=>k("span",null,"导入",-1)),pe=G({name:"TableCustom",__name:"index",setup(g){const b=d(!1),w=d([]),{pagination:h,setTotal:C}=ae(()=>u()),u=async()=>{try{b.value=!0;const _=await se({current:h.current,pageSize:h.pageSize});w.value=_.data.list,C(_.data.total)}catch{}finally{b.value=!1}};u();const p=()=>{N.info("点击了新增")},m=()=>{N.info("点击了删除")},v=()=>{N.info("点击了导入")};return(_,V)=>{const S=o("icon-plus"),i=o("a-button"),z=o("icon-delete"),c=o("icon-export"),s=o("a-table-column"),T=o("a-avatar"),f=o("a-switch"),I=o("a-popconfirm"),y=o("a-space"),D=ce,R=E,P=Z("hasPerm");return x(),L("div",_e,[e(D,{"row-key":"id",loading:n(b),data:n(w),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:n(h),onRefresh:u},{"custom-extra":t(()=>[e(i,{type:"primary",onClick:p},{icon:t(()=>[e(S)]),default:t(()=>[re]),_:1}),e(i,{type:"primary",status:"danger",onClick:m},{icon:t(()=>[e(z)]),default:t(()=>[de]),_:1}),e(i,{onClick:v},{icon:t(()=>[e(c)]),default:t(()=>[ue]),_:1})]),columns:t(()=>[e(s,{title:"序号",width:66,align:"center"},{cell:t(a=>[l(F(a.rowIndex+1),1)]),_:1}),e(s,{title:"姓名","data-index":"name",width:120}),e(s,{title:"头像",width:80},{cell:t(({record:a})=>[e(T,{size:30,style:ee({backgroundColor:a.color})},{default:t(()=>[l(F(a.name[0]),1)]),_:2},1032,["style"])]),_:1}),e(s,{title:"手机号","data-index":"phone",width:150}),e(s,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),e(s,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),e(s,{title:"状态",width:100},{cell:t(({record:a})=>[e(f,{modelValue:a.status,"onUpdate:modelValue":B=>a.status=B,size:"medium"},{checked:t(()=>[l("开启")]),unchecked:t(()=>[l("关闭")]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{title:"操作",width:200,align:"left"},{cell:t(({record:a})=>[e(y,null,{default:t(()=>[te((x(),$(i,{type:"primary",size:"mini"},{default:t(()=>[l("修改")]),_:1})),[[P,["table:btn:edit"]]]),e(i,{size:"mini"},{default:t(()=>[l("详情")]),_:1}),e(I,{type:"warning",content:"您确定要删除该项吗?"},{default:t(()=>[e(i,{type:"primary",status:"danger",size:"mini"},{default:t(()=>[l("删除")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["loading","data","pagination"]),e(R)])}}});const he=M(pe,[["__scopeId","data-v-cb2e9df3"]]);export{he as default};
