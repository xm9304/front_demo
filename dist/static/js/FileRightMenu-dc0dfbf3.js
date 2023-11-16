import{d as e,o as a,c as n,a1 as l,s as t,f as o,h as s,t as i,R as c,y as d,P as p,z as u,w as m,g as r,v as f,p as _,n as k}from"./index-5690b7e6.js";const v={class:"gi-option"},y=t(e({name:"GiOption",__name:"index",setup:e=>(e,t)=>(a(),n("ul",v,[l(e.$slots,"default",{},void 0,!0)]))}),[["__scopeId","data-v-9f37533c"]]),w={class:"wrap"},h={class:"icon-wrapper"},C=t(e({name:"GiOptionItem",__name:"index",props:{icon:{default:""},label:{default:""},more:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const m=t,r=()=>{m("click")};return(e,t)=>{const m=o("IconRight");return a(),n("li",{class:u(["gi-option-item",{more:e.more,active:e.active}]),onClick:r},[s("section",w,[s("span",h,[l(e.$slots,"icon",{},(()=>[(a(),i(c(e.icon),{size:16,"stroke-width":2}))]),!0)]),l(e.$slots,"default",{},(()=>[s("span",null,d(e.label),1)]),!0)]),e.more?(a(),i(m,{key:0})):p("",!0)],2)}}}),[["__scopeId","data-v-521c86bf"]]),g=e=>(_("data-v-69787072"),e=e(),k(),e),x=g((()=>s("span",null,"重命名",-1))),I=g((()=>s("span",null,"移动到",-1))),z=g((()=>s("span",null,"下载",-1))),b=g((()=>s("span",null,"解压",-1))),B=g((()=>s("span",null,"解压到当前目录",-1))),R=g((()=>s("span",null,"解压到其他目录",-1))),$=g((()=>s("span",null,"详情",-1))),G=g((()=>s("span",null,"删除",-1))),N=t(e({__name:"FileRightMenu",props:{fileInfo:{default:()=>({id:"",type:"",name:"",extendName:"",src:"",updateTime:"",isDir:!1,filePath:""})},showClassStyle:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:n}){const l=e,t=n,s=e=>{t("click",e)};return(e,n)=>{const t=f,c=o("a-popover");return a(),i(y,{class:u({option:e.showClassStyle})},{default:m((()=>[r(C,{onClick:n[0]||(n[0]=e=>s("rename"))},{icon:m((()=>[r(t,{name:"menu-edit"})])),default:m((()=>[x])),_:1}),r(C,{onClick:n[1]||(n[1]=e=>s("move"))},{icon:m((()=>[r(t,{name:"menu-move"})])),default:m((()=>[I])),_:1}),r(C,{onClick:n[2]||(n[2]=e=>s("download"))},{icon:m((()=>[r(t,{name:"menu-download"})])),default:m((()=>[z])),_:1}),"zip"===l.fileInfo.extendName?(a(),i(c,{key:0,position:"right","content-style":{padding:0,overflow:"hidden",width:"150px"},"arrow-style":{display:"none"}},{content:m((()=>[r(y,null,{default:m((()=>[r(C,{onClick:n[3]||(n[3]=e=>s("zip1"))},{icon:m((()=>[r(t,{name:"file-rar"})])),default:m((()=>[B])),_:1}),r(C,{onClick:n[4]||(n[4]=e=>s("zip2"))},{icon:m((()=>[r(t,{name:"file-rar"})])),default:m((()=>[R])),_:1})])),_:1})])),default:m((()=>[r(C,{more:""},{icon:m((()=>[r(t,{name:"menu-zip"})])),default:m((()=>[b])),_:1})])),_:1})):p("",!0),r(C,{onClick:n[5]||(n[5]=e=>s("detail"))},{icon:m((()=>[r(t,{name:"menu-detail"})])),default:m((()=>[$])),_:1}),r(C,{onClick:n[6]||(n[6]=e=>s("delete"))},{icon:m((()=>[r(t,{name:"menu-delete"})])),default:m((()=>[G])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-69787072"]]);export{N as default};