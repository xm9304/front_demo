import{d as e,e as l,f as a,o,s as d,w as t,g as p,eR as u,c as m,F as n,v as r,$ as s,O as i,l as c,h as f}from"./index-0abb3cfd.js";const V=f("span",null,"搜索",-1),y=e({__name:"index",props:{modelValue:{},options:{}},emits:["update:modelValue","search","reset"],setup(e,{expose:f,emit:y}){const h=e,v=(e,l)=>{y("update:modelValue",Object.assign(h.modelValue,{[l]:e}))},U=l();return f({formRef:U}),(e,l)=>{const f=a("a-input"),h=a("a-input-number"),k=a("a-textarea"),b=a("a-select"),w=a("a-cascader"),_=a("a-tree-select"),x=a("a-radio-group"),g=a("a-checkbox-group"),$=a("a-date-picker"),R=a("a-time-picker"),j=a("a-rate"),C=a("a-switch"),O=a("a-slider"),F=a("a-form-item"),L=a("a-col"),W=a("icon-search"),q=a("a-button"),z=a("a-space"),A=a("a-row"),B=a("a-form");return o(),d(B,u(e.options.form,{ref_key:"formRef",ref:U,"auto-label-width":e.options.form.autoLabelWidth||!0,model:e.modelValue}),{default:t((()=>[p(A,u({gutter:14},e.options.row),{default:t((()=>[(o(!0),m(n,null,r(e.options.columns,(a=>{var r;return o(),m(n,{key:a.field},[a.hide?i("",!0):(o(),d(L,u({key:0,span:a.span||12},a.col),{default:t((()=>[p(F,u(a.item,{label:a.label,field:a.field,rules:a.rules}),{default:t((()=>[s(e.$slots,a.field,{},(()=>["input"===a.type?(o(),d(f,u({key:0,"allow-clear":!0,placeholder:`请输入${a.label}`,"max-length":20},a.props,{"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["placeholder","model-value","onUpdate:modelValue"])):i("",!0),"input-number"===a.type?(o(),d(h,u({key:1,placeholder:`请输入${a.label}`},a.props,{"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["placeholder","model-value","onUpdate:modelValue"])):i("",!0),"textarea"===a.type?(o(),d(k,u({key:2,"allow-clear":!0,placeholder:`请填写${a.label}`,"max-length":200,"show-word-limit":!0},a.props,{"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["placeholder","model-value","onUpdate:modelValue"])):i("",!0),"select"===a.type?(o(),d(b,u({key:3,"allow-clear":!0,placeholder:`请输入${a.label}`},a.props,{options:a.options,"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["placeholder","options","model-value","onUpdate:modelValue"])):i("",!0),"cascader"===a.type?(o(),d(w,u({key:4,"allow-clear":!0,placeholder:`请输入${a.label}`},a.props,{options:a.options,"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["placeholder","options","model-value","onUpdate:modelValue"])):i("",!0),"tree-select"===a.type?(o(),d(_,u({key:5,"allow-clear":!0,placeholder:`请输入${a.label}`},a.props,{data:a.data,"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["placeholder","data","model-value","onUpdate:modelValue"])):i("",!0),"radio-group"===a.type?(o(),d(x,u({key:6},a.props,{options:a.options,"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["options","model-value","onUpdate:modelValue"])):i("",!0),"checkbox-group"===a.type?(o(),d(g,u({key:7},a.props,{options:a.options,"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["options","model-value","onUpdate:modelValue"])):i("",!0),"date-picker"===a.type?(o(),d($,u({key:8,class:"w-full","allow-clear":!0,placeholder:"请选择日期"},a.props,{"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"time-picker"===a.type?(o(),d(R,u({key:9,"allow-clear":!0,placeholder:"请选择时间"},a.props,{"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"rate"===a.type?(o(),d(j,u({key:10,"allow-clear":!0},a.props,{"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"switch"===a.type?(o(),d(C,u({key:11},a.props,{"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"slider"===a.type?(o(),d(O,u({key:12},a.props,{"model-value":e.modelValue[a.field],"onUpdate:modelValue":e=>v(e,a.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0)]))])),_:2},1040,["label","field","rules"])])),_:2},1040,["span"])),(null==(r=e.options.btns)?void 0:r.hide)?i("",!0):(o(),d(L,{key:1,span:8},{default:t((()=>[p(z,null,{default:t((()=>[s(e.$slots,"footer",{},(()=>[p(q,{type:"primary",onClick:l[0]||(l[0]=e=>y("search"))},{icon:t((()=>[p(W)])),default:t((()=>[V])),_:1}),p(q,{onClick:l[1]||(l[1]=e=>y("reset"))},{default:t((()=>[c("重置")])),_:1})]))])),_:3})])),_:3}))],64)})),128))])),_:3},16)])),_:3},16,["auto-label-width","model"])}}});export{y as _};
