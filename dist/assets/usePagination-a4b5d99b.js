import{G as z,N as S}from"./_plugin-vue_export-helper-a686c450.js";function c(n,a={defaultPageSize:10}){const e=z({showPageSize:!0,showTotal:!0,current:1,pageSize:a.defaultPageSize,total:0,onChange:t=>{e.current=t,n&&n()},onPageSizeChange:t=>{e.current=1,e.pageSize=t,n&&n()}}),o=e.onChange,r=e.onPageSizeChange;function g(t){e.total=t}const{current:i,pageSize:u,total:s}=S(e);return{current:i,pageSize:u,total:s,pagination:e,changeCurrent:o,changePageSize:r,setTotal:g}}export{c as u};