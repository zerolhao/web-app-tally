import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/home.vue'
import Index from './../views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'link-active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: { name: 'home' },
      children: [
        {
          path: '/index/fund-account', // 资金账户
          name: 'fund-account',
          component: () => import('./../views/fund-account.vue')
        },
        {
          path: '/index/home', // 打开首页，记账记录
          name: 'home',
          component: Home
        },
        {
          path: '/index/user', // 用户
          name: 'user',
          component: () => import('./../views/user.vue')
        }
      ]
    }
  ]
})
