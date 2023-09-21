import{_ as e}from"./AddDeptModal.vue_vue_type_script_setup_true_lang-3a3f7c10.js";import{d as a,e as t,r as l,f as n,o as i,c as d,h as s,w as o,i as r,k as u,g as c,q as p,N as m,K as _,M as f}from"./index-ed1c2c55.js";import{a as y}from"./index-ed1ac487.js";import"./useDept-b6a6ab82.js";const g={class:"gi_page dept-manage"},h=c("span",null,"搜索",-1),k=c("span",null,"重置",-1),v=c("span",null,"新增",-1),w=c("span",null,"删除",-1),x={class:"gi_mt"},C=c("span",null,"编辑",-1),b=c("span",null,"新增",-1),V=c("span",null,"删除",-1),D=a({name:"SystemDept",__name:"index",setup(a){const D=t(),j=t(),A=l({name:"",status:""}),z=t(!1),I=t([]),M=async()=>{try{z.value=!0;const e=await y();I.value=e.data,_((()=>{var e;null==(e=j.value)||e.expandAll(!0)}))}catch(e){}finally{z.value=!1}};M();const R=()=>{M()},S=()=>{A.name="",A.status="",M()},T=()=>{var e;null==(e=D.value)||e.add()},U=t([]),q=e=>{U.value=e},K=()=>{if(!U.value.length)return f.warning("请选择部门");f.info("点击了批量删除")};return(a,t)=>{const l=n("icon-search"),_=n("a-input"),f=n("a-option"),y=n("a-select"),M=n("a-button"),U=n("icon-refresh"),N=n("a-space"),W=n("icon-plus"),$=n("icon-delete"),B=n("a-row"),E=n("IconDown"),F=n("IconRight"),G=n("a-table-column"),H=n("a-tag"),J=n("icon-edit"),L=n("a-popconfirm"),O=n("a-table"),P=n("a-card");return i(),d("div",g,[s(P,{title:"部门管理"},{default:o((()=>[s(N,null,{default:o((()=>[s(_,{modelValue:r(A).name,"onUpdate:modelValue":t[0]||(t[0]=e=>r(A).name=e),placeholder:"输入部门名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:o((()=>[s(l)])),_:1},8,["modelValue"]),s(y,{modelValue:r(A).status,"onUpdate:modelValue":t[1]||(t[1]=e=>r(A).status=e),placeholder:"部门状态",style:{width:"120px"}},{default:o((()=>[s(f,{value:1},{default:o((()=>[u("正常")])),_:1}),s(f,{value:0},{default:o((()=>[u("禁用")])),_:1})])),_:1},8,["modelValue"]),s(M,{type:"primary",onClick:R},{icon:o((()=>[s(l)])),default:o((()=>[h])),_:1}),s(M,{onClick:S},{icon:o((()=>[s(U)])),default:o((()=>[k])),_:1})])),_:1}),s(B,{class:"gi_my"},{default:o((()=>[s(N,null,{default:o((()=>[s(M,{type:"primary",onClick:T},{icon:o((()=>[s(W)])),default:o((()=>[v])),_:1}),s(M,{type:"primary",status:"danger",onClick:K},{icon:o((()=>[s($)])),default:o((()=>[w])),_:1})])),_:1})])),_:1}),c("section",x,[s(O,{loading:r(z),ref_key:"TableRef",ref:j,"row-key":"id",bordered:{cell:!0},data:r(I),scroll:{x:"100%",y:"100%",minWidth:900},pagination:!1,"row-selection":{type:"checkbox",showCheckedAll:!1},onSelect:q},{"expand-icon":o((({expanded:e})=>[e?(i(),p(E,{key:0})):(i(),p(F,{key:1}))])),columns:o((()=>[s(G,{title:"部门名称","data-index":"name"}),s(G,{title:"排序","data-index":"sort",width:100,align:"center"}),s(G,{title:"状态",width:100,align:"center"},{cell:o((({record:e})=>[1==e.status?(i(),p(H,{key:0,color:"green"},{default:o((()=>[u("正常")])),_:1})):m("",!0),0==e.status?(i(),p(H,{key:1,color:"red"},{default:o((()=>[u("禁用")])),_:1})):m("",!0)])),_:1}),s(G,{title:"描述","data-index":"description",width:250}),s(G,{title:"创建时间","data-index":"createTime",width:200}),s(G,{title:"操作",width:250,align:"center",fixed:"right"},{cell:o((({record:e})=>[s(N,null,{default:o((()=>[s(M,{type:"primary",size:"mini",onClick:a=>{return t=e,void(null==(l=D.value)||l.edit(t.id));var t,l}},{icon:o((()=>[s(J)])),default:o((()=>[C])),_:2},1032,["onClick"]),e.parentId?(i(),p(M,{key:0,type:"primary",status:"success",size:"mini",onClick:t[2]||(t[2]=e=>T())},{icon:o((()=>[s(W)])),default:o((()=>[b])),_:1})):m("",!0),s(L,{type:"warning",content:"您确定要删除该项吗?"},{default:o((()=>[s(M,{type:"primary",status:"danger",size:"mini"},{icon:o((()=>[s($)])),default:o((()=>[V])),_:1})])),_:1})])),_:2},1024)])),_:1})])),_:1},8,["loading","data"])])])),_:1}),s(e,{ref_key:"AddDeptModalRef",ref:D},null,512)])}}});export{D as default};