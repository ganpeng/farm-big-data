<template>
    <div class="admin-edit-container">
        <h2 class="content-title">编辑管理员</h2>
        <div class="seperator-line"></div>
        <admin-form></admin-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="editCreateHandler">保存</el-button>
            <el-button class="btn-style-three" @click="gotoAdminList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import AdminForm from './AdminForm';
export default {
    name: 'AdminEdit',
    components: {
        AdminForm
    },
    async create() {},
    methods: {
        async editCreateHandler() {},
        gotoAdminList() {
            this.$router.push({ name: 'AdminList' });
        }
    }
};
</script>
<style lang="scss" scoped>

</style>
