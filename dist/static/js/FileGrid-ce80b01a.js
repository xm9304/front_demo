import{d as e,f as i,o as a,c as l,g as s,w as t,F as c,t as o,q as n,h as d,eJ as r,v as m,$ as u,x as f,a0 as g,n as p}from"./index-b26459cd.js";import k from"./FileImg-68853275.js";import h from"./FileRightMenu-5a8c6208.js";import"./file-map-2a15779f.js";const x={class:"file-grid"},_=["onClick"],v={class:"wrapper"},C={class:"file-icon"},F={class:"gi_line_1 file-name"},I=["onClick"],$=p(e({__name:"FileGrid",props:{data:{default:()=>[]},selectedFileIdList:{default:()=>[]},isBatchMode:{type:Boolean,default:!1}},emits:["click","check","right-menu-click"],setup(e,{emit:p}){const $=e,j=e=>`${e.name}${e.extendName?`.${e.extendName}`:""}`,M=e=>{p("check",e)};return(e,b)=>{const w=i("a-checkbox"),y=i("a-grid-item"),B=i("a-trigger"),L=i("a-grid");return a(),l("div",x,[s(L,{cols:{xs:4,sm:5,md:6,lg:7,xl:8,xxl:9},"col-gap":12,"row-gap":12},{default:t((()=>[(a(!0),l(c,null,o(e.data,(e=>(a(),n(B,{key:e.id,trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":"","scroll-to-close":""},{content:t((()=>[s(h,{"file-info":e,onClick:i=>((e,i)=>{p("right-menu-click",e,i)})(i,e)},null,8,["file-info","onClick"])])),default:t((()=>[s(y,null,{default:t((()=>[d("div",{class:"file-grid-item",onClick:r((i=>(e=>{p("click",e)})(e)),["stop"])},[d("div",v,[d("div",C,[s(k,{data:e},null,8,["data"])]),d("p",F,m(j(e)),1),u(d("section",{class:f(["check-mode",{checked:$.selectedFileIdList.includes(e.id)}]),onClick:r((i=>M(e)),["stop"])},[s(w,{class:"checkbox","model-value":$.selectedFileIdList.includes(e.id),onChange:i=>M(e)},null,8,["model-value","onChange"])],10,I),[[g,$.isBatchMode]])])],8,_)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}}}),[["__scopeId","data-v-af9ac7ee"]]);export{$ as default};
