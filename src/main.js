import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from './router';

//圖示Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import '../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
