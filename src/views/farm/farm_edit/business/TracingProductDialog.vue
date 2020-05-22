<template>
    <el-dialog
        title="农品信息"
        class="my-dialog"
        width="60%"
        :visible.sync="visible"
        :show-close="true"
        @open="openDialogHandler"
        :before-close="beforeCloseHandler"
        :close-on-click-modal="false"
        :close-on-press-escape="false">
        <div class="dialog-body">
            <el-form
                :model="tracingProduct"
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
                                :value="tracingProduct.name"
                                @input="inputHandler($event, 'name')"
                                placeholder="请输入商品名称"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="品种" prop="variety">
                            <el-input
                                maxlength="20"
                                :value="tracingProduct.variety"
                                @input="inputHandler($event, 'variety')"
                                placeholder="请输入商品品种"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="规格" prop="specs">
                            <el-input
                                maxlength="20"
                                :value="tracingProduct.specs"
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
                                :value="tracingProduct.type"
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
                                :value="tracingProduct.auth"
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
                                :value="tracingProduct.price"
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
                            <div class="carousel-wrapper">
                                <el-carousel arrow="never" indicator-position="none" :interval="5000">
                                    <el-carousel-item>
                                        <li class="carousel-item">
                                            <img
                                                width="100"
                                                height="100"
                                                src="../../../../assets/img/详情页轮播图1-绿源东北大米新米稻花香米5kg.png"
                                                alt="">
                                        </li>
                                    </el-carousel-item>
                                    <el-carousel-item>
                                        <li class="carousel-item">
                                            <img
                                                width="100"
                                                height="100"
                                                src="../../../../assets/img/详情页轮播图2-绿源东北大米新米稻花香米5kg.png"
                                                alt="">
                                        </li>
                                    </el-carousel-item>
                                    <el-carousel-item>
                                        <li class="carousel-item">
                                            <img
                                                width="100"
                                                height="100"
                                                src="../../../../assets/img/详情页轮播图3-绿源东北大米新米稻花香米5kg.png"
                                                alt="">
                                        </li>
                                    </el-carousel-item>
                                </el-carousel>
                                <bg-image></bg-image>
                            </div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">溯源信息</h4>
                    <el-row>
                        <div class="step-icon">01</div>
                        <el-col :span="10">
                            <el-form-item label="步骤名称">
                                <el-input v-model="tracingProduct.step.oneName">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="图片">
                                <bg-image myStyle="style2" :uri="image3"></bg-image>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="时间">
                                <el-input v-model="tracingProduct.step.oneTime">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="视频">
                                <video autoplay loop controls width="170px" height="100px" src="http://dev.n.tianchimedia.com/video/time-lapse.mp4"></video>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <div class="step-icon">02</div>
                        <el-col :span="10">
                            <el-form-item label="步骤名称">
                                <el-input v-model="tracingProduct.step.twoName">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="图片">
                                <bg-image myStyle="style2" :uri="image3"></bg-image>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="时间">
                                <el-input v-model="tracingProduct.step.twoTime">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="视频">
                                <video autoplay loop controls width="170px" height="100px" src="http://dev.n.tianchimedia.com/video/time-lapse.mp4"></video>
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
        <div slot="footer" class="dialog-footer">
            <el-button size="medium" @click="cancelHandler">取 消</el-button>
            <el-button type="primary" @click="enterHandler">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
import _ from 'lodash';
import BgImage from '@/components/BgImage';
export default {
    name: 'TracingProductDialog',
    components: {BgImage},
    data() {
        return {
            visible: false,
            tracingAuthOptions: this.$util.tracingAuthOptions,
            tracingTypeOptions: this.$util.tracingTypeOptions,
            tracingProduct: {
                id: 0,
                pId: '', // 商品id
                name: '', // 商品名称
                type: '', // 种类
                variety: '', // 品种
                specs: '', // 规格
                auth: '', // 认证
                farm: '',
                price: 0, // 价格
                salesVolume: 0,
                visible: false,
                status: 1,
                createdAt: '', // 上线日期
                step: {
                    oneName: '',
                    oneTime: '',
                    twoName: '',
                    twoTime: ''
                }
            },
            // 封面图
            image1: require('../../../../assets/img/封面图-绿源东北大米新米稻花香米5kg.png'),
            // 商品详情图
            image2: require('../../../../assets/img/绿源东北大米新米稻花香米.jpg'),
            // 溯源步骤
            image3: require('../../../../assets/img/02的副本.jpg')
        };
    },
    methods: {
        show(tracingProduct) {
            this.visible = true;
            if (tracingProduct) {
                this.tracingProduct = tracingProduct;
            }
        },
        hide() {
            this.visible = false;
        },
        inputHandler(value, key) {
            _.set(this.tracingProduct, key, value);
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
            this.tracingProduct = {
                id: 0,
                pId: '', // 商品id
                name: '', // 商品名称
                type: '', // 种类
                variety: '', // 品种
                specs: '', // 规格
                auth: '', // 认证
                farm: '',
                price: 0, // 价格
                salesVolume: 0,
                visible: false,
                status: 1,
                createdAt: '', // 上线日期
                step: {
                    oneName: '',
                    oneTime: '',
                    twoName: '',
                    twoTime: ''
                }
            };
        },
        enterHandler() {
            this.cancelHandler();
        }
    }
};
</script>
<style lang="scss" scoped>
.btn-style-two {
    height: 32px;
    line-height: 32px;
    color: #fff;
    font-size: 16px;
    margin-left: 30px;
}
</style>
