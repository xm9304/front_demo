import{V as s,y as r}from"./vendor.105aae79.js";import{r as u}from"./index.0a2ab5c5.js";const n=s({id:"App",state:()=>({systemName:"Admin\u7BA1\u7406\u7CFB\u7EDF",activePath:window.sessionStorage.getItem("ActivePath")||"/home",menuList:[{icon:"menu-work",id:"GZT",name:"\u5DE5\u4F5C\u53F0",path:"/home"},{icon:"menu-indicator",id:"ZBGL",name:"\u6307\u6807\u7BA1\u7406",path:"/indicator-manage"},{icon:"menu-file",id:"WJGL",name:"\u6587\u4EF6\u7BA1\u7406",path:"/file-manage"},{icon:"menu-form",id:"BDGL",name:"\u8868\u5355\u7BA1\u7406",path:"/form-manage"},{icon:"menu-user",id:"ZBGL",name:"\u4E2A\u4EBA\u4E2D\u5FC3",path:"/user"},{icon:"menu-page",id:"ERROR",name:"\u5F02\u5E38\u9875",children:[{id:"error403",name:"\u5F02\u5E38\u9875403",path:"/error-page/403"},{id:"error404",name:"\u5F02\u5E38\u9875404",path:"/error-page/404"},{id:"error500",name:"\u5F02\u5E38\u9875500",path:"/error-page/500"}]},{icon:"menu-test",id:"TEST",name:"\u6D4B\u8BD5\u9875",path:"/test"}]}),getters:{},actions:{setActivePath(e){this.activePath=e,window.sessionStorage.setItem("ActivePath",e)}}}),d=n(),a={name:"\u9996\u9875",path:"/home",componentName:"Home"},m=s({id:"NavTab",state:()=>({tabList:[a],cacheList:[]}),getters:{},actions:{addTabItem(e){["Login"].includes(e.componentName)||this.tabList.findIndex(o=>o.path===e.path)>=0||this.tabList.push(e)},addCacheItem(e){this.cacheList.includes(e)||this.cacheList.push(e)},removeTabItem(e){if(e===a.path)return;const t=this.tabList.findIndex(i=>i.path===e);if(t>=0){const i=u.currentRoute.value.path===this.tabList[t].path;this.tabList.splice(t,1),i&&(u.push({path:this.tabList[this.tabList.length-1].path}),d.setActivePath(this.tabList[this.tabList.length-1].path))}},removeCacheItem(e){const t=this.cacheList.findIndex(i=>i===e);t>=0&&this.cacheList.splice(t,1)},clearTabList(){this.tabList=[a],u.push(a.path)},clearCacheList(){this.cacheList=[]}}}),c=s({id:"Theme",state:()=>({theme:"light",themeColor:localStorage.getItem("ThemeColor")||"#1571FA",tab:{visible:!0,mode:"card",modeList:[{label:"\u5361\u7247",value:"card"},{label:"\u95F4\u9694\u5361\u7247",value:"card-gutter"},{label:"\u5706\u89D2",value:"rounded"}]},animate:{visible:!0,mode:"zoom-fade",modeList:[{label:"\u6ED1\u52A8",value:"fade-slide"},{label:"\u6D88\u9000",value:"fade"},{label:"\u5E95\u90E8\u6D88\u9000",value:"fade-bottom"},{label:"\u7F29\u653E\u6D88\u9000",value:"fade-scale"},{label:"\u6E10\u53D8",value:"zoom-fade"},{label:"\u95EA\u73B0",value:"zoom-out"}]}}),getters:{transitionName(){return this.animate.visible?this.animate.mode:""}},actions:{toggleTheme(e){e?(this.theme="dark",document.body.setAttribute("arco-theme","dark")):(this.theme="light",document.body.removeAttribute("arco-theme"))},setThemeColor(e){this.themeColor=e,localStorage.setItem("ThemeColor",e)},setTabVisible(e){this.tab.visible=e},setTabMode(e){this.tab.mode=e},setAnimateVisible(e){this.animate.visible=e},setAnimateMode(e){this.animate.mode=e}}}),b=s({id:"User",state:()=>({user:JSON.parse(localStorage.getItem("USER"))||{id:"admin123456",name:"admin"}}),getters:{userName(){return this.user.name}},actions:{setUser(e){const{id:t,name:i}=e;this.user={id:t,name:i},localStorage.setItem("USER",JSON.stringify(this.user))}}}),g=s({id:"File",state:()=>({viewMode:"grid",isBatchMode:!1,selectedFileList:JSON.parse(sessionStorage.getItem("FILE_LIST"))||[]}),getters:{selectedFileIdList(){return this.selectedFileList.map(e=>e.id)}},actions:{changeViewMode(){this.viewMode=this.viewMode==="grid"?"list":"grid"},addSelectedFileItem(e){if(this.selectedFileIdList.includes(e.id)){const t=this.selectedFileList.findIndex(i=>i.id===e.id);this.selectedFileList.splice(t,1),window.sessionStorage.setItem("FILE_LIST",JSON.stringify(this.selectedFileList))}else this.selectedFileList.push(e),window.sessionStorage.setItem("FILE_LIST",JSON.stringify(this.selectedFileList))}}});r();export{c as a,b,m as c,g as d,n as u};