import{d as e,r as t,e as a,J as l,f as i,o as s,t as o,w as n,g as d,i as r,h as m,v as u,k as c,s as k}from"./index-7473d946.js";const h={class:"tree-box"},y=k(e({__name:"index",props:{fileInfo:{},onClose:{}},setup(e){const k=e,y=t(!1),p=a({path:"/"}),f=t([]);f.value=[{title:"图片文件夹",key:"0-0",children:[{title:"图片文件夹1",key:"0-0-0",children:[{title:"图片文件夹1-1",key:"0-0-0-0"},{title:"图片文件夹1-2",key:"0-0-0-1"},{title:"图片文件夹1-3",key:"0-0-0-2"}]},{title:"新建文件夹",key:"0-0-1"},{title:"视频文件夹",key:"0-0-2",children:[{title:"视频文件夹1",key:"0-0-2-0"},{title:"视频文件夹2",key:"0-0-2-1"}]}]},{title:"音频文件夹",key:"0-1"},{title:"音频文件夹1",key:"0-2",children:[{title:"音频文件夹1-1",key:"0-2-0",children:[{title:"音频文件夹1-1-1",key:"0-2-0-0"},{title:"音频文件夹1-1-2",key:"0-2-0-1"}]}]}],l((()=>{y.value=!0}));const v=(e,t)=>{p.path=`/${t.selectedNodes[0].title}`},w=()=>{y.value=!1,k.onClose&&k.onClose()},_=t(null),b=async()=>{var e;return!(await(null==(e=_.value)?void 0:e.validate()))&&await new Promise((e=>setTimeout((()=>{e(!0)}),2e3)))};return(e,t)=>{const a=i("a-input"),l=i("a-form-item"),k=i("a-form"),x=i("icon-drive-file"),z=i("a-tree"),g=i("a-modal");return s(),o(g,{title:"移动到",width:"90%",visible:r(y),"onUpdate:visible":t[1]||(t[1]=e=>c(y)?y.value=e:null),"modal-animation-name":"el-dialog","mask-animation-name":"el-mask","modal-style":{maxWidth:"500px"},onClose:w,onBeforeOk:b},{default:n((()=>[d(k,{ref_key:"FormRef",ref:_,model:r(p),style:{width:"100%"},"auto-label-width":""},{default:n((()=>[d(l,{field:"path",label:"目标路径",rules:[{required:!0,message:"请输入目标路径"}]},{default:n((()=>[d(a,{modelValue:r(p).path,"onUpdate:modelValue":t[0]||(t[0]=e=>r(p).path=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),m("section",h,[d(z,{"show-line":"",size:"mini",blockNode:"",data:r(f),onSelect:v},{"switcher-icon":n(((e,{expanded:t})=>[e.children&&t?(s(),o(u,{key:0,class:"switcher-icon",name:"plus-square",size:16})):e.children&&!t?(s(),o(u,{key:1,class:"switcher-icon",name:"minus-square",size:16,style:{transform:"rotate(0deg)"}})):(s(),o(x,{key:2,size:16}))])),icon:n((()=>[d(u,{name:"menu-zip",size:16})])),_:1},8,["data"])])])),_:1},8,["visible"])}}}),[["__scopeId","data-v-88f8995d"]]);export{y as default};