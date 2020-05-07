import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import service from '../../service';

const defaultSearchFiled = {
    keyword: ''
};

const defaultAdmin = {
    name: '',
    mobile: '',
    status: true
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(DEFAULT_LIST),
    currentAdmin: _.cloneDeep(defaultAdmin)
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentAdmin(state) {
        return state.currentAdmin;
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
    setCurrentAdmin(state, payload) {
        state.currentAdmin = payload.admin;
    },
    updateCurrentAdmin(state, payload) {
        let {key, value} = payload;
        state.currentAdmin[key] = value;
    },
    resetCurrentAdmin(state) {
        state.currentAdmin = _.cloneDeep(defaultAdmin);
    }
}

let isLoading = false;

const actions = {
    async postAdmin({state}) {
        try {
            if (!isLoading) {
                isLoading = true;
                let admin = _.omit(state.currentAdmin, ['status']);
                let res = await service.postAdmin(admin);
                isLoading = false;
                return res;
            }
        } catch (err) {
            console.log(err);
            isLoading = false;
        }
    },
    async updateAdminById({state}) {
        try {
            let admin = _.pick(state.currentAdmin, ['mobile']);
            let res = await service.updateAdminById(admin);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async getAdminList({commit, state}) {
        try {
            let params = Object.assign({},
                state.searchField,
                state.list.pagination,
                {pageNum: state.list.pagination.pageNum - 1, role: 'BACKEND'}
            );
            let res = await service.getAdminList(params);
            if (res && res.errorCode === 0) {
                let {total, pageNum, pageSize, body} = res;
                commit('setList', {data: body, pageNum: pageNum + 1, pageSize, total});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}