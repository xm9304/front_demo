import{d as e,r as a,e as l,f as t,o as s,c as o,g as d,w as r,k as u,v as n,i,n as m}from"./index-fe99f811.js";const p={class:"step-2"},f=m(e({name:"Step2",__name:"Step2",props:{form:{}},emits:["next","prev"],setup(e,{emit:m}){const f=a({password:"123456"}),c={password:[{required:!0,message:"请输入密码"}]},_=l(!1),v=l(),b=async()=>{var e;try{_.value=!0;await(null==(e=v.value)?void 0:e.validate())||setTimeout((()=>{m("next"),_.value=!1}),1e3)}catch(a){}},w=()=>{m("prev")};return(e,a)=>{const l=t("a-descriptions-item"),m=t("a-descriptions"),y=t("a-divider"),g=t("a-input-password"),h=t("a-form-item"),k=t("a-button"),x=t("a-space"),V=t("a-form");return s(),o("div",p,[d(m,{column:1},{default:r((()=>[d(l,{label:"付款账户"},{default:r((()=>[u(n(e.form.payAccount),1)])),_:1}),d(l,{label:"收款账户"},{default:r((()=>[u(n(e.form.recAccount),1)])),_:1}),d(l,{label:"收款人姓名"},{default:r((()=>[u(n(e.form.recName),1)])),_:1}),d(l,{label:"转账金额"},{default:r((()=>[u(n(e.form.amount),1)])),_:1})])),_:1}),d(y,{type:"dashed"}),d(V,{ref_key:"formRef",ref:v,model:i(f),rules:c,"auto-label-width":""},{default:r((()=>[d(h,{label:"支付密码",field:"password"},{default:r((()=>[d(g,{modelValue:i(f).password,"onUpdate:modelValue":a[0]||(a[0]=e=>i(f).password=e),placeholder:"请输入支付密码"},null,8,["modelValue"])])),_:1}),d(h,null,{default:r((()=>[d(x,null,{default:r((()=>[d(k,{type:"primary",loading:i(_),onClick:b},{default:r((()=>[u("提交")])),_:1},8,["loading"]),d(k,{onClick:w},{default:r((()=>[u("上一步")])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])}}}),[["__scopeId","data-v-9bbe6800"]]);export{f as default};
