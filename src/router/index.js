import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由配置
const routes = [
  { path: '', component: () => import(/* webpackChunkName: "home" */'@/pages/home/index'), meta: { title: '博客首页' } },
  { path: '/detail/:id', name: 'Detail', component: () => import(/* webpackChunkName: "Detail" */'@/pages/post/single'), meta: { title: '文章详情页', keepAlive: true } },
  { path: '/login', component: () => import(/* webpackChunkName: "login" */'@/pages/login/login'), meta: { title: '登录' } },
  { path: '/register', component: () => import(/* webpackChunkName: "register" */'@/pages/login/register'), meta: { title: '注册' } },
  { path: '/demo', component: () => import(/* webpackChunkName: "demo" */'@/pages/demo/index'), meta: { title: '效果演示页', keepAlive: true } }
]

// 创建Vue Router实例
const router = new Router({
  // mode: "history",
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置 keep-alive 返回缓存页面后记录浏览位置
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    }
    // 异步滚动操作
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0)
    })
  }
})

/**
 * 路由 前置守卫
 * @param to: 即将要进入的目标 路由对象
 * @param from: 当前导航正要离开的路由
 * @param next: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 */
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title // 修改浏览器标题
  // 这里也可以做是否登录的验证
  if (to.matched.length === 0) { // 如果未匹配到路由
    from.name ? next({ name: from.name }) : next('/') // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next() // 如果匹配到正确跳转
  }
})

export default router
