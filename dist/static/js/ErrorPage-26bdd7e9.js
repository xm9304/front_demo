import{d as a,a as s,e,J as r,K as t,f as c,c as l,h as n,g as o,w as i,o as p,l as d,y as v,i as u,p as g,n as m,s as f}from"./index-5690b7e6.js";const b=a=>(g("data-v-33ebc496"),a=a(),m(),a),_={class:"error-page"},x={class:"container"},I={class:"img-box"},h=["src"],y={class:"tip-box"},E=b((()=>n("div",{class:"ops"},"抱歉!",-1))),P=b((()=>n("div",{class:"tip"},"当前页面不存在...",-1))),j=b((()=>n("div",{class:"info"},"请检查您输入的网址是否正确，或点击下面的按钮返回首页",-1))),k=f(a({name:"ErrorPage",__name:"ErrorPage",props:{src:{default:""}},setup(a){const g=a,m=s(),f=e(5);let b;r((()=>{w()})),t((()=>{clearInterval(b)}));const k=()=>{m.replace({path:"/"})},w=()=>{b=setInterval((()=>{f.value?f.value--:clearInterval(b)}),1e3)};return(a,s)=>{const e=c("a-button");return p(),l("div",_,[n("section",x,[n("div",I,[n("img",{class:"img-parent",src:g.src},null,8,h)]),n("div",y,[E,P,j,o(e,{type:"primary",shape:"round",size:"large",onClick:k},{default:i((()=>[d(v(u(f))+" 返回首页",1)])),_:1})])])])}}}),[["__scopeId","data-v-33ebc496"]]);export{k as default};