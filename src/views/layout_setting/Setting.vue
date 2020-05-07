<template>
    <div class="layout-test-container">
        <!--
        <h2 class="content-title">类别推荐</h2>
        <div class="seperator-line"></div>
        <div class="type-recommend clearfix">
            <el-col :span="10">
                <div class="clearfix">
                    <el-button @click="editTypeRecommendHandler" class="btn-style-five float-right">
                        <svg-icon icon-class="edit"/>
                    </el-button>
                </div>
                <ul class="type-list">
                    <li v-for="(typeRecommend, index) in typeRecommendList" :key="index" class="type-item">
                        <img class="type-image" src="" alt="">
                        <span class="type-name">{{typeRecommend.name}}</span>
                    </li>
                </ul>
            </el-col>
        </div>
        -->
        <h2 class="content-title">每日推荐</h2>
        <div class="seperator-line"></div>
        <div class="daily-recommend clearfix">
            <el-col :span="14">
                <div class="clearfix">
                    <el-button @click="editDailyRecommendHandler" class="btn-style-five float-right">
                        <svg-icon icon-class="edit"/>
                    </el-button>
                </div>
                <div class="wrapper" ref="wrapperBox">
                    <ul class="daily-list clearfix content">
                        <li v-for="(dailyRecommend, index) in dailyRecommendList" :key="index" class="daily-item">
                            <img class="daily-image" :src="imageUrl(dailyRecommend.imageUrl)" alt="">
                            <span v-if="getDisplayTestCount(dailyRecommend)" class="daily-count">{{getDisplayTestCount(dailyRecommend)}}人评测</span>
                            <span class="daily-name">{{getName(dailyRecommend)}}</span>
                        </li>
                    </ul>
                </div>
            </el-col>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import _ from 'lodash';
import BScroll from 'better-scroll';
export default {
    name: 'Setting',
    async created() {
        try {
            let res = await this.getRecommendList();
            if (res && res.errorCode === 0) {
                await this.$nextTick();
                this.setDailyRecommendListWidth();
                new BScroll(this.$refs.wrapperBox, {  // eslint-disable-line
                    click: true,
                    scrollX: true,
                    eventPassthrough: 'vertical'
                });
            }
        } catch (err) {
            console.log(err);
        }
    },
    computed: {
        ...mapGetters({
            typeRecommendList: 'setting/typeRecommendList',
            dailyRecommendList: 'setting/dailyRecommendList'
        }),
        getDisplayTestCount() {
            return (dailyRecommend) => {
                return _.get(dailyRecommend, 'questionSheet.displayTestCount');
            }
        },
        imageUrl() {
            return (url) => {
                return `${process.env.VUE_APP_IMAGE_ROOT}${url}`;
            };
        },
        getName() {
            return (dailyRecommend) => {
                return _.get(dailyRecommend, 'questionSheet.name');
            };
        }
    },
    methods: {
        ...mapActions({
            getRecommendList: 'setting/getRecommendList'
        }),
        editDailyRecommendHandler() {
            let routeData = this.$router.resolve({
                name: 'DailyRecommendEdit'
            });
            window.open(routeData.href, '_blank');
        },
        setDailyRecommendListWidth() {
            let columnsItem = document.querySelectorAll('.daily-item');
            let columnsList = document.querySelector('.daily-list');
            let width = Array.from(columnsItem).reduce((res, curr) => {
                res = res + curr.offsetWidth + 10;
                return res;
            }, 0);
            columnsList.style.width = `${width + 20}px`;
        },
    }
}
</script>
<style lang="scss" scoped>
.type-recommend, .daily-recommend {
    padding: 20px 0;
}
.type-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    .type-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        margin-bottom: 10px;
        .type-image {
            display: block;
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
            border-radius: 50%;
            background-color: #fff;
        }
    }
}
.wrapper {
    overflow-x: scroll;
    .daily-list {
        // width: 100%;
        margin-top: 20px;
        .daily-item {
            position: relative;
            float: left;
            width: 200px;
            // margin-bottom: 10px;
            cursor: pointer;
            padding-bottom: 30px;
            margin-right: 10px;
            .daily-image {
                display: block;
                width: 100%;
                height: 100px;
                margin-bottom: 10px;
                background-color: #fff;
            }
            .daily-count {
                position: absolute;
                bottom: 40px;
                left: 10px;
                color: #fff;
            }
            .daily-name {
                position: absolute;
                bottom: 0px;
                left: 0px;
                width: 100%;
                color: #fff;
                font-size: 14px;
                line-height: 14px;
            }
        }
    }
}

</style>
