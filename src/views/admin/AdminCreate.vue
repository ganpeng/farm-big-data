<template>
    <div class="admin-create-container">
        <h2 class="content-title">新增管理员</h2>
        <div class="seperator-line"></div>
        <admin-form ref="adminForm"></admin-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="adminCreateHandler">创建</el-button>
            <el-button class="btn-style-three" @click="gotoAdminList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import AdminForm from './AdminForm';
export default {
    name: 'AdminCreate',
    components: {
        AdminForm
    },
    async create() {},
    methods: {
        ...mapActions({
            postAdmin: 'admin/postAdmin'
        }),
        async adminCreateHandler() {
            try {
                let valid = await this.$refs.adminForm.$refs.adminCreate.validate();
                if (valid) {
                    let res = await this.postAdmin();
                    if (res && res.errorCode === 0) {
                        this.gotoAdminList();
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        gotoAdminList() {
            this.$router.push({ name: 'AdminList' });
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
