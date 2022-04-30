---
id: add-route
sidebar_label: 添加路由
slug: '/guid/add-route'
title: '添加路由'
---

san-router 提供了默认的 router 实例，我们可以通过该实例添加一条路由信息或者一组[路由配置信息](#routeConfigInfo)；san-router 支持 hash 模式以及 html5 模式，默认的 router 实例是 hash 模式，可以通过 router 的实例方法 setMode 设置为 html5 模式：

```javascript
import {router} from 'san-router';
router.setMode('html5');

router.add({
    rule: '/book',
    Component: BookDetail
});
router.add([
    {
        rule: '/about',
        Component: About
    },
    {
        rule: '/home',
        Component: Home
    }
]);
```

同样 san-router 支持多路由实例，可以通过 Router 类实例化得到自定义路有实例，并且通过 参数 mode 选择路由模式： 

```javascript
import {Router} from 'san-router';
const routerHash = new Router({mode: 'hash'})
const routerHistory = new Router({mode: 'html5'})
```

需要注意的是在使用 html5 模式的时候，请确保你的应用想要支持的浏览器版本具备 history API，否则 san-router 会给出报错信息。
