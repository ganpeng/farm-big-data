<!-- 登录页面 -->
<template>
    <div id="login-container" class="login-container el-container">
        <div class="form-box" @keyup.enter="loginHandler">
            <svg-icon icon-class="login_log" class-name="login-log"/>
            <h3 class="title">睿圈心理测评系统管理平台</h3>
            <el-form ref="loginForm" :model="admin" status-icon :rules="rules">
                <el-form-item prop="name" class="name">
                    <el-input
                        v-model="admin.name"
                        clearable
                        class="border-input"
                        placeholder="用户名">
                        <svg-icon icon-class="personal_center" slot="prefix"/>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" class="password">
                    <el-input
                        v-model="admin.password"
                        clearable
                        type="password"
                        class="border-input"
                        placeholder="密码">
                        <svg-icon icon-class="password" slot="prefix"/>
                    </el-input>
                </el-form-item>
                <el-form-item class="login-box">
                    <el-button type="primary" @click="loginHandler">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!--
        <svg-icon icon-class="login_bg" class-name="login-bg"/>
        <svg-icon icon-class="login_footer_info" class-name="login-footer-info"/>
        -->
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import {authRoutes, createRouter, routes} from '../../router/index';
export default {
    name: 'Login',
        data() {
            return {
                admin: {
                    name: '',
                    password: ''
                },
                rules: {},
            };
        },
        methods: {
            ...mapActions({
                login: 'common/login'
            }),
            async loginHandler() {
                try {
                    let valid = await this.$refs.loginForm.validate();
                    if (valid) {
                        let res = await this.login(this.admin);
                        if (res && res.errorCode === 0) {
                            if (res.body.role !== 'BACKEND') {
                                this.$router.matcher = createRouter(routes).matcher;
                                this.$router.addRoutes(authRoutes);
                                this.$router.push({name: 'TaskList'});
                            } else {
                                this.$router.push({name: 'Console'});
                            }
                        } else {
                            this.$message.error(res.errorMsg);
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        }
};
</script>
<style lang="scss" scoped>
.el-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

h3 {
    margin-bottom: 25px;
    margin-top: 20px;
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    line-height: 20px;
}

.site-name {
    display: inline-block;
    margin-bottom: 35px;
    padding: 5px 12px;
    font-size: 20px;
    color: #637497;
    text-align: center;
    line-height: 20px;
    background: #191D26;
    border-radius: 10px;
}

.site-name {
    padding: 0px;
    cursor: auto;
}

.site-name {
    padding: 0px;
    cursor: auto;
}

.login-container {
    position: relative;
    min-width: 800px;
    background: #1A2233;
    .login-logo {
        position: absolute;
        left: 60px;
        bottom: 100px;
        height: 72px;
        width: 457px;
    }
    div.form-box {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 420px;
        height: 420px;
        z-index: 400;
        .login-log {
            width: 140px;
            height: 140px;
        }
        .title {
            color: #A8ABB3;
        }
    }
    .el-form {
        margin: 0px 50px;
        input {
            // background-color: transparent;
        }
        .svg-icon-personal_center {
            height: 30px !important;
            width: 30px !important;
        }
        .svg-icon-password {
            margin-left: 7px;
            height: 30px !important;
            width: 15px !important;
        }
        .login-box {
            margin-top: 40px;
            .el-button {
                width: 100%;
                height: 40px;
                font-size: $normalFontSize;
                background: #0062C4;
                border: none;
                &:hover {
                    background: #1989FA;
                }
            }
        }
        .el-checkbox {
            float: left;
            padding: 5px 0px 0px 0px;
            font-size: 14px;
            color: #6F7480;
        }
        label {
            float: right;
            padding-right: 5px;
            cursor: pointer;
            font-size: 14px;
            color: #6F7480;
            &:hover {
                color: #409EFF;
            }
        }
    }
}
</style>
<style lang="scss">
#login-container {
    .el-input__inner {
        padding-left: 50px !important;
    }
}
</style>
