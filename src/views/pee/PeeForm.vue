<template>
    <div class="pee-form-container">
        <el-form
            :model="pee"
            status-icon
            ref="peeForm"
            label-width="100px"
            @submit.native.prevent
            class="my-form">
            <el-row>
                <h4 class="content-sub-title">设备信息</h4>
                <el-col span="10">
                    <el-form-item label="设备ID" prop="dId">
                        <el-input
                            maxlength="20"
                            :value="pee.dId"
                            @input="inputHandler($event, 'dId')"
                            placeholder="请输入设备ID"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="传感器类型" prop="type">
                        <el-select
                            :value="pee.type"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'type')"
                        >
                            <el-option
                                v-for="item in sensorTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="地址" prop="type">
                        <el-select
                            :value="pee.type"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'type')"
                        >
                            <el-option
                                v-for="item in sensorTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="经度" prop="latitude">
                        <el-select
                            :value="pee.latitude"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'latitude')"
                        >
                            <el-option
                                v-for="item in lonlatOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="厂商" prop="firmName">
                        <el-select
                            :value="pee.firmName"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'firmName')"
                        >
                            <el-option
                                v-for="item in peeFirmOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col span="10">
                    <el-form-item label="设备SN" prop="sn">
                        <el-input
                            maxlength="20"
                            :value="pee.sn"
                            @input="inputHandler($event, 'sn')"
                            placeholder="请输入设备SN号"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="数据指标" prop="dataIndicators">
                        <el-select
                            :value="pee.dataIndicators"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'dataIndicators')"
                        >
                            <el-option
                                v-for="item in dataIndicatorsOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="纬度" prop="longitude">
                        <el-select
                            :value="pee.longitude"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'longitude')"
                        >
                            <el-option
                                v-for="item in lonlatOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所属农场" prop="farm">
                        <el-select
                            :value="pee.farm"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'farm')"
                        >
                            <el-option
                                v-for="item in peeFarmOptions"
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
                <h4 class="content-sub-title">运维负责人</h4>
                <el-col span="10">
                    <el-form-item label="所属公司" prop="company">
                        <el-select
                            :value="pee.head.company"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'head.company')"
                        >
                            <el-option
                                v-for="item in peeFarmOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="员工电话">
                        <span>{{pee.head.phone || '15893214936'}}</span>
                    </el-form-item>
                </el-col>
                <el-col span="10">
                    <el-form-item label="员工姓名" prop="name">
                        <el-select
                            :value="pee.head.name"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'head.name')"
                        >
                            <el-option
                                v-for="item in staffOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'PeeForm',
    data() {
        return {
            sensorTypeOptions: this.$util.sensorTypeOptions,
            peeFirmOptions: this.$util.peeFirmOptions,
            peeFarmOptions: this.$util.peeFarmOptions,
            peeCompanyOptions: this.$util.peeCompanyOptions,
            staffOptions: this.$util.staffOptions,
            lonlatOptions: this.$util.lonlatOptions,
            dataIndicatorsOptions: [
                {
                    value: 1,
                    label: '温度 指标ID 001-001'
                },
                {
                    value: 2,
                    label: '湿度 指标ID 001-002'
                },
                {
                    value: 3,
                    label: '大气压力 指标ID 001-003'
                },
                {
                    value: 4,
                    label: '空气PH值 指标ID 001-004'
                }
            ]
        };
    },
    computed: {
        ...mapGetters({
            pee: 'pee/currentPee'
        })
    },
    methods: {
        ...mapMutations({
            updateCurrentPee: 'pee/updateCurrentPee'
        }),
        inputHandler(value, key) {
            this.updateCurrentPee({key, value});
        }
    }
};
</script>
<style lang="scss" scoped>
.pee-form-container {}
</style>
