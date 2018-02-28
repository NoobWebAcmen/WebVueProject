# Vue网页端项目构建



## chapter 1 下载安装vue-cli

### 1、安装 vue-cli VUE的脚手架工具 (如果安装了请无视)

在终端中输入

```
npm install -g vue-cli
```

安装完成后，在终端输入

```
vue -V
```

如果显示vue版本号，则安装成功

### 2 、用 Vue-cli 构建一个应用

​      (1) 首先，我们进入准备放我们的项目的文件夹，以我本地为例，准备放在 `~/Site/MyWork` 文件夹下面。我们执行下面的命令：

```
cd A:\myVue\WebVue
```

跳转到我准备放项目的文件夹

​	(2)用我们刚刚安装的 `vue-cli` 脚手架命令 `vue` ，初始化 `init` 一个以 `webpack` 为模板的名叫 `WebVue` 的项目。

```
vue init webpack WebVue
```

​	(3)然后，终端里面会问你：

```
? Project name (vue-demo-cnodejs)1
```

项目名称是不是 `vue-demo-cnodejs` ，我们按回车，表示，是。当然，你也可以重写一个，然后回车。

然后，又问你：

```
? Project description (A Vue.js project)1
```

项目藐视，一个 `vue.js` 的项目。同样，我们可以填写内容，或者直接回车。

然后，又问你：

```
? Author (fungleo <web@fengcms.com>)1
```

作者，直接回车。

然后

```
? Vue build (Use arrow keys)
❯ Runtime + Compiler: recommended for most users
  Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files -
render functions are required elsewhere1234
```

这里是问你，需要不需要安装编译器，我们选择需要安装，也就是第一个，也就是直接回车就OK了。

然后

```
? Install vue-router? (Y/n)1
```

问是不是需要安装 `vue-router` ，需要安装，这个是管理路由的。我们直接回车。

> 在 `mac` 或者 `linux` 系统中，出现这样的选项，默认选项一般会是大写，如上 `(Y/n)` 就表示直接回车，将代表同意，如果你看到了 `(y/N)` 这样的，就表示，默认选择的是否，这时候，就需要输入 `y` 然后回车。当然，前提是你决定要这样做。

然后

```
? Use ESLint to lint your code? (Y/n)1
```

是否需要使用 `ESLint` 来检查你的代码。需要！所以同上，我们直接回车。

然后

```
? Pick an ESLint preset (Use arrow keys)
❯ Standard (https://github.com/feross/standard)
  Airbnb (https://github.com/airbnb/javascript)
  none (configure it yourself)1234
```

然后问你需要使用哪种风格来检查你的代码。我们选择第一个 `Standard` 来检查代码。所以，直接回车。

然后问你

```
? Setup unit tests with Karma + Mocha? (Y/n)1
```

是否需要安装测试功能。不要。我们输入 `n` 然后回车。

然后问你

```
? Setup e2e tests with Nightwatch? (Y/n)1
```

还是关于测试的内容，我们还是输出 `n` 然后回车。

### 安装完毕后，终端输入

```
cd WebVue
npm install
npm run dev
```

至此，Vue项目创建完毕



## Charpter 2 认识项目所有文件及配置目录

### 1、初始文件解析

```
├── README.md                       // 项目说明文档
├── node_modules                    // 项目依赖包文件夹
├── build                           // 编译配置文件，一般不用管
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                          // 项目基本设置文件夹
│   ├── dev.env.js              // 开发配置文件
│   ├── index.js                    // 配置主文件
│   └── prod.env.js             // 编译配置文件
├── index.html                      // 项目入口文件
├── package-lock.json           // npm5 新增文件，优化性能
├── package.json                    // 项目依赖包配置文件
├── src                             // 我们的项目的源码编写文件
│   ├── App.vue                 // APP入口文件
│   ├── assets                      // 初始项目资源目录，回头删掉
│   │   └── logo.png
│   ├── components              // 组件目录
│   │   └── Hello.vue           // 测试组件，回头删除
│   ├── main.js                 // 主配置文件
│   └── router                      // 路由配置文件夹
│       └── index.js            // 路由配置文件
└── static                          // 资源放置目录
```

