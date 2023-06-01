import{_ as e}from"./index-214fac0c.js";import{d as a,eM as t,eN as l,g as i,eO as s,r as n,o,c as d,a as r,w as u,V as c,u as m,I as p,e as f,f as _,h as b,eP as g,b as h,eQ as y,n as v,_ as x,eR as z,t as k,D as w,W as V,N as C,p as j,j as R}from"./index-0fea1d78.js";import{u as T}from"./usePagination-7beeb545.js";import{g as I}from"./index-ff13dc14.js";const U={class:"table-box"},P=x(a({name:"GiTable",inheritAttrs:!1,__name:"index",emits:["refresh"],setup(e,{expose:a,emit:x}){const z=t(),k=l(),w=i(null),V=i(!1),C=i("small"),j=i(!0),R=i(null),{isFullscreen:T,toggle:I}=s(R),P=()=>{x("refresh")};return a({tableRef:w}),(e,a)=>{const t=n("a-space"),l=n("a-switch"),i=n("a-tooltip"),s=n("icon-refresh"),x=n("a-button"),A=n("icon-fullscreen"),N=n("icon-fullscreen-exit"),O=n("icon-apps"),S=n("a-radio"),W=n("a-radio-group"),$=n("a-row"),D=n("a-table");return o(),d("div",{class:v(["gi-table",{fullscreen:m(T)}]),ref_key:"giTableRef",ref:R},[r($,{justify:"space-between"},{default:u((()=>[r(t,null,{default:u((()=>[c(e.$slots,"custom-extra",{},void 0,!0)])),_:3}),r(t,{size:15},{default:u((()=>[r(i,{content:"斑马纹"},{default:u((()=>[r(l,{modelValue:m(V),"onUpdate:modelValue":a[0]||(a[0]=e=>p(V)?V.value=e:null),size:"medium"},null,8,["modelValue"])])),_:1}),r(i,{content:"刷新"},{default:u((()=>[r(x,{size:"mini",class:"gi_hover_btn",onClick:P},{icon:u((()=>[r(s,{size:18})])),_:1})])),_:1}),r(i,{content:"全屏"},{default:u((()=>[r(x,{size:"mini",class:"gi_hover_btn",onClick:m(I)},{icon:u((()=>[m(T)?(o(),f(N,{key:1,size:18})):(o(),f(A,{key:0,size:18}))])),_:1},8,["onClick"])])),_:1}),r(i,{content:"显示边框"},{default:u((()=>[r(x,{size:"mini",class:"gi_hover_btn",onClick:a[1]||(a[1]=e=>j.value=!m(j))},{icon:u((()=>[r(O,{size:18})])),_:1})])),_:1}),r(W,{type:"button",size:"mini",modelValue:m(C),"onUpdate:modelValue":a[2]||(a[2]=e=>p(C)?C.value=e:null)},{default:u((()=>[r(S,{value:"mini"},{default:u((()=>[_("小")])),_:1}),r(S,{value:"small"},{default:u((()=>[_("默认")])),_:1}),r(S,{value:"medium"},{default:u((()=>[_("中")])),_:1}),r(S,{value:"large"},{default:u((()=>[_("大")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:3}),b("div",U,[r(D,y(m(z),{stripe:m(V),size:m(C),bordered:{cell:m(j)},ref_key:"tableRef",ref:w}),g({_:2},[h(Object.keys(m(k)),(a=>({name:a,fn:u((()=>[c(e.$slots,a,{},void 0,!0)]))})))]),1040,["stripe","size","bordered"])])],2)}}}),[["__scopeId","data-v-0d54e80f"]]),A=e=>(j("data-v-cb2e9df3"),e=e(),R(),e),N={class:"table-page"},O=A((()=>b("span",null,"新增",-1))),S=A((()=>b("span",null,"删除",-1))),W=A((()=>b("span",null,"导入",-1))),$=x(a({name:"TableCustom",__name:"index",setup(a){const t=i(!1),l=i([]),{pagination:s,setTotal:c}=T((()=>p())),p=async()=>{try{t.value=!0;const e=await I({current:s.current,pageSize:s.pageSize});l.value=e.data.list,c(e.data.total)}catch(e){}finally{t.value=!1}};p();const b=()=>{C.info("点击了新增")},g=()=>{C.info("点击了删除")},h=()=>{C.info("点击了导入")};return(a,i)=>{const c=n("icon-plus"),y=n("a-button"),v=n("icon-delete"),x=n("icon-export"),C=n("a-table-column"),j=n("a-avatar"),R=n("a-switch"),T=n("a-popconfirm"),I=n("a-space"),U=P,A=e,$=z("hasPerm");return o(),d("div",N,[r(U,{"row-key":"id",loading:m(t),data:m(l),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:m(s),onRefresh:p},{"custom-extra":u((()=>[r(y,{type:"primary",onClick:b},{icon:u((()=>[r(c)])),default:u((()=>[O])),_:1}),r(y,{type:"primary",status:"danger",onClick:g},{icon:u((()=>[r(v)])),default:u((()=>[S])),_:1}),r(y,{onClick:h},{icon:u((()=>[r(x)])),default:u((()=>[W])),_:1})])),columns:u((()=>[r(C,{title:"序号",width:66,align:"center"},{cell:u((e=>[_(k(e.rowIndex+1),1)])),_:1}),r(C,{title:"姓名","data-index":"name",width:120}),r(C,{title:"头像",width:80},{cell:u((({record:e})=>[r(j,{size:30,style:w({backgroundColor:e.color})},{default:u((()=>[_(k(e.name[0]),1)])),_:2},1032,["style"])])),_:1}),r(C,{title:"手机号","data-index":"phone",width:150}),r(C,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),r(C,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),r(C,{title:"状态",width:100},{cell:u((({record:e})=>[r(R,{modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,size:"medium"},{checked:u((()=>[_("开启")])),unchecked:u((()=>[_("关闭")])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),r(C,{title:"操作",width:200,align:"left"},{cell:u((({record:e})=>[r(I,null,{default:u((()=>[V((o(),f(y,{type:"primary",size:"mini"},{default:u((()=>[_("修改")])),_:1})),[[$,["table:btn:edit"]]]),r(y,{size:"mini"},{default:u((()=>[_("详情")])),_:1}),r(T,{type:"warning",content:"您确定要删除该项吗?"},{default:u((()=>[r(y,{type:"primary",status:"danger",size:"mini"},{default:u((()=>[_("删除")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination"]),r(A)])}}}),[["__scopeId","data-v-cb2e9df3"]]);export{$ as default};