<template>
    <div class="scale-form-container">
        <el-row>
            <el-col :span="24">
                <el-form :rules="valueRules" ref="scaleForm" status-icon :model="scale" label-width="120px" class="my-form" @submit.native.prevent>
                    <el-col :span="12" style="border-right: 1px solid #252D3F;">
                        <h2 class="content-sub-title">量表基本信息</h2>
                        <el-col :span="18">
                            <el-form-item label="量表名称" prop="name">
                                <el-input
                                    @input="inputHandler($event, 'name')"
                                    :value="scale.name">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="量表别名" prop="alias">
                                <el-input
                                    @input="inputHandler($event, 'alias')"
                                    :value="scale.alias">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="量表简述" prop="brief">
                                <el-input
                                    maxlength="35"
                                    @input="inputHandler($event, 'brief')"
                                    :value="scale.brief">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="量表简介" prop="description">
                                <div class="desc-wrapper">
                                    <el-input
                                        type="textarea"
                                        @input="inputHandler($event, 'description')"
                                        :maxlength="200"
                                        placeholder="请输入内容"
                                        :value="scale.description">
                                    </el-input>
                                    <span class="desc-prompt">已输入{{scale.description.length}}/200字</span>
                                </div>
                            </el-form-item>
                            <el-form-item label="指导语" prop="guideline">
                                <div class="desc-wrapper">
                                    <el-input
                                        type="textarea"
                                        @input="inputHandler($event, 'guideline')"
                                        :maxlength="200"
                                        placeholder="请输入内容"
                                        :value="scale.guideline">
                                    </el-input>
                                    <span class="desc-prompt">已输入{{scale.guideline.length}}/200字</span>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="12">
                        <h2 class="content-sub-title">&nbsp;</h2>
                        <el-form-item label="量表分类">
                            <div class="my-tags">
                                <el-tag
                                    :key="index"
                                    v-for="(category, index) in scale.categorySet"
                                    closable
                                    :disable-transitions="false"
                                    @close="deleteCategoryHandler(category.id)">
                                    {{category.name}}
                                </el-tag>
                            </div>
                            <category-search
                                :handleSelect="selectCategoryHandler"
                            ></category-search>
                        </el-form-item>
                        <el-form-item label="免答设置" prop="omittableCount">
                            <el-radio @input="toggleRadioHandler(true, 'omittableCountRadio')" :value="scale.omittableCountRadio" :label="true">是</el-radio>
                            <el-radio @input="toggleRadioHandler(false, 'omittableCountRadio')" :value="scale.omittableCountRadio" :label="false">否</el-radio>
                            <el-input
                                v-if="scale.omittableCountRadio"
                                @input="inputHandler($event, 'omittableCount')"
                                :value="scale.omittableCount">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="限时设置" prop="timeLimitInMinutes">
                            <el-radio @input="toggleRadioHandler(true, 'timeLimitInMinutesRadio')" :value="scale.timeLimitInMinutesRadio" :label="true">是</el-radio>
                            <el-radio @input="toggleRadioHandler(false, 'timeLimitInMinutesRadio')" :value="scale.timeLimitInMinutesRadio" :label="false">否</el-radio>
                            <el-input
                                v-if="scale.timeLimitInMinutesRadio"
                                @input="inputHandler($event, 'timeLimitInMinutes')"
                                :value="scale.timeLimitInMinutes">
                                <template slot="append">分</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="量表状态" prop="visible">
                            <el-radio @input="toggleRadioHandler(true, 'visible')" :value="scale.visible" :label="true">上架</el-radio>
                            <el-radio @input="toggleRadioHandler(false, 'visible')" :value="scale.visible" :label="false">下架</el-radio>
                        </el-form-item>
                        <el-form-item label="被测试次数" prop="displayTestCount">
                            <el-input
                                @input="inputHandler($event, 'displayTestCount')"
                                :value="scale.displayTestCount">
                            </el-input>
                        </el-form-item>
                        <div class="tv-images">
                            <el-form-item label="量表封面图">
                                <p class="little-tips">(1242*552)</p>
                            </el-form-item>
                            <div class="image-upload-container wrapper clearfix">
                                <single-image-uploader
                                    :uri="scale.coverImageUrl"
                                    :uploadSuccessHandler="uploadScaleImageSuccessHandler"
                                    :allowResolutions="[{width: 1242, height: 552}]"
                                ></single-image-uploader>
                            </div>
                        </div>
                    </el-col>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import CategorySearch from '@/components/CategorySearch';
import SingleImageUploader from '@/components/SingleImageUploader';
export default {
    name: 'ScaleForm',
    components: {
        CategorySearch,
        SingleImageUploader
    },
    data() {
        return {
            imageList: [],
            allowResolutions: [],
            valueRules: {}
        };
    },
    created() {
        this.getCategoryList();
    },
    computed: {
        ...mapGetters({
            scale: 'scale/currentScale'
        })
    },
    methods: {
        ...mapMutations({
            updateCurrentScale: 'scale/updateCurrentScale',
            addCategoryToSet: 'scale/addCategoryToSet',
            deleteCategoryFromSet: 'scale/deleteCategoryFromSet'
        }),
        ...mapActions({
            getCategoryList: 'common/getCategoryList'
        }),
        inputHandler(value, key) {
            this.updateCurrentScale({key, value});
        },
        selectCategoryHandler(category) {
            this.addCategoryToSet({category});
        },
        deleteCategoryHandler(id) {
            this.deleteCategoryFromSet({id});
        },
        toggleRadioHandler(value, key) {
            this.updateCurrentScale({key, value});
        },
        //  图片上传相关的方法
        uploadScaleImageSuccessHandler(uri) {
            this.updateCurrentScale({key: 'coverImageUrl', value: uri});
        }
        //  图片上传相关方法结束
    }
}
</script>
<style lang="scss" scoped>
.image-upload-container {
    margin-left: 42px;
}
</style>
