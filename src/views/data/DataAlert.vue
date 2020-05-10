<template>
    <div class="data-alert-container">
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
                    <label class="search-field-item-label">级别</label>
                    <el-select
                        :value="searchField.level"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'level')">
                        <el-option
                            v-for="(item, index) in levelOptions"
                            :key="index"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="search-field-item">
                    <label class="search-field-item-label">类型</label>
                    <el-select
                        :value="searchField.type"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'type')">
                        <el-option
                            v-for="(item, index) in dataAlertTypeOptions"
                            :key="index"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="search-field-item">
                    <label class="search-field-item-label">来源</label>
                    <el-select
                        :value="searchField.source"
                        filterable
                        clearable
                        placeholder="全部"
                        @input="inputHandler($event, 'source')">
                        <el-option
                            v-for="(item, index) in dataAlertSourceOptions"
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
            <h2 class="content-title">预警列表</h2>
            <el-table
                header-row-class-name="common-table-header"
                class="my-table-style"
                :data="list.data" border>
                <el-table-column prop="id" align="center" min-width="50px" label="编号"></el-table-column>
                <el-table-column prop="level" align="center" min-width="80px" label="级别">
                    <template slot-scope="scope">
                        <span :class="levelClass(scope.row.level)">
                            {{levelLabel(scope.row.level)}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="type" align="center" min-width="80px" label="类型">
                    <template slot-scope="scope">
                        <span class="">
                            {{typeLabel(scope.row.type)}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="desc" align="center" min-width="280px" label="详情"></el-table-column>
                <el-table-column prop="source" align="center" min-width="80px" label="来源">
                    <template slot-scope="scope">
                        <span class="">
                            {{sourceLabel(scope.row.source)}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" align="center" label="发生时间段">
                    <template slot-scope="scope">
                        {{scope.row.startAt}} - {{scope.row.endAt}}
                    </template>
                </el-table-column>
                <el-table-column min-width="80px" align="center" label="预警时间">
                    <template slot-scope="scope">
                        {{scope.row.createdAt}}
                    </template>
                </el-table-column>
                <el-table-column min-width="60px" align="center" label="状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.processingStatus === 1" class="text-danger">{{statusLabel(scope.row.processingStatus)}}</span>
                        <span v-else class="text-success">{{statusLabel(scope.row.processingStatus)}}</span>
                    </template>
                </el-table-column>
                <el-table-column width="120px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span v-if="scope.row.processingStatus === 1"
                                class="btn-text" @click="processingHandler(scope.row)">去处理</span>
                            <el-popover
                                v-else
                                class="my-popover"
                                placement="left-start"
                                width="300" trigger="hover">
                                <div class="pop-content">
                                    <div class="title">
                                        {{processing(scope.row.processingResult, 'title')}}
                                    </div>
                                    <div class="date-time">
                                        {{processing(scope.row.processingResult, 'time')}}
                                    </div>
                                    <div class="date-content">
                                        {{processing(scope.row.processingResult, 'content')}}
                                    </div>
                                </div>
                                <span class="text-success pointer" slot="reference">处理结果</span>
                            </el-popover>
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
        <processing-dialog ref="processingDialog"></processing-dialog>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import ProcessingDialog from './ProcessingDialog';
import Bord from './Bord';
export default {
    name: 'DataAlert',
    components: {ProcessingDialog, Bord},
    data() {
        return {
            levelOptions: this.$util.levelOptions,
            dataAlertTypeOptions: this.$util.dataAlertTypeOptions,
            dataAlertSourceOptions: this.$util.dataAlertSourceOptions,
            processingStatusOptions: this.$util.processingStatusOptions
        }
    },
    computed: {
        ...mapGetters({
            list: 'data_alert/list',
            searchField: 'data_alert/searchField',
        }),
        levelClass() {
            return (level) => {
                switch (level) {
                    case 1:
                        return 'text-level1';
                    case 2:
                        return 'text-level2';
                    case 3:
                        return 'text-level3';
                    case 4:
                        return 'text-level4';
                    default:
                        return ''
                }
            };
        },
        levelLabel() {
            return (value) => {
                return this.$util.getLabelByValue(this.levelOptions, value);
            }
        },
        typeLabel() {
            return (value) => {
                return this.$util.getLabelByValue(this.dataAlertTypeOptions, value);
            }
        },
        sourceLabel() {
            return (value) => {
                return this.$util.getLabelByValue(this.dataAlertSourceOptions, value);
            }
        },
        statusLabel() {
            return (value) => {
                return this.$util.getLabelByValue(this.processingStatusOptions, value);
            }
        },
        processing() {
            return (data, prop) => {
                switch (prop) {
                    case 'title':
                        return `${data.user} ${data.phone}`;
                    case 'time':
                        return `${data.dateTime}`;
                    case 'content':
                        return `${data.desc}`;
                    default:
                        return '';
                }
            }
        }
    },
    methods: {
        ...mapMutations({
            updateSearchField: 'data_alert/updateSearchField',
            updatePagination: 'data_alert/updatePagination',
            resetSearchField: 'data_alert/resetSearchField',
            resetPagination: 'data_alert/resetPagination'
        }),
        inputHandler(value, key) {
            this.updateSearchField({key, value});
        },
        processingHandler() {
            this.$refs.processingDialog.show();
        },
        searchHandler() {
        },
        clearSearchField() {
            this.resetSearchField();
        },
        handlePaginationChange(value, key) {
            this.updatePagination({key, value});
        }
    }
};
</script>
<style lang="scss" scoped>
.data-alert-container {
    .text-level1 {
        color: red;
    }
    .text-level2 {
        color: yellow;
    }
    .text-level3 {
        color: orange;
    }
    .text-level4 {
        color: blue;
    }
}
</style>
<style lang="scss">

</style>

