import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
