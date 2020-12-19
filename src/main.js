import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from './router';

//圖示Icon
import 'font-awesome/css/font-awesome.min.css';
//樣式
import '../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
