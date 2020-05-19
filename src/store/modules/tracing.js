// 物理环境设备
import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import tracingList from '@/mock/tracing';

const defaultSearchFiled = {
    keyword: '',
    type: '' // 类型
};

const defaultTracing = {
    id: '', // id
    pId: '', // 商品id
    name: '', // 商品名称
    type: '', // 种类
    variety: '', // 品种
    specs: '', // 规格
    auth: '', // 认证
    farm: '',
    price: 0, // 价格
    salesVolume: 0,
    visible: false,
    status: 1,
    createdAt: '', // 上线日期
    step: {
        oneName: '',
        oneTime: '',
        twoName: '',
        twoTime: ''
    }
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(Object.assign(DEFAULT_LIST, {data: tracingList})),
    currentTracing: _.cloneDeep(defaultTracing)
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentTracing(state) {
        return state.currentTracing;
    }
};

const mutations = {
    // 分页
    setList(state, payload) {
        let {data, pageSize, pageNum, total} = payload;
        state.list.data = data;
        state.list.pagination.pageSize = pageSize;
        state.list.pagination.pageNum = pageNum;
        state.list.pagination.total = total;
    },
    setPagination(state, payload) {
        state.list.pagination.pageSize = payload.pageSize;
        state.list.pagination.pageNum = payload.pageNum;
        state.list.pagination.total = payload.total;
    },
    updatePagination(state, payload) {
        let {key, value} = payload;
        state.list.pagination[key] = value;
    },
    resetPagination() {
        state.list.pagination = _.cloneDeep(DEFAULT_PAGINATION);
    },
    //  搜索
    updateSearchField(state, payload) {
        let {key, value} = payload;
        state.searchField[key] = value;
    },
    resetSearchField(state) {
        state.searchField = _.cloneDeep(defaultSearchFiled);
    },
    //  当前物环设备
    setCurrentTracing(state, payload) {
        state.currentTracing = payload.tracing;
    },
    setCurrentTracingById(state, payload) {
        let {id} = payload;
        let tracing = tracingList.find((item) => item.id === parseInt(id));
        if (tracing) {
            state.currentTracing = tracing;
        }
    },
    updateCurrentTracing(state, payload) {
        let {key, value} = payload;
        _.set(state.currentTracing, key, value);
    },
    resetCurrentTracing(state) {
        state.currentTracing = _.cloneDeep(defaultTracing);
    },
    toggleVisibleById(state, payload) {
        let {id} = payload;
        state.list.data = state.list.data.map((item) => {
            if (item.id === id) {
                item.visible = !item.visible;
            }
            return item;
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
