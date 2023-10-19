import{_ as e}from"./index-84d68248.js";import{d as a,eW as t,eX as l,e as i,eY as s,f as n,o,c as d,g as r,w as u,$ as c,i as p,k as m,s as _,l as f,h as g,eZ as b,v as y,e_ as h,y as v,q as x,eV as k,x as w,N as z,a0 as V,M as C,p as j,m as T}from"./index-8021afb3.js";import{u as R}from"./usePagination-1c27e164.js";import{g as U}from"./index-f3fdb367.js";const A={class:"gi_table_box"},I=x(a({name:"GiTable",inheritAttrs:!1,__name:"index",emits:["refresh"],setup(e,{expose:a,emit:x}){const k=t(),w=l(),z=i(null),V=i(!1),C=i("small"),j=i(!0),T=i(null),{isFullscreen:R,toggle:U}=s(T),I=()=>{x("refresh")};return a({tableRef:z}),(e,a)=>{const t=n("a-space"),l=n("a-switch"),i=n("a-tooltip"),s=n("icon-refresh"),x=n("a-button"),$=n("icon-fullscreen"),P=n("icon-fullscreen-exit"),S=n("icon-apps"),W=n("a-radio"),q=n("a-radio-group"),D=n("a-row"),E=n("a-table");return o(),d("div",{class:v(["gi-table",{fullscreen:p(R)}]),ref_key:"giTableRef",ref:T},[r(D,{justify:"space-between",align:"center"},{default:u((()=>[r(t,{wrap:""},{default:u((()=>[c(e.$slots,"custom-extra",{},void 0,!0)])),_:3}),r(t,{size:15,wrap:""},{default:u((()=>[r(i,{content:"斑马纹"},{default:u((()=>[r(l,{modelValue:p(V),"onUpdate:modelValue":a[0]||(a[0]=e=>m(V)?V.value=e:null),size:"small",type:"round"},null,8,["modelValue"])])),_:1}),r(i,{content:"刷新"},{default:u((()=>[r(x,{size:"mini",class:"gi_hover_btn",onClick:I},{icon:u((()=>[r(s,{size:18})])),_:1})])),_:1}),r(i,{content:"全屏"},{default:u((()=>[r(x,{size:"mini",class:"gi_hover_btn",onClick:p(U)},{icon:u((()=>[p(R)?(o(),_(P,{key:1,size:18})):(o(),_($,{key:0,size:18}))])),_:1},8,["onClick"])])),_:1}),r(i,{content:"显示边框"},{default:u((()=>[r(x,{size:"mini",class:"gi_hover_btn",onClick:a[1]||(a[1]=e=>j.value=!p(j))},{icon:u((()=>[r(S,{size:18})])),_:1})])),_:1}),r(q,{type:"button",size:"mini",modelValue:p(C),"onUpdate:modelValue":a[2]||(a[2]=e=>m(C)?C.value=e:null)},{default:u((()=>[r(W,{value:"mini"},{default:u((()=>[f("小")])),_:1}),r(W,{value:"small"},{default:u((()=>[f("默认")])),_:1}),r(W,{value:"medium"},{default:u((()=>[f("中")])),_:1}),r(W,{value:"large"},{default:u((()=>[f("大")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:3}),g("div",A,[r(E,h(p(k),{stripe:p(V),size:p(C),bordered:{cell:p(j)},ref_key:"tableRef",ref:z}),b({_:2},[y(Object.keys(p(w)),(a=>({name:a,fn:u((()=>[c(e.$slots,a,{},void 0,!0)]))})))]),1040,["stripe","size","bordered"])])],2)}}}),[["__scopeId","data-v-94d349f6"]]),$=e=>(j("data-v-7de21b64"),e=e(),T(),e),P={class:"table-page"},S=$((()=>g("span",null,"新增",-1))),W=$((()=>g("span",null,"删除",-1))),q=$((()=>g("span",null,"导入",-1))),D=x(a({name:"TableCustom",__name:"index",setup(a){const t=i(!1),l=i([]),{pagination:s,setTotal:c}=R((()=>m())),m=async()=>{try{t.value=!0;const e=await U({current:s.current,pageSize:s.pageSize});l.value=e.data.list,c(e.data.total)}catch(e){}finally{t.value=!1}};m();const g=()=>{C.info("点击了新增")},b=()=>{C.info("点击了删除")},y=()=>{C.info("点击了导入")};return(a,i)=>{const c=n("icon-plus"),h=n("a-button"),v=n("icon-delete"),x=n("icon-export"),C=n("a-table-column"),j=n("a-avatar"),T=n("a-switch"),R=n("a-popconfirm"),U=n("a-space"),A=I,$=e,D=k("hasPerm");return o(),d("div",P,[r(A,{"row-key":"id",loading:p(t),data:p(l),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:p(s),onRefresh:m},{"custom-extra":u((()=>[r(h,{type:"primary",onClick:g},{icon:u((()=>[r(c)])),default:u((()=>[S])),_:1}),r(h,{type:"primary",status:"danger",onClick:b},{icon:u((()=>[r(v)])),default:u((()=>[W])),_:1}),r(h,{onClick:y},{icon:u((()=>[r(x)])),default:u((()=>[q])),_:1})])),columns:u((()=>[r(C,{title:"序号",width:66,align:"center"},{cell:u((e=>[f(w(e.rowIndex+1),1)])),_:1}),r(C,{title:"姓名","data-index":"name",width:120}),r(C,{title:"头像",width:80},{cell:u((({record:e})=>[r(j,{size:30,style:z({backgroundColor:e.color})},{default:u((()=>[f(w(e.name[0]),1)])),_:2},1032,["style"])])),_:1}),r(C,{title:"手机号","data-index":"phone",width:150}),r(C,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),r(C,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),r(C,{title:"状态",width:100,align:"center"},{cell:u((({record:e})=>[r(T,{modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,type:"round",size:"medium"},{checked:u((()=>[f("开启")])),unchecked:u((()=>[f("关闭")])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),r(C,{title:"操作",width:200,align:"center"},{cell:u((({record:e})=>[r(U,null,{default:u((()=>[V((o(),_(h,{type:"primary",size:"mini"},{default:u((()=>[f("修改")])),_:1})),[[D,["table:btn:edit"]]]),r(h,{size:"mini"},{default:u((()=>[f("详情")])),_:1}),r(R,{type:"warning",content:"您确定要删除该项吗?"},{default:u((()=>[r(h,{type:"primary",status:"danger",size:"mini"},{default:u((()=>[f("删除")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination"]),r($)])}}}),[["__scopeId","data-v-7de21b64"]]);export{D as default};
