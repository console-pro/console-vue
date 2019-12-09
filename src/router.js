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
      children: [
        {
          path: '/admin/accounts',
          name: 'adminAccountList',
          component: () =>
            import(
              /* webpackChunkName: "admin-accounts" */ './views/Admin/AccountList'
            ),
        },
        {
          path: '/admin/roles',
          name: 'adminRoleList',
          component: () =>
            import(
              /* webpackChunkName: "admin-roles" */ './views/Admin/RoleList'
            ),
        },
        {
          path: '/settings/info',
          name: 'infoSetting',
          component: () =>
            import(/* webpackChunkName: "info" */ './views/Setting/Info'),
        },
        {
          path: '/settings/security',
          name: 'securitySetting',
          component: () =>
            import(
              /* webpackChunkName: "security" */ './views/Setting/Security'
            ),
        },
      ],
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
