<template>
    <div class="farm-create-dialog-container">
        <el-dialog
            title="处理详情"
            class="my-dialog"
            width="60%"
            :visible.sync="visible"
            :show-close="true"
            @open="openDialogHandler"
            :before-close="beforeCloseHandler"
            :close-on-click-modal="false"
            :close-on-press-escape="false">
            <div class="dialog-body">
                <farm-form></farm-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button size="medium" @click="cancelHandler">取 消</el-button>
                <el-button type="primary" @click="enterHandler">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import FarmForm from './FarmForm';
export default {
    name: 'FarmCreateDialog',
    components: {FarmForm},
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        ...mapMutations({
            resetCurrentFarm: 'farm/resetCurrentFarm'
        }),
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
        openDialogHandler() {
            this.resetCurrentFarm();
        },
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
        },
        enterHandler() {
            this.cancelHandler();
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
