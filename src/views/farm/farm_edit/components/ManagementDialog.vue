<template>
    <el-dialog
        title="处理详情"
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
                :model="management"
                class="my-form"
                label-width="180px"
                @submit.native.prevent>
                <el-row>
                    <h4 class="content-sub-title">基础信息</h4>
                    <el-col :span="12">
                        <el-form-item label="姓名">
                            <el-input
                                :value="management.name"
                                @input="inputHandler($event, 'name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="身份证号">
                            <el-input
                                :value="management.cId"
                                @input="inputHandler($event, 'cId')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-radio v-model="management.gender" label="男">男</el-radio>
                            <el-radio v-model="management.gender" label="女">女</el-radio>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="联系电话">
                            <el-input
                                :value="management.phone"
                                @input="inputHandler($event, 'phone')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="住址">
                            <el-input
                                :value="management.address.city"
                                @input="inputHandler($event, 'address.city')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">出资信息</h4>
                    <el-col :span="12">
                        <el-form-item label="现金出资">
                            <el-radio v-model="management.isMoney" :label="true">是</el-radio>
                            <el-radio v-model="management.isMoney" :label="false">否</el-radio>
                        </el-form-item>
                        <el-form-item label="土地出资">
                            <el-radio v-model="management.isLand" :label="true">是</el-radio>
                            <el-radio v-model="management.isLand" :label="false">否</el-radio>
                        </el-form-item>
                        <el-form-item label="其他形式出资">
                            <el-radio v-model="management.isOther" :label="true">是</el-radio>
                            <el-radio v-model="management.isOther" :label="false">否</el-radio>
                        </el-form-item>
                        <el-form-item label="其他出资说明">
                            <el-input
                                :value="management.otherDesc"
                                @input="inputHandler($event, 'otherDesc')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="现金出资金额">
                            <el-input
                                :value="management.money"
                                @input="inputHandler($event, 'money')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="土地折算金额">
                            <el-input
                                :value="management.land"
                                @input="inputHandler($event, 'land')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="其他折算金额">
                            <el-input
                                :value="management.other"
                                @input="inputHandler($event, 'other')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="出资总计">
                            出资总计： 1.123.879 元
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">参加培训</h4>
                    <el-col :span="12">
                        <el-form-item label="农业知识培训(小时)">
                            <el-input
                                :value="management.trainHour"
                                @input="inputHandler($event, 'trainHour')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="经营知识培训(小时)">
                            <el-input
                                :value="management.trainHour2"
                                @input="inputHandler($event, 'trainHour2')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="农业技能培训(小时)">
                            <el-input
                                :value="management.trainHour3"
                                @input="inputHandler($event, 'trainHour3')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="其他培训(小时)">
                            <el-input
                                :value="management.trainHour4" @input="inputHandler($event, 'trainHour4')">
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
                        <li v-for="(certi, index) in management.certiList"
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
    name: 'ManagementDialog',
    data() {
        return {
            visible: false,
            management: {
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
            }
        };
    },
    methods: {
        show(management) {
            this.visible = true;
            if (management) {
                this.management = management;
            }
        },
        hide() {
            this.visible = false;
        },
        inputHandler(value, key) {
            _.set(this.management, key, value);
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
            this.management = {
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
