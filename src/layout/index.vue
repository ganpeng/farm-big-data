<template>
    <div class="app-container">
        <div class="header clearfix">
            <div class="user-info float-right clearfix">
                <svg-icon icon-class="avatar_icon"/>
                <label>admin</label>
                <div class="logout" @click="logout">
                    <svg-icon icon-class="logout"/>
                </div>
            </div>
        </div>
        <div class="aside">
            <div class="logo">
                <svg-icon icon-class="example"/>
            </div>
            <el-menu
                router
                :default-active="activeMenu"
                class="aside-list">
                <el-menu-item index="/dashboard">
                    <i class="el-icon-menu"></i>
                    <span slot="title">数据概览</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>农场管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/farm/list">农场信息管理</el-menu-item>
                        <el-menu-item index="/farm/visual">可视农场</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>销售管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/sale/tracing">溯源农品</el-menu-item>
                        <el-menu-item index="/sale/channel">渠道管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/pee/list">
                    <i class="el-icon-menu"></i>
                    <span slot="title">物环设备</span>
                </el-menu-item>
                <el-menu-item index="/base-station">
                    <i class="el-icon-menu"></i>
                    <span slot="title">基站管理</span>
                </el-menu-item>
                <el-menu-item index="/logistics">
                    <i class="el-icon-menu"></i>
                    <span slot="title">物流管理</span>
                </el-menu-item>
                <el-submenu index="7">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>数据洞察</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/data/statistics">数据统计</el-menu-item>
                        <el-menu-item index="/data/alert">大数据预警</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div :style="contentStyleStr()" id="global-content" class="content">
            <div class="content-wrapper" :style="`min-height: ${minHeight}px`">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            minHeight: 400,
            top: 60,
            left: 200
        };
    },
    computed: {
        activeMenu() {
            const route = this.$route;
            const { meta, path } = route;
            if (meta.activeMenu) {
                return meta.activeMenu;
            }
            return path
        }
    },
    async created() {
        try {
            this.setMinHeight();
            window.addEventListener('resize', this.setMinHeight, false);
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        contentStyleStr() {
            return `top: ${this.top}px;left: ${this.left}px;`;
        },
        setMinHeight() {
            let minHeight = window.innerHeight - 60;
            this.minHeight = minHeight;
        },
        logout() {
            localStorage.removeItem('token');
            this.$router.push({name: 'Login'});
        }
    }
};
</script>
<style lang="scss" scoped>
    .app-container {
        position: relative;
        width: 100%;
        height: 100%;
        .header {
            position: absolute;
            top: 0;
            left: 200px;
            right: 0;
            height: $headerHeight;
            background: $headerBg;
            color: $navText;
            .nav-list {
                line-height: $headerHeight;
                padding-left: 60px;
                .nav-item {
                    float: left;
                    min-width: 110px;
                    text-align: center;
                    cursor: pointer;
                    font-size: 20px;
                    color: $navText;
                    &:hover {
                        background: $headerNavHoverBg;
                    }
                    &.active {
                        color: #fff;
                        background: #0062C4;
                    }
                }
            }
            .user-info {
                position: relative;
                align-items: center;
                width: 184px;
                height: 60px;
                line-height: $headerHeight;
                margin-right: 20px;
                cursor: pointer;
                > .svg-icon {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 40px;
                    height: 40px;
                    z-index: 10;
                }
                label {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 140px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 20px;
                    background: rgba(255,255,255,0.10);
                    font-size: 14px;
                    color: $navText;
                    text-align: center;
                    text-indent: 40px;
                    cursor: pointer;
                    &:hover {
                        background: $headerNavHoverBg;
                        color: #fff;
                    }
                }
                .svg-icon-avatar_icon {
                    display: block;
                }
                .svg-icon-avatar_icon_active {
                    display: none;
                }
                &.active {
                    label {
                        background: #0062C4;
                        color: #fff;
                    }
                    .svg-icon-avatar_icon {
                        display: none;
                    }
                    .svg-icon-avatar_icon_active {
                        display: block;
                    }
                }
                .logout {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 24px;
                    height: 24px;
                    transform: translateY(-50%);
                    color: #fff;
                    line-height: 60px;
                    cursor: pointer;
                    .svg-icon {
                        position: absolute;
                        left: 0;
                        fill: #6F7480;
                        width: 24px;
                        height: 24px;
                        &:hover {
                            fill: #C35757;
                        }
                    }
                }
            }
        }
        .aside {
            position: absolute;
            top: 0;
            left: 0px;
            bottom: 0px;
            width: 200px;
            background-image: linear-gradient(90deg, #152036 0%, #252F46 100%);
            .logo {
                width: 200px;
                height: 110px;
                background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #000000 100%);
                .svg-icon {
                    position: absolute;
                    left: 50%;
                    top: 60px;
                    transform: translate(-50%, -40px);
                    width: 160px;
                    height: 38px;
                }
            }
        }
        .content {
            position: absolute;
            top: $headerHeight;
            left: 200px;
            right: 0px;
            bottom: 0px;
            overflow: scroll;
            background: $contentBg;
            .content-wrapper {
                padding: 20px 20px 100px 20px;
            }
        }
    }


    .aside-list {
        .el-menu-item {
            display: flex;
            align-items: center;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            color: $navText;
            padding-left: 30px !important;
            text-align: left;
            border-left: 4px solid transparent;
            background: transparent;
            .svg-icon {
                fill: $navText;
                margin-right: 20px;
                width: 30px;
                height: 30px;
            }
            &:hover {
                background: #0A1730 !important;
            }
            &.is-active {
                background: #0A1730 !important;
                border-left: 4px solid $mainColor;
                .svg-icon {
                    fill: $headerNavActiveText;
                }
            }
        }
    }

    .site-name {
        margin-top: 20px;
        margin-right: 20px;
    }
</style>
<style lang="scss">
.aside {
    .aside-list {
        .el-menu {
            background-color: transparent;
        }
        .el-submenu {
            .el-submenu__title {
                padding-left: 34px!important;
                text-align: left;
                span {
                    font-size: 20px;
                    color: $navText;
                }
                &:hover {
                    background: #0A1730 !important;
                }
            }
            .el-menu-item-group {
                .el-menu-item-group__title {
                    padding: 0;
                }
            }
        }
    }
    .el-menu {
        border-right: none;
        background: transparent;
    }
}
</style>
