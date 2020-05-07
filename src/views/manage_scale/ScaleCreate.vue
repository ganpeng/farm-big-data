<template>
    <div class="scale-create-container">
        <h2 class="content-title">新增量表</h2>
        <div class="seperator-line"></div>
        <scale-form ref="scaleFormComponent"></scale-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="scaleCreateHandler">创建</el-button>
            <el-button class="btn-style-three" @click="gotoScaleList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import ScaleForm from './ScaleForm';
export default {
    name: 'ScaleCreate',
    components: {ScaleForm},
    methods: {
        ...mapActions({
            createScale: 'scale/createScale'
        }),
        async scaleCreateHandler() {
            try {
                let valid = await this.$refs.scaleFormComponent.$refs.scaleForm.validate();
                if (valid) {
                    let res = await this.createScale();
                    if (res && res.errorCode === 0) {
                        this.$router.push({ name: 'ScaleList' });
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        gotoScaleList() {
            this.$router.push({ name: 'ScaleList' });
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
