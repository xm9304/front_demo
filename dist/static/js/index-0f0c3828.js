import{d as e,r as l,e as a,f as t,eT as d,o as n,c as o,h as u,w as i,i as s,$ as r,k as c,a0 as p,q as f,v as m,g as _,L as g,F as x,t as h,N as v,p as b,l as y,n as w}from"./index-b0b495b4.js";import{u as z}from"./usePagination-fd3463fa.js";import{g as k}from"./index-2994acde.js";const V=e=>(b("data-v-91803e5e"),e=e(),y(),e),C={class:"table-page"},P={class:"gi_table_box gi_mt"},S=V((()=>_("span",null,"编辑",-1))),T=V((()=>_("span",null,"详情",-1))),U=V((()=>_("span",null,"删除",-1))),j=w(e({name:"TableMain",__name:"index",setup(e){const b=l({value1:"",value2:"",value3:"",value4:"",value5:""}),y=a(!1),w=a([]),V=a(!1),{current:j,pageSize:I,total:W,changeCurrent:q,changePageSize:D,setTotal:E}=z((()=>F())),F=async()=>{try{y.value=!0;const e=await k({current:j.value,pageSize:I.value});w.value=e.data.list,E(e.data.total)}catch(e){}finally{y.value=!1}};return F(),(e,l)=>{const a=t("a-input"),z=t("a-form-item"),k=t("a-col"),E=t("a-option"),L=t("a-select"),M=t("a-date-picker"),N=t("icon-search"),$=t("a-button"),A=t("icon-up"),B=t("icon-down"),G=t("a-space"),H=t("a-row"),J=t("a-form"),K=t("a-table-column"),O=t("a-avatar"),Q=t("a-tag"),R=t("a-popover"),X=t("a-overflow-list"),Y=t("a-typography-text"),Z=t("a-popconfirm"),ee=t("a-table"),le=d("hasPerm");return n(),o("div",C,[u(J,{"label-align":"right","auto-label-width":"",model:s(b),class:"form"},{default:i((()=>[u(H,{gutter:16,wrap:""},{default:i((()=>[u(k,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:i((()=>[u(z,{field:"value1",label:"姓名"},{default:i((()=>[u(a,{modelValue:s(b).value1,"onUpdate:modelValue":l[0]||(l[0]=e=>s(b).value1=e),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1})])),_:1}),u(k,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:i((()=>[u(z,{field:"value2",label:"手机"},{default:i((()=>[u(a,{modelValue:s(b).value2,"onUpdate:modelValue":l[1]||(l[1]=e=>s(b).value2=e),placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1})])),_:1}),r(u(k,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:i((()=>[u(z,{field:"value3",label:"类型"},{default:i((()=>[u(L,{placeholder:"请选择"},{default:i((()=>[u(E,null,{default:i((()=>[c("北京")])),_:1}),u(E,null,{default:i((()=>[c("上海")])),_:1}),u(E,null,{default:i((()=>[c("广州")])),_:1})])),_:1})])),_:1})])),_:1},512),[[p,s(V)]]),r(u(k,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:i((()=>[u(z,{field:"value3",label:"时间"},{default:i((()=>[u(M,{"show-time":"",modelValue:s(b).value3,"onUpdate:modelValue":l[2]||(l[2]=e=>s(b).value3=e),placeholder:"请选择创建时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1},512),[[p,s(V)]]),r(u(k,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:i((()=>[u(z,{field:"value4",label:"状态"},{default:i((()=>[u(L,{placeholder:"请选择"},{default:i((()=>[u(E,null,{default:i((()=>[c("开启")])),_:1}),u(E,null,{default:i((()=>[c("关闭")])),_:1})])),_:1})])),_:1})])),_:1},512),[[p,s(V)]]),r(u(k,{xs:12,md:12,lg:8,xl:6,xxl:6},{default:i((()=>[u(z,{field:"value5",label:"地址"},{default:i((()=>[u(a,{modelValue:s(b).value5,"onUpdate:modelValue":l[3]||(l[3]=e=>s(b).value5=e),placeholder:"请输入查询地址"},null,8,["modelValue"])])),_:1})])),_:1},512),[[p,s(V)]]),u(k,{span:12},{default:i((()=>[u(G,null,{default:i((()=>[u($,{type:"primary",onClick:F},{icon:i((()=>[u(N)])),default:i((()=>[c("查询")])),_:1}),u($,null,{default:i((()=>[c("重置")])),_:1}),u($,{type:"text",class:"collapsed-btn",onClick:l[4]||(l[4]=e=>V.value=!s(V))},{icon:i((()=>[s(V)?(n(),f(A,{key:0})):(n(),f(B,{key:1}))])),default:i((()=>[c(m(s(V)?"收起":"展开"),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),_("div",P,[u(ee,{"row-key":"id",size:"small","page-position":"bottom",bordered:{cell:!0},loading:s(y),data:s(w),scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:{showPageSize:!0,total:s(W),current:s(j),pageSize:s(I)},onPageChange:s(q),onPageSizeChange:s(D)},{columns:i((()=>[u(K,{title:"序号",width:66,align:"center"},{cell:i((e=>[c(m(e.rowIndex+1),1)])),_:1}),u(K,{title:"姓名","data-index":"name",width:120}),u(K,{title:"头像",width:80},{cell:i((({record:e})=>[u(O,{size:30,style:g({backgroundColor:e.color})},{default:i((()=>[c(m(e.name[0]),1)])),_:2},1032,["style"])])),_:1}),u(K,{title:"手机号","data-index":"phone",width:150}),u(K,{title:"爱好","data-index":"hobbys"},{cell:i((({record:e})=>[e.hobbys.length?(n(),f(X,{key:0},{overflow:i((({number:l})=>[u(R,{"content-style":{maxWidth:"300px"}},{content:i((()=>[u(G,{wrap:""},{default:i((()=>[(n(!0),o(x,null,h(e.hobbys.filter(((a,t)=>t>=e.hobbys.length-l)),(e=>(n(),f(Q,{color:"orange",size:"small"},{default:i((()=>[_("span",null,m(e),1)])),_:2},1024)))),256))])),_:2},1024)])),default:i((()=>[u(Q,{color:"green",size:"small"},{default:i((()=>[c("+"+m(l),1)])),_:2},1024)])),_:2},1024)])),default:i((()=>[(n(!0),o(x,null,h(null==e?void 0:e.hobbys,(e=>(n(),f(Q,{key:e,color:"orange",size:"small"},{default:i((()=>[_("span",null,m(e),1)])),_:2},1024)))),128))])),_:2},1024)):v("",!0)])),_:1}),u(K,{title:"创建时间","data-index":"createTime",ellipsis:"",tooltip:""}),u(K,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),u(K,{title:"状态",width:100,align:"center"},{cell:i((({record:e})=>[e.status?(n(),f(Y,{key:0,type:"success"},{default:i((()=>[c("开启")])),_:1})):(n(),f(Y,{key:1,type:"danger"},{default:i((()=>[c("关闭")])),_:1}))])),_:1}),u(K,{title:"操作",width:200,align:"center"},{cell:i((({record:e})=>[u(G,null,{default:i((()=>[r((n(),f($,{type:"primary",size:"mini"},{default:i((()=>[S])),_:1})),[[le,["table:btn:edit"]]]),u($,{size:"mini"},{default:i((()=>[T])),_:1}),u(Z,{type:"warning",content:"您确定要删除该项吗?"},{default:i((()=>[u($,{type:"primary",status:"danger",size:"mini"},{default:i((()=>[U])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination","onPageChange","onPageSizeChange"])])])}}}),[["__scopeId","data-v-91803e5e"]]);export{j as default};