import{d as e,a,b as l,r as s,e as t,f as o,c as r,g as i,w as n,o as d,h as u,i as m,j as c,k as p,l as f,M as g,_,p as v,m as w,n as y,q as h}from"./index-7890a41b.js";import{u as x}from"./useLoading-d0f3afde.js";import b from"./index-ce68aca7.js";import{P as V}from"./regexp-53006fbc.js";import"./CornerTop.vue_vue_type_script_setup_true_lang-65a5561a.js";import"./CornerBottom.vue_vue_type_script_setup_true_lang-85662fa0.js";const j=e=>(v("data-v-c7b62419"),e=e(),w(),e),k={class:"login"},z=j((()=>u("div",{class:"login-left"},[u("img",{class:"login-img",src:"/gi-demo/static/svg/login-img-1c12ae60.svg"})],-1))),q={class:"login-right"},C=j((()=>u("h3",{class:"login-form-title"},[u("img",{class:"logo",src:y}),u("span",null,"Admin Pro")],-1))),L=h(e({name:"Login",__name:"index",setup(e){const v=a(),w=l(),y=s({username:"admin",password:"123456"}),h={username:[{required:!0,message:"请输入账号"}],password:[{required:!0,message:"请输入密码"},{match:V,message:"输入密码格式不正确"}]},j=t(!1),{loading:L,setLoading:U}=x(),A=t(""),B=t(),P=async()=>{var e;try{if(await(null==(e=B.value)?void 0:e.validate()))return;U(!0),await w.login(y);const{redirect:a,...l}=v.currentRoute.value.query;v.push({path:a||"/",query:{...l}}),g.success("登录成功")}catch(a){A.value=a.message}finally{U(!1)}};return(e,a)=>{const l=o("a-col"),s=o("icon-user"),t=o("a-input"),g=o("a-form-item"),v=o("icon-lock"),w=o("a-input-password"),x=o("a-checkbox"),V=o("a-link"),U=o("a-row"),A=o("a-button"),R=o("a-space"),S=o("a-form"),F=_;return d(),r("div",k,[i(U,{align:"stretch",class:"login-box"},{default:n((()=>[i(l,{xs:0,sm:12,md:15},{default:n((()=>[z])),_:1}),i(l,{xs:24,sm:12,md:9},{default:n((()=>[u("div",q,[i(S,{ref_key:"FormRef",ref:B,size:m(c)()?"large":"medium",model:m(y),rules:h,style:{width:"84%"},"label-col-style":{display:"none"},"wrapper-col-style":{flex:1}},{default:n((()=>[C,i(g,{field:"username"},{default:n((()=>[i(t,{modelValue:m(y).username,"onUpdate:modelValue":a[0]||(a[0]=e=>m(y).username=e),placeholder:"账号 admin/user","allow-clear":""},{prefix:n((()=>[i(s,{"stroke-width":1,style:{fontSize:"20px"}})])),_:1},8,["modelValue"])])),_:1}),i(g,{field:"password"},{default:n((()=>[i(w,{modelValue:m(y).password,"onUpdate:modelValue":a[1]||(a[1]=e=>m(y).password=e),placeholder:"密码","allow-clear":""},{prefix:n((()=>[i(v,{"stroke-width":1,style:{fontSize:"20px"}})])),_:1},8,["modelValue"])])),_:1}),i(g,null,{default:n((()=>[i(U,{justify:"space-between",align:"center",class:"w-full"},{default:n((()=>[i(x,{modelValue:m(j),"onUpdate:modelValue":a[2]||(a[2]=e=>p(j)?j.value=e:null)},{default:n((()=>[f("记住密码")])),_:1},8,["modelValue"]),i(V,null,{default:n((()=>[f("忘记密码")])),_:1})])),_:1})])),_:1}),i(g,null,{default:n((()=>[i(R,{direction:"vertical",fill:"",class:"w-full"},{default:n((()=>[i(A,{type:"primary",size:"large",long:"",loading:m(L),onClick:P},{default:n((()=>[f("登录")])),_:1},8,["loading"]),i(A,{type:"text",size:"large",long:"",class:"register-btn"},{default:n((()=>[f("注册账号")])),_:1})])),_:1})])),_:1})])),_:1},8,["size","model"])])])),_:1})])),_:1}),i(F,{class:"theme-btn"}),i(b)])}}}),[["__scopeId","data-v-c7b62419"]]);export{L as default};
