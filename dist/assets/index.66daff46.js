import{_ as g}from"./index.0aa13938.js";import{g as C,o as c,j as f,F as S,z as w,I as _,C as h,i as n,D as B,y as T,k as V,J as R,m,r as $,l as v,n as j,p as x}from"./vendor.800ae7f9.js";const z={class:"gi-text-radio"},E=["onClick"],G=C({props:{modelValue:{type:[Number,String],default:""},list:{type:Array,default:()=>[]}},emits:["update:modelValue","change"],setup(l,{emit:i}){const a=s=>{i("update:modelValue",s.value),i("change",s)};return(s,t)=>(c(),f("div",z,[(c(!0),f(S,null,w(l.list,u=>(c(),f("div",{class:_(["item",{active:u.value===l.modelValue}]),key:u.value,onClick:d=>a(u)},h(u.label),11,E))),128))]))}});var I=g(G,[["__scopeId","data-v-b0c3a6fe"]]);const O={class:"gi-switch-wrap"},U=C({props:{modelValue:{type:Boolean,default:!1},onText:{type:String,default:"\u542F\u52A8"},offText:{type:String,default:"\u6682\u505C"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:i}){const a=l,s=n(null),t=n(null);let u=n(0),d=n(0);B(()=>{u.value=s.value.clientWidth,d.value=t.value.clientWidth});const b=T(()=>{const r={};return r.width=a.modelValue?`${u.value}px`:`${d.value}px`,r.left=a.modelValue?0:`${u.value}px`,r}),e=r=>{r===a.modelValue||a.disabled||i("update:modelValue",!a.modelValue)};return(r,p)=>(c(),f("div",{class:_(["gi-switch",{disabled:l.disabled}])},[V("div",O,[V("section",{class:"slide-bar",style:R(m(b))},null,4),V("section",{ref:(o,y)=>{y.OnRef=o,s.value=o},class:_(["item left",{on:l.modelValue,disabled:l.disabled}]),onClick:p[0]||(p[0]=o=>e(!0))},h(l.onText),3),V("section",{ref:(o,y)=>{y.OffRef=o,t.value=o},class:_(["item right",{off:!l.modelValue,disabled:l.disabled}]),onClick:p[1]||(p[1]=o=>e(!1))},h(l.offText),3)])],2))}});var k=g(U,[["__scopeId","data-v-7d3b5e5c"]]);const W={class:"gi_box test"},D=C({setup(l){const i=[{label:"\u560E\u560E",value:"01"},{label:"\u54C8\u54C8",value:"02"},{label:"\u563B\u563B",value:"03"}];let a=n("01"),s=n(!0),t=n(!1);return(u,d)=>{const b=$("a-space");return c(),f("div",W,[v(b,{direction:"vertical",size:"medium"},{default:j(()=>[v(I,{list:i,modelValue:m(a),"onUpdate:modelValue":d[0]||(d[0]=e=>x(a)?a.value=e:a=e)},null,8,["modelValue"]),v(k,{modelValue:m(s),"onUpdate:modelValue":d[1]||(d[1]=e=>x(s)?s.value=e:s=e),"off-text":"\u6682\u505C\u4E2D"},null,8,["modelValue"]),v(k,{modelValue:m(t),"onUpdate:modelValue":d[2]||(d[2]=e=>x(t)?t.value=e:t=e)},null,8,["modelValue"]),v(k,{modelValue:m(t),"onUpdate:modelValue":d[3]||(d[3]=e=>x(t)?t.value=e:t=e),disabled:""},null,8,["modelValue"])]),_:1})])}}});var A=g(D,[["__scopeId","data-v-38f94ca6"]]);export{A as default};