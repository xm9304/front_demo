import{Q as e,R as a,d as t,f as l,o as i,q as n,w as o,h as s,s as r,p as c,l as d,g as u,n as p,e as m,c as f,i as h,j as _,v as g,K as y,M as k,a as v,r as w,S as x,U as z,N as C,k as b,F as V,t as j,V as M}from"./index-36ab56eb.js";import{u as S}from"./usePagination-254507e8.js";import R from"./EditModal-b6842b2f.js";import{g as A}from"./index-96c378cf.js";import{S as N}from"./person-ff3306fc.js";const U=e=>(c("data-v-9d74e82a"),e=e(),d(),e),I=U((()=>u("span",null,"新增",-1))),O=U((()=>u("span",null,"编辑",-1))),q=U((()=>u("span",null,"移动",-1))),D=U((()=>u("span",null,"删除",-1))),E=p(t({__name:"RightMenu",props:{treeData:{}},emits:["click"],setup(e,{emit:a}){const t=e=>{a("click",e)};return(e,a)=>{const c=l("icon-plus-circle"),d=l("a-menu-item"),u=l("icon-edit"),p=l("icon-export"),m=l("icon-right"),f=l("a-space"),h=r,_=l("a-tree"),g=l("a-scrollbar"),y=l("a-popover"),k=l("icon-delete"),v=l("a-menu");return i(),n(v,{class:"right-menu"},{default:o((()=>[s(d,{onClick:a[0]||(a[0]=e=>t("add"))},{icon:o((()=>[s(c,{size:16,"stroke-width":3})])),default:o((()=>[I])),_:1}),s(d,{onClick:a[1]||(a[1]=e=>t("edit"))},{icon:o((()=>[s(u,{size:16,"stroke-width":3})])),default:o((()=>[O])),_:1}),s(y,{position:"right",trigger:"click","content-style":{padding:0,overflow:"hidden"},"unmount-on-close":!1},{content:o((()=>[s(g,{style:{height:"100%",overflow:"auto"},"outer-style":"width: 260px;height: 500px"},{default:o((()=>[s(_,{ref:"treeMoveRef","show-line":"",size:"mini",data:e.treeData[0].children,fieldNames:{key:"id",title:"name"}},{icon:o((e=>[e.children?e.children?(i(),n(h,{key:1,name:"com-file-open",size:16})):(i(),n(h,{key:2,name:"com-file",size:16})):(i(),n(h,{key:0,name:"com-file-close",size:16}))])),_:1},8,["data"])])),_:1})])),default:o((()=>[s(d,{onClick:a[2]||(a[2]=e=>t("move"))},{icon:o((()=>[s(p,{size:16,"stroke-width":3})])),default:o((()=>[s(f,{size:18},{default:o((()=>[q,s(m)])),_:1})])),_:1})])),_:1}),s(d,{onClick:a[3]||(a[3]=e=>t("delete"))},{icon:o((()=>[s(k,{size:16,"stroke-width":3})])),default:o((()=>[D])),_:1})])),_:1})}}}),[["__scopeId","data-v-9d74e82a"]]),P={class:"cate-tree"},T={class:"search-wrap"},B={class:"wrap"},F=p(t({__name:"index",props:{type:{default:1},placeholder:{default:"请输入关键词"}},emits:["node-click"],setup(t,{emit:c}){const d=t,p=m(!1),v=m(),w=m(""),x=m([]),z=()=>{c("node-click")};(async()=>{try{p.value=!0;const t=await e.get(`${a}/cate/tree`);x.value=t.data,y((()=>{v.value.expandAll()}))}catch(t){return t}finally{p.value=!1}})();const C=e=>{"move"!==e&&k.info(e)};return(e,a)=>{const t=l("icon-search"),c=l("a-input"),p=r,m=l("a-trigger"),y=l("a-tree"),k=l("a-scrollbar");return i(),f("div",P,[u("div",T,[s(c,{"allow-clear":"",maxlength:20,placeholder:d.placeholder,modelValue:h(w),"onUpdate:modelValue":a[0]||(a[0]=e=>_(w)?w.value=e:null)},{prefix:o((()=>[s(t)])),_:1},8,["placeholder","modelValue"])]),u("div",B,[s(k,{style:{height:"100%",overflow:"auto"},"outer-style":"height: 100%"},{default:o((()=>[s(y,{ref_key:"treeRef",ref:v,"show-line":"",size:"mini",data:h(x),fieldNames:{key:"id"},onSelect:z},{icon:o((e=>[e.children?e.children?(i(),n(p,{key:1,name:"com-file-open",size:16})):(i(),n(p,{key:2,name:"com-file",size:16})):(i(),n(p,{key:0,name:"com-file-close",size:16}))])),title:o((e=>[s(m,{trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":""},{content:o((()=>[s(E,{"tree-data":h(x),onClick:C},null,8,["tree-data"])])),default:o((()=>[u("div",null,g(e.name),1)])),_:2},1024)])),_:1},8,["data"])])),_:1})])])}}}),[["__scopeId","data-v-0fcc99c8"]]),K={class:"data-pane"},Q={class:"content"},W={class:"gi_table_box"},$=t({__name:"Pane1",setup(e){const a=v(),{pagination:t,setTotal:r}=S((()=>_())),c=w({name:"",status:""}),d=m([]),p=m(!1),_=async()=>{try{p.value=!0;const e=await A({...c,current:t.current,pageSize:t.pageSize});d.value=e.data.list,r(e.data.total)}catch(e){}finally{p.value=!1}};x((()=>{_()}));const y=()=>{M.warning({title:"提示",content:"是否确认删除？",hideCancel:!1,onOk:()=>{d.value=[]}})},U=m(),I=()=>{var e;null==(e=U.value)||e.add()},O=()=>{if(!q.value.length)return k.warning("请勾选数据");k.success("点击了导出")},q=m([]),D=e=>{q.value=e},E=e=>{q.value=e?d.value.map((e=>e.id)):[]};return(e,r)=>{const m=l("a-card"),v=l("icon-plus"),w=l("a-button"),x=l("icon-delete"),M=l("icon-export"),S=l("a-space"),A=l("a-option"),q=l("a-select"),P=l("a-input"),T=l("icon-search"),B=l("a-input-group"),$=l("icon-refresh"),G=l("a-row"),H=l("a-table-column"),J=l("a-progress"),L=l("a-tag"),X=l("a-popconfirm"),Y=l("a-table");return i(),f("div",K,[h(z).browse().isMobile?C("",!0):(i(),n(m,{key:0,title:"数据分类",bordered:!1,class:"gi_card pane-left"},{default:o((()=>[s(F,{placeholder:"请输入搜索关键词",onNodeClick:r[0]||(r[0]=e=>h(t).onChange(1))})])),_:1})),s(m,{title:"数据列表",bordered:!1,"header-style":{display:"none"},class:"gi_card pane-right"},{default:o((()=>[u("div",Q,[s(G,{justify:"space-between",style:{"margin-bottom":"12px"}},{default:o((()=>[s(S,null,{default:o((()=>[s(w,{type:"primary",onClick:I},{icon:o((()=>[s(v)])),_:1}),s(w,{type:"primary",status:"danger",onClick:y},{icon:o((()=>[s(x)])),default:o((()=>[b("删除")])),_:1}),s(w,{type:"primary",status:"success",onClick:O},{icon:o((()=>[s(M)])),_:1})])),_:1}),s(S,null,{default:o((()=>[s(q,{modelValue:h(c).status,"onUpdate:modelValue":r[1]||(r[1]=e=>h(c).status=e),class:"gi_select_input",placeholder:"请选择","allow-clear":""},{default:o((()=>[(i(!0),f(V,null,j(h(N),(e=>(i(),n(A,{key:e.value,value:e.value},{default:o((()=>[b(g(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"]),s(B,null,{default:o((()=>[s(P,{modelValue:h(c).name,"onUpdate:modelValue":r[2]||(r[2]=e=>h(c).name=e),placeholder:"请输入搜索关键词","allow-clear":""},null,8,["modelValue"]),s(w,{type:"primary",onClick:_},{default:o((()=>[s(T)])),_:1})])),_:1}),s(w,{type:"primary",onClick:_},{icon:o((()=>[s($)])),_:1})])),_:1})])),_:1}),u("section",W,[s(Y,{"row-key":"id",size:"small",loading:h(p),bordered:{cell:!0},data:h(d),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:h(t),onSelect:D,onSelectAll:E},{columns:o((()=>[s(H,{title:"序号",width:68},{cell:o((e=>[b(g(e.rowIndex+1),1)])),_:1}),s(H,{title:"姓名","data-index":"name"}),s(H,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),s(H,{title:"比例",width:200},{cell:o((({record:e})=>{return[s(J,{status:(a=e.proportion,a<30?"danger":a<60?"warning":"success"),percent:e.proportion/100},null,8,["status","percent"])];var a})),_:1}),s(H,{title:"状态",width:100,align:"center"},{cell:o((({record:e})=>[(i(!0),f(V,null,j(h(N),(a=>(i(),f(V,{key:a.value},[a.value===e.status?(i(),n(L,{key:0,size:"small",color:a.color},{default:o((()=>[b(g(a.name),1)])),_:2},1032,["color"])):C("",!0)],64)))),128))])),_:1}),s(H,{title:"创建时间","data-index":"createTime",width:180}),s(H,{title:"操作",width:200,align:"center",fixed:"right"},{cell:o((({record:e})=>[s(S,null,{default:o((()=>[s(w,{type:"primary",size:"mini",onClick:a=>{return t=e,void(null==(l=U.value)||l.edit(t.id));var t,l}},{default:o((()=>[b("修改")])),_:2},1032,["onClick"]),s(w,{size:"mini",onClick:t=>{return l=e,void a.push({path:"/data/detail",query:{id:l.id}});var l}},{default:o((()=>[b("详情")])),_:2},1032,["onClick"]),s(X,{type:"warning",content:"您确定要删除该项吗?",onOk:a=>(e.id,k.success("删除成功"),void _())},{default:o((()=>[s(w,{type:"primary",status:"danger",size:"mini"},{default:o((()=>[b("删除")])),_:1})])),_:2},1032,["onOk"])])),_:2},1024)])),_:1})])),_:1},8,["loading","data","pagination"])])])])),_:1}),s(R,{ref_key:"EditModalRef",ref:U},null,512)])}}});export{$ as _};