import{d as a,e,I as s,o as t,s as n,w as o,a0 as c,h as d,g as i,T as u,y as r,Q as p,x as m,a1 as l,i as f,a2 as y,a3 as v,a4 as g,q as _}from"./index-7890a41b.js";const x={class:"message-mask"},k={class:"message"},w={class:"content"},z=_(a({__name:"Message",props:{type:{default:"success"},content:{default:""},duration:{default:2e3},destroy:{type:Function,default:()=>{}}},setup(a){const _=a,z={success:{content:"操作成功",icon:y},warning:{content:"警告信息",icon:v},error:{content:"操作错误",icon:g}},A=e(!1);return s((()=>{A.value=!0,setTimeout((()=>{A.value=!1}),_.duration)})),(a,e)=>(t(),n(u,{name:"fade-mask",mode:"out-in",appear:"",onAfterLeave:a.destroy},{default:o((()=>[c(d("div",x,[i(u,{name:"zoom-message",mode:"out-in",appear:""},{default:o((()=>[d("section",k,[d("div",{class:r(["icon",_.type])},[(t(),n(p(z[_.type].icon),{size:80}))],2),d("p",w,m(_.content||z[_.type].content),1)])])),_:1})],512),[[l,f(A)]])])),_:1},8,["onAfterLeave"]))}}),[["__scopeId","data-v-cc274cf3"]]);export{z as default};