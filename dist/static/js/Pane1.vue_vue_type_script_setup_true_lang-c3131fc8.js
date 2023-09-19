import{d as e,a,r as t,e as l,Q as i,f as n,o,c as s,i as r,R as d,q as c,w as u,h as p,N as m,g as _,k as f,F as g,t as y,v,S as h,M as k}from"./index-06391a41.js";import{u as w}from"./usePagination-0ab39ee8.js";import x from"./index-02f97735.js";import C from"./EditModal-7d27c83d.js";import{g as b}from"./index-9f1bda09.js";import{S as j}from"./person-ff3306fc.js";const z={class:"data-pane"},S={class:"content"},V={class:"gi_table_box"},M=e({__name:"Pane1",setup(e){const M=a(),{pagination:O,setTotal:q}=w((()=>P())),A=t({name:"",status:""}),E=l([]),N=l(!1),P=async()=>{try{N.value=!0;const e=await b({...A,current:O.current,pageSize:O.pageSize});E.value=e.data.list,q(e.data.total)}catch(e){}finally{N.value=!1}};i((()=>{P()}));const R=()=>{h.warning({title:"提示",content:"是否确认删除？",hideCancel:!1,onOk:()=>{E.value=[]}})},T=l(),U=()=>{var e;null==(e=T.value)||e.add()},B=()=>{if(!D.value.length)return k.warning("请勾选数据");k.success("点击了导出")},D=l([]),F=e=>{D.value=e},I=e=>{D.value=e?E.value.map((e=>e.id)):[]};return(e,a)=>{const t=n("a-card"),l=n("icon-plus"),i=n("a-button"),h=n("icon-delete"),w=n("icon-export"),b=n("a-space"),q=n("a-option"),D=n("a-select"),Q=n("a-input"),W=n("icon-search"),G=n("a-input-group"),H=n("icon-refresh"),J=n("a-row"),K=n("a-table-column"),L=n("a-progress"),X=n("a-tag"),Y=n("a-popconfirm"),Z=n("a-table");return o(),s("div",z,[r(d).browse().isMobile?m("",!0):(o(),c(t,{key:0,title:"数据分类",bordered:!1,class:"gi_card pane-left"},{default:u((()=>[p(x,{placeholder:"请输入搜索关键词",onNodeClick:a[0]||(a[0]=e=>r(O).onChange(1))})])),_:1})),p(t,{title:"数据列表",bordered:!1,"header-style":{display:"none"},class:"gi_card pane-right"},{default:u((()=>[_("div",S,[p(J,{justify:"space-between",style:{"margin-bottom":"12px"}},{default:u((()=>[p(b,null,{default:u((()=>[p(i,{type:"primary",onClick:U},{icon:u((()=>[p(l)])),_:1}),p(i,{type:"primary",status:"danger",onClick:R},{icon:u((()=>[p(h)])),default:u((()=>[f("删除")])),_:1}),p(i,{type:"primary",status:"success",onClick:B},{icon:u((()=>[p(w)])),_:1})])),_:1}),p(b,null,{default:u((()=>[p(D,{modelValue:r(A).status,"onUpdate:modelValue":a[1]||(a[1]=e=>r(A).status=e),class:"gi_select_input",placeholder:"请选择","allow-clear":""},{default:u((()=>[(o(!0),s(g,null,y(r(j),(e=>(o(),c(q,{key:e.value,value:e.value},{default:u((()=>[f(v(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"]),p(G,null,{default:u((()=>[p(Q,{modelValue:r(A).name,"onUpdate:modelValue":a[2]||(a[2]=e=>r(A).name=e),placeholder:"请输入搜索关键词","allow-clear":""},null,8,["modelValue"]),p(i,{type:"primary",onClick:P},{default:u((()=>[p(W)])),_:1})])),_:1}),p(i,{type:"primary",onClick:P},{icon:u((()=>[p(H)])),_:1})])),_:1})])),_:1}),_("section",V,[p(Z,{"row-key":"id",size:"small",loading:r(N),bordered:{cell:!0},data:r(E),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:r(O),onSelect:F,onSelectAll:I},{columns:u((()=>[p(K,{title:"序号",width:68},{cell:u((e=>[f(v(e.rowIndex+1),1)])),_:1}),p(K,{title:"姓名","data-index":"name"}),p(K,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),p(K,{title:"比例",width:200},{cell:u((({record:e})=>{return[p(L,{status:(a=e.proportion,a<30?"danger":a<60?"warning":"success"),percent:e.proportion/100},null,8,["status","percent"])];var a})),_:1}),p(K,{title:"状态",width:100,align:"center"},{cell:u((({record:e})=>[(o(!0),s(g,null,y(r(j),(a=>(o(),s(g,{key:a.value},[a.value===e.status?(o(),c(X,{key:0,size:"small",color:a.color},{default:u((()=>[f(v(a.name),1)])),_:2},1032,["color"])):m("",!0)],64)))),128))])),_:1}),p(K,{title:"创建时间","data-index":"createTime",width:180}),p(K,{title:"操作",width:200,align:"center",fixed:"right"},{cell:u((({record:e})=>[p(b,null,{default:u((()=>[p(i,{type:"primary",size:"mini",onClick:a=>{return t=e,void(null==(l=T.value)||l.edit(t.id));var t,l}},{default:u((()=>[f("修改")])),_:2},1032,["onClick"]),p(i,{size:"mini",onClick:a=>{return t=e,void M.push({path:"/data/detail",query:{id:t.id}});var t}},{default:u((()=>[f("详情")])),_:2},1032,["onClick"]),p(Y,{type:"warning",content:"您确定要删除该项吗?",onOk:a=>(e.id,k.success("删除成功"),void P())},{default:u((()=>[p(i,{type:"primary",status:"danger",size:"mini"},{default:u((()=>[f("删除")])),_:1})])),_:2},1032,["onOk"])])),_:2},1024)])),_:1})])),_:1},8,["loading","data","pagination"])])])])),_:1}),p(C,{ref_key:"EditModalRef",ref:T},null,512)])}}});export{M as _};
