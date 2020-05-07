<template>
    <div class="statistical-indicators-container">
        <h2 class="content-sub-title">统计指标</h2>
        <div class="total-score-indicators">
            <h2 class="content-sub-title">总分指标</h2>
            <el-form ref="scoreIndicatorsForm" :rules="valueRules" status-icon label-width="120px" class="my-form" @submit.native.prevent>
                <el-form-item label="测试结果" prop="resultEvaluationList">
                    <div class="my-tags">
                        <el-tag
                            :key="index"
                            v-for="(item, index) in scale.resultEvaluationList"
                            closable
                            :disable-transitions="false"
                            @click="editTestResultHandler(index)"
                            @close="deleteTestResultHandler(index)">
                            {{item.result}}
                        </el-tag>
                    </div>
                    <div class="radio-group">
                        <el-radio @input="toggleRadioHandler(true, 'resultEvaluationListRadio')" :value="scale.resultEvaluationListRadio" :label="true">是</el-radio>
                        <el-radio @input="toggleRadioHandler(false, 'resultEvaluationListRadio')" :value="scale.resultEvaluationListRadio" :label="false">否</el-radio>
                        <el-button v-if="scale.resultEvaluationListRadio" @click="addTestResultHandler" class="my-add-cycle">
                            <svg-icon icon-class="add"/>
                        </el-button>
                    </div>
                </el-form-item>
                <el-form-item label="总分原始分" prop="calcTotalScore">
                    <el-radio @input="toggleRadioHandler(true, 'calcTotalScore')" :value="scale.calcTotalScore" :label="true">是</el-radio>
                    <el-radio @input="toggleRadioHandler(false, 'calcTotalScore')" :value="scale.calcTotalScore" :label="false">否</el-radio>
                </el-form-item>
                <el-form-item label="总分标准分" prop="stdScoreCalcFormula">
                    <el-radio @input="toggleRadioHandler(true, 'stdScoreCalcFormulaRadio')" :value="scale.stdScoreCalcFormulaRadio" :label="true">是</el-radio>
                    <el-radio @input="toggleRadioHandler(false, 'stdScoreCalcFormulaRadio')" :value="scale.stdScoreCalcFormulaRadio" :label="false">否</el-radio>
                    <el-input
                        v-if="scale.stdScoreCalcFormulaRadio"
                        clearable
                        @input="inputHandler($event, 'stdScoreCalcFormula')"
                        :value="scale.stdScoreCalcFormula">
                    </el-input>
                </el-form-item>
                <el-form-item label="总均分" prop="averageTotalScore">
                    <el-radio @input="toggleRadioHandler(true, 'averageTotalScore')" :value="scale.averageTotalScore" :label="true">是</el-radio>
                    <el-radio @input="toggleRadioHandler(false, 'averageTotalScore')" :value="scale.averageTotalScore" :label="false">否</el-radio>
                </el-form-item>
                <el-form-item label="阳性项目均分" prop="positiveAverageScore">
                    <el-radio @input="toggleRadioHandler(true, 'positiveAverageScore')" :value="scale.positiveAverageScore" :label="true">是</el-radio>
                    <el-radio @input="toggleRadioHandler(false, 'positiveAverageScore')" :value="scale.positiveAverageScore" :label="false">否</el-radio>
                </el-form-item>
                <el-form-item label="阳性项目数" prop="positiveAnswerCriteria">
                    <el-radio @input="toggleRadioHandler(true, 'positiveAnswerCriteriaRadio')" :value="scale.positiveAnswerCriteriaRadio" :label="true">是</el-radio>
                    <el-radio @input="toggleRadioHandler(false, 'positiveAnswerCriteriaRadio')" :value="scale.positiveAnswerCriteriaRadio" :label="false">否</el-radio>
                    <el-input
                        v-if="scale.positiveAnswerCriteriaRadio"
                        clearable
                        @input="inputHandler($event, 'positiveAnswerCriteria')"
                        :value="scale.positiveAnswerCriteria">
                    </el-input>
                </el-form-item>
                <el-form-item label="阴性项目数" prop="negativeAnswerCriteria">
                    <el-radio @input="toggleRadioHandler(true, 'negativeAnswerCriteriaRadio')" :value="scale.negativeAnswerCriteriaRadio" :label="true">是</el-radio>
                    <el-radio @input="toggleRadioHandler(false, 'negativeAnswerCriteriaRadio')" :value="scale.negativeAnswerCriteriaRadio" :label="false">否</el-radio>
                    <el-input
                        v-if="scale.negativeAnswerCriteriaRadio"
                        clearable
                        @input="inputHandler($event, 'negativeAnswerCriteria')"
                        :value="scale.negativeAnswerCriteria">
                    </el-input>
                </el-form-item>
                <el-form-item label="标准比较" prop="stdScoreComparison">
                    <el-radio @input="toggleRadioHandler(true, 'stdScoreComparisonRadio')" :value="scale.stdScoreComparisonRadio" :label="true">是</el-radio>
                    <el-radio @input="toggleRadioHandler(false, 'stdScoreComparisonRadio')" :value="scale.stdScoreComparisonRadio" :label="false">否</el-radio>
                    <el-input
                        v-if="scale.stdScoreComparisonRadio"
                        clearable
                        @input="inputHandler($event, 'stdScoreComparison')"
                        :value="scale.stdScoreComparison">
                    </el-input>
                </el-form-item>
                <el-form-item label="常模比较" prop="changMoScoreComparison">
                    <el-radio @input="toggleRadioHandler(true, 'changMoScoreComparisonRadio')" :value="scale.changMoScoreComparisonRadio" :label="true">是</el-radio>
                    <el-radio @input="toggleRadioHandler(false, 'changMoScoreComparisonRadio')" :value="scale.changMoScoreComparisonRadio" :label="false">否</el-radio>
                    <el-input
                        v-if="scale.changMoScoreComparisonRadio"
                        clearable
                        @input="inputHandler($event, 'changMoScoreComparison')"
                        :value="scale.changMoScoreComparison">
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="seperator-line"></div>
        <div class="dimensional-indicators">
            <h2 class="content-sub-title">
                维度指标
                <el-button @click="addDimensionalIndicatorsHandler" class="my-add-cycle">
                    <svg-icon icon-class="add"/>
                </el-button>
            </h2>
            <ul class="dimensional-indicator-list">
                <li v-for="(item, index) in scale.evaluationDimensionList" :key="index" class="dimensional-indicator-item">
                    <el-form status-icon label-width="120px" class="my-other-form" @submit.native.prevent>
                        <el-form-item label="维度名称">
                            <el-input
                                clearable
                                @input="updateDimensionalHandler($event, 'name', index)"
                                :value="item.name">
                            </el-input>
                            <i class="el-icon-delete" @click="deleteDimensionalIndicatorsHandler(index)"></i>
                        </el-form-item>
                        <el-form-item label="包含题目" prop="categoryList">
                            <el-select
                                :value="item.questionIdList"
                                multiple
                                value-key="id"
                                @input="selectQuestion($event, index)"
                                placeholder="请选择">
                                    <el-option
                                    v-for="(_item) in scale.questionList"
                                    :key="_item.id"
                                    :label="(_item.sort + 1)"
                                    :value="_item">
                                    </el-option>
                            </el-select>
                            <!--
                            <div class="my-tags">
                                <el-tag
                                    :key="_index"
                                    v-for="(question, _index) in item.questionIdList"
                                    closable
                                    :disable-transitions="false"
                                    @close="deleteQuestionHandler(index, _index)">
                                    {{questionTitle(question)}}
                                </el-tag>
                            </div>
                            <question-search :handleSelect="(question) => { return selectQuestionHandler(question, index); } "></question-search>
                            -->
                        </el-form-item>
                        <el-form-item label="解释结果" prop="dimensionResultEvaluationList">
                            <div class="my-tags">
                                <el-tag
                                    :key="_index"
                                    v-for="(item, _index) in item.dimensionResultEvaluationList"
                                    closable
                                    :disable-transitions="false"
                                    @click="editExplanationResultHandler(index, _index)"
                                    @close="deleteExplanationResultHandler(index, _index)">
                                    {{item.result}}
                                </el-tag>
                            </div>
                            <div class="radio-group">
                                <el-radio @input="toggleRadioWithIndexHandler(true, 'dimensionResultEvaluationListRadio', index)" :value="item.dimensionResultEvaluationListRadio" :label="true">是</el-radio>
                                <el-radio @input="toggleRadioWithIndexHandler(false, 'dimensionResultEvaluationListRadio', index)" :value="item.dimensionResultEvaluationListRadio" :label="false">否</el-radio>
                                <el-button v-if="item.dimensionResultEvaluationListRadio" @click="addExplanationResultHandler(index)" class="my-add-cycle">
                                    <svg-icon icon-class="add"/>
                                </el-button>
                            </div>
                        </el-form-item>
                        <el-form-item label="维度均分">
                            <el-radio @input="toggleRadioWithIndexHandler(true, 'averageScore', index)" :value="item.averageScore" :label="true">是</el-radio>
                            <el-radio @input="toggleRadioWithIndexHandler(false, 'averageScore', index)" :value="item.averageScore" :label="false">否</el-radio>
                        </el-form-item>
                        <el-form-item label="维度原始分">
                            <el-radio @input="toggleRadioWithIndexHandler(true, 'showScore', index)" :value="item.showScore" :label="true">是</el-radio>
                            <el-radio @input="toggleRadioWithIndexHandler(false, 'showScore', index)" :value="item.showScore" :label="false">否</el-radio>
                        </el-form-item>
                        <el-form-item label="维度标准分">
                            <el-radio @input="toggleRadioWithIndexHandler(true, 'stdScoreCalcFormulaRadio', index)" :value="item.stdScoreCalcFormulaRadio" :label="true">是</el-radio>
                            <el-radio @input="toggleRadioWithIndexHandler(false, 'stdScoreCalcFormulaRadio', index)" :value="item.stdScoreCalcFormulaRadio" :label="false">否</el-radio>
                            <el-input
                                v-if="item.stdScoreCalcFormulaRadio"
                                clearable
                                @input="updateDimensionalHandler($event, 'stdScoreCalcFormula', index)"
                                :value="item.stdScoreCalcFormula">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="标准比较">
                            <el-radio @input="toggleRadioWithIndexHandler(true, 'stdScoreComparisonRadio', index)" :value="item.stdScoreComparisonRadio" :label="true">是</el-radio>
                            <el-radio @input="toggleRadioWithIndexHandler(false, 'stdScoreComparisonRadio', index)" :value="item.stdScoreComparisonRadio" :label="false">否</el-radio>
                            <el-input
                                v-if="item.stdScoreComparisonRadio"
                                clearable
                                @input="updateDimensionalHandler($event, 'stdScoreComparison', index)"
                                :value="item.stdScoreComparison">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="常模比较">
                            <el-radio @input="toggleRadioWithIndexHandler(true, 'changMoScoreComparisonRadio', index)" :value="item.changMoScoreComparisonRadio" :label="true">是</el-radio>
                            <el-radio @input="toggleRadioWithIndexHandler(false, 'changMoScoreComparisonRadio', index)" :value="item.changMoScoreComparisonRadio" :label="false">否</el-radio>
                            <el-input
                                v-if="item.changMoScoreComparisonRadio"
                                clearable
                                @input="updateDimensionalHandler($event, 'changMoScoreComparison', index)"
                                :value="item.changMoScoreComparison">
                            </el-input>
                        </el-form-item>
                    </el-form>
                    <div class="seperator-line"></div>
                </li>
            </ul>
        </div>
        <el-dialog
            title="测试结果"
            class="my-dialog"
            :visible.sync="testResultDialogVisible"
            :show-close="true"
            @open="openDialogHandler"
            :before-close="beforeCloseHandler"
            :close-on-click-modal="false"
            :close-on-press-escape="false">
            <el-form :rules="testResultFormValueRules" ref="testResultForm" status-icon :model="testResult" label-width="120px" class="my-form" @submit.native.prevent>
                <el-form-item label="描述" prop="result">
                    <el-input
                        maxlength="15"
                        v-model="testResult.result"
                        placeholder="请输入内容">
                    </el-input>
                </el-form-item>
                <el-form-item label="详细描述" prop="resultDetail">
                    <el-input
                        maxlength="200"
                        type="textarea"
                        v-model="testResult.resultDetail"
                        placeholder="请输入内容">
                    </el-input>
                </el-form-item>
                <el-form-item label="最小值" prop="minScore">
                    <el-input
                        v-model="testResult.minScore"
                        placeholder="请输入内容">
                    </el-input>
                </el-form-item>
                <el-form-item label="最大值" prop="maxScore">
                    <el-input
                        v-model="testResult.maxScore"
                        placeholder="请输入内容">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelHandler">取 消</el-button>
                <el-button type="primary" @click="successHandler">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import _ from 'lodash';
