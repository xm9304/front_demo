import{d as e,e as a,z as s,f as l,o as t,q as n,w as c,h as i,i as o,j as r,eO as d,K as u,M as f}from"./index-7745a379.js";import{h as k,i as v}from"./index-4e03c955.js";const m=e({__name:"PermModal",setup(e,{expose:m}){const p=a(),y=a([]);(async()=>{try{const e=await k();y.value=e.data,u((()=>{var e;null==(e=p.value)||e.expandAll()}))}finally{}})();const h=a(!1),b=a([]);m({open:e=>{b.value=[],v({role:e.code}).then((e=>{b.value=e.data})),h.value=!0}});const x=s((()=>"分配权限")),_=()=>{f.success("模拟保存成功")};return(e,a)=>{const s=l("a-tree"),u=l("a-modal");return t(),n(u,{visible:o(h),"onUpdate:visible":a[1]||(a[1]=e=>r(h)?h.value=e:null),title:o(x),fullscreen:o(d)(),"mask-closable":!0,onOk:_},{default:c((()=>[i(s,{ref_key:"TreeRef",ref:p,size:"mini",checkable:"","check-strictly":!0,"checked-keys":o(b),"onUpdate:checkedKeys":a[0]||(a[0]=e=>r(b)?b.value=e:null),data:o(y),fieldNames:{key:"id"}},null,8,["checked-keys","data"])])),_:1},8,["visible","title","fullscreen"])}}});export{m as _};
