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
                        <label class="search-field-item-label">类型</label>
                        <el-select
                            filterable
                            clearable
                            v-model="searchField.type"
                            placeholder="全部">
                            <el-option
                                v-for="(item, index) in []"
                                :key="index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="row-right">
                </div>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="tabel-field">
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
            list: {
                pagination: {
                    pageSize: 10,
                    total: 1,
                    pageNum: 1
                }
            }
        };
    },
    methods: {
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
