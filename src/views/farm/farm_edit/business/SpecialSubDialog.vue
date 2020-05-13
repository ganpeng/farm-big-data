<template>
    <el-dialog
        title="补贴信息"
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
                :model="specialSub"
                class="my-form"
                label-width="180px"
                @submit.native.prevent>
                <el-row>
                    <h4 class="content-sub-title">基本信息</h4>
                    <el-col :span="12">
                        <el-form-item label="补贴类型">
                            <el-select
                                :value="specialSub.type"
                                clearable
                                placeholder="请选择"
                                @input="inputHandler($event, 'type')"
                            >
                                <el-option
                                    v-for="item in specialSubTypeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="申请负责人">
                            <el-input
                                :value="specialSub.leaderOne.name"
                                @input="inputHandler($event, 'leaderOne.name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="政府负责人">
                            <el-input
                                :value="specialSub.leaderTwo.name"
                                @input="inputHandler($event, 'leaderTwo.name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="申请时间">
                            <el-input
                                :value="specialSub.applyDate"
                                @input="inputHandler($event, 'applyDate')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="补贴状态">
                            <el-input
                                :value="specialSub.subStatus"
                                @input="inputHandler($event, 'subStatus')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="文件编号">
                            <el-input
                                :value="specialSub.code"
                                @input="inputHandler($event, 'code')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="申请人电话">
                            <el-input
                                :value="specialSub.leaderOne.phone"
                                @input="inputHandler($event, 'leaderOne.phone')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="政府负责人电话">
                            <el-input
                                :value="specialSub.leaderTwo.phone"
                                @input="inputHandler($event, 'leaderTwo.phone')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="通过时间">
                            <el-input
                                :value="specialSub.passDate"
                                @input="inputHandler($event, 'passDate')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">资金情况</h4>
                    <el-col :span="12">
                        <el-form-item label="姓名">
                            <el-input
                                :value="specialSub.moneyInfo.totalMoney"
                                @input="inputHandler($event, 'moneyInfo.totalMoney')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="到账金额">
                            <el-input
                                :value="specialSub.moneyInfo.payAmount"
                                @input="inputHandler($event, 'moneyInfo.payAmount')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="到账金额">
                            <el-input
                                :value="specialSub.moneyInfo.payAmount"
                                @input="inputHandler($event, 'moneyInfo.payAmount')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="政府拨款">
                            <el-input
                                :value="specialSub.moneyInfo.govPay"
                                @input="inputHandler($event, 'moneyInfo.govPay')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="到账日期">
                            <el-input
                                :value="specialSub.moneyInfo.payDate"
                                @input="inputHandler($event, 'moneyInfo.payDate')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="到账日期">
                            <el-input
                                :value="specialSub.moneyInfo.payDate"
                                @input="inputHandler($event, 'moneyInfo.payDate')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">使用明细</h4>
                    <ul class="use-detail-list">
                        <li
                            v-for="(userDetail, index) in specialSub.useDetailList"
                            :key="index"
                            class="use-detail-item">
                            <el-col :span="12">
                                <el-form-item label="费用类型">
                                    <el-input
                                        v-model="userDetail.type">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="资金使用凭证号">
                                    <el-input
                                        v-model="userDetail.code">
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="发票">
                                    <ul class="invoice-list">
                                        <li class="invoice-item">
                                            <img src="" alt="">
                                        </li>
                                    </ul>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="金额">
                                    <el-input v-model="userDetail.amount"></el-input>
                                </el-form-item>
                                <el-form-item label="到账日期">
                                    <el-input v-model="userDetail.createdAt"></el-input>
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
    name: 'SpecialSubDialog',
    data() {
        return {
            visible: false,
            specialSubTypeOptions: this.$util.specialSubTypeOptions,
            specialSubStatusOptions: this.$util.specialSubStatusOptions,
            specialSub: {
                id: 0,
                type: '', // 补贴类型
                code: '', // 文件编号
                leaderOne: {
                    name: '',
                    phone: ''
                }, // 申请负责人
                leaderTwo: {
                    name: '',
                    phone: ''
                }, // 政府负责人
                applyDate: '', // 申请时间
                passDate: '', // 通过时间
                subStatus: '', // 补贴状态
                moneyInfo: {
                    totalMoney: 0, // 项目总额
                    govPay: 500000, // 政府拨款
                    payedList: [ //  到账金额
                        {
                            amount: '',
                            date: ''
                        }
                    ],
                    payedTotal: 0, // 到账总计
                },
                useDetailList: [
                    {
                        type: '', // 费用类型
                        amount: 0, // 金额
                        code: '', // 资金适用凭证号
                        createdAt: '', // 产生时间
                        invoiceList: [] // 发票列表
                    }
                ]
            }
        };
    },
    methods: {
        show(specialSub) {
            this.visible = true;
            if (specialSub) {
                this.specialSub = specialSub;
            }
        },
        hide() {
            this.visible = false;
        },
        inputHandler(value, key) {
            _.set(this.specialSub, key, value);
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
            this.specialSub = {
                id: 0,
                type: '', // 补贴类型
                code: '', // 文件编号
                leaderOne: {
                    name: '',
                    phone: ''
                }, // 申请负责人
                leaderTwo: {
                    name: '',
                    phone: ''
                }, // 政府负责人
                applyDate: '', // 申请时间
                passDate: '', // 通过时间
                subStatus: '', // 补贴状态
                moneyInfo: {
                    totalMoney: 0, // 项目总额
                    govPay: 500000, // 政府拨款
                    payedList: [ //  到账金额
                        {
                            amount: '',
                            date: ''
                        }
                    ],
                    payedTotal: 0, // 到账总计
                },
                useDetailList: [
                    {
                        type: '', // 费用类型
                        amount: 0, // 金额
                        code: '', // 资金适用凭证号
                        createdAt: '', // 产生时间
                        invoiceList: [] // 发票列表
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
.invoice-list {
    display: flex;
    .invoice-item {
        width: 140px;
        height: 220px;
        background-color: red;
        border-radius: 8px;
        img {
        }
    }
}
</style>
