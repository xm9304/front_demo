import{V as e,W as a,d as l,e as t,f as i,o as s,c as n,h as o,g as r,w as c,i as d,k as u,t as m,y as p,N as f,M as h,v,s as g}from"./index-4f775d1c.js";import y from"./RightMenu-7ee24697.js";const k={class:"cate-tree"},_={class:"search-wrap"},w={class:"wrap"},x=g(l({__name:"index",props:{type:{default:1},placeholder:{default:"请输入关键词"}},emits:["node-click"],setup(l,{emit:g}){const x=l,z=t(!1),V=t(),M=t(""),b=t([]),j=g,N=()=>{j("node-click")};(async()=>{try{z.value=!0;const l=await e.get(`${a}/cate/tree`);b.value=l.data,f((()=>{var e;null==(e=V.value)||e.expandAll()}))}catch(l){return l}finally{z.value=!1}})();const R=e=>{"move"!==e&&h.info(e)};return(e,a)=>{const l=i("icon-search"),t=i("a-input"),f=v,h=i("a-trigger"),g=i("a-tree"),z=i("a-scrollbar");return s(),n("div",k,[o("div",_,[r(t,{"allow-clear":"",maxlength:20,placeholder:x.placeholder,modelValue:d(M),"onUpdate:modelValue":a[0]||(a[0]=e=>u(M)?M.value=e:null)},{prefix:c((()=>[r(l)])),_:1},8,["placeholder","modelValue"])]),o("div",w,[r(z,{style:{height:"100%",overflow:"auto"},"outer-style":"height: 100%"},{default:c((()=>[r(g,{ref_key:"treeRef",ref:V,"show-line":"",size:"mini",data:d(b),fieldNames:{key:"id"},onSelect:N},{icon:c((e=>[e.children?e.children?(s(),m(f,{key:1,name:"com-file-open",size:16})):(s(),m(f,{key:2,name:"com-file",size:16})):(s(),m(f,{key:0,name:"com-file-close",size:16}))])),title:c((e=>[r(h,{trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":""},{content:c((()=>[r(y,{"tree-data":d(b),onClick:R},null,8,["tree-data"])])),default:c((()=>[o("div",null,p(e.name),1)])),_:2},1024)])),_:1},8,["data"])])),_:1})])])}}}),[["__scopeId","data-v-42324538"]]);export{x as default};
