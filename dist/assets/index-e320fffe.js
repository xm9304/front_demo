import{_ as b}from"./index-15ab2ac0.js";import{d as g,h,a as i,o as n,i as a,b as t,w as e,F as u,q as d,c as _,l as v,t as m,_ as y}from"./index-ad0224cd.js";const k="gi-demo",j="1.0.0",w={dev:"vite --host",build:"vite build","build-tsc":"vue-tsc --noEmit && vite build",preview:"vite preview --port 5050",typecheck:"vue-tsc --noEmit",lint:"eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"},D={"@amap/amap-jsapi-loader":"^1.0.1","@arco-design/color":"^0.4.0","@arco-themes/vue-gi-demo":"0.0.28","@vueuse/components":"^9.9.0","@vueuse/core":"^9.9.0","@wangeditor/editor":"^5.1.1","@wangeditor/editor-for-vue":"^5.1.12",axios:"^0.27.2",dayjs:"^1.11.4",echarts:"^5.3.3",lodash:"^4.17.21",mitt:"^3.0.0",mockjs:"^1.1.0",nprogress:"^0.2.0",pinia:"^2.0.16","pinia-plugin-persistedstate":"^3.1.0",qs:"^6.11.1",screenfull:"^6.0.1","v-viewer":"^3.0.10",vue:"^3.2.45","vue-color-kit":"^1.0.5","vue-echarts":"^6.3.3","vue-router":"^4.1.6","xe-utils":"^3.5.7",xgplayer:"^2.31.6","xgplayer-music":"^2.3.2"},B={"@arco-design/web-vue":"^2.46.0","@rushstack/eslint-patch":"^1.2.0","@types/lodash":"^4.14.192","@types/node":"^18.11.18","@vitejs/plugin-vue":"^4.0.0","@vitejs/plugin-vue-jsx":"^3.0.0","@vue/eslint-config-prettier":"^7.0.0","@vue/eslint-config-typescript":"^11.0.3","@vue/tsconfig":"^0.1.3",eslint:"^8.5.0","eslint-plugin-vue":"^9.0.0",less:"^4.1.3","less-loader":"^11.0.0",prettier:"^2.8.1",sass:"^1.57.1","sass-loader":"^13.2.0",typescript:"~4.9.4","unplugin-vue-components":"^0.22.12",vite:"^4.0.3","vite-plugin-mock":"^2.9.6","vite-plugin-style-import":"^2.0.0","vite-plugin-svg-icons":"^2.0.1","vite-plugin-vue-setup-extend":"^0.4.0","vue-tsc":"^0.38.8"},C={name:k,version:j,scripts:w,dependencies:D,devDependencies:B},E={class:"about"},F=g({name:"About"}),q=g({...F,setup(N){const c=h(C);return(V,z)=>{const l=i("a-tag"),r=i("a-descriptions-item"),p=i("a-descriptions"),f=b,x=i("a-space");return n(),a("div",E,[t(x,{direction:"vertical",size:20,fill:"",class:"content"},{default:e(()=>[t(p,{title:"dependencies",bordered:"",column:{xs:1,md:2,lg:3}},{default:e(()=>[(n(!0),a(u,null,d(c.value.dependencies,(o,s)=>(n(),_(r,{label:s,key:s},{default:e(()=>[t(l,null,{default:e(()=>[v(m(o),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1}),t(p,{title:"devDependencies",bordered:"",column:{xs:1,md:2,lg:3}},{default:e(()=>[(n(!0),a(u,null,d(c.value.devDependencies,(o,s)=>(n(),_(r,{label:s,key:s},{default:e(()=>[t(l,null,{default:e(()=>[v(m(o),1)]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1}),t(f)]),_:1})])}}});const I=y(q,[["__scopeId","data-v-cfa910a7"]]);export{I as default};