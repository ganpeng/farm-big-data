<template>
    <div class="data-statistics-container my-content-container">
        <bord2></bord2>
        <div class="bottom-field">
            <div class="bottom-left">
                <div @click="gotoDataDetail(0)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon6"/>
                    <span class="title">地块统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-left-content">
                    <div class="title-field">
                        <p class="title">地块总面积</p>
                        <p class="count">
                            1357<i>个</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">水田</span>
                                <span class="text3">50%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">旱田</span>
                                <span class="text3">10%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">水浇地</span>
                                <span class="text3">35%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">宅基地</span>
                                <span class="text3">5%</span>
                            </li>
                        </ul>
                    </div>
                    <div class="echarts-field">
                        <ve-pie
                            width="260px"
                            height="260px"
                            :tooltip-visible="false"
                            :legend-visible="false"
                            :settings="chartSettings"
                            :extend="peiExtend"
                            :data="chartData2">
                        </ve-pie>
                    </div>
                </div>
            </div>
            <div class="bottom-right">
                <div @click="gotoDataDetail(1)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon7"/>
                    <span class="title">从业人员统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-right-content">
                    <div class="title-field">
                        <p class="title">从业人员总计</p>
                        <p class="count">
                            2000<i>人</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">经营人员</span>
                                <span class="text3">75%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">种植人员</span>
                                <span class="text3">25%</span>
                            </li>
                        </ul>
                    </div>
                    <div class="echarts-field">
                        <ve-pie
                            width="260px"
                            height="260px"
                            :tooltip-visible="false"
                            :legend-visible="false"
                            :settings="chartSettings"
                            :extend="pei2Extend"
                            :data="chartData3">
                        </ve-pie>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-field">
            <div class="bottom-left">
                <div @click="gotoDataDetail(2)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon6"/>
                    <span class="title">农作物种植统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-left-content">
                    <div class="title-field">
                        <p class="title">种植总面积</p>
                        <p class="count">
                            1000<i>公顷</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">水稻</span>
                                <span class="text3">30%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">杂粮</span>
                                <span class="text3">40%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">果蔬</span>
                                <span class="text3">10%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">菌类</span>
                                <span class="text3">10%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">其他</span>
                                <span class="text3">10%</span>
                            </li>
                        </ul>
                    </div>
                    <div class="echarts-field">
                        <ve-pie
                            width="260px"
                            height="260px"
                            :tooltip-visible="false"
                            :legend-visible="false"
                            :settings="chartSettings"
                            :extend="peiExtend"
                            :data="chartData2">
                        </ve-pie>
                    </div>
                </div>
            </div>
            <div class="bottom-right">
                <div @click="gotoDataDetail(3)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon7"/>
                    <span class="title">2020年投入品统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-right-content">
                    <div class="title-field">
                        <p class="title">投入品总计</p>
                        <p class="count">
                            56243<i>吨</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">有机肥</span>
                                <span class="text3">40%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">无机肥</span>
                                <span class="text3">20%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">农药</span>
                                <span class="text3">20%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">其他</span>
                                <span class="text3">20%</span>
                            </li>
                        </ul>
                    </div>
                    <div class="echarts-field">
                        <ve-pie
                            width="260px"
                            height="260px"
                            :tooltip-visible="false"
                            :legend-visible="false"
                            :settings="chartSettings"
                            :extend="pei2Extend"
                            :data="chartData3">
                        </ve-pie>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-field">
            <div class="bottom-left">
                <div @click="gotoDataDetail(4)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon6"/>
                    <span class="title">2020年销售额统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-left-content">
                    <div class="title-field">
                        <p class="title">销售额</p>
                        <p class="count">
                            45608<i>万元</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">自营电商</span>
                                <span class="text3">50%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">合作电商</span>
                                <span class="text3">20%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">线下渠道</span>
                                <span class="text3">30%</span>
                            </li>
                        </ul>
                    </div>
                    <div class="echarts-field">
                        <ve-pie
                            width="260px"
                            height="260px"
                            :tooltip-visible="false"
                            :legend-visible="false"
                            :settings="chartSettings"
                            :extend="peiExtend"
                            :data="chartData2">
                        </ve-pie>
                    </div>
                </div>
            </div>
            <div class="bottom-right">
                <div @click="gotoDataDetail(5)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon7"/>
                    <span class="title">农业社会化服务统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-right-content">
                    <div class="title-field">
                        <p class="title">服务营收</p>
                        <p class="count">
                            56.8<i>万元</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">服务中小农户</span>
                                <span class="text3">60%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">服务其他农户</span>
                                <span class="text3">40%</span>
                            </li>
                        </ul>
                    </div>
                    <div class="echarts-field">
                        <ve-pie
                            width="260px"
                            height="260px"
                            :tooltip-visible="false"
                            :legend-visible="false"
                            :settings="chartSettings"
                            :extend="pei2Extend"
                            :data="chartData3">
                        </ve-pie>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bord2 from './Bord2';
