import{U as e,V as a,d as t,e as l,f as i,o as s,c as o,h as n,g as r,w as c,i as d,k as u,s as m,x as f,L as p,M as h,t as g,q as v}from"./index-3a395fe5.js";import y from"./RightMenu-79905847.js";const k={class:"cate-tree"},_={class:"search-wrap"},x={class:"wrap"},w=v(t({__name:"index",props:{type:{default:1},placeholder:{default:"请输入关键词"}},emits:["node-click"],setup(t,{emit:v}){const w=t,z=l(!1),V=l(),M=l(""),b=l([]),j=v,R=()=>{j("node-click")};(async()=>{try{z.value=!0;const t=await e.get(`${a}/cate/tree`);b.value=t.data,p((()=>{V.value.expandAll()}))}catch(t){return t}finally{z.value=!1}})();const U=e=>{"move"!==e&&h.info(e)};return(e,a)=>{const t=i("icon-search"),l=i("a-input"),p=g,h=i("a-trigger"),v=i("a-tree"),z=i("a-scrollbar");return s(),o("div",k,[n("div",_,[r(l,{"allow-clear":"",maxlength:20,placeholder:w.placeholder,modelValue:d(M),"onUpdate:modelValue":a[0]||(a[0]=e=>u(M)?M.value=e:null)},{prefix:c((()=>[r(t)])),_:1},8,["placeholder","modelValue"])]),n("div",x,[r(z,{style:{height:"100%",overflow:"auto"},"outer-style":"height: 100%"},{default:c((()=>[r(v,{ref_key:"treeRef",ref:V,"show-line":"",size:"mini",data:d(b),fieldNames:{key:"id"},onSelect:R},{icon:c((e=>[e.children?e.children?(s(),m(p,{key:1,name:"com-file-open",size:16})):(s(),m(p,{key:2,name:"com-file",size:16})):(s(),m(p,{key:0,name:"com-file-close",size:16}))])),title:c((e=>[r(h,{trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":""},{content:c((()=>[r(y,{"tree-data":d(b),onClick:U},null,8,["tree-data"])])),default:c((()=>[n("div",null,f(e.name),1)])),_:2},1024)])),_:1},8,["data"])])),_:1})])])}}}),[["__scopeId","data-v-1f9f52ee"]]);export{w as default};
