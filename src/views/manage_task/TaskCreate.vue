<template>
    <div class="test-create-container">
        <h2 class="content-title">新增任务</h2>
        <div class="seperator-line"></div>
        <task-form ref="taskFormComponent"></task-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="taskCreateHandler">创建</el-button>
            <el-button class="btn-style-three" @click="gotoTaskList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import _ from 'lodash';
import {mapMutations, mapActions} from 'vuex';
import TaskForm from './TaskForm';
export default {
    name: 'TestCreate',
    components: {TaskForm},
    data() {
        return {
            isLoading: false
        };
    },
    async created() {
        let res = await this.$service.getOrgRootList();
        if (res && res.errorCode === 0) {
            if (!_.isNull(res.body)) {
                let orgTree = res.body.map((item) => {
                    item.children = [];
                    return item;
                });
                this.updateCurrentTask({key: 'instituteJson', value: JSON.stringify(orgTree)});
                this.$refs.taskFormComponent.setOrgTree();
            }
        }
    },
    methods: {
        ...mapMutations({
            updateCurrentTask: 'task/updateCurrentTask'
        }),
        ...mapActions({
            creatTask: 'task/creatTask'
        }),
        async taskCreateHandler() {
            try {
                let valid = this.$refs.taskFormComponent.$refs.taskForm.validate();
                if (valid) {
                    if (!this.isLoading) {
                        this.isLoading = true;
                        let res = await this.creatTask();
                        if (res && res.errorCode === 0) {
                            this.$router.push({ name: 'TaskList' });
                        }
                        this.isLoading = false;
                    }
                }
            } catch (err) {
                console.log(err);
                this.isLoading = false;
            }
        },
        gotoTaskList() {
            this.$router.push({ name: 'TaskList' });
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
