<template>
    <el-dialog
        title="处理详情"
        class="my-dialog"
        width="500px"
        :visible.sync="visible"
        :show-close="true"
        @open="openDialogHandler"
        :before-close="beforeCloseHandler"
        :close-on-click-modal="false"
        :close-on-press-escape="false">
        <div class="dialog-body">
            <el-form
                :model="processingResult"
                class="my-form"
                label-width="100px"
                @submit.native.prevent>
                <el-form-item label="处理人">
                    <el-input
                        :value="processingResult.user"
                        @input="inputHandler($event, 'user')">
                    </el-input>
                </el-form-item>
                <el-form-item label="处理方式">
                    <el-input
                        type="textarea"
                        :value="processingResult.desc"
                        @input="inputHandler($event, 'desc')">
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button size="medium" @click="cancelHandler">取 消</el-button>
            <el-button type="primary" @click="enterHandler">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
import _ from 'lodash';
export default {
    name: 'ProcessingDialog',
    data() {
        return {
            visible: false,
            processingResult: {
                user: '',
                phone: '133144445566',
                dateTime: '90分钟前',
                desc: ''
            }
        };
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
        inputHandler(value, key) {
            _.set(this.processingResult, key, value);
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
            this.processingResult = {
                user: '',
                phone: '133144445566',
                dateTime: '90分钟前',
                desc: ''
            };
        },
        enterHandler() {
            this.cancelHandler();
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
