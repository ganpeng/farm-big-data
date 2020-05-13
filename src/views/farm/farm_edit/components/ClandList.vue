<template>
    <div class="cland-list-container">
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
                        @click="createCland">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                </div>
            </div>
            <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column align="center" min-width="120px" label="地块名称">
                    <template slot-scope="scope">
                        <span class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column align="center" min-width="120px" label="土地来源">
                    <template slot-scope="scope">
                        {{ scope.row.roam.type}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="地址">
                    <template slot-scope="scope">
                        {{scope.row.roam.address.city}}/{{scope.row.roam.address.area}}/{{scope.row.roam.address.detail}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" align="center" label="水利条件">
                    <template slot-scope="scope">
                        {{scope.row.wcc}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" align="center" label="土地编号">
                    <template slot-scope="scope">
                        {{scope.row.code}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="合同编号">
                    <template slot-scope="scope">
                        {{scope.row.cCode}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="实测面积(公倾)">
                    <template slot-scope="scope">
                        {{scope.row.areaThree}}
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
                type: ''
            },
            list: {
                data: cLandList
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
