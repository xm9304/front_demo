import{_ as e}from"./index-6219d61a.js";import{d as l,B as a,eX as d,eW as t,r as u,eY as o,f as n,o as s,t as i,w as r,g as m,i as c,l as p,R as f,h,y as x,k as V,eZ as y,M as v}from"./index-25201ada.js";import{g as b,s as k}from"./menu-d2c91cdc.js";import{u as _}from"./useForm-9c6bbad0.js";const g=h("span",null,"路由名称由系统自动生成：",-1),w=l({__name:"AddMenuModal",props:{menus:{default:()=>[]}},emits:["save-success"],setup(l,{expose:w,emit:U}){const I=l,M=U,q=a((()=>{const e=JSON.parse(JSON.stringify(I.menus)),l=d(e,(e=>[1,2].includes(e.type)));return t.mapTree(l,(e=>({id:e.id,title:e.title,children:e.children})))})),S=u(),T=u(""),j=u(!1),A=a((()=>!!T.value)),F=a((()=>A.value?"编辑菜单":"新增菜单")),N=u(!1),{form:O,resetForm:B}=_({type:1,icon:"",svgIcon:"",title:"",sort:0,status:1,path:"",component:"",keepAlive:!1,hidden:!0,parentId:"",redirect:"",breadcrumb:!0,showInTabs:!0,alwaysShow:!1,permission:""}),C=a((()=>o(O.path))),J={parentId:[{required:!0,message:"请选择上级菜单"}],title:[{required:!0,message:"请输入菜单标题"}],path:[{required:!0,message:"请输入路由路径"}],component:[{required:!0,message:"请输入组件路径"}],permission:[{required:!0,message:"请输入权限标识"}]},R=a((()=>{if([1,2].includes(O.type)){const{title:e,path:l}=J;return{title:e,path:l}}if(3===O.type){const{parentId:e,title:l,permission:a}=J;return{parentId:e,title:l,permission:a}}})),W=()=>{var e;null==(e=S.value)||e.clearValidate()},z=()=>{var e;null==(e=S.value)||e.resetFields(),B()};w({add:()=>{T.value="",j.value=!0},edit:async e=>{T.value=e;const l=await b({id:e});Object.assign(O,l.data),y(O.path)&&(N.value=!0),j.value=!0}});const E=async()=>{var e;try{if(await(null==(e=S.value)?void 0:e.validate()))return!1;return!!(await k(O)).data&&(v.success("模拟保存成功"),M("save-success"),!0)}catch(l){return!1}};return(l,a)=>{const d=n("a-radio"),t=n("a-radio-group"),u=n("a-form-item"),o=n("a-tree-select"),y=e,v=n("icon-question-circle-fill"),b=n("a-tooltip"),k=n("a-col"),_=n("a-row"),w=n("a-input"),U=n("a-tag"),I=n("a-switch"),M=n("a-input-number"),T=n("a-form"),B=n("a-modal");return s(),i(B,{visible:c(j),"onUpdate:visible":a[18]||(a[18]=e=>V(j)?j.value=e:null),title:c(F),width:"90%","modal-style":{maxWidth:"625px"},"mask-closable":!1,onBeforeOk:E,onClose:z},{default:r((()=>[m(T,{ref_key:"FormRef",ref:S,model:c(O),rules:c(R),"auto-label-width":""},{default:r((()=>[m(u,{label:"菜单类型",field:"type"},{default:r((()=>[m(t,{modelValue:c(O).type,"onUpdate:modelValue":a[0]||(a[0]=e=>c(O).type=e),type:"button",disabled:c(A),onChange:W},{default:r((()=>[m(d,{value:1},{default:r((()=>[p("目录")])),_:1}),m(d,{value:2},{default:r((()=>[p("菜单")])),_:1}),m(d,{value:3},{default:r((()=>[p("按钮")])),_:1})])),_:1},8,["modelValue","disabled"])])),_:1}),m(u,{label:"上级菜单",field:"parentId"},{default:r((()=>[m(o,{modelValue:c(O).parentId,"onUpdate:modelValue":a[1]||(a[1]=e=>c(O).parentId=e),placeholder:"请选择上级菜单","allow-clear":"","allow-search":"",disabled:c(A),data:c(q),fieldNames:{key:"id",title:"title",children:"children"}},null,8,["modelValue","disabled","data"])])),_:1}),[1,2].includes(c(O).type)?(s(),i(_,{key:0,gutter:16},{default:r((()=>[m(k,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12},{default:r((()=>[m(u,{label:"自定义图标",field:"svgIcon"},{default:r((()=>[m(y,{modelValue:c(O).svgIcon,"onUpdate:modelValue":a[2]||(a[2]=e=>c(O).svgIcon=e),type:"custom"},null,8,["modelValue"]),m(b,{content:"优先显示"},{default:r((()=>[m(v,{size:18,style:{color:"rgba(var(--warning-6))","margin-left":"8px"}})])),_:1})])),_:1})])),_:1}),m(k,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12},{default:r((()=>[m(u,{label:"菜单图标",field:"icon"},{default:r((()=>[m(y,{modelValue:c(O).icon,"onUpdate:modelValue":a[3]||(a[3]=e=>c(O).icon=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})):f("",!0),m(u,{label:"菜单标题",field:"title"},{default:r((()=>[m(w,{modelValue:c(O).title,"onUpdate:modelValue":a[4]||(a[4]=e=>c(O).title=e),modelModifiers:{trim:!0},placeholder:"请输入菜单标题","allow-clear":"","max-length":10},null,8,["modelValue"])])),_:1}),[1,2].includes(c(O).type)?(s(),i(u,{key:1,label:"路由路径",field:"path"},{extra:r((()=>[h("div",null,[g,c(C)?(s(),i(U,{key:0},{default:r((()=>[p(x(c(C)),1)])),_:1})):f("",!0)])])),default:r((()=>[m(w,{modelValue:c(O).path,"onUpdate:modelValue":a[5]||(a[5]=e=>c(O).path=e),modelModifiers:{trim:!0},placeholder:"请输入路由路径","allow-clear":"","max-length":50},null,8,["modelValue"])])),_:1})):f("",!0),[1,2].includes(c(O).type)&&!c(N)?(s(),i(u,{key:2,label:"重定向",field:"redirect"},{default:r((()=>[m(w,{modelValue:c(O).redirect,"onUpdate:modelValue":a[6]||(a[6]=e=>c(O).redirect=e),modelModifiers:{trim:!0},placeholder:"请输入重定向地址","allow-clear":"","max-length":50},null,8,["modelValue"])])),_:1})):f("",!0),[1,2].includes(c(O).type)?(s(),i(u,{key:3,label:"是否外链",field:"isExternalUrl"},{default:r((()=>[m(t,{modelValue:c(N),"onUpdate:modelValue":a[7]||(a[7]=e=>V(N)?N.value=e:null),type:"button"},{default:r((()=>[m(d,{value:!0},{default:r((()=>[p("是")])),_:1}),m(d,{value:!1},{default:r((()=>[p("否")])),_:1})])),_:1},8,["modelValue"])])),_:1})):f("",!0),2===c(O).type?(s(),i(u,{key:4,label:"组件路径",field:"component"},{default:r((()=>[c(N)?(s(),i(w,{key:0,modelValue:c(O).component,"onUpdate:modelValue":a[8]||(a[8]=e=>c(O).component=e),modelModifiers:{trim:!0},placeholder:"请输入组件路径","allow-clear":"","max-length":50},null,8,["modelValue"])):(s(),i(w,{key:1,modelValue:c(O).component,"onUpdate:modelValue":a[9]||(a[9]=e=>c(O).component=e),modelModifiers:{trim:!0},placeholder:"请输入组件路径","allow-clear":"","max-length":50},{prepend:r((()=>[p("@/views/")])),append:r((()=>[p(".vue")])),_:1},8,["modelValue"]))])),_:1})):f("",!0),[1,2].includes(c(O).type)?(s(),i(_,{key:5,gutter:16},{default:r((()=>[m(k,{xs:12,sm:12,md:8,lg:8,xl:8,xxl:8},{default:r((()=>[m(u,{label:"状态",field:"status"},{default:r((()=>[m(I,{type:"round",modelValue:c(O).status,"onUpdate:modelValue":a[10]||(a[10]=e=>c(O).status=e),"checked-value":1,"unchecked-value":0,"checked-text":"启用","unchecked-text":"禁用"},null,8,["modelValue"])])),_:1})])),_:1}),m(k,{xs:12,sm:12,md:8,lg:8,xl:8,xxl:8},{default:r((()=>[m(u,{label:"是否隐藏",field:"hidden"},{default:r((()=>[m(I,{type:"round",modelValue:c(O).hidden,"onUpdate:modelValue":a[11]||(a[11]=e=>c(O).hidden=e),"checked-value":!0,"unchecked-value":!1,"checked-text":"是","unchecked-text":"否"},null,8,["modelValue"])])),_:1})])),_:1}),m(k,{xs:12,sm:12,md:8,lg:8,xl:8,xxl:8},{default:r((()=>[m(u,{label:"是否缓存",field:"keepAlive"},{default:r((()=>[m(I,{type:"round",modelValue:c(O).keepAlive,"onUpdate:modelValue":a[12]||(a[12]=e=>c(O).keepAlive=e),"checked-value":!0,"unchecked-value":!1,"checked-text":"是","unchecked-text":"否"},null,8,["modelValue"])])),_:1})])),_:1}),m(k,{xs:12,sm:12,md:8,lg:8,xl:8,xxl:8},{default:r((()=>[m(u,{label:"面包屑",field:"breadcrumb"},{default:r((()=>[m(I,{type:"round",modelValue:c(O).breadcrumb,"onUpdate:modelValue":a[13]||(a[13]=e=>c(O).breadcrumb=e),"checked-value":!0,"unchecked-value":!1,"checked-text":"显示","unchecked-text":"隐藏"},null,8,["modelValue"])])),_:1})])),_:1}),m(k,{xs:12,sm:12,md:8,lg:8,xl:8,xxl:8},{default:r((()=>[1===c(O).type?(s(),i(u,{key:0,label:"总是显示",field:"alwaysShow"},{default:r((()=>[m(I,{type:"round",modelValue:c(O).alwaysShow,"onUpdate:modelValue":a[14]||(a[14]=e=>c(O).alwaysShow=e),"checked-value":!0,"unchecked-value":!1,"checked-text":"显示","unchecked-text":"隐藏"},null,8,["modelValue"])])),_:1})):f("",!0),2===c(O).type?(s(),i(u,{key:1,label:"页签显示",field:"showInTabs"},{default:r((()=>[m(I,{type:"round",modelValue:c(O).showInTabs,"onUpdate:modelValue":a[15]||(a[15]=e=>c(O).showInTabs=e),"checked-value":!0,"unchecked-value":!1,"checked-text":"显示","unchecked-text":"隐藏"},null,8,["modelValue"])])),_:1})):f("",!0)])),_:1})])),_:1})):f("",!0),3===c(O).type?(s(),i(u,{key:6,label:"权限标识",field:"permission"},{default:r((()=>[m(w,{modelValue:c(O).permission,"onUpdate:modelValue":a[16]||(a[16]=e=>c(O).permission=e),modelModifiers:{trim:!0},placeholder:"sys:btn:add","allow-clear":"","max-length":20},null,8,["modelValue"])])),_:1})):f("",!0),m(u,{label:"菜单排序",field:"sort"},{default:r((()=>[m(M,{modelValue:c(O).sort,"onUpdate:modelValue":a[17]||(a[17]=e=>c(O).sort=e),placeholder:"请输入菜单排序",min:1,mode:"button",style:{width:"120px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["visible","title"])}}});export{w as _};