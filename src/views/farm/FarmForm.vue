<template>
    <div class="farm-form-container">
        <el-form
            :model="farm"
            status-icon
            ref="peeForm"
            label-width="100px"
            @submit.native.prevent
            class="my-form">
            <el-row>
                <h4 class="content-sub-title">基础信息</h4>
                <el-col :span="12">
                    <el-form-item label="农场名称" prop="name">
                        <el-input
                            maxlength="20"
                            :value="farm.name"
                            @input="inputHandler($event, 'name')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="成立日期" prop="createdAt">
                        <span>{{farm.createdAt}}</span>
                    </el-form-item>
                    <el-form-item label="经度" prop="latitude">
                        <el-select
                            :value="farm.latitude"
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
                    <el-form-item label="地块面积(公顷)" prop="area">
                        <el-input
                            maxlength="20"
                            :value="farm.area"
                            @input="inputHandler($event, 'area')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="type">
                        <el-input
                            maxlength="20"
                            :value="farm.address.city"
                            @input="inputHandler($event, 'address.city')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="主要特色" prop="feature">
                        <el-input
                            maxlength="20"
                            :value="farm.feature"
                            @input="inputHandler($event, 'feature')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="农场简介" prop="desc">
                        <el-input
                            maxlength="20"
                            :value="farm.desc"
                            type="textarea"
                            @input="inputHandler($event, 'desc')"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="农场类型" prop="type">
                        <el-select
                            :value="farm.type"
                            filterable
                            clearable
                            placeholder="全部"
                            @input="inputHandler($event, 'type')">
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
                        <el-select
                            :value="farm.longitude"
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
                    <el-form-item label="经营项目" prop="project">
                        <el-select
                            :value="farm.project"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'project')"
                        >
                            <el-option
                                v-for="item in projectOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="专业级别" prop="level">
                        <el-select
                            :value="farm.level"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'level')"
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
                <el-col :span="12">
                    <el-form-item label="姓名">
                        <el-input
                            maxlength="20"
                            :value="farm.legal.name"
                            @input="inputHandler($event, 'legal.name')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <el-input
                            maxlength="20"
                            :value="farm.legal.cId"
                            @input="inputHandler($event, 'legal.cId')"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系电话">
                        <el-input
                            maxlength="20"
                            :value="farm.legal.phone"
                            @input="inputHandler($event, 'legal.phone')"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="住址">
                        <el-input
                            maxlength="20"
                            :value="farm.legal.address"
                            @input="inputHandler($event, 'legal.address')"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="seperator-line"></div>
            <el-row>
                <h4 class="content-sub-title">常务联系人</h4>
                <el-col :span="12">
                    <el-form-item label="姓名">
                        <el-input
                            maxlength="20"
                            :value="farm.standing.name"
                            @input="inputHandler($event, 'standing.name')"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系电话">
                        <el-input
                            maxlength="20"
                            :value="farm.standing.phone"
                            @input="inputHandler($event, 'standing.phone')"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="seperator-line"></div>
            <el-row>
                <h4 class="content-sub-title">党组信息</h4>
                <el-col :span="12">
                    <el-form-item label="成立党组织">
                        是
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="人数">
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
            lonlatOptions: this.$util.lonlatOptions,
            peeFarmOptions: this.$util.peeFarmOptions,
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
.farm-form-container {}
</style>
