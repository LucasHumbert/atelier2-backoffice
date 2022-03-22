import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connexionToken: "222455",
    toggleInactivityEvents: true,
    toggleInactivityUsers: true
  },
  getters: {
  },
  mutations: {
    setToken(state, token){
      state.connexionToken = token
    },
    setInactivityEvents(state, value) {
      state.toggleInactivityEvents = value
    },
    setInactivityUsers(state, value) {
      state.toggleInactivityUsers = value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
