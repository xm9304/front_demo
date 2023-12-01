import{O as e,a}from"./regexp-2217f7b7.js";import{e as l,V as t,d as s,r as o,B as d,f as n,o as u,t as i,w as r,g as m,i as c,l as f,z as p,c as v,F as _,x as h,h as g,y as b,k as x,M as w,p as y,n as V,s as k}from"./index-8e74274a.js";const j=e=>(y("data-v-70ca5923"),e=e(),V(),e),U=j((()=>g("div",null,"仅支持中文姓名",-1))),q=j((()=>g("span",null,"权限配置",-1))),F=j((()=>g("span",null,"自定义管理员、编辑者的权限， 点击",-1))),z=k(s({__name:"EditModal",setup(s,{expose:y}){const{form:V}=function(e){const a=()=>t.cloneDeep(e),s=l(a());return{form:s,resetForm:()=>{Object.assign(s,a())}}}({id:"",name:"",phone:"",status:!1}),k={name:[{required:!0,message:"请输入姓名"},{match:e,message:"只能是中文姓名"},{minLength:1,maxLength:4,message:"名字最长不超过4个字符"}],phone:[{match:a,message:"手机号格式不正确"}],status:[{required:!0}]},j=[{name:"新增"},{name:"编辑"},{name:"重命名"},{name:"分享"},{name:"删除"}],z=o(!1),C=d((()=>!!V.id)),E=d((()=>C.value?"编辑":"新增")),L=o(),M=async()=>{var e;return!(await(null==(e=L.value)?void 0:e.validate()))&&(await new Promise((e=>setTimeout(e,1500))),w.success(C.value?"编辑成功":"新增成功"),!0)};return y({add:()=>{V.id="",z.value=!0},edit:e=>{V.id=e,z.value=!0}}),(e,a)=>{var l;const t=n("a-input"),s=n("a-form-item"),o=n("a-radio"),d=n("a-radio-group"),w=n("a-form"),y=n("a-row"),C=n("icon-question-circle-fill"),O=n("a-link"),B=n("a-tooltip"),D=n("a-space"),I=n("icon-right"),P=n("a-checkbox"),R=n("a-checkbox-group"),T=n("a-collapse-item"),W=n("a-collapse"),A=n("a-modal");return u(),i(A,{visible:c(z),"onUpdate:visible":a[3]||(a[3]=e=>x(z)?z.value=e:null),title:c(E),width:"90%","modal-style":{maxWidth:"520px"},"on-before-ok":M,onClose:null==(l=c(L))?void 0:l.resetFields},{default:r((()=>[m(y,{justify:"center"},{default:r((()=>[m(w,{ref_key:"formRef",ref:L,model:c(V),rules:k,size:"medium","auto-label-width":"",style:{width:"380px"}},{default:r((()=>[m(s,{field:"name",label:"姓名"},{extra:r((()=>[U])),default:r((()=>[m(t,{modelValue:c(V).name,"onUpdate:modelValue":a[0]||(a[0]=e=>c(V).name=e),placeholder:"请输入姓名","allow-clear":""},null,8,["modelValue"])])),_:1}),m(s,{field:"phone",label:"手机号"},{default:r((()=>[m(t,{modelValue:c(V).phone,"onUpdate:modelValue":a[1]||(a[1]=e=>c(V).phone=e),placeholder:"请输入手机号","allow-clear":""},null,8,["modelValue"])])),_:1}),m(s,{field:"status",label:"状态"},{default:r((()=>[m(d,{modelValue:c(V).status,"onUpdate:modelValue":a[2]||(a[2]=e=>c(V).status=e)},{default:r((()=>[m(o,{value:!1},{default:r((()=>[f("关闭")])),_:1}),m(o,{value:!0},{default:r((()=>[f("开启")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1}),m(W,{bordered:!1,"default-active-key":["1"]},{default:r((()=>[m(T,{"show-expand-icon":!0,key:"1"},{header:r((()=>[m(D,null,{default:r((()=>[q,m(B,{position:"right","content-style":{width:"200px"}},{content:r((()=>[F,m(O,{type:"primary",hoverable:!1},{default:r((()=>[f("了解更多权限")])),_:1})])),default:r((()=>[m(C,{style:{color:"rgb(var(--warning-6))"}})])),_:1})])),_:1})])),"expand-icon":r((({active:e})=>[m(I,{class:p({gi_rotate_90deg:e})},null,8,["class"])])),default:r((()=>[(u(),v(_,null,h(j,((e,a)=>m(y,{justify:"space-between",key:a},{default:r((()=>[g("span",null,b(e.name),1),m(R,null,{default:r((()=>[m(P,{value:"1"},{default:r((()=>[f("管理员")])),_:1}),m(P,{value:"2"},{default:r((()=>[f("编辑者")])),_:1})])),_:1})])),_:2},1024))),64))])),_:1})])),_:1})])),_:1},8,["visible","title","onClose"])}}}),[["__scopeId","data-v-70ca5923"]]);export{z as default};
