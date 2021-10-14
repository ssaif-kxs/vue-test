import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async loadUsers({ commit }) {
      const res = await axios.get('https://randomuser.me/api/?results=5');
      const data = await res.data;
      
      commit('setUsers', data.results);
    }
  },
  modules: {
  }
})
