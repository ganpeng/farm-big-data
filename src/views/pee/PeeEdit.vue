<template>
    <div class="pee-edit-container my-content-container">
        <pee-form ref="peeFormComponent"></pee-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="peeEditHandler">保存</el-button>
            <el-button class="btn-style-three" @click="gotoPeeList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import PeeForm from './PeeForm';
export default {
    name: 'PeeEdit',
    components: {PeeForm},
    created() {
        let {id} = this.$route.params;
        this.setCurrentPeeById({id});
    },
    methods: {
        ...mapMutations({
            setCurrentPeeById: 'pee/setCurrentPeeById'
        }),
        gotoPeeList() {
            this.$router.push({name: 'PeeList'});
        },
        peeEditHandler() {
            this.$router.push({name: 'PeeList'});
        }
    }
};
</script>
<style lang="scss" scoped>
.pee-edit-container {}
</style>
