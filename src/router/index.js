import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/echarts-example',
    name: 'EchartsExample',
    component: () => import('@/views/echarts-example')
  }
]

const router = new VueRouter({
  routes
})

export default router
