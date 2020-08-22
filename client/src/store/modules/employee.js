import axios from 'axios';

export default {
  namespaced: true,

  state: {
    all: [],
    one: null
  },
  getters: {
    getById: (state) => (id) => {
      return state.all.find(o => o.id === Number(id));
    },
    getAll: (state) =>  {
      return state.all;
    }
  },
  mutations: {
    unshiftEmployee (state, employee) {
      let found = state.all.find(o => o.id === employee.id);
      if (!found) {
        state.all.unshift(employee);
      }
    },

    removeEmployee (state, employee) {
      state.all = state.all.filter(o => o.id !== Number(employee.id));
    },

    setEmployees (state, employees) {
      state.all = employees;
    }
  },
  actions: {
    async find ({ commit }) {
      let response = await axios.get('/employee');
      commit('setEmployees', response.data);
      return response;
    },

    async findOne ({ commit }, id) {
      let response = await axios.get(`/employee/${id}`);
      commit('unshiftEmployee', response.data);
      return response;
    },

    async create ({ commit }, employee) {
      let response = await axios.post(`/employee`, employee);
      commit('unshiftEmployee', response.data);
      return response;
    },

    async update (context, employee) {
      return await axios.put(`/employee/${employee.id}`, employee);
    },

    async destroy ({ commit }, id) {
      let response = await axios.delete(`/employee/${id}`);
      commit('removeEmployee', { id });
      return response;
    }
  }
}
