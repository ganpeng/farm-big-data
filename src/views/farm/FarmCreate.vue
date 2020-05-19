<template>
    <div class="farm-create-container my-content-container">
        <farm-form ref="farmFormComponent"></farm-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="farmCreateHandler">保存</el-button>
            <el-button class="btn-style-three" @click="gotoFarmList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import FarmForm from './FarmForm';
export default {
    name: 'FarmCreate',
    components: { FarmForm },
    created() {
        this.resetCurrentFarm();
    },
    methods: {
        ...mapMutations({
            resetCurrentFarm: 'farm/resetCurrentFarm'
        }),
        farmCreateHandler() {
            this.gotoFarmList();
        },
        gotoFarmList() {
            this.$router.push({name: 'FarmList'});
        }
    }
};
</script>
<style lang="scss" scoped>
.farm-create-container {}
</style>
