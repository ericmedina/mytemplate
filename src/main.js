import Vue from 'vue'
import App from './App.vue'
import  '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/css/app.css'
//https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/ui/colors

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
