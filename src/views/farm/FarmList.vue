<template>
    <div class="farm-list-container my-content-container">
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
                                v-for="(item, index) in farmVisualTypeOptions"
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
                        @click="createFarm">
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
                <el-table-column min-width="140px" label="主体名称">
                    <template slot-scope="scope">
                        <span @click="gotoFarmDetail(scope.row.id)" class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="类型">
                    <template slot-scope="scope">
                        {{ scope.row.type}}
                    </template>
                </el-table-column>
                <el-table-column prop="sn" min-width="100px" label="地块面积(公顷)">
                    <template slot-scope="scope">
                        {{ scope.row.area}}
                    </template>
                </el-table-column>
                <el-table-column min-width="180px" label="地址">
                    <template slot-scope="scope">
                        {{scope.row.address.city}}/{{scope.row.address.area}}/{{scope.row.address.detail}}
                    </template>
                </el-table-column>
                <!--
                <el-table-column min-width="120px" label="经纬度">
                    <template slot-scope="scope">
                        [{{scope.row.latitude}}, {{scope.row.longitude}}]
                    </template>
                </el-table-column>
                -->
                <el-table-column min-width="140px" label="统一社会信用代码">
                    <template slot-scope="scope">
                        {{scope.row.creditCode}}
                    </template>
                </el-table-column>
                <!--
                <el-table-column min-width="80px" label="常务联系人">
                    <template slot-scope="scope">
                        {{scope.row.standing.name}}
                    </template>
                </el-table-column>
                -->
                <el-table-column min-width="80px" label="常务联系人">
                    <template slot-scope="scope">
                        <el-popover
                            class="my-popover"
                            placement="left-start"
                            width="300" trigger="hover">
                            <div class="pop-content">
                                <div class="title">
                                    {{scope.row.legal.name}}
                                </div>
                                <div class="date-time">
                                    电话：{{scope.row.legal.phone}}
                                </div>
                            </div>
                            <span class="text-success pointer" slot="reference">{{scope.row.legal.name}}</span>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" label="成立时间">
                    <template slot-scope="scope">
                        {{scope.row.createdAt}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text" @click="editFarmHandler(scope.row.id)">编辑</span>
                            <span class="btn-text" @click="manageFarmHandler(scope.row.id)">管理</span>
                            <span class="btn-text text-danger" @click="deleteFarmHandler(scope.row.id)">删除</span>
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
        <farm-create-dialog ref="farmCreateDialog"></farm-create-dialog>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import Bord from './Bord';
import FarmCreateDialog from './FarmCreateDialog';
export default {
    name: 'FarmList',
    components: {Bord, FarmCreateDialog},
    data() {
        return {
            farmVisualTypeOptions: this.$util.farmVisualTypeOptions
        }
    },
    computed: {
        ...mapGetters({
            list: 'farm/list',
            searchField: 'farm/searchField'
        })
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
            updateSearchField: 'farm/updateSearchField',
            updatePagination: 'farm/updatePagination',
            resetSearchField: 'farm/resetSearchField',
            resetPagination: 'farm/resetPagination'
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
        createFarm() {
            this.$refs.farmCreateDialog.show();
        },
        editFarmHandler(id) {
            this.$router.push({ name: 'FarmEdit', params: {id} });
        },
        manageFarmHandler(id) {
            this.$router.push({ name: 'FarmManage', params: {id} });
        },
        async deleteFarmHandler() {
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
        gotoFarmDetail(id) {
            this.$router.push({ name: 'FarmDetail', params: {id} });
        }
    }
};
</script>
<style lang="scss" scoped>
.farm-list-container {
}
</style>
