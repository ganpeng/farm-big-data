<template>
    <div class="tab-content-six">
        <div class="search-field">
            <div class="field-row">
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
                <el-button class="btn-style-one" @click="clearSearchField">
                    <svg-icon icon-class="reset"/> 重置
                </el-button>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="tabel-field">
            <ul class="farm-visual-list">
                <li class="farm-visual-item">
                    <img src="../../../assets/img/fv1.png" alt="">
                    <p class="name">01 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../../assets/img/fv2.png" alt="">
                    <p class="name">02 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../../assets/img/fv3.png" alt="">
                    <p class="name">03 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../../assets/img/fv4.png" alt="">
                    <p class="name">04 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../../assets/img/fv5.png" alt="">
                    <p class="name">05 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../../assets/img/fv6.png" alt="">
                    <p class="name">06 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../../assets/img/fv7.png" alt="">
                    <p class="name">07 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../../assets/img/fv8.png" alt="">
                    <p class="name">08 吉林市十月稻田生态农场</p>
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
    </div>
</template>
<script>
export default {
    name: 'TabContent6',
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
            width: 24.5508%;
            height: 292px;
            margin-left: 0.598%;
            margin-bottom: 0.598%;
            background: rgba(42,48,64,1);
            border-radius: 12px;
            cursor: pointer;
            img {
                width: 90%;
                height: 192px;
                margin-top: 20px;
            }
            p {
                text-align: left;
                margin-left: 20px;
                margin-top: 30px;
                font-size: 20px;
                font-weight: 500;
                color: rgba(154,196,239, 1);
            }
        }
        .farm-visual-item:nth-of-type(4n + 1) {
            margin-left: 0;
        }
    }
}
</style>
