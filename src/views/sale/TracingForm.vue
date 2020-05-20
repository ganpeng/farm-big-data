<template>
    <div class="tracing-form-container">
        <el-form
            :model="tracing"
            status-icon
            ref="peeForm"
            label-width="100px"
            @submit.native.prevent
            class="my-form">
            <el-row>
                <h4 class="content-sub-title">基本信息</h4>
                <el-col span="10">
                    <el-form-item label="商品名称" prop="name">
                        <el-input
                            maxlength="20"
                            :value="tracing.name"
                            @input="inputHandler($event, 'name')"
                            placeholder="请输入商品名称"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="品种" prop="variety">
                        <el-input
                            maxlength="20"
                            :value="tracing.variety"
                            @input="inputHandler($event, 'variety')"
                            placeholder="请输入商品品种"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="规格" prop="specs">
                        <el-input
                            maxlength="20"
                            :value="tracing.specs"
                            @input="inputHandler($event, 'specs')"
                            placeholder="请输入商品规格"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="封面图" prop="createdAt">
                        <img width="200" height="200" src="../../assets/img/封面图-绿源东北大米新米稻花香米5kg.png" alt="">
                        <i class="my-plus el-icon-plus"></i>
                    </el-form-item>
                </el-col>
                <el-col span="10">
                    <el-form-item label="上架品类" prop="type">
                        <el-select
                            :value="tracing.type"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'type')"
                        >
                            <el-option
                                v-for="item in tracingTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="认证" prop="auth">
                        <el-select
                            :value="tracing.auth"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'auth')"
                        >
                            <el-option
                                v-for="item in tracingAuthOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="价格" prop="price">
                        <el-input
                            :value="tracing.price"
                            @input="inputHandler($event, 'price')"
                            placeholder="请输入商品价格"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="商品详情图">
                        <div class="tf-img">
                        </div>
                        <i class="my-plus el-icon-plus"></i>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="封面图">
                        <div style="width: 200px;height:200px;" class="carousel-wrapper">
                            <el-carousel arrow="never" indicator-position="none" :interval="5000">
                                <el-carousel-item>
                                    <li class="carousel-item">
                                        <img
                                            width="200"
                                            height="200"
                                            src="../../assets/img/详情页轮播图1-绿源东北大米新米稻花香米5kg.png"
                                            alt="">
                                    </li>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <li class="carousel-item">
                                        <img
                                            width="200"
                                            height="200"
                                            src="../../assets/img/详情页轮播图2-绿源东北大米新米稻花香米5kg.png"
                                            alt="">
                                    </li>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <li class="carousel-item">
                                        <img
                                            width="200"
                                            height="200"
                                            src="../../assets/img/详情页轮播图3-绿源东北大米新米稻花香米5kg.png"
                                            alt="">
                                    </li>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <i class="my-plus el-icon-plus"></i>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="seperator-line"></div>
            <el-row>
                <h4 class="content-sub-title">溯源信息</h4>
                    <el-row>
                        <h5 class="tr-title">01</h5>
                        <el-col :span="10">
                            <el-form-item label="步骤名称">
                                <el-input v-model="step.oneName">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="图片">
                                <img width="300px" height="200px" src="../../assets/img/02的副本.jpg" alt="">
                                <i class="my-plus el-icon-plus"></i>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="时间">
                                <el-input v-model="step.oneTime">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="视频">
                                <video autoplay loop controls width="300px" height="200px" src="../../assets/img/Cam01的副本.mp4"></video>
                                <i class="my-plus el-icon-plus"></i>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <h5 class="tr-title">02</h5>
                        <el-col :span="10">
                            <el-form-item label="步骤名称">
                                <el-input v-model="step.twoName">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="图片">
                                <img width="300px" height="200px" src="../../assets/img/02的副本.jpg" alt="">
                                <i class="my-plus el-icon-plus"></i>
                            </el-form-item>
                            <el-form-item label=" ">
                                <span class="add-step-btn">添加步骤</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="时间">
                                <el-input v-model="step.twoTime">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="视频">
                                <video loop autoplay controls width="300px" height="200px" src="../../assets/img/Cam01的副本.mp4"></video>
                                <i class="my-plus el-icon-plus"></i>
                            </el-form-item>
                        </el-col>
                    </el-row>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'TracingForm',
    data() {
        return {
            tracingAuthOptions: this.$util.tracingAuthOptions,
            tracingTypeOptions: this.$util.tracingTypeOptions,
            step: {
                oneName: '',
                oneTime: '',
                twoName: '',
                twoTime: ''
            }
        };
    },
    computed: {
        ...mapGetters({
            tracing: 'tracing/currentTracing'
        })
    },
    methods: {
        ...mapMutations({
            updateCurrentTracing: 'tracing/updateCurrentTracing'
        }),
        inputHandler(value, key) {
            this.updateCurrentTracing({key, value});
        }
    }
};
</script>
<style lang="scss" scoped>
.tracing-form-container {
    padding-bottom: 100px;
    .carousel-list {
        display: flex;
        .carousel-item {
            margin-right: 20px;
        }
    }
    .tr-title  {
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        background-color: $mainColor;
    }
    .tf-img {
        display: inline-block;
        width: 200px;
        height: 200px;
        background-color: rgba(0, 0, 0, 0.5);
        background-image: url('../../assets/img/绿源东北大米新米稻花香米.jpg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
    }
}
</style>
