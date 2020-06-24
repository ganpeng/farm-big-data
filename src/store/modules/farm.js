// 物理环境设备
import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
// import farmList from '@/mock/farm';
import service from '@/service';

const defaultSearchFiled = {
    keyword: '',
    manageType: '' // 类型
};

const defaultFarm = {
    name: '',  // 农场名称
    address: '', // 地址
    contactName: '', //  联系人名称
    contactTel: '', // 联系人电话
    corporationAddr: '', // 法人地址
    corporationId: '', // 法人id
    corporationName: '', // 法人名称
    corporationTel: '', // 法人电话
    creditCode: '', // 统一社会信用代码
    description: '', // 详情
    farmType: '', // 农场类型
    feature: '', // 特色
    fieldArea: '', // 地块面积
    latitude: '', // 经度
    longitude: '', // 纬度
    manageType: '', // 经营项目
    partyOrg: false, // 是否成立党组织
    partCount: '', // 党组人数
    professionalType: '', // 专业级别
    createdAt: '' // 创建日期
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(Object.assign(DEFAULT_LIST)),
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
    // 当前农场
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

let isLoading = false;
const actions = {
    async createFarm({state}) {
        try {
            if (!isLoading) {
                isLoading = true;
                let {currentFarm} = state;
                let reqBody = _.cloneDeep(currentFarm);
                let res = await service.createFarm(reqBody);
                isLoading = false;
                return res;
            }
        } catch (err) {
            isLoading = false;
            console.log(err);
        }
    },
    async updateFarmById({state}, id) {
        try {
            if (!isLoading) {
                isLoading = true;
                let {currentFarm} = state;
                let reqBody = Object.assign({}, _.omit(currentFarm, ['createdAt']), {id});
                let res = await service.updateFarmById(reqBody);
                isLoading = false;
                return res;
            }
        } catch (err) {
            isLoading = false;
            console.log(err);
        }
    },
    async deleteFarmById({state}, id) {
        try {
            if (!isLoading) {
                isLoading = true;
                let res = await service.deleteFarmById(id);
                isLoading = false;
                return res;
            }
        } catch (err) {
            isLoading = false;
            console.log(err);
        }
    },
    async getFarmById({commit}, id) {
        try {
            let res = await service.getFarmById(id);
            if (res && res.code === 0) {
                commit('setCurrentFarm', {farm: res.data});
            }
            return res;
        } catch (err) {
            isLoading = false;
            console.log(err);
        }
    },
    async getFarmList({state, commit}) {
        try {
            let params = Object.assign({}, state.searchFields, state.list.pagination, {
                pageNum: state.list.pagination.pageNum - 1
            });

            let res = await service.getFarmList(params);
            if (res && res.code === 0) {
                let {list, pageNum, pageSize, total} = res.data;
                commit('setList', {pageNum: pageNum + 1, pageSize, total, data: list});
            }
        } catch (err) {
            console.log(err);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
