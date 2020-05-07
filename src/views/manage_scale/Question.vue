<template>
    <div class="question-container">
        <h2 class="content-sub-title">
            题目信息
            <el-button @click="showQuestionDialog" class="my-add-cycle">
                <svg-icon icon-class="add"/>
            </el-button>
            <i @click="toggleQuestionList" class="el-icon-s-operation toggle-btn"></i>
        </h2>
        <draggable v-if="showQuestionList" @end="dragEndHandler" tag="ul" class="question-list" v-model="questions">
            <li v-for="(question, index) in questions" :key="index" class="question-item">
                <div class="header">
                    <span class="question-number text-success">题号: {{index + 1}}</span>
                    <span class="">({{question.multiChoices ? '多选' : '单选'}})</span>
                </div>
                <div class="btn-container">
                    <span @click="copyQuestionHandler(question)" class="edit">
                        <svg-icon icon-class="copy_btn"/>
                    </span>
                    <span @click="editQuestionHandler(question)" class="edit">
                        <svg-icon icon-class="edit"/>
                    </span>
                    <span @click="deleteQuestionHandler(question.id)" class="delete">
                        <svg-icon icon-class="remove_image_default"/>
                    </span>
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
        </draggable>
        <div class="bottom-btn">
            <el-button @click="showQuestionDialog" class="my-add-cycle">
                <svg-icon icon-class="add"/>
            </el-button>
        </div>
        <el-dialog
            title="题目"
            class="my-dialog"
            :visible.sync="questionDialogVisible"
            :show-close="true"
            @open="openDialogHandler"
            :before-close="beforeCloseHandler"
            :close-on-click-modal="false"
            :close-on-press-escape="false">
            <el-form :rules="valueRules" ref="questionForm" status-icon :model="question" label-width="120px" class="my-form" @submit.native.prevent>
                <el-form-item label="题号" prop="description">
                    <span v-if="isEdit">{{question.sort + 1}}</span>
                    <span v-else>{{questionList.length + 1}}</span>
                </el-form-item>
                <el-form-item label="题目" prop="description">
                    <div class="desc-wrapper">
                        <el-input
                            v-model="question.title"
                            type="textarea"
                            :maxlength="200"
                            placeholder="请输入内容">
                        </el-input>
                        <span class="desc-prompt">已输入{{question.title.length}}/200字</span>
                    </div>
                </el-form-item>
                <el-form-item label="是否多选" prop="multiChoices">
                    <el-radio v-model="question.multiChoices" :label="true">是</el-radio>
                    <el-radio v-model="question.multiChoices" :label="false">否</el-radio>
                </el-form-item>
                <div class="seperator-line"></div>
                <el-button @click="addAnswerHandler" class="my-add-cycle">
                    <svg-icon icon-class="add"/>
                </el-button>
                <ul class="question-answer-list">
                    <li v-for="(answer, index) in question.answerList" :key="index" class="question-answer-item">
                        <span class="answer-title">
                            <label class="required">选项{{index | numberToChar}}</label>
                            <el-input class="title-input" v-model="answer.title" placeholder="请输入内容"></el-input>
                        </span>
                        <span class="answer-score">
                            <label class="required">分值</label>
                            <el-input class="score-input" v-model="answer.score" placeholder="请输入内容"></el-input>
                        </span>
                        <span class="answer-allowCustom">
                            <el-checkbox v-model="answer.allowCustom">允许输入</el-checkbox>
                        </span>
                        <span class="remove-wrapper">
                            <i @click="deleteAnswerHandler(index)" v-if="index > 1" class="el-icon-remove text-danger"></i>
                            <i v-else></i>
                        </span>
                    </li>
                </ul>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelHandler">取 消</el-button>
                <el-button v-if="isEdit" type="primary" @click="editSuccessHandler">确 定</el-button>
                <el-button v-else type="primary" @click="successHandler">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import _ from 'lodash';
