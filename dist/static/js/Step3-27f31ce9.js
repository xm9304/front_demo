import{d as a,f as e,o as t,c as s,h as u,w as o,k as l,g as n,v as c,n as i}from"./index-b0b495b4.js";const r={class:"step-3"},f={class:"info-box"},m=i(a({name:"Step3",__name:"Step3",props:{form:{default:()=>({payAccount:"",recAccount:"",payType:1,recName:"",amount:"0"})}},emits:["again"],setup(a,{emit:i}){const m=()=>{i("again")};return(a,i)=>{const p=e("a-result"),d=e("a-descriptions-item"),_=e("a-statistic"),b=e("a-descriptions"),y=e("a-button"),v=e("a-space"),x=e("a-row");return t(),s("div",r,[u(p,{status:"success",title:"操作成功"},{subtitle:o((()=>[l("预计两小时内到账")])),_:1}),n("section",f,[u(b,{column:1},{default:o((()=>[u(d,{label:"付款账户："},{default:o((()=>[l(c(a.form.payAccount),1)])),_:1}),u(d,{label:"收款账户："},{default:o((()=>[l(c(a.form.recAccount),1)])),_:1}),u(d,{label:"收款人姓名："},{default:o((()=>[l(c(a.form.recName),1)])),_:1}),u(d,{label:"转账金额："},{default:o((()=>[u(_,{value:Number(a.form.amount),precision:2,"value-from":0,animation:"","animation-duration":600},{prefix:o((()=>[l("￥")])),suffix:o((()=>[l("元")])),_:1},8,["value"])])),_:1})])),_:1})]),u(x,{justify:"center"},{default:o((()=>[u(v,null,{default:o((()=>[u(y,{type:"primary",onClick:m},{default:o((()=>[l("再转一笔")])),_:1}),u(y,null,{default:o((()=>[l("查看账单")])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-75396f32"]]);export{m as default};