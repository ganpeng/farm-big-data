<template>
    <div class="app-container">
        <div class="header clearfix">
            <div class="breadcrumb">{{breadcrumb}}{{subTitle}}</div>
            <div class="user-info">
                <svg-icon icon-class="avatar_icon"/>
                <label>李素琴</label>
                <div class="logout" @click="logout">
                    <svg-icon icon-class="logout"/>
                </div>
            </div>
        </div>
        <div class="aside">
            <div @click="gotoHome" class="logo">
                <svg-icon icon-class="logo"/>
                <div class="name">
                    <p>吉林省智慧农业</p>
                    <p>管理系统</p>
                </div>
            </div>
            <div @click="gotoBigScreen" class="in-big-screen"><p>进入统计大屏</p></div>
            <el-menu
                router
                :default-active="activeMenu"
                class="aside-list">
                <el-menu-item index="/dashboard">
                    <svg-icon class="default_svg" icon-class="aside1"/>
                    <svg-icon class="active_svg" icon-class="aside1_active"/>
                    <span class="title" slot="title">数据概览</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <svg-icon class="default_svg" icon-class="aside2"/>
                        <svg-icon class="active_svg" icon-class="aside2_active"/>
                        <span class="title">农场管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/farm/list">
                            <i class="point"></i>
                            <span class="sub-title">农场信息管理</span>
                        </el-menu-item>
                        <el-menu-item index="/farm/visual">
                            <i class="point"></i>
                            <span class="sub-title">可视农场</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <svg-icon class="default_svg" icon-class="aside3"/>
                        <svg-icon class="active_svg" icon-class="aside3_active"/>
                        <span class="title">销售管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/sale/tracing">
                            <i class="point"></i>
                            <span class="sub-title">溯源农品</span>
                        </el-menu-item>
                        <el-menu-item index="/sale/channel">
                            <i class="point"></i>
                            <span class="sub-title">渠道管理</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/pee/list">
                    <svg-icon class="default_svg" icon-class="aside4"/>
                    <svg-icon class="active_svg" icon-class="aside4_active"/>
                    <span class="title" slot="title">物环设备</span>
                </el-menu-item>
                <el-menu-item index="/base-station">
                    <svg-icon class="default_svg" icon-class="aside5"/>
                    <svg-icon class="active_svg" icon-class="aside5_active"/>
                    <span class="title" slot="title">基站管理</span>
                </el-menu-item>
                <el-menu-item index="/logistics">
                    <svg-icon class="default_svg" icon-class="aside6"/>
                    <svg-icon class="active_svg" icon-class="aside6_active"/>
                    <span class="title" slot="title">物流管理</span>
                </el-menu-item>
                <el-submenu index="7">
                    <template slot="title">
                        <svg-icon class="default_svg" icon-class="aside7"/>
                        <svg-icon class="active_svg" icon-class="aside7_active"/>
                        <span class="title">数据洞察</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/data/statistics">
                            <i class="point"></i>
                            <span class="sub-title">数据统计</span>
                        </el-menu-item>
                        <el-menu-item index="/data/alert">
                            <i class="point"></i>
                            <span class="sub-title">大数据预警</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div :style="contentStyleStr()" id="global-content" class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            minHeight: 400,
            top: 80,
            left: 280
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
        },
        breadcrumb() {
            const {meta} = this.$route;
            return meta.title;
        },
        subTitle() {
            let {id} = this.$route.query;
            switch (id) {
                case 1:
                    return '>自营电商数据统计';
                case 2:
                    return '>淘宝旗舰店数据统计';
                case 3:
                    return '>欧亚商都数据统计';
                default:
                    return '';
            }
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
        },
        gotoHome() {
            this.$router.push({name: 'Dashboard'});
        },
        gotoBigScreen() {
            window.location.href = 'http://dev.n.tianchimedia.com/visual-farm-third-edition';
        }
    }
};
</script>
<style lang="scss" scoped>
.app-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: 280px;
        right: 0;
        height: $headerHeight;
        background: $headerBg;
        color: $navText;
        .breadcrumb {
            margin-left: 20px;
            height: 28px;
            line-height: 28px;
            font-size: 28px;
            color: #fff;
            border-left: 6px solid $mainColor;
            padding-left: 15px;
        }
        .user-info {
            position: relative;
            align-items: center;
            width: 184px;
            height: $headerHeight;
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
                line-height: $headerHeight;
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
        width: 280px;
        background-image: linear-gradient(90deg, #152036 0%, #252F46 100%);
        .logo {
            display: flex;
            align-items: center;
            width: 280px;
            height: $headerHeight;
            text-align: left;
            padding: 0 6px;
            background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #000000 100%);
            cursor: pointer;
            .svg-icon {
                width: 42px;
                height: 52px;
                margin-right: 10px;
            }
            p:nth-of-type(1) {
                font-size: 18px;
                line-height: 24px;
                color: rgba(153,216,255,1);
            }
            p:nth-of-type(2) {
                font-size: 14px;
                line-height: 24px;
                color: rgba(153,216,255,1);
            }
        }
        .in-big-screen {
            position: relative;
            width: 250px;
            height: 110px;
            margin: 15px auto;
            background-image: url('../assets/img/inbigscreen.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            cursor: pointer;
            p {
                position: absolute;
                bottom: 4px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 16px;
                color: rgba(91,176,255,1);
            }
        }
    }
    .content {
        position: absolute;
        top: $headerHeight;
        left: 280px;
        right: 0px;
        bottom: 0px;
        overflow-y: scroll;
        background: $contentBg;
        min-width: 1160px;
        .content-wrapper {
            // padding: 20px 20px 20px 20px;
        }
    }
}
.aside-list {
    > .el-menu-item {
        margin: 10px 0;
    }
    > .el-submenu {
        margin: 10px 0;
    }
    .el-menu-item {
        display: flex;
        align-items: center;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #667799;
        padding-left: 24px !important;
        text-align: left;
        border-left: 2px solid transparent;
        background: transparent;
        .svg-icon {
            // fill: $navText;
            margin-right: 20px;
            width: 24px;
            height: 24px;
            &.default_svg {
                display: block;
            }
            &.active_svg {
                display: none;
            }
        }
        &:hover {
            background: #0A1730 !important;
        }
        &.is-active {
            // background: #0A1730 !important;
            border-left-color: $mainColor;
            .title {
                color: #fff;
            }
            .svg-icon {
                fill: $headerNavActiveText;
                &.default_svg {
                    display: none;
                }
                &.active_svg {
                    display: block;
                }
            }
        }
    }
}
</style>
<style lang="scss">
.aside {
    .aside-list {
        .el-menu {
            background-color: transparent;
        }
        .el-submenu {
            &.is-opened {
                .el-submenu__title {
                    background: #0A1730;
                }
                .el-menu-item {
                    background: #111D36;
                }
            }
            .el-submenu__title {
                display: flex;
                align-items: center;
                padding-left: 24px!important;
                text-align: left;
                span {
                    font-size: 16px;
                    color: #667799;
                }
                .el-submenu__icon-arrow {
                    display: block;
                    margin-left: 10px;
                }
                &:hover {
                    background: #0A1730 !important;
                }
                .svg-icon {
                    margin-right: 20px;
                    width: 24px;
                    height: 24px;
                    &.default_svg {
                        display: block;
                    }
                    &.active_svg {
                        display: none;
                    }
                }
            }
            .el-menu-item-group {
                .el-menu-item-group__title {
                    padding: 0;
                }
                .el-menu-item {
                    .point {
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        border: 1px solid #667799;
                        margin-left: 4px;
                    }
                    .sub-title {
                        margin-left: 30px;
                        font-size: 14px;
                    }
                    padding: 0;
                }
            }
            &.is-active {
                .el-menu-item {
                    &.is-active {
                        .sub-title {
                            color: #fff;
                        }
                        .point {
                            border-color: #fff;
                        }
                    }
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
