<template>
    <div class="grower-list-container">
        <div class="search-field">
            <div class="field-row">
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
                            v-for="(item, index) in []"
                            :key="index"
                            :label="item.label"
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
            <div class="table-operator-field clearfix">
                <div class="float-left">
                </div>
                <div class="float-right">
                    <el-button
                        class="btn-style-two contain-svg-icon"
                        @click="createManagement">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                </div>
            </div>
            <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column align="center" min-width="120px" label="姓名">
                    <template slot-scope="scope">
                        <span class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column align="center" min-width="120px" label="成员类型">
                    <template slot-scope="scope">
                        {{ scope.row.type}}
                    </template>
                </el-table-column>
                <el-table-column align="center" min-width="60px" label="性别">
                    <template slot-scope="scope">
                        {{ scope.row.gender}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="地址">
                    <template slot-scope="scope">
                        {{scope.row.address.city}}/{{scope.row.address.area}}/{{scope.row.address.detail}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" align="center" label="联系电话">
                    <template slot-scope="scope">
                        {{scope.row.phone}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" align="center" label="身份证号">
                    <template slot-scope="scope">
                        {{scope.row.cId}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="培训时长(小时)">
                    <template slot-scope="scope">
                        {{scope.row.trainHour}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="证书">
                    <template slot-scope="scope">
                        {{scope.row.certi}}
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" align="center" label="贫困户">
                    <template slot-scope="scope">
                        {{scope.row.isPoor}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="分工">
                    <template slot-scope="scope">
                        {{scope.row.divide}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.status === 1" class="text-danger">未提交</span>
                        <span v-else class="text-success">已提交</span>
                    </template>
                </el-table-column>
                <el-table-column width="160px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text" @click="submitManagementHandler(scope.row.id)">提交</span>
                            <span class="btn-text" @click="editManagementHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deleteManagementHandler(scope.row.id)">删除</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import _ from 'lodash';
import {growerList} from '@/mock/member';
export default {
    name: 'GrowerList',
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
        createManagement() {},
        submitManagementHandler() {},
        editManagementHandler() {},
        deleteManagementHandler() {}
    }
}
</script>
<style lang="scss" scoped>
</style>
