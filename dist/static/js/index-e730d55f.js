import{d as e,u as a,a as s,r as t,H as i,f as o,o as r,c as n,h as m,g as p,w as d,t as u,i as l,O as c,P as j,T as y,s as b}from"./index-e7b4405a.js";import f from"./Pane1-fa272b77.js";import x from"./Pane2-e723a313.js";import"./useTable-ba0ebea2.js";import"./usePagination-9d7846a2.js";import"./index-33279686.js";import"./RightMenu-f7b0365e.js";import"./EditModal-632ed64e.js";import"./regexp-2217f7b7.js";import"./useForm-d27cc9da.js";import"./index-ad103c5b.js";import"./person-ff3306fc.js";import"./index-0c3ce4b5.js";const g={class:"manage"},h={class:"tab"},v=b(e({name:"DataIndex",__name:"index",setup(e){const b=a(),v=s(),_={1:f,2:x},P=t(1);i((()=>b.query),(()=>{b.query.tabKey&&(P.value=Number(b.query.tabKey))}),{immediate:!0});const k=e=>{P.value=e,v.replace({path:b.path,query:{tabKey:e}})};return(e,a)=>{const s=o("a-tab-pane"),t=o("a-tabs");return r(),n("div",g,[m("section",h,[p(t,{"hide-content":"",size:"medium","active-key":l(P),onChange:k},{default:d((()=>[(r(),u(s,{key:1,title:"人员管理"})),(r(),u(s,{key:2,title:"单位管理"}))])),_:1},8,["active-key"])]),p(y,{name:"fade-slide",mode:"out-in",appear:""},{default:d((()=>[(r(),u(c,null,[(r(),u(j(_[l(P)])))],1024))])),_:1})])}}}),[["__scopeId","data-v-1bbd2e31"]]);export{v as default};
