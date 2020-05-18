<template>
    <div class="pee-container my-content-container">
        <bord></bord>
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
                                v-for="(item, index) in sensorTypeOptions"
                                :key="index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="search-field-item">
                        <label class="search-field-item-label">厂商</label>
                        <el-select
                            :value="searchField.firm"
                            filterable
                            clearable
                            placeholder="全部"
                            @input="inputHandler($event, 'firm')">
                            <el-option
                                v-for="(item, index) in peeFirmOptions"
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
                        @click="createPee">
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
                <el-table-column min-width="100px" label="设备ID">
                    <template slot-scope="scope">
                        <span @click="gotoPeeDetail(scope.row.id)" class="ellipsis two name">
                            {{scope.row.dId}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="sn" min-width="100px" label="设备SN"></el-table-column>
                <el-table-column min-width="100px" label="传感器类型">
                    <template slot-scope="scope">
                        {{getTypeLabel(scope.row.type)}}
                    </template>
                </el-table-column>
                <el-table-column min-width="200px" label="地址">
                    <template slot-scope="scope">
                        {{scope.row.address.city}}/{{scope.row.address.area}}/{{scope.row.address.detail}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" label="经纬度">
                    <template slot-scope="scope">
                        [{{scope.row.latitude}}, {{scope.row.longitude}}]
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" label="厂商名称">
                    <template slot-scope="scope">
                        {{getFirmLabel(scope.row.firmName)}}
                    </template>
                </el-table-column>
                <el-table-column min-width="140px" label="所属农场">
                    <template slot-scope="scope">
                        {{scope.row.farm}}
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" label="负责人">
                    <template slot-scope="scope">
                        <el-popover
                            class="my-popover"
                            placement="left-start"
                            width="300" trigger="hover">
                            <div class="pop-content">
                                <div class="title">
                                    {{scope.row.head.name}}
                                </div>
                                <div class="date-time">
                                    电话：{{scope.row.head.phone}}
                                </div>
                                <div class="date-content">
                                    所属公司：{{scope.row.head.company}}
                                </div>
                            </div>
                            <span class="text-success pointer" slot="reference">{{scope.row.head.name}}</span>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" label="状态">
                    <template slot-scope="scope">
                        {{getStatusLabel(scope.row.status)}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="上线时间">
                    <template slot-scope="scope">
                        {{scope.row.createdAt}}
                    </template>
                </el-table-column>
                <el-table-column width="220px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text text-danger" @click="pausePeeHandler(scope.row.id)">暂停</span>
                            <span class="btn-text" @click="restartPeeHandler(scope.row.id)">重启</span>
                            <span class="btn-text" @click="editPeeHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deletePeeHandler(scope.row.id)">删除</span>
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
import {mapGetters, mapMutations} from 'vuex';
import _ from 'lodash';
import Bord from './Bord';
export default {
    name: 'PeeList',
    components: {Bord},
    data() {
        return {
            sensorTypeOptions: this.$util.sensorTypeOptions,
            peeStatusOptions: this.$util.peeStatusOptions,
            peeFirmOptions: this.$util.peeFirmOptions
        }
    },
    computed: {
        ...mapGetters({
            list: 'pee/list',
            searchField: 'pee/searchField'
        }),
        getTypeLabel() {
            return (value) => {
                let option = this.$util.sensorTypeOptions.find((item) => item.value === value);
                return _.get(option, 'label');
            };
        },
        getFirmLabel() {
            return (value) => {
                let option = this.$util.peeFirmOptions.find((item) => item.value === value);
                return _.get(option, 'label');
            }
        },
        getStatusLabel() {
            return (value) => {
                let option = this.$util.peeStatusOptions.find((item) => item.value === value);
                return _.get(option, 'label');
            }
        }
    },
    async created() {
        try {
            this.resetSearchField();
            this.resetPagination();
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        ...mapMutations({
            updateSearchField: 'pee/updateSearchField',
            updatePagination: 'pee/updatePagination',
            resetSearchField: 'pee/resetSearchField',
            resetPagination: 'pee/resetPagination'
        }),
        tableRowClassName({rowIndex}) {
            if ((rowIndex % 2) === 0) {
                return 'warning-row';
            } else {
                return 'success-row';
            }
        },
        inputHandler(value, key) {
            this.updateSearchField({key, value});
        },
        searchHandler() {},
        clearSearchField() {
            this.resetSearchField();
        },
        handlePaginationChange(value, key) {
            this.updatePagination({key, value});
        },
        createPee() {
            let routeData = this.$router.resolve({
                name: 'PeeCreate'
            });
            window.open(routeData.href, '_blank');
        },
        editPeeHandler(id) {
            this.$router.push({ name: 'PeeEdit', params: {id} });
        },
        async deletePeeHandler() {
            try {
                await this.$confirm('你确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
            } catch (err) {
                console.log(err);
            }
        },
        async pausePeeHandler() {
            try {
                await this.$confirm('你确定要暂停吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
            } catch (err) {
                console.log(err);
            }
        },
        async restartPeeHandler() {
            try {
                await this.$confirm('你确定要重启吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
            } catch (err) {
                console.log(err);
            }
        },
        gotoPeeDetail(id) {
            this.$router.push({ name: 'PeeDetail', params: {id} });
        },
    }
}
</script>
<style lang="scss" scoped>

</style>
