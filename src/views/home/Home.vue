<template>
    <div class="home-container my-content-container">
        <div class="top-field">
            <div class="my-bord-status-two">
                <div class="status-item terminal-status-item total">
                    <div class="left">
                        <div class="line"></div>
                        <div class="item_con">
                            <p class="name-one">销售渠道</p>
                            <p class="name-two">Sale Platform</p>
                        </div>
                    </div>
                    <div class="count">
                        <svg-icon icon-class="home_icon1"/>
                        <span>3</span>
                    </div>
                </div>
                <div class="status-item terminal-status-item total">
                    <div class="left">
                        <div class="line"></div>
                        <div class="item_con">
                            <p class="name-one">溯源农品</p>
                            <p class="name-two">Products</p>
                        </div>
                    </div>
                    <div class="count">
                        <svg-icon icon-class="home_icon2"/>
                        <span>4</span>
                    </div>
                </div>
                <div class="status-item terminal-status-item total">
                    <div class="left">
                        <div class="line"></div>
                        <div class="item_con">
                            <p class="name-one">运输车辆</p>
                            <p class="name-two">Trucks</p>
                        </div>
                    </div>
                    <div class="count">
                        <svg-icon icon-class="home_icon3"/>
                        <span>110</span>
                    </div>
                </div>
                <div class="status-item terminal-status-item total">
                    <div class="left">
                        <div class="line"></div>
                        <div class="item_con">
                            <p class="name-one">5G基站</p>
                            <p class="name-two">5G Towers</p>
                        </div>
                    </div>
                    <div class="count">
                        <svg-icon icon-class="home_icon4"/>
                        <span>24</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="middle-field">
            <div class="header">
                <div @click="gotoPage(1)" class="header-left">
                    <svg-icon class-name="svg-one" icon-class="home_icon5"/>
                    <span class="title">预警趋势</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="header-right">
                    <ul class="time-list">
                        <li @click="changeTime(index)" v-for="(item, index) in times" :key="index"
                            :class="['time-item', item.active && 'active']">
                            {{item.title}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="middle-content">
                <ve-line
                    height="280px"
                    :tooltip-visible="false"
                    :legend-visible="false"
                    :extend="chartExtend"
                    :data="lineData">
                </ve-line>
                <ul class="legen-list">
                    <li class="legen-item">
                        <span class="icon"></span>
                        <span class="text">气象灾害预警</span>
                    </li>
                    <li class="legen-item">
                        <span class="icon"></span>
                        <span class="text">虫灾预警</span>
                    </li>
                    <li class="legen-item">
                        <span class="icon"></span>
                        <span class="text">农产品价格波动</span>
                    </li>
                    <li class="legen-item">
                        <span class="icon"></span>
                        <span class="text">农产品产量异动</span>
                    </li>
                    <li class="legen-item">
                        <span class="icon"></span>
                        <span class="text">种植适合度</span>
                    </li>
                    <li class="legen-item">
                        <span class="icon"></span>
                        <span class="text">设备异常</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom-field">
            <div class="bottom-left bottom-item">
                <div @click="gotoPage(2)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon6"/>
                    <span class="title">农场统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-left-content bottom-item-content">
                    <div class="title-field">
                        <p class="title">农场总数</p>
                        <p class="count">
                            24<i>个</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list legen-list-one">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">农民专业合作社</span>
                                <span class="text2">4</span>
                                <span class="text3">17%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">个体企业</span>
                                <span class="text2">19</span>
                                <span class="text3">79%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">国有企业</span>
                                <span class="text2">1</span>
                                <span class="text3">4%</span>
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
            <div class="bottom-right bottom-item">
                <div @click="gotoPage(3)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon7"/>
                    <span class="title">设备统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-right-content bottom-item-content">
                    <div class="title-field">
                        <p class="title">设备总数</p>
                        <p class="count">
                            22<i>个</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list legen-list-two">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">气象传感器</span>
                                <span class="text2">1</span>
                                <span class="text3">2.6%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">虫情传感器</span>
                                <span class="text2">1</span>
                                <span class="text3">2.6%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">土壤传感器</span>
                                <span class="text2">1</span>
                                <span class="text3">2.6%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">水质传感器</span>
                                <span class="text2">1</span>
                                <span class="text3">2.6%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">球机摄像头</span>
                                <span class="text2">1</span>
                                <span class="text3">2.6%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">枪机摄像头</span>
                                <span class="text2">17</span>
                                <span class="text3">77%</span>
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
            <div class="bottom-left bottom-item">
                <div @click="gotoPage(4)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon10"/>
                    <span class="title">基站统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-left-content bottom-item-content">
                    <div class="title-field">
                        <p class="title">基站总数</p>
                        <p class="count">
                            24<i>个</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list legen-list-three">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">宏基站</span>
                                <span class="text2">4</span>
                                <span class="text3">17%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">微基站</span>
                                <span class="text2">20</span>
                                <span class="text3">83%</span>
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
            <div class="bottom-right bottom-item">
                <div @click="gotoPage(5)" class="header">
                    <svg-icon class-name="svg-one" icon-class="home_icon9"/>
                    <span class="title">物流统计</span>
                    <svg-icon class-name="arrow" icon-class="home_icon8"/>
                </div>
                <div class="bottom-right-content bottom-item-content">
                    <div class="title-field">
                        <p class="title">车辆总数</p>
                        <p class="count">
                            600<i>辆</i>
                        </p>
                    </div>
                    <div class="legen-field">
                        <ul class="legen-list">
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">小型卡车</span>
                                <span class="text2">100</span>
                                <span class="text3">15%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">中型卡车</span>
                                <span class="text2">100</span>
                                <span class="text3">15%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">重型卡车</span>
                                <span class="text2">50</span>
                                <span class="text3">10%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">厢式货车</span>
                                <span class="text2">200</span>
                                <span class="text3">31%</span>
                            </li>
                            <li class="legen-item">
                                <span class="icon"></span>
                                <span class="text1">电动三轮车</span>
                                <span class="text2">150</span>
                                <span class="text3">29%</span>
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
                            :data="chartData5">
                        </ve-pie>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p class="name">吉林省智慧农业管理系统</p>
            <p class="copyright">2020 © 吉林省智慧农业管理系统 版权所有</p>
        </div>
    </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: 'Home',
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
            color: ["#74B8C2", "#008FC4", "#0062C4", '#50BEE7'],
            'series.0.center': ['50%', '50%'],
            'series.0.radius': ['0', '80%']
        };
        this.pei2Extend = {
            color: ["#38A7E4", "#00C1EB", "#306BA7", "#00A2DE", "#50BEE7", "#008FC4"],
            'series.0.center': ['50%', '50%'],
            'series.0.radius': ['0', '80%']
        };
        this.chartExtend = {
            color: ['#DD5567', '#FCB268', '#E3C97B', '#85B8FC', '#B8E986', '#BA69CB'],
            grid: {
                top: 40,
                bottom: 12
            },
            series: {
                type: 'line'
                // smooth: 0
            },
            'xAxis.0.axisLabel': {color: '#667799'},
            'yAxis.0.axisLabel': {color: '#667799'},
            'yAxis.0.splitLine': {
                lineStyle: {
                    color: '#3E495E'
                }
            }
        };
        return {
            lineData: {},
            chartData: {
                columns: ['日期', '气象灾害预警', '虫灾预警', '农产品价格波动', '农产品产量异动', '种植适合度', '设备异常'],
                rows: [
                    { '日期': '00:00', '气象灾害预警': 4, '虫灾预警': 1, '农产品价格波动': 3, '农产品产量异动': 2, '种植适合度': 3, '设备异常': 2},
                    { '日期': '04:00', '气象灾害预警': 3, '虫灾预警': 2, '农产品价格波动': 5, '农产品产量异动': 3, '种植适合度': 1, '设备异常': 4},
                    { '日期': '08:00', '气象灾害预警': 1, '虫灾预警': 4, '农产品价格波动': 2, '农产品产量异动': 1, '种植适合度': 2, '设备异常': 1},
                    { '日期': '12:00', '气象灾害预警': 3, '虫灾预警': 2, '农产品价格波动': 1, '农产品产量异动': 4, '种植适合度': 4, '设备异常': 3},
                    { '日期': '16:00', '气象灾害预警': 2, '虫灾预警': 4, '农产品价格波动': 5, '农产品产量异动': 4, '种植适合度': 1, '设备异常': 4},
                    { '日期': '20:00', '气象灾害预警': 1, '虫灾预警': 3, '农产品价格波动': 3, '农产品产量异动': 1, '种植适合度': 2, '设备异常': 2},
                ]
            },
            chartDataTwo: {
                columns: ['日期', '气象灾害预警', '虫灾预警', '农产品价格波动', '农产品产量异动', '种植适合度', '设备异常'],
                rows: [
                    { '日期': '00:00', '气象灾害预警': 4, '虫灾预警': 2, '农产品价格波动': 3, '农产品产量异动': 4, '种植适合度': 3, '设备异常': 3},
                    { '日期': '08:00', '气象灾害预警': 1, '虫灾预警': 1, '农产品价格波动': 4, '农产品产量异动': 3, '种植适合度': 2, '设备异常': 2},
                    { '日期': '16:00', '气象灾害预警': 3, '虫灾预警': 3, '农产品价格波动': 2, '农产品产量异动': 1, '种植适合度': 4, '设备异常': 3},
                    { '日期': '24:00', '气象灾害预警': 3, '虫灾预警': 2, '农产品价格波动': 1, '农产品产量异动': 2, '种植适合度': 2, '设备异常': 2},
                    { '日期': '32:00', '气象灾害预警': 4, '虫灾预警': 4, '农产品价格波动': 1, '农产品产量异动': 2, '种植适合度': 5, '设备异常': 1},
                    { '日期': '40:00', '气象灾害预警': 1, '虫灾预警': 2, '农产品价格波动': 2, '农产品产量异动': 1, '种植适合度': 1, '设备异常': 4},
                ]
            },
            chartDataThree: {
                columns: ['日期', '气象灾害预警', '虫灾预警', '农产品价格波动', '农产品产量异动', '种植适合度', '设备异常'],
                rows: [
                    { '日期': '00:00', '气象灾害预警': 4, '虫灾预警': 1, '农产品价格波动': 3, '农产品产量异动': 2, '种植适合度': 3, '设备异常': 2},
                    { '日期': '12:00', '气象灾害预警': 3, '虫灾预警': 2, '农产品价格波动': 5, '农产品产量异动': 3, '种植适合度': 1, '设备异常': 4},
                    { '日期': '24:00', '气象灾害预警': 1, '虫灾预警': 4, '农产品价格波动': 2, '农产品产量异动': 1, '种植适合度': 2, '设备异常': 1},
                    { '日期': '36:00', '气象灾害预警': 3, '虫灾预警': 2, '农产品价格波动': 1, '农产品产量异动': 4, '种植适合度': 4, '设备异常': 3},
                    { '日期': '48:00', '气象灾害预警': 2, '虫灾预警': 4, '农产品价格波动': 5, '农产品产量异动': 4, '种植适合度': 1, '设备异常': 4},
                    { '日期': '60:00', '气象灾害预警': 1, '虫灾预警': 3, '农产品价格波动': 3, '农产品产量异动': 1, '种植适合度': 2, '设备异常': 2},
                ]
            },
            chartData2: {
                columns: ['类型', '数值'],
                rows: [
                    { '类型': '农民专业合作社', '数值': 4 },
                    { '类型': '个体企业', '数值': 19 },
                    { '类型': '国有企业', '数值': 1 }
                ]
            },
            chartData3: {
                columns: ['类型', '值'],
                rows: [
                    { '类型': '气象传感器', '值': 1 },
                    { '类型': '虫情传感器', '值': 1 },
                    { '类型': '土壤传感器', '值': 1 },
                    { '类型': '水质传感器', '值': 1 },
                    { '类型': '球机摄像头', '值': 1 },
                    { '类型': '枪机摄像头', '值': 17 }
                ]
            },
            chartData4: {
                columns: ['类型', '值'],
                rows: [
                    { '类型': '宏基站', '值': 4 },
                    { '类型': '微基站', '值': 20 }
                ]
            },
            chartData5: {
                columns: ['类型', '值'],
                rows: [
                    { '类型': '小型卡车', '值': 100 },
                    { '类型': '中型卡车', '值': 100 },
                    { '类型': '重型卡车', '值': 50 },
                    { '类型': '厢式货车', '值': 200 },
                    { '类型': '电动三轮车', '值': 150 }
                ]
            },
            times: [
                {
                    title: '近15天',
                    active: false
                },
                {
                    title: '近7天',
                    active: false
                },
                {
                    title: '24小时',
                    active: true
                }
            ],
        };
    },
    async created() {
        try {
            await this.$nextTick();
            // this.lineData = this.chartData;
            this.lineData = this.generator24Hourdata();
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        generator24Hourdata() {
            let rows = this.get24HoursByToday().map((item, index) => {
                let dataObj = {
                        '气象灾害预警': [5, 4, 3, 5, 6, 7, 2, 3, 1, 2, 4, 5],
                        '虫灾预警': [2, 1, 1, 4, 6, 2, 1, 2, 6, 4, 4, 2],
                        '农产品价格波动': [4, 2, 5, 6, 7, 8, 9, 5, 2, 4, 5, 5],
                        '农产品产量异动': [2, 4, 5, 2, 1, 5, 6, 3, 6, 7, 5, 6],
                        '种植适合度': [1, 2, 4, 4, 5, 3, 2, 1, 4, 6, 7, 8],
                        '设备异常': [3, 8, 5, 6, 3, 2, 1, 4, 5, 6, 6, 7]
                    };
                return {
                    '日期': item,
                    '气象灾害预警': _.get(dataObj, `气象灾害预警.${index}`),
                    '虫灾预警': _.get(dataObj, `虫灾预警.${index}`),
                    '农产品价格波动': _.get(dataObj, `农产品价格波动.${index}`),
                    '农产品产量异动': _.get(dataObj, `农产品产量异动.${index}`),
                    '种植适合度': _.get(dataObj, `种植适合度.${index}`),
                    '设备异常': _.get(dataObj, `设备异常.${index}`)
                };
            });

            return {
                columns: ['日期', '气象灾害预警', '虫灾预警', '农产品价格波动', '农产品产量异动', '种植适合度', '设备异常'],
                rows
            };
        },
        generator7Daysdata() {
            let rows = this.get7DaysNearByToday().map((item) => {
                return {
                    '日期': item,
                    '气象灾害预警': this.randomFrom(1, 5),
                    '虫灾预警': this.randomFrom(1, 5),
                    '农产品价格波动': this.randomFrom(1, 5),
                    '农产品产量异动': this.randomFrom(1, 5),
                    '种植适合度': this.randomFrom(1, 5),
                    '设备异常': this.randomFrom(1, 5)
                };
            });

            return {
                columns: ['日期', '气象灾害预警', '虫灾预警', '农产品价格波动', '农产品产量异动', '种植适合度', '设备异常'],
                rows
            };
        },
        generator15Daysdata() {
            let rows = this.get15DaysNearByToday().map((item) => {
                return {
                    '日期': item,
                    '气象灾害预警': this.randomFrom(1, 5),
                    '虫灾预警': this.randomFrom(1, 5),
                    '农产品价格波动': this.randomFrom(1, 5),
                    '农产品产量异动': this.randomFrom(1, 5),
                    '种植适合度': this.randomFrom(1, 5),
                    '设备异常': this.randomFrom(1, 5)
                };
            });

            return {
                columns: ['日期', '气象灾害预警', '虫灾预警', '农产品价格波动', '农产品产量异动', '种植适合度', '设备异常'],
                rows
            };
        },
        getDate(AddDayCount) {
            let dd = new Date();
            dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1; //获取当前月份的日期
            var d = dd.getDate();
            m = m <= 9 ? '0' + m : m;
            d = d <= 9 ? '0' + d : d;
            return y + "/" + m + "/" + d;
        },
        get7DaysNearByToday() {
            let dateList = [];
            for (let i = 0; i < 7; i++) {
                dateList.push(this.getDate(0 - i));
            }
            return _.reverse(dateList);
        },
        get15DaysNearByToday() {
            let dateList = [];
            for (let i = 0; i < 15; i++) {
                dateList.push(this.getDate(0 - i));
            }
            return _.reverse(dateList);
        },
        get24HoursByToday() {
            let dateList = [];
            for (let i = 0; i < 12; i++) {
                let date = '';
                if ((i * 2) < 9) {
                    date += '0' + (i * 2) + ':00';
                } else {
                    date += '' + (i * 2) + ':00';
                }
                dateList.push(date);
            }
            return dateList;
        },
        randomFrom(lowerValue, upperValue) {
            return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
        },
        generatorData() {

        },
        changeTime(index) {
            this.times = this.times.map((item, _index) => {
                if (index === _index) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            });
            if (index === 0) {
                this.lineData = this.generator15Daysdata();
            } else if (index === 1) {
                this.lineData = this.generator7Daysdata();
            } else {
                this.lineData = this.generator24Hourdata();
            }
        },
        gotoPage(index) {
            let routeName = '';
            switch (index) {
                case 1:
                    routeName = 'DataAlert';
                    break;
                case 2:
                    routeName = 'FarmList';
                    break;
                case 3:
                    routeName = 'PeeList';
                    break;
                case 4:
                    routeName = 'BaseStation'
                    break;
                case 5:
                    routeName = 'Logistics'
                    break;
            }
            this.$router.push({ name: routeName });
        }
    }
}
</script>
<style lang="scss" scoped>
.home-container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    .top-field {
        height: 120px;
        .my-bord-status-two {
            display: flex;
            width: 100%;
            .status-item + .status-item {
                margin-left: 10px;
            }
            .status-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #272f44;
                flex: 1;
                height: 120px;
                padding: 20px;
                border-radius: 4px;
                background: #272f44 no-repeat right 20px;
                overflow: hidden;
                color: #bdbec2;
                &.total {
                    background-position: 100% 100%;
                    background-size: 78px 78px;
                }
                .left {
                    display: flex;
                }
                .line {
                    width: 2px;
                    height: 50px;
                    // float: left;
                }
                &:nth-of-type(1) {
                    .line {
                        background: #CEAA6F;
                    }
                    .count {
                        .svg-icon {
                            width: 117px;
                            height: 103px;
                        }
                    }
                }
                &:nth-of-type(2) {
                    .line {
                        background: #67C23A;
                    }
                    .count {
                        .svg-icon {
                            width: 92px;
                            height: 92px;
                        }
                    }
                }
                &:nth-of-type(3) {
                    .line {
                        background: #00B8EE;
                    }
                    .count {
                        .svg-icon {
                            width: 128px;
                            height: 92px;
                        }
                    }
                }
                &:nth-of-type(4) {
                    .line {
                        background: #7632B3;
                    }
                    .count {
                        .svg-icon {
                            width: 74px;
                            height: 92px;
                        }
                    }
                }
                .item_con {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-around;
                    height: 50px;
                    margin-left: 10px;
                    .name-one {
                        font-size: 16px;
                        line-height: 16px;
                        color: rgba(99,116,151,1);
                    }
                    .name-two {
                        font-size:16px;
                        line-height: 16px;
                        color:rgba(57,65,84,1);
                    }
                }
                .count {
                    position: relative;
                    font-size: 40px;
                    font-weight: lighter;
                    color: #A3D0FD;
                    span {
                        position: absolute;
                        right: 30px;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
        }
    }
    .middle-field {
        position: relative;
        background-color: #252D3F;
        height: 352px;
        margin-top: 20px;
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 48px;
            padding: 0 20px;
            border-bottom: 1px solid #3A4763;
            cursor: pointer;
            .header-left {
                display: flex;
                align-items: center;
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
            .header-right {
                .time-list {
                    display: flex;
                    border-radius: 4px;
                    .time-item {
                        width: 60px;
                        height: 24px;
                        line-height: 24px;
                        background-color: #0C1019;
                        font-size: 12px;
                        color: #9FA8B8;
                        text-align: center;
                        cursor: pointer;
                        &.active {
                            color: #fff;
                            background-color: #0062C4;
                        }
                    }
                }
            }
        }
        .middle-content {
            position: relative;
            padding: 0 230px 0 80px;
        }
        .legen-list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: absolute;
            top: 60px;
            right: 32px;
            .legen-item {
                display: flex;
                align-items: center;
                .icon {
                    width: 10px;
                    height: 10px;
                    margin-right: 10px;
                }
                .text {
                    font-size: 12px;
                    color: #667799;
                }
                &:nth-of-type(1) {
                    .icon {
                        background-color: #DD5567;
                    }
                }
                &:nth-of-type(2) {
                    .icon {
                        background-color: #FCB268;
                    }
                }
                &:nth-of-type(3) {
                    .icon {
                        background-color: #E3C97B;
                    }
                }
                &:nth-of-type(4) {
                    .icon {
                        background-color: #85B8FC;
                    }
                }
                &:nth-of-type(5) {
                    .icon {
                        background-color: #B8E986;
                    }
                }
                &:nth-of-type(6) {
                    .icon {
                        background-color: #BA69CB;
                    }
                }
            }
        }
    }
    .bottom-field {
        display: flex;
        height: 332px;
        margin-top: 20px;
        .bottom-left {
            margin-right: 20px;
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
                                margin: 0 10px 0 10px;
                            }
                            .icon {
                                width: 13px;
                                height: 13px;
                            }
                            &:nth-of-type(1) {
                                .icon {
                                    background-color: #74B8C2;
                                }
                            }
                            &:nth-of-type(2) {
                                .icon {
                                    background-color: #008FC4;
                                }
                            }
                            &:nth-of-type(3) {
                                .icon {
                                    background-color: #0062C4;
                                }
                            }
                            &:nth-of-type(4) {
                                .icon {
                                    background-color: #50BEE7;
                                }
                            }
                        }
                        &.legen-list-one {
                            .legen-item {
                                .text1 {
                                    width: 86px;
                                }
                                .text2 {
                                    width: 20px;
                                }
                            }
                        }
                        &.legen-list-three {
                            .text2 {
                                width: 20px;
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
                &.bottom-right-content {
                    .legen-list {
                        .legen-item {
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
                            &:nth-of-type(6) {
                                .icon {
                                    background-color: #008FC4;
                                }
                            }
                            .text1 {
                                width: 66px;
                            }
                            .text2 {
                                width: 30px;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer {
        height: 106px;
        border-top: 1px solid #252D3F;
        margin-top: 20px;
        padding-top: 12px;
        text-align: right;
        .name {
            font-size: 18;
            color: rgba(62,73,94,1);
            line-height: 24px;
        }
        .copyright {
            font-size: 12px;
            line-height: 16px;
            color: rgba(62,73,94,1);
        }
    }
}
</style>
