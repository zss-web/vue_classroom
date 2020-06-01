import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/course',
    name: 'course',
    component: () => import( '../components/course.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../components/user/login.vue')
  },
  //多余一个
  // {
  //   path: '/info',
  //   name: 'info',
  //   component: () => import( '../components/user/info.vue')
  // },
  {
    path: '/registor',
    name: 'registor',
    component: () => import( '../components/user/registor.vue')
  },
  {
    path: '/search_con',
    name: 'search_con',
    component: () => import('../components/search_con/search_con.vue')
  },
  {
    path: '/xiangq/',
    name: 'xiangq',
    component: () => import('../components/xiangq.vue')
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('../components/shopcart.vue'),
    beforeEnter: (to, from, next) => {
      const users=sessionStorage.getItem('users')
      if(!users){
        return next('/login')
      }
      next()
    }
  },
  {
    path: '/lessoninfo',
    name: 'lessoninfo',
    component: () => import( '../components/user/lessoninfo.vue'),
    beforeEnter: (to, from, next) => {
      const users=sessionStorage.getItem('users')
      if(!users){
        return next('/login')
      }
      next()
    }
  },
  {
    path: '/personageinfo',
    name: 'personageinfo',
    component: () => import( '../components/user/personageinfo.vue'),
    beforeEnter: (to, from, next) => {
      const users=sessionStorage.getItem('users')
      if(!users){
        return next('/login')
      }
      next()
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
