import{d as e,e as a,eA as l,z as t,r as s,f as i,o,c,g as p,i as n,$ as r,a0 as g,L as u,h as m,x as v,F as _,t as d,n as f}from"./index-ed1c2c55.js";import{a as w}from"./index.es-a1d8afd5.js";const h={class:"images-view"},x=["src"],j={class:"foot"},b=["onClick"],C=["src"],y=["src"],Y=f(e({__name:"index",props:{list:{default:()=>[{src:"https://gw.alicdn.com/imgextra/i4/2679012998/O1CN01HRyHt31Y18AGcTbKj_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN017617nr1Y189xDIqY1_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i3/2679012998/O1CN01EdWirH1Y18D5EEr8x_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN01vEwGAd1Y18APGtwTH_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i4/2679012998/O1CN01HRyHt31Y18AGcTbKj_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN017617nr1Y189xDIqY1_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i4/2679012998/O1CN01HRyHt31Y18AGcTbKj_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN017617nr1Y189xDIqY1_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i3/2679012998/O1CN01EdWirH1Y18D5EEr8x_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN01vEwGAd1Y18APGtwTH_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i4/2679012998/O1CN01HRyHt31Y18AGcTbKj_!!2679012998.jpg_Q75.jpg_.webp"},{src:"https://gw.alicdn.com/imgextra/i1/2679012998/O1CN017617nr1Y189xDIqY1_!!2679012998.jpg_Q75.jpg_.webp"}]},zoom:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1}},setup(e){const f=e,Y=a(null),{width:k}=l(Y),z=t((()=>Math.floor(k.value/110))),H=a(0),N=a(0),O=t((()=>Math.floor((f.list.length-1)/z.value))),Q=a(!1),A=()=>{N.value!==Math.floor(H.value/z.value)&&(N.value=Math.floor(H.value/z.value))};f.autoplay&&!f.zoom&&setInterval((()=>{H.value<f.list.length-1?H.value++:H.value==f.list.length-1&&(H.value=0),A()}),2e3);const I=e=>{e.stopPropagation(),H.value>0&&H.value--,A()},E=e=>{e.stopPropagation(),H.value<f.list.length-1&&H.value++,A()},G=()=>{N.value>0&&N.value--},R=()=>{N.value<O.value&&N.value++},M=()=>{f.list.length&&!f.zoom&&w({options:{initialViewIndex:H.value},images:f.list.map((e=>e.src))})},D=s({left:"0",top:"0"}),T=s({left:"0",top:"0"}),P=a(null),{top:q,left:B,width:K,height:V}=l(P),W=a(null),{width:Z,height:F}=l(W),L=a(null),{width:S,height:X}=l(L),$=t((()=>S.value/Z.value)),J=e=>{const a=Z.value/2,l=F.value/2,t=K.value-a,s=V.value-l;let i=e.pageX-B.value,o=e.pageY-q.value;i<a&&(i=a),i>t&&(i=t),o<l&&(o=l),o>s&&(o=s),D.left=i-a+"px",D.top=o-l+"px",T.left=-(i-a)*$.value+"px",T.top=-(o-l)*$.value+"px"};return(e,a)=>{const l=i("icon-left"),t=i("icon-right");return o(),c("div",h,[p("section",{class:"image",ref_key:"ImageViewRef",ref:P,onMouseenter:a[0]||(a[0]=e=>Q.value=!0),onMouseleave:a[1]||(a[1]=e=>Q.value=!1),onMousemove:J,onClick:M},[(o(),c("img",{class:"animate__animated animate__fadeIn",src:e.list[n(H)].src,key:n(H)},null,8,x)),r(p("div",{ref_key:"ZoomARef",ref:W,class:"zoom-a",style:u({left:n(D).left,top:n(D).top})},null,4),[[g,f.zoom&&n(Q)]]),r(p("div",{class:"prev",onClick:I},[m(l,{size:20})],512),[[g,!f.zoom]]),r(p("div",{class:"next",onClick:E},[m(t,{size:20})],512),[[g,!f.zoom]])],544),p("section",j,[p("div",{class:v(["left",{disabled:0===n(N)}]),onClick:G},[m(l)],2),p("div",{class:"scroll-box",ref_key:"ScrollBoxRef",ref:Y},[p("ul",{class:"list",style:u({left:-440*n(N)+"px"})},[(o(!0),c(_,null,d(e.list,((e,a)=>(o(),c("li",{class:v(["list-item",{active:n(H)===a}]),key:a,onClick:e=>(e=>{H.value=e,A()})(a)},[p("img",{src:e.src,alt:""},null,8,C)],10,b)))),128))],4)],512),p("div",{class:v(["right",{disabled:n(N)===n(O)}]),onClick:R},[m(t)],2)]),r(p("div",{ref_key:"ZoomBRef",ref:L,class:"zoom-b animate__animated animate__fadeIn",style:u({left:n(K)+10+"px"})},[p("img",{src:e.list[n(H)].src,style:u({left:n(T).left,top:n(T).top,width:n(K)*n($)+"px"})},null,12,y)],4),[[g,f.zoom&&n(Q)]])])}}}),[["__scopeId","data-v-8e1f8f32"]]);export{Y as default};