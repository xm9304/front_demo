import{d as e,e as a,H as s,o as t,q as n,w as o,$ as c,g as d,h as i,T as u,x as r,P as p,v as m,a0 as l,i as f,a1 as v,a2 as y,a3 as g,n as _}from"./index-b0b495b4.js";const x={class:"message-mask"},k={class:"message"},w={class:"content"},z=_(e({__name:"Message",props:{type:{default:"success"},content:{default:""},duration:{default:2e3},destroy:{type:Function,default:()=>{}}},setup(e){const _=e,z={success:{content:"操作成功",icon:v},warning:{content:"警告信息",icon:y},error:{content:"操作错误",icon:g}},A=a(!1);return s((()=>{A.value=!0,setTimeout((()=>{A.value=!1}),_.duration)})),(e,a)=>(t(),n(u,{name:"fade-mask",mode:"out-in",appear:"",onAfterLeave:e.destroy},{default:o((()=>[c(d("div",x,[i(u,{name:"zoom-message",mode:"out-in",appear:""},{default:o((()=>[d("section",k,[d("div",{class:r(["icon",_.type])},[(t(),n(p(z[_.type].icon),{size:80}))],2),d("p",w,m(_.content||z[_.type].content),1)])])),_:1})],512),[[l,f(A)]])])),_:1},8,["onAfterLeave"]))}}),[["__scopeId","data-v-cc274cf3"]]);export{z as default};