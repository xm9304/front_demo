import{S as t,r as e,eW as s}from"./index-7473d946.js";function n(){return t.get("/system/dept")}function a(e){return t.get("/system/dept/detail",e)}function r(e){return t.post("/system/dept/save",e)}function i(t){const a=e(!1),r=e([]);return{deptList:r,getDeptList:async()=>{try{a.value=!0;const e=await n();r.value=s.mapTree(e.data,(t=>{var e;return(null==(e=t.children)?void 0:e.length)&&(t.children=t.children.filter((t=>1===t.status))),t})),(null==t?void 0:t.onSuccess)&&t.onSuccess()}finally{a.value=!1}},loading:a}}export{n as a,a as g,r as s,i as u};
