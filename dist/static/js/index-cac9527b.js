import{d as e,e as a,r as l,f as t,o as n,c as i,h as d,w as o,i as c,q as r,k as s,g as u,v as p,N as _,eO as m,P as y,eP as f,s as g,p as v,l as k,n as h}from"./index-3f952679.js";import{_ as w}from"./AddMenuModal.vue_vue_type_script_setup_true_lang-64f9b6f1.js";import{d as x}from"./index-904916b2.js";import"./index-52b57ab0.js";const b=e=>(v("data-v-b82ccd65"),e=e(),k(),e),V={class:"gi_page menu-manage"},z=b((()=>u("span",null,"新增",-1))),C=b((()=>u("span",null,"搜索",-1))),j=b((()=>u("span",null,"重置",-1))),I={class:"gi_mt"},M=b((()=>u("span",null,"编辑",-1))),A=b((()=>u("span",null,"删除",-1))),R=h(e({name:"SystemMenu",__name:"index",setup(e){const v=a(),k=a(!1),h=a(),b=a(!1),R=()=>{var e;b.value=!b.value,null==(e=h.value)||e.expandAll(b.value)},U=l({name:"",status:""}),P=a([]),q=async()=>{try{k.value=!0;const e=await x();P.value=e.data}catch(e){}finally{k.value=!1}};q();const D=()=>{q()},E=()=>{U.name="",U.status="",q()},N=()=>{var e;null==(e=v.value)||e.add()};return(e,a)=>{const l=t("icon-plus"),x=t("a-button"),q=t("icon-list"),O=t("icon-mind-mapping"),S=t("a-tooltip"),T=t("a-space"),W=t("icon-search"),B=t("a-input"),F=t("a-option"),G=t("a-select"),H=t("icon-refresh"),J=t("a-row"),K=t("IconDown"),L=t("IconRight"),Q=t("a-table-column"),X=t("a-tag"),Y=g,Z=t("a-switch"),$=t("icon-edit"),ee=t("icon-delete"),ae=t("a-popconfirm"),le=t("a-table"),te=t("a-card");return n(),i("div",V,[d(te,{title:"菜单管理"},{default:o((()=>[d(J,{justify:"space-between"},{default:o((()=>[d(T,null,{default:o((()=>[d(x,{type:"primary",onClick:N},{icon:o((()=>[d(l)])),default:o((()=>[z])),_:1}),d(S,{content:"展开/折叠"},{default:o((()=>[d(x,{type:"primary",status:"success",onClick:R},{icon:o((()=>[c(b)?(n(),r(O,{key:1})):(n(),r(q,{key:0}))])),_:1})])),_:1})])),_:1}),d(T,null,{default:o((()=>[d(B,{modelValue:c(U).name,"onUpdate:modelValue":a[0]||(a[0]=e=>c(U).name=e),placeholder:"输入菜单名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:o((()=>[d(W)])),_:1},8,["modelValue"]),d(G,{modelValue:c(U).status,"onUpdate:modelValue":a[1]||(a[1]=e=>c(U).status=e),placeholder:"菜单状态",style:{width:"120px"}},{default:o((()=>[d(F,{value:1},{default:o((()=>[s("正常")])),_:1}),d(F,{value:0},{default:o((()=>[s("禁用")])),_:1})])),_:1},8,["modelValue"]),d(x,{type:"primary",onClick:D},{icon:o((()=>[d(W)])),default:o((()=>[C])),_:1}),d(x,{onClick:E},{icon:o((()=>[d(H)])),default:o((()=>[j])),_:1})])),_:1})])),_:1}),u("section",I,[d(le,{ref_key:"TableRef",ref:h,data:c(P),"row-key":"id",loading:c(k),bordered:{cell:!0},scroll:{x:"100%",y:"100%",minWidth:1400},pagination:!1},{"expand-icon":o((({expanded:e})=>[e?(n(),r(K,{key:0})):(n(),r(L,{key:1}))])),columns:o((()=>[d(Q,{title:"菜单名称"},{cell:o((({record:e})=>[s(p(e.title||""),1)])),_:1}),d(Q,{title:"类型",width:80,align:"center"},{cell:o((({record:e})=>[1===e.type?(n(),r(X,{key:0,color:"orangered"},{default:o((()=>[s("目录")])),_:1})):_("",!0),2===e.type?(n(),r(X,{key:1,color:"green"},{default:o((()=>[s("菜单")])),_:1})):_("",!0)])),_:1}),d(Q,{title:"排序",width:80,align:"center"},{cell:o((({record:e})=>[s(p(e.sort||0),1)])),_:1}),d(Q,{title:"路由路径","data-index":"path"}),d(Q,{title:"路由名称"},{cell:o((({record:e})=>[s(p(c(m)(e.path)),1)])),_:1}),d(Q,{title:"组件路径","data-index":"component"}),d(Q,{title:"菜单图标","data-index":"icon",width:100,align:"center"},{cell:o((({record:e})=>[e.svgIcon?(n(),r(Y,{key:0,size:24,name:e.svgIcon},null,8,["name"])):(n(),r(y(e.icon),{key:1,size:24}))])),_:1}),d(Q,{title:"状态",width:80,align:"center"},{cell:o((({record:e})=>[d(Z,{type:"round",size:"small","model-value":e.status,"checked-value":1,"unchecked-value":0},null,8,["model-value"])])),_:1}),d(Q,{title:"是否缓存",width:100,align:"center"},{cell:o((({record:e})=>[e.keepAlive?(n(),r(X,{key:0,color:"green"},{default:o((()=>[s("是")])),_:1})):(n(),r(X,{key:1,color:"red"},{default:o((()=>[s("否")])),_:1}))])),_:1}),d(Q,{title:"是否隐藏",width:100,align:"center"},{cell:o((({record:e})=>[e.hidden?(n(),r(X,{key:0,color:"green"},{default:o((()=>[s("是")])),_:1})):(n(),r(X,{key:1,color:"red"},{default:o((()=>[s("否")])),_:1}))])),_:1}),d(Q,{title:"是否外链",width:100,align:"center"},{cell:o((({record:e})=>[c(f)(e.path)?(n(),r(X,{key:0,color:"green"},{default:o((()=>[s("是")])),_:1})):(n(),r(X,{key:1,color:"red"},{default:o((()=>[s("否")])),_:1}))])),_:1}),d(Q,{title:"操作",width:200,align:"center",fixed:"right"},{cell:o((({record:e})=>[d(T,null,{default:o((()=>[d(x,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=v.value)||t.edit(l.id));var l,t}},{icon:o((()=>[d($)])),default:o((()=>[M])),_:2},1032,["onClick"]),d(x,{type:"primary",status:"success",size:"mini"},{icon:o((()=>[d(l)])),_:1}),d(ae,{type:"warning",content:"您确定要删除该项吗?"},{default:o((()=>[d(x,{type:"primary",status:"danger",size:"mini"},{icon:o((()=>[d(ee)])),default:o((()=>[A])),_:1})])),_:1})])),_:2},1024)])),_:1})])),_:1},8,["data","loading"])])])),_:1}),d(w,{ref_key:"AddMenuModalRef",ref:v,menus:c(P)},null,8,["menus"])])}}}),[["__scopeId","data-v-b82ccd65"]]);export{R as default};