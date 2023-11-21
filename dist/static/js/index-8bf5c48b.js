import{_ as e}from"./AddDeptModal.vue_vue_type_script_setup_true_lang-ff8cf041.js";import{d as a,e as t,r as l,f as n,o as i,c as d,g as o,w as s,i as r,l as u,t as c,P as p,j as f,h as m,N as _,M as y}from"./index-9e01b763.js";import{a as g}from"./index-0b93b7dc.js";import"./useDept-b1d39c3b.js";const h={class:"gi_page dept-manage"},w=m("span",null,"搜索",-1),x=m("span",null,"重置",-1),v=m("span",null,"新增",-1),k=m("span",null,"删除",-1),C=m("span",null,"编辑",-1),b=m("span",null,"新增",-1),V=m("span",null,"删除",-1),j=a({name:"SystemDept",__name:"index",setup(a){const m=t(),j=t(),D=l({name:"",status:""}),A=t(!1),z=t([]),I=async()=>{try{A.value=!0;const e=await g();z.value=e.data,_((()=>{var e;null==(e=j.value)||e.expandAll(!0)}))}finally{A.value=!1}};I();const M=()=>{I()},R=()=>{D.name="",D.status="",I()},S=()=>{var e;null==(e=m.value)||e.add()},T=t([]),U=e=>{T.value=e},N=()=>{if(!T.value.length)return y.warning("请选择部门");y.info("点击了批量删除")};return(a,t)=>{const l=n("icon-search"),_=n("a-input"),y=n("a-option"),g=n("a-select"),I=n("a-button"),T=n("icon-refresh"),P=n("a-space"),W=n("icon-plus"),q=n("icon-delete"),B=n("a-row"),E=n("IconDown"),F=n("IconRight"),G=n("a-table-column"),H=n("a-tag"),J=n("icon-edit"),K=n("a-popconfirm"),L=n("a-table"),O=n("a-card");return i(),d("div",h,[o(O,{title:"部门管理"},{default:s((()=>[o(P,{wrap:""},{default:s((()=>[o(_,{modelValue:r(D).name,"onUpdate:modelValue":t[0]||(t[0]=e=>r(D).name=e),placeholder:"输入部门名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:s((()=>[o(l)])),_:1},8,["modelValue"]),o(g,{modelValue:r(D).status,"onUpdate:modelValue":t[1]||(t[1]=e=>r(D).status=e),placeholder:"部门状态",style:{width:"120px"}},{default:s((()=>[o(y,{value:1},{default:s((()=>[u("正常")])),_:1}),o(y,{value:0},{default:s((()=>[u("禁用")])),_:1})])),_:1},8,["modelValue"]),o(I,{type:"primary",onClick:M},{icon:s((()=>[o(l)])),default:s((()=>[w])),_:1}),o(I,{onClick:R},{icon:s((()=>[o(T)])),default:s((()=>[x])),_:1})])),_:1}),o(B,null,{default:s((()=>[o(P,{wrap:""},{default:s((()=>[o(I,{type:"primary",onClick:S},{icon:s((()=>[o(W)])),default:s((()=>[v])),_:1}),o(I,{type:"primary",status:"danger",onClick:N},{icon:s((()=>[o(q)])),default:s((()=>[k])),_:1})])),_:1})])),_:1}),o(L,{style:{"margin-top":"8px"},ref_key:"TableRef",ref:j,"row-key":"id",bordered:{cell:!0},data:r(z),loading:r(A),scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:!1,"row-selection":{type:"checkbox",showCheckedAll:!1},onSelect:U},{"expand-icon":s((({expanded:e})=>[e?(i(),c(E,{key:0})):(i(),c(F,{key:1}))])),columns:s((()=>[o(G,{title:"部门名称","data-index":"name",width:160}),o(G,{title:"排序","data-index":"sort",width:100,align:"center"}),o(G,{title:"状态",width:100,align:"center"},{cell:s((({record:e})=>[1==e.status?(i(),c(H,{key:0,color:"green"},{default:s((()=>[u("正常")])),_:1})):p("",!0),0==e.status?(i(),c(H,{key:1,color:"red"},{default:s((()=>[u("禁用")])),_:1})):p("",!0)])),_:1}),o(G,{title:"描述","data-index":"description",width:250}),o(G,{title:"创建时间","data-index":"createTime",width:200}),o(G,{title:"操作",width:200,align:"center",fixed:r(f)()?void 0:"right"},{cell:s((({record:e})=>[o(P,null,{default:s((()=>[o(I,{type:"primary",size:"mini",onClick:a=>{return t=e,void(null==(l=m.value)||l.edit(t.id));var t,l}},{icon:s((()=>[o(J)])),default:s((()=>[C])),_:2},1032,["onClick"]),e.parentId?(i(),c(I,{key:0,type:"primary",status:"success",size:"mini",onClick:t[2]||(t[2]=e=>S())},{icon:s((()=>[o(W)])),default:s((()=>[b])),_:1})):p("",!0),o(K,{type:"warning",content:"您确定要删除该项吗?"},{default:s((()=>[o(I,{type:"primary",status:"danger",size:"mini"},{icon:s((()=>[o(q)])),default:s((()=>[V])),_:1})])),_:1})])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading"])])),_:1}),o(e,{ref_key:"AddDeptModalRef",ref:m},null,512)])}}});export{j as default};
