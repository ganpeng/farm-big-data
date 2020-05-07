import _ from 'lodash';
import service from '../../service';



const state = {
    typeRecommendList: _.times(4, () => {
        return {
            id: '',
            name: ''
        };
    }), // 推荐类型
    dailyRecommendList: _.times(3, () => {
        return {};
    }) // 每日推荐
};


const getters = {
    typeRecommendList(state) {
        return state.typeRecommendList;
    },
    dailyRecommendList(state) {
        return state.dailyRecommendList;
    }
};

const mutations = {
    setDailyRecommendList(state, payload) {
        let {list} = payload;
        state.dailyRecommendList = list;
    },
    addTypeRecommend(state) {
        state.typeRecommendList = state.typeRecommendList.concat(_.times(4, () => {
            return {
                id: '',
                name: ''
            };
        }));
    },
    editTypeRecommendByIndex() {
    },
    // 推荐量表
    addDailyRecommend(state) {
        state.dailyRecommendList.push({});
    },
    deleteDailyRecommendByIndex(state, payload) {
        let {index} = payload;
        state.dailyRecommendList.splice(index, 1);
    },
    setRecommendByIndex(state, payload) {
        let {index, recommend} = payload;
        _.set(state.dailyRecommendList, index, recommend);
    }
}

const actions = {
    async postRecommendList({state}) {
        try {
            let recommendItemList = state.dailyRecommendList.filter((item) => !_.isEmpty(item));
            let res = await service.postRecommendList(recommendItemList);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async getRecommendList({commit}) {
        try {
            let res = await service.getRecommendList();
            if (res && res.errorCode === 0) {
                commit('setDailyRecommendList', {list: res.body});
            }
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