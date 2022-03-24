import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backOfficeToken: "",
    events: [],
    users: [],
    toggleInactivityEvents: false,
    toggleInactivityUsers: false
  },
  getters: {
  },
  mutations: {
    setToken(state, token){
      state.backOfficeToken = token
    },
    setEvents(state, events) {
      state.events = events
    },
    setUsers(state, users) {
      state.users = users
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
