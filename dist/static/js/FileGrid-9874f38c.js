import{d as e,f as a,o as i,c as l,g as s,w as c,F as t,v as o,s as n,h as d,eJ as r,x as m,$ as u,y as f,a0 as g,q as p}from"./index-a681ebd3.js";import k from"./FileImg-904d328d.js";import h from"./FileRightMenu-be4f13eb.js";import"./file-map-2a15779f.js";const x={class:"file-grid"},_=["onClick"],v={class:"wrapper"},C={class:"file-icon"},F={class:"gi_line_1 file-name"},I=["onClick"],$=p(e({__name:"FileGrid",props:{data:{default:()=>[]},selectedFileIds:{default:()=>[]},isBatchMode:{type:Boolean,default:!1}},emits:["click","check","right-menu-click"],setup(e,{emit:p}){const $=e,j=e=>`${e.name}${e.extendName?`.${e.extendName}`:""}`,y=e=>{p("check",e)};return(e,M)=>{const b=a("a-checkbox"),w=a("a-grid-item"),B=a("a-trigger"),N=a("a-grid");return i(),l("div",x,[s(N,{cols:{xs:4,sm:4,md:5,lg:7,xl:8,xxl:9},"col-gap":12,"row-gap":12},{default:c((()=>[(i(!0),l(t,null,o(e.data,(e=>(i(),n(B,{key:e.id,trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":"","scroll-to-close":""},{content:c((()=>[s(h,{"file-info":e,onClick:a=>((e,a)=>{p("right-menu-click",e,a)})(a,e)},null,8,["file-info","onClick"])])),default:c((()=>[s(w,null,{default:c((()=>[d("div",{class:"file-grid-item",onClick:r((a=>(e=>{p("click",e)})(e)),["stop"])},[d("div",v,[d("div",C,[s(k,{data:e},null,8,["data"])]),d("p",F,m(j(e)),1)]),u(d("section",{class:f(["check-mode",{checked:$.selectedFileIds.includes(e.id)}]),onClick:r((a=>y(e)),["stop"])},[s(b,{class:"checkbox","model-value":$.selectedFileIds.includes(e.id),onChange:a=>y(e)},null,8,["model-value","onChange"])],10,I),[[g,$.isBatchMode]])],8,_)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}}}),[["__scopeId","data-v-10a1c42a"]]);export{$ as default};