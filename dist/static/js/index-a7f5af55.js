import{d as e,r as a,e as l,f as t,o as n,c as d,g as i,w as r,i as s,k as o,l as u,y as c,t as p,R as m,h as _,j as f,M as g,N as y}from"./index-8e74274a.js";import{u as x}from"./useTable-91da6245.js";import{u as h}from"./useDept-c77af559.js";import{w,x as k}from"./index-8b353c92.js";import{_ as v}from"./AddUserModal.vue_vue_type_script_setup_true_lang-c5736dc9.js";import{_ as b}from"./UserDetailDrawer.vue_vue_type_script_setup_true_lang-69a4caec.js";import"./usePagination-cc861d80.js";import"./regexp-2217f7b7.js";const j={class:"gi_page user-manage"},C=_("span",null,"新增",-1),S=_("span",null,"删除",-1),V=_("span",null,"查询",-1),D=_("span",null,"重置",-1),U={key:0},A={key:1},M=["src"],z=_("span",null,"编辑",-1),R=_("span",null,"删除",-1),L=e({name:"SystemUser",__name:"index",setup(e){const L=a(),T=a(),B=a(),N=a(""),{deptList:O,getDeptList:E}=h({onSuccess:()=>{y((()=>{var e;null==(e=L.value)||e.expandAll(!0)}))}});E();const I=l({status:"",username:""}),{loading:K,tableData:P,pagination:W,selectedKeys:q,search:F,select:G,selectAll:H,handleDelete:J}=x((e=>w({current:e.page,pageSize:e.size})),{immediate:!0}),Q=()=>{I.status="",I.username="",F()},X=()=>{if(!q.value.length)return g.warning("请选择用户！");J((()=>k({ids:q.value})))},Y=()=>{var e;null==(e=T.value)||e.add()};return(e,a)=>{const l=t("icon-search"),g=t("a-input"),y=t("a-tree"),x=t("a-col"),h=t("icon-plus"),w=t("a-button"),E=t("icon-delete"),Z=t("a-space"),$=t("a-option"),ee=t("a-select"),ae=t("a-input-group"),le=t("icon-refresh"),te=t("a-row"),ne=t("a-table-column"),de=t("a-link"),ie=t("a-tag"),re=t("a-avatar"),se=t("icon-edit"),oe=t("a-popconfirm"),ue=t("a-table"),ce=t("a-card");return n(),d("div",j,[i(ce,{title:"用户管理"},{default:r((()=>[i(te,{gutter:16},{default:r((()=>[i(x,{xs:0,md:6,lg:6,xl:6,xxl:4},{default:r((()=>[i(g,{modelValue:s(N),"onUpdate:modelValue":a[0]||(a[0]=e=>o(N)?N.value=e:null),placeholder:"输入部门名称搜索","allow-clear":"",style:{"margin-bottom":"10px"}},{prefix:r((()=>[i(l)])),_:1},8,["modelValue"]),i(y,{ref_key:"TreeRef",ref:L,"block-node":"","show-line":"","default-expand-all":"",data:s(O),"field-names":{key:"id",title:"name",children:"children"},onSelect:s(F)},null,8,["data","onSelect"])])),_:1}),i(x,{xs:24,md:18,lg:18,xl:18,xxl:20},{default:r((()=>[i(te,{justify:"space-between"},{default:r((()=>[i(Z,{wrap:""},{default:r((()=>[i(w,{type:"primary",onClick:Y},{icon:r((()=>[i(h)])),default:r((()=>[C])),_:1}),i(w,{type:"primary",status:"danger",onClick:X},{icon:r((()=>[i(E)])),default:r((()=>[S])),_:1})])),_:1}),i(Z,{wrap:""},{default:r((()=>[i(ae,null,{default:r((()=>[i(ee,{modelValue:s(I).status,"onUpdate:modelValue":a[1]||(a[1]=e=>s(I).status=e),placeholder:"用户状态","allow-clear":"",style:{width:"150px"}},{default:r((()=>[i($,{value:1},{default:r((()=>[u("正常")])),_:1}),i($,{value:0},{default:r((()=>[u("禁用")])),_:1})])),_:1},8,["modelValue"]),i(g,{modelValue:s(I).username,"onUpdate:modelValue":a[2]||(a[2]=e=>s(I).username=e),placeholder:"输入用户名搜索","allow-clear":"",style:{"max-width":"250px"}},null,8,["modelValue"])])),_:1}),i(w,{type:"primary",onClick:s(F)},{icon:r((()=>[i(l)])),default:r((()=>[V])),_:1},8,["onClick"]),i(w,{onClick:Q},{icon:r((()=>[i(le)])),default:r((()=>[D])),_:1})])),_:1})])),_:1}),i(ue,{style:{"margin-top":"8px"},"row-key":"id",loading:s(K),data:s(P),bordered:{cell:!0},scroll:{x:"100%",y:"100%",minWidth:1700},pagination:s(W),"row-selection":{type:"checkbox",showCheckedAll:!0},"selected-keys":s(q),onSelect:s(G),onSelectAll:s(H)},{columns:r((()=>[i(ne,{title:"序号",width:64},{cell:r((e=>[u(c(e.rowIndex+1),1)])),_:1}),i(ne,{title:"用户名","data-index":"username",width:120},{cell:r((({record:e})=>[i(de,{onClick:a=>{return l=e,void(null==(t=B.value)||t.open(l.id));var l,t}},{default:r((()=>[u(c(e.username),1)])),_:2},1032,["onClick"])])),_:1}),i(ne,{title:"昵称","data-index":"nickname",width:150}),i(ne,{title:"状态",width:100,align:"center"},{cell:r((({record:e})=>[1===e.status?(n(),p(ie,{key:0,color:"green"},{default:r((()=>[u("正常")])),_:1})):m("",!0),0===e.status?(n(),p(ie,{key:1,color:"red"},{default:r((()=>[u("禁用")])),_:1})):m("",!0)])),_:1}),i(ne,{title:"性别","data-index":"gender",width:80,align:"center"},{cell:r((({record:e})=>[1===e.gender?(n(),d("span",U,"男")):m("",!0),2===e.gender?(n(),d("span",A,"女")):m("",!0)])),_:1}),i(ne,{title:"头像","data-index":"avatar",width:100,align:"center"},{cell:r((({record:e})=>[i(re,null,{default:r((()=>[_("img",{alt:"avatar",src:e.avatar},null,8,M)])),_:2},1024)])),_:1}),i(ne,{title:"联系方式","data-index":"phone",width:180}),i(ne,{title:"部门","data-index":"deptName",width:180}),i(ne,{title:"类型",width:100,align:"center"},{cell:r((({record:e})=>[1===e.type?(n(),p(ie,{key:0,color:"red"},{default:r((()=>[u("系统内置")])),_:1})):m("",!0),2===e.type?(n(),p(ie,{key:1,color:"orange"},{default:r((()=>[u("自定义")])),_:1})):m("",!0)])),_:1}),i(ne,{title:"描述",width:200,"data-index":"description"}),i(ne,{title:"创建时间","data-index":"createTime",width:200}),i(ne,{title:"操作",width:180,align:"center",fixed:s(f)()?void 0:"right"},{cell:r((({record:e})=>[i(Z,null,{default:r((()=>[i(w,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=T.value)||t.edit(l.id));var l,t}},{icon:r((()=>[i(se)])),default:r((()=>[z])),_:2},1032,["onClick"]),i(oe,{type:"warning",content:"确定删除该用户吗?",onBeforeOk:a=>{return l=e,J((()=>k({ids:[l.id]})),{showModal:!1});var l}},{default:r((()=>[i(w,{type:"primary",status:"danger",size:"mini",disabled:e.disabled},{icon:r((()=>[i(E)])),default:r((()=>[R])),_:2},1032,["disabled"])])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["loading","data","pagination","selected-keys","onSelect","onSelectAll"])])),_:1})])),_:1})])),_:1}),i(v,{ref_key:"AddUserModalRef",ref:T},null,512),i(b,{ref_key:"UserDetailDrawerRef",ref:B},null,512)])}}});export{L as default};
