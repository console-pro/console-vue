import _ from 'lodash'

const state = {
  breadcrumbs: [],
}

const mutations = {
  setBreadcrumbList(state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs
  },
  push(state, breadcrumb) {
    const last = _.last(state.breadcrumbs)

    if (last.name === breadcrumb.name) {
      return
    }

    state.breadcrumbs.push(breadcrumb)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
