import{O as e,a}from"./regexp-53006fbc.js";import{d as l,r as t,e as s,A as o,f as d,o as u,s as n,w as i,g as r,i as m,l as c,y as f,c as p,F as v,v as _,h,x as g,k as w,M as x,p as b,m as y,q as k}from"./index-2b917f82.js";const V=e=>(b("data-v-9403c70f"),e=e(),y(),e),j=V((()=>h("div",null,"仅支持中文姓名",-1))),q=V((()=>h("span",null,"权限配置",-1))),U=V((()=>h("span",null,"自定义管理员、编辑者的权限， 点击",-1))),C=k(l({__name:"EditModal",setup(l,{expose:b}){const y=t({id:"",name:"",phone:"",status:!1}),k={name:[{required:!0,message:"请输入姓名"},{match:e,message:"只能是中文姓名"},{minLength:1,maxLength:4,message:"名字最长不超过4个字符"}],phone:[{match:a,message:"手机号格式不正确"}],status:[{required:!0}]},V=[{name:"新增"},{name:"编辑"},{name:"重命名"},{name:"分享"},{name:"删除"}],C=s(!1),F=o((()=>!!y.id)),L=o((()=>F.value?"编辑":"新增")),M=s(),z=async()=>{var e;return!(await(null==(e=M.value)?void 0:e.validate()))&&(await new Promise((e=>setTimeout(e,1500))),x.success(F.value?"编辑成功":"新增成功"),!0)};return b({add:()=>{y.id="",C.value=!0},edit:e=>{y.id=e,C.value=!0}}),(e,a)=>{var l;const t=d("a-input"),s=d("a-form-item"),o=d("a-radio"),x=d("a-radio-group"),b=d("a-form"),F=d("a-row"),A=d("icon-question-circle-fill"),E=d("a-link"),I=d("a-tooltip"),O=d("a-space"),P=d("icon-right"),R=d("a-checkbox"),T=d("a-checkbox-group"),W=d("a-collapse-item"),B=d("a-collapse"),D=d("a-modal");return u(),n(D,{visible:m(C),"onUpdate:visible":a[3]||(a[3]=e=>w(C)?C.value=e:null),title:m(L),width:"90%","modal-style":{maxWidth:"520px"},"on-before-ok":z,onClose:null==(l=m(M))?void 0:l.resetFields},{default:i((()=>[r(F,{justify:"center"},{default:i((()=>[r(b,{ref_key:"formRef",ref:M,model:m(y),rules:k,size:"medium","auto-label-width":"",style:{width:"380px"}},{default:i((()=>[r(s,{field:"name",label:"姓名"},{extra:i((()=>[j])),default:i((()=>[r(t,{modelValue:m(y).name,"onUpdate:modelValue":a[0]||(a[0]=e=>m(y).name=e),placeholder:"请输入姓名","allow-clear":""},null,8,["modelValue"])])),_:1}),r(s,{field:"phone",label:"手机号"},{default:i((()=>[r(t,{modelValue:m(y).phone,"onUpdate:modelValue":a[1]||(a[1]=e=>m(y).phone=e),placeholder:"请输入手机号","allow-clear":""},null,8,["modelValue"])])),_:1}),r(s,{field:"status",label:"状态"},{default:i((()=>[r(x,{modelValue:m(y).status,"onUpdate:modelValue":a[2]||(a[2]=e=>m(y).status=e)},{default:i((()=>[r(o,{value:!1},{default:i((()=>[c("关闭")])),_:1}),r(o,{value:!0},{default:i((()=>[c("开启")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1}),r(B,{bordered:!1,"default-active-key":["1"]},{default:i((()=>[r(W,{"show-expand-icon":!0,key:"1"},{header:i((()=>[r(O,null,{default:i((()=>[q,r(I,{position:"right","content-style":{width:"200px"}},{content:i((()=>[U,r(E,{type:"primary",hoverable:!1},{default:i((()=>[c("了解更多权限")])),_:1})])),default:i((()=>[r(A,{style:{color:"rgb(var(--warning-6))"}})])),_:1})])),_:1})])),"expand-icon":i((({active:e})=>[r(P,{class:f({gi_rotate_90deg:e})},null,8,["class"])])),default:i((()=>[(u(),p(v,null,_(V,((e,a)=>r(F,{justify:"space-between",key:a},{default:i((()=>[h("span",null,g(e.name),1),r(T,null,{default:i((()=>[r(R,{value:"1"},{default:i((()=>[c("管理员")])),_:1}),r(R,{value:"2"},{default:i((()=>[c("编辑者")])),_:1})])),_:1})])),_:2},1024))),64))])),_:1})])),_:1})])),_:1},8,["visible","title","onClose"])}}}),[["__scopeId","data-v-9403c70f"]]);export{C as default};
