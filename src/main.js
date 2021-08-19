import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import '@/assets/css/app.css'
import './global-components.js';

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
