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
      name: 'home',
      component: BasicLayout,
      meta: {
        breadcrumbName: '首页',
      },
      children: [
        {
          path: '/admin/accounts',
          name: 'adminAccountList',
          component: () =>
            import(
              /* webpackChunkName: "admin-accounts" */ './views/Admin/AccountList'
            ),
          meta: {
            breadcrumbName: '账户管理',
          },
        },
        {
          path: '/admin/roles',
          name: 'adminRoleList',
          component: () =>
            import(
              /* webpackChunkName: "admin-roles" */ './views/Admin/RoleList'
            ),
          meta: {
            breadcrumbName: '角色管理',
          },
        },
        {
          path: '/settings/info',
          name: 'infoSetting',
          component: () =>
            import(/* webpackChunkName: "info" */ './views/Setting/Info'),
          meta: {
            breadcrumbName: '账号设置',
          },
        },
        {
          path: '/settings/security',
          name: 'securitySetting',
          component: () =>
            import(
              /* webpackChunkName: "security" */ './views/Setting/Security'
            ),
          meta: {
            breadcrumbName: '安全设置',
          },
        },
        {
          path: '/messages',
          name: 'messageList',
          component: () =>
            import(/* webpackChunkName: "messages" */ './views/Message'),
          meta: {
            breadcrumbName: '我的消息',
          },
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
