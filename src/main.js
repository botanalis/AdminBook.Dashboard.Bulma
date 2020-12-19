import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from './router';

import '../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')