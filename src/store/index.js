import Vue from 'vue';
import Vuex from 'vuex';

import pee from './modules/pee';
import data_alert from './modules/data_alert';
import channel from './modules/channel';
import tracing from './modules/tracing';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        pee,
        data_alert,
        channel,
        tracing
    }
});

export default store