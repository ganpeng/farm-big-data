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
                    <el-col :span="8">
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
                            <img width="100" height="100" src="" alt="">
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
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
                            <img width="100" height="100" src="" alt="">
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="封面图">
                            <ul class="carousel-list">
                                <li class="carousel-item">
                                    <img width="100" height="100" src="" alt="">
                                </li>
                                <li class="carousel-item">
                                    <img width="100" height="100" src="" alt="">
                                </li>
                                <li class="carousel-item">
                                    <img width="100" height="100" src="" alt="">
                                </li>
                                <li class="carousel-item">
                                    <img width="100" height="100" src="" alt="">
                                </li>
                            </ul>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">溯源信息</h4>
                    <el-timeline>
                        <el-timeline-item timestamp="2020/4/12" placement="top">
                            <el-col :span="8">
                            </el-col>
                            <el-col :span="8">
                            </el-col>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2020/4/3" placement="top">
                            <el-col :span="8">
                            </el-col>
                            <el-col :span="8">
                            </el-col>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2020/4/2" placement="top">
                            <el-col :span="8">
                            </el-col>
                            <el-col :span="8">
                            </el-col>
                        </el-timeline-item>
                    </el-timeline>
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
export default {
    name: 'TracingProductDialog',
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
            }
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
            };
        },
        enterHandler() {
            this.cancelHandler();
        }
    }
};
</script>
<style lang="scss" scoped>
.invoice-list {
    display: flex;
    .invoice-item {
        width: 140px;
        height: 220px;
        background-color: red;
        border-radius: 4px;
        img {
        }
    }
}
</style>
