import{d as e,e as a,z as l,H as s,eF as o,eG as i,eH as t,f as u,o as n,q as v,w as r,$ as d,g as p,L as f,i as c,h as x,v as g,a0 as m,T as y,n as h}from"./index-b0b495b4.js";const I={style:{padding:"10px 14px 14px 14px"}},_={class:"name"},w=["src"],C=h(e({__name:"index",props:{fileInfo:{},onClose:{}},setup(e){const h=e,C=a(!1),S=a(null),k=a(null),z=l((()=>{var e;return(null==(e=h.fileInfo)?void 0:e.src)||""}));s((()=>{C.value=!0}));const{width:H,height:N}=o(),{width:A,height:D}=i(S),J=a({top:40,left:H.value-A.value}),O=JSON.parse(sessionStorage.getItem("AudioDialogXY"));O&&O.top&&O.left&&(J.value.top=O.top,J.value.left=O.left);const{x:R,y:X}=t(S,{initialValue:{x:J.value.left-A.value,y:J.value.top}}),Y=l((()=>{let e=R.value,a=X.value;return R.value>H.value-A.value&&(e=H.value-A.value),R.value<0&&(e=0),X.value>N.value-D.value&&(a=N.value-D.value),X.value<0&&(a=0),sessionStorage.setItem("AudioDialogXY",JSON.stringify({top:a,left:e})),{left:e+"px",top:a+"px"}})),j=()=>{C.value=!1,h.onClose&&h.onClose()};return(e,a)=>{const l=u("icon-music"),s=u("icon-close");return n(),v(y,{name:"slide-dynamic-origin"},{default:r((()=>{var e,a;return[d(p("div",{class:"audio-preview-wrapper",ref_key:"audioRef",ref:S,style:f(c(Y))},[p("section",I,[p("div",{class:"head",ref_key:"audioHeadRef",ref:k},[p("div",_,[x(l,{size:16,spin:""}),p("span",null,g(null==(e=h.fileInfo)?void 0:e.name)+"."+g(null==(a=h.fileInfo)?void 0:a.extendName),1)]),p("div",{class:"close-icon",onClick:j},[x(s,{size:12})])],512),p("audio",{class:"audio",src:c(z),controls:"",autoplay:""},null,8,w)])],4),[[m,c(C)]])]})),_:1})}}}),[["__scopeId","data-v-a9576939"]]);export{C as default};