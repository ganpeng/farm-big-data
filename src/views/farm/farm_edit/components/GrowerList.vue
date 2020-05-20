<template>
    <div class="grower-list-container">
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
                        @click="createGrower">
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
                <el-table-column min-width="100px" label="姓名">
                    <template slot-scope="scope">
                        <span class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="成员类型">
                    <template slot-scope="scope">
                        {{ scope.row.type}}
                    </template>
                </el-table-column>
                <!--
                <el-table-column min-width="60px" label="性别">
                    <template slot-scope="scope">
                        {{ scope.row.gender}}
                    </template>
                </el-table-column>
                -->
                <el-table-column min-width="280px" label="地址">
                    <template slot-scope="scope">
                        {{scope.row.address.city}}/{{scope.row.address.area}}/{{scope.row.address.detail}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="联系电话">
                    <template slot-scope="scope">
                        {{scope.row.phone}}
                    </template>
                </el-table-column>
                <!--
                <el-table-column min-width="160px" label="身份证号">
                    <template slot-scope="scope">
                        {{scope.row.cId}}
                    </template>
                </el-table-column>
                -->
                <el-table-column min-width="120px" label="培训时长(小时)">
                    <template slot-scope="scope">
                        {{scope.row.trainHour}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="证书(个)">
                    <template slot-scope="scope">
                        {{scope.row.certi}}
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" label="贫困户">
                    <template slot-scope="scope">
                        {{scope.row.isPoor ? '是' : '否'}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="分工">
                    <template slot-scope="scope">
                        {{scope.row.divide}}
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" label="状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.status === 1" class="text-danger">未提交</span>
                        <span v-else class="text-success">已提交</span>
                    </template>
                </el-table-column>
                <el-table-column width="160px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div v-if="scope.row.status === 1" class="operator-btn-wrapper">
                            <span class="btn-text" @click="submitGrowerHandler(scope.row.id)">提交</span>
                            <span class="btn-text" @click="editGrowerHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deleteGrowerHandler(scope.row.id)">删除</span>
                        </div>
                        <div v-else class="operator-btn-wrapper">
                            <span class="btn-text text-danger" @click="revokeGrowerHandler(scope.row.id)">撤销</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <grower-dialog ref="growerDialog"></grower-dialog>
    </div>
</template>
<script>
import _ from 'lodash';
import {growerList} from '@/mock/member';
import GrowerDialog from './GrowerDialog';
export default {
    name: 'GrowerList',
    components: {GrowerDialog},
    data() {
        return {
            searchField: {
                keyword: '',
                type: ''
            },
            list: {
                data: growerList
            }
        }
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
        createGrower() {
            this.$refs.growerDialog.show();
        },
        async submitGrowerHandler() {
            try {
                await this.$confirm('你确定要提交吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
            } catch (err) {
                console.log(err);
            }
        },
        editGrowerHandler(id) {
            let grower = growerList.find((item) => item.id === id);
            this.$refs.growerDialog.show(grower);
        },
        async revokeGrowerHandler() {
            try {
                await this.$confirm('你确定要撤销吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
            } catch (err) {
                console.log(err);
            }
        },
        async deleteGrowerHandler() {
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
</style>
