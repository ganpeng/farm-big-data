<template>
    <div class="cland-list-container">
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
                        <label class="search-field-item-label">状态</label>
                        <el-select
                            v-model="searchField.status"
                            filterable
                            clearable
                            placeholder="全部">
                            <el-option
                                v-for="(item, index) in options1"
                                :key="index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="search-field-item">
                        <label class="search-field-item-label">来源</label>
                        <el-select
                            v-model="searchField.source"
                            filterable
                            clearable
                            placeholder="全部">
                            <el-option
                                v-for="(item, index) in options2"
                                :key="index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="search-field-item">
                        <label class="search-field-item-label">水利条件</label>
                        <el-select
                            v-model="searchField.condition"
                            filterable
                            clearable
                            placeholder="全部">
                            <el-option
                                v-for="(item, index) in options3"
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
                        @click="createCland">
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
                <el-table-column min-width="120px" label="地块名称">
                    <template slot-scope="scope">
                        <span class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="土地来源">
                    <template slot-scope="scope">
                        {{ scope.row.roam.type}}
                    </template>
                </el-table-column>
                <el-table-column min-width="280px" label="地址">
                    <template slot-scope="scope">
                        {{scope.row.roam.address.city}}/{{scope.row.roam.address.area}}/{{scope.row.roam.address.detail}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="水利条件">
                    <template slot-scope="scope">
                        {{scope.row.wcc}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" label="土地编号">
                    <template slot-scope="scope">
                        {{scope.row.code}}
                    </template>
                </el-table-column>
                <el-table-column min-width="140px" label="合同编号">
                    <template slot-scope="scope">
                        {{scope.row.cCode}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="实测面积(公倾)">
                    <template slot-scope="scope">
                        {{scope.row.areaThree}}
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
                            <span class="btn-text" @click="submitClandHandler(scope.row.id)">提交</span>
                            <span class="btn-text" @click="editClandHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deleteClandHandler(scope.row.id)">删除</span>
                        </div>
                        <div v-else class="operator-btn-wrapper">
                            <span class="btn-text text-danger" @click="revokeClandHandler(scope.row.id)">撤销</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination
            @size-change="() => {}"
            @current-change="() => {}"
            :current-page="list.pagination.pageNum"
            :page-sizes="[10, 30, 50,100, 200, 500]"
            :page-size="list.pagination.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="list.pagination.total">
        </el-pagination>
        <cland-dialog ref="clandDialog"></cland-dialog>
    </div>
</template>
<script>
import _ from 'lodash';
import {cLandList} from '@/mock/land';
import ClandDialog from './ClandDialog';
export default {
    name: 'ClandList',
    components: {ClandDialog},
    data() {
        return {
            searchField: {
                keyword: '',
                status: '',
                source: '',
                condition: ''
            },
            options1: [
                {
                    value: '已提交',
                    label: '已提交'
                },
                {
                    value: '未提交',
                    label: '未提交'
                }
            ],
            options2: [
                {
                    value: '成员出资',
                    label: '成员出资'
                },
                {
                    value: '土地托管',
                    label: '土地托管'
                }
            ],
            options3: [
                {
                    value: '旱田',
                    label: '旱田'
                },
                {
                    value: '水田',
                    label: '水田'
                },
                {
                    value: '水浇地',
                    label: '水浇地'
                }
            ],
            list: {
                data: cLandList,
                pagination: {
                    total: 4,
                    pageSize: 30,
                    pageNum: 1
                }
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
        createCland() {
            this.$refs.clandDialog.show();
        },
        async submitClandHandler() {
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
        async revokeClandHandler() {
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
        editClandHandler(id) {
            let cland = _.get(this.list.data, id);
            this.$refs.clandDialog.show(cland);
        },
        async deleteClandHandler() {
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
