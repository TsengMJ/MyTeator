import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user-module'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: userModule
  }
})