好，如上，就是我们的 `vue` 初始化后得到的一个项目的完整结构。其他大多数文件我们是不用管的。如果要管的话，我在后面的章节也会去详细说明。

我们绝大多数的操作，就是在 `src` 这个目录下面。默认的 `src` 结构比较简单，我们需要重新整理。

另外 `static` 资源目录，我们也需要根据放置不同的资源，在这边构建不同的子文件夹。

### 2、我们来配置 src 目录

先不要管这些文件的内容，我们先建立这些空的文件在这边。然后我们后面去完善它。

我们的这个项目是要做两个页面，一个是 `cnodejs` 的列表页面，一个是详情页面。

所以，我把项目文件夹整理成如下的结构

```
├── App.vue                         // APP入口文件
├── api                             // 接口调用工具文件夹
│   └── index.js                    // 接口调用工具
├── components                      // 组件文件夹，目前为空
├── config                          // 项目配置文件夹
│   └── index.js                    // 项目配置文件
├── frame                           // 子路由文件夹
│   └── frame.vue                   // 默认子路由文件
├── main.js                         // 项目配置文件
├── page                                // 我们的页面组件文件夹
│   ├── content.vue             // 准备些 cnodejs 的内容页面
│   └── index.vue                   // 准备些 cnodejs 的列表页面
├── router                          // 路由配置文件夹
│   └── index.js                    // 路由配置文件
├── style                           // scss 样式存放目录
│   ├── base                        // 基础样式存放目录
│   │   ├── _base.scss          // 基础样式文件
│   │   ├── _color.scss     // 项目颜色配置变量文件
│   │   ├── _mixin.scss     // scss 混入文件
│   │   └── _reset.scss     // 浏览器初始化文件
│   ├── scss                        // 页面样式文件夹
│   │   ├── _content.scss       // 内容页面样式文件
│   │   └── _index.scss     // 列表样式文件
│   └── style.scss              // 主样式文件
└── utils                           // 常用工具文件夹
    └── index.js                    // 常用工具文件
```

因为我们删除了一些默认的文件，所以这个时候项目一定是报错的，先不管他，我们根据我们的需求，新建如上的项目结构。这些都是在 `src` 目录里面的结构。

### 3、我们来配置 static 目录

这个目录比较简单，因为这个项目我们的资源不多，但是，为了我的这系列博文能够适合大多数的项目的开发，一般，我搞成下面这个样子：

```
├── css             // 放一些第三方的样式文件
├── font                // 放字体图标文件
├── image           // 放图片文件，如果是复杂项目，可以在这里面再分门别类
└── js              // 放一些第三方的JS文件，如 jquery
```



## Charpter 3 调整 App.vue 和 router 路由

### 1、调整 App.vue 文件

我们先把默认项目里面没用的东西先删除掉，把代码调整为下面的样子。

**App.vue入口，只有一个空的路由视窗，我们的项目的所有内容，都基于这个视窗来展现。**

**我们的样式，都将从 src/style/style.scss 这个文件中引用.**

```
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
  @import "./style/style";
</style>
```

### 2、安装预编译包

调整好了我们的 `App.vue` 文件后，因为我们使用了 `scss` 文件预编译，所以我们需要安装两个支持 `scss` 的 `npm` 包。

我们在项目终端内输入下面的两句命令来进行安装：

```
npm install sass-loader -D
npm install node-sass -D
```

### 3、调整 page文件夹下  index.vue 和 content.vue 文件

**index.vue**

```
<template>
  <div>index page</div>
</template>123
```

**content.vue**

```
<template>
  <div>content page</div>
</template>
```

### 4、调整 router 路由文件

```
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }
  ]
})
```



## Charpter 4 配置 Axios api 接口调用文件

### 1、封装 axios 工具

首先，我们要使用 `axios` 工具，就必须先安装 `axios` 工具。执行下面的命令进行安装

