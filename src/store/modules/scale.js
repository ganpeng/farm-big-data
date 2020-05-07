import _ from 'lodash';
import {DEFAULT_LIST, DEFAULT_PAGINATION} from '@/util/constants';
import service from '../../service';

const defaultSearchFiled = {
    keyword: '',
    categoryId: '', // 类型id
    omittable: '', // 是否免答
    timeLimit: '', // 是否限时
    visible: '' // 上下架
};

const defaultEvaluationDimensionList = {
    id: '', // id
    name: '', // 维度名称
    questionIdList: [], // 包换的题目id
    dimensionResultEvaluationList: [], // 解释结果
    dimensionResultEvaluationListRadio: false,
    // showScore: '', // 维度原始分
    showScore: false,
    averageScore: false,
    stdScoreCalcFormula: '', // 维度标准分
    stdScoreCalcFormulaRadio: false,
    stdScoreComparison: '', // 标准比较
    stdScoreComparisonRadio: false,
    changMoScoreComparison: '', // 常模比较
    changMoScoreComparisonRadio: false
};

const scalePick = [
    'name', 'alias', 'description', 'coverImageUrl', 'guideline',
    'categorySet', 'timeLimitInMinutes', 'price', 'categorySet',
    'omittableCount', 'displayTestCount', 'visible'
];


const defaultScale = {
    id: '', // id
    name: '', // 量表名称
    alias: '', // 量表别名
    brief: '', // 关键字
    description: '', // 描述
    coverImageUrl: '', // 量表图片
    createdAt: '', // 创建时间
    updatedAt: '', // 更新时间
    guideline: '', // 指导语
    categorySet: [], // 所属类型
    price: 0, // 价格

    questionCount: '', // 题目数
    timeLimitInMinutes: 0, // 限时
    timeLimitInMinutesRadio: false, // 限时是否选中
    omittableCount: 0, // 免答
    omittableCountRadio: false, // 免答是否选中
    actualTestCount: '', // 被测次数
    displayTestCount: '', // 假的被测次数
    visible: false, // 是否上架
    questionList: [], // 当前量表下的题目

    //  统计指标之总分指标
    resultEvaluationList: '', // 测试结果
    resultEvaluationListRadio: false,
    // scoreIndicatorsTwo: '',
    calcTotalScore: false, // 总分原始分
    stdScoreCalcFormula: '',  // 总分标准分
    stdScoreCalcFormulaRadio: false,
    positiveAnswerCriteria: '', // 阳性项目数
    positiveAnswerCriteriaRadio: false,
    stdScoreComparison: '', // 标准比较 stdScoreComparison
    stdScoreComparisonRadio: false,
    changMoScoreComparison: '', // 常模比较 changMoScoreComparison
    changMoScoreComparisonRadio: false,

    averageTotalScore: false, // 总均分
    positiveAverageScore: false, // 阳性项目均分
    negativeAnswerCriteria: '',
    negativeAnswerCriteriaRadio: '', // 阴性项目数

    //  统计指标之总分指标结束
    // 统计指标之维度指标
    evaluationDimensionList: [_.cloneDeep(defaultEvaluationDimensionList)], // evaluationDimensionList
    // 统计指标之维度指标结束

    status: false
};

const state = {
    searchField: _.cloneDeep(defaultSearchFiled),
    list: _.cloneDeep(DEFAULT_LIST),
    currentScale: _.cloneDeep(defaultScale)
};

