import{S as t,U as e,r as s,eW as n}from"./index-e7b4405a.js";function a(){return t.get(`${e}/system/dept`)}function r(s){return t.get(`${e}/system/dept/detail`,s)}function i(s){return t.post(`${e}/system/dept/save`,s)}function u(t){const e=s(!1),r=s([]);return{deptList:r,getDeptList:async()=>{try{e.value=!0;const s=await a();r.value=n.mapTree(s.data,(t=>{var e;return(null==(e=t.children)?void 0:e.length)&&(t.children=t.children.filter((t=>1===t.status))),t})),(null==t?void 0:t.onSuccess)&&t.onSuccess()}finally{e.value=!1}},loading:e}}export{a,r as g,i as s,u};
