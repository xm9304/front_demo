import{r as e,d as a,a as l,b as s,e as t,f as o,c as r,g as i,w as n,o as d,h as u,i as m,j as c,k as p,l as g,M as f,m as _,p as v,n as w,q as y,s as h}from"./index-8e74274a.js";import x from"./index-1d2c1553.js";import{P as b}from"./regexp-2217f7b7.js";import"./CornerTop.vue_vue_type_script_setup_true_lang-830f43d7.js";import"./CornerBottom.vue_vue_type_script_setup_true_lang-100896c1.js";const V=e=>(v("data-v-d16bae10"),e=e(),w(),e),k={class:"login"},j=V((()=>u("div",{class:"login-left"},[u("img",{class:"login-img",src:"/gi-demo/static/svg/login-img-1c12ae60.svg"})],-1))),z={class:"login-right"},q=V((()=>u("h3",{class:"login-form-title"},[u("img",{class:"logo",src:y}),u("span",null,"Admin Pro")],-1))),C=h(a({name:"Login",__name:"index",setup(a){const v=l(),w=s(),y=t({username:"admin",password:"123456"}),h={username:[{required:!0,message:"请输入账号"}],password:[{required:!0,message:"请输入密码"},{match:b,message:"输入密码格式不正确"}]},V=e(!1),{loading:C,setLoading:L}=function(a=!1){const l=e(a);return{loading:l,setLoading:e=>{l.value=e},toggle:()=>{l.value=!l.value}}}(),U=e(""),F=e(),P=async()=>{var e;try{if(await(null==(e=F.value)?void 0:e.validate()))return;L(!0),await w.login(y);const{redirect:a,...l}=v.currentRoute.value.query;v.push({path:a||"/",query:{...l}}),f.success("登录成功")}catch(a){U.value=a.message}finally{L(!1)}};return(e,a)=>{const l=o("a-col"),s=o("icon-user"),t=o("a-input"),f=o("a-form-item"),v=o("icon-lock"),w=o("a-input-password"),b=o("a-checkbox"),L=o("a-link"),U=o("a-row"),R=o("a-button"),S=o("a-space"),A=o("a-form"),B=_;return d(),r("div",k,[i(U,{align:"stretch",class:"login-box"},{default:n((()=>[i(l,{xs:0,sm:12,md:15},{default:n((()=>[j])),_:1}),i(l,{xs:24,sm:12,md:9},{default:n((()=>[u("div",z,[i(A,{ref_key:"FormRef",ref:F,size:m(c)()?"large":"medium",model:m(y),rules:h,style:{width:"84%"},"label-col-style":{display:"none"},"wrapper-col-style":{flex:1}},{default:n((()=>[q,i(f,{field:"username"},{default:n((()=>[i(t,{modelValue:m(y).username,"onUpdate:modelValue":a[0]||(a[0]=e=>m(y).username=e),placeholder:"账号 admin/user","allow-clear":""},{prefix:n((()=>[i(s,{"stroke-width":1,style:{fontSize:"20px"}})])),_:1},8,["modelValue"])])),_:1}),i(f,{field:"password"},{default:n((()=>[i(w,{modelValue:m(y).password,"onUpdate:modelValue":a[1]||(a[1]=e=>m(y).password=e),placeholder:"密码","allow-clear":""},{prefix:n((()=>[i(v,{"stroke-width":1,style:{fontSize:"20px"}})])),_:1},8,["modelValue"])])),_:1}),i(f,null,{default:n((()=>[i(U,{justify:"space-between",align:"center",class:"w-full"},{default:n((()=>[i(b,{modelValue:m(V),"onUpdate:modelValue":a[2]||(a[2]=e=>p(V)?V.value=e:null)},{default:n((()=>[g("记住密码")])),_:1},8,["modelValue"]),i(L,null,{default:n((()=>[g("忘记密码")])),_:1})])),_:1})])),_:1}),i(f,null,{default:n((()=>[i(S,{direction:"vertical",fill:"",class:"w-full"},{default:n((()=>[i(R,{type:"primary",size:"large",long:"",loading:m(C),onClick:P},{default:n((()=>[g("登录")])),_:1},8,["loading"]),i(R,{type:"text",size:"large",long:"",class:"register-btn"},{default:n((()=>[g("注册账号")])),_:1})])),_:1})])),_:1})])),_:1},8,["size","model"])])])),_:1})])),_:1}),i(B,{class:"theme-btn"}),i(x)])}}}),[["__scopeId","data-v-d16bae10"]]);export{C as default};
