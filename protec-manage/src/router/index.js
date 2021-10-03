import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout/index.vue'),
    children : [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/access',
        name: 'Access',
        component: () => import('@/views/access-control/control.vue'),
        meta: {
          title: '权限控制'
        }
      },
      {
        path: '/goods',
        name: 'Goods',
        component: () => import('@/views/goods/goods.vue'),
        meta: {
          title: '商品信息'
        }
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/setting/setting.vue'),
        meta: {
          title: '系统设置'
        }
      },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

router.beforeEach( (to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
