<template>
    <div class="tracing-product-container">
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
            <div class="table-operator-field clearfix">
                <div class="float-left">
                </div>
                <div class="float-right">
                    <el-button
                        class="btn-style-two contain-svg-icon"
                        @click="createTracingProduct">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                </div>
            </div>
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
                            <span class="btn-text" @click="editTracingProductHandler(scope.row.id)">编辑</span>
                            <span class="btn-text text-danger" @click="deleteTracingProductHandler(scope.row.id)">删除</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <tracing-product-dialog ref="tracingProductDialog"></tracing-product-dialog>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import TracingProductDialog from './TracingProductDialog';
import tracingList from '@/mock/tracing';
export default {
    name: 'TracingProduct',
    components: {TracingProductDialog},
    data() {
        return {
            tracingTypeOptions: this.$util.tracingTypeOptions,
            searchField: {
                keyword: '',
                type: '' // 类型
            },
            list: {
                data: tracingList.filter((item, index) => index < 2)
            }
        }
    },
    methods: {
        ...mapMutations({
            toggleVisibleById: 'tracing/toggleVisibleById'
        }),
        inputHandler(value, key) {
            _.set(this.searchField, key, value);
        },
        searchHandler() {},
        clearSearchField() {
            this.searchField = {
                keyword: '',
                type: ''
            };
        },
        createTracingProduct() {
            this.$refs.tracingProductDialog.show();
        },
        editTracingProductHandler(id) {
            let tracing = _.get(this.list.data, id);
            this.$refs.tracingProductDialog.show(tracing);
        },
        async deleteTracingProductHandler() {
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
        showCode() {},
        toggleVisibleById(id) {
            this.list.data = this.list.data.map((item) => {
                if (item.id === id) {
                    item.visible = !item.visible;
                }
                return item;
            });
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
                    this.toggleVisibleById(tracing.id);
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.tracing-product-container {}
</style>
