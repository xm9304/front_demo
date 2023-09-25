import{d as e,e as a,r as l,f as t,o as n,c as i,h as d,w as o,i as c,q as s,k as r,g as u,v as p,N as _,eQ as m,P as y,eR as f,eS as g,J as k,s as v,p as h,l as w,n as x}from"./index-a2edea83.js";import{_ as z}from"./AddMenuModal.vue_vue_type_script_setup_true_lang-d9117a4c.js";import{d as C}from"./index-ef933a49.js";import{_ as b}from"./index-0a61f2d0.js";import"./index-3e50ec43.js";const j=e=>(h("data-v-2dc76e52"),e=e(),w(),e),V={class:"gi_page menu-manage"},I=j((()=>u("span",null,"新增",-1))),M=j((()=>u("span",null,"搜索",-1))),A=j((()=>u("span",null,"重置",-1))),J={class:"gi_mt"},R=j((()=>u("span",null,"编辑",-1))),S=j((()=>u("span",null,"删除",-1))),N=x(e({name:"SystemMenu",__name:"index",setup(e){const h=a(),w=a(!1),x=a(),j=a(!1),N=()=>{var e;j.value=!j.value,null==(e=x.value)||e.expandAll(j.value)},U=l({name:"",status:""}),q=a([]),D=async()=>{try{w.value=!0;const e=await C();q.value=e.data}catch(e){}finally{w.value=!1}};D();const G=()=>{D()},O=()=>{U.name="",U.status="",D()},P=()=>{var e;null==(e=h.value)||e.add()},Q=()=>{g.open({title:"数据结构",content:()=>k(b,{codeJson:JSON.stringify(q.value,null,"\t")}),width:560})};return(e,a)=>{const l=t("icon-plus"),g=t("a-button"),k=t("icon-list"),C=t("icon-mind-mapping"),b=t("a-tooltip"),D=t("icon-code"),T=t("a-space"),W=t("icon-search"),B=t("a-input"),E=t("a-option"),F=t("a-select"),H=t("icon-refresh"),K=t("a-row"),L=t("IconDown"),X=t("IconRight"),Y=t("a-table-column"),Z=t("a-tag"),$=v,ee=t("a-switch"),ae=t("icon-edit"),le=t("icon-delete"),te=t("a-popconfirm"),ne=t("a-table"),ie=t("a-card");return n(),i("div",V,[d(ie,{title:"菜单管理"},{default:o((()=>[d(K,{justify:"space-between"},{default:o((()=>[d(T,null,{default:o((()=>[d(g,{type:"primary",onClick:P},{icon:o((()=>[d(l)])),default:o((()=>[I])),_:1}),d(b,{content:"展开/折叠"},{default:o((()=>[d(g,{type:"primary",status:"success",onClick:N},{icon:o((()=>[c(j)?(n(),s(C,{key:1})):(n(),s(k,{key:0}))])),_:1})])),_:1}),d(b,{content:"查看数据结构"},{default:o((()=>[d(g,{type:"primary",status:"warning",onClick:Q},{icon:o((()=>[d(D)])),_:1})])),_:1})])),_:1}),d(T,null,{default:o((()=>[d(B,{modelValue:c(U).name,"onUpdate:modelValue":a[0]||(a[0]=e=>c(U).name=e),placeholder:"输入菜单名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:o((()=>[d(W)])),_:1},8,["modelValue"]),d(F,{modelValue:c(U).status,"onUpdate:modelValue":a[1]||(a[1]=e=>c(U).status=e),placeholder:"菜单状态",style:{width:"120px"}},{default:o((()=>[d(E,{value:1},{default:o((()=>[r("正常")])),_:1}),d(E,{value:0},{default:o((()=>[r("禁用")])),_:1})])),_:1},8,["modelValue"]),d(g,{type:"primary",onClick:G},{icon:o((()=>[d(W)])),default:o((()=>[M])),_:1}),d(g,{onClick:O},{icon:o((()=>[d(H)])),default:o((()=>[A])),_:1})])),_:1})])),_:1}),u("section",J,[d(ne,{ref_key:"TableRef",ref:x,data:c(q),"row-key":"id",loading:c(w),bordered:{cell:!0},scroll:{x:"100%",y:"100%",minWidth:1700},pagination:!1,size:"mini"},{"expand-icon":o((({expanded:e})=>[e?(n(),s(L,{key:0})):(n(),s(X,{key:1}))])),columns:o((()=>[d(Y,{title:"菜单名称"},{cell:o((({record:e})=>[r(p(e.title||""),1)])),_:1}),d(Y,{title:"类型",width:80,align:"center"},{cell:o((({record:e})=>[1===e.type?(n(),s(Z,{key:0,color:"orangered"},{default:o((()=>[r("目录")])),_:1})):_("",!0),2===e.type?(n(),s(Z,{key:1,color:"green"},{default:o((()=>[r("菜单")])),_:1})):_("",!0),3===e.type?(n(),s(Z,{key:2},{default:o((()=>[r("按钮")])),_:1})):_("",!0)])),_:1}),d(Y,{title:"排序",width:80,align:"center"},{cell:o((({record:e})=>[r(p(e.sort||0),1)])),_:1}),d(Y,{title:"路由路径","data-index":"path"}),d(Y,{title:"路由名称"},{cell:o((({record:e})=>[r(p(c(m)(e.path)),1)])),_:1}),d(Y,{title:"组件路径","data-index":"component"}),d(Y,{title:"权限标识","data-index":"permission"}),d(Y,{title:"菜单图标","data-index":"icon",width:100,align:"center"},{cell:o((({record:e})=>[e.svgIcon?(n(),s($,{key:0,size:24,name:e.svgIcon},null,8,["name"])):(n(),s(y(e.icon),{key:1,size:24}))])),_:1}),d(Y,{title:"状态",width:80,align:"center"},{cell:o((({record:e})=>[d(ee,{type:"round",size:"small","model-value":e.status,"checked-value":1,"unchecked-value":0},null,8,["model-value"])])),_:1}),d(Y,{title:"是否缓存",width:100,align:"center"},{cell:o((({record:e})=>[e.keepAlive?(n(),s(Z,{key:0,color:"green"},{default:o((()=>[r("是")])),_:1})):(n(),s(Z,{key:1,color:"red"},{default:o((()=>[r("否")])),_:1}))])),_:1}),d(Y,{title:"是否隐藏",width:100,align:"center"},{cell:o((({record:e})=>[e.hidden?(n(),s(Z,{key:0,color:"green"},{default:o((()=>[r("是")])),_:1})):(n(),s(Z,{key:1,color:"red"},{default:o((()=>[r("否")])),_:1}))])),_:1}),d(Y,{title:"是否外链",width:100,align:"center"},{cell:o((({record:e})=>[c(f)(e.path)?(n(),s(Z,{key:0,color:"green"},{default:o((()=>[r("是")])),_:1})):(n(),s(Z,{key:1,color:"red"},{default:o((()=>[r("否")])),_:1}))])),_:1}),d(Y,{title:"操作",width:200,align:"left",fixed:"right"},{cell:o((({record:e})=>[d(T,null,{default:o((()=>[d(g,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=h.value)||t.edit(l.id));var l,t}},{icon:o((()=>[d(ae)])),default:o((()=>[R])),_:2},1032,["onClick"]),[1,2].includes(e.type)?(n(),s(g,{key:0,type:"primary",status:"success",size:"mini"},{icon:o((()=>[d(l)])),_:1})):_("",!0),d(te,{type:"warning",content:"您确定要删除该项吗?"},{default:o((()=>[d(g,{type:"primary",status:"danger",size:"mini"},{icon:o((()=>[d(le)])),default:o((()=>[S])),_:1})])),_:1})])),_:2},1024)])),_:1})])),_:1},8,["data","loading"])])])),_:1}),d(z,{ref_key:"AddMenuModalRef",ref:h,menus:c(q)},null,8,["menus"])])}}}),[["__scopeId","data-v-2dc76e52"]]);export{N as default};
