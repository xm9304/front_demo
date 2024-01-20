import{u as e,g as a,s as l}from"./useDept-93558f52.js";import{d as t,r as s,B as d,f as o,o as u,t as i,w as r,g as m,i as n,k as c,M as p}from"./index-7473d946.js";import{u as f}from"./useForm-ad2b0ad5.js";const v=t({__name:"AddDeptModal",emits:["save-success"],setup(t,{expose:v,emit:h}){const V=h,w=s(),b=s(""),x=s(!1),_=d((()=>!!b.value)),g=d((()=>_.value?"编辑部门":"新增部门")),{deptList:k,getDeptList:y}=e();y();const{form:U,resetForm:j}=f({id:"",parentId:"",name:"",sort:0,status:1,description:""}),F={name:[{required:!0,message:"请输入部门名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}]},I=()=>{var e;null==(e=w.value)||e.resetFields(),j()};v({add:()=>{b.value="",x.value=!0},edit:async e=>{k.value.length||await y(),b.value=e;const l=await a({id:e});Object.assign(U,l.data),x.value=!0}});const M=async()=>{var e;try{if(await(null==(e=w.value)?void 0:e.validate()))return!1;return!!(await l(U)).data&&(p.success("模拟保存成功"),V("save-success"),!0)}catch(a){return!1}};return(e,a)=>{const l=o("a-tree-select"),t=o("a-form-item"),s=o("a-input"),d=o("a-input-number"),p=o("a-textarea"),f=o("a-switch"),v=o("a-form"),h=o("a-modal");return u(),i(h,{visible:n(x),"onUpdate:visible":a[5]||(a[5]=e=>c(x)?x.value=e:null),title:n(g),width:"90%","modal-style":{maxWidth:"520px"},"mask-closable":!1,onBeforeOk:M,onClose:I},{default:r((()=>[m(v,{ref_key:"FormRef",ref:w,model:n(U),rules:F,size:"medium","auto-label-width":""},{default:r((()=>[m(t,{label:"上级部门",field:"parentId"},{default:r((()=>[m(l,{modelValue:n(U).parentId,"onUpdate:modelValue":a[0]||(a[0]=e=>n(U).parentId=e),"allow-clear":"",data:n(k),placeholder:"请选择上级部门",fieldNames:{key:"id",title:"name",children:"children"}},null,8,["modelValue","data"])])),_:1}),m(t,{label:"部门名称",field:"name"},{default:r((()=>[m(s,{modelValue:n(U).name,"onUpdate:modelValue":a[1]||(a[1]=e=>n(U).name=e),modelModifiers:{trim:!0},placeholder:"请输入部门名称","allow-clear":"","max-length":10},null,8,["modelValue"])])),_:1}),m(t,{label:"排序",field:"sort"},{default:r((()=>[m(d,{modelValue:n(U).sort,"onUpdate:modelValue":a[2]||(a[2]=e=>n(U).sort=e),style:{width:"120px"}},null,8,["modelValue"])])),_:1}),m(t,{label:"描述",field:"description"},{default:r((()=>[m(p,{modelValue:n(U).description,"onUpdate:modelValue":a[3]||(a[3]=e=>n(U).description=e),modelModifiers:{trim:!0},"max-length":200,placeholder:"请填写描述","auto-size":{minRows:3},"show-word-limit":""},null,8,["modelValue"])])),_:1}),m(t,{label:"状态",field:"status"},{default:r((()=>[m(f,{type:"round",modelValue:n(U).status,"onUpdate:modelValue":a[4]||(a[4]=e=>n(U).status=e),"checked-value":1,"unchecked-value":0,"checked-text":"正常","unchecked-text":"禁用"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{v as _};