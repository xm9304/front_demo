import{d as e,e as a,f as s,o as t,c as o,g as r,h as n,w as i,k as c,i as p,U as d,q as u,O as l,P as m,T as f,n as _}from"./index-08a0f512.js";import v from"./Step1-ad9fb937.js";import x from"./Step2-a364bc1f.js";import j from"./Step3-a8919b2b.js";const S={class:"step-form"},b={class:"form-box"},y=_(e({name:"FormStep",__name:"index",setup(e){const _={1:v,2:x,3:j},y=a(1),A=a({payAccount:"",recAccount:"",payType:1,recName:"",amount:""}),g=e=>{y.value++,e&&(A.value=e)},h=()=>{y.value--};return(e,a)=>{const v=s("a-step"),x=s("a-steps");return t(),o("div",S,[r("section",b,[n(x,{current:p(y),direction:p(d).browse().isMobile?"vertical":"horizontal"},{default:i((()=>[n(v,{description:"确保填写正确"},{default:i((()=>[c("填写转账信息")])),_:1}),n(v,{description:"确认转账信息"},{default:i((()=>[c("确认转账信息")])),_:1}),n(v,{description:"恭喜您，转账成功"},{default:i((()=>[c("完成转账")])),_:1})])),_:1},8,["current","direction"]),n(f,{name:"fade-slide",mode:"out-in",appear:""},{default:i((()=>[(t(),u(l,null,[(t(),u(m(_[p(y)]),{form:p(A),onNext:g,onPrev:h,onAgain:a[0]||(a[0]=e=>y.value=1)},null,40,["form"]))],1024))])),_:1})])])}}}),[["__scopeId","data-v-d3416e96"]]);export{y as default};
