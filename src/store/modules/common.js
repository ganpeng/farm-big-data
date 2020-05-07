import _ from 'lodash';
import service from '../../service';

const state = {
    categoryList: [],
    token: '',
    user: {}
};

const getters = {
    categoryList(state) {
        return state.categoryList;
    },
    token(state) {
        return state.token;
    },
    user(state) {
        return state.user;
    }
};

const mutations = {
    setCategoryList(state, payload) {
        state.categoryList = payload.data;
    },
    addCategoryList(state, payload) {
        let {category} = payload;
        state.categoryList.push(category);
    },
    setToken(state, payload) {
        let {token} = payload;
        state.token = token;
        localStorage.setItem('token', token);
    },
    setUser(state, payload) {
        let {user} = payload;
        state.user = user;
    }
}

const actions = {
    async getCategoryList({commit}) {
        try {
            let res = await service.getCategoryList();
            if (res && res.errorCode === 0) {
                commit('setCategoryList', {data: res.body});
            }
        } catch (err) {
            console.log(err);
        }
    },
    async postCategory({commit}, name) {
        try {
            let res = await service.postCategory(name);
            if (res && res.errorCode === 0) {
                commit('addCategoryList', {category: res.body});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async login({commit}, admin) {
        try {
            let res = await service.login(admin);
            if (res && res.errorCode === 0) {
                let token = _.get(res.body, 'token');
                let user = _.omit(res.body, ['token']);
                commit('setToken', {token});
                commit('setUser', {user});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async getUserByToken({commit}) {
        try {
            let res = await service.getUserByToken();
            if (res && res.errorCode === 0) {
                commit('setUser', {user: res.body});
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