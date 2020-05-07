<template>
    <div class="account-detail-container">
        <h2 class="content-title">账号详情</h2>
        <div class="seperator-line"></div>
        <div class="common-details">
            <div class="poster-section">
                <img class="avatar" :src="account.avatarUrl" alt="">
            </div>
            <div class="info-section">
                <div class="title-wrapper">
                    <div class="left-side">
                        <!-- <span class="title">{{account.no}} {{account.name}}</span> -->
                    </div>
                    <div class="right-wrapper">
                        <div class="date">
                            <span class="create-date">
                                创建于{{account.createdAt | dateFormat}}
                            </span>
                            <span class="update-date">
                                更新于{{account.updatedAt | dateFormat}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="seperator-line"></div>
                <div class="text-info-section">
                    <ul class="text-info">
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">账户Id：</span>
                                <span class="value">{{account.id}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">openId：</span>
                                <span class="value">{{account.openid}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">姓名：</span>
                                <span class="value">{{account.name}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">手机号：</span>
                                <span class="value">{{account.mobile}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">性别：</span>
                                <span class="value">{{account.gender === 1 ? '男' : '女'}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">昵称：</span>
                                <span class="value">{{account.nickname}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">婚姻状况：</span>
                                <span class="value">{{account.marriage === 1 ? '已婚' : '未婚'}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">文化程度：</span>
                                <span class="value">{{account.culturalDegree | culturalDegree}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">职业：</span>
                                <span class="value">{{getCareerLabel(account.career)}}</span>
                            </div>
                        </li>
                        <li class="text-info-item">
                            <div class="text-info-item-wrapper">
                                <span class="label">工龄：</span>
                                <span class="value">{{getSeniorityLabel(account.seniority)}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="user-list-container">
            <ul class="user-list clearfix">
                <li @click="changeActiveUser(index)" v-for="(user, index) in getUserList" :key="index" class="user-item">
                    {{user.name}}
                </li>
            </ul>
            <div v-if="getUserList.length > 0" class="user-info-container">
                <div class="basic-info">
                    姓名：{{getActiveUserPropByKey('name') || '无'}} &nbsp;
                    昵称: {{getActiveUserPropByKey('nickname') || '无'}} &nbsp;
                    性别：{{getActiveUserPropByKey('gender') | gender}} &nbsp;
                    文化程度：{{getActiveUserPropByKey('culturalDegree') | culturalDegree}} &nbsp;
                    职业: {{getCareerLabel(getActiveUserPropByKey('career')) || '无'}} &nbsp;
                    工龄: {{getCareerLabel(getActiveUserPropByKey('seniority')) || '无'}} &nbsp;
                    婚姻状况：{{getActiveUserPropByKey('marriage') | marriage}} &nbsp;
                    身份证号：{{getActiveUserPropByKey('idNo') || '无'}} &nbsp;
                    {{getActiveUserPropByKey('taskNum') || 0}} 个任务评测 &nbsp;
                    {{getActiveUserPropByKey('standardNum') || 0}} 个普通评测 &nbsp;
                </div>
            </div>
        </div>
        <div class="test-list-container">
            <div class="search-field">
                <div class="field-row">
                    <div class="search-field-item">
                        <el-input
                            :value="testSearchField.keyword"
                            placeholder="支持评测ID、量表名称、ID、任务码"
                            @input="inputHandler($event, 'keyword')"
                            clearable
                            class="border-input"
                        >
                        </el-input>
                    </div>
                    <el-button class="btn-style-one" @click="searchHandler" type="primary">
                        <svg-icon icon-class="search"/> 搜索
                    </el-button>
                </div>
            </div>
            <div class="seperator-line"></div>
            <div class="tabel-field">
                <h2 class="content-title">评测列表</h2>
                <el-table header-row-class-name="common-table-header" class="my-table-style" :data="testList.data" border>
                    <el-table-column prop="id" align="center" min-width="120px" label="评测ID"></el-table-column>
                    <el-table-column prop="questionSheetName" align="center" min-width="120px" label="量表名称"></el-table-column>
                    <el-table-column prop="questionSheetId" align="center" min-width="120px" label="量表ID"></el-table-column>
                    <el-table-column prop="testTaskCode" align="center" min-width="120px" label="任务码"></el-table-column>
                    <el-table-column align="center" min-width="120px" label="开始时间">
                    <template slot-scope="scope">
                        {{scope.row.questionSheetStartedAt | dateTimeFormat}}
                    </template>
                    </el-table-column>
                    <!--
                    <el-table-column align="center" min-width="120px" label="结束时间">
                        <template slot-scope="scope">
                            {{scope.row.questionSheetEndedAt | dateTimeFormat}}
                        </template>
                    </el-table-column>
                    -->
                    <el-table-column align="center" min-width="120px" label="耗时">
                        <template slot-scope="scope">
                            {{scope.row.timePassed | timeFormat}}
                        </template>
                    </el-table-column>
                    <el-table-column width="220px" align="center" label="操作">
                        <template slot-scope="scope">
                            <div class="operator-btn-wrapper">
                                <span class="btn-text" @click="displayResult(scope.row.id)">查看结果</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-pagination
                @size-change="handlePaginationChange($event, 'pageSize')"
                @current-change="handlePaginationChange($event, 'pageNum')"
                :current-page="testList.pagination.pageNum"
                :page-sizes="[10, 20, 50,100, 200, 500]"
                :page-size="testList.pagination.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="testList.pagination.total">
            </el-pagination>
        </div>
        <el-dialog
            title="评测结果"
            class="my-dialog"
            :visible.sync="testResultDialogVisible"
            :show-close="true"
            :close-on-click-modal="false"
            :close-on-press-escape="false">
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelHandler">关闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import _ from 'lodash';
export default {
    name: 'AccountDetail',
    data() {
        return {
            activeIndex: 0,
            seniorityOption: this.$util.SENIORITY_OPTION,
            careerOption: this.$util.CAREER_OPTION,
            testResultDialogVisible: false
        };
    },
    async created() {
        try {
            let {id} = this.$route.params;
            await this.getAccountById(id);
            this.resetTestSearchField();
            this.resetTestPagination();
            await this.getTestListByUserId(id);
        } catch (err) {
            console.log(err);
        }
    },
    computed: {
        ...mapGetters({
            account: 'account/currentAccount',
            testSearchField: 'account/testSearchField',
            testList: 'account/testList'
        }),
        getActiveUserPropByKey() {
            return (key) => {
                return _.get(this.getUserList, `${this.activeIndex}.${key}`);
            };
        },
        getSeniorityLabel() {
            return (value) => {
                let seniority = this.seniorityOption.find((item) => {
                    return item.value === value;
                });

                return _.get(seniority, 'text');
            };
        },
        getCareerLabel() {
            return (value) => {
                let career = this.careerOption.find((item) => {
                    return item.value === value;
                });

                return _.get(career, 'text');
            };
        },
        getUserList() {
            let user = _.omit(this.account, ['userList']);
            let userList = _.get(this.account, 'userList');
            let resultList = [user, ...userList];
            return resultList;
        }
    },
    methods: {
        ...mapMutations({
            updateTestPagination: 'account/updateTestPagination',
            resetTestPagination: 'account/resetTestPagination',
            updateTestSearchField: 'account/updateTestSearchField',
            resetTestSearchField: 'account/resetTestSearchField'
        }),
        ...mapActions({
            getAccountById: 'account/getAccountById',
            getTestListByUserId: 'account/getTestListByUserId'
        }),
        inputHandler(value, key) {
            this.updateTestSearchField({key, value});
        },
        async searchHandler() {
            try {
                let id = _.get(this.getUserList, `${this.activeIndex}.id`);
                await this.getTestListByUserId(id);
            } catch (err) {
                console.log(err);
            }
        },
        handlePaginationChange(value, key) {
            this.updateTestPagination({key, value})
            this.searchHandler();
        },
        async changeActiveUser(index) {
            try {
                this.activeIndex = index;
                let id = _.get(this.getUserList, `${this.activeIndex}.id`);
                this.resetTestSearchField();
                this.resetTestPagination();
                await this.getTestListByUserId(id);
            } catch (err) {
                console.log(err);
            }
        },
        displayResult() {
            this.testResultDialogVisible = true;
        },
        cancelHandler() {
            this.testResultDialogVisible = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.poster-section {
    .avatar {
        display: block;
        width: 200px;
        height: 200px;
        margin-top: 50px;
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

.user-list-container {
    margin-top: 20px;
    margin-left: 20px;
    .user-list {
        .user-item {
            float: left;
            height: 40px;
            line-height: 40px;
            padding: 0 30px;
            color: #fff;
            background-color: $mainColor;
            border-radius: 8px;
            cursor: pointer;
            margin-right: 10px;
        }
    }
    .user-info-container {
        .basic-info {
            text-align: left;
            margin-top: 20px;
        }
    }
}

.test-list-container {
    margin-top: 20px;
}
</style>
