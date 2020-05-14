<template>
    <div class="tracing-edit-container my-content-container">
        <h2 class="content-title">溯源农品编辑</h2>
        <div class="seperator-line"></div>
        <tracing-form></tracing-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="tracingEditHandler">保存</el-button>
            <el-button class="btn-style-three" @click="gotoTracingList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import TracingForm from './TracingForm';
export default {
    name: 'TracingEdit',
    components: {TracingForm},
    created() {
        let {id} = this.$route.params;
        this.setCurrentTracingById({id});
    },
    methods: {
        ...mapMutations({
            setCurrentTracingById: 'tracing/setCurrentTracingById'
        }),
        gotoTracingList() {
            this.$router.push({name: 'TracingList'});
        },
        tracingEditHandler() {
            this.$router.push({name: 'TracingList'});
        }
    }
}
</script>
<style lang="scss" scoped>
.tracing-edit-container {}
</style>