export default {
    name: 'DataStatistics',
    components: {Bord2},
    data() {
        this.chartSettings = {
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        };
        this.peiExtend = {
            color: ["#74B8C2", "#008FC4", "#0062C4"],
            'series.0.center': ['50%', '50%'],
            'series.0.radius': ['0', '80%']
        };

        this.pei2Extend = {
            color: ["#38A7E4", "#00C1EB", "#306BA7", "#00A2DE", "#50BEE7"],
            'series.0.center': ['50%', '50%'],
            'series.0.radius': ['0', '80%']
        };

        return {
            chartData2: {
                columns: ['日期', '访问用户'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393 },
                    { '日期': '1/2', '访问用户': 3530 },
                    { '日期': '1/3', '访问用户': 2923 },
                ]
            },
            chartData3: {
                columns: ['类型', '值'],
                rows: [
                    { '类型': '水质', '值': 100 },
                    { '类型': '土壤', '值': 100 },
                    { '类型': '气象', '值': 50 },
                    { '类型': '摄像头', '值': 50 },
                    { '类型': '风速', '值': 200 },
                ]
            }
        };
    },
    methods: {
        gotoDataDetail(index) {
            this.$router.push({ name: 'DataStatisticsDetail', query: {index} });
        }
    }
};
</script>
<style lang="scss" scoped>
.data-statistics-container {
    .bottom-field {
        display: flex;
        height: 443px;
        margin-top: 20px;
        .header {
            display: flex;
            align-items: center;
            height: 64px;
            padding: 0 20px;
            border-bottom: 1px solid #3A4763;
            cursor: pointer;
            .svg-one {
                width: 43px;
                height: 43px;
            }
            .title {
                font-size:21px;
                margin: 0 24px;
            }
            .arrow {
                width: 15px;
                height: 16px;
            }
        }
        .bottom-left {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-right: 20px;
            border-radius: 4px;
            background-color: #252D3F;
            .bottom-left-content {
                position: relative;
                flex: 1;
                height: 376px;
                .title-field {
                    position: absolute;
                    top: 60px;
                    left: 48px;
                    .title {
                        font-size: 21px;
                        color: rgba(163,208,253,1);
                    }
                    .count {
                        font-size: 51px;
                        color: rgba(91,173,255,1);
                        i {
                            font-size:21px;
                        }
                    }
                }
                .legen-field {
                    position: absolute;
                    bottom: 15px;
                    left: 48px;;
                    .legen-list {
                        display: flex;
                        flex-direction: column;
                        .legen-item {
                            display: flex;
                            align-items: center;
                            font-size: 16px;
                            color: rgba(102,119,153,1);
                            .text1 {
                                width: 70px;
                                margin: 0 30px 0 10px;
                            }
                            .text2 {
                                margin: 0 30px 0 20px;
                            }
                            .icon {
                                width: 13px;
                                height: 13px;
                            }
                            &:nth-of-type(1) {
                                .icon {
                                    background-color: #008FC4;
                                }
                            }
                            &:nth-of-type(2) {
                                .icon {
                                    background-color: #0062C4;
                                }
                            }
                            &:nth-of-type(3) {
                                .icon {
                                    background-color: #74B8C2;
                                }
                            }
                            &:nth-of-type(4) {
                                .icon {
                                    background-color: #00A2DE;
                                }
                            }
                            &:nth-of-type(5) {
                                .icon {
                                    background-color: #50BEE7;
                                }
                            }
                        }
                    }
                }
                .echarts-field {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    right: 40px;
                    top: 60px;
                    width: 240px;
                    height: 240px;
                }
            }
        }
        .bottom-right {
            display: flex;
            flex-direction: column;
            flex: 1;
            border-radius: 4px;
            background-color: #252D3F;
            .bottom-right-content {
                position: relative;
                flex: 1;
                height: 376px;
                .title-field {
                    position: absolute;
                    top: 60px;
                    left: 48px;
                    .title {
                        font-size: 21px;
                        color: rgba(163,208,253,1);
                    }
                    .count {
                        font-size: 51px;
                        color: rgba(91,173,255,1);
                        i {
                            font-size:21px;
                        }
                    }
                }
                .legen-field {
                    position: absolute;
                    bottom: 15px;
                    left: 48px;;
                    .legen-list {
                        display: flex;
                        flex-direction: column;
                        .legen-item {
                            display: flex;
                            align-items: center;
                            font-size: 16px;
                            color: rgba(102,119,153,1);
                            .text1 {
                                width: 70px;
                                margin: 0 30px 0 10px;
                            }
                            .text2 {
                                margin: 0 30px 0 20px;
                            }
                            .icon {
                                width: 13px;
                                height: 13px;
                            }
                            &:nth-of-type(1) {
                                .icon {
                                    background-color: #38A7E4;
                                }
                            }
                            &:nth-of-type(2) {
                                .icon {
                                    background-color: #00C1EB;
                                }
                            }
                            &:nth-of-type(3) {
                                .icon {
                                    background-color: #306BA7;
                                }
                            }
                            &:nth-of-type(4) {
                                .icon {
                                    background-color: #00A2DE;
                                }
                            }
                            &:nth-of-type(5) {
                                .icon {
                                    background-color: #50BEE7;
                                }
                            }
                        }
                    }
                }
                .echarts-field {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    right: 40px;
                    top: 60px;
                    width: 240px;
                    height: 240px;
                }
            }
        }
    }
}
</style>