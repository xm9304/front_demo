import{d as a,A as e,i as s,o as t,c as r,s as d,t as o,q as n}from"./index-8021afb3.js";import{i,a as c}from"./file-2a15779f.js";const m=["src"],l=n(a({__name:"FileImg",props:{data:{}},setup(a){const n=a,l=e((()=>i.includes(n.data.extendName.toLowerCase()))),u=e((()=>{var a;return(null==(a=n.data)?void 0:a.isDir)?c.dir:i.includes(n.data.extendName.toLowerCase())?n.data.src||"":Object.keys(c).includes(n.data.extendName.toLowerCase())?c[n.data.extendName.toLowerCase()]||"":c.other}));return(a,e)=>{const i=o;return s(l)?(t(),r("img",{key:0,class:"img",src:n.data.src||""},null,8,m)):(t(),d(i,{key:1,size:"100%",name:s(u)},null,8,["name"]))}}}),[["__scopeId","data-v-ef4a899f"]]);export{l as default};
