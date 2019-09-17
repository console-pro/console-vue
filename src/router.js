import Vue from 'vue'
import Router from 'vue-router'

import BasicLayout from '@/views/Layouts/BasicLayout'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: BasicLayout,
    },
  ],
})

export default router
