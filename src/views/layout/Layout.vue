<template>
    <div class="app-container">
        <div class="header clearfix">
            <ul class="nav-list clearfix float-left">
                <!--
                <li v-for="(item, index) in navList" :key="index"
                    :class="['nav-item', active === index ? 'active' : '']"
                    @click="changeActive(index)">
                    {{item}}
                </li>
                -->
            </ul>
            <!--
            <div :class="[active === navList.length - 1 ? 'active' : '']"
                class="user-info float-right clearfix">
                <svg-icon icon-class="avatar_icon"/>
                <label @click="changeActive(navList.length - 1)">{{user.name}}</label>
                <div class="logout" @click="logout">
                    <svg-icon icon-class="logout"/>
                </div>
            </div>
            -->
        </div>
        <div class="aside">
            <div class="logo">
                <svg-icon icon-class="example"/>
            </div>
            <ul class="aside-list">
                <li v-for="(asides, index) in asideList.filter((item, _index) => _index === active)" :key="index" class="aside-item">
                    <el-menu
                        :default-active="defaultActive"
                        class="el-menu-vertical-demo"
                        background-color="transparent"
                        text-color="#6a707c"
                        active-text-color="#fff">
                        <el-menu-item
                            v-for="(item, innerIndex) in asides"
                            :key="innerIndex"
                            :index="item.uri"
                            :class="[defaultActive === item.uri ? 'is-active' : '']"
                            @click="menuChangeHandler(item)">
                            <svg-icon icon-class="example"/>
                            <span slot="title">{{item.text}}</span>
                        </el-menu-item>
                    </el-menu>
                </li>
            </ul>
        </div>
        <div :style="contentStyleStr()" id="global-content" class="content">
            <div class="content-wrapper" :style="`min-height: ${minHeight}px`">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import _ from 'lodash';
import constants from '@/util/constants';

export default {
    data() {
        return {
            layoutId: '',
            active: 0,
            defaultActive: '',
            minHeight: 400,
            top: 60,
            left: 200
        };
    },
    computed: {
        ...mapGetters({
            user: 'common/user'
        }),
        navList() {
            if (this.user.role === 'BACKEND') {
                return constants.NAV_LIST;
            } else {
                return constants.ORG_NAV_LIST;
            }
        },
        asideList() {
            if (this.user.role === 'BACKEND') {
                return constants.ASIDE_LIST;
            } else {
                return constants.ORG_ASIDE_LIST;
            }
        }
    },
    mounted() {
        let content = document.querySelector('.content');
        content.addEventListener('scroll', this.toggleFixedBtnContainer.bind(this), false);
    },
    async created() {
        try {
            await this.getUserByToken();
            await this.$nextTick();

            let {active, activePath} = this.getActivePath();
            this.active = active;
            this.defaultActive = activePath;
            this.setMinHeight();

            window.addEventListener('resize', this.setMinHeight, false);
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        ...mapActions({
            getUserByToken: 'common/getUserByToken'
        }),
        contentStyleStr() {
            return `top: ${this.top}px;left: ${this.left}px;`;
        },
        getActivePath() {
            let {path} = this.$route;
            let leftPart = path.split('/')[1];
            let active = 0;
            let activePath = '';
            for (let i = 0; i < this.asideList.length; i++) {
                for (let j = 0; j < this.asideList[i].length; j++) {
                    let {uri} = this.asideList[i][j];
                    if (leftPart === uri.split('/')[1]) {
                        active = i;
                        activePath = uri;
                        break;
                    }
                }
            }

            return {active, activePath};
        },
        changeActive(index) {
            if (index === this.active) {
                window.location.reload();
            } else {
                this.active = index;
                let newPath = this.asideList[this.active][0].uri;
                this.defaultActive = newPath;
                this.$router.push(newPath);
            }
        },
        setMinHeight() {
            let minHeight = window.innerHeight - 60;
            this.minHeight = minHeight;
        },
        logout() {
            localStorage.removeItem('token');
            this.$router.push({name: 'Login'});
        },
        toggleFixedBtnContainer() {
            let content = document.querySelector('.content');
            let fixedBtnContainer = document.querySelector('.fixed-btn-container');
            let isBottom = content.scrollHeight - content.scrollTop === content.clientHeight;
            if (fixedBtnContainer) {
                if (isBottom) {
                    fixedBtnContainer.style.background = 'transparent';
                } else {
                    fixedBtnContainer.style.background = '#293550';
                }
            }
        },
        menuChangeHandler(pathObj) {
            let path = _.get(pathObj, 'uri');
            if (path === '/page-layout') {
                path = `${path}/${this.layoutId}`;
            }
            this.defaultActive = path;
            this.$router.push({path});
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

    .el-menu {
        border-right: none;
        background: transparent;
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
