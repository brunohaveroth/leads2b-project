import basic from './basic';
const { state, getters, mutations, actions } = basic;

import axios from 'axios';

export default {
  namespaced: true,

  state: {
    ...state,

    modelName: 'project',
    participants: []
  },

  getters: {
    ...getters,

    getParticipants: (state) =>  {
      return state.participants;
    }
  },

  mutations: {
    ...mutations,

    setParticipants (state, records) {
      state.participants = records;
    }
  },

  actions: {
    ...actions,

    async findParticipants ({ commit }, projectId) {
      let response = await axios.get(`/project/${projectId}/participants`);
      commit('setParticipants', response.data);
      return response;
    },
  }
}
