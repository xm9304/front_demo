import{d as a,e,i as s,o as t,c as n,g as i,h as m,x as o,O as d,t as r,W as c,q as l}from"./index-f2ac5032.js";const u={key:0,class:"gi-now-time"},_={class:"time gi_line_1"},p=l(a({name:"GiNowTime",__name:"index",setup(a){const l=e(""),p=()=>`${c(new Date).format("YYYY年MM月DD日 HH:mm:ss")} 星期${["日","一","二","三","四","五","六"][c(new Date).day()]}`;return l.value=p(),setInterval((()=>{l.value=p()}),1e3),(a,e)=>{const c=r;return s(l)?(t(),n("div",u,[i(c,{name:"time",size:20}),m("p",_,o(s(l)),1)])):d("",!0)}}}),[["__scopeId","data-v-9e3d304a"]]);export{p as default};