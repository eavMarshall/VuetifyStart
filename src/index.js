import 'core-js/es/symbol';
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@root/router';
import vuetify from '@plugins/vuetify';
import store from '@store/Store';
import App from '@root/App.vue';
import {setPageDimensions} from '@modules/Page';

Vue.use(Vuex);
Vue.config.productionTip = false;

const settWindowSize = () => store.commit(setPageDimensions, {height: window.innerHeight, width: window.innerWidth});
window.addEventListener('resize', settWindowSize);
settWindowSize();

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
}).$mount('#app');
