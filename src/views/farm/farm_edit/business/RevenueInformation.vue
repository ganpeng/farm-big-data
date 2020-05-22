<template>
    <div class="revenue-information-container">
        <div class="search-field">
            <div class="field-row">
                <div class="row-left">
                    <div class="search-field-item">
                        <el-input
                            v-model="searchField.keyword"
                            clearable
                            class="border-input"
                        >
                        </el-input>
                    </div>
                    <el-button class="btn-style-one" @click="searchHandler" type="primary">
                        <svg-icon icon-class="search"/> 搜索
                    </el-button>
                    <div class="search-field-item">
                        <label class="search-field-item-label">年份</label>
                        <el-select
                            v-model="searchField.year"
                            filterable
                            clearable
                            placeholder="全部">
                            <el-option
                                v-for="(item, index) in options"
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
                        @click="createRevenueInformation">
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
                <el-table-column label="年度">
                    <template slot-scope="scope">
                        {{ scope.row.one}}
                    </template>
                </el-table-column>
                <el-table-column label="营收">
                    <template slot-scope="scope">
                        {{scope.row.two}}
                    </template>
                </el-table-column>
                <el-table-column label="盈余">
                    <template slot-scope="scope">
                        {{scope.row.three}}
                    </template>
                </el-table-column>
                <el-table-column label="缴税">
                    <template slot-scope="scope">
                        {{scope.row.four}}
                    </template>
                </el-table-column>
                <el-table-column label="分红">
                    <template slot-scope="scope">
                        {{scope.row.five}}
                    </template>
                </el-table-column>
                <el-table-column width="160px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text" @click="editRevenueInformationHandler(scope.row.id)">编辑</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination
            @size-change="() => {}"
            @current-change="() => {}"
            :current-page="list.pagination.pageNum"
            :page-sizes="[10, 30, 50,100, 200, 500]"
            :page-size="list.pagination.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="list.pagination.total">
        </el-pagination>
        <el-dialog
            title="营收信息"
            class="my-dialog"
            width="60%"
            :visible.sync="visible"
            :show-close="true"
            :before-close="beforeCloseHandler"
            :close-on-click-modal="false"
            :close-on-press-escape="false">
            <div class="dialog-body">
                <el-form
                    :model="specialSub"
                    class="my-form"
                    label-width="180px"
                    @submit.native.prevent>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="选择年份">
                                <el-date-picker
                                    v-model="revenueInformation.one"
                                    type="year">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="当年营收 元">
                                <el-input v-model="revenueInformation.two"></el-input>
                            </el-form-item>
                            <el-form-item label="当年缴税 元">
                                <el-input v-model="revenueInformation.four"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="当年盈余 元">
                                <el-input v-model="revenueInformation.three"></el-input>
                            </el-form-item>
                            <el-form-item label="当年分红 元">
                                <el-input v-model="revenueInformation.five"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button size="medium" @click="cancelHandler">取 消</el-button>
                <el-button type="primary" @click="enterHandler">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: 'RevenueInformation',
    data() {
        return {
            visible: false,
            searchField: {
                keyword: '',
                year: ''
            },
            revenueInformation: {
                id: 1,
                one: '',
                two: '',
                three: '',
                four: '',
                five: ''
            },
            list: {
                data: [{
                    id: 1,
                    one: '2020',
                    two: '6,500,000',
                    three: '3,500,000',
                    four: '20,000',
                    five: '300,000'
                }],
                pagination: {
                    total: 1,
                    pageSize: 30,
                    pageNum: 1
                }
            },
            options: [
                {
                    value: '2020',
                    label: '2020'
                },
                {
                    value: '2019',
                    label: '2019'
                }
            ]
        };
    },
    methods: {
        tableRowClassName({rowIndex}) {
            if ((rowIndex % 2) === 0) {
                return 'warning-row';
            } else {
                return 'success-row';
            }
        },
        editRevenueInformationHandler(id) {
            this.visible = true;
            this.revenueInformation = _.cloneDeep(this.list.data.find((item) => item.id === id));
        },
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.visible = false;
            this.revenueInformation = {
                id: 1,
                one: '',
                two: '',
                three: '',
                four: '',
                five: ''
            };
        },
        enterHandler() {
            this.cancelHandler();
        },
        createRevenueInformation() {
            this.visible = true;
            this.revenueInformation = {
                id: 1,
                one: '',
                two: '',
                three: '',
                four: '',
                five: ''
            };
        }
    }
}
</script>
<style lang="scss" scoped>
.revenue-information-container {
    .left-line-charts {
        padding: 20px;
        p {
            font-size: 20px;
            color: #fff;
            text-align: center;
        }
    }
}
</style>
