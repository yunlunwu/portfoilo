import Vue from 'vue'
import Router from 'vue-router'
import Layout from './pages/layout.vue'
import Home from './pages/home.vue'
// import page404 from '@/components/404.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: '/',
      component: Layout,
      redirect: { name: 'home' },
      children: [
        { path: 'home', name: 'home', component: Home, meta: { keepAlive: true, noresposive: true } },
        // { path: 'characters', name: 'characters', component: () => import('@/pages/characters.vue'), meta: { keepAlive: true, noresposive: true } },
        // { path: 'characters/:id', name: 'characterDetail', component: () => import('@/pages/characterDetail.vue'), meta: { keepAlive: true, noresposive: true } }
      ]
    },
    {
      path: '*',
      name: 'NoResult',
      component: () =>
        import('@/pages/404.vue')
    } 
  ]
})

export default router
