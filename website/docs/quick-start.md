---
id: quick-start
sidebar_label: 快速开始
slug: '/quick-start'
title: '快速开始'
---

[![NPM version](http://img.shields.io/npm/v/san-router.svg?style=flat-square)](https://npmjs.org/package/san-router)
[![License](https://img.shields.io/github/license/baidu/san-router.svg?style=flat-square)](https://npmjs.org/package/san-router)

[San](https://baidu.github.io/san/) 框架的官方 router。通常，单页或同构的 Web 应用都会需要一个 router。

你可以从下面找到 san-router 的下载和使用说明，也可以直接从 [示例项目](https://github.com/baidu/san/tree/master/example/todos-esnext) 看看实际项目中的使用方法。

> 注意：使用 san-router，要求 San 的版本号 >= 3.0.2

## 下载

NPM:

```
$ npm i san-router
```


## 使用

### Webpack + Babel

通过 named import 导入

```javascript
import {router, Link} from 'san-router';

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
router.start();
```

webpack 环境配置网上有太多文章，在此不赘述了


### AMD

通过 require 拿到的 exports 上包含 router 和 Link

```javascript
var sanRouter = require('san-router');
var router = sanRouter.router;
var Link = sanRouter.Link;

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
router.start();
```

请为 amd loader 正确配置 san-router 的引用路径。通过 npm 安装的项目可以采用下面的配置

```javascript
require.config({
    baseUrl: 'src',
    paths: {
        'san-router': '../dep/san-router/dist/san-router.source'
    }
});
```
