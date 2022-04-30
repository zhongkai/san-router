---
id: navigation-guards
sidebar_label: 导航守卫
slug: '/guid/navigation-guards'
title: '导航守卫'
---

你可以使用 route.listen 注册全局前置守卫
```javascript
import {router} from 'san-router';
router.listen(function (/* listener 事件对象 */listenerEvent, /* 当前匹配到的路由配置 */config) {
    // 取消导航跳转
    listenerEvent.stop();
});
```

每个守卫方法接收两个参数：

- listenerEvent：路由事件对象，参考[listenerEvent](/san-router/docs/data-structure)
- config：匹配到的配置对象

我们可以通过 listenerEvent 对象控制导航过程。
