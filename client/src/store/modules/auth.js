import axios from 'axios';

const session = JSON.parse(localStorage.getItem('auth-session') || '{}');

const state = { session };

const getters = {
  company: state => state.session.company,
  isAuthenticated: state => !!state.session.token,
  token: state => state.session.token,
  user: state => state.session.user
};

const mutations = {
  createSession (state, session) {
    state.session = session;
    axios.defaults.headers.common['Authorization'] = `Bearer ${session.token}`;

    localStorage.setItem('auth-session', JSON.stringify(session));
  }
};

const actions = {
  async signup ({ commit }, data) {
    let response = await axios.post(`/signup`, data);

    commit('createSession', response.data);

    return response;
  },

  async login ({ commit }, credentials) {
    let response = await axios.post(`/login`, credentials);

    commit('createSession', response.data);

    return response;
  },

  restoreSession ({ commit }) {
    commit('createSession', session);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