export default {
    name: 'StatisticalIndicators',
    data() {
        return {
            testResultDialogVisible: false,
            testResult: {
                maxScore: '',
                minScore: '',
                resultDetail: '',
                result: ''
            },
            editIndex: null,
            valueRules: {},
            testResultFormValueRules: {
                result: [
                    { required: true, message: '请输入描述' }
                ],
                minScore: [
                    { required: true, message: '请输入最小值' }
                ],
                maxScore: [
                    { required: true, message: '请输入最大值' }
                ]
            },
            explanationResultIndex: null
        };
    },
    computed: {
        ...mapGetters({
            scale: 'scale/currentScale'
        }),
        questionTitle() {
            return (question) => {
                return `${question.sort + 1}: ${question.title}`;
            }
        }
    },
    methods: {
        ...mapMutations({
            updateCurrentScale: 'scale/updateCurrentScale',
            updateDimensionalIndicatorByIndex: 'scale/updateDimensionalIndicatorByIndex',
            addDimensionalIndicator: 'scale/addDimensionalIndicator',
            deleteDimensionalIndicator: 'scale/deleteDimensionalIndicator',
            addQuestionToDimensionalIndicatorQuestionList: 'scale/addQuestionToDimensionalIndicatorQuestionList',
            deleteQuestionFromDimensionalIndicatorQuestionList: 'scale/deleteQuestionFromDimensionalIndicatorQuestionList',
            setQuestionToDimensionalIndicatorQuestionList: 'scale/setQuestionToDimensionalIndicatorQuestionList',
            addTestResult: 'scale/addTestResult',
            editTestResult: 'scale/editTestResult',
            addExplanationResult: 'scale/addExplanationResult',
            editExplanationResult: 'scale/editExplanationResult',
            deleteTestResult: 'scale/deleteTestResult',
            deleteExplanationResult: 'scale/deleteExplanationResult'
        }),
        getResultEvaluationList() {
            return _.cloneDeep(this.scale.resultEvaluationList);
        },
        inputHandler(value, key) {
            this.updateCurrentScale({key, value});
        },
        updateDimensionalHandler(value, key, index) {
            this.updateDimensionalIndicatorByIndex({key, value, index});
        },
        toggleRadioHandler(value, key) {
            this.updateCurrentScale({key, value});
        },
        toggleRadioWithIndexHandler(value, key, index) {
            this.updateDimensionalIndicatorByIndex({key, value, index});
        },
        selectQuestion(questions, index) {
            this.setQuestionToDimensionalIndicatorQuestionList({questions, index});
        },
        selectQuestionHandler(question, index) {
            this.addQuestionToDimensionalIndicatorQuestionList({question, index});
        },
        deleteQuestionHandler(index, questionIndex) {
            this.deleteQuestionFromDimensionalIndicatorQuestionList({index, questionIndex});
        },
        addDimensionalIndicatorsHandler() {
            this.addDimensionalIndicator();
        },
        async deleteDimensionalIndicatorsHandler(index) {
            try {
                let confirm = await this.$confirm('你确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if (confirm) {
                    this.deleteDimensionalIndicator({index});
                }
            } catch (err) {
                console.log(err);
            }
        },
        //  测试结果的弹窗相关操作
        openDialogHandler() {},
        beforeCloseHandler() {
            this.closeTestResultDialog();
        },
        cancelHandler() {
            this.closeTestResultDialog();
        },
        async successHandler() {
            try {
                let valid = await this.$refs.testResultForm.validate();
                if (valid) {
                    let testResult = _.cloneDeep(this.testResult);
                    if (_.isNull(this.explanationResultIndex)) {
                        if (_.isNull(this.editIndex)) {
                            this.addTestResult({testResult});
                        } else {
                            this.editTestResult({testResult, index: this.editIndex});
                        }
                        this.closeTestResultDialog();
                    } else {
                        if (_.isNull(this.editIndex)) {
                            this.addExplanationResult({index: this.explanationResultIndex, testResult});
                        } else {
                            this.editExplanationResult({index: this.explanationResultIndex, testResult, editIndex: this.editIndex});
                        }
                        this.closeTestResultDialog();
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        closeTestResultDialog() {
            this.testResult = {
                maxScore: '',
                minScore: '',
                result: ''
            };
            this.editIndex = null;
            this.testResultDialogVisible = false;
            this.explanationResultIndex = null;
        },
        addTestResultHandler() {
            this.testResultDialogVisible = true;
        },
        editTestResultHandler(index) {
            this.testResultDialogVisible = true;
            this.explanationResultIndex = null;
            this.editIndex = index;

            let testResult = _.get(this.scale.resultEvaluationList, index);
            this.testResult = _.cloneDeep(testResult);
        },
        async deleteTestResultHandler(index) {
            try {
                let confirm = await this.$confirm('你确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if (confirm) {
                    this.deleteTestResult({index});
                }
            } catch (err) {
                console.log(err);
            }
        },
        addExplanationResultHandler(index) {
            this.testResultDialogVisible = true;
            this.explanationResultIndex = index;
        },
        editExplanationResultHandler(index, _index) {
            this.testResultDialogVisible = true;
            this.explanationResultIndex = index;
            this.editIndex = _index;

            let testResult = _.get(this.scale.evaluationDimensionList, `${index}.dimensionResultEvaluationList.${_index}`);
            this.testResult = _.cloneDeep(testResult);
        },
        async deleteExplanationResultHandler(index, _index) {
            try {
                let confirm = await this.$confirm('你确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if (confirm) {
                    this.deleteExplanationResult({index, _index});
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.total-score-indicators, .dimensional-indicators {
    margin-left: 100px;
}

.my-other-form {
    text-align: left;
    margin-top: 20px;
    overflow: hidden;
    .el-input,
    .el-date-editor,
    .el-autocomplete {
        width: 300px;
        height: 34px;
        .el-input__icon {
            height: 34px;
            line-height: 34px;
        }
        .el-input__inner {
            height: 34px;
        }
    }
    .el-select {
        width: 300px;
    }

    .el-textarea {
        width: 300px;
        .el-textarea__inner {
            min-height: 200px;
            height: 200px;
        }
    }
    .el-input--prefix .el-input__inner {
        padding-left: 15px;
    }
    .el-checkbox {
        padding: 0;
    }
}

.el-icon-delete {
    color: $dangerColor;
    margin-left: 20px;
    font-size: 20px;
}
</style>
