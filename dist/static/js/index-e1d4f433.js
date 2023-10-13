import{d as e,e as a,r as l,f as t,o as n,c as i,g as d,w as r,i as o,k as s,l as u,x as c,s as p,O as m,h as _,j as f,M as g,L as y}from"./index-f2ac5032.js";import{u as x}from"./usePagination-4c603ad8.js";import{u as h}from"./useDept-afe6248c.js";import{m as w}from"./index-717123f2.js";import{_ as v}from"./AddUserModal.vue_vue_type_script_setup_true_lang-79a81094.js";import{_ as k}from"./UserDetailDrawer.vue_vue_type_script_setup_true_lang-565c436f.js";import"./regexp-53006fbc.js";const b={class:"gi_page user-manage"},C=_("span",null,"新增",-1),j=_("span",null,"删除",-1),V=_("span",null,"查询",-1),U=_("span",null,"重置",-1),D={key:0},A={key:1},L=["src"],M=_("span",null,"编辑",-1),R=_("span",null,"删除",-1),S=e({name:"SystemUser",__name:"index",setup(e){const S=a(),T=a(),z=a(),E=a(""),{deptList:I,getDeptList:N}=h({callback:()=>{y((()=>{var e;null==(e=S.value)||e.expandAll(!0)}))}});N();const O=()=>{var e;null==(e=T.value)||e.add()},P=a([]),W=e=>{P.value=e},q=()=>{if(!P.value.length)return g.warning("请选择用户");g.info("点击了批量删除")},B=l({status:"",username:""}),F=a(!1),G=a([]),{pagination:H,setTotal:J}=x((()=>{K()})),K=async()=>{try{F.value=!0;const e=await w();G.value=e.data.list,J(e.data.total)}catch(e){}finally{F.value=!1}};K();const Q=()=>{H.onChange(1)},X=()=>{B.status="",B.username="",H.onChange(1)};return(e,a)=>{const l=t("icon-search"),g=t("a-input"),y=t("a-tree"),x=t("a-col"),h=t("icon-plus"),w=t("a-button"),N=t("icon-delete"),P=t("a-space"),J=t("a-option"),K=t("a-select"),Y=t("a-input-group"),Z=t("icon-refresh"),$=t("a-row"),ee=t("a-table-column"),ae=t("a-link"),le=t("a-tag"),te=t("a-avatar"),ne=t("icon-edit"),ie=t("a-popconfirm"),de=t("a-table"),re=t("a-card");return n(),i("div",b,[d(re,{title:"用户管理"},{default:r((()=>[d($,{gutter:16},{default:r((()=>[d(x,{xs:0,md:6,lg:6,xl:6,xxl:4},{default:r((()=>[d(g,{modelValue:o(E),"onUpdate:modelValue":a[0]||(a[0]=e=>s(E)?E.value=e:null),placeholder:"输入部门名称搜索","allow-clear":"",style:{"margin-bottom":"10px"}},{prefix:r((()=>[d(l)])),_:1},8,["modelValue"]),d(y,{ref_key:"TreeRef",ref:S,"block-node":"","show-line":"","default-expand-all":"",data:o(I),"field-names":{key:"id",title:"name",children:"children"},onSelect:Q},null,8,["data"])])),_:1}),d(x,{xs:24,md:18,lg:18,xl:18,xxl:20},{default:r((()=>[d($,{justify:"space-between"},{default:r((()=>[d(P,{wrap:""},{default:r((()=>[d(w,{type:"primary",onClick:O},{icon:r((()=>[d(h)])),default:r((()=>[C])),_:1}),d(w,{type:"primary",status:"danger",onClick:q},{icon:r((()=>[d(N)])),default:r((()=>[j])),_:1})])),_:1}),d(P,{wrap:""},{default:r((()=>[d(Y,null,{default:r((()=>[d(K,{modelValue:o(B).status,"onUpdate:modelValue":a[1]||(a[1]=e=>o(B).status=e),placeholder:"用户状态","allow-clear":"",style:{width:"150px"}},{default:r((()=>[d(J,{value:1},{default:r((()=>[u("正常")])),_:1}),d(J,{value:0},{default:r((()=>[u("禁用")])),_:1})])),_:1},8,["modelValue"]),d(g,{modelValue:o(B).username,"onUpdate:modelValue":a[2]||(a[2]=e=>o(B).username=e),placeholder:"输入用户名搜索","allow-clear":"",style:{"max-width":"250px"}},null,8,["modelValue"])])),_:1}),d(w,{type:"primary",onClick:Q},{icon:r((()=>[d(l)])),default:r((()=>[V])),_:1}),d(w,{onClick:X},{icon:r((()=>[d(Z)])),default:r((()=>[U])),_:1})])),_:1})])),_:1}),d(de,{style:{"margin-top":"8px"},"row-key":"id",loading:o(F),data:o(G),bordered:{cell:!0},scroll:{x:"100%",y:"100%",minWidth:1700},pagination:o(H),"row-selection":{type:"checkbox",showCheckedAll:!1},onSelect:W},{columns:r((()=>[d(ee,{title:"序号",width:64},{cell:r((e=>[u(c(e.rowIndex+1),1)])),_:1}),d(ee,{title:"用户名","data-index":"username",width:120},{cell:r((({record:e})=>[d(ae,{onClick:a=>{return l=e,void(null==(t=z.value)||t.open(l.id));var l,t}},{default:r((()=>[u(c(e.username),1)])),_:2},1032,["onClick"])])),_:1}),d(ee,{title:"昵称","data-index":"nickname",width:150}),d(ee,{title:"状态",width:100,align:"center"},{cell:r((({record:e})=>[1===e.status?(n(),p(le,{key:0,color:"green"},{default:r((()=>[u("正常")])),_:1})):m("",!0),0===e.status?(n(),p(le,{key:1,color:"red"},{default:r((()=>[u("禁用")])),_:1})):m("",!0)])),_:1}),d(ee,{title:"性别","data-index":"gender",width:80,align:"center"},{cell:r((({record:e})=>[1===e.gender?(n(),i("span",D,"男")):m("",!0),2===e.gender?(n(),i("span",A,"女")):m("",!0)])),_:1}),d(ee,{title:"头像","data-index":"avatar",width:100,align:"center"},{cell:r((({record:e})=>[d(te,null,{default:r((()=>[_("img",{alt:"avatar",src:e.avatar},null,8,L)])),_:2},1024)])),_:1}),d(ee,{title:"联系方式","data-index":"phone",width:180}),d(ee,{title:"部门","data-index":"deptName",width:180}),d(ee,{title:"类型",width:100,align:"center"},{cell:r((({record:e})=>[1===e.type?(n(),p(le,{key:0,color:"red"},{default:r((()=>[u("系统内置")])),_:1})):m("",!0),2===e.type?(n(),p(le,{key:1,color:"orange"},{default:r((()=>[u("自定义")])),_:1})):m("",!0)])),_:1}),d(ee,{title:"描述",width:200,"data-index":"description"}),d(ee,{title:"创建时间","data-index":"createTime",width:200}),d(ee,{title:"操作",width:180,align:"center",fixed:o(f)()?void 0:"right"},{cell:r((({record:e})=>[d(P,null,{default:r((()=>[d(w,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=T.value)||t.edit(l.id));var l,t}},{icon:r((()=>[d(ne)])),default:r((()=>[M])),_:2},1032,["onClick"]),d(ie,{type:"warning",content:"确定删除该用户吗?"},{default:r((()=>[d(w,{type:"primary",status:"danger",size:"mini",disabled:e.disabled},{icon:r((()=>[d(N)])),default:r((()=>[R])),_:2},1032,["disabled"])])),_:2},1024)])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["loading","data","pagination"])])),_:1})])),_:1})])),_:1}),d(v,{ref_key:"AddUserModalRef",ref:T},null,512),d(k,{ref_key:"UserDetailDrawerRef",ref:z},null,512)])}}});export{S as default};