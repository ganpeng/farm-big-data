<template>
    <div class="type-recommend-edit-container">
        <h2 class="content-title">编辑推荐类别</h2>
        <div class="seperator-line"></div>
        <div class="type-recommend clearfix">
            <el-col :span="10">
                <div class="clearfix">
                    <el-button v-if="typeRecommendList.length === 4" @click="addTypeRecommendHandler" class="btn-style-five float-right">
                        <svg-icon icon-class="add"/>
                    </el-button>
                </div>
                <ul class="type-list">
                    <li @click="showEditTypeRecommendDialog(index)" v-for="(typeRecommend, index) in typeRecommendList" :key="index" class="type-item">
                        <img class="type-image" src="" alt="">
                        <span class="type-name">{{typeRecommend.name}}</span>
                    </li>
                </ul>
            </el-col>
        </div>
        <el-dialog
            title="类别"
            class="my-dialog"
            :visible.sync="typeRecommendDialogVisible"
            :show-close="true"
            @open="openDialogHandler"
            :before-close="beforeCloseHandler"
            :close-on-click-modal="false"
            :close-on-press-escape="false">
            <el-form class="my-form" label-width="100px" @submit.native.prevent>
                <el-form-item label="类别" required>
                    <div class="my-tags">
                        <el-tag v-if="typeRecommend.name" :disable-transitions="false">
                            {{typeRecommend.name}}
                        </el-tag>
                    </div>
                    <category-search
                        :handleSelect="selectCategoryHandler"
                    ></category-search>
                </el-form-item>
                <el-form-item label="图片" required>
                    <single-image-uploader
                        :uri="typeRecommend.imgUri"
                        :uploadSuccessHandler="uploadTypeRecommendImageSuccessHandler"
                        :allowResolutions="allowResolutions"
                    ></single-image-uploader>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelHandler">取 消</el-button>
                <el-button type="primary" @click="successHandler">确 定</el-button>
            </div>
        </el-dialog>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="saveTypeRecommendHandler">创建</el-button>
            <el-button class="btn-style-three" @click="gotoSettingPage" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import CategorySearch from '@/components/CategorySearch';
import SingleImageUploader from '@/components/SingleImageUploader';
export default {
    name: 'TypeRecommendEdit',
    components: {CategorySearch, SingleImageUploader},
    data() {
        return {
            typeRecommendDialogVisible: false,
            typeRecommend: {
                id: '',
                name: '',
                imgUri: ''
            },
            allowResolutions: [{width: 100, height: 100}],
            valueRules: {}
        };
    },
    computed: {
        ...mapGetters({
            typeRecommendList: 'setting/typeRecommendList'
        })
    },
    methods: {
        ...mapMutations({
            addTypeRecommend: 'setting/addTypeRecommend',
            editTypeRecommendByIndex: 'setting/editTypeRecommendByIndex'
        }),
        addTypeRecommendHandler() {
            this.addTypeRecommend();
        },
        editTypeRecommendHandler(index) {
            this.editTypeRecommendByIndex({index});
        },
        //  弹框相关操作
        showEditTypeRecommendDialog() {
            this.typeRecommendDialogVisible = true;
        },
        openDialogHandler() {
        },
        beforeCloseHandler() {
        },
        closeQuestionDialog() {
            this.typeRecommendDialogVisible = false;
        },
        cancelHandler() {
            this.closeQuestionDialog();
        },
        successHandler() {
            console.log(this.question);
            // this.closeQuestionDialog();
        },
        //  弹框相关操作结束
        selectCategoryHandler() {

        },
        uploadTypeRecommendImageSuccessHandler() {
        },
        saveTypeRecommendHandler() {
            this.gotoSettingPage();
        },
        gotoSettingPage() {
            this.$router.push({ name: 'Setting' });
        }
    }
}
</script>
<style lang="scss" scoped>
.type-recommend {
    padding: 20px 0;
}
.type-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    .type-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        margin-bottom: 10px;
        cursor: pointer;
        .type-image {
            display: block;
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
            border-radius: 50%;
            background-color: #fff;
        }
    }
}
</style>
