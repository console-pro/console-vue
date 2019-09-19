import _ from 'lodash'

const debugFlag = _.includes(window.location.search.substring(1), 'debug=')

const state = {
  debug: debugFlag,
  theme: 'dark',
}

const getters = {}

const mutations = {
  updateConfig(state, payload) {
    _.assign(state, payload)
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
