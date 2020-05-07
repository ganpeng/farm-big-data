import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import service from '../../service';

const defaultSearchFiled = {
    keyword: '',
    status: ''
};

const defaultTestSearchField = {
    keyword: '',
    testStatus: ''
};


const defaultAccount = {
    id: '', // id
    avatarUrl: '', // 头像
    gender: '', //  性别
    name: '', // 用户名
    nickname: '', // 昵称
    mobile: '', // 手机号
    marriage: '',  // 是否已婚
    openid: '', // openId
    userList: [], // 账户下的用户列表
    culturalDegree: '', // 学历
    createdAt: '', // 创建时间
    updatedAt: '', // 更新时间
    status: false
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(DEFAULT_LIST),
    currentAccount: _.cloneDeep(defaultAccount),
    //  用户评测相关
    testSearchField: _.cloneDeep(defaultTestSearchField),
    testList: _.cloneDeep(DEFAULT_LIST),
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentAccount(state) {
        return state.currentAccount;
    },
    //  用户评测相关
    testSearchField(state) {
        return state.testSearchField;
    },
    testList(state) {
        return state.testList;
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
    //  当前管理员
    setCurrentAccount(state, payload) {
        state.currentAccount = payload.account;
    },
    updateCurrentAccount(state, payload) {
        let {key, value} = payload;
        state.currentAccount[key] = value;
    },
    resetCurrentAccount(state) {
        state.currentAccount = _.cloneDeep(defaultAccount);
    },
    //  用户评测相关列表查询
    // 分页
    setTestList(state, payload) {
        let {data, pageSize, pageNum, total} = payload;
        state.testList.data = data;
        state.testList.pagination.pageSize = pageSize;
        state.testList.pagination.pageNum = pageNum;
        state.testList.pagination.total = total;

    },
    setTestPagination(state, payload) {
        state.testList.pagination.pageSize = payload.pageSize;
        state.testList.pagination.pageNum = payload.pageNum;
        state.testList.pagination.total = payload.total;
    },
    updateTestPagination(state, payload) {
        let {key, value} = payload;
        state.testList.pagination[key] = value;
    },
    resetTestPagination() {
        state.testList.pagination = _.cloneDeep(DEFAULT_PAGINATION);
    },
    //  搜索
    updateTestSearchField(state, payload) {
        let {key, value} = payload;
        state.testSearchField[key] = value;
    },
    resetTestSearchField(state) {
        state.testSearchField = _.cloneDeep(defaultTestSearchField);
    }
    //  用户评测相关列表查询结束
}

const actions = {
    async getAccountList({commit, state}) {
        try {
            let params = Object.assign({},
                state.searchField,
                state.list.pagination,
                {pageNum: state.list.pagination.pageNum - 1, role: 'BACKEND'}
            );
            let res = await service.getAccountList(params);
            if (res && res.errorCode === 0) {
                let {total, pageNum, pageSize, body} = res;
                commit('setList', {data: body, pageNum: pageNum + 1, pageSize, total});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async getAccountById({commit}, id) {
        try {
            let res = await service.getAccountById(id);
            if (res && res.errorCode === 0) {
                commit('setCurrentAccount', {account: res.body});
            }
        } catch (err) {
            console.log(err);
        }
    },
    async getTestListByUserId({commit, state}, id) {
        try {
            let params = Object.assign({},
                state.testSearchField,
                state.testList.pagination,
                {id, pageNum: state.testList.pagination.pageNum - 1}
            );
            let res = await service.getTestListByUserId(params);
            if (res && res.errorCode === 0) {
                let {total, pageNum, pageSize, body} = res;
                commit('setTestList', {data: _.isNull(body) ? [] : body, pageNum: pageNum + 1, pageSize, total});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}