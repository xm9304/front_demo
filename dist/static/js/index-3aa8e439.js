import{_ as t}from"./index-0f6defcd.js";import{d as a,b as e,f as s,eX as n,o as r,c as u,h as d,g as o,w as p,l as i,i as l,a0 as c,s as m,p as y,m as b,q as _}from"./index-7890a41b.js";const f=t=>(y("data-v-4df09653"),t=t(),b(),t),g={class:"gi_page"},v={class:"gi_box wrap"},h=f((()=>d("span",null,"当前页面 ",-1))),j=f((()=>d("span",null," 能看",-1))),P={class:"item"},x={class:"item"},J=_(a({name:"TestPage2",__name:"index",setup(a){const y=e();return(a,e)=>{const b=s("a-tag"),_=s("a-alert"),f=s("a-typography-title"),J=t,w=s("a-button"),N=s("a-space"),O=n("hasPerm");return r(),u("div",g,[d("div",v,[o(_,null,{default:p((()=>[h,o(b,{color:"green"},{default:p((()=>[i("超级管理员角色")])),_:1}),i(" 和 "),o(b,{color:"green"},{default:p((()=>[i("普通用户角色")])),_:1}),j])),_:1}),o(f,{heading:4},{default:p((()=>[i("当前用户权限")])),_:1}),o(J,{"code-json":JSON.stringify(l(y).permissions)},null,8,["code-json"]),o(f,{heading:4},{default:p((()=>[i("当前页面角色权限")])),_:1}),o(J,{"code-json":JSON.stringify(["role_admin","role_user"])},null,8,["code-json"]),d("section",P,[o(J,{type:"vue","code-json":'<a-space>\n  <a-button v-hasPerm="[\'test:btn:add\']" type="primary">新增</a-button>\n  <a-button v-hasPerm="[\'test:btn:edit\']" type="primary" status="success">编辑</a-button>\n  <a-button v-hasPerm="[\'test:btn:delete\']" type="primary" status="danger">删除</a-button>\n</a-space>'}),o(N,{class:"gi_mt"},{default:p((()=>[c((r(),m(w,{type:"primary"},{default:p((()=>[i("新增")])),_:1})),[[O,["test:btn:add"]]]),c((r(),m(w,{type:"primary",status:"success"},{default:p((()=>[i("编辑")])),_:1})),[[O,["test:btn:edit"]]]),c((r(),m(w,{type:"primary",status:"danger"},{default:p((()=>[i("删除")])),_:1})),[[O,["test:btn:delete"]]])])),_:1})]),d("section",x,[o(J,{type:"vue","code-json":'<a-space>\n  <a-button v-hasPerm="[\'user:btn:add\']" type="primary">新增</a-button>\n  <a-button v-hasPerm="[\'user:btn:edit\']" type="primary" status="success">编辑</a-button>\n  <a-button v-hasPerm="[\'user:btn:delete\']" type="primary" status="danger">删除</a-button>\n</a-space>'}),o(N,{class:"gi_mt"},{default:p((()=>[c((r(),m(w,{type:"primary"},{default:p((()=>[i("新增")])),_:1})),[[O,["user:btn:add"]]]),c((r(),m(w,{type:"primary",status:"success"},{default:p((()=>[i("编辑")])),_:1})),[[O,["user:btn:edit"]]]),c((r(),m(w,{type:"primary",status:"danger"},{default:p((()=>[i("删除")])),_:1})),[[O,["user:btn:delete"]]])])),_:1})])])])}}}),[["__scopeId","data-v-4df09653"]]);export{J as default};