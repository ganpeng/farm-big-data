<template>
    <div class="government-projects-container">
        <div class="search-field">
            <div class="field-row">
                <div class="row-left">
                    <div class="search-field-item">
                        <el-input
                            :value="searchField.keyword"
                            placeholder="请输入关键字"
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
                        <label class="search-field-item-label">级别</label>
                        <el-select
                            :value="searchField.level"
                            filterable
                            clearable
                            placeholder="全部"
                            @input="inputHandler($event, 'level')">
                            <el-option
                                v-for="(item, index) in governmentProjectLevelOptions"
                                :key="index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="search-field-item">
                        <label class="search-field-item-label">阶段</label>
                        <el-select
                            :value="searchField.step"
                            filterable
                            clearable
                            placeholder="全部"
                            @input="inputHandler($event, 'step')">
                            <el-option
                                v-for="(item, index) in governmentProjectStepOptions"
                                :key="index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="row-right">
                    <el-dropdown
                        trigger="click"
                        class="my-dropdown">
                        <span class="el-dropdown-link">
                            批量操作<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <span>批量下架</span>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <span>批量删除</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-button
                        class="btn-style-two contain-svg-icon"
                        @click="createGovernmentProjects">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                </div>
            </div>
        </div>
        <div class="tabel-field">
            <el-table
                header-row-class-name="common-table-header"
                size="small"
                :row-class-name="tableRowClassName"
                class="my-table-style"
                :data="list.data">
                <el-table-column type="selection" align="center" width="50"></el-table-column>
                <el-table-column min-width="200px" label="项目名称">
                    <template slot-scope="scope">
                        <span class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="项目部门">
                    <template slot-scope="scope">
                        {{ scope.row.department}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="级别">
                    <template slot-scope="scope">
                        {{scope.row.level}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="项目总额(元)">
                    <template slot-scope="scope">
                        {{scope.row.moneyInfo.totalMoney}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="政府拨款(元)">
                    <template slot-scope="scope">
                        {{scope.row.moneyInfo.govPay}}
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" label="负责人">
                    <template slot-scope="scope">
                        {{scope.row.leader.name}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" label="负责人电话">
                    <template slot-scope="scope">
                        {{scope.row.leader.phone}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="阶段">
                    <template slot-scope="scope">
                        {{scope.row.step}}
                    </template>
                </el-table-column>
                <el-table-column width="160px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text" @click="editGovernmentProjectsHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deleteGovernmentProjectsHandler(scope.row.id)">删除</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <government-projects-dialog ref="governmentProjectsDialog"></government-projects-dialog>
    </div>
</template>
<script>
import _ from 'lodash';
import {governmentProjectsList} from '@/mock/business';
import GovernmentProjectsDialog from './GovernmentProjectsDialog';
export default {
    name: 'GovernmentProjectsList',
    components: {GovernmentProjectsDialog},
    data() {
        return {
            governmentProjectLevelOptions: this.$util.governmentProjectLevelOptions,
            governmentProjectStepOptions: this.$util.governmentProjectStepOptions,
            searchField: {
                keyword: '',
                level: '',
                step: ''
            },
            list: {
                data: governmentProjectsList
            }
        };
    },
    methods: {
        tableRowClassName({rowIndex}) {
            if ((rowIndex % 2) === 0) {
                return 'warning-row';
            } else {
                return 'success-row';
            }
        },
        searchHandler() {},
        clearSearchField() {
            this.searchField = {
                keyword: '',
                type: ''
            };
        },
        inputHandler(value, key) {
            _.set(this.searchField, key, value);
        },
        createGovernmentProjects() {
            this.$refs.governmentProjectsDialog.show();
        },
        editGovernmentProjectsHandler(id) {
            let cland = _.get(this.list.data, id);
            this.$refs.governmentProjectsDialog.show(cland);
        },
        async deleteGovernmentProjectsHandler() {
            try {
                await this.$confirm('你确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.government-projects-container {}
</style>
