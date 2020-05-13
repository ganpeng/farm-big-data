<template>
    <el-dialog
        title="农机具信息"
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
                :model="farmMachine"
                class="my-form"
                label-width="180px"
                @submit.native.prevent>
                <el-row>
                    <h4 class="content-sub-title">基本信息</h4>
                    <el-col :span="12">
                        <el-form-item label="机械名称">
                            <el-input
                                :value="farmMachine.name"
                                @input="inputHandler($event, 'name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="数量">
                            <el-input
                                :value="farmMachine.count"
                                @input="inputHandler($event, 'count')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="品牌">
                            <el-input
                                :value="farmMachine.brand"
                                @input="inputHandler($event, 'brand')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="购入价格(元)">
                            <el-input
                                :value="farmMachine.inPrice"
                                @input="inputHandler($event, 'inPrice')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="租借价格(元)">
                            <el-input
                                :value="farmMachine.outPrice"
                                @input="inputHandler($event, 'outPrice')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="租借日期">
                            <el-input
                                class="min-input"
                                :value="farmMachine.outStatedAt"
                                @input="inputHandler($event, 'outStatedAt')">
                            </el-input>
                            至
                            <el-input
                                class="min-input"
                                :value="farmMachine.outEndedAt"
                                @input="inputHandler($event, 'outEndedAt')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="出租人姓名">
                            <el-input
                                :value="farmMachine.contacts.name"
                                @input="inputHandler($event, 'contacts.name')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="出租人电话">
                            <el-input
                                :value="farmMachine.contacts.phone"
                                @input="inputHandler($event, 'contacts.phone')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="补贴日期">
                            <el-input
                                :value="farmMachine.dateOne"
                                @input="inputHandler($event, 'dateOne')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="获赠日期">
                            <el-input
                                :value="farmMachine.dateTwo"
                                @input="inputHandler($event, 'dateTwo')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="机械类型">
                            <el-select
                                :value="farmMachine.type"
                                clearable
                                placeholder="请选择"
                                @input="inputHandler($event, 'type')"
                            >
                                <el-option
                                    v-for="item in farmMachineTypeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="生产厂家">
                            <el-input
                                :value="farmMachine.factory"
                                @input="inputHandler($event, 'factory')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="机械来源">
                            <el-select
                                :value="farmMachine.source"
                                clearable
                                placeholder="请选择"
                                @input="inputHandler($event, 'source')"
                            >
                                <el-option
                                    v-for="item in farmMachineSourceOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="购入日期">
                            <el-input
                                :value="farmMachine.inDate"
                                @input="inputHandler($event, 'inDate')">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="证件号">
                            <el-input
                                :value="farmMachine.contacts.code"
                                @input="inputHandler($event, 'contacts.codee')">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="seperator-line"></div>
                <el-row>
                    <h4 class="content-sub-title">文件</h4>
                    <ul class="file-list">
                        <li class="file-item">
                            <img src="" alt="">
                        </li>
                        <li class="file-item">
                            <img src="" alt="">
                        </li>
                        <li class="file-item">
                            <img src="" alt="">
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
    name: 'HlandDialog',
    data() {
        return {
            visible: false,
            farmMachineTypeOptions: this.$util.farmMachineTypeOptions,
            farmMachineSourceOptions: this.$util.farmMachineSourceOptions,
            purposeOptions: this.$util.purposeOptions,
            roamTypeOptions: this.$util.roamTypeOptions,
            farmMachine: {
                id: 0,
                name: '', // 机械名称
                type: '', // 机械类型
                count: '', // 数量
                factory: '', // 生产厂家
                brand: '', // 品牌
                source: '', // 来源
                inPrice: '', // 购入价格
                outPrice: '', // 租价价格
                inDate: '', // 购入时间
                outStatedAt: '', // 租价开始日期
                outEndedAt: '', // 租借结束日期
                contacts: {
                    name: '', // 联系人姓名
                    code: '', // 联系人证件号
                    phone: '' // 联系人电话
                },
                dateOne: '', // 补贴日期
                dateTwo: '', // 获赠日期
                status: 1 // 状态
            }
        };
    },
    methods: {
        show(farmMachine) {
            this.visible = true;
            if (farmMachine) {
                this.farmMachine = farmMachine;
            }
        },
        hide() {
            this.visible = false;
        },
        inputHandler(value, key) {
            _.set(this.farmMachine, key, value);
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
            this.farmMachine = {
                id: 0,
                name: '', // 机械名称
                type: '', // 机械类型
                count: '', // 数量
                factory: '', // 生产厂家
                brand: '', // 品牌
                source: '', // 来源
                inPrice: '', // 购入价格
                outPrice: '', // 租价价格
                inDate: '', // 购入时间
                outStatedAt: '', // 租价开始日期
                outEndedAt: '', // 租借结束日期
                contacts: {
                    name: '', // 联系人姓名
                    code: '', // 联系人证件号
                    phone: '' // 联系人电话
                },
                dateOne: '', // 补贴日期
                dateTwo: '', // 获赠日期
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
.min-input {
    width: 140px!important
}
.file-list {
    display: flex;
    .file-item {
        width: 200px;
        height: 300px;
        background-color: red;
        border-radius: 8px;
    }
    .file-item + .file-item {
        margin-left: 10px;
    }
}
</style>
