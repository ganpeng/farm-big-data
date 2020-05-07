<template>
    <div class="admin-detail-container">
        <h2 class="content-title">管理员详情</h2>
        <div class="seperator-line"></div>
        <div class="common-details">
            <div class="poster-section person">
                <div class="visible-wrapper">
                    <span :class="['visible', admin.status === 'NORMAL' ? 'is-visible' : 'dis-visible']">
                        {{admin.status === 'NORMAL' ? '正常' : '禁用'}}
                    </span>
                </div>
                <img src="" alt="" width="200" height="200">
            </div>
            <div class="info-section">
                <div class="title-wrapper">
                    <span class="title">{{admin.name}}</span>
                    <div class="date">
                        <span class="create-date">
                            创建于{{admin.createdAt | dateFormat}}
                        </span>
                        <span class="update-date">
                            更新于{{admin.updatedAt | dateFormat}}
                        </span>
                    </div>
                </div>
                <div class="seperator-line"></div>
                <div class="attributes">
                    <div class="attribute-item">
                        <label class="item-label">邮箱:</label>
                        <span class="value">{{admin.email}}</span>
                    </div>
                    <div class="attribute-item">
                        <label class="item-label">手机号:</label>
                        <span class="value">{{admin.mobile}}</span>
                    </div>
                    <div class="attribute-item">
                        <label class="item-label">固话:</label>
                        <span class="value">{{admin.telephone}}</span>
                    </div>
                    <div class="attribute-item">
                        <label class="item-label">最后登录:</label>
                        <span class="value">{{admin.lastLoginAt}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed-btn-container">
            <el-button class="btn-style-three" @click="gotoAdminList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'AdminDetail',
    computed: {
        ...mapGetters({
            admin: 'admin/currentAdmin'
        })
    },
    async create() {},
    methods: {
        gotoAdminList() {
            this.$router.push({ name: 'AdminList' });
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
