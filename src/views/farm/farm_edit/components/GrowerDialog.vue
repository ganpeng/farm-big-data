<template>
    <el-dialog
        title="处理详情"
        class="my-dialog"
        width="70%"
        :visible.sync="visible"
        :show-close="true"
        @open="openDialogHandler"
        :before-close="beforeCloseHandler"
        :close-on-click-modal="false"
        :close-on-press-escape="false">
        <div class="dialog-body">
            <el-form
                :model="grower"
                class="my-form"
                label-width="180px"
                @submit.native.prevent>
                <el-row>
                    <h4 class="content-sub-title">基础信息</h4>
                    <el-col :span="12">
                        <el-form-item label="姓名">
                            <el-input
                                :value="grower.name"
                                @input="inputHandler($event, 'name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="身份证号">
                            <el-input
                                :value="grower.cId"
                                @input="inputHandler($event, 'cId')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-radio v-model="grower.gender" label="男">男</el-radio>
                            <el-radio v-model="grower.gender" label="女">女</el-radio>
                        </el-form-item>
                        <el-form-item label="主要分工" prop="divide">
                            <el-select
                                :value="grower.divide"
                                clearable
                                placeholder="请选择"
                                @input="inputHandler($event, 'divide')"
                            >
                                <el-option
                                    v-for="item in divideOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="联系电话">
                            <el-input
                                :value="grower.phone"
                                @input="inputHandler($event, 'phone')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="住址">
                            <el-input
                                :value="grower.address.city"
                                @input="inputHandler($event, 'address.city')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="贫困户">
                            <el-radio v-model="grower.isPoor" :label="true">是</el-radio>
                            <el-radio v-model="grower.isPoor" :label="false">否</el-radio>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">参加培训</h4>
                    <el-col :span="12">
                        <el-form-item label="农业知识培训(小时)">
                            <el-input
                                :value="grower.trainHour"
                                @input="inputHandler($event, 'trainHour')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="经营知识培训(小时)">
                            <el-input
                                :value="grower.trainHour2"
                                @input="inputHandler($event, 'trainHour2')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="农业技能培训(小时)">
                            <el-input
                                :value="grower.trainHour3"
                                @input="inputHandler($event, 'trainHour3')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="其他培训(小时)">
                            <el-input
                                :value="grower.trainHour4" @input="inputHandler($event, 'trainHour4')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="出资总计">
                            培训总计： 68.5 小时
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">所获证书</h4>
                    <ul class="certi-list">
                        <li v-for="(certi, index) in grower.certiList"
                            :key="index"
                            class="certi-item">
                            <h6>证书{{index + 1}}</h6>
                            <el-col :span="12">
                                <el-form-item label="证书名称">
                                    <el-input
                                        v-model="certi.name">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="发证时间">
                                    <el-input
                                        v-model="certi.time">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="农业技能培训(小时)">
                                    <el-input
                                        v-model="certi.level">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="其他培训(小时)">
                                    <el-input
                                        v-model="certi.year">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="出资总计">
                                    培训总计： 68.5 小时
                                </el-form-item>
                            </el-col>
                        </li>
                    </ul>
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
    name: 'GrowerDialog',
    data() {
        return {
            visible: false,
            divideOptions: this.$util.divideOptions,
            grower: {
                id: 0,
                name: '',
                type: '',
                gender: '',
                address: { // 地址
                    province: '',
                    city: '',
                    area: '',
                    detail: ''
                },
                phone: '',
                cId: '',
                trainHour: '',
                certi: 0,
                contribution: 0,
                isPoor: false,
                divide: '',
                status: 2,
                trainHour2: '',
                trainHour3: '',
                trainHour4: '',
                certiList: [
                    {
                        name: '',
                        level: '',
                        time: '',
                        year: 0
                    },
                    {
                        name: '',
                        level: '',
                        time: '',
                        year: 0
                    }
                ]
            }
        };
    },
    methods: {
        show(grower) {
            this.visible = true;
            if (grower) {
                this.grower = grower;
            }
        },
        hide() {
            this.visible = false;
        },
        inputHandler(value, key) {
            _.set(this.grower, key, value);
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
            this.grower = {
                id: 0,
                name: '',
                type: '',
                gender: '',
                address: { // 地址
                    province: '',
                    city: '',
                    area: '',
                    detail: ''
                },
                phone: '',
                cId: '',
                trainHour: '',
                certi: 0,
                contribution: 0,
                status: 1,
                isMoney: false,
                money: '',
                isLand: false,
                land: '',
                isOther: false,
                other: '',
                totalMoney: '',
                otherDesc: '',
                trainHour2: '',
                trainHour3: '',
                trainHour4: '',
                certiList: [
                    {
                        name: '',
                        level: '',
                        time: '',
                        year: 0
                    },
                    {
                        name: '',
                        level: '',
                        time: '',
                        year: 0
                    }
                ]
            };
        },
        enterHandler() {
            this.cancelHandler();
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
