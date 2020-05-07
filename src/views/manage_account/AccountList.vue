<template>
    <div class="account-list-container">
        <div class="table-container">
            <h2 class="content-title">搜索筛选</h2>
        </div>
        <div class="search-field">
            <div class="field-row">
                <div class="search-field-item">
                    <el-input
                        :value="searchField.keyword"
                        placeholder="请输入频道名称或编号"
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
                    <label class="search-field-item-label">状态</label>
                    <el-select
                        :value="searchField.status"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'status')">
                        <el-option
                            v-for="(item, index) in accountSearchStatusOptons"
                            :key="index"
                            :label="item.text"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="tabel-field">
            <h2 class="content-title">用户列表</h2>
            <div class="table-operator-field clearfix">
                <div class="float-left">
                </div>
                <div class="float-right">
                </div>
            </div>
            <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column align="center" min-width="120px" label="姓名">
                    <template slot-scope="scope">
                        <span @click="gotoAccountDetail(scope.row.id)" class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="头像">
                    <template slot-scope="scope">
                        <img class="avatar-img" @click="gotoAccountDetail(scope.row.id)" :src="scope.row.avatarUrl" :alt="scope.row.name">
                    </template>
                </el-table-column>
                <el-table-column prop="mobile" align="center" min-width="120px" label="手机号">
                    <template slot-scope="scope">
                        <span @click="gotoAccountDetail(scope.row.id)" class="ellipsis two name">
                            {{scope.row.mobile}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="nickname" align="center" min-width="120px" label="昵称">
                    <template slot-scope="scope">
                        <span @click="gotoAccountDetail(scope.row.id)" class="ellipsis two name">
                            {{scope.row.nickname}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="创建日期">
                    <template slot-scope="scope">
                        {{scope.row.createdAt | dateFormat}}
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
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
    name: 'AccountList',
    data() {
        return {
            accountSearchStatusOptons: [
                {
                    value: 0,
                    text: '已完成'
                },
                {
                    value: 1,
                    text: '未完成'
                }
            ]
        }
    },
    computed: {
        ...mapGetters({
            list: 'account/list',
            searchField: 'account/searchField'
        })
    },
    async created() {
        try {
            await this.getAccountList();
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        ...mapMutations({
            updateSearchField: 'account/updateSearchField',
            updatePagination: 'account/updatePagination'
        }),
        ...mapActions({
            getAccountList: 'account/getAccountList'
        }),
        inputHandler(value, key) {
            this.updateSearchField({key, value});
            if (key !== 'keyword') {
                this.getAccountList();
            }
        },
        searchHandler() {
            this.getAccountList();
        },
        handlePaginationChange(value, key) {
            this.updatePagination({key, value})
            this.getAccountList();
        },
        gotoAccountDetail(id) {
            this.$router.push({ name: 'AccountDetail', params: {id} });
        }
    }
}
</script>
<style lang="scss" scoped>
.avatar-img {
    display: inline-block;
    width: 60px;
    height: 60px;
}
</style>
