import{_ as e}from"./index-537afc35.js";import{d as a,eV as t,eW as l,e as i,eX as n,f as s,o,c as d,g as r,w as u,Z as c,i as p,j as m,q as _,k as f,h as g,eY as b,t as h,eZ as y,x as v,n as x,eU as z,v as k,L as w,$ as V,M as C,p as j,l as T}from"./index-fe99f811.js";import{u as U}from"./usePagination-8c604fe8.js";import{g as R}from"./index-a9bd2a28.js";const I={class:"gi_table_box"},$=x(a({name:"GiTable",inheritAttrs:!1,__name:"index",emits:["refresh"],setup(e,{expose:a,emit:x}){const z=t(),k=l(),w=i(null),V=i(!1),C=i("small"),j=i(!0),T=i(null),{isFullscreen:U,toggle:R}=n(T),$=()=>{x("refresh")};return a({tableRef:w}),(e,a)=>{const t=s("a-space"),l=s("a-switch"),i=s("a-tooltip"),n=s("icon-refresh"),x=s("a-button"),A=s("icon-fullscreen"),P=s("icon-fullscreen-exit"),S=s("icon-apps"),W=s("a-radio"),Z=s("a-radio-group"),q=s("a-row"),D=s("a-table");return o(),d("div",{class:v(["gi-table",{fullscreen:p(U)}]),ref_key:"giTableRef",ref:T},[r(q,{justify:"space-between",align:"center"},{default:u((()=>[r(t,{wrap:""},{default:u((()=>[c(e.$slots,"custom-extra",{},void 0,!0)])),_:3}),r(t,{size:15,wrap:""},{default:u((()=>[r(i,{content:"斑马纹"},{default:u((()=>[r(l,{modelValue:p(V),"onUpdate:modelValue":a[0]||(a[0]=e=>m(V)?V.value=e:null),size:"small",type:"round"},null,8,["modelValue"])])),_:1}),r(i,{content:"刷新"},{default:u((()=>[r(x,{size:"mini",class:"gi_hover_btn",onClick:$},{icon:u((()=>[r(n,{size:18})])),_:1})])),_:1}),r(i,{content:"全屏"},{default:u((()=>[r(x,{size:"mini",class:"gi_hover_btn",onClick:p(R)},{icon:u((()=>[p(U)?(o(),_(P,{key:1,size:18})):(o(),_(A,{key:0,size:18}))])),_:1},8,["onClick"])])),_:1}),r(i,{content:"显示边框"},{default:u((()=>[r(x,{size:"mini",class:"gi_hover_btn",onClick:a[1]||(a[1]=e=>j.value=!p(j))},{icon:u((()=>[r(S,{size:18})])),_:1})])),_:1}),r(Z,{type:"button",size:"mini",modelValue:p(C),"onUpdate:modelValue":a[2]||(a[2]=e=>m(C)?C.value=e:null)},{default:u((()=>[r(W,{value:"mini"},{default:u((()=>[f("小")])),_:1}),r(W,{value:"small"},{default:u((()=>[f("默认")])),_:1}),r(W,{value:"medium"},{default:u((()=>[f("中")])),_:1}),r(W,{value:"large"},{default:u((()=>[f("大")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:3}),g("div",I,[r(D,y(p(z),{stripe:p(V),size:p(C),bordered:{cell:p(j)},ref_key:"tableRef",ref:w}),b({_:2},[h(Object.keys(p(k)),(a=>({name:a,fn:u((()=>[c(e.$slots,a,{},void 0,!0)]))})))]),1040,["stripe","size","bordered"])])],2)}}}),[["__scopeId","data-v-94d349f6"]]),A=e=>(j("data-v-7de21b64"),e=e(),T(),e),P={class:"table-page"},S=A((()=>g("span",null,"新增",-1))),W=A((()=>g("span",null,"删除",-1))),Z=A((()=>g("span",null,"导入",-1))),q=x(a({name:"TableCustom",__name:"index",setup(a){const t=i(!1),l=i([]),{pagination:n,setTotal:c}=U((()=>m())),m=async()=>{try{t.value=!0;const e=await R({current:n.current,pageSize:n.pageSize});l.value=e.data.list,c(e.data.total)}catch(e){}finally{t.value=!1}};m();const g=()=>{C.info("点击了新增")},b=()=>{C.info("点击了删除")},h=()=>{C.info("点击了导入")};return(a,i)=>{const c=s("icon-plus"),y=s("a-button"),v=s("icon-delete"),x=s("icon-export"),C=s("a-table-column"),j=s("a-avatar"),T=s("a-switch"),U=s("a-popconfirm"),R=s("a-space"),I=$,A=e,q=z("hasPerm");return o(),d("div",P,[r(I,{"row-key":"id",loading:p(t),data:p(l),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:p(n),onRefresh:m},{"custom-extra":u((()=>[r(y,{type:"primary",onClick:g},{icon:u((()=>[r(c)])),default:u((()=>[S])),_:1}),r(y,{type:"primary",status:"danger",onClick:b},{icon:u((()=>[r(v)])),default:u((()=>[W])),_:1}),r(y,{onClick:h},{icon:u((()=>[r(x)])),default:u((()=>[Z])),_:1})])),columns:u((()=>[r(C,{title:"序号",width:66,align:"center"},{cell:u((e=>[f(k(e.rowIndex+1),1)])),_:1}),r(C,{title:"姓名","data-index":"name",width:120}),r(C,{title:"头像",width:80},{cell:u((({record:e})=>[r(j,{size:30,style:w({backgroundColor:e.color})},{default:u((()=>[f(k(e.name[0]),1)])),_:2},1032,["style"])])),_:1}),r(C,{title:"手机号","data-index":"phone",width:150}),r(C,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),r(C,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),r(C,{title:"状态",width:100,align:"center"},{cell:u((({record:e})=>[r(T,{modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,type:"round",size:"medium"},{checked:u((()=>[f("开启")])),unchecked:u((()=>[f("关闭")])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),r(C,{title:"操作",width:200,align:"center"},{cell:u((({record:e})=>[r(R,null,{default:u((()=>[V((o(),_(y,{type:"primary",size:"mini"},{default:u((()=>[f("修改")])),_:1})),[[q,["table:btn:edit"]]]),r(y,{size:"mini"},{default:u((()=>[f("详情")])),_:1}),r(U,{type:"warning",content:"您确定要删除该项吗?"},{default:u((()=>[r(y,{type:"primary",status:"danger",size:"mini"},{default:u((()=>[f("删除")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination"]),r(A)])}}}),[["__scopeId","data-v-7de21b64"]]);export{q as default};
