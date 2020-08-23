import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Page from '@modules/Page';

export default new Vuex.Store({
    modules: {
        Page: Page,
    },
});
