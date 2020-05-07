<template>
    <div class="profile-container">
        <h2 class="content-title">个人中心</h2>
        <div class="seperator-line"></div>
        <div class="common-details">
            <div class="poster-section person">
                <div class="visible-wrapper"></div>
                <svg-icon icon-class="person_avatar" class-name="svg-icon-person_avatar"></svg-icon>
            </div>
            <div class="info-section">
                <!-- <el-button type="primary" class="btn-style-two edit-btn" @click="editHandler">编辑</el-button> -->
                <div class="title-wrapper">
                    <span class="title"></span>
                    <div class="date">
                        <span id="create-date">
                            创建于: {{user.createdAt | dateFormat}}
                        </span>
                    </div>
                </div>
                <div class="seperator-line"></div>
                <div class="attributes">
                    <div class="attribute-item">
                        <div class="item-label" id="phone-label">
                            <svg-icon icon-class="phone_info" class-name="svg-icon-phone_info"></svg-icon>
                            账号
                        </div>
                        <div class="value">{{user.name}}</div>
                    </div>
                    <div class="attribute-item">
                        <div class="item-label" id="phone-label">
                            <svg-icon icon-class="phone_info" class-name="svg-icon-phone_info"></svg-icon>
                            电话
                        </div>
                        <div class="value">{{user.mobile}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'Profile',
    computed: {
        ...mapGetters({
            user: 'common/user'
        })
    },
    methods: {
        editHandler() {}
    }
};
</script>
<style lang="scss" scoped>
.info-section {
    position: relative;
    .edit-btn {
        position: absolute;
        top: 60px;
        right: 0px;
    }
}

#create-date {
    height: 44px;
    line-height: 44px;
}

.profile-container {
    .attribute-item {
        margin-bottom: 20px;
        #email-label, #phone-label {
            font-size: 16px;
            color: #A8ABB3;
            width: auto;
        }
        .value {
            font-size: 16px;
            color: #A8ABB3;
        }
    }
}

.svg-icon-person_avatar {
    width: 200px !important;
    height: 200px !important;
}

.svg-icon-email_info {
    margin-right: 6px;
    width: 30px !important;
    height: 18px !important;
}

.svg-icon-phone_info {
    margin-right: 10px;
    margin-left: 6px;
    width: 20px !important;
    height: 30px !important;
}
</style>
