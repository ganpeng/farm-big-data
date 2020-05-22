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
                <el-col :span="10">
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
                        <bg-image :uri="image1"></bg-image>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
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
                        <bg-image :uri="image2"></bg-image>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="封面图">
                        <bg-image :uri="image3"></bg-image>
                        <!--
                        <div class="carousel-wrapper">
                            <el-carousel arrow="never" indicator-position="none" :interval="5000">
                                <el-carousel-item>
                                    <li class="carousel-item">
                                        <img
                                            width="100"
                                            height="100"
                                            src="../../assets/img/详情页轮播图1-绿源东北大米新米稻花香米5kg.png"
                                            alt="">
                                    </li>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <li class="carousel-item">
                                        <img
                                            width="100"
                                            height="100"
                                            src="../../assets/img/详情页轮播图2-绿源东北大米新米稻花香米5kg.png"
                                            alt="">
                                    </li>
                                </el-carousel-item>
                                <el-carousel-item>
                                    <li class="carousel-item">
                                        <img
                                            width="100"
                                            height="100"
                                            src="../../assets/img/详情页轮播图3-绿源东北大米新米稻花香米5kg.png"
                                            alt="">
                                    </li>
                                </el-carousel-item>
                            </el-carousel>
                            <bg-image></bg-image>
                        </div>
                        -->
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="seperator-line"></div>
            <el-row>
                <h4 class="content-sub-title">溯源信息</h4>
                    <el-row>
                        <div class="step-icon">
                            01
                        </div>
                        <el-col :span="10">
                            <el-form-item label="步骤名称">
                                <el-input v-model="step.oneName">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="图片">
                                <bg-image myStyle="style2" :uri="image4"></bg-image>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="时间">
                                <el-input v-model="step.oneTime">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="视频">
                                <div class="video-wrapper">
                                    <video autoplay loop controls width="170px" height="100px" src="http://dev.n.tianchimedia.com/video/time-lapse.mp4"></video>
                                    <div class="add-btn">
                                        <i class="el-icon-plus"></i>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <div class="step-icon">
                            02
                        </div>
                        <el-col :span="10">
                            <el-form-item label="步骤名称">
                                <el-input v-model="step.twoName">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="图片">
                                <bg-image myStyle="style2" :uri="image5"></bg-image>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="时间">
                                <el-input v-model="step.twoTime">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="视频">
                                <div class="video-wrapper">
                                    <div style="margin-left: 0;" class="add-btn">
                                        <i class="el-icon-plus"></i>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-button class="btn-style-two">
                            添加步骤
                        </el-button>
                    </el-row>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import BgImage from '@/components/BgImage';
export default {
    name: 'TracingForm',
    components: {BgImage},
    data() {
        return {
            tracingAuthOptions: this.$util.tracingAuthOptions,
            tracingTypeOptions: this.$util.tracingTypeOptions,
            step: {
                oneName: '育苗',
                oneTime: '2020-3-01',
                twoName: '插秧',
                twoTime: '2020-05-04'
            },
            // 封面图
            image1: require('../../assets/img/封面图-绿源东北大米新米稻花香米5kg.png'),
            // 商品详情图
            image2: require('../../assets/img/绿源东北大米新米稻花香米.jpg'),
            // 溯源步骤
            image3: this.$util.sourceObj.image3,
            image4: this.$util.sourceObj.image4,
            image5: this.$util.sourceObj.image5
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
    .btn-style-two {
        height: 32px;
        line-height: 32px;
        color: #fff;
        font-size: 16px;
        margin-left: 30px;
    }
}
</style>
