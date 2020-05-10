// 物理环境设备
import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import peeList from '@/mock/pee';

const defaultSearchFiled = {
    keyword: '',
    type: '', // 类型
    firm: '' // 厂商
};

const defaultPee = {
    id: '', // id
    dId: '', // 设备id
    sn: '', // 设备sn
    type: '', // 传感器类型
    address: {}, // 地址
    latitude: '', // 经度
    longitude: '', // 纬度
    firmName: '', // 厂商名称
    dataIndicators: '', // 数据指标
    farm: '', // 所属农场
    head: {
        name: '',
        phone: '',
        company: ''
    }, // 负责人
    createdAt: '', // 上线日期
    status: '' // 状态
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(Object.assign(DEFAULT_LIST, {data: peeList})),
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
    setCurrentPeeById(state, payload) {
        let {id} = payload;
        let pee = peeList.find((item) => item.id === parseInt(id));
        if (pee) {
            state.currentPee = pee;
        }
    },
    updateCurrentPee(state, payload) {
        let {key, value} = payload;
        _.set(state.currentPee, key, value);
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
