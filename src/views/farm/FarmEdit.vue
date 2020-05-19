<template>
    <div class="farm-edit-container my-content-container">
        <farm-form ref="farmFormComponent"></farm-form>
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
    components: { FarmForm },
    data() {
        return {};
    },
    created() {
        let {id} = this.$route.params;
        this.setCurrentFarmById({id});
    },
    methods: {
        ...mapMutations({
            setCurrentFarmById: 'farm/setCurrentFarmById'
        }),
        farmEditHandler() {
            this.gotoFarmList();
        },
        gotoFarmList() {
            this.$router.push({name: 'FarmList'});
        }
    }
};
</script>
<style lang="scss" scoped>
.farm-edit-container {
    .tab-bar-container {
        position: absolute;
        top: 1px;
        left: 0;
        right: 0;
        background-color: #0F1623;
        z-index: 10;
        .tab-bar-list {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            .tab-bar-item {
                display: flex;
                align-items: center;
                height: 80px;
                line-height: 80px;
                .title {
                    display: inline-block;
                    font-size: 27px;
                    font-weight: 400;
                    color:#667799 ;
                    height: 52px;
                    line-height: 52px;
                    padding: 0 28px;
                    cursor: pointer;
                }
                &.active {
                    .title {
                        color: #fff;
                        background-color: $mainColor;
                        border-radius: 27px;
                    }
                }
            }
            .tab-bar-item + .tab-bar-item {
                margin-left: 20px;
            }
        }
    }
    .tab-content {
        margin-top: 80px;
    }
}
</style>
