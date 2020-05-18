<template>
    <div class="special-sub-container">
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
                        <label class="search-field-item-label">类型</label>
                        <el-select
                            :value="searchField.type"
                            filterable
                            clearable
                            placeholder="全部"
                            @input="inputHandler($event, 'type')">
                            <el-option
                                v-for="(item, index) in specialSubTypeOptions"
                                :key="index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="search-field-item">
                        <label class="search-field-item-label">状态</label>
                        <el-select
                            :value="searchField.status"
                            filterable
                            clearable
                            placeholder="全部"
                            @input="inputHandler($event, 'status')">
                            <el-option
                                v-for="(item, index) in specialSubStatusOptions"
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
                        @click="createSpecialSub">
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
                <el-table-column min-width="140px" label="补贴文件编号">
                    <template slot-scope="scope">
                        <span class="ellipsis two name">
                            {{scope.row.code}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" label="补贴类型">
                    <template slot-scope="scope">
                        {{ scope.row.type}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="申请时间">
                    <template slot-scope="scope">
                        {{scope.row.applyDate}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="通过时间">
                    <template slot-scope="scope">
                        {{scope.row.passDate}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="补贴总额(元)">
                    <template slot-scope="scope">
                        {{scope.row.moneyInfo.totalMoney}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="政府拨款(元)">
                    <template slot-scope="scope">
                        {{scope.row.moneyInfo.payedTotal}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="申请负责人">
                    <template slot-scope="scope">
                        {{scope.row.leaderOne.name}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="申请负责人电话">
                    <template slot-scope="scope">
                        {{scope.row.leaderOne.phone}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="政府负责人">
                    <template slot-scope="scope">
                        {{scope.row.leaderTwo.name}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="政府负责人电话">
                    <template slot-scope="scope">
                        {{scope.row.leaderTwo.phone}}
                    </template>
                </el-table-column>
                <el-table-column min-width="60px" label="状态">
                    <template slot-scope="scope">
                        {{scope.row.subStatus}}
                    </template>
                </el-table-column>
                <el-table-column width="160px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text" @click="editSpecialSubHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deleteSpecialSubHandler(scope.row.id)">删除</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <special-sub-dialog ref="specialSubDialog"></special-sub-dialog>
    </div>
</template>
<script>
import _ from 'lodash';
import {specialSubList} from '@/mock/business';
import SpecialSubDialog from './SpecialSubDialog';
export default {
    name: 'SpecialSubList',
    components: {SpecialSubDialog},
    data() {
        return {
            specialSubTypeOptions: this.$util.specialSubTypeOptions,
            specialSubStatusOptions: this.$util.specialSubStatusOptions,
            searchField: {
                keyword: '',
                type: '',
                status: ''
            },
            list: {
                data: specialSubList
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
        createSpecialSub() {
            this.$refs.specialSubDialog.show();
        },
        editSpecialSubHandler(id) {
            let specialSub = _.get(this.list.data, id);
            this.$refs.specialSubDialog.show(specialSub);
        },
        async deleteSpecialSubHandler() {
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
.special-sub-container {}
</style>
