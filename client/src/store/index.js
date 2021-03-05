import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user-module'
import productModule from './product-module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: userModule,
    product: productModule,
  }
})
