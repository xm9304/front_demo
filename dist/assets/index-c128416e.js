import{d as U,G as j,eJ as q,O as F,g as p,r as s,c as G,h as n,a as e,w as o,u as a,p as M,j as P,o as T,I as A,f as d,eK as E,N as J,eL as K,_ as O}from"./index-080ea662.js";import{u as Y}from"./useLoading-65432ae7.js";import $ from"./index-ce7598b2.js";import{a as D}from"./regexp-7291c1d5.js";import"./CornerTop.vue_vue_type_script_setup_true_lang-0876ca38.js";import"./CornerBottom.vue_vue_type_script_setup_true_lang-46a036a7.js";const H="/gi-demo/assets/login-img-1c12ae60.svg",w=r=>(M("data-v-54d53215"),r=r(),P(),r),Q={class:"login"},W={class:"login-box animated flipInY"},X=w(()=>n("div",{class:"login-left"},[n("img",{class:"login-img",src:H})],-1)),Z={class:"login-right"},ee=w(()=>n("h3",{class:"login-form-title"},[n("img",{class:"logo",src:E}),n("span",null,"Admin Pro")],-1)),oe=U({name:"Login",__name:"index",setup(r){const h=j(),x=q(),l=F({username:"admin",password:"123456"}),_=p(!1),{loading:y,setLoading:m}=Y(),v=p(""),f=p(),k=async()=>{var u;try{if(await((u=f.value)==null?void 0:u.validate()))return;m(!0),await x.login(l),h.push("/"),m(!1),J.success("登录成功")}catch(t){v.value=t.message}finally{m(!1)}};return(u,t)=>{const V=s("icon-user"),b=s("a-input"),c=s("a-form-item"),S=s("icon-lock"),z=s("a-input-password"),I=s("a-checkbox"),B=s("a-link"),L=s("a-row"),g=s("a-button"),C=s("a-space"),N=s("a-form"),R=K;return T(),G("div",Q,[n("section",W,[X,n("div",Z,[e(N,{ref_key:"FormRef",ref:f,model:a(l),style:{width:"84%"},"label-col-style":{display:"none"},"wrapper-col-style":{flex:1}},{default:o(()=>[ee,e(c,{field:"username",rules:[{required:!0,message:"请输入账号"}]},{default:o(()=>[e(b,{modelValue:a(l).username,"onUpdate:modelValue":t[0]||(t[0]=i=>a(l).username=i),placeholder:"账号 admin/user",size:"medium","allow-clear":""},{prefix:o(()=>[e(V,{"stroke-width":1,style:{fontSize:"20px"}})]),_:1},8,["modelValue"])]),_:1}),e(c,{field:"password",rules:[{required:!0,message:"请输入密码"},{match:D,message:"输入密码格式不正确"}]},{default:o(()=>[e(z,{modelValue:a(l).password,"onUpdate:modelValue":t[1]||(t[1]=i=>a(l).password=i),placeholder:"密码",size:"medium","allow-clear":""},{prefix:o(()=>[e(S,{"stroke-width":1,style:{fontSize:"20px"}})]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(c,null,{default:o(()=>[e(L,{justify:"space-between",align:"center",style:{width:"100%"}},{default:o(()=>[e(I,{modelValue:a(_),"onUpdate:modelValue":t[2]||(t[2]=i=>A(_)?_.value=i:null)},{default:o(()=>[d("记住密码")]),_:1},8,["modelValue"]),e(B,null,{default:o(()=>[d("忘记密码")]),_:1})]),_:1})]),_:1}),e(c,null,{default:o(()=>[e(C,{direction:"vertical",fill:"",style:{width:"100%"}},{default:o(()=>[e(g,{type:"primary",size:"large",long:"",loading:a(y),onClick:k},{default:o(()=>[d("登录")]),_:1},8,["loading"]),e(g,{type:"text",size:"large",long:"",class:"register-btn"},{default:o(()=>[d("注册账号")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])]),e(R,{class:"theme-btn"}),e($)])}}});const re=O(oe,[["__scopeId","data-v-54d53215"]]);export{re as default};
