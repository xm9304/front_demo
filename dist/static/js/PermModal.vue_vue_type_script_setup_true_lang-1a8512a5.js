import{d as e,r as a,B as s,f as l,o as t,t as n,w as o,g as c,i as r,k as i,j as u,N as d,M as m}from"./index-7473d946.js";import{a as k}from"./role-fdc9b8fc.js";import{b as f}from"./menu-caed40a9.js";const p=e({__name:"PermModal",setup(e,{expose:p}){const v=a(),y=a([]);(async()=>{const e=await f();y.value=e.data,d((()=>{var e;null==(e=v.value)||e.expandAll()}))})();const b=a(!1),h=a([]);p({open:e=>{h.value=[],k({role:e.code}).then((e=>{h.value=e.data})),b.value=!0}});const _=s((()=>"分配权限")),j=()=>{m.success("模拟保存成功")};return(e,a)=>{const s=l("a-tree"),d=l("a-modal");return t(),n(d,{visible:r(b),"onUpdate:visible":a[1]||(a[1]=e=>i(b)?b.value=e:null),title:r(_),fullscreen:r(u)(),"mask-closable":!0,onOk:j},{default:o((()=>[c(s,{ref_key:"TreeRef",ref:v,size:"mini",checkable:"","check-strictly":!0,"checked-keys":r(h),"onUpdate:checkedKeys":a[0]||(a[0]=e=>i(h)?h.value=e:null),data:r(y),fieldNames:{key:"id"}},null,8,["checked-keys","data"])])),_:1},8,["visible","title","fullscreen"])}}});export{p as _};