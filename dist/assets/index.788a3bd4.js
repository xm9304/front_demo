import{d as v,i as d,o as h,m as p,w as r,c as F,I as A,J as E,k as w,K as M,L as x,N as te,u as V,O as Se,r as T,q as oe,b as s,j as f,_ as B,s as ne,t as se,G as ae,P as K,Q as ke,R as Ce,n as $e,l as R,z as we,p as ie,e as le,a as S,f as Fe,S as Ee,g as re,T as Ae,U as xe,V as He}from"./index.40ed842a.js";import{_ as Be}from"./GiSvgIcon.844ccb86.js";import{a as De,_ as Te}from"./logo.713fef43.js";import{s as N}from"./index.463d26de.js";import"./viewer.ce48f84e.js";import"./index.9bb32827.js";const Le=v({name:"MenuItem"}),Me=v({...Le,props:{data:{type:Object,default:()=>{}}},emits:["click"],setup(e,{emit:t}){const n=o=>{t("click",o)};return(o,l)=>{const a=Be,i=d("MenuItem",!0),c=d("a-sub-menu"),u=d("icon-unordered-list"),m=d("a-menu-item");return e.data.children&&e.data.children.length&&!e.data.hidden?(h(),p(c,{key:e.data.path},{icon:r(()=>[e.data.icon?(h(),p(a,{key:0,size:24,name:e.data.icon},null,8,["name"])):A("",!0)]),title:r(()=>[w(M(e.data.name),1)]),default:r(()=>[(h(!0),F(E,null,x(e.data.children,_=>(h(),p(i,{key:_.id,data:_,onClick:n},null,8,["data"]))),128))]),_:1})):(h(),F(E,{key:1},[e.data.hidden?A("",!0):(h(),p(m,{key:e.data.path,onClick:l[0]||(l[0]=_=>n(e.data))},{icon:r(()=>[e.data.icon?(h(),p(a,{key:0,size:24,name:e.data.icon},null,8,["name"])):(h(),p(u,{key:1,size:20}))]),default:r(()=>[w(" "+M(e.data.name),1)]),_:1}))],64))}}}),ze=v({name:"Aside"}),Ie=v({...ze,setup(e){const t=te(),n=V(),o=Se(),l=u=>{const m=[];function _(g){g.forEach(y=>{var k;y.path&&m.push(y.path),(k=y.children)!=null&&k.length&&_(y.children)})}return _(u),m},a=T("/home"),i=l(o.menuTree);oe(()=>t.path,()=>{i.includes(t.path)&&(a.value=t.path)},{immediate:!0});const c=u=>{u.path&&(u.path==="/file"?n.push({path:u.path,query:{fileType:0}}):n.push({path:u.path}),i.includes(u.path)&&(a.value=u.path))};return(u,m)=>{const _=d("a-menu"),g=d("a-layout-sider");return h(),p(g,{collapsible:"",breakpoint:"xl",class:"aside"},{default:r(()=>[s(_,{"selected-keys":[a.value],"default-open-keys":["/home"],"auto-open-selected":!0,style:{width:"100%",height:"100%"}},{default:r(()=>[(h(!0),F(E,null,x(f(o).menuTree,y=>(h(),p(Me,{key:y.id,data:y,onClick:c},null,8,["data"]))),128))]),_:1},8,["selected-keys"])]),_:1})}}});const Ne=B(Ie,[["__scopeId","data-v-db686c95"]]);function Re(){const e=T(!1),t=()=>{e.value=N.isFullscreen},n=()=>{N.toggle()};return ne(()=>{N.on("change",t)}),se(()=>{N.off("change",t)}),{isFullScreen:e,onToggleFullScreen:n}}/*!
  * vue-color-kit v1.0.4
  * (c) 2021 
  * @license MIT
  */function H(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=je(e):/rgb/.test(e)?t=ee(e):typeof e=="string"?t=ee(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:l,a}=t,{h:i,s:c,v:u}=Pe(t);return{r:n,g:o,b:l,a:a===void 0?1:a,h:i,s:c,v:u}}function W(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function P(e,t,n,o,l,a){const i=e==="l",c=t.createLinearGradient(0,0,i?n:0,i?0:o);c.addColorStop(.01,l),c.addColorStop(.99,a),t.fillStyle=c,t.fillRect(0,0,n,o)}function Oe({r:e,g:t,b:n},o){const l=i=>("0"+Number(i).toString(16)).slice(-2),a=`#${l(e)}${l(t)}${l(n)}`;return o?a.toUpperCase():a}function je(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function ee(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Pe({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),l=Math.min(e,t,n),a=o-l;let i=0;o===l?i=0:o===e?t>=n?i=60*(t-n)/a:i=60*(t-n)/a+360:o===t?i=60*(n-e)/a+120:o===n&&(i=60*(e-t)/a+240),i=Math.floor(i);let c=parseFloat((o===0?0:1-l/o).toFixed(2)),u=parseFloat(o.toFixed(2));return{h:i,s:c,v:u}}var U=v({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},emits:["selectSaturation"],data(){return{slideSaturationStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasSaturation,t=this.size,n=e.getContext("2d");e.width=t,e.height=t,n.fillStyle=this.color,n.fillRect(0,0,t,t),P("l",n,t,t,"#FFFFFF","rgba(255,255,255,0)"),P("p",n,t,t,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(e){const{top:t,left:n}=this.$el.getBoundingClientRect(),o=e.target.getContext("2d"),l=i=>{let c=i.clientX-n,u=i.clientY-t;c<0&&(c=0),u<0&&(u=0),c>this.size&&(c=this.size),u>this.size&&(u=this.size),this.slideSaturationStyle={left:c-5+"px",top:u-5+"px"};const m=o.getImageData(Math.min(c,this.size-1),Math.min(u,this.size-1),1,1),[_,g,y]=m.data;this.$emit("selectSaturation",{r:_,g,b:y})};l(e);const a=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",a)}}});const Ve={ref:"canvasSaturation"};function Ke(e,t,n,o,l,a){return h(),p("div",{class:"saturation",onMousedown:t[1]||(t[1]=K((...i)=>e.selectSaturation&&e.selectSaturation(...i),["prevent","stop"]))},[s("canvas",Ve,null,512),s("div",{style:e.slideSaturationStyle,class:"slide"},null,4)],32)}U.render=Ke;U.__file="src/color/Saturation.vue";var G=v({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectHue"],data(){return{slideHueStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasHue,t=this.width,n=this.height,o=e.getContext("2d");e.width=t,e.height=n;const l=o.createLinearGradient(0,0,0,n);l.addColorStop(0,"#FF0000"),l.addColorStop(.17*1,"#FF00FF"),l.addColorStop(.17*2,"#0000FF"),l.addColorStop(.17*3,"#00FFFF"),l.addColorStop(.17*4,"#00FF00"),l.addColorStop(.17*5,"#FFFF00"),l.addColorStop(1,"#FF0000"),o.fillStyle=l,o.fillRect(0,0,t,n)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(e){const{top:t}=this.$el.getBoundingClientRect(),n=e.target.getContext("2d"),o=a=>{let i=a.clientY-t;i<0&&(i=0),i>this.height&&(i=this.height),this.slideHueStyle={top:i-2+"px"};const c=n.getImageData(0,Math.min(i,this.height-1),1,1),[u,m,_]=c.data;this.$emit("selectHue",{r:u,g:m,b:_})};o(e);const l=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",l)}}});const We={ref:"canvasHue"};function Ue(e,t,n,o,l,a){return h(),p("div",{class:"hue",onMousedown:t[1]||(t[1]=K((...i)=>e.selectHue&&e.selectHue(...i),["prevent","stop"]))},[s("canvas",We,null,512),s("div",{style:e.slideHueStyle,class:"slide"},null,4)],32)}G.render=Ue;G.__file="src/color/Hue.vue";var X=v({props:{color:{type:String,default:"#000000"},rgba:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectAlpha"],data(){return{slideAlphaStyle:{},alphaSize:5}},watch:{color(){this.renderColor()},"rgba.a"(){this.renderSlide()}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasAlpha,t=this.width,n=this.height,o=this.alphaSize,l=W(o),a=e.getContext("2d");e.width=t,e.height=n,a.fillStyle=a.createPattern(l,"repeat"),a.fillRect(0,0,t,n),P("p",a,t,n,"rgba(255,255,255,0)",this.color)},renderSlide(){this.slideAlphaStyle={top:this.rgba.a*this.height-2+"px"}},selectAlpha(e){const{top:t}=this.$el.getBoundingClientRect(),n=l=>{let a=l.clientY-t;a<0&&(a=0),a>this.height&&(a=this.height);let i=parseFloat((a/this.height).toFixed(2));this.$emit("selectAlpha",i)};n(e);const o=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)}}});const Ge={ref:"canvasAlpha"};function Xe(e,t,n,o,l,a){return h(),p("div",{class:"color-alpha",onMousedown:t[1]||(t[1]=K((...i)=>e.selectAlpha&&e.selectAlpha(...i),["prevent","stop"]))},[s("canvas",Ge,null,512),s("div",{style:e.slideAlphaStyle,class:"slide"},null,4)],32)}X.render=Xe;X.__file="src/color/Alpha.vue";var q=v({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data(){return{alphaSize:5}},watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const e=this.$el,t=this.width,n=this.height,o=this.alphaSize,l=W(o),a=e.getContext("2d");e.width=t,e.height=n,a.fillStyle=a.createPattern(l,"repeat"),a.fillRect(0,0,t,n),a.fillStyle=this.color,a.fillRect(0,0,t,n)}}});function qe(e,t,n,o,l,a){return h(),p("canvas")}q.render=qe;q.__file="src/color/Preview.vue";var Y=v({props:{suckerCanvas:{type:Object,default:null},suckerArea:{type:Array,default:()=>[]}},data(){return{isOpenSucker:!1,suckerPreview:null,isSucking:!1}},watch:{suckerCanvas(e){this.isSucking=!1,this.suckColor(e)}},methods:{openSucker(){this.isOpenSucker?this.keydownHandler({keyCode:27}):(this.isOpenSucker=!0,this.isSucking=!0,this.$emit("openSucker",!0),document.addEventListener("keydown",this.keydownHandler))},keydownHandler(e){e.keyCode===27&&(this.isOpenSucker=!1,this.isSucking=!1,this.$emit("openSucker",!1),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:t,clientY:n}=e,{top:o,left:l,width:a,height:i}=this.suckerCanvas.getBoundingClientRect(),c=t-l,u=n-o,_=this.suckerCanvas.getContext("2d").getImageData(Math.min(c,a-1),Math.min(u,i-1),1,1);let[g,y,k,$]=_.data;$=parseFloat(($/255).toFixed(2));const C=this.suckerPreview.style;Object.assign(C,{position:"absolute",left:t+20+"px",top:n-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${g}, ${y}, ${k}, ${$})`,zIndex:95}),this.suckerArea.length&&t>=this.suckerArea[0]&&n>=this.suckerArea[1]&&t<=this.suckerArea[2]&&n<=this.suckerArea[3]?C.display="":C.display="none"},suckColor(e){e&&e.tagName!=="CANVAS"||(this.suckerPreview=document.createElement("div"),this.suckerPreview&&document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",t=>{const{clientX:n,clientY:o}=t,{top:l,left:a,width:i,height:c}=e.getBoundingClientRect(),u=n-a,m=o-l,g=e.getContext("2d").getImageData(Math.min(u,i-1),Math.min(m,c-1),1,1);let[y,k,$,C]=g.data;C=parseFloat((C/255).toFixed(2)),this.$emit("selectSucker",{r:y,g:k,b:$,a:C})}))}}});const Ye=s("path",{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"},null,-1),Je={key:1,class:"sucker",viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"},Qe=s("g",{fill:"none","fill-rule":"evenodd"},[s("g",{transform:"translate(1 1)","stroke-width":"4"},[s("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),s("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[s("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])],-1);function Ze(e,t,n,o,l,a){return h(),p("div",null,[e.isSucking?A("v-if",!0):(h(),p("svg",{key:0,class:[{active:e.isOpenSucker},"sucker"],xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48",onClick:t[1]||(t[1]=(...i)=>e.openSucker&&e.openSucker(...i))},[Ye],2)),e.isSucking?(h(),p("svg",Je,[Qe])):A("v-if",!0)])}Y.render=Ze;Y.__file="src/color/Sucker.vue";var J=v({props:{name:{type:String,default:""},color:{type:String,default:""}},emits:["inputColor"],setup(e,{emit:t}){return{modelColor:ae({get(){return e.color||""},set(o){t("inputColor",o)}})}}});const et={class:"color-type"},tt={class:"name"};function ot(e,t,n,o,l,a){return h(),p("div",et,[s("span",tt,M(e.name),1),ke(s("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>e.modelColor=i),class:"value"},null,512),[[Ce,e.modelColor]])])}J.render=ot;J.__file="src/color/Box.vue";var Q=v({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,default:()=>[]},colorsHistoryKey:{type:String,default:""}},emits:["selectColor"],setup(e,{emit:t}){const n=T(),o=T([]),l=T();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),l.value=W(4).toDataURL(),se(()=>{a(n.value)});function a(c){if(!c)return;const u=o.value||[],m=u.indexOf(c);m>=0&&u.splice(m,1),u.length>=8&&(u.length=7),u.unshift(c),o.value=u||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(u))}function i(c){t("selectColor",c)}return{setColorsHistory:a,colorsHistory:o,color:n,imgAlphaBase64:l,selectColor:i}}});const nt={class:"colors"},st={key:0,class:"colors history"};function at(e,t,n,o,l,a){return h(),p("div",null,[s("ul",nt,[(h(!0),p(E,null,x(e.colorsDefault,i=>(h(),p("li",{key:i,class:"item",onClick:c=>e.selectColor(i)},[s("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),s("div",{style:{background:i},class:"color"},null,4)],8,["onClick"]))),128))]),e.colorsHistory.length?(h(),p("ul",st,[(h(!0),p(E,null,x(e.colorsHistory,i=>(h(),p("li",{key:i,class:"item",onClick:c=>e.selectColor(i)},[s("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),s("div",{style:{background:i},class:"color"},null,4)],8,["onClick"]))),128))])):A("v-if",!0)])}Q.render=at;Q.__file="src/color/Colors.vue";var L=v({components:{Saturation:U,Hue:G,Alpha:X,Preview:q,Sucker:Y,Box:J,Colors:Q},emits:["changeColor","openSucker"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data(){return{hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}},computed:{isLightTheme(){return this.theme==="light"},totalWidth(){return this.hueHeight+(this.hueWidth+8)*2},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return Oe(this.rgba,!0)}},created(){Object.assign(this,H(this.color)),this.setText(),this.$watch("rgba",()=>{this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})})},methods:{selectSaturation(e){const{r:t,g:n,b:o,h:l,s:a,v:i}=H(e);Object.assign(this,{r:t,g:n,b:o,h:l,s:a,v:i}),this.setText()},selectHue(e){const{r:t,g:n,b:o,h:l,s:a,v:i}=H(e);Object.assign(this,{r:t,g:n,b:o,h:l,s:a,v:i}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},selectAlpha(e){this.a=e,this.setText()},inputHex(e){const{r:t,g:n,b:o,a:l,h:a,s:i,v:c}=H(e);Object.assign(this,{r:t,g:n,b:o,a:l,h:a,s:i,v:c}),this.modelHex=e,this.modelRgba=this.rgbaStringShort,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(e){const{r:t,g:n,b:o,a:l,h:a,s:i,v:c}=H(e);Object.assign(this,{r:t,g:n,b:o,a:l,h:a,s:i,v:c}),this.modelHex=this.hexString,this.modelRgba=e,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},openSucker(e){this.$emit("openSucker",e)},selectSucker(e){const{r:t,g:n,b:o,a:l,h:a,s:i,v:c}=H(e);Object.assign(this,{r:t,g:n,b:o,a:l,h:a,s:i,v:c}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},selectColor(e){const{r:t,g:n,b:o,a:l,h:a,s:i,v:c}=H(e);Object.assign(this,{r:t,g:n,b:o,a:l,h:a,s:i,v:c}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}});const it={class:"color-set"};function lt(e,t,n,o,l,a){const i=d("Saturation"),c=d("Hue"),u=d("Alpha"),m=d("Preview"),_=d("Sucker"),g=d("Box"),y=d("Colors");return h(),p("div",{class:["hu-color-picker",{light:e.isLightTheme}],style:{width:e.totalWidth+"px"}},[s("div",it,[s(i,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),s(c,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"]),s(u,{ref:"alpha",color:e.rgbString,rgba:e.rgba,width:e.hueWidth,height:e.hueHeight,onSelectAlpha:e.selectAlpha},null,8,["color","rgba","width","height","onSelectAlpha"])]),s("div",{style:{height:e.previewHeight+"px"},class:"color-show"},[s(m,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"]),e.suckerHide?A("v-if",!0):(h(),p(_,{key:0,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea,onOpenSucker:e.openSucker,onSelectSucker:e.selectSucker},null,8,["sucker-canvas","sucker-area","onOpenSucker","onSelectSucker"]))],4),s(g,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),s(g,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),s(y,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"]),A(" custom options "),$e(e.$slots,"default")],6)}L.render=lt;L.__file="src/color/ColorPicker.vue";L.install=e=>{e.component(L.name,L)};const rt=[{label:"\u5361\u7247",value:"card"},{label:"\u95F4\u9694\u5361\u7247",value:"card-gutter"},{label:"\u5706\u89D2",value:"rounded"}],ct=[{label:"\u9ED8\u8BA4",value:"zoom-fade"},{label:"\u6ED1\u52A8",value:"fade-slide"},{label:"\u6E10\u53D8",value:"fade"},{label:"\u5E95\u90E8\u6ED1\u51FA",value:"fade-bottom"},{label:"\u7F29\u653E\u6D88\u9000",value:"fade-scale"}],z=e=>(ie("data-v-2b7fae12"),e=e(),le(),e),ut=w("\u9879\u76EE\u914D\u7F6E"),dt=z(()=>S("span",{class:"title"},"\u7CFB\u7EDF\u4E3B\u9898",-1)),ht=z(()=>S("span",{class:"title"},"\u754C\u9762\u663E\u793A",-1)),pt=z(()=>S("span",{class:"label"},"\u9875\u7B7E\u663E\u793A",-1)),_t=z(()=>S("span",{class:"label"},"\u9875\u7B7E\u98CE\u683C",-1)),mt=z(()=>S("span",{class:"label"},"\u52A8\u753B\u663E\u793A",-1)),ft=z(()=>S("span",{class:"label"},"\u52A8\u753B\u5207\u6362\u7C7B\u578B",-1)),gt=v({name:"SettingDrawer"}),vt=v({...gt,props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=R(),l=ae({get:()=>n.modelValue,set:c=>t("update:modelValue",c)}),a=["#1890ff","#409EFF","#2d8cf0","#007AFF","#5ac8fa","#5856D6","#536dfe","#9c27b0","#AF52DE","#0096c7","#00C1D4","#34C759","#43a047","#7cb342","#c0ca33","#78DEC7","#e53935","#d81b60","#f4511e","#fb8c00","#ffb300","#fdd835","#6d4c41","#546e7a"];o.themeColor&&o.setThemeColor(o.themeColor);const i=c=>{!/^#[0-9A-Za-z]{6}/.test(c.hex)||o.setThemeColor(c.hex)};return(c,u)=>{const m=d("a-divider"),_=d("a-row"),g=d("a-switch"),y=d("a-option"),k=d("a-select"),$=d("a-space"),C=d("a-drawer");return h(),p(C,{visible:f(l),"onUpdate:visible":u[2]||(u[2]=b=>we(l)?l.value=b:null),width:"300px","unmount-on-close":"",footer:!1},{title:r(()=>[ut]),default:r(()=>[s($,{size:15,direction:"vertical",fill:""},{default:r(()=>[s(m,{orientation:"center"},{default:r(()=>[dt]),_:1}),s(_,{justify:"center"},{default:r(()=>[s(f(L),{theme:"dark",color:f(o).themeColor,"sucker-hide":!0,"colors-default":a,onChangeColor:i},null,8,["color"])]),_:1}),s(m,{orientation:"center"},{default:r(()=>[ht]),_:1}),s(_,{justify:"space-between",align:"center"},{default:r(()=>[pt,s(g,{size:"medium","model-value":f(o).tab,onChange:u[0]||(u[0]=b=>f(o).setTabVisible(Boolean(b)))},null,8,["model-value"])]),_:1}),s(_,{justify:"space-between",align:"center"},{default:r(()=>[_t,s(k,{placeholder:"\u8BF7\u9009\u62E9","model-value":f(o).tabMode,disabled:!f(o).tab,style:{width:"120px"},"trigger-props":{autoFitPopupMinWidth:!0}},{default:r(()=>[(h(!0),F(E,null,x(f(rt),b=>(h(),p(y,{key:b.value,value:b.value,onClick:I=>f(o).setTabMode(b.value)},{default:r(()=>[w(M(b.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1}),s(_,{justify:"space-between",align:"center"},{default:r(()=>[mt,s(g,{size:"medium","model-value":f(o).animate,onChange:u[1]||(u[1]=b=>f(o).setAnimateVisible(Boolean(b)))},null,8,["model-value"])]),_:1}),s(_,{justify:"space-between",align:"center"},{default:r(()=>[ft,s(k,{placeholder:"\u8BF7\u9009\u62E9","model-value":f(o).animateMode,disabled:!f(o).animate,style:{width:"120px"}},{default:r(()=>[(h(!0),F(E,null,x(f(ct),b=>(h(),p(y,{key:b.value,value:b.value,onClick:I=>f(o).setAnimateMode(b.value)},{default:r(()=>[w(M(b.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1})]),_:1})]),_:1},8,["visible"])}}});const yt=B(vt,[["__scopeId","data-v-2b7fae12"]]),bt={class:"message"},St=w("\u901A\u77E5(1)"),kt=w("\u5173\u6CE8(1)"),Ct=w("\u5F85\u529E(2)"),$t=["src"],wt=v({name:"Message"}),Ft=v({...wt,setup(e){const t=[{name:"Socrates",datetime:"1\u5C0F\u65F6\u4E4B\u524D",content:"Comment body content.",avatar:"https://lolicode.gitee.io/scui-doc/demo/img/avatar2.gif"},{name:"\u6728\u6728\u7CD6\u9187",datetime:"2\u5C0F\u65F6\u4E4B\u524D",content:"\u5173\u6CE8\u4E86\u4F60",avatar:"https://s1.ax1x.com/2022/06/14/XhteeO.jpg"},{name:"\u5F90\u6B23",datetime:"2\u4E2A\u534A\u5C0F\u65F6\u4E4B\u524D",content:"\u6536\u85CF\u4E86\u4F60\u7684\u6587\u7AE0",avatar:"https://s1.ax1x.com/2022/06/14/XhtSwF.jpg"}];return(n,o)=>{const l=d("a-tab-pane"),a=d("a-tabs"),i=d("a-avatar"),c=d("a-comment");return h(),F("div",bt,[s(a,{"default-active-key":"1"},{default:r(()=>[s(l,{key:"1"},{title:r(()=>[St]),_:1}),s(l,{key:"2"},{title:r(()=>[kt]),_:1}),s(l,{key:"3"},{title:r(()=>[Ct]),_:1})]),_:1}),S("section",null,[(h(),F(E,null,x(t,(u,m)=>s(c,{key:m,author:u.name,content:u.content,datetime:u.datetime},{actions:r(()=>[]),avatar:r(()=>[s(i,null,{default:r(()=>[S("img",{src:u.avatar},null,8,$t)]),_:2},1024)]),_:2},1032,["author","content","datetime"])),64))])])}}});const Et=B(Ft,[["__scopeId","data-v-433a0fee"]]),ce=e=>(ie("data-v-dc9d9ceb"),e=e(),le(),e),At=ce(()=>S("img",{src:Te},null,-1)),xt=ce(()=>S("span",{class:"gi_hover system-name"},"Admin Pro",-1)),Ht=[At,xt],Bt=["src"],Dt={class:"username"},Tt={class:"doption-icon",style:{background:"rgba(var(--primary-6))"}},Lt=w("\u4E2A\u4EBA\u4E2D\u5FC3"),Mt={class:"doption-icon",style:{background:"rgba(var(--success-6))"}},zt=w("\u9879\u76EE\u5730\u5740"),It={class:"doption-icon",style:{background:"rgba(var(--warning-6))"}},Nt=w("\u9000\u51FA\u767B\u5F55"),Rt=v({name:"Header"}),Ot=v({...Rt,setup(e){const t=V();R();const n=Fe(),{isFullScreen:o,onToggleFullScreen:l}=Re(),a=T(!1),i=()=>{t.push("/")},c=()=>{t.push("/system/user-center")},u=()=>{Ee.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",hideCancel:!1,onOk:()=>{n.logout(),t.replace("/login")}})},m=()=>{window.open("https://gitee.com/lin0716/gi-demo")};return(_,g)=>{const y=d("icon-settings"),k=d("a-button"),$=d("a-tooltip"),C=d("icon-notification"),b=d("a-badge"),I=d("a-popover"),O=d("icon-fullscreen"),D=d("icon-fullscreen-exit"),ue=De,de=d("a-avatar"),he=d("icon-down"),pe=d("a-row"),_e=d("icon-user"),j=d("a-doption"),me=d("icon-github"),fe=d("a-divider"),ge=d("icon-export"),ve=d("a-dropdown"),ye=d("a-space"),be=d("a-layout-header");return h(),p(be,null,{default:r(()=>[S("section",{class:"system-logo",onClick:i},Ht),s(ye,{class:"system-head",size:"medium"},{default:r(()=>[s($,{content:"\u9879\u76EE\u914D\u7F6E",position:"bl"},{default:r(()=>[s(k,{size:"mini",class:"gi_hover_btn",onClick:g[0]||(g[0]=Z=>a.value=!a.value)},{icon:r(()=>[s(y,{size:18})]),_:1})]),_:1}),s(I,{position:"br",trigger:"click"},{content:r(()=>[s(Et)]),default:r(()=>[s(b,{count:9,dot:""},{default:r(()=>[s(k,{size:"mini",class:"gi_hover_btn"},{icon:r(()=>[s(C,{size:18})]),_:1})]),_:1})]),_:1}),s($,{content:"\u5168\u5C4F\u5207\u6362",position:"bottom"},{default:r(()=>[s(k,{size:"mini",class:"gi_hover_btn",onClick:f(l)},{icon:r(()=>[f(o)?(h(),p(D,{key:1,size:18})):(h(),p(O,{key:0,size:18}))]),_:1},8,["onClick"])]),_:1}),s($,{content:"\u4E3B\u9898\u5207\u6362",position:"bottom"},{default:r(()=>[s(ue)]),_:1}),s(ve,{trigger:"hover"},{content:r(()=>[s(j,{onClick:c},{icon:r(()=>[S("span",Tt,[s(_e)])]),default:r(()=>[Lt]),_:1}),s(j,{onClick:m},{icon:r(()=>[S("span",Mt,[s(me)])]),default:r(()=>[zt]),_:1}),s(fe,{style:{margin:"0"}}),s(j,{onClick:u},{icon:r(()=>[S("span",It,[s(ge)])]),default:r(()=>[Nt]),_:1})]),default:r(()=>[s(pe,{align:"center",class:"user"},{default:r(()=>[s(de,{size:32},{default:r(()=>[S("img",{src:f(n).userInfo.avatar},null,8,Bt)]),_:1}),S("span",Dt,M(f(n).userName),1),s(he)]),_:1})]),_:1})]),_:1}),s(yt,{modelValue:a.value,"onUpdate:modelValue":g[1]||(g[1]=Z=>a.value=Z)},null,8,["modelValue"])]),_:1})}}});const jt=B(Ot,[["__scopeId","data-v-dc9d9ceb"]]),Pt=v({name:"Main"}),Vt=v({...Pt,setup(e){const t=re(),n=R();return(o,l)=>{const a=d("router-view"),i=d("a-layout");return h(),p(i,{class:"main"},{default:r(()=>[s(a,null,{default:r(({Component:c,route:u})=>[s(Ae,{name:f(n).transitionName,mode:"out-in",appear:""},{default:r(()=>[(h(),p(xe,{include:f(t).cacheList},[(h(),p(He(c),{key:u.path}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})]),_:1})}}});const Kt=B(Vt,[["__scopeId","data-v-0832c025"]]),Wt={key:0,class:"nav-tab"},Ut=w("\u5173\u95ED\u5F53\u524D\u9875\u7B7E"),Gt=w("\u5173\u95ED\u6240\u6709\u9875\u7B7E"),Xt=v({name:"NavTab"}),qt=v({...Xt,setup(e){const t=te(),n=V(),o=re(),l=R();ne(()=>{a()}),oe(()=>t.path,()=>{a()});const a=()=>{o.addTagItem({name:t.meta.title||"\u672A\u547D\u540D",path:t.path,componentName:t.name}),t.meta.keepAlive&&o.addCacheItem(String(t.name))},i=m=>{n.push({path:m.toString()})},c=m=>{const _=o.tagList.find(g=>g.path===m);o.removeTagItem(m.toString()),_!=null&&_.componentName&&o.removeCacheItem(_.componentName)},u=()=>{o.clearTagList()};return(m,_)=>{const g=d("a-tab-pane"),y=d("icon-settings"),k=d("a-button"),$=d("icon-minus-circle-fill"),C=d("a-doption"),b=d("icon-close-circle-fill"),I=d("a-dropdown"),O=d("a-tabs");return f(l).tab?(h(),F("div",Wt,[s(O,{editable:"","hide-content":"",size:"medium",type:f(l).tabMode,"active-key":f(t).path,onTabClick:i,onDelete:c},{extra:r(()=>[s(I,{trigger:"hover"},{content:r(()=>[s(C,{onClick:_[0]||(_[0]=D=>c(f(t).path))},{icon:r(()=>[s($,{size:20,style:{color:"#ff7d00"}})]),default:r(()=>[Ut]),_:1}),s(C,{onClick:u},{icon:r(()=>[s(b,{size:20,style:{color:"#f53f3f"}})]),default:r(()=>[Gt]),_:1})]),default:r(()=>[s(k,{type:"primary",class:"extra-btn"},{icon:r(()=>[s(y,{size:18})]),_:1})]),_:1})]),default:r(()=>[(h(!0),F(E,null,x(f(o).tagList,D=>(h(),p(g,{key:D.path,title:D.name,closable:D.path!=="/home"},null,8,["title","closable"]))),128))]),_:1},8,["type","active-key"])])):A("",!0)}}});const Yt=B(qt,[["__scopeId","data-v-12cc9161"]]),Jt=v({__name:"index",setup(e){return(t,n)=>{const o=d("a-layout");return h(),p(o,{class:"layout"},{default:r(()=>[s(Ne),s(o,null,{default:r(()=>[s(jt),s(Yt),s(Kt)]),_:1})]),_:1})}}});const so=B(Jt,[["__scopeId","data-v-7766801a"]]);export{so as default};
