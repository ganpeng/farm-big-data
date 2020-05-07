<template>
    <div class="test-detail-container">
        <h2 class="content-title">任务详情</h2>
        <div class="right-top-btn-container">
            <div v-if="isAdmin" class="left">
                <label for="upload-file">
                    <i class="el-icon-upload2"></i>
                    <p>上传报告 <span v-if="progress !== -1">{{progress}}%</span></p>
                </label>
                <input type="file" id="upload-file">
            </div>
            <div class="right">
                <i @click="exportTaskTable" class="el-icon-download"></i>
                <p>机构任务二维码</p>
            </div>
            <div class="right">
                <i @click="exportTaskResult" class="el-icon-download"></i>
                <p>任务结果</p>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="common-details">
            <div class="poster-section">
                <div class="visible-wrapper">
                    <!--
                    <span :class="['visible', task.visible ? 'is-visible' : 'dis-visible']">
                        {{task.visible ? '上架' : '下架'}}
                    </span>
                    -->
                </div>
                <img :src="task.logoUri" alt="">
            </div>
            <div class="info-section">
                <div class="title-wrapper">
                    <div class="left-side">
                        <span class="title">{{task.name}}</span>
                    </div>
                    <div class="right-wrapper">
                        <div class="date">
                            <span class="create-date">
                                创建于:{{task.createdAt | dateFormat}}
                            </span>
                            <span class="update-date">
                                更新于:{{task.updatedAt | dateFormat}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="seperator-line"></div>
                <div class="tags-section">
                    <span v-for="(item) in task.categorySet" :key="item.id" class="category-tag">
                        {{item.name}}
                    </span>
                </div>
                <div class="text-info-section">
                    <div class="task-description">
                        <span class="label">应测人数：</span>
                        <span class="value">{{task.testAmount}}</span>
                    </div>
                    <div class="task-description">
                        <span class="label">测试率：</span>
                        <span class="value" v-html="testRate(task)"></span>
                    </div>
                    <div class="task-guideline">
                        <span class="label">有效期：</span>
                        <span class="value">{{task.startedAt | dateTimeFormat}} - {{task.endedAt | dateTimeFormat}}</span>
                    </div>
                    <div class="task-questionsheet">
                        <span class="label">量表：</span>
                        <span class="value">{{task.questionSheetList.map((item) => item.name).join(', ')}}</span>
                    </div>
                    <div class="task-questionsheet">
                        <span class="label">报告下载：</span>
                        <span style="cursor:pointer" @click="downloadReport" class="value">{{getReportName}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="question-container">
            <h2 class="content-sub-title">
                所属机构
            </h2>
            <div class="org-tree-wrapper">
                <v-tree
                    ref="tree"
                    :canDeleteRoot="false"
                    :data="orgTree"
                    :draggable="false"
                    :tpl="tpl"
                    :halfcheck="true"
                    :multiple="true"
                />
            </div>
        </div>
        <div class="fixed-btn-container">
            <el-button class="btn-style-three" @click="gotoTaskList">返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import axios from 'axios';
import _ from 'lodash';
export default {
    name: 'TestDetail',
    data() {
        return {
            orgTree: [],
            progress: -1
        }
    },
    async created() {
        try {
            let {id} = this.$route.params;
            await this.getTaskById(id);
            this.orgTree = JSON.parse(this.task.instituteJson);

            await this.getUserByToken();

            let uploadFile = document.querySelector('#upload-file');
            uploadFile.addEventListener('input', this.uploadFileHandler, false);
        } catch (err) {
            console.log(err);
        }
    },
    computed: {
        ...mapGetters({
            task: 'task/currentTask',
            user: 'common/user'
        }),
        testRate() {
            return (task) => {
                return task.questionSheetList.map((questionSheet) => {
                    if (_.isNumber(task.testAmount) && _.isNumber(questionSheet.testedAmount) && task.testAmount !== 0) {
                        return `${questionSheet.name}: <span style="color:#1989FA">${((questionSheet.testedAmount / task.testAmount) * 100).toFixed(2)}%</span>`;
                    } else {
                        return `${questionSheet.name}: <span style="color:#1989FA">0</span>`;
                    }
                }).join(', ');
            };
        },
        reportUrl() {
            return (uri) => {
                return `${process.env.VUE_APP_UPLOAD_API_ROOT}${uri}`;
            };
        },
        getReportName() {
            if (this.task.reportUrl) {
                return _.last(this.task.reportUrl.split('/'));
            } else {
                return '';
            }
        },
        isAdmin() {
            return _.get(this.user, 'role') === 'BACKEND';
        }
    },
    methods: {
        ...mapActions({
            getTaskById: 'task/getTaskById',
            getUserByToken: 'common/getUserByToken'
        }),
        async uploadFileHandler(e) {
            try {
                let {id} = this.$route.params;
                let file = e.target.files[0];
                let formData = new FormData();
                formData.append('file', file);
                let res = await axios.post(`/v1/file/upload/report?testTaskId=${id}`, formData, {
                    baseURL: process.env.VUE_APP_UPLOAD_API_ROOT,
                    onUploadProgress: (progressEvent) => {
                        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        this.progress = percentCompleted;
                    }
                });
                if (_.get(res, 'data.errorCode') === 0) {
                    this.$message.success('上传成功');
                    window.location.reload();
                }
                this.progress = -1;
            } catch (err) {
                this.progress = -1;
                this.$message.error('上传失败');
                console.log(err);
            }
        },
        gotoTaskList() {
            this.$router.push({ name: 'TaskList' });
        },
        tpl(...args) {
            let { 0: node } = args;
            let titleClass = "node-title";
            return (
                <div class="tpl-container">
                    <span
                        class={titleClass}
                        domPropsInnerHTML={node.title}
                    />
                </div>
            );
        },
        async exportTaskTable() {
            try {
                let {id} = this.$route.params;
                let res = await axios.post(`/v1/test-task/export?testTaskId=${id}`, null, {
                    baseURL: process.env.VUE_APP_API_ROOT,
                    responseType: 'blob'
                });
                if (res && res.status === 200) {
                    this.$util.downloadFile(res.data, `${this.task.name}.xls`);
                } else {
                    this.$message.error('下载失败');
                }
            } catch (err) {
                console.log(err);
            }
        },
        async exportTaskResult() {
            try {
                let {id} = this.$route.params;
                let res = await axios.post(`/v1/test-task/export/testRest?testTaskId=${id}`, null, {
                    baseURL: process.env.VUE_APP_API_ROOT,
                    responseType: 'blob'
                });
                if (res && res.status === 200) {
                    this.$util.downloadFile(res.data, `${this.task.name}.xls`);
                } else {
                    this.$message.error('下载失败');
                }
            } catch (err) {
                console.log(err);
            }
        },
        async downloadReport() {
            try {
                if (this.task.reportUrl) {
                    let res = await axios.get(this.task.reportUrl, {
                        baseURL: process.env.VUE_APP_UPLOAD_API_ROOT,
                        responseType: 'blob'
                    });
                    if (res && res.status === 200) {
                        this.$util.downloadFile(res.data, this.getReportName);
                    } else {
                        this.$message.error('下载失败');
                    }
                }
            } catch (err) {
                console.log(err);
            }
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

.text-info-section {
    text-align: left;
}

.task-description, .task-guideline, .task-questionsheet {
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

.rate-color {
    color: $mainColor;
}

#upload-file {
    position: absolute;
    top: -99999px;
}

.right-top-btn-container {
    display: flex;
    position: absolute;
    top: 20px;
    right: 30px;
    text-align: center;
    .right {
        margin-left: 20px;
    }
    i {
        font-size: 40px;
        color: $mainColor;
        cursor: pointer;
    }
}
</style>
