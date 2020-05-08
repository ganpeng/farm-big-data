import Vue from 'vue';
import Vuex from 'vuex';

import admin from './modules/admin';
import account from './modules/account';
import scale from './modules/scale';
import common from './modules/common';
import task from './modules/task';
import setting from './modules/setting';
import pee from './modules/pee';
import data_alert from './modules/data_alert';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        common,
        admin,
        account,
        scale,
        task,
        setting,
        //  农业大数据
        pee,
        data_alert
    }
});

export default store