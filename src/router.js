import Vue from 'vue'
import Router from 'vue-router'

import BasicLayout from '@/views/Layouts/BasicLayout'
import AuthLayout from '@/views/Layouts/AuthLayout'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: BasicLayout,
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: '/auth/login',
          name: 'login',
          component: () =>
            import(/* webpackChunkName: "login" */ './views/Auth/Login'),
        },
      ],
    },
  ],
})

export default router
