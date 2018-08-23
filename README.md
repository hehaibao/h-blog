# h-blog

> A Vue.js project 用elementUI模仿[我的博客](http://www.hehaibao.com/)，简单的写的几个练习页面，仅供参考。

## 技术栈

  vue-cli(vue 2.x + webpack + vue-router) + elementUI + ES6 + mock + axios
  
  本地代码已全部通过ESlint检测。
  
## 在线预览

  https://hehaibao.github.io/h-blog/dist/index.html

## 主要功能

  - [x]  首页(含mock)
  ![image](/screenshots/home.jpg)

  - [x]  文章详情页
  ![image](/screenshots/detail.jpg)

  - [x]  登录页(含验证和是否登录的逻辑)
  ![image](/screenshots/login.jpg)

  - [x]  注册页(含验证)
  ![image](/screenshots/register.jpg)
  
  里面涉及到了路由的导航守卫，组件的复用，sessionStorage存储是否登录状态，父子组件通信，elementUI的一些用法 等等

  更多功能，后续有时间会继续添加..

## 如何使用？

``` bash
# clone
git clone https://github.com/hehaibao/h-blog.git

# cd dir
cd h-blog

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev 

or 

npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 macOS 10.12.6  Chrome 68  nodejs 6.10.0

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍


## License

MIT
