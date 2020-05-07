<template>
    <div class="admin-form-container">
        <el-form :model="admin"
            :rules="valueRules"
            status-icon
            ref="adminCreate"
            label-width="100px"
            @submit.native.prevent
            class="my-form">
            <el-col :span="8">
                <el-form-item label="账号" prop="name">
                    <el-input
                        :value="admin.name"
                        @input="inputHandler($event, 'name')"
                        placeholder="请输入账号"
                    ></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="mobile">
                    <div class="desc-wrapper">
                        <el-input
                            placeholder="请输入电话号码"
                            :value="admin.mobile"
                            @input="inputHandler($event, 'mobile')"
                        ></el-input>
                    </div>
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-radio @input="inputHandler(true, 'status')" :value="admin.status" :label="true">正常</el-radio>
                    <el-radio @input="inputHandler(false, 'status')" :value="admin.status" :label="false">禁用</el-radio>
                </el-form-item>
            </el-col>
        </el-form>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import reg from '@/util/reg';
export default {
    name: 'AdminForm',
    data() {
        const nameValidator = (rule, value, callback) => {
            if (!reg.account.test(value)) {
                return callback(new Error('用户只能包含6-16位字母数字下划线'));
            }
            callback();
        };

        return {
            valueRules: {
                name: [
                    { required: true, message: '请输入账户名称' },
                    { validator: nameValidator }
                ]
            }
        };
    },
    computed: {
        ...mapGetters({
            admin: 'admin/currentAdmin'
        })
    },
    async created() {},
    methods: {
        ...mapMutations({
            updateCurrentAdmin: 'admin/updateCurrentAdmin'
        }),
        inputHandler(value, key) {
            this.updateCurrentAdmin({key, value});
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