const getters = {
    searchField(state) {
        return state.searchField;
    },
    list(state) {
        return state.list;
    },
    currentScale(state) {
        return state.currentScale;
    },
    questionList(state) {
        return state.currentScale.questionList;
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
    //  当前量表
    setCurrentScale(state, payload) {
        state.currentScale = payload.scale;
    },
    updateCurrentScale(state, payload) {
        let {key, value} = payload;
        state.currentScale[key] = value;

        if (key === 'omittableCountRadio' && value === false) {
            state.currentScale.omittableCount = 0;
        }

        if (key === 'timeLimitInMinutesRadio' && value === false) {
            state.currentScale.timeLimitInMinutes = 0;
        }

        if (key === 'resultEvaluationListRadio' && value === false) {
            state.currentScale.resultEvaluationList = [];
        }

        if (key === 'stdScoreCalcFormulaRadio' && value === false) {
            state.currentScale.stdScoreCalcFormula = '';
        }

        if (key === 'positiveAnswerCriteriaRadio' && value === false) {
            state.currentScale.positiveAnswerCriteria = '';
        }

        if (key === 'negativeAnswerCriteriaRadio' && value === false) {
            state.currentScale.negativeAnswerCriteria = '';
        }

        if (key === 'stdScoreComparisonRadio' && value === false) {
            state.currentScale.stdScoreComparison = '';
        }

        if (key === 'changMoScoreComparisonRadio' && value === false) {
            state.currentScale.changMoScoreComparison = '';
        }
    },
    updateDimensionalIndicatorByIndex(state, payload) {
        let {key, value, index} = payload;
        _.set(state.currentScale.evaluationDimensionList, `${index}.${key}`, value);
    },
    resetCurrentScale(state) {
        state.currentScale = _.cloneDeep(defaultScale);
    },
    addCategoryToSet(state, payload) {
        let {category} = payload;
        state.currentScale.categorySet.push(category);
        state.currentScale.categorySet = _.uniqBy(state.currentScale.categorySet, 'id');
    },
    deleteCategoryFromSet(state, payload) {
        let {id} = payload;
        state.currentScale.categorySet = state.currentScale.categorySet.filter((item) => item.id !== id);
    },
    // 当前量表的题目相关操作
    addQuestionToScale(state, payload) {
        let {question} = payload;
        state.currentScale.questionList.push(question);
        state.currentScale.questionList = _.sortBy(state.currentScale.questionList, (question) => question.sort);
    },
    deleteQuestionFromScale(state, payload) {
        let {id} = payload;
        state.currentScale.questionList = state.currentScale.questionList.filter((item) => item.id !== id);
    },
    //  统计指标维度指标的相关操作
    addDimensionalIndicator(state) {
        state.currentScale.evaluationDimensionList.push(_.cloneDeep(defaultEvaluationDimensionList));
    },
    deleteDimensionalIndicator(state, payload) {
        let {index} = payload;
        state.currentScale.evaluationDimensionList.splice(index, 1);
    },
    addQuestionToDimensionalIndicatorQuestionList(state, payload) {
        let {question, index} = payload;
        state.currentScale.evaluationDimensionList[index].questionIdList.push(question);
        state.currentScale.evaluationDimensionList[index].questionIdList = _.uniqBy(state.currentScale.evaluationDimensionList[index].questionIdList, 'id');
    },
    deleteQuestionFromDimensionalIndicatorQuestionList(state, payload) {
        let {index, questionIndex} = payload;
        state.currentScale.evaluationDimensionList[index].questionIdList.splice(questionIndex, 1);
    },
    setQuestionToDimensionalIndicatorQuestionList(state, payload) {
        let {questions, index} = payload;
        state.currentScale.evaluationDimensionList[index].questionIdList = _.cloneDeep(questions);
    },
    //  增加测量结果
    addTestResult(state, payload) {
        let {testResult} = payload;
        state.currentScale.resultEvaluationList.push(testResult);
    },
    editTestResult(state, payload) {
        let {testResult, index} = payload;
        _.set(state.currentScale.resultEvaluationList, `${index}`, testResult);
    },
    //  删除测量结果
    deleteTestResult(state, payload) {
        let {index} = payload;
        state.currentScale.resultEvaluationList = state.currentScale.resultEvaluationList.filter((_, _index) => _index !== index);
    },
    addExplanationResult(state, payload) {
        let {testResult, index} = payload;
        state.currentScale.evaluationDimensionList = state.currentScale.evaluationDimensionList.map((item, _index) => {
            if (index === _index) {
                item.dimensionResultEvaluationList.push(testResult);
            }
            return item;
        });
    },
    editExplanationResult(state, payload) {
        let {testResult, index, editIndex} = payload;
        state.currentScale.evaluationDimensionList = state.currentScale.evaluationDimensionList.map((item, _index) => {
            if (index === _index) {
                _.set(item.dimensionResultEvaluationList, `${editIndex}`, testResult);
            }
            return item;
        });
    },
    deleteExplanationResult(state, payload) {
        let {index, _index} = payload;
        state.currentScale.evaluationDimensionList[index].dimensionResultEvaluationList.splice(_index, 1);
    }
}

let isLoading = false;

const actions = {
    async createScale({state}) {
        try {
            if (!isLoading) {
                isLoading = true;
                let scale = _.pick(state.currentScale, scalePick);
                let res = await service.createScale(scale);
                isLoading = false;
                return res;
            }
        } catch (err) {
            console.log(err);
            isLoading = false;
        }
    },
    async putScaleById({state}) {
        try {
            let res = await service.putScaleById(formatScale(_.cloneDeep(state.currentScale)));
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async getScaleList({commit, state}) {
        try {
            let params = Object.assign({},
                state.searchField,
                state.list.pagination,
                {pageNum: state.list.pagination.pageNum - 1}
            );
            let res = await service.getScaleList(params);
            if (res && res.errorCode === 0) {
                let {total, pageNum, pageSize, body} = res;
                commit('setList', {data: body, pageNum: pageNum + 1, pageSize, total});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async getScaleById({commit}, id) {
        try {
            let res = await service.getScaleById(id);
            if (res && res.errorCode === 0) {
                commit('setCurrentScale', {scale: filterScale(res.body)});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async postQuestionToScale({commit}, {id, question}) {
        try {
            let res = await service.postQuestionToScale(id, question);
            if (res && res.errorCode === 0) {
                commit('addQuestionToScale', {question: res.body});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    //  题目相关
    async deleteQuestionById({commit}, id) {
        try {
            let res = await service.deleteQuestionById(id);
            if (res && res.errorCode === 0) {
                commit('deleteQuestionFromScale', {id});
            }
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async updateQuestion(obj, {id, question}) {
        try {
            let res = await service.updateQuestion(id, question);
            return res;
        } catch (err) {
            console.log(err);
        }
    },
    async questionSort({state}, id) {
        try {
            let idList = state.currentScale.questionList.map((item) => item.id);
            let res = await service.questionSort(id, idList);
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

function filterScale(scale) {
    return Object.assign({}, scale, {
        alias: scale.alias || '',
        brief: scale.brief || '',
        timeLimitInMinutesRadio: scale.timeLimitInMinutes !== 0, // 限时是否选中
        omittableCountRadio: scale.omittableCount !== 0,
        categorySet: _.isNull(scale.categorySet) ? [] : scale.categorySet,
        //  总分指标
        resultEvaluationList: _.isNull(scale.resultEvaluationList) ? [] : scale.resultEvaluationList,
        resultEvaluationListRadio: !(_.isNull(scale.resultEvaluationList) || scale.resultEvaluationList.length === 0),
        calcTotalScore: _.isNull(scale.calcTotalScore) ? false : scale.calcTotalScore,
        stdScoreCalcFormulaRadio: !(_.isNull(scale.stdScoreCalcFormula) || scale.stdScoreCalcFormula === ''),
        positiveAnswerCriteriaRadio: !(_.isNull(scale.positiveAnswerCriteria) || scale.positiveAnswerCriteria === ''),
        negativeAnswerCriteriaRadio: !(_.isNull(scale.negativeAnswerCriteria) || scale.negativeAnswerCriteria === ''),
        stdScoreComparisonRadio: !(_.isNull(scale.stdScoreComparison) || scale.stdScoreComparison === ''),
        changMoScoreComparisonRadio: !(_.isNull(scale.changMoScoreComparison) || scale.changMoScoreComparison === ''),
        //  维度指标
        evaluationDimensionList: _.isNull(scale.evaluationDimensionList) ? [] : scale.evaluationDimensionList.map((item) => {
            let questionIdList = item.questionIdList.map((id) => {
                let obj = scale.questionList.find((_item) => _item.id === id);
                return obj;
            });

            item.questionIdList = questionIdList;
            item.stdScoreCalcFormulaRadio = !(_.isNull(item.stdScoreCalcFormula) || item.stdScoreCalcFormula === '');
            item.stdScoreComparisonRadio = !(_.isNull(item.stdScoreComparison) || item.stdScoreComparison === '');
            item.changMoScoreComparisonRadio = !(_.isNull(item.changMoScoreComparison) || item.changMoScoreComparison === '');
            item.dimensionResultEvaluationList = _.isNull(item.dimensionResultEvaluationList) ? [] : item.dimensionResultEvaluationList;
            item.dimensionResultEvaluationListRadio = !(_.isNull(item.dimensionResultEvaluationList) || item.dimensionResultEvaluationList.length === 0);
            return item;
        })
    });
}

function formatScale(scale) {
    return Object.assign({}, scale, {
        evaluationDimensionList: scale.evaluationDimensionList.map((item) => {
            item.questionIdList = item.questionIdList.map((question) => question.id);
            return item;
        })
    });
}
