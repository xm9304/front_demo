import{d as e,r as a,f as l,o as t,t as n,w as i,g as o,i as s,l as d,y as c,R as r,k as u,h as p,M as m}from"./index-7473d946.js";import{c as _,d as v}from"./dict-fd9517e0.js";import{u as f}from"./useTable-d0e26b4f.js";import{_ as y}from"./AddDictDataModal.vue_vue_type_script_setup_true_lang-476f7f9f.js";const g=p("span",null,"新增",-1),k=p("span",null,"删除",-1),h=p("span",null,"编辑",-1),w=p("span",null,"删除",-1),x=e({__name:"index",setup(e,{expose:p}){const x=a(!1),b=a(),S=a("");p({open:e=>{A.value=[],S.value=e.code,x.value=!0,C()}});const{loading:z,tableData:A,pagination:D,selectedKeys:j,search:C,select:M,selectAll:B,handleDelete:O}=f((e=>_({current:e.page,pageSize:e.size,code:S.value})),{immediate:!1}),R=()=>{if(!j.value.length)return m.warning("请选择字典数据！");O((()=>v({ids:j.value,code:S.value})))},W=()=>{var e;null==(e=b.value)||e.add()};return(e,a)=>{const p=l("icon-plus"),m=l("a-button"),_=l("icon-delete"),f=l("a-space"),I=l("a-row"),K=l("a-table-column"),L=l("a-tag"),T=l("icon-edit"),U=l("a-popconfirm"),q=l("a-table"),E=l("a-modal");return t(),n(E,{visible:s(x),"onUpdate:visible":a[0]||(a[0]=e=>u(x)?x.value=e:null),title:"字典数据",width:"90%","hide-cancel":"","ok-text":"关闭","mask-closable":!1,"modal-style":{maxWidth:"680px"}},{default:i((()=>[o(I,null,{default:i((()=>[o(f,{wrap:""},{default:i((()=>[o(m,{type:"primary",onClick:W},{icon:i((()=>[o(p)])),default:i((()=>[g])),_:1}),o(m,{type:"primary",status:"danger",onClick:R},{icon:i((()=>[o(_)])),default:i((()=>[k])),_:1})])),_:1})])),_:1}),o(q,{"row-key":"id",size:"small",data:s(A),bordered:{cell:!0},loading:s(z),scroll:{x:"100%",y:"100%",minWidth:400},pagination:{...s(D),size:"small"},"row-selection":{type:"checkbox",showCheckedAll:!0},"selected-keys":s(j),onSelect:s(M),onSelectAll:s(B)},{columns:i((()=>[o(K,{title:"序号",width:64},{cell:i((e=>[d(c(e.rowIndex+1),1)])),_:1}),o(K,{title:"字典名","data-index":"name"}),o(K,{title:"字典值","data-index":"value"}),o(K,{title:"状态",width:100,align:"center"},{cell:i((({record:e})=>[1==e.status?(t(),n(L,{key:0,color:"green"},{default:i((()=>[d("启用")])),_:1})):r("",!0),0==e.status?(t(),n(L,{key:1,color:"red"},{default:i((()=>[d("禁用")])),_:1})):r("",!0)])),_:1}),o(K,{title:"操作",width:180,align:"center"},{cell:i((({record:e})=>[o(f,null,{default:i((()=>[o(m,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=b.value)||t.edit({id:l.id,code:S.value}));var l,t}},{icon:i((()=>[o(T)])),default:i((()=>[h])),_:2},1032,["onClick"]),o(U,{type:"warning",content:"确定删除该角色吗?",onBeforeOk:a=>{return l=e,O((()=>v({ids:[l.id],code:S.value})),{showModal:!1});var l}},{default:i((()=>[o(m,{type:"primary",status:"danger",size:"mini"},{icon:i((()=>[o(_)])),default:i((()=>[w])),_:1})])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1})])),_:1},8,["data","loading","pagination","selected-keys","onSelect","onSelectAll"]),o(y,{ref_key:"AddDictDataModalRef",ref:b,onSaveSuccess:s(C)},null,8,["onSaveSuccess"])])),_:1},8,["visible"])}}});export{x as _};