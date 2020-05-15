<template>
    <div class="channel-list-container my-content-container">
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
                            v-for="(item, index) in channelTypeOptions"
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
            <h2 class="content-title">渠道列表</h2>
            <div class="table-operator-field clearfix">
                <div class="float-left">
                </div>
                <div class="float-right">
                    <el-button
                        class="btn-style-two contain-svg-icon"
                        @click="createChannel">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                </div>
            </div>
            <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column align="center" min-width="120px" label="渠道名称">
                    <template slot-scope="scope">
                        <span @click="gotoChannelDetail(scope.row.id)" class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column align="center" min-width="120px" label="渠道类型">
                    <template slot-scope="scope">
                        {{ scope.row.type}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="渠道联系人">
                    <template slot-scope="scope">
                        {{scope.row.contacts.name}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" align="center" label="渠道联系人电话">
                    <template slot-scope="scope">
                        {{scope.row.contacts.phone}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="内部联系人">
                    <template slot-scope="scope">
                        {{scope.row.innerContacts.name}}
                    </template>
                </el-table-column>
                <el-table-column min-width="150px" align="center" label="内部联系人电话">
                    <template slot-scope="scope">
                        {{scope.row.innerContacts.phone}}
                    </template>
                </el-table-column>
                <el-table-column min-width="150px" align="center" label="累计销售额（元）">
                    <template slot-scope="scope">
                        {{scope.row.salesVolume}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="创建时间">
                    <template slot-scope="scope">
                        {{scope.row.createdAt}}
                    </template>
                </el-table-column>
                <el-table-column width="220px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text" @click="gotoChannelStatistics(scope.row.id)">统计</span>
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
