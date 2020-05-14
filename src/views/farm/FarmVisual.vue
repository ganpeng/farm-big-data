<template>
    <div class="farm-visual-container my-content-container">
        <farm-visual-bord></farm-visual-bord>
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
                            v-for="(item, index) in farmVisualTypeOptions"
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
                    <img src="../../assets/img/fv1.png" alt="">
                    <p class="name">01 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../assets/img/fv2.png" alt="">
                    <p class="name">02 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../assets/img/fv3.png" alt="">
                    <p class="name">03 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../assets/img/fv4.png" alt="">
                    <p class="name">04 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../assets/img/fv5.png" alt="">
                    <p class="name">05 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../assets/img/fv6.png" alt="">
                    <p class="name">06 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../assets/img/fv7.png" alt="">
                    <p class="name">07 吉林市十月稻田生态农场</p>
                </li>
                <li class="farm-visual-item">
                    <img src="../../assets/img/fv8.png" alt="">
                    <p class="name">08 吉林市十月稻田生态农场</p>
                </li>
            </ul>
            <div style="margin: 40px 0;" class="table-operator-field clearfix">
                <div class="float-left">
                </div>
                <div class="float-right">
                    <el-button
                        class="btn-style-two contain-svg-icon">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                </div>
            </div>
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
import FarmVisualBord from './FarmVisualBord';
export default {
    name: 'FarmVisual',
    components: {FarmVisualBord},
    data() {
        return {
            farmVisualTypeOptions: this.$util.farmVisualTypeOptions
        }
    },
    computed: {
        ...mapGetters({
            list: 'farm_visual/list',
            searchField: 'farm_visual/searchField'
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
            updateSearchField: 'farm_visual/updateSearchField',
            updatePagination: 'farm_visual/updatePagination',
            resetSearchField: 'farm_visual/resetSearchField',
            resetPagination: 'farm_visual/resetPagination',
            toggleVisibleById: 'farm_visual/toggleVisibleById'
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
        editChannelHandler() {},
        async deleteChannelHandler() {
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
};
</script>
<style lang="scss" scoped>
.farm-visual-container {
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
