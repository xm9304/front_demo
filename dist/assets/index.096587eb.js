var W=Object.defineProperty,z=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var F=(l,t,e)=>t in l?W(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,w=(l,t)=>{for(var e in t||(t={}))j.call(t,e)&&F(l,e,t[e]);if(S)for(var e of S(t))L.call(t,e)&&F(l,e,t[e]);return l},T=(l,t)=>z(l,O(t));import{G as C}from"./GiTitle.1880eb6d.js";import{_ as b}from"./index.e81e138c.js";import{e as p,r,o as c,c as g,w as u,g as h,B as D,z as n,t as E,F as R,i as f,a,u as B,y as $,E as M,f as N,h as y,W as H,X as k,V as I,H as K}from"./vendor.1acd98e9.js";const X=p({props:{modelValue:{type:[Number,String],default:""},list:{type:Array,default:()=>[]}},emits:["update:modelValue","change"],setup(l,{emit:t}){const e=s=>{t("update:modelValue",s.value),t("change",s)};return(s,o)=>{const _=r("a-button"),d=r("a-space");return c(),g(d,{size:15,class:"gi-text-radio"},{default:u(()=>[(c(!0),h(R,null,D(l.list,m=>(c(),g(_,{type:m.value===l.modelValue?"primary":"text",key:m.value,onClick:v=>e(m)},{default:u(()=>[n(E(m.label),1)]),_:2},1032,["type","onClick"]))),128))]),_:1})}}});var q=b(X,[["__scopeId","data-v-7732d90a"]]);const A=p({setup(l){const t=f([{label:"\u560E\u560E",value:"01"},{label:"\u54C8\u54C8",value:"02"},{label:"\u563B\u563B",value:"03"}]);let e=f("01");return(s,o)=>(c(),h("div",null,[a(q,{list:t.value,modelValue:B(e),"onUpdate:modelValue":o[0]||(o[0]=_=>$(e)?e.value=_:e=_)},null,8,["list","modelValue"])]))}});const J={class:"gi-switch-wrap"},P=p({props:{modelValue:{type:Boolean,default:!1},onText:{type:String,default:"\u542F\u52A8"},offText:{type:String,default:"\u6682\u505C"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:t}){const e=l,s=f(null),o=f(null);let _=f(0),d=f(0);M(()=>{_.value=s.value.clientWidth,d.value=o.value.clientWidth});const m=N(()=>{const x={};return x.width=e.modelValue?`${_.value}px`:`${d.value}px`,x.left=e.modelValue?0:`${_.value}px`,x}),v=x=>{x===e.modelValue||e.disabled||t("update:modelValue",!e.modelValue)};return(x,V)=>(c(),h("div",{class:k(["gi-switch",{disabled:l.disabled}])},[y("div",J,[y("section",{class:"slide-bar",style:H(B(m))},null,4),y("section",{ref_key:"OnRef",ref:s,class:k(["item left",{on:l.modelValue,disabled:l.disabled}]),onClick:V[0]||(V[0]=U=>v(!0))},E(l.onText),3),y("section",{ref_key:"OffRef",ref:o,class:k(["item right",{off:!l.modelValue,disabled:l.disabled}]),onClick:V[1]||(V[1]=U=>v(!1))},E(l.offText),3)])],2))}});var G=b(P,[["__scopeId","data-v-7d3b5e5c"]]);const Q=p({setup(l){let t=f(!0),e=f(!1);return(s,o)=>{const _=r("a-space");return c(),g(_,null,{default:u(()=>[a(G,{modelValue:B(t),"onUpdate:modelValue":o[0]||(o[0]=d=>$(t)?t.value=d:t=d),"off-text":"\u6682\u505C\u4E2D"},null,8,["modelValue"]),a(G,{modelValue:B(e),"onUpdate:modelValue":o[1]||(o[1]=d=>$(e)?e.value=d:e=d)},null,8,["modelValue"]),a(G,{modelValue:B(e),"onUpdate:modelValue":o[2]||(o[2]=d=>$(e)?e.value=d:e=d),disabled:""},null,8,["modelValue"])]),_:1})}}});const Y=p({name:"GiTag"}),Z=p(T(w({},Y),{props:{type:{type:String,default:"dark"},status:{type:String,default:"primary"}},setup(l){const t=l;let e=N(()=>`gi-tag-${t.type} gi-tag-${t.status}`);return(s,o)=>(c(),h("div",{class:k(["gi-tag",B(e)])},[I(s.$slots,"default",{},void 0,!0)],2))}}));var i=b(Z,[["__scopeId","data-v-cb8883fa"]]);const ee=n("\u6807\u7B7E"),te=n("\u6807\u7B7E"),ae=n("\u6807\u7B7E"),ue=n("\u6807\u7B7E"),le=n("\u6807\u7B7E"),se=y("div",{style:{height:"20px"}},null,-1),ne=n("\u6807\u7B7E"),oe=n("\u6807\u7B7E"),_e=n("\u6807\u7B7E"),de=n("\u6807\u7B7E"),ie=n("\u6807\u7B7E"),ce=y("div",{style:{height:"20px"}},null,-1),re=n("\u6807\u7B7E"),pe=n("\u6807\u7B7E"),fe=n("\u6807\u7B7E"),me=n("\u6807\u7B7E"),ve=n("\u6807\u7B7E"),ye=p({setup(l){return(t,e)=>{const s=r("a-space");return c(),h("div",null,[a(s,null,{default:u(()=>[a(i,null,{default:u(()=>[ee]),_:1}),a(i,{status:"success"},{default:u(()=>[te]),_:1}),a(i,{status:"warning"},{default:u(()=>[ae]),_:1}),a(i,{status:"danger"},{default:u(()=>[ue]),_:1}),a(i,{status:"info"},{default:u(()=>[le]),_:1})]),_:1}),se,a(s,null,{default:u(()=>[a(i,{type:"plain"},{default:u(()=>[ne]),_:1}),a(i,{type:"plain",status:"success"},{default:u(()=>[oe]),_:1}),a(i,{type:"plain",status:"warning"},{default:u(()=>[_e]),_:1}),a(i,{type:"plain",status:"danger"},{default:u(()=>[de]),_:1}),a(i,{type:"plain",status:"info"},{default:u(()=>[ie]),_:1})]),_:1}),ce,a(s,null,{default:u(()=>[a(i,{type:"light"},{default:u(()=>[re]),_:1}),a(i,{type:"light",status:"success"},{default:u(()=>[pe]),_:1}),a(i,{type:"light",status:"warning"},{default:u(()=>[fe]),_:1}),a(i,{type:"light",status:"danger"},{default:u(()=>[me]),_:1}),a(i,{type:"light",status:"info"},{default:u(()=>[ve]),_:1})]),_:1})])}}});const he={class:"title"},ge=p({props:{title:{type:String,default:""}},setup(l){const t=l;return(e,s)=>{const o=r("a-space"),_=r("a-row");return c(),g(_,{justify:"space-between",align:"center",class:"gi-navbar"},{default:u(()=>[y("h3",he,E(t.title),1),a(o,null,{default:u(()=>[I(e.$slots,"default",{},void 0,!0)]),_:3})]),_:3})}}});var xe=b(ge,[["__scopeId","data-v-20a74d08"]]);const Be=n("\u786E\u8BA4"),Ee=n("\u8FD4\u56DE"),be=p({setup(l){return(t,e)=>{const s=r("a-button");return c(),h("div",null,[a(xe,{title:"\u57FA\u7840\u8BE6\u60C5"},{default:u(()=>[a(s,{type:"primary"},{default:u(()=>[Be]),_:1}),a(s,null,{default:u(()=>[Ee]),_:1})]),_:1})])}}}),Ve=n("\u786E\u8BA4"),Ce=n("\u8FD4\u56DE"),$e=p({setup(l){return(t,e)=>{const s=r("a-button"),o=r("icon-search"),_=r("a-input"),d=r("a-space");return c(),g(d,{direction:"vertical",fill:""},{default:u(()=>[a(C,{title:"\u57FA\u7840\u8BE6\u60C5"}),a(C,{title:"\u57FA\u7840\u8BE6\u60C5"},{default:u(()=>[a(s,{type:"primary"},{default:u(()=>[Ve]),_:1}),a(s,null,{default:u(()=>[Ce]),_:1})]),_:1}),a(C,{title:"\u57FA\u7840\u8BE6\u60C5"},{default:u(()=>[a(_,{style:{width:"250px"},placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22","allow-clear":""},{prefix:u(()=>[a(o)]),_:1})]),_:1})]),_:1})}}});const ke={class:"test"},we={class:"content"},Te=p({name:"Test"}),Ge=p(T(w({},Te),{setup(l){const t=f([A]),e=f([{name:"GiTextRadio",value:A},{name:"GiTextSwitch",value:Q},{name:"GiTag",value:ye},{name:"GiNavBar",value:be},{name:"GiTitle",value:$e}]),s=()=>{console.log(t.value)};return(o,_)=>{const d=r("a-menu-item"),m=r("a-menu");return c(),h("div",ke,[a(m,{"selected-keys":t.value,"onUpdate:selected-keys":_[0]||(_[0]=v=>t.value=v),style:{width:"200px",borderRadius:"4px"},onMenuItemClick:s},{default:u(()=>[a(C,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",style:{"margin-bottom":"14px"}}),(c(!0),h(R,null,D(e.value,v=>(c(),g(d,{key:v.value},{default:u(()=>[n(E(v.name),1)]),_:2},1024))),128))]),_:1},8,["selected-keys"]),y("div",we,[(c(),g(K(t.value[0])))])])}}}));var Re=b(Ge,[["__scopeId","data-v-2569b3f4"]]);export{Re as default};
