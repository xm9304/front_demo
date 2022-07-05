var V=Object.defineProperty,J=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var f=(t,e,u)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u,B=(t,e)=>{for(var u in e||(e={}))q.call(e,u)&&f(t,u,e[u]);if(b)for(var u of b(e))Q.call(e,u)&&f(t,u,e[u]);return t},C=(t,e)=>J(t,G(e));import{_,d as m,o as a,c,a as o,y as p,s as U,E as w,Y,r as O,g as i,b as r,w as s,F as g,z as v,h as y,p as R,e as T,i as A,l as E}from"./index.fe796c6c.js";const K={class:"group-box"},L=["id"],P={class:"list"},W=m({__name:"GroupBox",props:{title:{type:String,default:""},id:{type:String,default:""}},setup(t){return(e,u)=>(a(),c("div",K,[o("section",{class:"header",id:t.id},p(t.title),9,L),o("section",P,[U(e.$slots,"default",{},void 0,!0)])]))}});var H=_(W,[["__scopeId","data-v-cbd19912"]]);const M={class:"icon"},X=["src"],Z={class:"content"},tt={class:"name"},et={key:0,class:"desc gi_line_2"},ut=m({__name:"NavItem",props:{mode:{type:Number,default:1},icon:{type:String},name:{type:String},desc:{type:String}},emits:["click"],setup(t,{emit:e}){const u=()=>{e("click")};return(F,l)=>t.icon?(a(),c("div",{key:0,class:Y(["nav-item",`mode-${t.mode}`]),onClick:u},[o("div",M,[o("img",{src:t.icon},null,8,X)]),o("div",Z,[o("div",tt,p(t.name),1),t.desc?(a(),c("div",et,p(t.desc),1)):w("",!0)])],2)):w("",!0)}});var at=_(ut,[["__scopeId","data-v-c5c05c78"]]),D=[{id:"001",title:"\u5E38\u7528\u94FE\u63A5",mode:1,list:[{src:"https://ydlunacommon-cdn.nosdn.127.net/de788a9e846abf048e30d0f176b800eb.png",name:"\u6709\u9053\u7FFB\u8BD1",path:"https://fanyi.youdao.com/?keyfrom=baiduapp"},{src:"https://fanyi.baidu.com/favicon.ico",name:"\u767E\u5EA6\u7FFB\u8BD1",path:"https://fanyi.baidu.com/"},{src:"https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",name:"\u963F\u91CC\u5DF4\u5DF4\u56FE\u6807\u5E93",path:"https://www.iconfont.cn/"},{src:"http://tooool.org/static/img/index/study/cn.ico",name:"\u83DC\u9E1FJSON\u67E5\u770B",path:"https://c.runoob.com/front-end/53/"},{src:"https://c.runoob.com/wp-content/uploads/2022/04/mayun_logo.png",name:"Gitee",path:"https://gitee.com/"},{src:"https://s1.ax1x.com/2022/07/04/jJeAIK.png",name:"Github",path:"https://github.com/"}]},{id:"002",title:"\u7EC4\u4EF6\u5E93",mode:2,list:[{src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image",name:"Arco Design",path:"https://arco.design/vue/component/button",desc:"ArcoDesign \u7684\u76EE\u6807, \u5373\u901A\u8FC7\u901A\u7528\u7684\u8BBE\u8BA1\u7CFB\u7EDF\u53BB\u89E3\u51B3\u4EA7\u54C1\u4E2D\u7684\u4F53\u9A8C\u95EE\u9898, \u5E76\u4E3A\u4EA7\u54C1\u8BBE\u8BA1\u63D0\u4F9B\u6307\u5BFC\u539F\u5219\u89E3\u51B3\u4E1A\u52A1\u95EE\u9898\uFF0C\u540C\u65F6\u5B83\u80FD\u591F\u4FC3\u8FDB\u8BBE\u8BA1\u90E8\u95E8\u548C\u7814\u53D1\u90E8\u95E8\u4E4B\u95F4\u534F\u4F5C, \u6210\u4E3A\u5F00\u53D1\u8005\u4E4B\u95F4\u6C9F\u901A\u7684\u8BED\u8A00\u3002"},{src:"https://element-plus.gitee.io/images/element-plus-logo.svg",name:"Element Plus",path:"https://element-plus.gitee.io/zh-CN/component/button.html",desc:"\u57FA\u4E8E Vue 3\uFF0C\u9762\u5411\u8BBE\u8BA1\u5E08\u548C\u5F00\u53D1\u8005\u7684\u7EC4\u4EF6\u5E93\u3002"},{src:"https://www.naiveui.com/assets/naivelogo.93278402.svg",name:"Naive UI",path:"https://www.naiveui.com/zh-CN/os-theme/components/button",desc:"\u6709\u8D85\u8FC7 80 \u4E2A\u7EC4\u4EF6\uFF0C\u5E0C\u671B\u80FD\u5E2E\u4F60\u5C11\u5199\u70B9\u4EE3\u7801\u3002\u987A\u4FBF\u4E00\u63D0\uFF0C\u5B83\u4EEC\u5168\u90FD\u53EF\u4EE5 treeshaking\u3002"},{src:"https://aliyuncdn.antdv.com/v2/assets/logo.1ef800a8.svg",name:"Ant Design Vue",path:"https://www.antdv.com/components/button-cn",desc:"\u4F17\u6240\u5468\u77E5\uFF0CAnt Design \u4F5C\u4E3A\u4E00\u95E8\u8BBE\u8BA1\u8BED\u8A00\u9762\u4E16\uFF0C\u7ECF\u5386\u8FC7\u591A\u5E74\u7684\u8FED\u4EE3\u548C\u79EF\u7D2F\uFF0C\u5B83\u5BF9 UI \u7684\u8BBE\u8BA1\u601D\u60F3\u5DF2\u7ECF\u6210\u4E3A\u4E00\u5957\u4E8B\u5B9E\u6807\u51C6\uFF0C\u53D7\u5230\u4F17\u591A\u524D\u7AEF\u5F00\u53D1\u8005\u53CA\u4F01\u4E1A\u7684\u8FFD\u6367\u548C\u559C\u7231\uFF0C\u4E5F\u662F React \u5F00\u53D1\u8005\u624B\u4E2D\u7684\u795E\u5175\u5229\u5668\u3002\u5E0C\u671B ant-design-vue \u80FD\u591F\u8BA9 Vue \u5F00\u53D1\u8005\u4E5F\u4EAB\u53D7\u5230 Ant Design \u7684\u4F18\u79C0\u8BBE\u8BA1\u3002"}]},{id:"003",title:"\u6280\u672F\u793E\u533A",mode:2,list:[{src:"https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",name:"\u6398\u91D1",path:"https://juejin.cn/frontend",desc:"\u4E00\u4E2A\u5E2E\u52A9\u5F00\u53D1\u8005\u6210\u957F\u7684\u793E\u533A"},{src:"https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.a53ae37b.png",name:"\u77E5\u4E4E",path:"https://www.zhihu.com/signin?next=%2F",desc:"\u6709\u95EE\u9898\uFF0C\u5C31\u6709\u7B54\u6848"}]},{id:"004",title:"\u97F3\u4E50\u7F51",mode:2,list:[{src:"https://jsin.vvvdj.com/staticpc/favicon.ico",name:"DJ\u6E05\u98CE",path:"https://www.vvvdj.com/",desc:"DJ\u6E05\u98CE"},{src:"https://s1.ax1x.com/2022/07/04/jJe6WF.png",name:"\u9177\u72D7\u97F3\u4E50",path:"https://www.kugou.com/",desc:"\u9177\u72D7\u97F3\u4E50"},{src:"https://s1.music.126.net/style/favicon.ico?v20180823",name:"\u7F51\u6613\u4E91\u97F3\u4E50",path:"https://music.163.com/",desc:"\u7F51\u6613\u4E91\u97F3\u4E50"},{src:"https://y.qq.com/favicon.ico",name:"QQ\u97F3\u4E50",path:"https://y.qq.com/",desc:"QQ\u4E91\u97F3\u4E50"}]},{id:"010",title:"\u5DE5\u5177",mode:1,list:[{src:"https://c.runoob.com/wp-content/uploads/2022/06/code2image.png",name:"\u4EE3\u7801\u751F\u6210\u56FE\u7247",path:"https://c.runoob.com/front-end/7433/"},{src:"https://c.runoob.com/wp-content/uploads/2022/05/2530794_accounting_calculate_calculation_calculator_general_icon.png",name:"\u5728\u7EBF\u8BA1\u7B97\u5668",path:"https://c.runoob.com/front-end/6904/"},{src:"https://bizaladdin-image.baidu.com/0/pic/2115127911_661689904_666518915.jpg",name:"\u641C\u72D7\u56FE\u7247",path:"https://pic.sogou.com/"}]}];const ot=t=>(R("data-v-4e3e491a"),t=t(),T(),t),nt={class:"navigation"},ct={class:"left",id:"leftId"},it={class:"search-box"},st=ot(()=>o("img",{class:"baidu-logo",src:"https://mbdp01.bdstatic.com/static/landing-pc/img/logo_top.79fdb8c2.png"},null,-1)),dt=A("\u641C\u7D22"),rt={class:"right"},lt=m({name:"Navigation"}),pt=m(C(B({},lt),{setup(t){const e=O(""),u=()=>{window.open(`http://www.baidu.com/s?wd=${e.value}`)},F=l=>{l.path&&window.open(l.path)};return(l,x)=>{const k=i("a-input"),z=i("a-button"),$=i("a-input-group"),j=i("a-row"),I=i("a-anchor-link"),N=i("a-anchor");return a(),c("div",nt,[o("section",ct,[o("div",it,[r(j,{justify:"center",align:"center"},{default:s(()=>[st,r($,null,{default:s(()=>[r(k,{modelValue:e.value,"onUpdate:modelValue":x[0]||(x[0]=n=>e.value=n),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",size:"large","allow-clear":"",style:{width:"430px"}},null,8,["modelValue"]),r(z,{type:"primary",size:"large",onClick:u},{default:s(()=>[dt]),_:1})]),_:1})]),_:1})]),(a(!0),c(g,null,v(y(D),(n,h)=>(a(),E(H,{key:h,title:n.title,id:n.id},{default:s(()=>[(a(!0),c(g,null,v(n.list,(d,S)=>(a(),E(at,{key:d.name+S,mode:n.mode,icon:d.src,name:d.name,desc:d.desc,onClick:mt=>F(d)},null,8,["mode","icon","name","desc","onClick"]))),128))]),_:2},1032,["title","id"]))),128))]),o("section",rt,[r(N,{"line-less":"","change-hash":!1,"scroll-container":"#leftId"},{default:s(()=>[(a(!0),c(g,null,v(y(D),(n,h)=>(a(),E(I,{key:h,href:`#${n.id}`},{default:s(()=>[A(p(n.title),1)]),_:2},1032,["href"]))),128))]),_:1})])])}}}));var vt=_(pt,[["__scopeId","data-v-4e3e491a"]]);export{vt as default};
