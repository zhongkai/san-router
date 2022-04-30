---
id: api
sidebar_label: api
slug: '/api'
title: 'api'
---

### router

路由器对象。

路由用于将特定的 URL 对应到组件类上。在 URL 变化并匹配路由规则时，路由将初始化特定组件并渲染到页面上。你也可以将 URL 对应到函数上，路由将在 URL 规则匹配时执行特定函数。


#### add

`使用`

```router.add({Object|Array}options)```

`说明`

添加一条路由规则或者一组路由规则。

你可以指定 Component 和 target 参数，让规则匹配时在 target 中渲染一个 Component。

```javascript
router.add({
    rule: '/book/:id',
    Component: san.defineComponent({
        route() {
            let route = this.data.get('route');
            // route.query.id
        }
    }),
    target: '.app-main'
});
router.add([
    {
        rule: '/home',
        Component: Home,
        target: '.app-main'
    },
		{
        rule: '/about',
        Component: About,
        target: '.app-main'
    }
]);
```

Component 属性也可以用来加载一个异步的组件：

```js
const BookComponent = () => import('./BookComponent');

router.add({
    rule: '/book/:id',
    Component: BookComponent,
    target: '.app-main'
});

```


你也可以指定一个 handler 函数，让规则匹配时执行这个函数。

```javascript
router.add({
    rule: '/book/:id',
    handler(e) {
        e.query.id
    }
});
```

路由规则有2种形式：

- `string` URL 的 path 部分与字符串完全匹配。支持 `:` 标记的路径参数，根据名称作为 query 的参数传递给相应的组件或函数。
- `RegExp` URL 的 path 部分匹配该正则。正则中的 group 将根据序号作为 query 的参数传递给相应的组件或函数。

`参数`

- `string|RegExp` options.rule - 路由规则
- `Function` options.Component - 规则匹配时渲染的组件类
- `string` options.target - 组件渲染的容器元素，默认值为 **#main**
- `Function` options.handler 规则匹配时的执行函数

#### listen

`使用`

```router.listen({Function}listener)```

`说明`

添加路由监听器。当发生路由行为时，监听器函数被触发。

```javascript
router.listen(function (e, config) {
    e.query.id
});
```

`参数`

- `Function` listener - 监听器函数


`监听器函数参数`

- `Object` e - 路由信息对象
- `Object` config - 路由配置对象


路由监听器作为所有路由的切面函数，通常承担权限判断之类基础的任务。所以路由监听器可以通过 `stop` 方法阻断当前路由过程，并进行 URL 跳转。

```javascript
router.listen(function (e) {
    if (!checkPermission()) {
        e.stop();
        this.locator.redirect('/forbidden');
    }
});
```

路由监听器可以通过 `suspend` 和 `resume` 方法中断和唤醒路由过程，实现异步。不过异步过程会导致路由对应的视图渲染延迟，慎用。

```javascript
router.listen(function (e) {
    e.suspend();
    checkPermission().then(invalid => {
        if (invalid) {
            e.stop();
            this.locator.redirect('/forbidden');
            return;
        }

        e.resume();
    });
});
```

#### unlisten

`使用`

```router.unlisten({Function}listener)```

`说明`

移除路由监听器。

`参数`

- `Function` listener - 监听器函数


#### setMode

`使用`

```router.setMode({String}mode)```

`说明`

设置路由模式。支持两种模式：hash | html5，默认为 hash。

`参数`

- `string` mode - 路由模式，hash | html5

#### push

`使用`

```router.push({Object}url[,{Object}options])```

`说明`

功能类似 router.locator.redict 方法，并增加了 query 对象的处理。同时在 san 组件中可通过实例的 `$router` 方法访问当前路由实例

```js
router.push({
    query: {
        name: 'erik',
        sex: 1,
        age: 18
    }
});

// san 组件中
this.$router.push({
    query: {
        name: 'erik',
        sex: 1,
        age: 18
    }
});
```

#### start

`使用`

```router.start()```

`说明`

启动路由


#### stop

`使用`

```router.stop()```

`说明`

停止路由

### Link

具有路由功能的应用中，建议使用 Link 组件代替 a 标签。Link 组件可以根据路由模式渲染一个链接。通过 to 属性指定目标地址，Link 组件将渲染一个带有正确地址的 a 标签。


```javascript
san.defineComponent({
    components: {
        'router-link': Link
    },

    template: `
        <div>
            <header>
                <router-link to="/user">用户信息</router-link>
            </header>
        </div>
    `
});
```

### withRoute

`使用`

```withRoute({Function|Class}component[,{Object}router])```

`说明`

为组件实例属性 `$router` 注入 `san-router` 实例，为组件实例 `data` 对象添加 `route`  [路由信息](#数据接口)数据。

`参数`

- `Function|Class ` component -  组件
- `Object` router - san-router 实例