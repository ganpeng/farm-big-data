<template>
    <div class="scale-detail-container">
        <h2 class="content-title">量表详情</h2>
        <div class="seperator-line"></div>
        <div class="common-details">
            <div class="poster-section">
                <div class="visible-wrapper">
                    <span :class="['visible', scale.visible ? 'is-visible' : 'dis-visible']">
                        {{scale.visible ? '上架' : '下架'}}
                    </span>
                </div>
                <img :src="getImageUrl(scale.coverImageUrl)" alt="">
            </div>
            <div class="info-section">
                <div class="title-wrapper">
                    <div class="left-side">
                        <span class="title">{{scale.name}}</span>
                    </div>
                    <div class="right-wrapper">
                        <div class="date">
                            <span class="create-date">
                                创建于{{scale.createdAt | dateFormat}}
                            </span>
                            <span class="update-date">
                                更新于{{scale.updatedAt | dateFormat}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="seperator-line"></div>
                <div class="tags-section">
                    <span v-for="(item) in scale.categorySet" :key="item.id" class="category-tag">
                        {{item.name}}
                    </span>
                </div>
                <div class="text-info-section">
                    <ul class="text-info">
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">别名：</span>
                                <span class="value">{{scale.alias}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">量表简述：</span>
                                <span class="value">{{scale.brief}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">免答设置：</span>
                                <span class="value">{{scale.omittableCount}}个</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">限时设置：</span>
                                <span class="value">{{scale.timeLimitInMinutes}}分</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">实际评测次数：</span>
                                <span class="value">{{scale.actualTestCount}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">展示评测次数：</span>
                                <span class="value">{{scale.displayTestCount}}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="scale-description">
                        <span class="label">简介：</span>
                        <span class="value">{{scale.description}}</span>
                    </div>
                    <div class="scale-guideline">
                        <span class="label">指导语：</span>
                        <span class="value">{{scale.guideline}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="question-container">
            <h2 class="content-sub-title">
                题目信息
                <i @click="toggleQuestionList" class="el-icon-s-operation toggle-btn"></i>
            </h2>
            <ul v-if="showQuestionList" class="question-list">
                <li v-for="(question, index) in scale.questionList" :key="index" class="question-item">
                    <div class="header">
                        <span class="question-number text-success">题号: {{index + 1}}</span>
                        <span class="">({{question.multiChoices ? '多选' : '单选'}})</span>
                    </div>
                    <div class="content">
                        <div class="title"> {{question.title}}</div>
                        <ul class="answer-list">
                            <li v-for="(answer, answerIndex) in question.answerList" :key="answerIndex" class="answer-item">
                                <span class="answer-title">{{answerIndex | numberToChar}} {{answer.title}}</span>
                                <span class="answer-score">{{answer.score}}</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="seperator-line"></div>
        <div class="statistical-indicators-container">
            <h2 class="content-sub-title">统计指标</h2>
            <div class="total-score-indicators">
                <h2 class="content-sub-title">总分指标</h2>
                <el-form ref="scoreIndicatorsForm" status-icon label-width="120px" class="my-form" @submit.native.prevent>
                    <el-form-item label="测试结果" prop="resultEvaluationList">
                        <div class="my-tags">
                            <el-tag
                                :key="index"
                                v-for="(item, index) in scale.resultEvaluationList"
                                :disable-transitions="false">
                                {{item.result}}
                            </el-tag>
                        </div>
                    </el-form-item>
                    <el-form-item label="总分原始分" prop="calcTotalScore">
                        <span>{{scale.calcTotalScore}}</span>
                    </el-form-item>
                    <el-form-item label="总分标准分" prop="stdScoreCalcFormula">
                        <span>{{scale.stdScoreCalcFormula}}</span>
                    </el-form-item>
                    <el-form-item label="总均分" prop="stdScoreCalcFormula">
                        <span>{{scale.averageTotalScore}}</span>
                    </el-form-item>
                    <el-form-item label="阳性项目均分" prop="stdScoreCalcFormula">
                        <span>{{scale.positiveAverageScore}}</span>
                    </el-form-item>
                    <el-form-item label="阳性项目数" prop="positiveAnswerCriteria">
                        <span>{{scale.positiveAnswerCriteria}}</span>
                    </el-form-item>
                    <el-form-item label="阴性项目数" prop="positiveAnswerCriteria">
                        <span>{{scale.negativeAnswerCriteria}}</span>
                    </el-form-item>
                    <el-form-item label="标准比较" prop="stdScoreComparison">
                        <span>{{scale.stdScoreComparison}}</span>
                    </el-form-item>
                    <el-form-item label="常模比较" prop="changMoScoreComparison">
                        <span>{{scale.changMoScoreComparison}}</span>
                    </el-form-item>
                </el-form>
            </div>
            <div class="seperator-line"></div>
            <div class="dimensional-indicators">
                <h2 class="content-sub-title">
                    维度指标
                </h2>
                <ul class="dimensional-indicator-list">
                    <li v-for="(item, index) in scale.evaluationDimensionList" :key="index" class="dimensional-indicator-item">
                        <el-form status-icon label-width="120px" class="my-form" @submit.native.prevent>
                            <el-form-item label="维度名称">
                                <span>{{item.name}}</span>
                            </el-form-item>
                            <el-form-item label="包含题目" prop="categoryList">
                                <div class="my-tags">
                                    <el-tag
                                        :key="_index"
                                        v-for="(question, _index) in  item.questionIdList"
                                        :disable-transitions="false">
                                        {{questionTitle(question)}}
                                    </el-tag>
                                </div>
                            </el-form-item>
                            <el-form-item label="维度原始分">
                                <span>{{item.showScore}}</span>
                            </el-form-item>
                            <el-form-item label="维度均分">
                                <span>{{item.averageScore}}</span>
                            </el-form-item>
                            <el-form-item label="维度标准分">
                                <span>{{item.stdScoreCalcFormula}}</span>
                            </el-form-item>
                            <el-form-item label="标准比较">
                                <span>{{item.stdScoreComparison}}</span>
                            </el-form-item>
                            <el-form-item label="常模比较">
                                <span>{{item.changMoScoreComparison}}</span>
                            </el-form-item>
                        </el-form>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="editScale">编辑</el-button>
            <el-button class="btn-style-three" @click="gotoScaleList">返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'ScaleDetail',
    data() {
        return {
            showQuestionList: false
        }
    },
    async created() {
        try {
            let {id} = this.$route.params;
            this.getScaleById(id);
        } catch (err) {
            console.log(err);
        }
    },
    computed: {
        ...mapGetters({
            scale: 'scale/currentScale'
        }),
        questionTitle() {
            return (question) => {
                return `${question.sort + 1}: ${question.title}`;
            }
        },
        getImageUrl() {
            return (url) => {
                return `${process.env.VUE_APP_IMAGE_ROOT}${url}`;
            };
        }
    },
    methods: {
        ...mapActions({
            getScaleById: 'scale/getScaleById',
        }),
        editScale() {
            let {id} = this.$route.params;
            this.$router.push({name: 'ScaleEdit', params: {id}});
        },
        gotoScaleList() {
            this.$router.push({name: 'ScaleList'});
        },
        toggleQuestionList() {
            this.showQuestionList = !this.showQuestionList;
        }
    }
}
</script>
<style lang="scss" scoped>
.poster-section {
    img {
        display: block;
        width: 200px;
        height: 200px;
        border: 1px solid #3E495E;
        border-radius: 8px;
        box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
    }
}
.text-info {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    .text-info-item {
        width: 50%;
        font-size: 16px;
        line-height: 32px;
        color: #A8ABB3;
        .text-info-item-wrapper {
            display: flex;
            .label {
                width: 120px;
                text-align: right;
            }
        }
    }
}
.scale-description, .scale-guideline {
    display: flex;
    width: 80%;
    margin-bottom: 10px;
    .label {
        width: 120px;
        text-align: right;
    }
    .value {
        flex: 1;
        text-align: left;
    }
}
.toggle-btn {
    color: $mainColor;
    font-size: 22px;
    margin-left: 20px;
    cursor: pointer;
}
</style>
