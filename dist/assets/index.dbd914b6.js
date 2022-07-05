import{d as b,f as A,C as R,g as o,o as x,l as D,w as a,b as e,h as I,I as S,i as F,_ as M,r as p,W as U,c as T,a as y,G as $,y as z,p as N,e as W,M as q}from"./index.fe796c6c.js";import{b as G}from"./system.e601cd93.js";const L=F("role_code_"),O=b({__name:"AddRoleModal",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(r,{emit:i}){const m=r,s=A({name:"",roleCode:"",remarks:""}),d=R({get:()=>m.modelValue,set:f=>{i("update:modelValue",f)}});return(f,u)=>{const l=o("a-input"),n=o("a-form-item"),v=o("a-textarea"),c=o("a-form"),g=o("a-modal");return x(),D(g,{visible:I(d),"onUpdate:visible":u[3]||(u[3]=t=>S(d)?d.value=t:null),title:"\u65B0\u589E\u89D2\u8272"},{default:a(()=>[e(c,null,{default:a(()=>[e(n,{label:"\u89D2\u8272\u540D\u79F0",name:"name",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:"blur"},{min:3,max:10,message:"\u957F\u5EA6\u5728 3 - 10\u4E2A\u5B57\u7B26",trigger:"blur"}],"validate-trigger":["change","input"]},{default:a(()=>[e(l,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",modelValue:s.name,"onUpdate:modelValue":u[0]||(u[0]=t=>s.name=t)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u89D2\u8272\u7F16\u53F7",name:"roleCode"},{default:a(()=>[e(l,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u53F7",modelValue:s.roleCode,"onUpdate:modelValue":u[1]||(u[1]=t=>s.roleCode=t)},{prepend:a(()=>[L]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u63CF\u8FF0",name:"remarks"},{default:a(()=>[e(v,{modelValue:s.remarks,"onUpdate:modelValue":u[2]||(u[2]=t=>s.remarks=t),placeholder:"\u89D2\u8272\u63CF\u8FF0","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["visible"])}}});const P=r=>(N("data-v-cceecc9a"),r=r(),W(),r),j={class:"role-manage"},H=P(()=>y("span",null,"\u65B0\u589E\u89D2\u8272",-1)),J={class:"table-box"},K=F("\u83DC\u5355\u6743\u9650"),Q=b({__name:"index",setup(r){const i=p(!1),m=p([]),s=p(0),d=p(!1);(async()=>{try{i.value=!0;const l=await G();l.success&&(m.value=l.data.list,s.value=l.data.total,i.value=!1)}catch(l){return l}})();const u=()=>{q.info("\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE")};return(l,n)=>{const v=o("icon-plus"),c=o("a-button"),g=o("a-row"),t=o("a-table-column"),V=o("icon-delete"),B=o("a-popconfirm"),w=o("icon-edit"),C=o("icon-safe"),h=o("a-space"),k=o("a-table"),E=U("loading");return x(),T("div",j,[e(g,{class:"head"},{default:a(()=>[e(c,{type:"primary",onClick:n[0]||(n[0]=_=>d.value=!0)},{icon:a(()=>[e(v)]),default:a(()=>[H]),_:1})]),_:1}),y("section",J,[$((x(),D(k,{data:m.value,"row-key":"id",scroll:{x:"100%",y:"100%",minWidth:900},pagination:{showPageSize:!0}},{columns:a(()=>[e(t,{title:"\u5E8F\u53F7",width:60},{cell:a(_=>[F(z(_.rowIndex+1),1)]),_:1}),e(t,{title:"\u89D2\u8272\u540D\u79F0","data-index":"name"}),e(t,{title:"\u89D2\u8272\u7F16\u53F7","data-index":"roleCode"}),e(t,{title:"\u89D2\u8272\u63CF\u8FF0","data-index":"description"}),e(t,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"}),e(t,{title:"\u64CD\u4F5C",width:220},{cell:a(({record:_})=>[e(h,null,{default:a(()=>[e(B,{content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?",onOk:u},{default:a(()=>[e(c,{type:"primary",status:"danger"},{icon:a(()=>[e(V)]),_:1})]),_:1}),e(c,{type:"primary",onClick:n[1]||(n[1]=X=>d.value=!0)},{icon:a(()=>[e(w)]),_:1}),e(c,{type:"primary",status:"success"},{icon:a(()=>[e(C)]),default:a(()=>[K]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])),[[E,i.value]])]),e(O,{modelValue:d.value,"onUpdate:modelValue":n[2]||(n[2]=_=>d.value=_)},null,8,["modelValue"])])}}});var ee=M(Q,[["__scopeId","data-v-cceecc9a"]]);export{ee as default};
