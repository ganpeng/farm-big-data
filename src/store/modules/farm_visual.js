// 物理环境设备
import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import tracingList from '@/mock/tracing';

const defaultSearchFiled = {
    keyword: '',
    type: '' // 类型
};

const defaultFarmVisual = {
    id: '', // id
    createdAt: '', // 上线日期
    status: '' // 状态
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(Object.assign(DEFAULT_LIST, {data: tracingList})),
    currentFarmVisual: _.cloneDeep(defaultFarmVisual)
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentFarmVisual(state) {
        return state.currentFarmVisual;
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
    setCurrentFarmVisual(state, payload) {
        state.currentFarmVisual = payload.farmVisual;
    },
    setCurrentFarmVisualById(state, payload) {
        let {id} = payload;
        let farmVisual = tracingList.find((item) => item.id === parseInt(id));
        if (farmVisual) {
            state.currentFarmVisual = farmVisual;
        }
    },
    updateCurrentFarmVisual(state, payload) {
        let {key, value} = payload;
        _.set(state.currentFarmVisual, key, value);
    },
    resetCurrentFarmVisual(state) {
        state.currentFarmVisual = _.cloneDeep(defaultFarmVisual);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
