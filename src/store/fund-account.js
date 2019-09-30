export default {
  namespaced: true,
  state: {
    showTotal: false
  },
  getters: {
    getShowTotal(state) {
      state.showTotal = JSON.parse(localStorage.getItem('showTotal'))
      return state.showTotal
    }
  },
  mutations: {
    _changeShowTotal(state, status) {
      state.showTotal = !!status
      localStorage.setItem('showTotal', state.showTotal)
    }
  },
  actions: {}
}