```
npm install axios -D
```

### 2、编辑 src/api/index.js 文件

```
// 配置API接口地址
var root = 'https://cnodejs.org/api/v1'
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
  .then(function (res) {
    if (res.data.success === true) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      } else {
        window.alert('error: ' + JSON.stringify(res.data))
      }
    }
  })
  .catch(function (err) {
    let res = err.response
    if (err) {
      window.alert('api error, HTTP CODE: ' + res.status)
    }
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
```

### 3、调整 main.js 绑定 api/index.js 文件

 （1）在main.js里面引入API文件，并将API文件绑定到全局

```
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```

（2）修改`src/page/index.vue` 文件，调用 `cnodejs.org` 的 `topics` 列表接口，并且将结果打印出来。

```
<template>
  <div>index page</div>
</template>
<script>
export default {
  created () {
    this.$api.get('topics', null, r => {
      console.log(r)
    })
  }
}
</script>
```



## Charpter 5 将接口用 webpack 代理到本地

### 1、配置 webpack 将接口代理到本地

打开 `config/index.js` 文件，找到以下代码：

proxtTable: {}这一行是给我们配置代理的，输入一下代码，将接口代理到本地

`webpack` 接口配置文档 <https://webpack.js.org/configuration/dev-server/#devserver-proxy>

```
 dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
       '/api/v1/**': {
    	target: 'https://cnodejs.org', // 你接口的域名
    	secure: false,
    	changeOrigin: false,
  		}
    },
    cssSourceMap: false
  }
```

### 2、重新配置 src/api/index.js 文件

```
// 配置API接口地址
var root = '/api/v1'
```

至此代理接口到本地完成



## Charpter 6 初识 *.vue 文件（vue组件）

### 1、*.vue（vue组件）

​	`*.vue` 文件，是一个自定义的文件类型，用类 `HTML` 语法描述一个 `Vue` 组件。每个 `.vue`文件包含三种类型的顶级语言块 `<template>`, `<script>` 和 `<style>`。这三个部分分别代表了 `html`,`js`,`css`。

其中 `<template>` 和 `<style>` 是支持用预编译语言来写的。比如，在我们的项目中，我们就用了 `scss` 预编译，因此，我们是这样写的：

```
<style lang="scss">
```

​	`html` 也有自己的预编译语言， `vue` 也是支持的，不过一般来说，我们前端人员还是比较中意 `html` 原生语言，所以，我就不过多阐述了。

### 2、一个常见的 *.vue 文件（vue组件）代码解析

​	（1） template 部分

​	其中Header 和Footer 是自定义组件，通过其他文件写好本组件，然后引入进来，并在components中注册才能使用

```
<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li></li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>
```

​	（2）script 部分

​	由于temple标签中，引入了两个自定义组件，所以我们需要在其他文件中将这两个组件引入进来，并且在componets中注册

```
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
```

​	其次，除了引入部分，script其余代码需要被以下代码包起来

```
export default {
  components: { Header, Footer },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        console.log(r)
      })
}
```

​	1） components 部分,在此语句中声明引用的组件，就可以在template中使用

```
components: { Header, Footer },
```

​	2）data() 部分,此部分为数据部分，此处给了一个名为list的空数组数据，在 `template` 中，我们可以使用 `this.list` 来使用我们的数据。

```
  data () {
    return {
      list: []
    }
  },
```

​	3） created () 部分，当我们的组件加载完成时，需要执行的内容。比如这里，我们就让组件在加载完成时，执行一个叫 `this.getData()` 的函数。

```
 created () {
    this.getData()
  },
```

​	4）methods 是我们的这个组件的方法，也可以说是函数。比如，下面的代码就表示，我们的组件自定义了一个叫 `getData()` 的方法函数

```
 methods: {
    getData () {
      this.$api.get('topics', null, r => {
        console.log(r)
      })
    }
  }
```

#### 其中，this.$api这种函数要使用，可以先在main.js中引入，同时在Vue.prototype定义

