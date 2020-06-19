<template>
    <div class="farm-form-container">
        <el-form
            :model="farm"
            status-icon
            ref="peeForm"
            label-width="140px"
            @submit.native.prevent
            class="my-form">
            <el-row>
                <h4 class="content-sub-title">基础信息</h4>
                <el-col :span="10">
                    <el-form-item label="农场名称" prop="name">
                        <el-input
                            maxlength="20"
                            :value="farm.name"
                            @input="inputHandler($event, 'name')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="成立日期" prop="createdAt">
                        <el-input
                            :value="farm.createdAt"
                            @input="inputHandler($event, 'createdAt')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="经度" prop="latitude">
                        <el-input
                            :value="farm.latitude"
                            @input="inputHandler($event, 'latitude')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="地块面积(公顷)" prop="fieldArea">
                        <el-input
                            :value="farm.fieldArea"
                            @input="inputHandler($event, 'fieldArea')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="address">
                        <el-input
                            :value="farm.address"
                            @input="inputHandler($event, 'address')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="主要特色" prop="feature">
                        <el-input
                            :value="farm.feature"
                            @input="inputHandler($event, 'feature')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="农场简介" prop="description">
                        <el-input
                            :value="farm.description"
                            type="textarea"
                            @input="inputHandler($event, 'description')"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="农场类型" prop="farmType">
                        <el-select
                            :value="farm.farmType"
                            filterable
                            clearable
                            placeholder="全部"
                            @input="inputHandler($event, 'farmType')">
                            <el-option
                                v-for="(item, index) in farmVisualTypeOptions"
                                :key="index"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="信用代码">
                        <el-input
                            :value="farm.creditCode"
                            @input="inputHandler($event, 'creditCode')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="纬度" prop="longitude">
                        <el-input
                            :value="farm.longitude"
                            @input="inputHandler($event, 'longitude')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="经营项目" prop="manageType">
                        <el-select
                            :value="farm.manageType"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'manageType')"
                        >
                            <el-option
                                v-for="item in projectOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="专业级别" prop="professionalType">
                        <el-select
                            :value="farm.professionalType"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'professionalType')"
                        >
                            <el-option
                                v-for="item in farmLevelOptions"
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
                <h4 class="content-sub-title">法人信息</h4>
                <el-col :span="10">
                    <el-form-item label="姓名">
                        <el-input
                            maxlength="20"
                            :value="farm.corporationName"
                            @input="inputHandler($event, 'corporationName')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <el-input
                            maxlength="20"
                            :value="farm.corporationId"
                            @input="inputHandler($event, 'corporationId')"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="联系电话">
                        <el-input
                            maxlength="20"
                            :value="farm.corporationTel"
                            @input="inputHandler($event, 'corporationTel')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="住址">
                        <el-input
                            maxlength="20"
                            :value="farm.corporationAddr"
                            @input="inputHandler($event, 'corporationAddr')"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="seperator-line"></div>
            <el-row>
                <h4 class="content-sub-title">常务联系人</h4>
                <el-col :span="10">
                    <el-form-item label="姓名">
                        <el-input
                            maxlength="20"
                            :value="farm.contactName"
                            @input="inputHandler($event, 'contactName')"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="联系电话">
                        <el-input
                            maxlength="20"
                            :value="farm.contactTel"
                            @input="inputHandler($event, 'contactTel')"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="seperator-line"></div>
            <el-row>
                <h4 class="content-sub-title">党组信息</h4>
                <el-col :span="10">
                    <el-form-item label="成立党组织">
                        <el-radio @input="inputHandler(true, 'partyOrg')" :value="farm.partyOrg" :label="true">是</el-radio>
                        <el-radio @input="inputHandler(false, 'partyOrg')" :value="farm.partyOrg" :label="false">否</el-radio>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item v-if="farm.partyOrg" label="人数">
                        <el-input
                            :value="farm.partCount"
                            @input="inputHandler($event, 'partCount')"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'FarmForm',
    data() {
        return {
            farmVisualTypeOptions: this.$util.farmVisualTypeOptions,
            projectOptions: this.$util.projectOptions,
            farmLevelOptions: this.$util.farmLevelOptions
        };
    },
    computed: {
        ...mapGetters({
            farm: 'farm/currentFarm'
        })
    },
    methods: {
        ...mapMutations({
            updateCurrentFarm: 'farm/updateCurrentFarm'
        }),
        inputHandler(value, key) {
            this.updateCurrentFarm({key, value});
        }
    }
};
</script>
<style lang="scss" scoped>
.farm-form-container {
    padding-bottom: 100px;
}
</style>
