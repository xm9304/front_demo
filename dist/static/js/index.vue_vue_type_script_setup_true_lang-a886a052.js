import{d as e,e as l,f as a,o,s as d,w as u,g as t,c as p,F as r,v as s,eR as n,$ as m,O as i,l as f,h as V}from"./index-586e76ed.js";const c=V("span",null,"搜索",-1),v=e({__name:"index",props:{modelValue:{},options:{}},emits:["update:modelValue","search","reset"],setup(e,{expose:V,emit:v}){const y=e,k=(e,l)=>{v("update:modelValue",Object.assign(y.modelValue,{[l]:e}))},U=l();return V({formRef:U}),(e,l)=>{const V=a("a-input"),y=a("a-select"),b=a("a-radio-group"),w=a("a-checkbox-group"),_=a("a-input-number"),x=a("a-textarea"),h=a("a-date-picker"),C=a("a-form-item"),g=a("a-col"),R=a("icon-search"),$=a("a-button"),j=a("a-space"),O=a("a-row"),F=a("a-form");return o(),d(F,n(e.options.form,{ref_key:"formRef",ref:U,"auto-label-width":e.options.form.autoLabelWidth||!0,model:e.modelValue}),{default:u((()=>[t(O,{gutter:12},{default:u((()=>{var a;return[(o(!0),p(r,null,s(e.options.columns,(l=>(o(),d(g,n({key:l.field,span:l.span||12},l.col),{default:u((()=>[t(C,{label:l.label,field:l.field,rules:l.rules,extra:l.extra},{default:u((()=>[m(e.$slots,l.field,{},(()=>{var a,u,t,p;return["input"===l.type?(o(),d(V,n({key:0},{...l.props,allowClear:(null==(a=l.props)?void 0:a.allowClear)||!0},{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>k(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"select"===l.type?(o(),d(y,n({key:1},{...l.props,allowClear:(null==(u=l.props)?void 0:u.allowClear)||!0},{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>k(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"radio-group"===l.type?(o(),d(b,n({key:2},{...l.props},{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>k(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"checkbox-group"===l.type?(o(),d(w,n({key:3},{...l.props},{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>k(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"input-number"===l.type?(o(),d(_,n({key:4},{...l.props},{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>k(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"textarea"===l.type?(o(),d(x,n({key:5},{...l.props,allowClear:(null==(t=l.props)?void 0:t.allowClear)||!0},{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>k(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0),"date-picker"===l.type?(o(),d(h,n({key:6},{...l.props,allowClear:(null==(p=l.props)?void 0:p.allowClear)||!0},{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>k(e,l.field)}),null,16,["model-value","onUpdate:modelValue"])):i("",!0)]}))])),_:2},1032,["label","field","rules","extra"])])),_:2},1040,["span"])))),128)),(null==(a=e.options.btns)?void 0:a.hide)?i("",!0):(o(),d(g,{key:0,span:8},{default:u((()=>[t(j,null,{default:u((()=>[m(e.$slots,"footer",{},(()=>[t($,{type:"primary",onClick:l[0]||(l[0]=e=>v("search"))},{icon:u((()=>[t(R)])),default:u((()=>[c])),_:1}),t($,{onClick:l[1]||(l[1]=e=>v("reset"))},{default:u((()=>[f("重置")])),_:1})]))])),_:3})])),_:3}))]})),_:3})])),_:3},16,["auto-label-width","model"])}}});export{v as _};
