import{O as e,a}from"./regexp-53006fbc.js";import{r as t,e as l,S as n,h as o,eC as r,f as s,d as u,o as m,q as d,w as i,k as p}from"./index-e771344a.js";import{_ as c}from"./AddUserForm.vue_vue_type_script_setup_true_lang-495d2e7d.js";const f=()=>{const u=t({name:"",phone:""}),m=l(null),d={name:[{required:!0,message:"请输入姓名"},{match:e,message:"只能是中文姓名"},{minLength:1,maxLength:4,message:"名字最长不超过4个字符"}],phone:[{required:!0,message:"请输入手机号"},{match:a,message:"手机号格式不正确"}]};n.open({title:"添加用户",content:()=>o(r,{ref:m,model:u,rules:d},{default:()=>[o(r.Item,{label:"用户名",field:"name"},{default:()=>[o(s("a-input"),{modelValue:u.name,"onUpdate:modelValue":e=>u.name=e,placeholder:"请输入用户名","max-length":4,"allow-clear":!0},null)]}),o(r.Item,{label:"手机号",field:"phone"},{default:()=>[o(s("a-input"),{modelValue:u.phone,"onUpdate:modelValue":e=>u.phone=e,placeholder:"请输入手机号","max-length":11,"allow-clear":!0},null)]})]}),okText:"添加",onBeforeOk:async()=>{var e;if(await(null==(e=m.value)?void 0:e.validate()))return!1;try{return await new Promise((e=>setTimeout((()=>{e(!0)}),2e3))),!0}catch(a){return!1}}})},h=u({__name:"index",setup(e){const a=()=>{f()},t=()=>{const e=l(null);n.open({title:"添加用户",content:()=>o(c,{ref:e},null),okText:"添加",onBeforeOk:async()=>{var a;return await(null==(a=e.value)?void 0:a.handleAddUser())}})};return(e,l)=>{const n=s("a-button"),r=s("a-space");return m(),d(r,null,{default:i((()=>[o(n,{type:"primary",onClick:a},{default:i((()=>[p("打开添加用户弹窗(方式1)")])),_:1}),o(n,{type:"primary",onClick:t},{default:i((()=>[p("打开添加用户弹窗(方式2)")])),_:1})])),_:1})}}});export{h as _};
