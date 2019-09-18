import Vue from 'vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import globalRegistration from '@/helpers/global-registration'
import mixins from '@/mixins'
import store from '@/store'
import router from '@/router'
import App from '@/App.vue'

Vue.use(ElementUI)
Vue.use(mixins)
Vue.use(globalRegistration)

// eslint-disable-next-line
console.log(
  `%c${BUILD_INFO.name}%cv${BUILD_INFO.version}`,
  'background: #35495e; color: #fff; padding: 2px 4px; border-radius: 3px 0 0 3px;',
  'background: #19be6b; color: #fff; padding: 2px 4px; border-radius: 0 3px 3px 0;'
) // Output build info with colorful support.

// eslint-disable-next-line
console.log(`Build at ${new Date(BUILD_INFO.time).toLocaleString()}`)
// eslint-disable-next-line
console.log(`Hash: ${BUILD_INFO.hash}`)

if (process.env.NODE_ENV === 'development') {
  import('@/helpers/debug').then(debug => {
    debug.default()
  })
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
