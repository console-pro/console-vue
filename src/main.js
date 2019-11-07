import Vue from 'vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import globalRegistration from '@/helpers/global-registration'
import mixins from '@/mixins'
import store from '@/store'
import router from '@/router'
import App from '@/App.vue'
import outputBuildInfo from '@/helpers/output-build-info'

Vue.use(ElementUI)
Vue.use(mixins)
Vue.use(globalRegistration)

if (process.env.NODE_ENV === 'development') {
  import('@/helpers/debug').then(debug => {
    debug.default()
  })
}

outputBuildInfo()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