```
main.js
import api from './api/index.js'
Vue.prototype.$utils = utils
```



## Charpter 7 渲染一个列表

### 1、制作 header.vue 和 footer.vue 组件文件

```
header.vue部分
<template>
  <header class="header">
    <h1 class="logo">This is a fuckkking Header</h1>
  </header>
</template>
```

```
footer.vue部分
<template>
  <footer class="copy">
    Copy &copy; FungLeo
  </footer>
</template>
```

### 2、vue指令

#### 1、v-for

​	基本用法：基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `key in array` ，为当前遍历的元素提供别名

```
<div v-for="item in items">
  {{ item.text }}
</div>
```

#### 2、v-text

​	基本用法 ：在元素内部插入string

```
<time v-text="i.create_at"></time>
```

#### 3 、 router-link(a标签的作用)

​	`router-link` 是 `VueRouter2` “声明式导航”的写法，在实际转换为 `html` 标签的时候，会转化为 `<a></a>`，里面的 `to` 属性，就相当于 `a` 的 `href` 属性：

```
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```



## Charpter 8 渲染内容页面

content.vue代码

```
<template>
  <div>
    <myHeader></myHeader>
    <h2 v-text="dat.title"></h2>
    <p>作者：{{dat.author.loginname}}　　发表于：{{$utils.goodTime(dat.create_at)}}</p>
    <hr>
    <article v-html="dat.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in dat.replies">
        <p>评论者：{{i.author.loginname}}　　评论于：{{$utils.goodTime(i.create_at)}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
export default {
  components: { myHeader, myFooter },
  data () {
    return {
      id: this.$route.params.id,
      dat: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, r => {
        this.dat = r.data
      })
    }
  }
}
</script>
```

1、template部分

​	同样是渲染内容， `v-html` 和 `v-text` 有什么区别呢？其实区别非常简单，`v-text` 会把所有的内容当成字符串给直接输出出来。而 `v-html` 会把字符串给转换为 `html` 标记语言给渲染出来。

2、script部分

​	data () 函数部分 ：

​	（1） id: this.$route.params.id   这个id的路由配置如下：

```
 {
      path: '/content/:id',
      component: Content
 }
```

​         :id 这个东西就是动态路由配置

#### 	**扩展： 动态路由匹配**

#### 	1 、

​	我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 `User` 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 `vue-router` 的路由路径中使用『动态路径参数』（dynamic segment）来达到这个效果：

```
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { 
    path: '/user/:id', 
    component: User 
    }
  ]
})
```

所以，像 `/user/foo` 和 `/user/bar` 都将映射到相同的路由，都使用User这个组件。

####  	2 、

​	一个『路径参数』使用冒号 `:` 标记。当匹配到一个路由时，参数值会被设置到 `this.$route.params`，可以在每个组件内使用。于是，我们可以更新 `User` 的模板，输出当前用户的 ID：

```
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
```

#### 	3 、

​	你可以在一个路由中设置多段『路径参数』，对应的值都会设置到 `$route.params` 中。例如：

