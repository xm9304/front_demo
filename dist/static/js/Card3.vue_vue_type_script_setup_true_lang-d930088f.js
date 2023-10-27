import{O as e,a as l}from"./regexp-53006fbc.js";import{c as s,d as a}from"./data-8c1eda23.js";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang-a89e818f.js";import{r as o,W as n,M as i,d as r,f as p,o as d,s as m,w as u,g as c,l as b,S as f,K as x}from"./index-dfa28a77.js";const y=r({__name:"Card3",setup(r){const y={form:{},btns:{hide:!0},columns:[{type:"input",label:"姓名",field:"name",col:{xs:24,sm:12},props:{maxLength:4},rules:[{required:!0,message:"请输入姓名"},{maxLength:4,message:"姓名不超过4个字符"},{match:e,message:"仅支持中文姓名"}]},{type:"input",label:"手机",field:"phone",col:{xs:24,sm:12},props:{maxLength:11},rules:[{required:!0,message:"请输入手机号"},{match:l,message:"手机号格式不正确"}]},{type:"select",label:"性别",field:"sex",col:{xs:24,sm:12},options:[{label:"男",value:1},{label:"女",value:0}]},{type:"date-picker",label:"生日",field:"birthday",col:{xs:24,sm:12}},{type:"checkbox-group",label:"爱好",field:"hobbys",col:{xs:24},options:[{label:"电影",value:"01"},{label:"音乐",value:"02"},{label:"旅行",value:"03"},{label:"游戏",value:"04"}]},{type:"input-number",label:"排序",field:"sort",col:{xs:24,sm:12},props:{min:0}},{type:"radio-group",label:"状态",field:"status",col:{xs:24,sm:12},options:[{label:"启用",value:1},{label:"禁用",value:0}]},{type:"rate",label:"评分",field:"mark",col:{xs:24,sm:12}},{type:"switch",label:"是否隐藏",field:"hide",col:{xs:24,sm:12},item:{extra:"隐藏成绩项"}},{type:"slider",label:"成绩",field:"grade",col:{xs:24,sm:24}},{type:"cascader",label:"城市",field:"city",col:{xs:24,sm:12},options:s},{type:"tree-select",label:"部门",field:"dept",col:{xs:24,sm:12},data:a},{type:"textarea",label:"备注",field:"remark",span:24,item:{extra:"这里是额外信息"}}]},{options:g,resetOptions:h,setPropsValue:_}=function(e){const l=()=>n.cloneDeep(e),s=o(l());return{options:s,resetOptions:()=>{Object.assign(s,l())},setValue:(e,l,a)=>{if(!s.columns.length)return;const t=s.columns.findIndex((l=>l.field===e));t>=0?s.columns[t][l]=a:i.warning(`没有这个属性值-${e}，请检查！`)},setPropsValue:(e,l,a)=>{var t;if(!s.columns.length)return;const o=s.columns.findIndex((l=>l.field===e));if(o>=0){if(!(null==(t=s.columns)?void 0:t[o]))return;s.columns[o].props||(s.columns[o].props={}),s.columns[o].props[l]=a}else i.warning(`没有这个属性值-${e}，请检查！`)}}}(y),v=o({remark:"这是备注这是备注"}),j=()=>{h(),f.open({title:"新增",width:"90%",modalStyle:{maxWidth:"600px"},content:()=>x(t,{options:g,modelValue:v,"onUpdate:modelValue":e=>Object.assign(v,e)})})},k=()=>{_("status","disabled",!0),_("hide","disabled",!0),f.open({title:"编辑",width:"90%",modalStyle:{maxWidth:"600px"},content:()=>x(t,{options:g,modelValue:v,"onUpdate:modelValue":e=>Object.assign(v,e)})})};return(e,l)=>{const s=p("a-alert"),a=p("a-button"),t=p("a-space"),o=p("a-card");return d(),m(o,{title:"配置表单-弹窗"},{default:u((()=>[c(s,null,{default:u((()=>[b("此示例编辑模式会禁用状态、是否隐藏")])),_:1}),c(t,{class:"gi_mt"},{default:u((()=>[c(a,{type:"primary",onClick:j},{default:u((()=>[b("新增")])),_:1}),c(a,{type:"primary",status:"success",onClick:k},{default:u((()=>[b("编辑")])),_:1})])),_:1})])),_:1})}}});export{y as _};
