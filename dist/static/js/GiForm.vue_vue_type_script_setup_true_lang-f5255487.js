import{d as e,e as l,r as o,B as a,W as d,H as t,f as u,o as n,t as p,w as i,g as s,eU as r,c as m,F as f,x as c,a3 as V,a2 as v,P as y,i as h,a4 as k,l as U,y as b}from"./index-9e01b763.js";const w=e({__name:"GiForm",props:{modelValue:{},options:{}},emits:["update:modelValue","search","reset"],setup(e,{expose:w,emit:x}){const _=e,g=x,$=(e,l)=>{g("update:modelValue",Object.assign(_.modelValue,{[l]:e}))},q=l(!1),F=l();w({formRef:F});const j=o({});_.options.columns.forEach((e=>{e.request&&"function"==typeof e.request&&(null==e?void 0:e.init)&&e.request(_.modelValue).then((l=>{j[e.field]=e.resultFormat?e.resultFormat(l):l.data}))}));const E=[];_.options.columns.forEach((e=>{var l;const o=E.map((e=>e.field));(null==(l=e.cascader)?void 0:l.length)&&!o.includes(e.field)&&E.push(e)}));const B=a((()=>d.cloneDeep(_.modelValue)));return t(B,((e,l)=>{E.forEach((o=>{if(e[o.field]!==l[o.field]){_.options.columns.filter((e=>{var l;return null==(l=null==o?void 0:o.cascader)?void 0:l.includes(e.field)})).forEach((l=>{l.request&&Boolean(e[o.field])?l.request(_.modelValue).then((e=>{j[l.field]=l.resultFormat?l.resultFormat(e):e.data,j[l.field].map((e=>e.value)).includes(_.modelValue[l.field])||g("update:modelValue",Object.assign(_.modelValue,{[l.field]:""}))})):l.request&&!e[o.field]&&(j[l.field]=[],g("update:modelValue",Object.assign(_.modelValue,{[l.field]:""})))}))}}))})),(e,l)=>{const o=u("a-input"),a=u("a-input-number"),d=u("a-textarea"),t=u("a-select"),w=u("a-cascader"),x=u("a-tree-select"),E=u("a-radio-group"),B=u("a-checkbox-group"),C=u("a-date-picker"),O=u("a-time-picker"),R=u("a-rate"),z=u("a-switch"),D=u("a-slider"),G=u("a-form-item"),H=u("a-col"),P=u("icon-search"),T=u("a-button"),W=u("icon-up"),A=u("icon-down"),I=u("a-space"),J=u("a-row"),K=u("a-form");return n(),p(K,r({"auto-label-width":!0},e.options.form,{ref_key:"formRef",ref:F,model:e.modelValue}),{default:i((()=>[s(J,r({gutter:14},e.options.row,{class:"w-full"}),{default:i((()=>{var u,F,J;return[(n(!0),m(f,null,c(e.options.columns,((l,u)=>{var c,U,b;return n(),m(f,{key:l.field},[(b=l.hide,void 0!==b&&("boolean"==typeof b?b:"function"==typeof b?b(_.modelValue):void 0)?y("",!0):V((n(),p(H,r({key:0,span:l.span||12},l.col),{default:i((()=>[s(G,r(l.item,{label:l.label,field:l.field,rules:l.rules}),{default:i((()=>[v(e.$slots,l.field,{},(()=>["input"===l.type?(n(),p(o,r({key:0,"allow-clear":!0,placeholder:`请输入${l.label}`,"max-length":20},l.props,{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["placeholder","model-value","onUpdate:modelValue"])):y("",!0),"input-number"===l.type?(n(),p(a,r({key:1,placeholder:`请输入${l.label}`},l.props,{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["placeholder","model-value","onUpdate:modelValue"])):y("",!0),"textarea"===l.type?(n(),p(d,r({key:2,"allow-clear":!0,placeholder:`请填写${l.label}`,"max-length":200,"show-word-limit":!0},l.props,{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["placeholder","model-value","onUpdate:modelValue"])):y("",!0),"select"===l.type?(n(),p(t,r({key:3,"allow-clear":!0,placeholder:`请选择${l.label}`},l.props,{options:h(j)[l.field]||l.options,"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["placeholder","options","model-value","onUpdate:modelValue"])):y("",!0),"cascader"===l.type?(n(),p(w,r({key:4,"allow-clear":!0,placeholder:`请选择${l.label}`},l.props,{options:h(j)[l.field]||l.options,"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["placeholder","options","model-value","onUpdate:modelValue"])):y("",!0),"tree-select"===l.type?(n(),p(x,r({key:5,"allow-clear":!0,placeholder:`请选择${l.label}`},l.props,{data:h(j)[l.field]||l.data,"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["placeholder","data","model-value","onUpdate:modelValue"])):y("",!0),"radio-group"===l.type?(n(),p(E,r({key:6},l.props,{options:h(j)[l.field]||l.options,"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["options","model-value","onUpdate:modelValue"])):y("",!0),"checkbox-group"===l.type?(n(),p(B,r({key:7},l.props,{options:h(j)[l.field]||l.options,"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["options","model-value","onUpdate:modelValue"])):y("",!0),"date-picker"===l.type?(n(),p(C,r({key:8,"allow-clear":!0,placeholder:"请选择日期"},l.props,{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):y("",!0),"time-picker"===l.type?(n(),p(O,r({key:9,"allow-clear":!0,placeholder:"请选择时间"},l.props,{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):y("",!0),"rate"===l.type?(n(),p(R,r({key:10,"allow-clear":!0},l.props,{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):y("",!0),"switch"===l.type?(n(),p(z,r({key:11},l.props,{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):y("",!0),"slider"===l.type?(n(),p(D,r({key:12},l.props,{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>$(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):y("",!0)]))])),_:2},1040,["label","field","rules"])])),_:2},1040,["span"])),[[k,u<=((null==(c=e.options.fold)?void 0:c.index)||0)||u>=((null==(U=e.options.fold)?void 0:U.index)||0)&&!h(q)]]))],64)})),128)),(null==(u=e.options.btns)?void 0:u.hide)?y("",!0):(n(),p(H,r({key:0,span:(null==(F=e.options.btns)?void 0:F.span)||12},null==(J=e.options.btns)?void 0:J.col),{default:i((()=>[s(I,{wrap:""},{default:i((()=>[v(e.$slots,"suffix",{},(()=>{var o;return[s(T,{type:"primary",onClick:l[0]||(l[0]=e=>g("search"))},{icon:i((()=>[s(P)])),default:i((()=>{var l;return[U(b((null==(l=e.options.btns)?void 0:l.searchBtnText)||"搜索"),1)]})),_:1}),s(T,{onClick:l[1]||(l[1]=e=>g("reset"))},{default:i((()=>[U("重置")])),_:1}),(null==(o=e.options.fold)?void 0:o.enable)?(n(),p(T,{key:0,type:"text",size:"mini",onClick:l[2]||(l[2]=e=>q.value=!h(q))},{icon:i((()=>[h(q)?(n(),p(A,{key:1})):(n(),p(W,{key:0}))])),default:i((()=>[U(b(h(q)?"展开":"收起"),1)])),_:1})):y("",!0)]}))])),_:3})])),_:3},16,["span"]))]})),_:3},16)])),_:3},16,["model"])}}});export{w as _};
