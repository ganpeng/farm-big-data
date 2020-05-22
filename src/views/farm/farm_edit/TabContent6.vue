<template>
    <div class="tab-content-six">
        <div class="search-field">
            <div class="field-row">
                <div class="row-left">
                    <div class="search-field-item">
                        <el-input v-model="searchField.keyword" class="border-input">
                        </el-input>
                    </div>
                    <el-button class="btn-style-one" type="primary">
                        <svg-icon icon-class="search"/> 搜索
                    </el-button>
                    <div class="search-field-item">
                        <label class="search-field-item-label">地块</label>
                        <el-select
                            filterable
                            clearable
                            v-model="searchField.type"
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
                </div>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="tabel-field">
            <el-table
                header-row-class-name="common-table-header"
                size="small"
                :row-class-name="tableRowClassName"
                class="my-table-style"
                :data="list.data">
                <el-table-column type="selection" align="center" width="50"></el-table-column>
                <el-table-column min-width="100px" label="地块名称">
                    <template slot-scope="scope">
                        <span class="ellipsis two name">
                            {{scope.row.one}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="土地来源">
                    <template slot-scope="scope">
                        {{ scope.row.two}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="水利条件">
                    <template slot-scope="scope">
                        {{ scope.row.three}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" label="种植作物">
                    <template slot-scope="scope">
                        {{scope.row.four}}
                    </template>
                </el-table-column>
                <el-table-column min-width="180px" label="地块编码">
                    <template slot-scope="scope">
                        {{scope.row.five}}
                    </template>
                </el-table-column>
                <el-table-column min-width="120px" label="种植面积 公顷">
                    <template slot-scope="scope">
                        {{scope.row.six}}
                    </template>
                </el-table-column>
                <el-table-column width="160px" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="operator-btn-wrapper">
                            <span class="btn-text" @click="showDetailDialog(scope.row.id)">植保记录</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <!--
            <ul class="farm-visual-list">
                <li @click="showDetailDialog" class="farm-visual-item">
                    <img src="../../../assets/img/fv1.png" alt="">
                    <div class="info">
                        <p class="name">01 吉林市十月稻田生态农场</p>
                        <p class="desc">当前作物：水稻</p>
                    </div>
                </li>
                <li @click="showDetailDialog" class="farm-visual-item">
                    <img src="../../../assets/img/fv2.png" alt="">
                    <div class="info">
                        <p class="name">02 吉林市十月稻田生态农场</p>
                        <p class="desc">当前作物：水稻</p>
                    </div>
                </li>
                <li @click="showDetailDialog" class="farm-visual-item">
                    <img src="../../../assets/img/fv3.png" alt="">
                    <div class="info">
                        <p class="name">03 吉林市十月稻田生态农场</p>
                        <p class="desc">当前作物：水稻</p>
                    </div>
                </li>
                <li @click="showDetailDialog" class="farm-visual-item">
                    <img src="../../../assets/img/fv4.png" alt="">
                    <div class="info">
                        <p class="name">04 吉林市十月稻田生态农场</p>
                        <p class="desc">当前作物：水稻</p>
                    </div>
                </li>
                <li @click="showDetailDialog" class="farm-visual-item">
                    <img src="../../../assets/img/fv5.png" alt="">
                    <div class="info">
                        <p class="name">05 吉林市十月稻田生态农场</p>
                        <p class="desc">当前作物：水稻</p>
                    </div>
                </li>
                <li @click="showDetailDialog" class="farm-visual-item">
                    <img src="../../../assets/img/fv6.png" alt="">
                    <div class="info">
                        <p class="name">06 吉林市十月稻田生态农场</p>
                        <p class="desc">当前作物：水稻</p>
                    </div>
                </li>
                <li @click="showDetailDialog" class="farm-visual-item">
                    <img src="../../../assets/img/fv7.png" alt="">
                    <div class="info">
                        <p class="name">07 吉林市十月稻田生态农场</p>
                        <p class="desc">当前作物：水稻</p>
                    </div>
                </li>
                <li @click="showDetailDialog" class="farm-visual-item">
                    <img src="../../../assets/img/fv8.png" alt="">
                    <div class="info">
                        <p class="name">08 吉林市十月稻田生态农场</p>
                        <p class="desc">当前作物：水稻</p>
                    </div>
                </li>
            </ul>
            -->
        </div>
        <el-pagination
            :current-page="list.pagination.pageNum"
            :page-sizes="[10, 20, 50,100, 200, 500]"
            :page-size="list.pagination.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="list.pagination.total">
        </el-pagination>
        <plant-protection-dialog ref="plantProtectionDialog"></plant-protection-dialog>
    </div>
</template>
<script>
import PlantProtectionDialog from './components/PlantProtectionDialog';
export default {
    name: 'TabContent6',
    components: {PlantProtectionDialog},
    data() {
        return {
            searchField: {
                keyword: '',
                type: ''
            },
            options: [
                {
                    value: '小河西',
                    label: '小河西'
                },
                {
                    value: '大平地',
                    label: '大平地'
                },
                {
                    value: '老帽购',
                    label: '老帽购'
                },
                {
                    value: '河沿西',
                    label: '河沿西'
                }
            ],
            list: {
                data: [
                    {
                        id: 1,
                        one: '小河西',
                        two: '成员出资',
                        three: '水田',
                        four: '水稻',
                        five: '2202841122020100075',
                        six: '10'
                    },
                    {
                        id: 2,
                        one: '大平地',
                        two: '土地托管',
                        three: '水田',
                        four: '黄米',
                        five: '2202841122020100075',
                        six: '9'
                    },
                    {
                        id: 3,
                        one: '老帽购',
                        two: '成员出资',
                        three: '水浇地',
                        four: '大豆',
                        five: '2202841122020100075',
                        six: '11'
                    },
                    {
                        id: 4,
                        one: '河沿西',
                        two: '成员出资',
                        three: '水浇地',
                        four: '冬菇',
                        five: '2202841122020100075',
                        six: '20'
                    }
                ],
                pagination: {
                    total: 4,
                    pageSize: 30,
                    pageNum: 1
                }
            }
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
        clearSearchField() {
            this.searchField = {
                type: ''
            };
        },
        showDetailDialog() {
            this.$refs.plantProtectionDialog.show();
        }
    }
}
</script>
<style lang="scss" scoped>
.tab-content-six {
    .farm-visual-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        .farm-visual-item {
            position: relative;
            width: 24.5508%;
            height: 292px;
            padding: 20px;
            margin-left: 0.598%;
            margin-bottom: 0.598%;
            background: rgba(42,48,64,1);
            border-radius: 12px;
            cursor: pointer;
            img {
                width: 100%;
                height: 192px;
            }
            .info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                margin-top: 30px;
                color: #fff;
                .name {
                    color: rgba(154,196,239, 1);
                }
            }
        }
        .farm-visual-item:nth-of-type(4n + 1) {
            margin-left: 0;
        }
    }
}
</style>
