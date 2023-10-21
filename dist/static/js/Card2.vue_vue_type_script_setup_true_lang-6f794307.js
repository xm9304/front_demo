import{_ as e}from"./index-d38c3cec.js";import{_ as l}from"./index.vue_vue_type_script_setup_true_lang-a886a052.js";import{O as a,a as s}from"./regexp-53006fbc.js";import{d as t,r as o,e as r,f as n,o as p,s as u,w as i,g as d,i as m,k as c,l as f,h as b,eQ as x,K as y,M as h}from"./index-586e76ed.js";const _=b("span",null,"查看JSON配置",-1),v=t({__name:"Card2",setup(t){const b=o({name:"",phone:"",sort:0,sex:"",birthday:"",hobbys:[],status:1,remark:""}),v=r(),g={form:{},btns:{hide:!0},columns:[{type:"input",label:"姓名",field:"name",col:{xs:24,sm:12},props:{maxLength:4,allowClear:!0,placeholder:"请输入名称"},rules:[{required:!0,message:"请输入姓名"},{maxLength:4,message:"姓名不超过4个字符"},{match:a,message:"仅支持中文姓名"}]},{type:"input",label:"手机",field:"phone",col:{xs:24,sm:12},props:{maxLength:11,allowClear:!0,placeholder:"请输入手机号"},rules:[{required:!0,message:"请输入手机号"},{match:s,message:"手机号格式不正确"}]},{type:"select",label:"性别",field:"sex",col:{xs:24,sm:12},props:{placeholder:"请选择性别",options:[{label:"男",value:1},{label:"女",value:0}]}},{type:"date-picker",label:"生日",field:"birthday",col:{xs:24,sm:12},props:{placeholder:"请选择生日"}},{type:"checkbox-group",label:"爱好",field:"hobbys",col:{xs:24},props:{options:[{label:"电影",value:"01"},{label:"音乐",value:"02"},{label:"旅行",value:"03"},{label:"游戏",value:"04"}]}},{type:"input-number",label:"排序",field:"sort",col:{xs:24,sm:12},props:{min:0}},{type:"radio-group",label:"状态",field:"status",col:{xs:24,sm:12},props:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}},{type:"textarea",label:"备注",field:"remark",span:24,props:{placeholder:"请填写备注",maxLength:200,showWordLimit:!0},extra:"这里是额外信息"},{type:"input",label:"",field:"btns",span:24}]},k=()=>{x.open({title:"数据结构",content:()=>y(e,{codeJson:JSON.stringify(g,null,"\t")}),width:560})},w=async()=>{var e,l;if(await(null==(l=null==(e=v.value)?void 0:e.formRef)?void 0:l.validate()))return!1;h.success("验证通过")},j=()=>{var e,l;null==(l=null==(e=v.value)?void 0:e.formRef)||l.resetFields()};return(a,s)=>{const t=n("icon-code"),o=n("a-button"),r=n("a-space"),x=n("a-row"),y=n("a-col"),h=n("a-card");return p(),u(h,{title:"配置表单-新增"},{extra:i((()=>[d(o,{type:"primary",status:"warning",onClick:k},{icon:i((()=>[d(t)])),default:i((()=>[_])),_:1})])),default:i((()=>[d(x,{gutter:30},{default:i((()=>[d(y,{xs:24,sm:24,md:12},{default:i((()=>[d(l,{ref_key:"formRef",ref:v,options:g,modelValue:m(b),"onUpdate:modelValue":s[0]||(s[0]=e=>c(b)?b.value=e:null)},{btns:i((()=>[d(x,{justify:"end",class:"w-full"},{default:i((()=>[d(r,null,{default:i((()=>[d(o,{type:"primary",onClick:w},{default:i((()=>[f("保存")])),_:1}),d(o,{onClick:j},{default:i((()=>[f("重置")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(y,{xs:24,sm:24,md:12},{default:i((()=>[d(e,{"code-json":JSON.stringify(m(b),null,"\t")},null,8,["code-json"])])),_:1})])),_:1})])),_:1})}}});export{v as _};
