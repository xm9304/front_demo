import{d as e,e as a,B as l,J as s,eK as o,eL as i,eM as t,f as u,o as n,t as v,w as r,a2 as d,h as p,O as f,i as c,g as x,y as g,a3 as m,T as y,s as h}from"./index-5690b7e6.js";const I={style:{padding:"10px 14px 14px 14px"}},_={class:"name"},w=["src"],C=h(e({__name:"index",props:{fileInfo:{},onClose:{}},setup(e){const h=e,C=a(!1),S=a(null),k=a(null),J=l((()=>{var e;return(null==(e=h.fileInfo)?void 0:e.src)||""}));s((()=>{C.value=!0}));const{width:N,height:O}=o(),{width:z,height:A}=i(S),D=a({top:40,left:N.value-z.value}),R=JSON.parse(sessionStorage.getItem("AudioDialogXY"));R&&R.top&&R.left&&(D.value.top=R.top,D.value.left=R.left);const{x:X,y:Y}=t(S,{initialValue:{x:D.value.left-z.value,y:D.value.top}}),j=l((()=>{let e=X.value,a=Y.value;return X.value>N.value-z.value&&(e=N.value-z.value),X.value<0&&(e=0),Y.value>O.value-A.value&&(a=O.value-A.value),Y.value<0&&(a=0),sessionStorage.setItem("AudioDialogXY",JSON.stringify({top:a,left:e})),{left:e+"px",top:a+"px"}})),B=()=>{C.value=!1,h.onClose&&h.onClose()};return(e,a)=>{const l=u("icon-music"),s=u("icon-close");return n(),v(y,{name:"slide-dynamic-origin"},{default:r((()=>{var e,a;return[d(p("div",{class:"audio-preview-wrapper",ref_key:"audioRef",ref:S,style:f(c(j))},[p("section",I,[p("div",{class:"head",ref_key:"audioHeadRef",ref:k},[p("div",_,[x(l,{size:16,spin:""}),p("span",null,g(null==(e=h.fileInfo)?void 0:e.name)+"."+g(null==(a=h.fileInfo)?void 0:a.extendName),1)]),p("div",{class:"close-icon",onClick:B},[x(s,{size:12})])],512),p("audio",{class:"audio",src:c(J),controls:"",autoplay:""},null,8,w)])],4),[[m,c(C)]])]})),_:1})}}}),[["__scopeId","data-v-a9576939"]]);export{C as default};