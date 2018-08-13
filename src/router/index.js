import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/index'
import Single from '@/pages/post/single'
import Login from '@/pages/login/login'
import Register from '@/pages/login/register'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Single
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

/**
 * 路由 前置守卫
 * @param to: 即将要进入的目标 路由对象
 * @param from: 当前导航正要离开的路由
 * @param next: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 */
router.beforeEach((to, from, next) => {
  // 这里也可以做是否登录的验证
  if (to.matched.length === 0) { // 如果未匹配到路由
    from.name ? next({ name: from.name }) : next('/') // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next() // 如果匹配到正确跳转
  }
})

export default router
