<template>
    <div class="tab-content-four">
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
                            v-for="(item, index) in farmMachineTypeOptions"
                            :key="index"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="search-field-item">
                    <label class="search-field-item-label">来源</label>
                    <el-select
                        :value="searchField.source"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'source')">
                        <el-option
                            v-for="(item, index) in farmMachineSourceOptions"
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
                        @click="createFarmMachine">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                </div>
            </div>
            <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column align="center" min-width="120px" label="机械名称">
                    <template slot-scope="scope">
                        <span class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column align="center" min-width="120px" label="类型">
                    <template slot-scope="scope">
                        {{ scope.row.type}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" align="center" label="数量">
                    <template slot-scope="scope">
                        {{scope.row.count}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="生产厂家">
                    <template slot-scope="scope">
                        {{scope.row.factory}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" align="center" label="品牌">
                    <template slot-scope="scope">
                        {{scope.row.brand}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="来源">
                    <template slot-scope="scope">
                        {{scope.row.source}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="购入价格(元)">
                    <template slot-scope="scope">
                        {{scope.row.inPrice}}
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
                            <span class="btn-text" @click="submitFarmMachineHandler(scope.row.id)">提交</span>
                            <span class="btn-text" @click="editFarmMachineHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deleteFarmMachineHandler(scope.row.id)">删除</span>
                        </div>
                        <div v-else class="operator-btn-wrapper">
                            <span class="btn-text text-danger" @click="revokeFarmMachineHandler(scope.row.id)">撤销</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <farm-machine-dialog ref="farmMachineDialog"></farm-machine-dialog>
    </div>
</template>
<script>
import _ from 'lodash';
import {farmMachineList} from '@/mock/farm_machine';
import FarmMachineDialog from './components/FarmMachineDialog';
export default {
    name: 'TabContent4',
    components: {FarmMachineDialog},
    data() {
        return {
            farmMachineTypeOptions: this.$util.farmMachineTypeOptions,
            farmMachineSourceOptions: this.$util.farmMachineSourceOptions,
            searchField: {
                keyword: '',
                type: '',
                source: ''
            },
            list: {
                data: farmMachineList
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
        createFarmMachine() {
            this.$refs.farmMachineDialog.show();
        },
        async submitFarmMachineHandler() {
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
        async revokeFarmMachineHandler() {
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
        editFarmMachineHandler(id) {
            let farmMachine = _.get(this.list.data, id);
            this.$refs.farmMachineDialog.show(farmMachine);
        },
        async deleteFarmMachineHandler() {
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
