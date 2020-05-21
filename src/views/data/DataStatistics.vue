<template>
    <div class="data-statistics-container my-content-container">
        <bord2></bord2>
        <div class="bottom-field">
            <div class="bottom-left bottom-item">
                <div @click="gotoDataDetail(0)" class="header">
                    <svg-icon class-name="svg-one" icon-class="ds_icon1"/>
                    <span class="title">地块统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-left-content bottom-item-content">
                    <div class="title-field">
                        <p class="title">地块总面积</p>
                        <p class="count">
                            1357<i>公顷</i>
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
                            :data="chartData1">
                        </ve-pie>
                    </div>
                </div>
            </div>
            <div class="bottom-right bottom-item">
                <div @click="gotoDataDetail(1)" class="header">
                    <svg-icon class-name="svg-one" icon-class="ds_icon2"/>
                    <span class="title">从业人员统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-right-content bottom-item-content">
                    <div class="title-field">
                        <p class="title">从业人员总计</p>
                        <p class="count">
                            698<i>人</i>
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
                            :extend="peiExtend"
                            :data="chartData2">
                        </ve-pie>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-field">
            <div class="bottom-left bottom-item">
                <div @click="gotoDataDetail(2)" class="header">
                    <svg-icon class-name="svg-one" icon-class="ds_icon3"/>
                    <span class="title">农作物种植统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-left-content bottom-item-content">
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
                            :data="chartData3">
                        </ve-pie>
                    </div>
                </div>
            </div>
            <div class="bottom-right bottom-item">
                <div @click="gotoDataDetail(3)" class="header">
                    <svg-icon class-name="svg-one" icon-class="ds_icon4"/>
                    <span class="title">2020年投入品统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-right-content bottom-item-content">
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
                            :extend="peiExtend"
                            :data="chartData4">
                        </ve-pie>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-field">
            <div class="bottom-left bottom-item">
                <div @click="gotoDataDetail(4)" class="header">
                    <svg-icon class-name="svg-one" icon-class="ds_icon5"/>
                    <span class="title">2020年销售额统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-left-content bottom-item-content">
                    <div class="title-field">
                        <p class="title">销售额</p>
                        <p class="count">
                            608<i>万元</i>
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
                            :data="chartData5">
                        </ve-pie>
                    </div>
                </div>
            </div>
            <div class="bottom-right bottom-item">
                <div @click="gotoDataDetail(5)" class="header">
                    <svg-icon class-name="svg-one" icon-class="ds_icon6"/>
                    <span class="title">农业社会化服务统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-right-content bottom-item-content">
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
                            :extend="peiExtend"
                            :data="chartData6">
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
            color: ["#008FC4", "#0062C4", "#74B8C2", "#00A2DE", "#50BEE7"],
            'series.0.center': ['50%', '50%'],
            'series.0.radius': ['0', '80%']
        };

        return {
            chartData1: {
                columns: ['类型', '数据'],
                rows: [
                    { '类型': '水田', '数据': 50 },
                    { '类型': '旱田', '数据': 10 },
                    { '类型': '水浇地', '数据': 35 },
                    { '类型': '宅基地', '数据': 5 }
                ]
            },
            chartData2: {
                columns: ['类型', '数据'],
                rows: [
                    { '类型': '经营人员', '数据': 75 },
                    { '类型': '种植人员', '数据': 25 }
                ]
            },
            chartData3: {
                columns: ['类型', '数据'],
                rows: [
                    { '类型': '水稻', '数据': 30 },
                    { '类型': '杂粮', '数据': 40 },
                    { '类型': '果蔬', '数据': 10 },
                    { '类型': '菌类', '数据': 10 },
                    { '类型': '其他', '数据': 10 }
                ]
            },
            chartData4: {
                columns: ['类型', '数据'],
                rows: [
                    { '类型': '有机肥', '数据': 40 },
                    { '类型': '无机肥', '数据': 20 },
                    { '类型': '农药', '数据': 20 },
                    { '类型': '其他', '数据': 20 }
                ]
            },
            chartData5: {
                columns: ['类型', '数据'],
                rows: [
                    { '类型': '自营电商', '数据': 50 },
                    { '类型': '合作电商', '数据': 20 },
                    { '类型': '线下渠道', '数据': 30 }
                ]
            },
            chartData6: {
                columns: ['类型', '数据'],
                rows: [
                    { '类型': '服务中小农户', '数据': 60 },
                    { '类型': '服务其他农户', '数据': 40 }
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
        height: 332px;
        margin-top: 20px;
        .bottom-left {
            margin-right: 20px;
        }
        .bottom-item {
            .bottom-item-content {
                .legen-field {
                    .legen-list {
                        .legen-item {
                            .text1 {
                                width: 80px;
                            }
                            .text2 {
                                width: 20px;
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
            }
        }
        .bottom-item {
            display: flex;
            flex-direction: column;
            flex: 1;
            border-radius: 4px;
            background-color: #252D3F;
            .header {
                display: flex;
                align-items: center;
                height: 48px;
                padding: 0 20px;
                border-bottom: 1px solid #3A4763;
                cursor: pointer;
                .svg-one {
                    width: 32px;
                    height: 32px;
                }
                .title {
                    font-size: 16px;
                    margin: 0 18px;
                }
                .arrow {
                    width: 11px;
                    height: 12px;
                }
            }
            .bottom-item-content {
                position: relative;
                flex: 1;
                height: 282px;
                .title-field {
                    position: absolute;
                    top: 40px;
                    left: 36px;
                    .title {
                        font-size: 16px;
                        color: rgba(163,208,253,1);
                    }
                    .count {
                        font-size: 38px;
                        color: rgba(91,173,255,1);
                        i {
                            font-size: 16px;
                        }
                    }
                }
                .legen-field {
                    position: absolute;
                    bottom: 42px;
                    left: 36px;;
                    .legen-list {
                        display: flex;
                        flex-direction: column;
                        .legen-item {
                            display: flex;
                            align-items: center;
                            font-size: 12px;
                            color: rgba(102,119,153,1);
                            .text1 {
                                margin-left: 10px;
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
                        }
                    }
                }
                .echarts-field {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    right: 60px;
                    top: 80px;
                    width: 140px;
                    height: 140px;
                }
            }
        }
    }
}
</style>
