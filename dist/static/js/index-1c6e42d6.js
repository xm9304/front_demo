import{_ as e}from"./index-dd12eb2a.js";import{d as a,eZ as t,e_ as l,e as i,e$ as n,f as s,o,c as d,g as r,w as c,a1 as u,i as p,k as m,t as f,l as _,h as g,f0 as y,x as h,eT as b,z as v,s as z,y as k,O as w,M as x,p as C,n as V}from"./index-4f775d1c.js";import{u as j}from"./usePagination-1d909ec2.js";import{g as T}from"./index-93ce6a95.js";const R={class:""},U=z(a({name:"GiTable",inheritAttrs:!1,__name:"index",emits:["refresh"],setup(e,{expose:a,emit:z}){const k=z,w=t(),x=l(),C=i(null),V=i(!1),j=i("small"),T=i(!0),U=i(null),{isFullscreen:I,toggle:$}=n(U),A=()=>{k("refresh")};return a({tableRef:C}),(e,a)=>{const t=s("a-space"),l=s("a-switch"),i=s("a-tooltip"),n=s("icon-refresh"),z=s("a-button"),k=s("icon-fullscreen"),G=s("icon-fullscreen-exit"),O=s("icon-apps"),S=s("a-radio"),F=s("a-radio-group"),J=s("a-row"),K=s("a-table");return o(),d("div",{class:v(["gi-table",{fullscreen:p(I)}]),ref_key:"giTableRef",ref:U},[r(J,{justify:"space-between",align:"center"},{default:c((()=>[r(t,{wrap:""},{default:c((()=>[u(e.$slots,"custom-extra",{},void 0,!0)])),_:3}),r(t,{size:15,wrap:""},{default:c((()=>[r(i,{content:"斑马纹"},{default:c((()=>[r(l,{modelValue:p(V),"onUpdate:modelValue":a[0]||(a[0]=e=>m(V)?V.value=e:null),size:"small",type:"round"},null,8,["modelValue"])])),_:1}),r(i,{content:"刷新"},{default:c((()=>[r(z,{size:"mini",class:"gi_hover_btn",onClick:A},{icon:c((()=>[r(n,{size:18})])),_:1})])),_:1}),r(i,{content:"全屏"},{default:c((()=>[r(z,{size:"mini",class:"gi_hover_btn",onClick:p($)},{icon:c((()=>[p(I)?(o(),f(G,{key:1,size:18})):(o(),f(k,{key:0,size:18}))])),_:1},8,["onClick"])])),_:1}),r(i,{content:"显示边框"},{default:c((()=>[r(z,{size:"mini",class:"gi_hover_btn",onClick:a[1]||(a[1]=e=>T.value=!p(T))},{icon:c((()=>[r(O,{size:18})])),_:1})])),_:1}),r(F,{type:"button",size:"mini",modelValue:p(j),"onUpdate:modelValue":a[2]||(a[2]=e=>m(j)?j.value=e:null)},{default:c((()=>[r(S,{value:"mini"},{default:c((()=>[_("小")])),_:1}),r(S,{value:"small"},{default:c((()=>[_("默认")])),_:1}),r(S,{value:"medium"},{default:c((()=>[_("中")])),_:1}),r(S,{value:"large"},{default:c((()=>[_("大")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:3}),g("div",R,[r(K,b({stripe:p(V),size:p(j),bordered:{cell:p(T)}},p(w),{ref_key:"tableRef",ref:C}),y({_:2},[h(Object.keys(p(x)),(a=>({name:a,fn:c((()=>[u(e.$slots,a,{},void 0,!0)]))})))]),1040,["stripe","size","bordered"])])],2)}}}),[["__scopeId","data-v-669ed4ab"]]),I=e=>(C("data-v-802276e4"),e=e(),V(),e),$={class:"table-page"},A=I((()=>g("span",null,"新增",-1))),G=I((()=>g("span",null,"删除",-1))),O=I((()=>g("span",null,"导入",-1))),S=z(a({name:"TableCustom",__name:"index",setup(a){const t=i(!1),l=i([]),{pagination:n,setTotal:u}=j((()=>m())),m=async()=>{try{t.value=!0;const e=await T({current:n.current,pageSize:n.pageSize});l.value=e.data.records,u(e.data.total)}catch(e){}finally{t.value=!1}};m();const f=()=>{x.info("点击了新增")},g=()=>{x.info("点击了删除")},y=()=>{x.info("点击了导入")};return(a,i)=>{const u=s("icon-plus"),h=s("a-button"),b=s("icon-delete"),v=s("icon-export"),z=s("a-table-column"),x=s("a-avatar"),C=s("a-switch"),V=s("a-popconfirm"),j=s("a-space"),T=U,R=e;return o(),d("div",$,[r(T,{"row-key":"id",loading:p(t),data:p(l),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:p(n),onRefresh:m},{"custom-extra":c((()=>[r(h,{type:"primary",onClick:f},{icon:c((()=>[r(u)])),default:c((()=>[A])),_:1}),r(h,{type:"primary",status:"danger",onClick:g},{icon:c((()=>[r(b)])),default:c((()=>[G])),_:1}),r(h,{onClick:y},{icon:c((()=>[r(v)])),default:c((()=>[O])),_:1})])),columns:c((()=>[r(z,{title:"序号",width:66,align:"center"},{cell:c((e=>[_(k(e.rowIndex+1),1)])),_:1}),r(z,{title:"姓名","data-index":"name",width:120}),r(z,{title:"头像",width:80},{cell:c((({record:e})=>[r(x,{size:30,style:w({backgroundColor:e.color})},{default:c((()=>[_(k(e.name[0]),1)])),_:2},1032,["style"])])),_:1}),r(z,{title:"手机号","data-index":"phone",width:150}),r(z,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),r(z,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),r(z,{title:"状态",width:100,align:"center"},{cell:c((({record:e})=>[r(C,{modelValue:e.status,"onUpdate:modelValue":a=>e.status=a,type:"round",size:"medium"},{checked:c((()=>[_("开启")])),unchecked:c((()=>[_("关闭")])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),r(z,{title:"操作",width:200,align:"center"},{cell:c((({record:e})=>[r(j,null,{default:c((()=>[r(h,{type:"primary",size:"mini"},{default:c((()=>[_("修改")])),_:1}),r(h,{size:"mini"},{default:c((()=>[_("详情")])),_:1}),r(V,{type:"warning",content:"您确定要删除该项吗?"},{default:c((()=>[r(h,{type:"primary",status:"danger",size:"mini"},{default:c((()=>[_("删除")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination"]),r(R)])}}}),[["__scopeId","data-v-802276e4"]]);export{S as default};
