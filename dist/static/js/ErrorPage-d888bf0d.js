import{d as a,a as s,e,H as r,I as c,f as t,c as l,g as n,h as o,w as i,o as d,k as p,v,i as u,p as b,l as g,n as m}from"./index-08a0f512.js";const f=a=>(b("data-v-3bb2b1cc"),a=a(),g(),a),I={class:"error-page"},_={class:"container"},x={class:"img-box"},k=["src"],h={class:"tip-box"},y=f((()=>n("div",{class:"ops"},"抱歉!",-1))),j=f((()=>n("div",{class:"tip"},"当前页面不存在...",-1))),w=f((()=>n("div",{class:"info"},"请检查您输入的网址是否正确，或点击下面的按钮返回首页",-1))),z=m(a({__name:"ErrorPage",props:{src:{default:""}},setup(a){const b=a,g=s(),m=e(5);let f;r((()=>{C()})),c((()=>{clearInterval(f)}));const z=()=>{g.back()},C=()=>{f=setInterval((()=>{m.value?m.value--:clearInterval(f)}),1e3)};return(a,s)=>{const e=t("a-button");return d(),l("div",I,[n("section",_,[n("div",x,[n("img",{class:"img-parent",src:b.src},null,8,k)]),n("div",h,[y,j,w,o(e,{type:"primary",shape:"round",size:"large",onClick:z},{default:i((()=>[p(v(u(m))+" 返回首页",1)])),_:1})])])])}}}),[["__scopeId","data-v-3bb2b1cc"]]);export{z as default};
