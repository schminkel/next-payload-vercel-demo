"use strict";(self.webpackChunkpayload_template_ts_blank=self.webpackChunkpayload_template_ts_blank||[]).push([[491],{86491:(e,a,l)=>{l.r(a),l.d(a,{default:()=>O});var t=l(67294),n=l(16550),i=l(26793),s=l(9980),r=l(28630),c=l(75091),o=l(47489),d=l(40684),m=l(73727),u=l(49546),v=l(28584),p=l(26644),E=l(4983),_=l(46268),$=l(5590),g=l(55532),f=l(24427),h=l(38398),b=l(50854),Z=l(37276),N=l(73588),k=l(40829),w=l(9684),y=l(92962),A=l(10935);const P=()=>{const{theme:e,setTheme:a,autoMode:l}=(0,A.Fg)(),{t:n}=(0,i.$)("general"),s=(0,t.useCallback)((e=>{a(e)}),[a]);return t.createElement(y.Z,{name:"theme",label:n("adminTheme"),value:l?"auto":e,onChange:s,options:[{label:n("automatic"),value:"auto"},{label:n("light"),value:"light"},{label:n("dark"),value:"dark"}]})};var S=l(69850),L=l(80763),C=l(953);l(30086);const T="account",U=e=>{var a,l,n,r;const{collection:c,data:o,permissions:d,hasSavePermission:y,apiURL:A,initialState:U,isLoading:R,action:F}=e,{slug:D,fields:I,admin:{useAsTitle:O,preview:K},timestamps:j,auth:M}=c,{admin:{dateFormat:x},routes:{admin:B}}=(0,s.Z)(),{t:G,i18n:H}=(0,i.$)("authentication"),q=Object.entries(H.options.resources).map((([e,a])=>({label:a.general.thisLanguage,value:e}))),z=[T].filter(Boolean).join(" ");return t.createElement("div",{className:z},R&&t.createElement(k.Z,null),!R&&t.createElement(w.R.Provider,{value:"update"},t.createElement(p.Z,{className:`${T}__form`,method:"patch",action:F,initialState:U,disabled:!y},t.createElement("div",{className:`${T}__main`},t.createElement(Z.Z,{title:G("account"),description:G("accountOfCurrentUser"),keywords:G("account")}),t.createElement(v.Z,null),!((null===(a=c.versions)||void 0===a?void 0:a.drafts)&&(null===(n=null===(l=c.versions)||void 0===l?void 0:l.drafts)||void 0===n?void 0:n.autosave))&&t.createElement(b.Z,null),t.createElement("div",{className:`${T}__edit`},t.createElement(S.T,{className:`${T}__header`},t.createElement("h1",null,t.createElement(h.Z,{data:o,useAsTitle:O,fallback:`[${G("general:untitled")}]`})),t.createElement(N.Z,{useAPIKey:M.useAPIKey,collection:c,email:null==o?void 0:o.email,operation:"update"}),t.createElement($.Z,{permissions:d.fields,readOnly:!y,filter:e=>{var a;return"sidebar"!==(null===(a=null==e?void 0:e.admin)||void 0===a?void 0:a.position)},fieldTypes:f.Z,fieldSchema:I})),t.createElement(S.T,{className:`${T}__payload-settings`},t.createElement("h3",null,G("general:payloadSettings")),t.createElement("div",{className:`${T}__language`},t.createElement(C.Z,{label:G("general:language")}),t.createElement(L.Z,{value:q.find((e=>e.value===H.language)),options:q,onChange:({value:e})=>H.changeLanguage(e)})),t.createElement(P,null)))),t.createElement("div",{className:`${T}__sidebar-wrap`},t.createElement("div",{className:`${T}__sidebar`},t.createElement("div",{className:`${T}__sidebar-sticky-wrap`},t.createElement("ul",{className:`${T}__collection-actions`},(null===(r=null==d?void 0:d.create)||void 0===r?void 0:r.permission)&&t.createElement(t.Fragment,null,t.createElement("li",null,t.createElement(m.Link,{to:`${B}/collections/${D}/create`},G("general:createNew"))))),t.createElement("div",{className:`${T}__document-actions${K?` ${T}__document-actions--with-preview`:""}`},t.createElement(E.Z,{generatePreviewURL:K,data:o}),y&&t.createElement(_.Z,null,G("general:save"))),t.createElement("div",{className:`${T}__sidebar-fields`},t.createElement($.Z,{permissions:d.fields,readOnly:!y,filter:e=>{var a;return"sidebar"===(null===(a=null==e?void 0:e.admin)||void 0===a?void 0:a.position)},fieldTypes:f.Z,fieldSchema:I})),t.createElement("ul",{className:`${T}__meta`},t.createElement("li",{className:`${T}__api-url`},t.createElement("span",{className:`${T}__label`},"API URL"," ",t.createElement(g.Z,{value:A})),t.createElement("a",{href:A,target:"_blank",rel:"noopener noreferrer"},A)),t.createElement("li",null,t.createElement("div",{className:`${T}__label`},"ID"),t.createElement("div",null,null==o?void 0:o.id)),j&&t.createElement(t.Fragment,null,o.updatedAt&&t.createElement("li",null,t.createElement("div",{className:`${T}__label`},G("general:lastModified")),t.createElement("div",null,(0,u.default)(new Date(o.updatedAt),x))),o.createdAt&&t.createElement("li",null,t.createElement("div",{className:`${T}__label`},G("general:created")),t.createElement("div",null,(0,u.default)(new Date(o.createdAt),x)))))))))))};var R=l(19826),F=l(2143),D=l(45074),I=l(91455);const O=()=>{var e,a;const{state:l}=(0,n.TH)(),m=(0,d.bU)(),{setStepNav:u}=(0,c.FP)(),{user:v,permissions:p}=(0,r.a)(),[E,_]=(0,t.useState)(),{id:$,preferencesKey:g}=(0,D.x5)(),{getPreference:f}=(0,I.G)(),{serverURL:h,routes:{api:b},collections:Z,admin:{user:N,components:{views:{Account:k}={Account:void 0}}={}}={user:"users"}}=(0,s.Z)(),{t:w}=(0,i.$)("authentication"),y=Z.find((e=>e.slug===N)),{fields:A}=y,P=null===(e=null==p?void 0:p.collections)||void 0===e?void 0:e[N],[{data:S}]=(0,o.Z)(`${h}${b}/${null==y?void 0:y.slug}/${null==v?void 0:v.id}?depth=0`,{initialParams:{"fallback-locale":"null"}}),L=null===(a=null==P?void 0:P.update)||void 0===a?void 0:a.permission,C=(null==l?void 0:l.data)||S,T=`${h}${b}/${v.collection}/${null==S?void 0:S.id}`,O=`${h}${b}/${v.collection}/${null==S?void 0:S.id}?locale=${m}&depth=0`;return(0,t.useEffect)((()=>{const e=[{label:w("account")}];u(e)}),[u,w]),(0,t.useEffect)((()=>{(async()=>{const e=await(0,R.Z)({fieldSchema:A,data:C,operation:"update",id:$,user:v,locale:m,t:w});await f(g),_(e)})()}),[C,A,$,v,m,g,f,w]),t.createElement(F.Z,{DefaultComponent:U,CustomComponent:k,componentProps:{action:O,data:S,collection:y,permissions:P,hasSavePermission:L,initialState:E,apiURL:T,isLoading:!E}})}}}]);