import draggable from 'vuedraggable';
export default {
    name: 'Question',
    components: {draggable},
    data() {
        return {
            questionDialogVisible: false,
            dragLoading: false,
            isEdit: false,
            question: {
                title: '',
                sort: 0,
                multiChoices: false,
                answerList: [
                    {
                        title: '',
                        score: '',
                        allowCustom: false
                    },
                    {
                        title: '',
                        score: '',
                        allowCustom: false
                    }
                ]
            },
            valueRules: {},
            showQuestionList: false,
            autofocus: true
        };
    },
    computed: {
        ...mapGetters({
            questionList: 'scale/questionList'
        }),
        questions: {
            get() {
                return this.questionList;
            },
            set(value) {
                this.updateCurrentScale({key: 'questionList', value});
            }
        }
    },
    created() {},
    methods: {
        ...mapMutations({
            updateCurrentScale: 'scale/updateCurrentScale'
        }),
        ...mapActions({
            postQuestionToScale: 'scale/postQuestionToScale',
            deleteQuestionById: 'scale/deleteQuestionById',
            questionSort: 'scale/questionSort',
            updateQuestion: 'scale/updateQuestion'
        }),
        // 弹框相关操作方法
        showQuestionDialog() {
            this.questionDialogVisible = true;
        },
        openDialogHandler() {
        },
        beforeCloseHandler() {
            this.closeQuestionDialog();
        },
        closeQuestionDialog() {
            this.questionDialogVisible = false;
            this.isEdit = false;
            this.question = {
                title: '',
                sort: 0,
                multiChoices: false,
                answerList: [
                    {
                        title: '',
                        score: '',
                        allowCustom: false
                    },
                    {
                        title: '',
                        score: '',
                        allowCustom: false
                    }
                ]
            };
        },
        cancelHandler() {
            this.closeQuestionDialog();
        },
        async successHandler() {
            try {
                this.question.sort = this.questionList.length;
                let {id} = this.$route.params;
                let res = await this.postQuestionToScale({id, question: this.question});
                if (res && res.errorCode === 0) {
                    this.closeQuestionDialog();
                }
            } catch (err) {
                console.log(err);
            }
        },
        // 弹框相关操作方法结束
        addAnswerHandler() {
            this.question.answerList.push({
                title: '',
                score: '',
                allowCustom: false
            });
        },
        deleteAnswerHandler(index) {
            this.question.answerList.splice(index, 1);
        },
        //  题目相关的处理
        addQuestionHandler() {
            this.isEdit = false;
            this.showQuestionDialog();
        },
        editQuestionHandler(question) {
            this.question = question;
            this.isEdit = true;
            this.showQuestionDialog();
        },
        copyQuestionHandler(question) {
            let newQuestion = _.omit(Object.assign({}, question, {title: ''}), ['sort']);
            this.question = newQuestion;
            this.addQuestionHandler();
        },
        async editSuccessHandler() {
            try {
                let {id} = this.$route.params;
                let res = await this.updateQuestion({id, question: this.question});
                if (res && res.errorCode === 0) {
                    this.closeQuestionDialog();
                }
            } catch (err) {
                console.log(err);
            }
        },
        async deleteQuestionHandler(id) {
            try {
                let confirm = await this.$confirm('你确定要删除该题目吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if (confirm) {
                    this.deleteQuestionById(id);
                    console.log(id);
                }
            } catch (err) {
                console.log(err);
            }
        },
        async dragEndHandler() {
            try {
                if (!this.dragLoading) {
                    this.dragLoading = true;
                    let {id} = this.$route.params;
                    let res = await this.questionSort(id);
                    if (res && res.errorCode === 0) {
                        this.$message.success('排序成功');
                    }
                    this.dragLoading = false;
                }
            } catch (err) {
                console.log(err);
                this.dragLoading = false;
            }
        },
        toggleQuestionList() {
            this.showQuestionList = !this.showQuestionList;
        }
    }
}
</script>
<style lang="scss" scoped>

.my-add-cycle {
    margin: 20px 0;
}

.toggle-btn {
    color: $mainColor;
    font-size: 22px;
    margin-left: 20px;
    cursor: pointer;
}

.bottom-btn {
    padding-left: 86px;
    text-align: left;
}

.question-answer-list {
    .question-answer-item {
        margin-bottom: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .answer-title {
            flex: 1;
            .title-input {
                width: 88%;
            }
        }
        .answer-score {
            width: 140px;
            margin: 0 10px;
            .score-input {
                width: 80px;
            }
        }
        label {
            width: 46px;
            margin-right: 10px;
            display: inline-block;
            &.required {
                &::after {
                    content: "*";
                    color: #f56c6c;
                    line-height: 14px;
                }
            }
        }
        .answer-allowCustom {
            width: 80px;
        }
        .remove-wrapper {
            width: 20px;
            i {
                cursor: pointer;
            }
        }
    }
}
</style>
