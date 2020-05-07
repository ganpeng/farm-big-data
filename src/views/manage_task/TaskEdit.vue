<template>
    <div class="test-edit-container">
        <h2 class="content-title">编辑任务</h2>
        <div class="right-top-btn-container">
            <div class="left">
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
        <div class="report-download">
            <span class="label">报告下载：</span>
            <span style="cursor:pointer" @click="downloadReport" class="value">{{getReportName}}</span>
        </div>
        <task-form ref="taskFormComponent"></task-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="taskEditHandler">保存</el-button>
            <el-button class="btn-style-three" @click="gotoTaskList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import axios from 'axios';
import _ from 'lodash';
import TaskForm from './TaskForm';
export default {
    name: 'TestEdit',
    components: {TaskForm},
    data() {
        return {
            progress: -1
        }
    },
    async created() {
        try {
            let {id} = this.$route.params;
            await this.getTaskById(id);
            this.$refs.taskFormComponent.setOrgTree();

            let uploadFile = document.querySelector('#upload-file');
            uploadFile.addEventListener('input', this.uploadFileHandler, false);
        } catch (err) {
            console.log(err);
        }
    },
    computed: {
        ...mapGetters({
            task: 'task/currentTask'
        }),
        getReportName() {
            if (this.task.reportUrl) {
                return _.last(this.task.reportUrl.split('/'));
            } else {
                return '';
            }
        }
    },
    methods: {
        ...mapActions({
            getTaskById: 'task/getTaskById',
            updateTask: 'task/updateTask'
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
        async taskEditHandler() {
            try {
                let valid = this.$refs.taskFormComponent.$refs.taskForm.validate();
                if (valid) {
                    let res = await this.updateTask();
                    if (res && res.errorCode === 0) {
                        this.$router.push({ name: 'TaskList' });
                    }
                }
            } catch (err) {
                console.log(err);
            }
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
        },
        gotoTaskList() {
            this.$router.push({ name: 'TaskList' });
        }
    }
}
</script>
<style lang="scss" scoped>
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
.report-download {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
}
</style>
