import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Mixin from "@/Mixin";

Vue.config.productionTip = false

Vue.mixin(Mixin)
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
