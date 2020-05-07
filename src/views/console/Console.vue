<template>
    <div class="console-container">
        <h2 class="content-title clearfix">快捷操作</h2>
        <ul class="short-cut-list">
            <li @click="gotoBlankPage(item.name)" v-for="(item, index) in shortCutList" :key="index" class="short-cut-item">
                <div class="text-wrapper" v-html="item.title">
                </div>
                <svg-icon :icon-class="item.iconClass"></svg-icon>
            </li>
        </ul>
        <div class="footer">
            <div class="logo">
                <svg-icon icon-class="aside_logo"></svg-icon>
                <span>后台操作系统</span>
            </div>
            <div class="info">
                <p class="address">北京朝阳区东三环中路9号 3302/3304</p>
                <p class="name">&copy;2018 北京天驰传媒股份有限公司 保留所有权</p>
                <p class="copy-address">All Rights Reserved.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Console',
    data() {
        return {
            shortCutList: [
                {
                    title: '新建机构',
                    name: 'OrgList',
                    iconClass: 'shortcut_upload_video'
                },
                {
                    title: '新建量表',
                    name: 'ScaleCreate',
                    iconClass: 'shortcut_programme'
                },
                {
                    title: '新建任务',
                    name: 'TaskCreate',
                    iconClass: 'shortcut_person'
                }
            ]
        };
    },
    methods: {
        gotoBlankPage(name) {
            let routeData = this.$router.resolve({ name });
            window.open(routeData.href, '_blank');
        }
    }
};
</script>
<style lang="scss" scoped>
.console-container {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 50px;
    background-image: url('../../assets/img/worktop_bg.png');
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
    .el-dropdown {
        .el-button {
            width: 140px;
            font-size: 16px;
        }
    }
}

.short-cut-list {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin-top: 40px;
    .short-cut-item {
        position: relative;
        width: 280px;
        height: 70px;
        background: #2A3040;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 44px;
        cursor: pointer;
        font-size: 24px;
        color: #A8ABB3;
        .text-wrapper {
            position: absolute;
            bottom: 4px;
            right: 10px;
            span.haha {
                display: block;
                font-size: 18px;
            }
        }
        .svg-icon {
            position: absolute;
            left: 30px;
            top: -26px;
            fill: #3E495E;
            width: 56px;
            height: 80px;
        }
        &:hover {
            background: #252D3F;
            .text-wrapper {
                color: #4A90E2;
            }
            .svg-icon {
                fill: #4A90E2 ;
            }
        }
    }
}
.footer {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    left: 200px;
    right: 0;
    height: 92px;
    margin: 0 20px;
    border-top: 1px solid #252D3F;
    .logo {
        height: 38px;
        opacity: 0.3;
        .svg-icon {
            width: 160px;
            height: 38px;
        }
        span {
            font-size: 12px;
            color: #6F7480;
        }
    }
    .info {
        font-size: 12px;
        line-height: 18px;
        color: #6F7480;
        text-align: right;
    }
}
</style>
