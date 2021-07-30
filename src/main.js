import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import  '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/css/app.css'
import './global-components.js';
//https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/ui/colors

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
