// 物理环境设备
import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import farmList from '@/mock/farm';

const defaultSearchFiled = {
    keyword: '',
    type: '' // 类型
};

const defaultFarm = {
    id: 0,
    name: '', // 名称
    type: '', // 类型
    area: 0, // 地块面积
    address: { // 地址
        province: '',
        city: '',
        area: '',
        detail: ''
    },
    latitude: '', // 经度
    longitude: '', // 纬度
    creditCode: '', // 统一社会信用代码
    standing: {  // 常务联系人
        name: '',
        phone: ''
    },
    legal: { // 法人
        name: '',
        phone: '',
        cId: '',
        address: ''
    },
    isPart: false, // 是否成立党组织
    partCount: 0, // 党组织成员
    project: '', // 经营项目
    level: '', // 专业级别
    createdAt: '' // 创立时间
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(Object.assign(DEFAULT_LIST, {data: farmList})),
    currentFarm: _.cloneDeep(defaultFarm)
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentFarm(state) {
        return state.currentFarm;
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
    setCurrentFarm(state, payload) {
        state.currentFarm = payload.farm;
    },
    setCurrentFarmById(state, payload) {
        let {id} = payload;
        let farm = farmList.find((item) => item.id === parseInt(id));
        if (farm) {
            state.currentFarm = farm;
        }
    },
    updateCurrentFarm(state, payload) {
        let {key, value} = payload;
        _.set(state.currentFarm, key, value);
    },
    resetCurrentFarm(state) {
        state.currentFarm = _.cloneDeep(defaultFarm);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
