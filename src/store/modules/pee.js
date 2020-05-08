// 物理环境设备
import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';

const defaultSearchFiled = {
    keyword: '',
    sensorType: '', // 类型
    firmName: '' // 厂商
};

const defaultPee = {
    sn: '', // 设备sn
    sensorType: '', // 传感器类型
    address: '', // 地址
    latitude: '', // 经度
    longitude: '', // 纬度
    firmName: '', // 厂商名称
    farm: '', // 所属农场
    head: '', // 负责人
    createdAt: '', // 上线日期
    status: '' // 状态
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(DEFAULT_LIST),
    currentPee: _.cloneDeep(defaultPee)
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentPee(state) {
        return state.currentPee;
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
    setCurrentPee(state, payload) {
        state.currentPee = payload.pee;
    },
    updateCurrentPee(state, payload) {
        let {key, value} = payload;
        state.currentPee[key] = value;
    },
    resetCurrentPee(state) {
        state.currentPee = _.cloneDeep(defaultPee);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
