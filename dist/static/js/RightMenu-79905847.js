import{d as e,f as t,o as i,s as a,w as n,g as o,t as l,p as s,m as c,h as d,q as r}from"./index-3a395fe5.js";const u=e=>(s("data-v-b871397c"),e=e(),c(),e),m=u((()=>d("span",null,"新增",-1))),p=u((()=>d("span",null,"编辑",-1))),h=u((()=>d("span",null,"移动",-1))),f=u((()=>d("span",null,"删除",-1))),k=r(e({__name:"RightMenu",props:{treeData:{}},emits:["click"],setup(e,{emit:s}){const c=s,d=e=>{c("click",e)};return(e,s)=>{const c=t("icon-plus-circle"),r=t("a-menu-item"),u=t("icon-edit"),k=t("icon-export"),_=t("icon-right"),w=t("a-row"),g=l,v=t("a-tree"),y=t("a-scrollbar"),z=t("a-popover"),x=t("icon-delete"),b=t("a-menu");return i(),a(b,{class:"right-menu"},{default:n((()=>[o(r,{onClick:s[0]||(s[0]=e=>d("add"))},{icon:n((()=>[o(c,{size:16,"stroke-width":3})])),default:n((()=>[m])),_:1}),o(r,{onClick:s[1]||(s[1]=e=>d("edit"))},{icon:n((()=>[o(u,{size:16,"stroke-width":3})])),default:n((()=>[p])),_:1}),o(z,{position:"right",trigger:"click","content-style":{padding:0,overflow:"hidden"},"unmount-on-close":!1},{content:n((()=>[o(y,{style:{height:"100%",overflow:"auto"},"outer-style":"width: 260px;height: 500px"},{default:n((()=>{var t,l;return[o(v,{"show-line":"",size:"mini",data:null==(l=null==(t=e.treeData)?void 0:t[0])?void 0:l.children,fieldNames:{key:"id",title:"name"}},{icon:n((e=>[e.children?e.children?(i(),a(g,{key:1,name:"com-file-open",size:16})):(i(),a(g,{key:2,name:"com-file",size:16})):(i(),a(g,{key:0,name:"com-file-close",size:16}))])),_:1},8,["data"])]})),_:1})])),default:n((()=>[o(r,{onClick:s[2]||(s[2]=e=>d("move"))},{icon:n((()=>[o(k,{size:16,"stroke-width":3})])),default:n((()=>[o(w,{justify:"space-between",align:"center"},{default:n((()=>[h,o(_,{class:"arrow"})])),_:1})])),_:1})])),_:1}),o(r,{onClick:s[3]||(s[3]=e=>d("delete"))},{icon:n((()=>[o(x,{size:16,"stroke-width":3})])),default:n((()=>[f])),_:1})])),_:1})}}}),[["__scopeId","data-v-b871397c"]]);export{k as default};
