<template>
    <div class="daily-recommend-edit-container">
        <h2 class="content-title">编辑每日推荐</h2>
        <div class="seperator-line"></div>
        <div class="daily-recommend clearfix">
            <el-col :span="14">
                <div class="clearfix">
                    <el-button v-if="dailyRecommendList.length !== 10" @click="addDailyRecommendHandler" class="btn-style-five float-right">
                        <svg-icon icon-class="add"/>
                    </el-button>
                </div>
                <draggable class="daily-list clearfix" tag="ul" v-model="dailyRecommends">
                    <li @click="showEditDailyRecommendDialog(index)" v-for="(dailyRecommend, index) in dailyRecommends" :key="index" class="daily-item">
                        <img class="daily-image" :src="getImageUrl(dailyRecommend.imageUrl)" alt="">
                        <span v-if="getDisplayTestCount(dailyRecommend)" class="daily-count">{{getDisplayTestCount(dailyRecommend)}}人评测</span>
                        <span v-if="index > 2" @click.stop="deleteDailyRecommendHandler(index)" class="delete-btn">
                            <svg-icon className="hover" icon-class="remove_image_hover"/>
                            <svg-icon className="default" icon-class="remove_image_default"/>
                        </span>
                        <span class="daily-name">{{dailyRecommend.questionSheet.name}}</span>
                    </li>
                </draggable>
            </el-col>
        </div>
        <el-dialog
            title="推荐"
            class="my-dialog"
            :visible.sync="dailyRecommendDialogVisible"
            :show-close="true"
            width="80%"
            @open="openDialogHandler"
            :before-close="beforeCloseHandler"
            :close-on-click-modal="false"
            :close-on-press-escape="false">
            <el-steps class="my-steps" align-center :active="active" finish-status="success">
                <el-step title="选择量表"></el-step>
                <el-step title="选择图片"></el-step>
            </el-steps>
            <div v-if="active === 0" class="step-one">
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
                    <el-table header-row-class-name="common-table-header" class="my-table-style" :data="list.data" border>
                        <el-table-column align="center" min-width="60px" label="">
                            <template slot-scope="scope">
                                <el-radio :disabled="isSelected(scope.row.id)" @input="selectScale(scope.row)" :value="scope.row.id" :label="scale.id"></el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column prop="id" align="center" min-width="120px" label="id"></el-table-column>
                        <el-table-column prop="name" align="center" min-width="120px" label="名称">
                            <template slot-scope="scope">
                                <span class="ellipsis two name">
                                    {{scope.row.name}}
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="type" align="center" min-width="120px" label="类型"></el-table-column>
                        <el-table-column prop="questionCount" align="center" min-width="120px" label="题目数"></el-table-column>
                        <el-table-column prop="timeLimitInMinutes" min-width="120px" align="center" label="限时"></el-table-column>
                        <el-table-column prop="omittableCount" min-width="120px" align="center" label="免答"></el-table-column>
                        <el-table-column prop="actualTestCount" min-width="120px" align="center" label="被测次数"></el-table-column>
                        <el-table-column prop="status" min-width="120px" align="center" label="状态">
                            <template slot-scope="scope">
                                <input
                                    class="my-switch switch-anim"
                                    type="checkbox"
                                    :checked="scope.row.status"/>
                                <i v-if="scope.row.visible" class="on-the-shelf">正常</i>
                                <i v-else class="off-the-shelf">过期</i>
                            </template>
                        </el-table-column>
                        <el-table-column prop="createdAt" min-width="120px" align="center" label="创建时间">
                            <template slot-scope="scope">
                                {{scope.row.createdAt | dateFormat}}
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
            </div>
            <div v-if="active === 1" class="step-two">
                <el-form class="my-form" status-icon label-width="120px" @submit.native.prevent>
                    <single-image-uploader
                        :uri="imageUrl"
                        :uploadSuccessHandler="uploadDailyRecommendImageSuccessHandler"
                        :allowResolutions="[{width: 1146, height: 480}]"
                    ></single-image-uploader>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelHandler">取 消</el-button>
                <el-button v-show="active > 0" class="btn-style-three prev-btn" @click="prevBtnClickHandler">上一步</el-button>
                <el-button v-show="active < 1" class="btn-style-three next-btn" @click="nextBtnClickHandler">下一步</el-button>
                <el-button v-show="active === 1" class="btn-style-two" @click="successHandler">确 定</el-button>
            </div>
        </el-dialog>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" daily="primary" @click="saveDailyRecommendHandler">保存</el-button>
            <el-button class="btn-style-three" @click="gotoSettingPage" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import _ from 'lodash';
