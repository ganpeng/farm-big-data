<template>
    <el-dialog
        title="耕地信息"
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
                :model="cland"
                class="my-form"
                label-width="180px"
                @submit.native.prevent>
                <el-row>
                    <h4 class="content-sub-title">耕地信息</h4>
                    <el-col :span="12">
                        <el-form-item label="地块编码">
                            <el-input
                                :value="cland.code"
                                @input="inputHandler($event, 'code')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="合同面积">
                            <el-input
                                :value="cland.areaOne"
                                @input="inputHandler($event, 'areaOne')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="确权面积">
                            <el-input
                                :value="cland.areaTwo"
                                @input="inputHandler($event, 'areaTwo')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="东至">
                            <el-input
                                :value="cland.east"
                                @input="inputHandler($event, 'east')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="西至">
                            <el-input
                                :value="cland.west"
                                @input="inputHandler($event, 'west')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="北至">
                            <el-input
                                :value="cland.north"
                                @input="inputHandler($event, 'north')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="南至">
                            <el-input
                                :value="cland.south"
                                @input="inputHandler($event, 'south')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="流转期限">
                            <el-input
                                :value="cland.roamStartedAt"
                                @input="inputHandler($event, 'roamStartedAt')">
                            </el-input>
                            至
                            <el-input
                                :value="cland.roamEndedAt"
                                @input="inputHandler($event, 'roamEndedAt')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="地块名称">
                            <el-input
                                :value="cland.name"
                                @input="inputHandler($event, 'name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="实测面积(公顷)">
                            <el-input
                                :value="cland.areaThree"
                                @input="inputHandler($event, 'areaThree')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="水利条件" prop="wcc">
                            <el-select
                                :value="cland.wcc"
                                clearable
                                placeholder="请选择"
                                @input="inputHandler($event, 'wcc')"
                            >
                                <el-option
                                    v-for="item in wccOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
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
                                :value="cland.roam.name"
                                @input="inputHandler($event, 'roam.name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <el-input
                                :value="cland.roam.phone"
                                @input="inputHandler($event, 'roam.phone')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input
                                :value="cland.roam.address.city"
                                @input="inputHandler($event, 'roam.address.city')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="证件号">
                            <el-input
                                :value="cland.roam.cId"
                                @input="inputHandler($event, 'roam.cId')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="流转方式">
                            <el-select
                                :value="cland.roam.type"
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
    name: 'clandDialog',
    data() {
        return {
            visible: false,
            wccOptions: this.$util.wccOptions,
            roamTypeOptions: this.$util.roamTypeOptions,
            cland: {
                id: 0,
                name: '', // 地块名称
                wcc: '',// 水利条件
                code: '', // 编号
                cCode: '', // 合同编号
                purpose: '', // 用途
                areaOne: '', // 合同面积
                areaTwo: '', // 确权面积
                areaThree: '', // 实测面积
                isPoc: true, // 房产证
                isIdle: true, // 闲置
                isHouse: false, // 房屋
                roamStartedAt: '', // 流转开始时间
                roamEndedAt: '', // 流转结束时间
                roam: {
                    name: '',
                    cId: '',
                    phone: '',
                    type: '',
                    address: {
                        province: '',
                        city: '',
                        area: '',
                        detail: ''
                    } // 地址
                },
                east: '', // 东
                west: '', // 西
                south: '', // 南
                north: '', // 北
                status: 1 // 状态
            }
        };
    },
    methods: {
        show(cland) {
            this.visible = true;
            if (cland) {
                this.cland = cland;
            }
        },
        hide() {
            this.visible = false;
        },
        inputHandler(value, key) {
            _.set(this.cland, key, value);
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
            this.cland = {
                id: 0,
                name: '', // 地块名称
                wcc: '',// 水利条件
                code: '', // 编号
                cCode: '', // 合同编号
                purpose: '', // 用途
                areaOne: '', // 合同面积
                areaTwo: '', // 确权面积
                areaThree: '', // 实测面积
                isPoc: true, // 房产证
                isIdle: true, // 闲置
                isHouse: false, // 房屋
                roamStartedAt: '', // 流转开始时间
                roamEndedAt: '', // 流转结束时间
                roam: {
                    name: '',
                    cId: '',
                    phone: '',
                    type: '',
                    address: {
                        province: '',
                        city: '',
                        area: '',
                        detail: ''
                    } // 地址
                },
                east: '', // 东
                west: '', // 西
                south: '', // 南
                north: '', // 北
                status: 1 // 状态
            };
        },
        enterHandler() {
            this.cancelHandler();
        }
    }
};
</script>
