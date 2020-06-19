<template>
    <div class="farm-visual-container my-content-container">
        <my-bord :bordList="bordList"></my-bord>
        <div class="search-field">
            <div class="field-row">
                <div class="row-left">
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
                </div>
                <div class="row-right">
                    <!--
                    <el-button
                        class="btn-style-two contain-svg-icon">
                        <svg-icon icon-class="add"/>
                        添加
                    </el-button>
                    -->
                </div>
            </div>
        </div>
        <div class="tabel-field">
            <ul class="farm-visual-list">
                <li @click="gotoFarmVisualDetail" class="farm-visual-item">
                    <ul class="icon-list">
                        <li class="icon-item">
                            <svg-icon icon-class="list_icon1"/>
                        </li>
                        <li class="icon-item">
                            <svg-icon icon-class="list_icon2"/>
                        </li>
                        <li class="icon-item">
                            <svg-icon icon-class="list_icon3"/>
                        </li>
                        <li class="icon-item">
                            <svg-icon icon-class="list_icon4"/>
                        </li>
                        <li class="icon-item">
                            <svg-icon icon-class="list_icon5"/>
                        </li>
                        <li class="icon-item">
                            <svg-icon icon-class="list_icon6"/>
                        </li>
                    </ul>
                    <img src="../../assets/img/fv1.png" alt="">
                    <p class="name">聚成现代农业发展专业合作社</p>
                </li>
            </ul>
        </div>
        <!--
        <el-pagination
            @size-change="handlePaginationChange($event, 'pageSize')"
            @current-change="handlePaginationChange($event, 'pageNum')"
            :current-page="list.pagination.pageNum"
            :page-sizes="[10, 20, 50,100, 200, 500]"
            :page-size="list.pagination.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="list.pagination.total">
        </el-pagination>
        -->
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import MyBord from '@/components/MyBord';
import bords from '@/util/bords';
export default {
    name: 'FarmVisual',
    components: {MyBord},
    data() {
        return {
            bordList: bords.VISUAL_FARM_BORD_LIST,
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
        },
        gotoFarmVisualDetail() {
            let href = 'http://dev.n.tianchimedia.com/visual-farm-third-edition';
            window.open(href, '_blank');
            // this.$router.push({ name: 'FarmVisualDetail' });
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
        .icon-list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height:30px;
            padding: 4px 10px;
            background:rgba(32,39,56,1);
            border-radius:2px;
            .icon-item {
                .svg-icon {
                    width: 22px;
                    height: 22px;
                }
            }
        }
        .farm-visual-item {
            width: 24.5508%;
            height: 250px;
            margin-left: 0.598%;
            margin-bottom: 0.598%;
            padding: 12px;
            background: rgba(42,48,64,1);
            border-radius: 4px;
            cursor: pointer;
            img {
                width: 100%;
                height: 144px;
                margin-top: 12px;
            }
            p {
                text-align: center;
                // margin-left: 20px;
                margin-top: 12px;
                font-size: 16px;
                line-height: 16px;
                font-weight: 400;
                color: rgba(154,196,239, 1);
            }
        }
        .farm-visual-item:nth-of-type(4n + 1) {
            margin-left: 0;
        }
    }
}
</style>
