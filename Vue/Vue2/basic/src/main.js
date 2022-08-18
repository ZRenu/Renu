import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    name: 'Renu'
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
