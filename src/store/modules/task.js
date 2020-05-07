import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import service from '../../service';

const defaultSearchFiled = {
    keyword: '', // 关键字
    status: '',
    reportStatus: '', // 报告状态
    taskStatus: '', // 状态
    dateStart: '', // 开始时间
    dateEnd: '', // 结束时间
    dateRange: '' //  时间数组
};

const taskPick = [
    'name', 'instituteJson', 'questionSheetList',
    'startedAt', 'endedAt', 'testAmount'
];

const defaultTask = {
    id: '', // 任务id
    name: '', // 任务名称
    instituteJson: null, // 所属机构的json字符串
    questionSheetList: [], // 量表列表
    testAmount: '',  // 应测人数
    startedAt: '', //  有效期开始
    endedAt: '', // 有效期结束
    createdAt: '', // 创建时间
    updatedAt: '', // 更新时间
    expirationDateRange: [], // 有效期
    hasReport: false, // 是否上传报告
    status: false // 状态
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(DEFAULT_LIST),
    currentTask: _.cloneDeep(defaultTask)
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentTask(state) {
        return state.currentTask;
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
    //  当前评测任务
    setCurrentTask(state, payload) {
        state.currentTask = payload.task;
    },
    updateCurrentTask(state, payload) {
        let {key, value} = payload;
        state.currentTask[key] = value;
        if (key === 'expirationDateRange') {
            state.currentTask.startedAt = _.get(state.currentTask.expirationDateRange, '0') || '';
            state.currentTask.endedAt = _.get(state.currentTask.expirationDateRange, '1') || '';
        }
    },
    resetCurrentTask(state) {
        state.currentTask = _.cloneDeep(defaultTask);
    },
    //  关联量表到任务
    addScaleToScaleList(state, payload) {
        let {scale} = payload;
        state.currentTask.questionSheetList.push(scale);
        state.currentTask.questionSheetList = _.uniqBy(state.currentTask.questionSheetList, 'id');
    },
    deleteScaleFromScaleList(state, payload) {
        let {id} = payload;
        state.currentTask.questionSheetList = state.currentTask.questionSheetList.filter((item) => item.id !== id);
    }
}

const actions = {
    async creatTask({state}) {
        try {
                let task = formatTask(_.pick(state.currentTask, taskPick));
                let res = await service.creatTask(task);
                return res;
        } catch (err) {
            console.log(err);
        }
    },
    async updateTask({state}) {
        try {
            let task = formatTask(state.currentTask);
            let res = await service.updateTask(task);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async getTaskById({commit}, id) {
        try {
            let res = await service.getTaskById(id);
            if (res && res.errorCode === 0) {
                commit('setCurrentTask', {task: filterScale(res.body)});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async getTaskList({commit, state}) {
        try {
            let params = Object.assign({},
                state.searchField,
                state.list.pagination,
                {pageNum: state.list.pagination.pageNum - 1}
            );

            let res = await service.getTaskList(params);


            if (res && res.errorCode === 0) {
                let {total, pageNum, pageSize, body} = res;
                commit('setList', {data: body, pageNum: pageNum + 1, pageSize, total});
            }

            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async getOrgTaskList({commit, state}, instituteId) {
        try {
            let params = Object.assign({},
                state.searchField,
                state.list.pagination,
                {pageNum: state.list.pagination.pageNum - 1, visible: true, instituteId}
            );

            let res = await service.getOrgTaskList(params);

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

function filterScale(task) {
    return Object.assign({}, task, {
        expirationDateRange: [task.startedAt, task.endedAt]
    });
}

function formatTask(task) {
    return Object.assign({}, task, {
        questionSheetList: task.questionSheetList.map((item) => _.pick(item, 'id'))
    });
}