<template>
    <div class="pee-container">
        <bord></bord>
        <div class="table-container">
            <h2 class="content-title">搜索筛选</h2>
        </div>
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
                <el-button class="btn-style-one" @click="clearSearchField">
                    <svg-icon icon-class="reset"/> 重置
                </el-button>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="tabel-field">
            <h2 class="content-title">物环列表</h2>
            <div class="table-operator-field clearfix">
                <div class="float-left">
                </div>
                <div class="float-right">
                    <el-button
                        class="btn-style-two contain-svg-icon"
                        @click="createPee">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                </div>
            </div>
            <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column align="center" min-width="120px" label="设备ID">
                    <template slot-scope="scope">
                        <span @click="gotoPeeDetail(scope.row.id)" class="ellipsis two name">
                            {{scope.row.dId}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="sn" align="center" min-width="120px" label="设备SN"></el-table-column>
                <el-table-column align="center" min-width="120px" label="传感器类型">
                    <template slot-scope="scope">
                        {{ scope.row.type}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="地址">
                    <template slot-scope="scope">
                        {{scope.row.address.city}}/{{scope.row.address.area}}/{{scope.row.address.detail}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" align="center" label="经纬度">
                    <template slot-scope="scope">
                        [{{scope.row.latitude}}, {{scope.row.longitude}}]
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="厂商名称">
                    <template slot-scope="scope">
                        {{scope.row.firmName}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="所属农场">
                    <template slot-scope="scope">
                        {{scope.row.farm}}
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" align="center" label="负责人">
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
                <el-table-column min-width="80px" align="center" label="状态">
                    <template slot-scope="scope">
                        {{scope.row.status}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="上线时间">
                    <template slot-scope="scope">
                        {{scope.row.createdAt}}
                    </template>
                </el-table-column>
                <el-table-column width="220px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text text-danger">暂停</span>
                            <span class="btn-text">重启</span>
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
            updateSearchField: 'pee/updateSearchField',
            updatePagination: 'pee/updatePagination',
            resetSearchField: 'pee/resetSearchField',
            resetPagination: 'pee/resetPagination'
        }),
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
        async deletePeeHandler(id) {
            try {
                let confirm = await this.$confirm('你确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if (confirm) {}
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
