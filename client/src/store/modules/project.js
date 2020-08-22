import basic from './basic';
const { state, getters, mutations, actions } = basic;

export default {
  namespaced: true,

  state: {
    ...state,
    modelName: 'project'
  },

  getters: {
    ...getters
  },

  mutations: {
    ...mutations
  },

  actions: {
    ...actions
  }
}
