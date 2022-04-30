"use strict";(self.webpackChunksan_router=self.webpackChunksan_router||[]).push([[398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],u={id:"navigation-guards",sidebar_label:"\u5bfc\u822a\u5b88\u536b",slug:"/guid/navigation-guards",title:"\u5bfc\u822a\u5b88\u536b"},l=void 0,s={unversionedId:"guid/navigation-guards",id:"guid/navigation-guards",title:"\u5bfc\u822a\u5b88\u536b",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528 route.listen \u6ce8\u518c\u5168\u5c40\u524d\u7f6e\u5b88\u536b",source:"@site/website/docs/guid/navigation-guards.md",sourceDirName:"guid",slug:"/guid/navigation-guards",permalink:"/docs/guid/navigation-guards",editUrl:"https://github.com/BUPTlhuanyu/san-router/tree/master/website/docs/guid/navigation-guards.md",tags:[],version:"current",frontMatter:{id:"navigation-guards",sidebar_label:"\u5bfc\u822a\u5b88\u536b",slug:"/guid/navigation-guards",title:"\u5bfc\u822a\u5b88\u536b"},sidebar:"guide",previous:{title:"\u6dfb\u52a0\u8def\u7531",permalink:"/docs/guid/programmatic-navigation"},next:{title:"api",permalink:"/docs/api"}},c={},p=[],d={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 route.listen \u6ce8\u518c\u5168\u5c40\u524d\u7f6e\u5b88\u536b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import {router} from 'san-router';\nrouter.listen(function (/* listener \u4e8b\u4ef6\u5bf9\u8c61 */listenerEvent, /* \u5f53\u524d\u5339\u914d\u5230\u7684\u8def\u7531\u914d\u7f6e */config) {\n    // \u53d6\u6d88\u5bfc\u822a\u8df3\u8f6c\n    listenerEvent.stop();\n});\n")),(0,i.kt)("p",null,"\u6bcf\u4e2a\u5b88\u536b\u65b9\u6cd5\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"listenerEvent\uff1a\u8def\u7531\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u53c2\u8003",(0,i.kt)("a",{parentName:"li",href:"#%E6%95%B0%E6%8D%AE%E6%8E%A5%E5%8F%A3"},"listenerEvent")),(0,i.kt)("li",{parentName:"ul"},"config\uff1a\u5339\u914d\u5230\u7684\u914d\u7f6e\u5bf9\u8c61")),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 listenerEvent \u5bf9\u8c61\u63a7\u5236\u5bfc\u822a\u8fc7\u7a0b\u3002"))}g.isMDXComponent=!0}}]);