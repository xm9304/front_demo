import{_ as t}from"./index-75c5bda7.js";import{d as a,b as e,f as s,eS as n,o as r,c as u,g as d,h as p,w as o,k as i,i as l,$ as c,q as b,p as m,l as y,n as _}from"./index-04a8e2b5.js";const f=t=>(m("data-v-adaba8b9"),t=t(),y(),t),g={class:"gi_page"},v={class:"gi_box wrap"},h=f((()=>d("span",null,"当前页面 ",-1))),P=f((()=>d("span",null," 能看, ",-1))),j=f((()=>d("span",null," 不能看",-1))),x={class:"item"},w={class:"item"},S=_(a({name:"TestPage1",__name:"index",setup(a){const m=e();return(a,e)=>{const y=s("a-tag"),_=s("a-alert"),f=s("a-typography-title"),S=t,k=s("a-button"),q=s("a-space"),F=n("hasPerm");return r(),u("div",g,[d("div",v,[p(_,null,{default:o((()=>[h,p(y,{color:"green"},{default:o((()=>[i("超级管理员角色")])),_:1}),P,p(y,{color:"red"},{default:o((()=>[i("普通用户角色")])),_:1}),j])),_:1}),p(f,{heading:4},{default:o((()=>[i("当前用户权限")])),_:1}),p(S,{"code-json":JSON.stringify(l(m).permissions)},null,8,["code-json"]),d("section",x,[p(S,{type:"vue","code-json":'<a-space>\n  <a-button v-hasPerm="[\'test:btn:add\']" type="primary">新增</a-button>\n  <a-button v-hasPerm="[\'test:btn:edit\']" type="primary" status="success">编辑</a-button>\n  <a-button v-hasPerm="[\'test:btn:delete\']" type="primary" status="danger">删除</a-button>\n</a-space>'}),p(q,{class:"gi_mt"},{default:o((()=>[c((r(),b(k,{type:"primary"},{default:o((()=>[i("新增")])),_:1})),[[F,["test:btn:add"]]]),c((r(),b(k,{type:"primary",status:"success"},{default:o((()=>[i("编辑")])),_:1})),[[F,["test:btn:edit"]]]),c((r(),b(k,{type:"primary",status:"danger"},{default:o((()=>[i("删除")])),_:1})),[[F,["test:btn:delete"]]])])),_:1})]),d("section",w,[p(S,{type:"vue","code-json":'<a-space>\n  <a-button v-hasPerm="[\'user:btn:add\']" type="primary">新增</a-button>\n  <a-button v-hasPerm="[\'user:btn:edit\']" type="primary" status="success">编辑</a-button>\n  <a-button v-hasPerm="[\'user:btn:delete\']" type="primary" status="danger">删除</a-button>\n</a-space>'}),p(q,{class:"gi_mt"},{default:o((()=>[c((r(),b(k,{type:"primary"},{default:o((()=>[i("新增")])),_:1})),[[F,["user:btn:add"]]]),c((r(),b(k,{type:"primary",status:"success"},{default:o((()=>[i("编辑")])),_:1})),[[F,["user:btn:edit"]]]),c((r(),b(k,{type:"primary",status:"danger"},{default:o((()=>[i("删除")])),_:1})),[[F,["user:btn:delete"]]])])),_:1})])])])}}}),[["__scopeId","data-v-adaba8b9"]]);export{S as default};
