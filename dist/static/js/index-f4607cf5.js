import{_ as e}from"./index-d9f97e9c.js";import{O as l,a}from"./regexp-53006fbc.js";import{d,e as o,r as t,f as u,o as r,c as s,g as n,h as i,w as m,k as p,i as c,eF as f,N as _,M as b,n as g}from"./index-958c313e.js";const V={class:"gi_page form-base"},h={class:"gi_box"},y={key:0},v=g(d({name:"FormBase",__name:"index",setup(d){const g=o([{key:"01",title:"XXX学校",children:[{key:"011",title:"组织部"},{key:"012",title:"宣传部"}]}]),v=[{label:"运动",value:"运动",tagProps:{color:"red"}},{label:"音乐",value:"音乐",tagProps:{color:"green"}},{label:"电影",value:"电影",tagProps:{color:"cyan"}},{label:"旅行",value:"旅行",tagProps:{color:"arcoblue"}},{label:"美食",value:"美食",tagProps:{color:"purple"}}],x=t({name:"",phone:"",age:"",sex:1,birthday:"",education:1,rangDate:[],dept:[],hobbys:[],isRead:!1}),w={name:[{required:!0,message:"请输入姓名"},{maxLength:4,message:"姓名不超过4个字符"},{match:l,message:"仅支持中文姓名"}],phone:[{required:!0,message:"请输入手机号"},{match:a,message:"手机号格式不正确"}],sex:[{required:!0,message:"请选择性别"}]},k=o(),U=e=>{},j=()=>{var e;null==(e=k.value)||e.resetFields()},P=async()=>{var e;await(null==(e=k.value)?void 0:e.validate())||b.success("提交通过")};return(l,a)=>{const d=u("a-button"),o=u("a-input"),t=u("a-typography-text"),b=u("a-form-item"),R=u("a-radio"),D=u("a-radio-group"),q=u("a-col"),F=u("a-date-picker"),O=u("a-row"),X=u("a-tree-select"),C=u("a-option"),M=u("a-select"),N=u("a-range-picker"),z=u("a-checkbox"),B=u("a-space"),G=u("a-form"),I=e,J=u("a-card");return r(),s("div",V,[n("section",h,[i(J,{title:"基础表单",bordered:!1},{extra:m((()=>[i(d,null,{default:m((()=>[p("返回")])),_:1})])),default:m((()=>[i(B,{wrap:"",size:30},{default:m((()=>[i(G,{ref_key:"formRef",ref:k,model:c(x),rules:w,"auto-label-width":"",class:"form"},{default:m((()=>[i(b,{label:"姓名",field:"name"},{extra:m((()=>[i(t,{type:"secondary"},{default:m((()=>[p("请输入中文姓名")])),_:1})])),default:m((()=>[i(o,{modelValue:c(x).name,"onUpdate:modelValue":a[0]||(a[0]=e=>c(x).name=e),placeholder:"请输入姓名","allow-clear":""},null,8,["modelValue"])])),_:1}),i(b,{label:"手机号",field:"phone"},{default:m((()=>[i(o,{modelValue:c(x).phone,"onUpdate:modelValue":a[1]||(a[1]=e=>c(x).phone=e),placeholder:"请输入手机号","allow-clear":""},null,8,["modelValue"])])),_:1}),i(b,{label:"年龄",field:"age"},{default:m((()=>[i(o,{modelValue:c(x).age,"onUpdate:modelValue":a[2]||(a[2]=e=>c(x).age=e),placeholder:"请输入年龄","allow-clear":""},null,8,["modelValue"])])),_:1}),i(O,null,{default:m((()=>[i(q,{span:12},{default:m((()=>[i(b,{label:"性别",field:"sex"},{default:m((()=>[i(D,{modelValue:c(x).sex,"onUpdate:modelValue":a[3]||(a[3]=e=>c(x).sex=e),"allow-clear":""},{default:m((()=>[i(R,{value:1},{default:m((()=>[p("男")])),_:1}),i(R,{value:2},{default:m((()=>[p("女")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(q,{span:12},{default:m((()=>[i(b,{label:"生日",field:"birthday","label-col-style":{flex:0}},{default:m((()=>[i(F,{modelValue:c(x).birthday,"onUpdate:modelValue":a[4]||(a[4]=e=>c(x).birthday=e),placeholder:"请选择出生日期","allow-clear":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(b,{label:"部门",field:"dept"},{default:m((()=>[i(X,{data:c(g),modelValue:c(x).dept,"onUpdate:modelValue":a[5]||(a[5]=e=>c(x).dept=e),multiple:"",placeholder:"请选择部门","allow-clear":""},null,8,["data","modelValue"])])),_:1}),i(b,{label:"学历",field:"education"},{default:m((()=>[i(M,{modelValue:c(x).education,"onUpdate:modelValue":a[6]||(a[6]=e=>c(x).education=e),placeholder:"请选择学历","allow-clear":"",style:{width:"120px"}},{default:m((()=>[i(C,{value:1},{default:m((()=>[p("本科")])),_:1}),i(C,{value:2},{default:m((()=>[p("大专")])),_:1}),i(C,{value:3},{default:m((()=>[p("硕士")])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(b,{label:"在校日期范围",field:"rangDate"},{default:m((()=>[i(N,{modelValue:c(x).rangDate,"onUpdate:modelValue":a[7]||(a[7]=e=>c(x).rangDate=e),"allow-clear":"",onOk:U},null,8,["modelValue"])])),_:1}),i(b,{label:"爱好",field:"hobbys"},{default:m((()=>[i(M,{options:v,modelValue:c(x).hobbys,"onUpdate:modelValue":a[8]||(a[8]=e=>c(x).hobbys=e),placeholder:"请选择爱好",multiple:"","allow-clear":""},null,8,["modelValue"])])),_:1}),i(b,{field:"isRead"},{default:m((()=>[i(z,{modelValue:c(x).isRead,"onUpdate:modelValue":a[9]||(a[9]=e=>c(x).isRead=e)},{default:m((()=>[p("我已阅读")])),_:1},8,["modelValue"])])),_:1}),i(b,null,{default:m((()=>[i(B,null,{default:m((()=>[i(d,{onClick:j},{default:m((()=>[p("重置")])),_:1}),i(d,{type:"primary",onClick:P},{default:m((()=>[p("提交")])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),c(f).browse().isMobile?_("",!0):(r(),s("section",y,[i(I,{"code-json":JSON.stringify(c(x),null,"\t")},null,8,["code-json"])]))])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-f045f574"]]);export{v as default};