import draggable from 'vuedraggable';
import SingleImageUploader from '@/components/SingleImageUploader';
export default {
    name: 'DailyRecommendEdit',
    components: {draggable, SingleImageUploader},
    data() {
        return {
            dailyRecommendDialogVisible: false,
            scale: {},
            imageUrl: '',
            currentIndex: '',
            valueRules: {},
            //  多步操作
            active: 0
        };
    },
    async created() {
        try {
            await this.getRecommendList();
        } catch (err) {
            console.log(err);
        }
    },
    computed: {
        ...mapGetters({
            dailyRecommendList: 'setting/dailyRecommendList',
            list: 'scale/list',
            searchField: 'scale/searchField'
        }),
        dailyRecommends: {
            get() {
                return this.dailyRecommendList;
            },
            set(list) {
                this.setDailyRecommendList({list})
            }
        },
        getDisplayTestCount() {
            return (dailyRecommend) => {
                return _.get(dailyRecommend, 'questionSheet.displayTestCount');
            }
        },
        isSelected() {
            return (id) => {
                let index = this.dailyRecommendList.findIndex((item) => _.get(item, 'questionSheet.id') === id);
                return index >= 0;
            };
        },
        getImageUrl() {
            return (url) => {
                return `${process.env.VUE_APP_IMAGE_ROOT}${url}`;
            };
        }
    },
    methods: {
        ...mapMutations({
            addDailyRecommend: 'setting/addDailyRecommend',
            setDailyRecommendList: 'setting/setDailyRecommendList',
            editDailyRecommendByIndex: 'setting/editDailyRecommendByIndex',
            deleteDailyRecommendByIndex: 'setting/deleteDailyRecommendByIndex',
            updateSearchField: 'scale/updateSearchField',
            updatePagination: 'scale/updatePagination',
            resetPagination: 'scale/resetPagination',
            resetSearchField: 'scale/resetSearchField',
            setRecommendByIndex: 'setting/setRecommendByIndex'
        }),
        ...mapActions({
            getScaleList: 'scale/getScaleList',
            getRecommendList: 'setting/getRecommendList',
            postRecommendList: 'setting/postRecommendList'
        }),
        handlePaginationChange(value, key) {
            this.updatePagination({key, value})
            this.getScaleList();
        },
        addDailyRecommendHandler() {
            this.addDailyRecommend();
        },
        deleteDailyRecommendHandler(index) {
            this.deleteDailyRecommendByIndex({index});
        },
        editDailyRecommendHandler(index) {
            this.editDailyRecommendByIndex({index});
        },
        //  弹框相关操作
        showEditDailyRecommendDialog(index) {
            this.dailyRecommendDialogVisible = true;
            this.currentIndex = index;
        },
        async openDialogHandler() {
            try {
                this.resetPagination();
                this.resetSearchField();
                await this.getScaleList();
            } catch (err) {
                console.log(err);
            }
        },
        beforeCloseHandler() {
            this.closeRecommendDialog();
        },
        closeRecommendDialog() {
            this.dailyRecommendDialogVisible = false;
            this.imageUrl = '';
            this.scale = {};
            this.currentIndex = '';
            this.active = 0;
        },
        searchHandler() {},
        inputHandler(value, key) {
            this.updateSearchField({key, value});
        },
        cancelHandler() {
            this.closeRecommendDialog();
        },
        prevBtnClickHandler() {
            if (this.active > 0) {
                this.active--;
            }
        },
        nextBtnClickHandler() {
            if (this.active === 0) {
                if (this.scale.id) {
                    this.active++;
                    this.imageUrl = _.get(this.dailyRecommendList, `${this.currentIndex}.imageUrl`);
                } else {
                    this.$message.error('请选择量表');
                    return false;
                }
            }
        },
        selectScale(scale) {
            this.scale = scale;
        },
        successHandler() {
            if (this.imageUrl) {
                let recommend = Object.assign({}, { questionSheet: this.scale, imageUrl: this.imageUrl });
                this.setRecommendByIndex({index: this.currentIndex, recommend});
                this.closeRecommendDialog();
            } else {
                this.$message.error('请选择推荐位图片');
            }
        },
        //  弹框相关操作结束
        selectCategoryHandler() {
        },
        uploadDailyRecommendImageSuccessHandler(url) {
            this.imageUrl = url;
        },
        async saveDailyRecommendHandler() {
            try {
                let res = await this.postRecommendList();
                if (res && res.errorCode === 0) {
                    this.gotoSettingPage();
                }
            } catch (err) {
                console.log(err);
            }
        },
        gotoSettingPage() {
            this.$router.push({ name: 'Setting' });
        }
    }
}
</script>
<style lang="scss" scoped>
.daily-recommend {
    padding: 20px 0;
}
.daily-list {
    width: 100%;
    margin-top: 20px;
    .daily-item {
        position: relative;
        float: left;
        width: 18%;
        // margin-bottom: 10px;
        cursor: pointer;
        margin-right: 2%;
        padding-bottom: 30px;
        &:nth-of-type(5n + 5) {
            margin-right: 0;
        }
        .daily-image {
            display: block;
            width: 100%;
            height: 100px;
            margin-bottom: 10px;
            background-color: #fff;
        }
        .delete-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
        }
        .daily-count {
            position: absolute;
            bottom: 40px;
            left: 10px;
            color: #fff;
        }
        .daily-name {
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            color: #fff;
            // color: #fff;
            font-size: 14px;
            line-height: 14px;
        }
    }
}
</style>
