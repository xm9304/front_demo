import{_ as t}from"./index-0a61f2d0.js";import{d as a,b as e,f as s,eT as n,o as r,c as u,g as d,h as o,w as p,k as i,i as l,$ as c,q as m,p as y,l as b,n as _}from"./index-a2edea83.js";const f=t=>(y("data-v-f4cfd97a"),t=t(),b(),t),g={class:"gi_page"},v={class:"gi_box wrap"},h=f((()=>d("span",null,"当前页面 ",-1))),j=f((()=>d("span",null," 能看",-1))),P={class:"item"},x={class:"item"},w=_(a({name:"TestPage2",__name:"index",setup(a){const y=e();return(a,e)=>{const b=s("a-tag"),_=s("a-alert"),f=s("a-typography-title"),w=t,J=s("a-button"),N=s("a-space"),O=n("hasPerm");return r(),u("div",g,[d("div",v,[o(_,null,{default:p((()=>[h,o(b,{color:"green"},{default:p((()=>[i("超级管理员角色")])),_:1}),i(" 和 "),o(b,{color:"green"},{default:p((()=>[i("普通用户角色")])),_:1}),j])),_:1}),o(f,{heading:4},{default:p((()=>[i("当前用户权限")])),_:1}),o(w,{"code-json":JSON.stringify(l(y).permissions)},null,8,["code-json"]),o(f,{heading:4},{default:p((()=>[i("当前页面角色权限")])),_:1}),o(w,{"code-json":JSON.stringify(["role_admin","user_user"])},null,8,["code-json"]),d("section",P,[o(w,{type:"vue","code-json":'<a-space>\n  <a-button v-hasPerm="[\'test:btn:add\']" type="primary">新增</a-button>\n  <a-button v-hasPerm="[\'test:btn:edit\']" type="primary" status="success">编辑</a-button>\n  <a-button v-hasPerm="[\'test:btn:delete\']" type="primary" status="danger">删除</a-button>\n</a-space>'}),o(N,{class:"gi_mt"},{default:p((()=>[c((r(),m(J,{type:"primary"},{default:p((()=>[i("新增")])),_:1})),[[O,["test:btn:add"]]]),c((r(),m(J,{type:"primary",status:"success"},{default:p((()=>[i("编辑")])),_:1})),[[O,["test:btn:edit"]]]),c((r(),m(J,{type:"primary",status:"danger"},{default:p((()=>[i("删除")])),_:1})),[[O,["test:btn:delete"]]])])),_:1})]),d("section",x,[o(w,{type:"vue","code-json":'<a-space>\n  <a-button v-hasPerm="[\'user:btn:add\']" type="primary">新增</a-button>\n  <a-button v-hasPerm="[\'user:btn:edit\']" type="primary" status="success">编辑</a-button>\n  <a-button v-hasPerm="[\'user:btn:delete\']" type="primary" status="danger">删除</a-button>\n</a-space>'}),o(N,{class:"gi_mt"},{default:p((()=>[c((r(),m(J,{type:"primary"},{default:p((()=>[i("新增")])),_:1})),[[O,["user:btn:add"]]]),c((r(),m(J,{type:"primary",status:"success"},{default:p((()=>[i("编辑")])),_:1})),[[O,["user:btn:edit"]]]),c((r(),m(J,{type:"primary",status:"danger"},{default:p((()=>[i("删除")])),_:1})),[[O,["user:btn:delete"]]])])),_:1})])])])}}}),[["__scopeId","data-v-f4cfd97a"]]);export{w as default};
