import{u as e}from"./useDept-6c0d549b.js";import{d as a,e as l,z as t,r as d,f as s,o,q as u,w as i,h as n,i as r,j as m,M as c}from"./index-79bbcaef.js";import{g as p,s as f}from"./index-9049a78d.js";const h=a({__name:"AddDeptModal",setup(a,{expose:h}){const v=l(),V=l(""),w=l(!1),b=t((()=>!!V.value)),x=t((()=>b.value?"编辑部门":"新增部门")),{deptList:_,getDeptList:k}=e();k();const y=d({id:"",parentId:"",name:"",sort:0,status:1,description:""}),g={name:[{required:!0,message:"请输入部门名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}]},U=()=>{var e;null==(e=v.value)||e.resetFields()};h({add:()=>{V.value="",w.value=!0},edit:async e=>{_.value.length||await k(),V.value=e;const a=await p({id:e});Object.assign(y,a.data),w.value=!0}});const j=async()=>{try{return!!(await f(y)).data&&(c.success("模拟保存成功"),!0)}catch(e){return!1}};return(e,a)=>{const l=s("a-tree-select"),t=s("a-form-item"),d=s("a-input"),c=s("a-input-number"),p=s("a-textarea"),f=s("a-switch"),h=s("a-form"),V=s("a-modal");return o(),u(V,{visible:r(w),"onUpdate:visible":a[5]||(a[5]=e=>m(w)?w.value=e:null),title:r(x),width:"90%","modal-style":{maxWidth:"520px"},"mask-closable":!1,onBeforeOk:j,onClose:U},{default:i((()=>[n(h,{ref_key:"FormRef",ref:v,model:r(y),rules:g,size:"medium","auto-label-width":""},{default:i((()=>[n(t,{label:"上级部门",field:"parentId"},{default:i((()=>[n(l,{modelValue:r(y).parentId,"onUpdate:modelValue":a[0]||(a[0]=e=>r(y).parentId=e),"allow-clear":"",data:r(_),placeholder:"请选择",fieldNames:{key:"id",title:"name",children:"children"}},null,8,["modelValue","data"])])),_:1}),n(t,{label:"部门名称",field:"name"},{default:i((()=>[n(d,{modelValue:r(y).name,"onUpdate:modelValue":a[1]||(a[1]=e=>r(y).name=e),placeholder:"请输入部门名称","allow-clear":""},null,8,["modelValue"])])),_:1}),n(t,{label:"排序",field:"sort"},{default:i((()=>[n(c,{modelValue:r(y).sort,"onUpdate:modelValue":a[2]||(a[2]=e=>r(y).sort=e),style:{width:"120px"}},null,8,["modelValue"])])),_:1}),n(t,{label:"描述",field:"description"},{default:i((()=>[n(p,{modelValue:r(y).description,"onUpdate:modelValue":a[3]||(a[3]=e=>r(y).description=e),"max-length":200,placeholder:"请填写描述","auto-size":{minRows:3},"show-word-limit":""},null,8,["modelValue"])])),_:1}),n(t,{label:"状态",field:"status"},{default:i((()=>[n(f,{type:"round",modelValue:r(y).status,"onUpdate:modelValue":a[4]||(a[4]=e=>r(y).status=e),"checked-value":1,"unchecked-value":0,"checked-text":"正常","unchecked-text":"禁用"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{h as _};
