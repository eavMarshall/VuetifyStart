import Vue from 'vue';
import router from '@root/router';
import vuetify from '@plugins/vuetify';
import App from '@root/App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  vuetify,
}).$mount('#app');
