<template>
    <div class="test-container">
        <div class="table-container">
            <h2 class="content-title">搜索筛选</h2>
        </div>
        <div class="search-field">
            <div class="field-row">
                <div class="search-field-item">
                    <el-input
                        :value="searchField.keyword"
                        placeholder="请输入频道名称或编号"
                        @input="inputHandler($event, 'keyword')"
                        clearable
                        class="border-input"
                    >
                    </el-input>
                </div>
                <el-button class="btn-style-one" @click="searchHandler" type="primary">
                    <svg-icon icon-class="search"/> 搜索
                </el-button>
                <div class="search-field-item">
                    <label class="search-field-item-label">状态</label>
                    <el-select
                        :value="searchField.status"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'status')">
                        <el-option
                            v-for="(item, index) in taskSearchStatusOptons"
                            :key="index"
                            :label="item.text"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <el-button class="btn-style-one" @click="clearSearchField">
                    <svg-icon icon-class="reset"/> 重置
                </el-button>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="tabel-field">
            <h2 class="content-title">任务列表</h2>
            <div class="table-operator-field clearfix">
                <div class="float-left">
                </div>
                <div class="float-right">
                    <el-button
                        v-if="user.role === 'BACKEND'"
                        class="btn-style-two contain-svg-icon"
                        @click="createTask">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                </div>
            </div>
            <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column prop="id" align="center" min-width="120px" label="任务id"></el-table-column>
                <el-table-column prop="name" align="center" min-width="120px" label="名称">
                    <template slot-scope="scope">
                        <span @click="gotoTaskDetail(scope.row.id)" class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column align="center" min-width="120px" label="量表信息">
                    <template slot-scope="scope">
                        {{ scope.row.questionSheetList && scope.row.questionSheetList.length ? scope.row.questionSheetList.map((item) => item.name).join(', ') : ''}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="评测有效期">
                    <template slot-scope="scope">
                        {{scope.row.startedAt | dateFormat}} - {{scope.row.endedAt | dateFormat}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="状态">
                    <template slot-scope="scope">
                        {{getStatusLabel(scope.row)}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="创建日期">
                    <template slot-scope="scope">
                        {{scope.row.createdAt | dateFormat}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="报告是否上传">
                    <template slot-scope="scope">
                        {{scope.row.hasReport ? '是' : '否'}}
                    </template>
                </el-table-column>
                <el-table-column v-if="user.role === 'BACKEND'" width="220px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text" @click="editTaskHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deleteTaskHandler(scope.row.id)">删除</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination
            @size-change="handlePaginationChange($event, 'pageSize')"
            @current-change="handlePaginationChange($event, 'pageNum')"
            :current-page="list.pagination.pageNum"
            :page-sizes="[10, 20, 50,100, 200, 500]"
            :page-size="list.pagination.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="list.pagination.total">
        </el-pagination>
    </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import _ from 'lodash';
export default {
    name: 'TestList',
    data() {
        return {
            taskSearchStatusOptons: this.$util.taskStatusOption
        }
    },
    computed: {
        ...mapGetters({
            list: 'task/list',
            searchField: 'task/searchField',
            user: 'common/user'
        }),
        getStatusLabel() {
            return (row) => {
                let now = new Date().getTime();
                let status = '';
                if (now < row.startedAt) {
                    status = '未开始';
                } else if (now > row.startedAt && now < row.endedAt) {
                    status = '进行中'
                } else {
                    status = '已结束';
                }

                return status;
            };
        }
    },
    async created() {
        try {
            this.resetSearchField();
            this.resetPagination();
            await this.getUserByToken();
            await this.getTaskListWrapper();
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        ...mapMutations({
            updateSearchField: 'task/updateSearchField',
            updatePagination: 'task/updatePagination',
            resetSearchField: 'task/resetSearchField',
            resetPagination: 'task/resetPagination'
        }),
        ...mapActions({
            getTaskList: 'task/getTaskList',
            getOrgTaskList: 'task/getOrgTaskList',
            getUserByToken: 'common/getUserByToken'
        }),
        inputHandler(value, key) {
            this.updateSearchField({key, value});
            if (key !== 'keyword') {
                this.getTaskListWrapper();
            }
        },
        getTaskListWrapper() {
            if (_.get(this.user, 'role') === 'BACKEND') {
                this.getTaskList();
            } else {
                this.getOrgTaskList(_.get(this.user, 'instituteId'));
            }
        },
        searchHandler() {
            this.getTaskListWrapper();
        },
        clearSearchField() {
            this.resetSearchField();
        },
        handlePaginationChange(value, key) {
            this.updatePagination({key, value});
            this.getTaskListWrapper();
        },
        createTask() {
            let routeData = this.$router.resolve({
                name: 'TaskCreate'
            });
            window.open(routeData.href, '_blank');
        },
        editTaskHandler(id) {
            this.$router.push({ name: 'TaskEdit', params: {id} });
        },
        async deleteTaskHandler(id) {
            try {
                let confirm = await this.$confirm('你确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if (confirm) {
                    let res = await this.$service.deleteTaskById(id);
                    if (res && res.errorCode === 0) {
                        this.getTaskList();
                    }
                }
            } catch (err) {
                console.log(err);
            }

        },
        gotoTaskDetail(id) {
            this.$router.push({ name: 'TaskDetail', params: {id} });
        },
    }
}
</script>
<style lang="scss" scoped>

</style>
