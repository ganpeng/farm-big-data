<template>
    <div class="admin-list-container">
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
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="tabel-field">
            <h2 class="content-title">管理员列表</h2>
            <div class="table-operator-field clearfix">
                <div class="float-left">
                </div>
                <div class="float-right">
                    <el-button class="btn-style-two contain-svg-icon" @click="createAdmin">
                        <svg-icon icon-class="add"/> 添加
                    </el-button>
                </div>
            </div>
            <el-table
                header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column prop="name" align="center" label="姓名"></el-table-column>
                <el-table-column prop="mobile" min-width="120px" align="center" label="手机号"></el-table-column>
                <el-table-column prop="createdAt" min-width="120px" align="center" label="创建日期">
                    <template slot-scope="scope">
                        {{scope.row.createdAt | dateFormat}}
                    </template>
                </el-table-column>
                <!--
                <el-table-column width="220px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div id="channel-operator" class="operator-btn-wrapper">
                            <span class="btn-text" @click="editAdmin(scope.row.id)">编辑</span>
                        </div>
                    </template>
                </el-table-column>
                -->
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
    name: 'AdminList',
    computed: {
        ...mapGetters({
            list: 'admin/list',
            searchField: 'admin/searchField'
        })
    },
    async created() {
        try {
            await this.getAdminList();
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        ...mapMutations({
            updateSearchField: 'admin/updateSearchField',
            updatePagination: 'admin/updatePagination'
        }),
        ...mapActions({
            getAdminList: 'admin/getAdminList'
        }),
        inputHandler(value, key) {
            this.updateSearchField({key, value});
        },
        searchHandler() {
            this.getAdminList();
        },
        handlePaginationChange(value, key) {
            this.updatePagination({key, value})
            this.getAdminList();
        },
        createAdmin() {
            let routeData = this.$router.resolve({
                name: 'AdminCreate'
            });
            window.open(routeData.href, '_blank');
        },
        editAdmin(id) {
            this.$router.push({ name: 'AdminEdit', params: {id} });
        }
    }
};
</script>
<style lang="scss" scoped>

</style>
