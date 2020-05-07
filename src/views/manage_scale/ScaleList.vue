<template>
    <div class="scale-container">
        <div class="table-container">
            <h2 class="content-title">搜索筛选</h2>
        </div>
        <div class="search-field">
            <div class="field-row">
                <div class="search-field-item">
                    <el-input
                        :value="searchField.keyword"
                        placeholder="请输入量表名称或编号"
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
                    <label class="search-field-item-label">类别</label>
                    <el-select
                        :value="searchField.categoryId"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'categoryId')">
                        <el-option
                            v-for="(item, index) in categoryList"
                            :key="index"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="search-field-item">
                    <label class="search-field-item-label">免答</label>
                    <el-select
                        :value="searchField.omittable"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'omittable')">
                        <el-option
                            v-for="(item, index) in omittableOptions"
                            :key="index"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="search-field-item">
                    <label class="search-field-item-label">限时</label>
                    <el-select
                        :value="searchField.timeLimit"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'timeLimit')">
                        <el-option
                            v-for="(item, index) in timeLimitOptions"
                            :key="index"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="search-field-item">
                    <label class="search-field-item-label">上下架</label>
                    <el-select
                        :value="searchField.visible"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'visible')">
                        <el-option
                            v-for="(item, index) in visibleOptions"
                            :key="index"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="tabel-field">
            <h2 class="content-title">量表列表</h2>
            <div class="table-operator-field clearfix">
                <div class="float-left">
                </div>
                <div class="float-right">
                    <el-button
                        class="btn-style-two contain-svg-icon"
                        @click="categoryManage">
                        类别管理
                    </el-button>
                    <el-button
                        class="btn-style-two contain-svg-icon"
                        @click="createScale">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                    <el-button
                        class="btn-style-two contain-svg-icon"
                        @click="importScale">
                        <svg-icon icon-class="import"/>
                        导入
                    </el-button>
                </div>
            </div>
            <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                <el-table-column prop="id" align="center" min-width="120px" label="id"></el-table-column>
                <el-table-column prop="name" align="center" min-width="120px" label="名称">
                    <template slot-scope="scope">
                        <span @click="gotoScaleDetail(scope.row.id)" class="ellipsis two name">
                            {{scope.row.name}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="alias" align="center" min-width="120px" label="别名"></el-table-column>
                <el-table-column prop="type" align="center" min-width="120px" label="类型">
                    <template slot-scope="scope">
                        <span v-if="scope.row.categorySet">
                            {{scope.row.categorySet.map((item) => item.name).join(', ')}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="questionCount" align="center" min-width="120px" label="题目数"></el-table-column>
                <el-table-column prop="timeLimitInMinutes" min-width="120px" align="center" label="限时"></el-table-column>
                <el-table-column prop="omittableCount" min-width="120px" align="center" label="免答"></el-table-column>
                <el-table-column prop="actualTestCount" min-width="120px" align="center" label="被测次数"></el-table-column>
                <el-table-column min-width="120px" align="center" label="状态">
                    <template slot-scope="scope">
                        <i v-if="scope.row.visible" class="on-the-shelf">上架</i>
                        <i v-else class="off-the-shelf">下架</i>
                    </template>
                </el-table-column>
                <el-table-column prop="createdAt" min-width="120px" align="center" label="创建时间">
                    <template slot-scope="scope">
                        {{scope.row.createdAt | dateFormat}}
                    </template>
                </el-table-column>
                <el-table-column width="220px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text" @click="editScaleHandler(scope.row.id)">编辑</span>
                            <!-- <span class="btn-text text-danger" @click="deleteScaleHandler(scope.row.id)">删除</span> -->
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
        <el-dialog
            title="类别管理"
            class="my-dialog"
            :visible.sync="categoryManageDialogVisible"
            :show-close="true"
            @open="openDialogHandler"
            :before-close="beforeCloseHandler"
            :close-on-click-modal="false"
            :close-on-press-escape="false">
            <el-form ref="categoryForm" status-icon label-width="120px" class="my-form" @submit.native.prevent>
                <el-form-item label="分类列表">
                    <div class="my-tags">
                        <el-tag
                            :key="index"
                            v-for="(category, index) in categoryList"
                            closable
                            :disable-transitions="false"
                            @close="deleteCategoryHandler(category.id)">
                            {{category.name}}
                        </el-tag>
                    </div>
                </el-form-item>
                <el-form-item label="类型名称">
                    <el-input v-model="categoryName" clearable placeholder="请输入类型名称"></el-input>
                    <el-button class="add-category-btn btn-style-five" @click="addCategoryHandler">添加</el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialogHandler">关闭</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
    name: 'ScaleList',
    data() {
        return {
            omittableOptions: this.$util.trueFalseOptions(1),
            timeLimitOptions: this.$util.trueFalseOptions(1),
            visibleOptions: this.$util.trueFalseOptions(2),
            categoryManageDialogVisible: false,
            categoryName: ''
        }
    },
    computed: {
        ...mapGetters({
            list: 'scale/list',
            searchField: 'scale/searchField',
            categoryList: 'common/categoryList'
        })
    },
    async created() {
        try {
            this.resetPagination();
            this.resetSearchField();
            this.getScaleList();
            this.getCategoryList();
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        ...mapMutations({
            updateSearchField: 'scale/updateSearchField',
            updatePagination: 'scale/updatePagination',
            resetPagination: 'scale/resetPagination',
            resetSearchField: 'scale/resetSearchField'
        }),
        ...mapActions({
            getScaleList: 'scale/getScaleList',
            getCategoryList: 'common/getCategoryList',
            postCategory: 'common/postCategory'
        }),
        inputHandler(value, key) {
            this.updateSearchField({key, value});
            if (key !== 'keyword') {
                this.getScaleList();
            }
        },
        searchHandler() {
            this.getScaleList();
        },
        handlePaginationChange(value, key) {
            this.updatePagination({key, value})
            this.getScaleList();
        },
        toggleScaleStatus() {},
        editScaleHandler(id) {
            this.$router.push({ name: 'ScaleEdit', params: {id} });
        },
        async deleteScaleHandler(id) {
            try {
                let confirm = await this.$confirm('你确定要删除吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if (confirm) {
                    let res = await this.$service.deleteScaleById(id);
                    if (res && res.errorCode === 0) {
                        this.getScaleList();
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        createScale() {
            let routeData = this.$router.resolve({
                name: 'ScaleCreate'
            });
            window.open(routeData.href, '_blank');
        },
        gotoScaleDetail(id) {
            this.$router.push({ name: 'ScaleDetail', params: {id} });
        },
        importScale() {},
        //  类别管理开始
        categoryManage() {
            this.showCategoryManageDialog();
        },
        showCategoryManageDialog() {
            this.categoryManageDialogVisible = true;
        },
        closeCategoryManageDialog() {
            this.categoryManageDialogVisible = false;
            this.categoryName = '';
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.closeCategoryManageDialog();
        },
        deleteCategoryHandler() {
            this.$message.error('删除功能正在开发中');
        },
        async addCategoryHandler() {
            try {
                if (this.categoryName) {
                    let index = this.categoryList.findIndex((item) => item.name === this.categoryName);
                    if (index >= 0) {
                        this.$message.error('该类型已经存在');
                    } else {
                        let res = await this.postCategory(this.categoryName);
                        if (res && res.errorCode === 0) {
                            this.$message.success('添加成功');
                        }
                    }
                } else {
                    this.$message.error('请输入类型名称');
                }
            } catch (err) {
                console.log(err);
            }
        },
        closeDialogHandler() {
            this.closeCategoryManageDialog();
        }
        //  类别管理结束
    }
}
</script>
<style lang="scss" scoped>
.add-category-btn {
    display: inline-block;
    margin-left: 20px;
}
</style>
