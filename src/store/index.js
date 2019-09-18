import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const requireModules = require.context('./modules', false, /[a-zA-Z]\w+\.(js)$/)

const modules = {}

requireModules.keys().forEach(fileName => {
  const module = requireModules(fileName)
  const name = _.first(_.split(fileName.substring(2), '.'))

  modules[name] = module.default
})

export default new Vuex.Store({ modules })
