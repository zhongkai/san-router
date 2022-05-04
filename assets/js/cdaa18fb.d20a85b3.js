"use strict";(self.webpackChunksan_router=self.webpackChunksan_router||[]).push([[73],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={id:"lazy-loading-routes",sidebar_label:"\u8def\u7531\u61d2\u52a0\u8f7d",slug:"/guide/lazy-loading-routes",title:"\u8def\u7531\u61d2\u52a0\u8f7d"},l=void 0,c={unversionedId:"guide/lazy-loading-routes",id:"guide/lazy-loading-routes",title:"\u8def\u7531\u61d2\u52a0\u8f7d",description:"\u5f53\u9875\u9762\u8db3\u591f\u590d\u6742\uff0c\u5e76\u4e14\u5177\u5907\u591a\u4e2a\u8def\u7531\u7684\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u7684\u5305\u4f53\u79ef\u4f1a\u975e\u5e38\u5927\uff0c\u4ece\u800c\u589e\u52a0\u9875\u9762\u52a0\u8f7d\u65f6\u95f4\uff0c\u5bf9\u7528\u6237\u4f53\u9a8c\u9020\u6210\u975e\u5e38\u5927\u7684\u5f71\u54cd\u3002\u4e3a\u4e86\u63d0\u5347\u6027\u80fd\uff0c\u628a\u4ee3\u7801\u6309\u7167\u8def\u7531\u62c6\u6210\u591a\u4e2a JavaScript \u6a21\u5757\u662f\u975e\u5e38\u5fc5\u8981\u7684\u3002",source:"@site/website/docs/guide/lazy-loading-routes.md",sourceDirName:"guide",slug:"/guide/lazy-loading-routes",permalink:"/san-router/docs/guide/lazy-loading-routes",editUrl:"https://github.com/BUPTlhuanyu/san-router/tree/master/website/docs/guide/lazy-loading-routes.md",tags:[],version:"current",frontMatter:{id:"lazy-loading-routes",sidebar_label:"\u8def\u7531\u61d2\u52a0\u8f7d",slug:"/guide/lazy-loading-routes",title:"\u8def\u7531\u61d2\u52a0\u8f7d"},sidebar:"guide",previous:{title:"\u5d4c\u5957\u8def\u7531",permalink:"/san-router/docs/guide/nested-routes"},next:{title:"\u7f16\u7a0b\u5f0f\u8def\u7531",permalink:"/san-router/docs/guide/programmatic-navigation"}},p={},s=[],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u9875\u9762\u8db3\u591f\u590d\u6742\uff0c\u5e76\u4e14\u5177\u5907\u591a\u4e2a\u8def\u7531\u7684\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u7684\u5305\u4f53\u79ef\u4f1a\u975e\u5e38\u5927\uff0c\u4ece\u800c\u589e\u52a0\u9875\u9762\u52a0\u8f7d\u65f6\u95f4\uff0c\u5bf9\u7528\u6237\u4f53\u9a8c\u9020\u6210\u975e\u5e38\u5927\u7684\u5f71\u54cd\u3002\u4e3a\u4e86\u63d0\u5347\u6027\u80fd\uff0c\u628a\u4ee3\u7801\u6309\u7167\u8def\u7531\u62c6\u6210\u591a\u4e2a JavaScript \u6a21\u5757\u662f\u975e\u5e38\u5fc5\u8981\u7684\u3002"),(0,a.kt)("p",null,"san \u652f\u6301\u52a8\u6001\u5bfc\u5165\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5c06\u9759\u6001\u5bfc\u5165\u66ff\u6362\u6210\u52a8\u6001\u5bfc\u5165\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const BookComponent = () => import('./BookComponent');\nconst Home = () => import('./Home');\nconst About = () => import('./About');\n\nrouter.add([\n    {\n        rule: '/book/',\n        Component: BookComponent,\n        target: '#app'\n    },\n    {\n        rule: '/home',\n        Component: Home,\n        target: '#app'\n    },\n        {\n        rule: '/about',\n        Component: About,\n        target: '#app'\n    }\n]);\n")))}m.isMDXComponent=!0}}]);