import{_ as e}from"./AddRoleModal.vue_vue_type_script_setup_true_lang-0f35cf9c.js";import{_ as a}from"./PermModal.vue_vue_type_script_setup_true_lang-1e5b48d1.js";import{u as l}from"./usePagination-a64ab1b2.js";import{d as t,e as n,r as i,f as d,o,c as s,g as r,w as u,i as c,l as p,y as m,t as _,P as f,j as y,h as g,M as v}from"./index-5690b7e6.js";import{j as h}from"./index-2f309881.js";const w={class:"gi_page role-manage"},x=g("span",null,"查询",-1),k=g("span",null,"重置",-1),b=g("span",null,"新增",-1),C=g("span",null,"删除",-1),j=g("span",null,"编辑",-1),V=g("span",null,"删除",-1),M=t({name:"SystemRole",__name:"index",setup(t){const g=n(),M=n(),R=i({name:"",status:""}),{pagination:P,setTotal:z}=l((()=>{T()})),A=n(!1),S=n([]),T=async()=>{try{A.value=!0;const e=await h();S.value=e.data.records,z(e.data.total)}catch(e){}finally{A.value=!1}};T();const U=()=>{P.onChange(1)},I=()=>{R.status="",R.status="",P.onChange(1)},J=()=>{var e;null==(e=g.value)||e.add()},O=()=>{v.info("点击了确认按钮")},W=n([]),q=e=>{W.value=e},B=()=>{if(!W.value.length)return v.warning("请选择角色");v.info("点击了批量删除")};return(l,t)=>{const n=d("icon-search"),i=d("a-input"),v=d("a-option"),h=d("a-select"),z=d("a-button"),T=d("icon-refresh"),W=d("a-space"),D=d("icon-plus"),E=d("icon-delete"),F=d("a-row"),G=d("a-table-column"),H=d("a-tag"),K=d("icon-edit"),L=d("icon-safe"),N=d("a-popconfirm"),Q=d("a-table"),X=d("a-card");return o(),s("div",w,[r(X,{title:"角色管理"},{default:u((()=>[r(W,{wrap:""},{default:u((()=>[r(i,{modelValue:c(R).name,"onUpdate:modelValue":t[0]||(t[0]=e=>c(R).name=e),placeholder:"输入角色名搜索","allow-clear":"",style:{width:"250px"}},{prefix:u((()=>[r(n)])),_:1},8,["modelValue"]),r(h,{modelValue:c(R).status,"onUpdate:modelValue":t[1]||(t[1]=e=>c(R).status=e),placeholder:"角色状态","allow-clear":"",style:{width:"120px"}},{default:u((()=>[r(v,{value:1},{default:u((()=>[p("正常")])),_:1}),r(v,{value:0},{default:u((()=>[p("禁用")])),_:1})])),_:1},8,["modelValue"]),r(z,{type:"primary",onClick:U},{icon:u((()=>[r(n)])),default:u((()=>[x])),_:1}),r(z,{onClick:I},{icon:u((()=>[r(T)])),default:u((()=>[k])),_:1})])),_:1}),r(F,null,{default:u((()=>[r(W,{wrap:""},{default:u((()=>[r(z,{type:"primary",onClick:J},{icon:u((()=>[r(D)])),default:u((()=>[b])),_:1}),r(z,{type:"primary",status:"danger",onClick:B},{icon:u((()=>[r(E)])),default:u((()=>[C])),_:1})])),_:1})])),_:1}),r(Q,{style:{"margin-top":"8px"},"row-key":"id",data:c(S),bordered:{cell:!0},loading:c(A),scroll:{x:"100%",y:"100%",minWidth:900},pagination:c(P),"row-selection":{type:"checkbox",showCheckedAll:!1},onSelect:q},{columns:u((()=>[r(G,{title:"序号",width:64},{cell:u((e=>[p(m(e.rowIndex+1),1)])),_:1}),r(G,{title:"角色名称","data-index":"name"}),r(G,{title:"角色编号","data-index":"code"}),r(G,{title:"状态",width:100,align:"center"},{cell:u((({record:e})=>[1==e.status?(o(),_(H,{key:0,color:"green"},{default:u((()=>[p("正常")])),_:1})):f("",!0),0==e.status?(o(),_(H,{key:1,color:"red"},{default:u((()=>[p("禁用")])),_:1})):f("",!0)])),_:1}),r(G,{title:"描述","data-index":"description"}),r(G,{title:"创建时间","data-index":"createTime"}),r(G,{title:"操作",width:280,align:"center",fixed:c(y)()?void 0:"right"},{cell:u((({record:e})=>[r(W,null,{default:u((()=>[r(z,{type:"primary",size:"mini",disabled:e.disabled,onClick:a=>{return l=e,void(null==(t=g.value)||t.edit(l.id));var l,t}},{icon:u((()=>[r(K)])),default:u((()=>[j])),_:2},1032,["disabled","onClick"]),r(z,{type:"primary",status:"success",size:"mini",disabled:e.disabled,onClick:a=>{return l=e,void(null==(t=M.value)||t.open({code:l.code,title:l.name}));var l,t}},{icon:u((()=>[r(L)])),default:u((()=>[p("分配权限")])),_:2},1032,["disabled","onClick"]),r(N,{type:"warning",content:"确定删除该角色吗?",onOk:O},{default:u((()=>[r(z,{type:"primary",status:"danger",size:"mini",disabled:e.disabled},{icon:u((()=>[r(E)])),default:u((()=>[V])),_:2},1032,["disabled"])])),_:2},1024)])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading","pagination"]),r(e,{ref_key:"AddRoleModalRef",ref:g},null,512),r(a,{ref_key:"PermModalRef",ref:M},null,512)])),_:1})])}}});export{M as default};
