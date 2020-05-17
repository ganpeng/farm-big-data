import Vue from 'vue'
import * as ElementUI from 'element-ui';
import VCharts from 'v-charts';

//  导入elementUI的css样式
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.scss';

//  获取service
import store from '@/store'
import router from '@/router';
import filterInit from '@/util/filter';
import util from '@/util/index';

import App from './App.vue'

//  初始化svg组件
import './icons';
require('@/util/rem');

filterInit(Vue);

Vue.prototype.$util = util;
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VCharts);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
