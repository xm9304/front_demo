import{d as e,e as a,B as l,r as d,f as t,o as s,t as o,w as u,g as i,i as n,k as m,M as r}from"./index-5690b7e6.js";import{e as c,f}from"./index-2f309881.js";const p=e({__name:"AddRoleModal",setup(e,{expose:p}){const h=a(),v=a(""),b=l((()=>!!v.value)),x=l((()=>b.value?"编辑角色":"新增角色")),V=a(!1),w=d({name:"",code:"",status:1,description:""}),_={name:[{required:!0,message:"请输入角色名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}],code:[{required:!0,message:"请输入角色编号"}],status:[{required:!0}]},k=()=>{var e;null==(e=h.value)||e.resetFields()};p({add:()=>{v.value="",V.value=!0},edit:async e=>{v.value=e;const a=await c({id:e});Object.assign(w,a.data),V.value=!0}});const g=async()=>{try{return!!(await f(w)).data&&(r.success("模拟保存成功"),!0)}catch(e){return!1}};return(e,a)=>{const l=t("a-input"),d=t("a-form-item"),r=t("a-textarea"),c=t("a-switch"),f=t("a-form"),p=t("a-modal");return s(),o(p,{visible:n(V),"onUpdate:visible":a[4]||(a[4]=e=>m(V)?V.value=e:null),title:n(x),width:"90%","mask-closable":!1,"modal-style":{maxWidth:"520px"},onBeforeOk:g,onClose:k},{default:u((()=>[i(f,{ref_key:"FormRef",ref:h,model:n(w),rules:_,size:"medium","auto-label-width":""},{default:u((()=>[i(d,{label:"角色名称",field:"name"},{default:u((()=>[i(l,{placeholder:"请输入角色名称",modelValue:n(w).name,"onUpdate:modelValue":a[0]||(a[0]=e=>n(w).name=e)},null,8,["modelValue"])])),_:1}),i(d,{label:"角色编号",field:"code"},{default:u((()=>[i(l,{placeholder:"请输入角色编号",modelValue:n(w).code,"onUpdate:modelValue":a[1]||(a[1]=e=>n(w).code=e),disabled:n(b)},null,8,["modelValue","disabled"])])),_:1}),i(d,{label:"描述",field:"description"},{default:u((()=>[i(r,{modelValue:n(w).description,"onUpdate:modelValue":a[2]||(a[2]=e=>n(w).description=e),placeholder:"请填写描述","max-length":200,"show-word-limit":"","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])])),_:1}),i(d,{label:"状态",field:"status"},{default:u((()=>[i(c,{type:"round",modelValue:n(w).status,"onUpdate:modelValue":a[3]||(a[3]=e=>n(w).status=e),"checked-value":1,"unchecked-value":0,"checked-text":"正常","unchecked-text":"禁用"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{p as _};