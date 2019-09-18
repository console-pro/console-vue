import _ from 'lodash'

const state = {
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
