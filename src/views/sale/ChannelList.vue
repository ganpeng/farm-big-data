<template>
    <div class="channel-list-container my-content-container">
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
                                v-for="(item, index) in channelTypeOptions"
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
                        @click="createChannel">
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
                <el-table-column min-width="120px" label="渠道名称">
                    <template slot-scope="scope">
                        <span @click="gotoChannelStatistics(scope.row.id)" class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="渠道类型">
                    <template slot-scope="scope">
                        {{ scope.row.type}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="渠道联系人">
                    <template slot-scope="scope">
                        {{scope.row.contacts.name}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" label="渠道联系人电话">
                    <template slot-scope="scope">
                        {{scope.row.contacts.phone}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="内部联系人">
                    <template slot-scope="scope">
                        {{scope.row.innerContacts.name}}
                    </template>
                </el-table-column>
                <el-table-column min-width="150px" label="内部联系人电话">
                    <template slot-scope="scope">
                        {{scope.row.innerContacts.phone}}
                    </template>
                </el-table-column>
                <el-table-column min-width="150px" label="累计销售额（元）">
                    <template slot-scope="scope">
                        {{scope.row.salesVolume}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="创建时间">
                    <template slot-scope="scope">
                        {{scope.row.createdAt}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <!-- <span class="btn-text" @click="gotoChannelStatistics(scope.row.id)">统计</span> -->
                            <span class="btn-text" @click="editChannelHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deleteChannelHandler(scope.row.id)">删除</span>
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
import Bord from './Bord';
export default {
    name: 'ChannelList',
    components: {Bord},
    data() {
        return {
            channelTypeOptions: this.$util.channelTypeOptions
        }
    },
    computed: {
        ...mapGetters({
            list: 'channel/list',
            searchField: 'channel/searchField'
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
            updateSearchField: 'channel/updateSearchField',
            updatePagination: 'channel/updatePagination',
            resetSearchField: 'channel/resetSearchField',
            resetPagination: 'channel/resetPagination'
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
        createChannel() {
            let routeData = this.$router.resolve({
                name: 'ChannelCreate'
            });
            window.open(routeData.href, '_blank');
        },
        editChannelHandler(id) {
            this.$router.push({ name: 'ChannelEdit', params: {id} });
        },
        async deleteChannelHandler() {
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
        gotoChannelStatistics(id) {
            this.$router.push({ name: 'ChannelStatistics', params: {id}, query: {id} });
        },
        gotoChannelDetail(id) {
            this.$router.push({ name: 'ChannelDetail', params: {id} });
        },
    }
}
</script>
<style lang="scss" scoped>
.channel-list-container {}
</style>
