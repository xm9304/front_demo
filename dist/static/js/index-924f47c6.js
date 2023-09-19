import{_ as e}from"./AddRoleModal.vue_vue_type_script_setup_true_lang-565348bc.js";import{d as a,e as l,r as t,f as i,o as n,c as d,h as s,w as o,i as u,k as r,g as c,v as p,q as m,N as f,M as _}from"./index-36ab56eb.js";import{u as y}from"./usePagination-254507e8.js";import{h as g}from"./index-4287b4d0.js";const h={class:"gi_page role-manage"},v=c("span",null,"查询",-1),w=c("span",null,"重置",-1),x=c("span",null,"新增",-1),b=c("span",null,"删除",-1),k={class:"gi_mt"},C=c("span",null,"编辑",-1),V=c("span",null,"删除",-1),j=a({name:"SystemRole",__name:"index",setup(a){const j=l(),z=t({name:"",status:""}),{pagination:R,setTotal:A}=y((()=>{S()})),M=l(!1),U=l([]),S=async()=>{try{M.value=!0;const e=await g();U.value=e.data.list,A(e.data.total)}catch(e){}finally{M.value=!1}};S();const T=()=>{R.onChange(1)},W=()=>{z.status="",z.status="",R.onChange(1)},q=()=>{var e;null==(e=j.value)||e.add()},I=()=>{_.info("点击了确认按钮")},N=l([]),O=e=>{N.value=e},P=()=>{if(!N.value.length)return _.warning("请选择角色");_.info("点击了批量删除")};return(a,l)=>{const t=i("icon-search"),_=i("a-input"),y=i("a-option"),g=i("a-select"),A=i("a-button"),S=i("icon-refresh"),N=i("a-space"),B=i("icon-plus"),D=i("icon-delete"),E=i("a-row"),F=i("a-table-column"),G=i("a-tag"),H=i("icon-edit"),J=i("icon-safe"),K=i("a-popconfirm"),L=i("a-table"),Q=i("a-card");return n(),d("div",h,[s(Q,{title:"角色管理"},{default:o((()=>[s(N,null,{default:o((()=>[s(_,{modelValue:u(z).name,"onUpdate:modelValue":l[0]||(l[0]=e=>u(z).name=e),placeholder:"输入角色名搜索","allow-clear":"",style:{width:"250px"}},{prefix:o((()=>[s(t)])),_:1},8,["modelValue"]),s(g,{modelValue:u(z).status,"onUpdate:modelValue":l[1]||(l[1]=e=>u(z).status=e),placeholder:"角色状态","allow-clear":"",style:{width:"120px"}},{default:o((()=>[s(y,{value:1},{default:o((()=>[r("正常")])),_:1}),s(y,{value:0},{default:o((()=>[r("禁用")])),_:1})])),_:1},8,["modelValue"]),s(A,{type:"primary",onClick:T},{icon:o((()=>[s(t)])),default:o((()=>[v])),_:1}),s(A,{onClick:W},{icon:o((()=>[s(S)])),default:o((()=>[w])),_:1})])),_:1}),s(E,{class:"gi_my"},{default:o((()=>[s(N,null,{default:o((()=>[s(A,{type:"primary",onClick:q},{icon:o((()=>[s(B)])),default:o((()=>[x])),_:1}),s(A,{type:"primary",status:"danger",onClick:P},{icon:o((()=>[s(D)])),default:o((()=>[b])),_:1})])),_:1})])),_:1}),c("section",k,[s(L,{"row-key":"id",data:u(U),bordered:{cell:!0},loading:u(M),scroll:{x:"100%",y:"100%",minWidth:900},pagination:u(R),"row-selection":{type:"checkbox",showCheckedAll:!1},onSelect:O},{columns:o((()=>[s(F,{title:"序号",width:64},{cell:o((e=>[r(p(e.rowIndex+1),1)])),_:1}),s(F,{title:"角色名称","data-index":"name"}),s(F,{title:"角色编号","data-index":"code"}),s(F,{title:"状态",width:100,align:"center"},{cell:o((({record:e})=>[1==e.status?(n(),m(G,{key:0,color:"green"},{default:o((()=>[r("正常")])),_:1})):f("",!0),0==e.status?(n(),m(G,{key:1,color:"red"},{default:o((()=>[r("禁用")])),_:1})):f("",!0)])),_:1}),s(F,{title:"描述","data-index":"description"}),s(F,{title:"创建时间","data-index":"createTime"}),s(F,{title:"操作",width:280,align:"center",fixed:"right"},{cell:o((({record:e})=>[s(N,null,{default:o((()=>[s(A,{type:"primary",size:"mini",disabled:e.disabled,onClick:a=>{return l=e,void(null==(t=j.value)||t.edit(l.id));var l,t}},{icon:o((()=>[s(H)])),default:o((()=>[C])),_:2},1032,["disabled","onClick"]),s(A,{type:"primary",status:"success",size:"mini",disabled:e.disabled},{icon:o((()=>[s(J)])),default:o((()=>[r("分配权限")])),_:2},1032,["disabled"]),s(K,{type:"warning",content:"确定删除该角色吗?",onOk:I},{default:o((()=>[s(A,{type:"primary",status:"danger",size:"mini",disabled:e.disabled},{icon:o((()=>[s(D)])),default:o((()=>[V])),_:2},1032,["disabled"])])),_:2},1024)])),_:2},1024)])),_:1})])),_:1},8,["data","loading","pagination"])]),s(e,{ref_key:"AddRoleModalRef",ref:j},null,512)])),_:1})])}}});export{j as default};