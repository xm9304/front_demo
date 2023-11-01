import{_ as e}from"./index-4e605d73.js";import{d as a,eX as t,eY as l,e as i,eZ as n,f as s,o,c as d,g as r,w as c,$ as u,i as p,k as m,s as _,l as f,h as g,e_ as y,v as h,eR as v,y as b,q as k,x as w,N as x,M as z,p as C,m as V}from"./index-615da61f.js";import{u as j}from"./usePagination-7dd46c3e.js";import{g as R}from"./index-92b4d41b.js";const T={class:""},I=k(a({name:"GiTable",inheritAttrs:!1,__name:"index",emits:["refresh"],setup(e,{expose:a,emit:k}){const w=t(),x=l(),z=i(null),C=i(!1),V=i("small"),j=i(!0),R=i(null),{isFullscreen:I,toggle:U}=n(R),$=()=>{k("refresh")};return a({tableRef:z}),(e,a)=>{const t=s("a-space"),l=s("a-switch"),i=s("a-tooltip"),n=s("icon-refresh"),k=s("a-button"),A=s("icon-fullscreen"),F=s("icon-fullscreen-exit"),S=s("icon-apps"),q=s("a-radio"),G=s("a-radio-group"),J=s("a-row"),M=s("a-table");return o(),d("div",{class:b(["gi-table",{fullscreen:p(I)}]),ref_key:"giTableRef",ref:R},[r(J,{justify:"space-between",align:"center"},{default:c((()=>[r(t,{wrap:""},{default:c((()=>[u(e.$slots,"custom-extra",{},void 0,!0)])),_:3}),r(t,{size:15,wrap:""},{default:c((()=>[r(i,{content:"斑马纹"},{default:c((()=>[r(l,{modelValue:p(C),"onUpdate:modelValue":a[0]||(a[0]=e=>m(C)?C.value=e:null),size:"small",type:"round"},null,8,["modelValue"])])),_:1}),r(i,{content:"刷新"},{default:c((()=>[r(k,{size:"mini",class:"gi_hover_btn",onClick:$},{icon:c((()=>[r(n,{size:18})])),_:1})])),_:1}),r(i,{content:"全屏"},{default:c((()=>[r(k,{size:"mini",class:"gi_hover_btn",onClick:p(U)},{icon:c((()=>[p(I)?(o(),_(F,{key:1,size:18})):(o(),_(A,{key:0,size:18}))])),_:1},8,["onClick"])])),_:1}),r(i,{content:"显示边框"},{default:c((()=>[r(k,{size:"mini",class:"gi_hover_btn",onClick:a[1]||(a[1]=e=>j.value=!p(j))},{icon:c((()=>[r(S,{size:18})])),_:1})])),_:1}),r(G,{type:"button",size:"mini",modelValue:p(V),"onUpdate:modelValue":a[2]||(a[2]=e=>m(V)?V.value=e:null)},{default:c((()=>[r(q,{value:"mini"},{default:c((()=>[f("小")])),_:1}),r(q,{value:"small"},{default:c((()=>[f("默认")])),_:1}),r(q,{value:"medium"},{default:c((()=>[f("中")])),_:1}),r(q,{value:"large"},{default:c((()=>[f("大")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:3}),g("div",T,[r(M,v({stripe:p(C),size:p(V),bordered:{cell:p(j)}},p(w),{ref_key:"tableRef",ref:z}),y({_:2},[h(Object.keys(p(x)),(a=>({name:a,fn:c((()=>[u(e.$slots,a,{},void 0,!0)]))})))]),1040,["stripe","size","bordered"])])],2)}}}),[["__scopeId","data-v-669ed4ab"]]),U=e=>(C("data-v-45ce1472"),e=e(),V(),e),$={class:"table-page"},A=U((()=>g("span",null,"新增",-1))),F=U((()=>g("span",null,"删除",-1))),S=U((()=>g("span",null,"导入",-1))),q=k(a({name:"TableCustom",__name:"index",setup(a){const t=i(!1),l=i([]),{pagination:n,setTotal:u}=j((()=>m())),m=async()=>{try{t.value=!0;const e=await R({current:n.current,pageSize:n.pageSize});l.value=e.data.list,u(e.data.total)}catch(e){}finally{t.value=!1}};m();const _=()=>{z.info("点击了新增")},g=()=>{z.info("点击了删除")},y=()=>{z.info("点击了导入")};return(a,i)=>{const u=s("icon-plus"),h=s("a-button"),v=s("icon-delete"),b=s("icon-export"),k=s("a-table-column"),z=s("a-avatar"),C=s("a-switch"),V=s("a-popconfirm"),j=s("a-space"),R=I,T=e;return o(),d("div",$,[r(R,{"row-key":"id",loading:p(t),data:p(l),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:p(n),onRefresh:m},{"custom-extra":c((()=>[r(h,{type:"primary",onClick:_},{icon:c((()=>[r(u)])),default:c((()=>[A])),_:1}),r(h,{type:"primary",status:"danger",onClick:g},{icon:c((()=>[r(v)])),default:c((()=>[F])),_:1}),r(h,{onClick:y},{icon:c((()=>[r(b)])),default:c((()=>[S])),_:1})])),columns:c((()=>[r(k,{title:"序号",width:66,align:"center"},{cell:c((e=>[f(w(e.rowIndex+1),1)])),_:1}),r(k,{title:"姓名","data-index":"name",width:120}),r(k,{title:"头像",width:80},{cell:c((({record:e})=>[r(z,{size:30,style:x({backgroundColor:e.color})},{default:c((()=>[f(w(e.name[0]),1)])),_:2},1032,["style"])])),_:1}),r(k,{title:"手机号","data-index":"phone",width:150}),r(k,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),r(k,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),r(k,{title:"状态",width:100,align:"center"},{cell:c((({record:e})=>[r(C,{modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,type:"round",size:"medium"},{checked:c((()=>[f("开启")])),unchecked:c((()=>[f("关闭")])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),r(k,{title:"操作",width:200,align:"center"},{cell:c((({record:e})=>[r(j,null,{default:c((()=>[r(h,{type:"primary",size:"mini"},{default:c((()=>[f("修改")])),_:1}),r(h,{size:"mini"},{default:c((()=>[f("详情")])),_:1}),r(V,{type:"warning",content:"您确定要删除该项吗?"},{default:c((()=>[r(h,{type:"primary",status:"danger",size:"mini"},{default:c((()=>[f("删除")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination"]),r(T)])}}}),[["__scopeId","data-v-45ce1472"]]);export{q as default};
