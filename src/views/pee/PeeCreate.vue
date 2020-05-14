<template>
    <div class="pee-create-container my-content-container">
        <h2 class="content-title">物环设备新增</h2>
        <div class="seperator-line"></div>
        <pee-form ref="peeFormComponent"></pee-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="peeCreateHandler">创建</el-button>
            <el-button class="btn-style-three" @click="gotoPeeList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import PeeForm from './PeeForm';
export default {
    name: 'PeeCreate',
    components: {PeeForm},
    methods: {
        gotoPeeList() {
            this.$router.push({name: 'PeeList'});
        },
        peeCreateHandler() {
            this.$router.push({name: 'PeeList'});
        }
    }
};
</script>
<style lang="scss" scoped>
.pee-create-container {}
</style>
