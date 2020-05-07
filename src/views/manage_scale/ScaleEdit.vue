<template>
    <div class="scale-edit-container">
        <h2 class="content-title">编辑量表</h2>
        <div class="seperator-line"></div>
        <scale-form ref="scaleFormComponent"></scale-form>
        <question></question>
        <statistical-indicators></statistical-indicators>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="scaleEditHandler">保存</el-button>
            <el-button class="btn-style-three" @click="gotoScaleList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import Question from './Question';
import StatisticalIndicators from './StatisticalIndicators';
import ScaleForm from './ScaleForm';
export default {
    name: 'ScaleEdit',
    components: {ScaleForm, Question, StatisticalIndicators},
    async created() {
        try {
            let {id} = this.$route.params;
            this.getScaleById(id);
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        ...mapActions({
            getScaleById: 'scale/getScaleById',
            putScaleById: 'scale/putScaleById'
        }),
        async scaleEditHandler() {
            try {
                let valid = await this.$refs.scaleFormComponent.$refs.scaleForm.validate();
                if (valid) {
                    let res = await this.putScaleById();
                    if (res && res.errorCode === 0) {
                        this.gotoScaleList();
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