| 模式                          | 匹配路径            | $route.params                        |
| ----------------------------- | ------------------- | ------------------------------------ |
| /user/:username               | /user/evan          | `{ username: 'evan' }`               |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: 123 }` |

除了 `$route.params` 外，`$route` 对象还提供了其它有用的信息，例如，`$route.query`（如果 URL 中有查询参数）、`$route.hash` 等等。你可以查看 [API 文档](https://router.vuejs.org/zh-cn/api/route-object.html) 的详细说明。直接获取URL的相关信息

## Charpter 9  打包项目并发布到子目录

### 1、打包项目

运行如下代码，进行打包：

```
npm run build
```

### 2、安装 http-server 启动 http 服务

全局安装一个 `http-server` 服务就好了呀。

```
npm install http-server -g
```

我们进入 `dist` 文件夹，然后启动一个 `http` 服务，来看看可以不可以访问。

```
http-server
```

### 3、 将项目打包到子目录

编辑 `config/index.js` 文件，找到：

```
assetsPublicPath: '/',
```

把 `'/'` 修改为你要放的子目录的路径就行了。这里，我要放到 `/dist/` 目录下面。于是，我就把这里修改为

```
assetsPublicPath: '/dist/',
```

实际开发中，你只需要把 `dist` 文件夹中打包好的文件，给运维他们，让他们去部署到真实的服务器环境就好了。

## Charpter 10 打包项目图片等资源的处理

### 1、在 vue 文件中，引用图片

我们将一张图片放到资源目录 `/static/image/lyf.jpg` 我们在 `vue` 文件中用下面的代码来使用这张图片。

```
<img src="static/image/lyf.jpg" alt="刘亦菲">
```

注意，最前面不要加 `/` 如果是这样操作的话，会变成相对根目录调用图片。如果你的项目要打包到子目录的话，这样做就会出现问题。

### 2、在 css 文件中，引用图片的处理

```
.love {
  background-image: url('../static/image/lyf.jpg');
}
```

## Charpter 11 集成 UEditor 百度富文本编辑器

### 1、集成 UEditor 编辑器

首先，下载 `UEditor` 源码。我这边下载的是 **UEditor 1.4.3.3 PHP UTF-8版本** [下载地址](http://ueditor.baidu.com/build/build_down.php?n=ueditor&v=1_4_3_3-utf8-php)

下载之后，把资源放到 `/static/ue/` 目录下。文档结构如下：

![img](http://img.blog.csdn.net/20170906114459267?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRnVuZ0xlbw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 2、编辑 UEditor 编辑器 配置文件

打开 `ueditor.config.js` 找到 `window.UEDITOR_HOME_UR` 将它设置为：

```
window.UEDITOR_HOME_URL = "/static/ue/";
```

### 3、集成到 UEditor 编辑器到我们的系统中

#### (1) main.js 引用 UEditor

打开 `/src/main.js` 文件，在合适位置插入下面的代码：

```
// 配置百度编辑器
import '../static/ue/ueditor.config.js'
import '../static/ue/ueditor.all.min.js'
import '../static/ue/lang/zh-cn/zh-cn.js'
import '../static/ue/ueditor.parse.min.js'
```

#### (2)创建 UEditor VUE 组件

在 `/src/components/` 目录下创建 `ue.vue` 文件，作为我们的编辑器组件文件。

文件内容如下：

```
<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>
<script>
  export default {
    name: 'ue',
    data () {
      return {
        editor: null
      }
    },
    props: {
      value: '',
      config: {}
    },
    mounted () {
      const _this = this
      this.editor = window.UE.getEditor('editor', this.config)
      this.editor.addListener('ready', function () {
        _this.editor.setContent(_this.value)
      })
    },
    methods: {
      getUEContent () {
        return this.editor.getContent()
      }
    },
    destroyed () {
      this.editor.destroy()
    }
  }
</script>
```

#### (3)在其他页面引用该组件

我们创建一个页面，路由配置以及其他内容不表，不清楚看我 `github` 代码演示。

内容如下：

```
<template>
  <div>
    <Uediter :value="ueditor.value" :config="ueditor.config" ref="ue"></Uediter>
    <input type="button" value="显示编辑器内容（从控制台查看）" @click="returnContent">
  </div>
</template>
<script>
  import Uediter from '@/components/ue.vue'
  export default {
    components: {Uediter},
    data () {
      return {
        dat: {
          content: ''
        },
        ueditor: {
          value: '编辑器默认文字',
          config: {}
        }
      }
    },
    methods: {
      returnContent () {
        this.dat.content = this.$refs.ue.getUEContent()
        console.log(this.dat.content)
      }
    }
  }
</script>1234567891011121314151617181920212223242526272829
```

这里，我们将组件引用进来，并且可以配置一些参数。我不习惯把配置参数放在根下面，所以搞了一个：

```
        ueditor: {
          value: '编辑器默认文字',
          config: {}
        }
```