import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import '@/assets/css/app.css'
import PampaUI from './index.js';

Vue.config.productionTip = false
Vue.use(PampaUI)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')