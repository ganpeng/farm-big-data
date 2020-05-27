<template>
    <el-dialog
        title="项目信息"
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
                :model="governmentProjects"
                class="my-form"
                label-width="180px"
                @submit.native.prevent>
                <el-row>
                    <h4 class="content-sub-title">基本信息</h4>
                    <el-col :span="12">
                        <el-form-item label="项目名称">
                            <el-input
                                :value="governmentProjects.name"
                                @input="inputHandler($event, 'name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="所属部门">
                            <el-input
                                :value="governmentProjects.department"
                                @input="inputHandler($event, 'department')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="负责人电话">
                            <el-input
                                :value="governmentProjects.leader.phone"
                                @input="inputHandler($event, 'leader.phone')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="项目周期">
                            <el-input
                                :value="governmentProjects.cycleStartedAt"
                                @input="inputHandler($event, 'cycleStartedAt')">
                            </el-input>
                            至
                            <el-input
                                :value="governmentProjects.cycleEndedAt"
                                @input="inputHandler($event, 'cycleEndedAt')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="项目级别">
                            <el-select
                                :value="governmentProjects.level"
                                clearable
                                placeholder="请选择"
                                @input="inputHandler($event, 'level')"
                            >
                                <el-option
                                    v-for="item in governmentProjectLevelOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="项目负责人">
                            <el-input
                                :value="governmentProjects.leader.name"
                                @input="inputHandler($event, 'leader.name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="项目阶段" prop="step">
                            <el-select
                                :value="governmentProjects.step"
                                clearable
                                placeholder="请选择"
                                @input="inputHandler($event, 'step')"
                            >
                                <el-option
                                    v-for="item in governmentProjectStepOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <!--
                        <el-form-item label="GIS图片">
                            <img class="gis-img" src="../../../../assets/img/gis.png" alt="">
                        </el-form-item>
                        -->
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">资金情况</h4>
                    <el-col :span="12">
                        <el-form-item label="姓名">
                            <el-input
                                :value="governmentProjects.moneyInfo.totalMoney"
                                @input="inputHandler($event, 'moneyInfo.totalMoney')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="到账金额">
                            <el-input
                                :value="governmentProjects.moneyInfo.payAmount"
                                @input="inputHandler($event, 'moneyInfo.payAmount')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="到账金额">
                            <el-input
                                :value="governmentProjects.moneyInfo.payAmount"
                                @input="inputHandler($event, 'moneyInfo.payAmount')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="政府拨款">
                            <el-input
                                :value="governmentProjects.moneyInfo.govPay"
                                @input="inputHandler($event, 'moneyInfo.govPay')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="到账日期">
                            <el-input
                                :value="governmentProjects.moneyInfo.payDate"
                                @input="inputHandler($event, 'moneyInfo.payDate')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="到账日期">
                            <el-input
                                :value="governmentProjects.moneyInfo.payDate"
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
                            v-for="(userDetail, index) in governmentProjects.useDetailList"
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
                                            <img src="../../../../assets/img/发票2.jpeg" alt="">
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
    name: 'GovernmentProjectsDialog',
    data() {
        return {
            visible: false,
            governmentProjectLevelOptions: this.$util.governmentProjectLevelOptions,
            governmentProjectStepOptions: this.$util.governmentProjectStepOptions,
            governmentProjects: {
                id: 0,
                name: '', // 项目名称
                level: '', // 项目级别
                department: '', // 部门
                leader: {
                    name: '',  // 负责人
                    phone: '' // 负责人电话
                },
                step: '', // 项目阶段
                cycleStartedAt: '', // 周期开始
                cycleEndedAt: '', // 周期结束
                moneyInfo: {
                    totalMoney: 0, // 项目总额
                    govPay: 0, // 政府拨款
                    payedList: [ //  到账金额
                        {
                            amount: '',
                            date: ''
                        }
                    ],
                    payAmount: '',
                    payDate: '',
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
        show(governmentProjects) {
            this.visible = true;
            if (governmentProjects) {
                this.governmentProjects = governmentProjects;
            }
        },
        hide() {
            this.visible = false;
        },
        inputHandler(value, key) {
            _.set(this.governmentProjects, key, value);
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
            this.governmentProjects = {
                id: 0,
                name: '', // 项目名称
                level: '', // 项目级别
                department: '', // 部门
                leader: {
                    name: '',  // 负责人
                    phone: '' // 负责人电话
                },
                step: '', // 项目阶段
                cycleStartedAt: '', // 周期开始
                cycleEndedAt: '', // 周期结束
                moneyInfo: {
                    totalMoney: 0, // 项目总额
                    govPay: 0, // 政府拨款
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
        // width: 140px;
        // height: 220px;
        border-radius: 4px;
        img {
            width: 300px;
            height: 260px;
        }
    }
}
</style>
