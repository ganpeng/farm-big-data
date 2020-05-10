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
                <el-col :span="8">
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
                        <img width="100" height="100" src="" alt="">
                    </el-form-item>
                </el-col>
                <el-col :span="8">
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
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'TracingForm',
    data() {
        return {
            tracingAuthOptions: this.$util.tracingAuthOptions,
            tracingTypeOptions: this.$util.tracingTypeOptions
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
.tracing-form-container {}
</style>
