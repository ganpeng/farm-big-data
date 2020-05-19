<template>
    <el-dialog
        title="宅基地信息"
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
                :model="hland"
                class="my-form"
                label-width="180px"
                @submit.native.prevent>
                <el-row>
                    <h4 class="content-sub-title">宅基地信息</h4>
                    <el-col :span="12">
                        <el-form-item label="地块编码">
                            <el-input
                                :value="hland.code"
                                @input="inputHandler($event, 'code')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="合同面积">
                            <el-input
                                :value="hland.areaOne"
                                @input="inputHandler($event, 'areaOne')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="确权面积">
                            <el-input
                                :value="hland.areaTwo"
                                @input="inputHandler($event, 'areaTwo')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="房产证">
                            <el-radio v-model="hland.isPoc" :label="true">有</el-radio>
                            <el-radio v-model="hland.isPoc" :label="false">无</el-radio>
                        </el-form-item>
                        <el-form-item label="是否闲置">
                            <el-radio v-model="hland.isIdle" :label="true">是</el-radio>
                            <el-radio v-model="hland.isIdle" :label="false">否</el-radio>
                        </el-form-item>
                        <el-form-item label="是否有房屋">
                            <el-radio v-model="hland.isHouse" :label="true">是</el-radio>
                            <el-radio v-model="hland.isHouse" :label="false">否</el-radio>
                        </el-form-item>
                        <el-form-item label="流转期限">
                            <el-input
                                :value="hland.roamStartedAt"
                                @input="inputHandler($event, 'roamStartedAt')">
                            </el-input>
                            至
                            <el-input
                                :value="hland.roamEndedAt"
                                @input="inputHandler($event, 'roamEndedAt')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="地块用途">
                            <el-select
                                :value="hland.purpose"
                                clearable
                                placeholder="请选择"
                                @input="inputHandler($event, 'purpose')"
                            >
                                <el-option
                                    v-for="item in purposeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="实测面积(公顷)">
                            <el-input
                                :value="hland.areaThree"
                                @input="inputHandler($event, 'areaThree')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="GIS图片">
                            <img class="gis-img" src="../../../../assets/img/gis.png" alt="">
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">土地流转方</h4>
                    <el-col :span="12">
                        <el-form-item label="姓名">
                            <el-input
                                :value="hland.roam.name"
                                @input="inputHandler($event, 'roam.name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <el-input
                                :value="hland.roam.phone"
                                @input="inputHandler($event, 'roam.phone')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input
                                :value="hland.roam.address.city"
                                @input="inputHandler($event, 'roam.address.city')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="证件号">
                            <el-input
                                :value="hland.roam.cId"
                                @input="inputHandler($event, 'roam.cId')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="流转方式">
                            <el-select
                                :value="hland.roam.type"
                                clearable
                                placeholder="请选择"
                                @input="inputHandler($event, 'roam.type')"
                            >
                                <el-option
                                    v-for="item in roamTypeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">合同</h4>
                    <div class="contract-list">
                        <img src="../../../../assets/img/承包合同.jpg" alt="">
                    </div>
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
    name: 'HlandDialog',
    data() {
        return {
            visible: false,
            purposeOptions: this.$util.purposeOptions,
            roamTypeOptions: this.$util.roamTypeOptions,
            hland: {
                id: 0,
                code: '', // 编号
                cCode: '', // 合同编号
                purpose: '', // 用途
                areaOne: '', // 合同面积
                areaTwo: '', // 确权面积
                areaThree: '', // 实测面积
                isPoc: true, // 房产证
                isIdle: true, // 闲置
                isHouse: false, // 房屋
                roamStartedAt: '2018-02-03', // 流转开始时间
                roamEndedAt: '2018-02-03', // 流转结束时间
                roam: {
                    name: '',
                    cId: '',
                    phone: '',
                    type: '',
                    address: {
                        province: '吉林省',
                        city: '吉林市',
                        area: '磐石市',
                        detail: '取柴河镇/大桥村'
                    } // 地址
                },
                status: 1 // 状态
            }
        };
    },
    methods: {
        show(hland) {
            this.visible = true;
            if (hland) {
                this.hland = hland;
            }
        },
        hide() {
            this.visible = false;
        },
        inputHandler(value, key) {
            _.set(this.hland, key, value);
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
            this.hland = {
                id: 0,
                code: '', // 编号
                cCode: '', // 合同编号
                purpose: '', // 用途
                areaOne: '', // 合同面积
                areaTwo: '', // 确权面积
                areaThree: '', // 实测面积
                isPoc: true, // 房产证
                isIdle: true, // 闲置
                isHouse: false, // 房屋
                roamStartedAt: '2018-02-03', // 流转开始时间
                roamEndedAt: '2018-02-03', // 流转结束时间
                roam: {
                    name: '',
                    cId: '',
                    phone: '',
                    type: '',
                    address: {
                        province: '吉林省',
                        city: '吉林市',
                        area: '磐石市',
                        detail: '取柴河镇/大桥村'
                    } // 地址
                },
                status: 1 // 状态
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
