import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js/src';

export let Bus = new Vue();

Vue.use(VueFullPage);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
