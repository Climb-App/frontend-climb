(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{861:function(e,a,s){"use strict";s.d(a,{FT:function(){return o}});var t=s(7294),r=s(5893);const l=["as","disabled"];function o({tagName:e,disabled:a,href:s,target:t,rel:r,onClick:l,tabIndex:o=0,type:n}){e||(e=null!=s||null!=t||null!=r?"a":"button");const i={tagName:e};if("button"===e)return[{type:n||"button",disabled:a},i];const c=t=>{(a||"a"===e&&function(e){return!e||"#"===e.trim()}(s))&&t.preventDefault(),a?t.stopPropagation():null==l||l(t)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:o,href:"a"===e&&a?void 0:s,target:"a"===e?t:void 0,"aria-disabled":a||void 0,rel:"a"===e?r:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},i]}const n=t.forwardRef(((e,a)=>{let{as:s,disabled:t}=e,n=function(e,a){if(null==e)return{};var s,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)s=l[t],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,l);const[i,{tagName:c}]=o(Object.assign({tagName:s,disabled:t},n));return(0,r.jsx)(c,Object.assign({},n,i,{ref:a}))}));n.displayName="Button",a.ZP=n},5005:function(e,a,s){"use strict";var t=s(4036),r=s.n(t),l=s(7294),o=s(861),n=s(600),i=s(5893);const c=l.forwardRef((({as:e,bsPrefix:a,variant:s,size:t,active:l,className:c,...d},f)=>{const m=(0,n.vE)(a,"btn"),[u,{tagName:p}]=(0,o.FT)({tagName:e,...d}),v=p;return(0,i.jsx)(v,{...d,...u,ref:f,className:r()(c,m,l&&"active",s&&`${m}-${s}`,t&&`${m}-${t}`,d.href&&d.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=c},7648:function(e,a,s){"use strict";s.d(a,{Z:function(){return G}});var t=s(4036),r=s.n(t),l=s(5697),o=s.n(l),n=s(7294),i=s(5893);const c={type:o().string,tooltip:o().bool,as:o().elementType},d=n.forwardRef((({as:e="div",className:a,type:s="valid",tooltip:t=!1,...l},o)=>(0,i.jsx)(e,{...l,ref:o,className:r()(a,`${s}-${t?"tooltip":"feedback"}`)})));d.displayName="Feedback",d.propTypes=c;var f=d;var m=n.createContext({}),u=s(600);const p=n.forwardRef((({id:e,bsPrefix:a,className:s,type:t="checkbox",isValid:l=!1,isInvalid:o=!1,as:c="input",...d},f)=>{const{controlId:p}=(0,n.useContext)(m);return a=(0,u.vE)(a,"form-check-input"),(0,i.jsx)(c,{...d,ref:f,type:t,id:e||p,className:r()(s,a,l&&"is-valid",o&&"is-invalid")})}));p.displayName="FormCheckInput";var v=p;const b=n.forwardRef((({bsPrefix:e,className:a,htmlFor:s,...t},l)=>{const{controlId:o}=(0,n.useContext)(m);return e=(0,u.vE)(e,"form-check-label"),(0,i.jsx)("label",{...t,ref:l,htmlFor:s||o,className:r()(a,e)})}));b.displayName="FormCheckLabel";var x=b;const N=n.forwardRef((({id:e,bsPrefix:a,bsSwitchPrefix:s,inline:t=!1,disabled:l=!1,isValid:o=!1,isInvalid:c=!1,feedbackTooltip:d=!1,feedback:p,className:b,style:N,title:h="",type:y="checkbox",label:j,children:g,as:w="input",...$},F)=>{a=(0,u.vE)(a,"form-check"),s=(0,u.vE)(s,"form-switch");const{controlId:k}=(0,n.useContext)(m),I=(0,n.useMemo)((()=>({controlId:e||k})),[k,e]),P=null!=j&&!1!==j&&!g,C=(0,i.jsx)(v,{...$,type:"switch"===y?"checkbox":y,ref:F,isValid:o,isInvalid:c,disabled:l,as:w});return(0,i.jsx)(m.Provider,{value:I,children:(0,i.jsx)("div",{style:N,className:r()(b,j&&a,t&&`${a}-inline`,"switch"===y&&s),children:g||(0,i.jsxs)(i.Fragment,{children:[C,P&&(0,i.jsx)(x,{title:h,children:j}),(o||c)&&(0,i.jsx)(f,{type:o?"valid":"invalid",tooltip:d,children:p})]})})})}));N.displayName="FormCheck";var h=Object.assign(N,{Input:v,Label:x});s(2473);const y=n.forwardRef((({bsPrefix:e,type:a,size:s,htmlSize:t,id:l,className:o,isValid:c=!1,isInvalid:d=!1,plaintext:f,readOnly:p,as:v="input",...b},x)=>{const{controlId:N}=(0,n.useContext)(m);let h;return e=(0,u.vE)(e,"form-control"),h=f?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${s}`]:s},(0,i.jsx)(v,{...b,type:a,size:t,ref:x,readOnly:p,id:l||N,className:r()(o,h,c&&"is-valid",d&&"is-invalid","color"===a&&`${e}-color`)})}));y.displayName="FormControl";var j=Object.assign(y,{Feedback:f}),g=(0,s(4680).Z)("form-floating");const w=n.forwardRef((({controlId:e,as:a="div",...s},t)=>{const r=(0,n.useMemo)((()=>({controlId:e})),[e]);return(0,i.jsx)(m.Provider,{value:r,children:(0,i.jsx)(a,{...s,ref:t})})}));w.displayName="FormGroup";var $=w;const F=["xxl","xl","lg","md","sm","xs"];const k=n.forwardRef(((e,a)=>{const[{className:s,...t},{as:l="div",bsPrefix:o,spans:n}]=function({as:e,bsPrefix:a,className:s,...t}){a=(0,u.vE)(a,"col");const l=[],o=[];return F.forEach((e=>{const s=t[e];let r,n,i;delete t[e],"object"===typeof s&&null!=s?({span:r=!0,offset:n,order:i}=s):r=s;const c="xs"!==e?`-${e}`:"";r&&l.push(!0===r?`${a}${c}`:`${a}${c}-${r}`),null!=i&&o.push(`order${c}-${i}`),null!=n&&o.push(`offset${c}-${n}`)})),[{...t,className:r()(s,...o,...l)},{as:e,bsPrefix:a,spans:l}]}(e);return(0,i.jsx)(l,{...t,ref:a,className:r()(s,!n.length&&o)})}));k.displayName="Col";var I=k;const P=n.forwardRef((({as:e="label",bsPrefix:a,column:s,visuallyHidden:t,className:l,htmlFor:o,...c},d)=>{const{controlId:f}=(0,n.useContext)(m);a=(0,u.vE)(a,"form-label");let p="col-form-label";"string"===typeof s&&(p=`${p} ${p}-${s}`);const v=r()(l,a,t&&"visually-hidden",s&&p);return o=o||f,s?(0,i.jsx)(I,{ref:d,as:"label",className:v,htmlFor:o,...c}):(0,i.jsx)(e,{ref:d,className:v,htmlFor:o,...c})}));P.displayName="FormLabel",P.defaultProps={column:!1,visuallyHidden:!1};var C=P;const R=n.forwardRef((({bsPrefix:e,className:a,id:s,...t},l)=>{const{controlId:o}=(0,n.useContext)(m);return e=(0,u.vE)(e,"form-range"),(0,i.jsx)("input",{...t,type:"range",ref:l,className:r()(a,e),id:s||o})}));R.displayName="FormRange";var E=R;const O=n.forwardRef((({bsPrefix:e,size:a,htmlSize:s,className:t,isValid:l=!1,isInvalid:o=!1,id:c,...d},f)=>{const{controlId:p}=(0,n.useContext)(m);return e=(0,u.vE)(e,"form-select"),(0,i.jsx)("select",{...d,size:s,ref:f,className:r()(t,e,a&&`${e}-${a}`,l&&"is-valid",o&&"is-invalid"),id:c||p})}));O.displayName="FormSelect";var T=O;const L=n.forwardRef((({bsPrefix:e,className:a,as:s="small",muted:t,...l},o)=>(e=(0,u.vE)(e,"form-text"),(0,i.jsx)(s,{...l,ref:o,className:r()(a,e,t&&"text-muted")}))));L.displayName="FormText";var z=L;const S=n.forwardRef(((e,a)=>(0,i.jsx)(h,{...e,ref:a,type:"switch"})));S.displayName="Switch";var V=Object.assign(S,{Input:h.Input,Label:h.Label});const _=n.forwardRef((({bsPrefix:e,className:a,children:s,controlId:t,label:l,...o},n)=>(e=(0,u.vE)(e,"form-floating"),(0,i.jsxs)($,{ref:n,className:r()(a,e),controlId:t,...o,children:[s,(0,i.jsx)("label",{htmlFor:t,children:l})]}))));_.displayName="FloatingLabel";var Z=_;const D={_ref:o().any,validated:o().bool,as:o().elementType},B=n.forwardRef((({className:e,validated:a,as:s="form",...t},l)=>(0,i.jsx)(s,{...t,ref:l,className:r()(e,a&&"was-validated")})));B.displayName="Form",B.propTypes=D;var G=Object.assign(B,{Group:$,Control:j,Floating:g,Check:h,Switch:V,Label:C,Text:z,Range:E,Select:T,FloatingLabel:Z})},2473:function(e){"use strict";var a=function(){};e.exports=a}}]);