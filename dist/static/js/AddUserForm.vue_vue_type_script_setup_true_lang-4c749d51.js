import{O as e,a}from"./regexp-53006fbc.js";import{d as l,r as s,e as m,f as o,o as n,q as r,w as d,h as t,i as u}from"./index-36ab56eb.js";const i=l({__name:"AddUserForm",setup(l,{expose:i}){const p=s({name:"",phone:""}),h=m(null),f={name:[{required:!0,message:"请输入姓名"},{match:e,message:"只能是中文姓名"},{minLength:1,maxLength:4,message:"名字最长不超过4个字符"}],phone:[{required:!0,message:"请输入手机号"},{match:a,message:"手机号格式不正确"}]};return i({handleAddUser:async()=>{var e;return!(await(null==(e=h.value)?void 0:e.validate()))&&(await new Promise((e=>setTimeout((()=>{e(!0)}),2e3))),!0)}}),(e,a)=>{const l=o("a-input"),s=o("a-form-item"),m=o("a-form");return n(),r(m,{model:u(p),ref_key:"FormRef",ref:h},{default:d((()=>[t(s,{field:"name",label:"用户名",rules:f.name},{default:d((()=>[t(l,{modelValue:u(p).name,"onUpdate:modelValue":a[0]||(a[0]=e=>u(p).name=e),placeholder:"请输入用户名","max-length":8,"allow-clear":""},null,8,["modelValue"])])),_:1},8,["rules"]),t(s,{field:"phone",label:"手机号",rules:f.phone},{default:d((()=>[t(l,{modelValue:u(p).phone,"onUpdate:modelValue":a[1]||(a[1]=e=>u(p).phone=e),placeholder:"请输入手机号","max-length":11,"allow-clear":""},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["model"])}}});export{i as _};