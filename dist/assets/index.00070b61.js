import{e as D,q as N,J as C,s as U,r as d,o as m,g as V,h as b,a as e,w as t,u as o,F as R,B as I,z as n,c as S,t as z}from"./vendor.1acd98e9.js";import{_ as q}from"./index.e81e138c.js";const J={class:"add"},L={class:"head"},T=n("\u786E\u8BA4"),j=n("\u53D6\u6D88"),G={class:"wrap"},H=n("\u5355\u6B21\u4EFB\u52A1"),K=n("\u5468\u671F\u4EFB\u52A1"),M=n("\u5426"),O=n("\u662F"),P=n("\u4E1A\u52A1\u5904\u5BA4"),Q=D({setup(W){const i=N(),F=C(),a=U({name:"",way:"1",isApprove:"1",formId:"",dept:"1",user:[],desc:""}),v=()=>{i.back()},c=()=>{i.back()},p=[{key:"node1",title:"Node1",children:[{key:"node2",title:"Node2"}]},{key:"node3",title:"Node3",children:[{key:"node4",title:"Node4"},{key:"node5",title:"Node5"}]}];return(X,l)=>{const y=d("a-breadcrumb-item"),A=d("a-breadcrumb"),f=d("a-button"),x=d("a-space"),E=d("a-page-header"),k=d("a-input"),s=d("a-form-item"),r=d("a-radio"),_=d("a-radio-group"),B=d("a-tree-select"),h=d("a-textarea"),w=d("a-form");return m(),V("div",J,[b("section",L,[e(E,{title:"\u65B0\u589E",subtitle:"\u6307\u6807\u7BA1\u7406\u65B0\u589E",onBack:c},{breadcrumb:t(()=>[e(A,null,{default:t(()=>[(m(!0),V(R,null,I(o(F).matched,(u,g)=>(m(),S(y,{key:g},{default:t(()=>[n(z(u.meta.title),1)]),_:2},1024))),128))]),_:1})]),extra:t(()=>[e(x,null,{default:t(()=>[e(f,{type:"primary",onClick:v},{default:t(()=>[T]),_:1}),e(f,{onClick:c},{default:t(()=>[j]),_:1})]),_:1})]),_:1})]),b("section",G,[e(w,{ref:"formRef",model:o(a),style:{width:"600px"}},{default:t(()=>[e(s,{field:"name",label:"\u4EFB\u52A1\u540D\u79F0"},{default:t(()=>[e(k,{modelValue:o(a).name,"onUpdate:modelValue":l[0]||(l[0]=u=>o(a).name=u),placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0",style:{width:"280px"}},null,8,["modelValue"])]),_:1}),e(s,{field:"way",label:"\u6267\u884C\u65B9\u5F0F"},{default:t(()=>[e(_,{modelValue:o(a).way,"onUpdate:modelValue":l[1]||(l[1]=u=>o(a).way=u)},{default:t(()=>[e(r,{value:"1"},{default:t(()=>[H]),_:1}),e(r,{value:"2"},{default:t(()=>[K]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{field:"isApprove",label:"\u662F\u5426\u9009\u62E9\u5BA1\u6279"},{default:t(()=>[e(_,{modelValue:o(a).isApprove,"onUpdate:modelValue":l[2]||(l[2]=u=>o(a).isApprove=u)},{default:t(()=>[e(r,{value:"1"},{default:t(()=>[M]),_:1}),e(r,{value:"2"},{default:t(()=>[O]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{field:"treeSelect",label:"\u53D1\u9001\u8868\u5355"},{default:t(()=>[e(B,{data:p,modelValue:o(a).formId,"onUpdate:modelValue":l[3]||(l[3]=u=>o(a).formId=u),placeholder:"\u8BF7\u9009\u62E9",style:{width:"280px"}},null,8,["modelValue"])]),_:1}),e(s,{field:"isApprove",label:"\u53D1\u9001\u5BF9\u8C61"},{default:t(()=>[e(_,{modelValue:o(a).dept,"onUpdate:modelValue":l[4]||(l[4]=u=>o(a).dept=u)},{default:t(()=>[e(r,{value:"1"},{default:t(()=>[P]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{field:"treeSelect",label:"\u9009\u62E9\u4EBA\u5458"},{default:t(()=>[e(B,{"tree-checkable":"",data:p,modelValue:o(a).user,"onUpdate:modelValue":l[5]||(l[5]=u=>o(a).user=u),placeholder:"\u8BF7\u9009\u62E9",style:{width:"280px"}},null,8,["modelValue"])]),_:1}),e(s,{field:"isApprove",label:"\u586B\u62A5\u8BF4\u660E"},{default:t(()=>[e(h,{modelValue:o(a).desc,"onUpdate:modelValue":l[6]||(l[6]=u=>o(a).desc=u),placeholder:"\u8BF7\u8F93\u5165\u586B\u62A5\u8BF4\u660E","auto-size":{minRows:4,maxRows:6},"allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])])}}});var $=q(Q,[["__scopeId","data-v-9171f3a8"]]);export{$ as default};
