import{_ as e}from"./index.vue_vue_type_script_setup_true_lang-2cfa1d30.js";import{_ as s}from"./index-1b695367.js";import{d as a,r as l,f as t,o as n,s as o,w as i,g as u,i as r,k as p,h as d,eQ as m,K as c,j as f,M as _}from"./index-16fb3499.js";const x=d("span",null,"查看JSON配置",-1),b=a({__name:"Card1",setup(a){const d=l({name:"",phone:"",status:""}),b={form:{layout:"inline"},fold:{enable:!0,index:0},btns:{col:{xs:24,sm:12}},columns:[{type:"input",label:"姓名",field:"name",col:{xs:24,sm:12},props:{maxLength:4}},{type:"input",label:"手机",field:"phone",col:{xs:24,sm:12},props:{maxLength:11}},{type:"select",label:"状态",field:"status",col:{xs:24,sm:12},options:[{label:"启用",value:1},{label:"禁用",value:0}],props:{placeholder:"状态"}}]},g=()=>{m.open({title:"数据结构",content:()=>c(s,{codeJson:JSON.stringify(b,null,"\t")}),width:f()?"100%":560})},y=()=>{_.info("点击了搜索")},h=()=>{_.info("点击了重置")};return(a,l)=>{const m=t("icon-code"),c=t("a-button"),f=e,_=t("a-col"),j=t("a-row"),v=t("a-card");return n(),o(v,{title:"配置表单-查询"},{extra:i((()=>[u(c,{type:"primary",status:"warning",onClick:g},{icon:i((()=>[u(m)])),default:i((()=>[x])),_:1})])),default:i((()=>[u(j,{gutter:30},{default:i((()=>[u(_,{xs:24,sm:24,md:12},{default:i((()=>[u(f,{class:"gi_mb",options:b,modelValue:r(d),"onUpdate:modelValue":l[0]||(l[0]=e=>p(d)?d.value=e:null),onSearch:y,onReset:h},null,8,["modelValue"])])),_:1}),u(_,{xs:24,sm:24,md:12},{default:i((()=>[u(s,{"code-json":JSON.stringify(r(d),null,"\t")},null,8,["code-json"])])),_:1})])),_:1})])),_:1})}}});export{b as _};
