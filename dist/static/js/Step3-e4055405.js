import{d as a,f as e,o as t,c as s,g as l,w as o,l as u,h as i,x as n,q as r}from"./index-615da61f.js";const c={class:"step-3"},f={class:"info-box"},m=r(a({name:"Step3",__name:"Step3",props:{form:{}},emits:["again"],setup(a,{emit:r}){const m=()=>{r("again")};return(a,r)=>{const d=e("a-result"),p=e("a-descriptions-item"),_=e("a-statistic"),b=e("a-descriptions"),x=e("a-button"),v=e("a-space"),y=e("a-row");return t(),s("div",c,[l(d,{status:"success",title:"操作成功"},{subtitle:o((()=>[u("预计两小时内到账")])),_:1}),i("section",f,[l(b,{column:1},{default:o((()=>[l(p,{label:"付款账户："},{default:o((()=>[u(n(a.form.payAccount),1)])),_:1}),l(p,{label:"收款账户："},{default:o((()=>[u(n(a.form.recAccount),1)])),_:1}),l(p,{label:"收款人姓名："},{default:o((()=>[u(n(a.form.recName),1)])),_:1}),l(p,{label:"转账金额："},{default:o((()=>[l(_,{value:Number(a.form.amount),precision:2,"value-from":0,animation:"","animation-duration":600},{prefix:o((()=>[u("￥")])),suffix:o((()=>[u("元")])),_:1},8,["value"])])),_:1})])),_:1})]),l(y,{justify:"center"},{default:o((()=>[l(v,null,{default:o((()=>[l(x,{type:"primary",onClick:m},{default:o((()=>[u("再转一笔")])),_:1}),l(x,null,{default:o((()=>[u("查看账单")])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-e4345c78"]]);export{m as default};
