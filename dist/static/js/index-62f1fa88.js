import{d as a,e,f as s,o as t,c as r,h as o,g as n,w as i,k as p,i as d,R as c,q as u,O as l,P as m,T as f,n as v}from"./index-fe99f811.js";import _ from"./Step1-867de152.js";import x from"./Step2-116bd411.js";import g from"./Step3-02b5a265.js";const j={class:"gi_page step-form"},S={class:"wrapper"},y={class:"form-box"},A=v(a({name:"FormStep",__name:"index",setup(a){const v={1:_,2:x,3:g},A=e(1),h=e({payAccount:"",recAccount:"",payType:1,recName:"",amount:""}),w=()=>{A.value--},N=()=>{A.value=1};return(a,e)=>{const _=s("a-step"),x=s("a-steps");return t(),r("div",j,[o("div",S,[o("section",y,[n(x,{current:d(A),direction:d(c)()?"vertical":"horizontal"},{default:i((()=>[n(_,{description:"确保填写正确"},{default:i((()=>[p("填写转账信息")])),_:1}),n(_,{description:"确认转账信息"},{default:i((()=>[p("确认转账信息")])),_:1}),n(_,{description:"恭喜您，转账成功"},{default:i((()=>[p("完成转账")])),_:1})])),_:1},8,["current","direction"]),n(f,{name:"fade-slide",mode:"out-in",appear:""},{default:i((()=>[(t(),u(l,null,[(t(),u(m(v[d(A)]),{form:d(h),onNext:e[0]||(e[0]=a=>{return e=a,A.value++,void(e&&(h.value=e));var e}),onPrev:w,onAgain:N},null,40,["form"]))],1024))])),_:1})])])])}}}),[["__scopeId","data-v-d9f99df9"]]);export{A as default};
