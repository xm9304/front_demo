import{d as e,e as a,z as l,r as d,f as s,o as t,q as o,w as u,h as i,i as n,j as m,M as r}from"./index-797b8818.js";import{e as c,f}from"./index-d562295c.js";const p=e({__name:"AddRoleModal",setup(e,{expose:p}){const v=a(),h=a(""),b=l((()=>!!h.value)),V=l((()=>b.value?"编辑角色":"新增角色")),x=a(!1),_=d({name:"",code:"",status:1,description:""}),w={name:[{required:!0,message:"请输入角色名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}],code:[{required:!0,message:"请输入角色编号"}],status:[{required:!0}]},k=()=>{var e;null==(e=v.value)||e.resetFields()};p({add:()=>{h.value="",x.value=!0},edit:async e=>{h.value=e;const a=await c({id:e});Object.assign(_,a.data),x.value=!0}});const g=async()=>{try{return!!(await f(_)).data&&(r.success("模拟保存成功"),!0)}catch(e){return!1}};return(e,a)=>{const l=s("a-input"),d=s("a-form-item"),r=s("a-textarea"),c=s("a-switch"),f=s("a-form"),p=s("a-modal");return t(),o(p,{visible:n(x),"onUpdate:visible":a[4]||(a[4]=e=>m(x)?x.value=e:null),title:n(V),"mask-closable":!1,onBeforeOk:g,onClose:k},{default:u((()=>[i(f,{ref_key:"FormRef",ref:v,model:n(_),rules:w,size:"medium","auto-label-width":""},{default:u((()=>[i(d,{label:"角色名称",field:"name"},{default:u((()=>[i(l,{placeholder:"请输入角色名称",modelValue:n(_).name,"onUpdate:modelValue":a[0]||(a[0]=e=>n(_).name=e)},null,8,["modelValue"])])),_:1}),i(d,{label:"角色编号",field:"code"},{default:u((()=>[i(l,{placeholder:"请输入角色编号",modelValue:n(_).code,"onUpdate:modelValue":a[1]||(a[1]=e=>n(_).code=e),disabled:n(b)},null,8,["modelValue","disabled"])])),_:1}),i(d,{label:"描述",field:"description"},{default:u((()=>[i(r,{modelValue:n(_).description,"onUpdate:modelValue":a[2]||(a[2]=e=>n(_).description=e),placeholder:"请填写描述","max-length":200,"show-word-limit":"","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])])),_:1}),i(d,{label:"状态",field:"status"},{default:u((()=>[i(c,{type:"round",modelValue:n(_).status,"onUpdate:modelValue":a[3]||(a[3]=e=>n(_).status=e),"checked-value":1,"unchecked-value":0,"checked-text":"正常","unchecked-text":"禁用"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{p as _};
