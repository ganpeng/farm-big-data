<template>
    <div class="farm-edit-container">
        <h2 class="content-title">农场信息编辑</h2>
        <div class="seperator-line"></div>
        <el-row>
            <el-col :span="16">
                <farm-form ref="farmFormComponent"></farm-form>
            </el-col>
        </el-row>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="farmEditHandler">保存</el-button>
            <el-button class="btn-style-three" @click="gotoFarmList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import FarmForm from './FarmForm';
export default {
    name: 'FarmEdit',
    components: {FarmForm},
    created() {
        let {id} = this.$route.params;
        this.setCurrentFarmById({id});
    },
    methods: {
        ...mapMutations({
            setCurrentFarmById: 'farm/setCurrentFarmById'
        }),
        gotoFarmList() {
            this.$router.push({name: 'FarmList'});
        },
        farmEditHandler() {
            this.$router.push({name: 'FarmList'});
        }
    }
};
</script>
<style lang="scss" scoped>
.farm-edit-container {}
</style>
