import{d as e,e as a,f as l,o as r,q as t,w as u,h as n,k as d,v as s,i,N as o,c as v,j as f}from"./index-7745a379.js";import{k as _}from"./index-4e03c955.js";const c={key:0},b={key:1},m=e({__name:"UserDetailDrawer",setup(e,{expose:m}){const p=a(!1),k=a(""),g=a();return m({open:e=>{k.value=e,(async()=>{try{const e=await _({id:k.value});g.value=e.data}catch(e){}})(),p.value=!0}}),(e,a)=>{const _=l("a-descriptions-item"),m=l("a-tag"),k=l("a-descriptions"),y=l("a-drawer");return r(),t(y,{visible:i(p),"onUpdate:visible":a[0]||(a[0]=e=>f(p)?p.value=e:null),title:"用户详情",width:"auto"},{default:u((()=>[n(k,{column:{xs:1,sm:1,md:2},bordered:"",size:"large"},{default:u((()=>[n(_,{label:"用户名"},{default:u((()=>{var e;return[d(s(null==(e=i(g))?void 0:e.username),1)]})),_:1}),n(_,{label:"昵称"},{default:u((()=>{var e;return[d(s(null==(e=i(g))?void 0:e.nickname),1)]})),_:1}),n(_,{label:"角色"},{default:u((()=>{var e;return[d(s(null==(e=i(g))?void 0:e.roleNames),1)]})),_:1}),n(_,{label:"状态"},{default:u((()=>{var e,a;return[1===(null==(e=i(g))?void 0:e.status)?(r(),t(m,{key:0,color:"green"},{default:u((()=>[d("正常")])),_:1})):o("",!0),0===(null==(a=i(g))?void 0:a.status)?(r(),t(m,{key:1,color:"red"},{default:u((()=>[d("禁用")])),_:1})):o("",!0)]})),_:1}),n(_,{label:"性别"},{default:u((()=>{var e,a;return[1===(null==(e=i(g))?void 0:e.gender)?(r(),v("span",c,"男")):o("",!0),2===(null==(a=i(g))?void 0:a.gender)?(r(),v("span",b,"女")):o("",!0)]})),_:1}),n(_,{label:"部门"},{default:u((()=>{var e;return[d(s(null==(e=i(g))?void 0:e.deptName),1)]})),_:1}),n(_,{label:"联系方式"},{default:u((()=>{var e;return[d(s(null==(e=i(g))?void 0:e.phone),1)]})),_:1}),n(_,{label:"邮箱"},{default:u((()=>{var e;return[d(s(null==(e=i(g))?void 0:e.email),1)]})),_:1}),n(_,{label:"创建人"},{default:u((()=>{var e;return[d(s(null==(e=i(g))?void 0:e.createUserString),1)]})),_:1}),n(_,{label:"创建时间"},{default:u((()=>{var e;return[d(s(null==(e=i(g))?void 0:e.createTime),1)]})),_:1}),n(_,{label:"描述",span:2},{default:u((()=>{var e;return[d(s(null==(e=i(g))?void 0:e.description),1)]})),_:1})])),_:1})])),_:1},8,["visible"])}}});export{m as _};
