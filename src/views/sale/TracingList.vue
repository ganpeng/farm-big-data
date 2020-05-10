<template>
    <div class="tracing-list-container">
        <tracing-bord></tracing-bord>
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
                            v-for="(item, index) in tracingTypeOptions"
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
            <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column align="center" min-width="120px" label="商品ID">
                    <template slot-scope="scope">
                        <span class="ellipsis">
                            {{scope.row.pId}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column align="center" min-width="120px" label="名称">
                    <template slot-scope="scope">
                        {{ scope.row.name}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="种类">
                    <template slot-scope="scope">
                        {{scope.row.type}}
                    </template>
                </el-table-column>
                <el-table-column min-width="160px" align="center" label="品种">
                    <template slot-scope="scope">
                        {{scope.row.variety}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="规格">
                    <template slot-scope="scope">
                        {{scope.row.specs}}
                    </template>
                </el-table-column>
                <el-table-column min-width="150px" align="center" label="认证">
                    <template slot-scope="scope">
                        {{scope.row.auth}}
                    </template>
                </el-table-column>
                <el-table-column min-width="150px" align="center" label="所属农场">
                    <template slot-scope="scope">
                        {{scope.row.farm}}
                    </template>
                </el-table-column>
                <el-table-column min-width="180px" align="center" label="累计销售额（元）">
                    <template slot-scope="scope">
                        {{scope.row.salesVolume}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" align="center" label="上下架">
                    <template slot-scope="scope">
                        <input
                            class="my-switch switch-anim"
                            type="checkbox"
                            :checked="scope.row.visible"
                            @click.prevent="toggleFram(scope.row)"/>
                        <i v-if="scope.row.visible" class="on-the-shelf">已上架</i>
                        <i v-else class="off-the-shelf">已下架</i>
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
                            <span class="btn-text" @click="showCode(scope.row.id)">二维码</span>
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
import _ from 'lodash';
import TracingBord from './TracingBord';
export default {
    name: 'TracingList',
    components: {TracingBord},
    data() {
        return {
            tracingTypeOptions: this.$util.tracingTypeOptions
        }
    },
    computed: {
        ...mapGetters({
            list: 'tracing/list',
            searchField: 'tracing/searchField'
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
            updateSearchField: 'tracing/updateSearchField',
            updatePagination: 'tracing/updatePagination',
            resetSearchField: 'tracing/resetSearchField',
            resetPagination: 'tracing/resetPagination',
            toggleVisibleById: 'tracing/toggleVisibleById'
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
        editChannelHandler(id) {},
        async deleteChannelHandler(id) {
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
        showCode(id) {},
        gotoChannelStatistics(id) {
            this.$router.push({ name: 'ChannelStatistics', params: {id} });
        },
        gotoChannelDetail(id) {
            this.$router.push({ name: 'ChannelDetail', params: {id} });
        },
        async toggleFram(tracing) {
            try {
                let status = tracing.visible ? '下架' : '上架'
                let confirm = await this.$confirm(`你确定${status}要吗, 是否继续?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if (confirm) {
                    this.toggleVisibleById({id: tracing.id});
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.tracing-list-container {}
</style>
