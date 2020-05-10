// 物理环境设备
import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import channelList from '@/mock/channel';

const defaultSearchFiled = {
    keyword: '',
    type: '', // 类型
};

const defaultChannel = {
    id: '', // id
    name: '', //  渠道名称
    type: '', // 渠道类型
    contacts: {
        name: '', // 联系人名字
        phone: '' // 联系人电话
    }, //
    innerContacts: {
        name: '', // 内部联系人名字
        phone: '', // 内部联系人电话
        company: '' // 联系人所属公司
    },
    salesVolume: '', // 销售额
    createdAt: '', // 上线日期
    status: '' // 状态
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(Object.assign(DEFAULT_LIST, {data: channelList})),
    currentChannel: _.cloneDeep(defaultChannel )
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentChannel(state) {
        return state.currentChannel;
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
    //  当前渠道
    setCurrentChannel(state, payload) {
        state.currentChannel = payload.channel;
    },
    setCurrentChannelById(state, payload) {
        let {id} = payload;
        let channel = channelList.find((item) => item.id === parseInt(id));
        if (channel) {
            state.currentChannel = channel;
        }
    },
    updateCurrentChannel(state, payload) {
        let {key, value} = payload;
        _.set(state.currentChannel, key, value);
    },
    resetCurrentChannel(state) {
        state.currentChannel = _.cloneDeep(defaultChannel);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
