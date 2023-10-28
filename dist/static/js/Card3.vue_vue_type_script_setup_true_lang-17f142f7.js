import{O as e,a as l}from"./regexp-53006fbc.js";import{u as a,c as t,d as s}from"./data-bc142002.js";import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-e96ccc3c.js";import{d as o,eI as d,r as u,e as p,f as r,o as m,s as n,w as c,g as b,l as f,i as x,k as y,S as _,K as h}from"./index-de8052ef.js";const v=o({__name:"Card3",setup(o){const{width:v}=d(),g={form:{},btns:{hide:!0},columns:[{type:"input",label:"姓名",field:"name",col:{xs:24,sm:12},props:{maxLength:4},rules:[{required:!0,message:"请输入姓名"},{maxLength:4,message:"姓名不超过4个字符"},{match:e,message:"仅支持中文姓名"}]},{type:"input",label:"手机",field:"phone",col:{xs:24,sm:12},props:{maxLength:11},rules:[{required:!0,message:"请输入手机号"},{match:l,message:"手机号格式不正确"}]},{type:"select",label:"性别",field:"sex",col:{xs:24,sm:12},options:[{label:"男",value:1},{label:"女",value:0}]},{type:"date-picker",label:"生日",field:"birthday",col:{xs:24,sm:12}},{type:"checkbox-group",label:"爱好",field:"hobbys",col:{xs:24},options:[{label:"电影",value:"01"},{label:"音乐",value:"02"},{label:"旅行",value:"03"},{label:"游戏",value:"04"}]},{type:"input-number",label:"排序",field:"sort",col:{xs:24,sm:12},props:{min:0}},{type:"radio-group",label:"状态",field:"status",col:{xs:24,sm:12},options:[{label:"启用",value:1},{label:"禁用",value:0}]},{type:"rate",label:"评分",field:"mark",col:{xs:24,sm:12}},{type:"switch",label:"是否隐藏",field:"hide",col:{xs:24,sm:12},item:{extra:"隐藏成绩项"}},{type:"slider",label:"成绩",field:"grade",col:{xs:24,sm:24}},{type:"cascader",label:"城市",field:"city",col:{xs:24,sm:12},options:t},{type:"tree-select",label:"部门",field:"dept",col:{xs:24,sm:12},data:s},{type:"textarea",label:"备注",field:"remark",span:24,item:{extra:"这里是额外信息"}}]},{options:k,resetOptions:w,setPropsValue:V}=a(g),j=u({remark:"这是备注这是备注",status:1}),C=()=>{w(),_.open({title:"新增",width:"90%",modalStyle:{maxWidth:"600px"},content:()=>h(i,{options:k,modelValue:j,"onUpdate:modelValue":e=>Object.assign(j,e)})})},O=()=>{V("status","disabled",!0),V("hide","disabled",!0),_.open({title:"编辑",width:"90%",modalStyle:{maxWidth:"600px"},content:()=>h(i,{options:k,modelValue:j,"onUpdate:modelValue":e=>Object.assign(j,e)})})},U=p(!1),L=p(!1),S=()=>{w(),L.value=!1,U.value=!0},q=()=>{V("status","disabled",!0),V("hide","disabled",!0),L.value=!0,U.value=!0};return(e,l)=>{const a=r("a-alert"),t=r("a-button"),s=r("a-space"),o=r("a-card"),d=r("a-drawer");return m(),n(o,{title:"配置表单-弹窗"},{default:c((()=>[b(a,null,{default:c((()=>[f("此示例编辑模式会禁用状态、是否隐藏")])),_:1}),b(o,{title:"表单-模态框",bordered:!0,class:"gi_mt"},{default:c((()=>[b(s,null,{default:c((()=>[b(t,{type:"primary",onClick:C},{default:c((()=>[f("新增")])),_:1}),b(t,{type:"primary",status:"success",onClick:O},{default:c((()=>[f("编辑")])),_:1})])),_:1})])),_:1}),b(o,{title:"表单-抽屉",bordered:!0,class:"gi_mt"},{default:c((()=>[b(s,null,{default:c((()=>[b(t,{type:"primary",onClick:S},{default:c((()=>[f("新增")])),_:1}),b(t,{type:"primary",status:"success",onClick:q},{default:c((()=>[f("编辑")])),_:1})])),_:1})])),_:1}),b(d,{title:x(L)?"编辑":"新增",width:x(v)>=600?600:"100%",visible:x(U),"onUpdate:visible":l[1]||(l[1]=e=>y(U)?U.value=e:null)},{default:c((()=>[b(i,{options:x(k),modelValue:x(j),"onUpdate:modelValue":l[0]||(l[0]=e=>y(j)?j.value=e:null)},null,8,["options","modelValue"])])),_:1},8,["title","width","visible"])])),_:1})}}});export{v as _};
