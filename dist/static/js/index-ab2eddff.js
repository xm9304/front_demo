import{_ as e}from"./AddDeptModal.vue_vue_type_script_setup_true_lang-62d39a62.js";import{d as a,r as t,e as l,f as n,o as i,c as d,g as o,w as s,i as r,l as u,t as c,R as p,j as m,h as f,N as _,M as y}from"./index-e7b4405a.js";import{a as g}from"./useDept-bc1390a1.js";import"./useForm-d27cc9da.js";const h={class:"gi_page dept-manage"},w=f("span",null,"搜索",-1),v=f("span",null,"重置",-1),x=f("span",null,"新增",-1),k=f("span",null,"删除",-1),C=f("span",null,"编辑",-1),b=f("span",null,"新增",-1),V=f("span",null,"删除",-1),j=a({name:"SystemDept",__name:"index",setup(a){const f=t(),j=t(),D=l({name:"",status:""}),A=t(!1),R=t([]),z=async()=>{try{A.value=!0;const e=await g();R.value=e.data,_((()=>{var e;null==(e=j.value)||e.expandAll(!0)}))}finally{A.value=!1}};z();const I=()=>{z()},M=()=>{D.name="",D.status="",z()},N=()=>{var e;null==(e=f.value)||e.add()},S=t([]),T=e=>{S.value=e},U=()=>{if(!S.value.length)return y.warning("请选择部门");y.info("点击了批量删除")};return(a,t)=>{const l=n("icon-search"),_=n("a-input"),y=n("a-option"),g=n("a-select"),z=n("a-button"),S=n("icon-refresh"),F=n("a-space"),W=n("icon-plus"),q=n("icon-delete"),B=n("a-row"),E=n("IconDown"),G=n("IconRight"),H=n("a-table-column"),J=n("a-tag"),K=n("icon-edit"),L=n("a-popconfirm"),O=n("a-table"),P=n("a-card");return i(),d("div",h,[o(P,{title:"部门管理"},{default:s((()=>[o(F,{wrap:""},{default:s((()=>[o(_,{modelValue:r(D).name,"onUpdate:modelValue":t[0]||(t[0]=e=>r(D).name=e),placeholder:"输入部门名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:s((()=>[o(l)])),_:1},8,["modelValue"]),o(g,{modelValue:r(D).status,"onUpdate:modelValue":t[1]||(t[1]=e=>r(D).status=e),placeholder:"部门状态",style:{width:"120px"}},{default:s((()=>[o(y,{value:1},{default:s((()=>[u("正常")])),_:1}),o(y,{value:0},{default:s((()=>[u("禁用")])),_:1})])),_:1},8,["modelValue"]),o(z,{type:"primary",onClick:I},{icon:s((()=>[o(l)])),default:s((()=>[w])),_:1}),o(z,{onClick:M},{icon:s((()=>[o(S)])),default:s((()=>[v])),_:1})])),_:1}),o(B,null,{default:s((()=>[o(F,{wrap:""},{default:s((()=>[o(z,{type:"primary",onClick:N},{icon:s((()=>[o(W)])),default:s((()=>[x])),_:1}),o(z,{type:"primary",status:"danger",onClick:U},{icon:s((()=>[o(q)])),default:s((()=>[k])),_:1})])),_:1})])),_:1}),o(O,{style:{"margin-top":"6px"},ref_key:"TableRef",ref:j,"row-key":"id",bordered:{cell:!0},data:r(R),loading:r(A),scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:!1,"row-selection":{type:"checkbox",showCheckedAll:!1},onSelect:T},{"expand-icon":s((({expanded:e})=>[e?(i(),c(E,{key:0})):(i(),c(G,{key:1}))])),columns:s((()=>[o(H,{title:"部门名称","data-index":"name",width:160}),o(H,{title:"排序","data-index":"sort",width:100,align:"center"}),o(H,{title:"状态",width:100,align:"center"},{cell:s((({record:e})=>[1==e.status?(i(),c(J,{key:0,color:"green"},{default:s((()=>[u("正常")])),_:1})):p("",!0),0==e.status?(i(),c(J,{key:1,color:"red"},{default:s((()=>[u("禁用")])),_:1})):p("",!0)])),_:1}),o(H,{title:"描述","data-index":"description",width:250}),o(H,{title:"创建时间","data-index":"createTime",width:200}),o(H,{title:"操作",width:200,align:"center",fixed:r(m)()?void 0:"right"},{cell:s((({record:e})=>[o(F,null,{default:s((()=>[o(z,{type:"primary",size:"mini",onClick:a=>{return t=e,void(null==(l=f.value)||l.edit(t.id));var t,l}},{icon:s((()=>[o(K)])),default:s((()=>[C])),_:2},1032,["onClick"]),e.parentId?(i(),c(z,{key:0,type:"primary",status:"success",size:"mini",onClick:t[2]||(t[2]=e=>N())},{icon:s((()=>[o(W)])),default:s((()=>[b])),_:1})):p("",!0),o(L,{type:"warning",content:"您确定要删除该项吗?"},{default:s((()=>[o(z,{type:"primary",status:"danger",size:"mini"},{icon:s((()=>[o(q)])),default:s((()=>[V])),_:1})])),_:1})])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading"])])),_:1}),o(e,{ref_key:"AddDeptModalRef",ref:f},null,512)])}}});export{j as default};
