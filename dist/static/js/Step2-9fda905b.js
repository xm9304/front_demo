import{d as e,e as a,r as l,f as s,o as t,c as o,g as d,w as r,l as u,y as n,i,s as m}from"./index-25201ada.js";const p={class:"step-2"},f=m(e({name:"Step2",__name:"Step2",props:{form:{}},emits:["next","prev"],setup(e,{emit:m}){const f=m,c=a({password:"123456"}),_={password:[{required:!0,message:"请输入密码"}]},v=l(!1),w=l(),b=async()=>{var e;v.value=!0;await(null==(e=w.value)?void 0:e.validate())||setTimeout((()=>{f("next"),v.value=!1}),1e3)},y=()=>{f("prev")};return(e,a)=>{const l=s("a-descriptions-item"),m=s("a-descriptions"),f=s("a-divider"),g=s("a-input-password"),x=s("a-form-item"),h=s("a-button"),k=s("a-space"),V=s("a-form");return t(),o("div",p,[d(m,{column:1},{default:r((()=>[d(l,{label:"付款账户"},{default:r((()=>[u(n(e.form.payAccount),1)])),_:1}),d(l,{label:"收款账户"},{default:r((()=>[u(n(e.form.recAccount),1)])),_:1}),d(l,{label:"收款人姓名"},{default:r((()=>[u(n(e.form.recName),1)])),_:1}),d(l,{label:"转账金额"},{default:r((()=>[u(n(e.form.amount),1)])),_:1})])),_:1}),d(f,{type:"dashed"}),d(V,{ref_key:"formRef",ref:w,model:i(c),rules:_,"auto-label-width":""},{default:r((()=>[d(x,{label:"支付密码",field:"password"},{default:r((()=>[d(g,{modelValue:i(c).password,"onUpdate:modelValue":a[0]||(a[0]=e=>i(c).password=e),placeholder:"请输入支付密码"},null,8,["modelValue"])])),_:1}),d(x,null,{default:r((()=>[d(k,null,{default:r((()=>[d(h,{type:"primary",loading:i(v),onClick:b},{default:r((()=>[u("提交")])),_:1},8,["loading"]),d(h,{onClick:y},{default:r((()=>[u("上一步")])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])}}}),[["__scopeId","data-v-a6c26778"]]);export{f as default};