import{d as e,r as a,eE as l,B as t,e as s,f as i,o,c,h as p,i as r,a2 as n,a3 as g,Y as u,g as m,z as v,F as _,x as d,s as f}from"./index-7473d946.js";import{a as w}from"./index.es-a8c543d6.js";const x={class:"images-view"},h=["src"],j={class:"foot"},b=["onClick"],C=["src"],y=["src"],Y=f(e({__name:"index",props:{list:{default:()=>[{src:"https://gw.alicdn.com/imgextra/i4/2679012998/O1CN01HRyHt31Y18AGcTbKj_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN017617nr1Y189xDIqY1_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i3/2679012998/O1CN01EdWirH1Y18D5EEr8x_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN01vEwGAd1Y18APGtwTH_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i4/2679012998/O1CN01HRyHt31Y18AGcTbKj_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN017617nr1Y189xDIqY1_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i4/2679012998/O1CN01HRyHt31Y18AGcTbKj_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN017617nr1Y189xDIqY1_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i3/2679012998/O1CN01EdWirH1Y18D5EEr8x_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN01vEwGAd1Y18APGtwTH_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i4/2679012998/O1CN01HRyHt31Y18AGcTbKj_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN017617nr1Y189xDIqY1_!!2679012998.jpg_Q75.jpg_.webp"}]},zoom:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1}},setup(e){const f=e,Y=a(null),{width:k}=l(Y),z=t((()=>Math.floor(k.value/110))),H=a(0),N=a(0),O=t((()=>Math.floor((f.list.length-1)/z.value))),Q=a(!1),I=()=>{N.value!==Math.floor(H.value/z.value)&&(N.value=Math.floor(H.value/z.value))};f.autoplay&&!f.zoom&&setInterval((()=>{H.value<f.list.length-1?H.value++:H.value==f.list.length-1&&(H.value=0),I()}),2e3);const A=e=>{e.stopPropagation(),H.value>0&&H.value--,I()},E=e=>{e.stopPropagation(),H.value<f.list.length-1&&H.value++,I()},G=()=>{N.value>0&&N.value--},R=()=>{N.value<O.value&&N.value++},M=()=>{f.list.length&&!f.zoom&&w({options:{initialViewIndex:H.value},images:f.list.map((e=>e.src))})},D=s({left:"0",top:"0"}),T=s({left:"0",top:"0"}),B=a(null),{top:q,left:K,width:P,height:V}=l(B),W=a(null),{width:Z,height:F}=l(W),S=a(null),{width:X}=l(S),J=t((()=>X.value/Z.value)),L=e=>{const a=Z.value/2,l=F.value/2,t=P.value-a,s=V.value-l;let i=e.pageX-K.value,o=e.pageY-q.value;i<a&&(i=a),i>t&&(i=t),o<l&&(o=l),o>s&&(o=s),D.left=i-a+"px",D.top=o-l+"px",T.left=-(i-a)*J.value+"px",T.top=-(o-l)*J.value+"px"};return(e,a)=>{const l=i("icon-left"),t=i("icon-right");return o(),c("div",x,[p("section",{class:"image",ref_key:"ImageViewRef",ref:B,onMouseenter:a[0]||(a[0]=e=>Q.value=!0),onMouseleave:a[1]||(a[1]=e=>Q.value=!1),onMousemove:L,onClick:M},[(o(),c("img",{class:"animate__animated animate__fadeIn",src:e.list[r(H)].src,key:r(H)},null,8,h)),n(p("div",{ref_key:"ZoomARef",ref:W,class:"zoom-a",style:u({left:r(D).left,top:r(D).top})},null,4),[[g,f.zoom&&r(Q)]]),n(p("div",{class:"prev",onClick:A},[m(l,{size:20})],512),[[g,!f.zoom]]),n(p("div",{class:"next",onClick:E},[m(t,{size:20})],512),[[g,!f.zoom]])],544),p("section",j,[p("div",{class:v(["left",{disabled:0===r(N)}]),onClick:G},[m(l)],2),p("div",{class:"scroll-box",ref_key:"ScrollBoxRef",ref:Y},[p("ul",{class:"list",style:u({left:-440*r(N)+"px"})},[(o(!0),c(_,null,d(e.list,((e,a)=>(o(),c("li",{class:v(["list-item",{active:r(H)===a}]),key:a,onClick:e=>(e=>{H.value=e,I()})(a)},[p("img",{src:e.src,alt:""},null,8,C)],10,b)))),128))],4)],512),p("div",{class:v(["right",{disabled:r(N)===r(O)}]),onClick:R},[m(t)],2)]),n(p("div",{ref_key:"ZoomBRef",ref:S,class:"zoom-b animate__animated animate__fadeIn",style:u({left:r(P)+10+"px"})},[p("img",{src:e.list[r(H)].src,style:u({left:r(T).left,top:r(T).top,width:r(P)*r(J)+"px"})},null,12,y)],4),[[g,f.zoom&&r(Q)]])])}}}),[["__scopeId","data-v-c7226be4"]]);export{Y as default};