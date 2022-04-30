"use strict";(self.webpackChunksan_router=self.webpackChunksan_router||[]).push([[90],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(f,u(u({ref:r},c),{},{components:t})):n.createElement(f,u({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2848:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),u=["components"],i={id:"add-route",sidebar_label:"\u6dfb\u52a0\u8def\u7531",slug:"/guid/add-route",title:"\u6dfb\u52a0\u8def\u7531"},l=void 0,s={unversionedId:"guid/add-route",id:"guid/add-route",title:"\u6dfb\u52a0\u8def\u7531",description:"san-router \u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684 router \u5b9e\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8be5\u5b9e\u4f8b\u6dfb\u52a0\u4e00\u6761\u8def\u7531\u4fe1\u606f\u6216\u8005\u4e00\u7ec4\u8def\u7531\u914d\u7f6e\u4fe1\u606f\uff1bsan-router \u652f\u6301 hash \u6a21\u5f0f\u4ee5\u53ca html5 \u6a21\u5f0f\uff0c\u9ed8\u8ba4\u7684 router \u5b9e\u4f8b\u662f hash \u6a21\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 router \u7684\u5b9e\u4f8b\u65b9\u6cd5 setMode \u8bbe\u7f6e\u4e3a html5 \u6a21\u5f0f\uff1a",source:"@site/website/docs/guid/add-route.md",sourceDirName:"guid",slug:"/guid/add-route",permalink:"/san-router/docs/guid/add-route",editUrl:"https://github.com/BUPTlhuanyu/san-router/tree/master/website/docs/guid/add-route.md",tags:[],version:"current",frontMatter:{id:"add-route",sidebar_label:"\u6dfb\u52a0\u8def\u7531",slug:"/guid/add-route",title:"\u6dfb\u52a0\u8def\u7531"},sidebar:"guide",previous:{title:"\u6307\u5357",permalink:"/san-router/docs/category/\u6307\u5357"},next:{title:"\u52a8\u6001\u8def\u7531\u5339\u914d",permalink:"/san-router/docs/guid/dynamic-route-matching"}},c={},d=[],p={toc:d};function m(e){var r=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"san-router \u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684 router \u5b9e\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8be5\u5b9e\u4f8b\u6dfb\u52a0\u4e00\u6761\u8def\u7531\u4fe1\u606f\u6216\u8005\u4e00\u7ec4",(0,a.kt)("a",{parentName:"p",href:"#routeConfigInfo"},"\u8def\u7531\u914d\u7f6e\u4fe1\u606f"),"\uff1bsan-router \u652f\u6301 hash \u6a21\u5f0f\u4ee5\u53ca html5 \u6a21\u5f0f\uff0c\u9ed8\u8ba4\u7684 router \u5b9e\u4f8b\u662f hash \u6a21\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 router \u7684\u5b9e\u4f8b\u65b9\u6cd5 setMode \u8bbe\u7f6e\u4e3a html5 \u6a21\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {router} from 'san-router';\nrouter.setMode('html5');\n\nrouter.add({\n    rule: '/book',\n    Component: BookDetail\n});\nrouter.add([\n    {\n        rule: '/about',\n        Component: About\n    },\n    {\n        rule: '/home',\n        Component: Home\n    }\n]);\n")),(0,a.kt)("p",null,"\u540c\u6837 san-router \u652f\u6301\u591a\u8def\u7531\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u901a\u8fc7 Router \u7c7b\u5b9e\u4f8b\u5316\u5f97\u5230\u81ea\u5b9a\u4e49\u8def\u6709\u5b9e\u4f8b\uff0c\u5e76\u4e14\u901a\u8fc7 \u53c2\u6570 mode \u9009\u62e9\u8def\u7531\u6a21\u5f0f\uff1a "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {Router} from 'san-router';\nconst routerHash = new Router({mode: 'hash'})\nconst routerHistory = new Router({mode: 'html5'})\n")),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u5728\u4f7f\u7528 html5 \u6a21\u5f0f\u7684\u65f6\u5019\uff0c\u8bf7\u786e\u4fdd\u4f60\u7684\u5e94\u7528\u60f3\u8981\u652f\u6301\u7684\u6d4f\u89c8\u5668\u7248\u672c\u5177\u5907 history API\uff0c\u5426\u5219 san-router \u4f1a\u7ed9\u51fa\u62a5\u9519\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);