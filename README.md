# Vue-CNode

使用Vue框架实现的一个CNode网页版小应用。

项目结构：
```
|-- src
    |-- assets
    |-- components
        |-- comment.Vue         ----    评论组件
        |-- loading.Vue         ----    加载组件
        |-- topbar.Vue          ----    通用头部
        |-- ...
    |-- pages
        |-- home.vue            ----    首页页面
        |-- detail.vue          ----    文章详情页面
        |-- ...
    |-- static
        |-- ...
    |-- util
        |-- api.js              ----    API地址
        |-- ajax.js             ----    通用ajax请求数据
        |-- ...
    |-- app.vue                 ----    app项目
    |-- main.js                 ----    入口文件
```

目前实现功能：
1.  获取首页数据（全部，精华，分享，问答，招聘）。
2.  正常显示帖子数据（正文内容 + 评论）。
3.  加入loading效果。

未实现：
1.  UI优化。
2.  登录（token登录）。
3.  发表帖子、评论。
