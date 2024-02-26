import{O as e,a as l}from"./regexp-2217f7b7.js";import{c as a,d as t}from"./data-8c1eda23.js";import{_ as s}from"./GiForm.vue_vue_type_script_setup_true_lang-f2cda9b2.js";import{e as i,Z as o,M as d,d as r,eK as n,r as p,f as u,o as m,t as c,w as b,g as f,l as x,i as y,k as g,U as h,L as _}from"./index-25201ada.js";const v=r({__name:"Card3",setup(r){const{width:v}=n(),k={form:{},btns:{hide:!0},columns:[{type:"input",label:"姓名",field:"name",col:{xs:24,sm:12},props:{maxLength:4},rules:[{required:!0,message:"请输入姓名"},{maxLength:4,message:"姓名不超过4个字符"},{match:e,message:"仅支持中文姓名"}]},{type:"input",label:"手机",field:"phone",col:{xs:24,sm:12},props:{maxLength:11},rules:[{required:!0,message:"请输入手机号"},{match:l,message:"手机号格式不正确"}]},{type:"select",label:"性别",field:"sex",col:{xs:24,sm:12},options:[{label:"男",value:1},{label:"女",value:0}]},{type:"date-picker",label:"生日",field:"birthday",col:{xs:24,sm:12}},{type:"checkbox-group",label:"爱好",field:"hobbys",col:{xs:24},options:[{label:"电影",value:"01"},{label:"音乐",value:"02"},{label:"旅行",value:"03"},{label:"游戏",value:"04"}]},{type:"input-number",label:"排序",field:"sort",col:{xs:24,sm:12},props:{min:0}},{type:"radio-group",label:"状态",field:"status",col:{xs:24,sm:12},options:[{label:"启用",value:1},{label:"禁用",value:0}]},{type:"rate",label:"评分",field:"mark",col:{xs:24,sm:12}},{type:"switch",label:"是否隐藏",field:"hide",col:{xs:24,sm:12},item:{extra:"隐藏成绩项"}},{type:"slider",label:"成绩",field:"grade",col:{xs:24,sm:24}},{type:"cascader",label:"城市",field:"city",col:{xs:24,sm:12},options:a},{type:"tree-select",label:"部门",field:"dept",col:{xs:24,sm:12},data:t},{type:"textarea",label:"备注",field:"remark",span:24,item:{extra:"这里是额外信息"}}]},{options:w,resetOptions:V,setPropsValue:j}=function(e){const l=()=>o.cloneDeep(e),a=i(l());return{options:a,resetOptions:()=>{Object.assign(a,l())},setValue:(e,l,t)=>{if(!a.columns.length)return;const s=a.columns.find((l=>l.field===e));s?s[l]=t:d.warning(`没有这个field属性值-${e}，请检查！`)},setPropsValue:(e,l,t)=>{if(!a.columns.length)return;const s=a.columns.find((l=>l.field===e));s?(s.props||(s.props={}),s.props[l]=t):d.warning(`没有这个field属性值-${e}，请检查！`)}}}(k),O=i({remark:"这是备注这是备注",status:1}),C=()=>{V(),h.open({title:"新增",width:"90%",modalStyle:{maxWidth:"600px"},content:()=>_(s,{options:w,modelValue:O,"onUpdate:modelValue":e=>Object.assign(O,e)})})},U=()=>{j("status","disabled",!0),j("hide","disabled",!0),h.open({title:"编辑",width:"90%",modalStyle:{maxWidth:"600px"},content:()=>_(s,{options:w,modelValue:O,"onUpdate:modelValue":e=>Object.assign(O,e)})})},L=p(!1),q=p(!1),P=()=>{V(),q.value=!1,L.value=!0},S=()=>{j("status","disabled",!0),j("hide","disabled",!0),q.value=!0,L.value=!0};return(e,l)=>{const a=u("a-alert"),t=u("a-button"),i=u("a-space"),o=u("a-card"),d=u("a-drawer");return m(),c(o,{title:"配置表单-弹窗"},{default:b((()=>[f(a,null,{default:b((()=>[x("此示例编辑模式会禁用状态、是否隐藏")])),_:1}),f(o,{title:"表单-模态框",bordered:!0,class:"gi_mt"},{default:b((()=>[f(i,null,{default:b((()=>[f(t,{type:"primary",onClick:C},{default:b((()=>[x("新增")])),_:1}),f(t,{type:"primary",status:"success",onClick:U},{default:b((()=>[x("编辑")])),_:1})])),_:1})])),_:1}),f(o,{title:"表单-抽屉",bordered:!0,class:"gi_mt"},{default:b((()=>[f(i,null,{default:b((()=>[f(t,{type:"primary",onClick:P},{default:b((()=>[x("新增")])),_:1}),f(t,{type:"primary",status:"success",onClick:S},{default:b((()=>[x("编辑")])),_:1})])),_:1})])),_:1}),f(d,{title:y(q)?"编辑":"新增",width:y(v)>=600?600:"100%",visible:y(L),"onUpdate:visible":l[1]||(l[1]=e=>g(L)?L.value=e:null)},{default:b((()=>[f(y(s),{options:y(w),modelValue:y(O),"onUpdate:modelValue":l[0]||(l[0]=e=>g(O)?O.value=e:null)},null,8,["options","modelValue"])])),_:1},8,["title","width","visible"])])),_:1})}}});export{v as _};