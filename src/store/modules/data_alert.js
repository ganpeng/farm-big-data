// 物理环境设备
import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import dataAlertList from '@/mock/data_alert';

const defaultSearchFiled = {
    keyword: '',
    level: '', // 级别
    source: '', // 来源
    type: '' // 类型
};

const defaultDataAlert = {
    id: '', //  数据id
    level: '', //  预警级别
    type: '', //  预警类型
    desc: '', //  预警详情
    source: '', //  预警来源
    startAt: '', //  开始时间
    endAt: '', //  结束时间
    processingStatus: '', //  处理状态
    processingResult: '', //  处理结果
    createdAt: '' // 上线日期
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(Object.assign(DEFAULT_LIST, {
        data: dataAlertList
    })),
    currentDataAlert: _.cloneDeep(defaultDataAlert)
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentDataAlert(state) {
        return state.currentDataAlert;
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
    setCurrentDataAlert(state, payload) {
        state.currentDataAlert= payload.pee;
    },
    updateCurrentDataAlert(state, payload) {
        let {key, value} = payload;
        state.currentDataAlert[key] = value;
    },
    resetCurrentDataAlert(state) {
        state.currentDataAlert= _.cloneDeep(defaultDataAlert);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
