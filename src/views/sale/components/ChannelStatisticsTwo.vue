<template>
    <div class="channel-statistics-container my-content-container">
        <channel-statistics-bord-two></channel-statistics-bord-two>
        <div class="channel-statistics-content">
            <h4 class="content-sub-title">统计图表</h4>
            <el-row>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计销售额 <i>150</i>万元</p>
                        <div class="sub-title">每日销售额</div>
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计有效订单 <i>2455</i>个</p>
                        <div class="sub-title">每日有效订单</div>
                        <ve-line :extend="chartExtend" :data="chartData2"></ve-line>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计会员 <i>2344</i>个</p>
                        <div class="sub-title">每日新增注册</div>
                        <ve-line :extend="chartExtend" :data="chartData3"></ve-line>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计推广费用 <i>192334</i>元</p>
                        <div class="sub-title">每日推广费用</div>
                        <ve-line :extend="chartExtend" :data="chartData4"></ve-line>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import _ from 'lodash';
import ChannelStatisticsBordTwo from './ChannelStatisticsBordTwo';
export default {
    name: 'ChannelStatisticsTwo',
    components: {ChannelStatisticsBordTwo},
    data() {
        this.chartExtend = {
            grid: {
                top: 20
            },
            legend: {
                bottom: 10,
                textStyle: {
                    color: '#fff',

                }
            },
            'xAxis.0.axisLabel': {color: 'rgb(255,255,255)'},
            'yAxis.0.axisLabel': {color: 'rgb(255,255,255)'}
        };
        return {
            chartData: {
                columns: ['日期', '营收', '盈余'],
                rows: [
                    { '日期': '20200509', '营收': 4593, '盈余': 4293, },
                    { '日期': '20200510', '营收': 3792, '盈余': 3492, },
                    { '日期': '20200511', '营收': 1393, '盈余': 1093, },
                    { '日期': '20200512', '营收': 3530, '盈余': 3230, },
                    { '日期': '20200513', '营收': 2923, '盈余': 2623, },
                    { '日期': '20200514', '营收': 1723, '盈余': 1423, },
                ]
            },
            chartData2: {
                columns: ['日期', '营收', '盈余'],
                rows: [
                    { '日期': '20200509', '营收': 4593, '盈余': 4293, },
                    { '日期': '20200510', '营收': 3792, '盈余': 3492, },
                    { '日期': '20200511', '营收': 1393, '盈余': 1093, },
                    { '日期': '20200512', '营收': 3530, '盈余': 3230, },
                    { '日期': '20200513', '营收': 2923, '盈余': 2623, },
                    { '日期': '20200514', '营收': 1723, '盈余': 1423, },
                ]
            },
            chartData3: {
                columns: ['日期', '营收', '盈余'],
                rows: [
                    { '日期': '20200509', '营收': 4593, '盈余': 4293, },
                    { '日期': '20200510', '营收': 3792, '盈余': 3492, },
                    { '日期': '20200511', '营收': 1393, '盈余': 1093, },
                    { '日期': '20200512', '营收': 3530, '盈余': 3230, },
                    { '日期': '20200513', '营收': 2923, '盈余': 2623, },
                    { '日期': '20200514', '营收': 1723, '盈余': 1423, },
                ]
            },
            chartData4: {
                columns: ['日期', '营收', '盈余'],
                rows: [
                    { '日期': '20200509', '营收': 4593, '盈余': 4293, },
                    { '日期': '20200510', '营收': 3792, '盈余': 3492, },
                    { '日期': '20200511', '营收': 1393, '盈余': 1093, },
                    { '日期': '20200512', '营收': 3530, '盈余': 3230, },
                    { '日期': '20200513', '营收': 2923, '盈余': 2623, },
                    { '日期': '20200514', '营收': 1723, '盈余': 1423, },
                ]
            }
        };
    },
    created() {
        this.chartData = this.generatorChartData1();
        this.chartData2 = this.generatorChartData2();
        this.chartData3 = this.generatorChartData3();
        this.chartData4 = this.generatorChartData4();
    },
    methods: {
        generatorChartData1() {
            let pcDatas = [1, 3, 6, 7, 2, 2, 4];
            let appDatas = [3, 5, 6, 3, 5, 6, 10];
            let dateList = this.get7DaysNearByToday();
            let rows = dateList.map((item, index) => {
                return {
                    '日期': item,
                    'PC端': pcDatas[index],
                    'APP端': appDatas[index]
                };
            });
            return {
                columns: ['日期', 'PC端', 'APP端'],
                rows
            };
        },
        generatorChartData2() {
            let pcDatas = [23, 45, 63, 56, 56, 67, 23];
            let appDatas = [43, 56, 74, 75, 34, 67, 87];
            let dateList = this.get7DaysNearByToday();
            let rows = dateList.map((item, index) => {
                return {
                    '日期': item,
                    'PC端': pcDatas[index],
                    'APP端': appDatas[index]
                };
            });
            return {
                columns: ['日期', 'PC端', 'APP端'],
                rows
            };
        },
        generatorChartData3() {
            let pcDatas = [12, 34, 45, 24, 54, 54, 21];
            let appDatas = [34, 45, 67, 45, 67, 67, 45];
            let dateList = this.get7DaysNearByToday();
            let rows = dateList.map((item, index) => {
                return {
                    '日期': item,
                    'PC端': pcDatas[index],
                    'APP端': appDatas[index]
                };
            });
            return {
                columns: ['日期', 'PC端', 'APP端'],
                rows
            };
        },
        generatorChartData4() {
            let pcDatas = [1233, 345, 424, 453, 545, 667, 467];
            // let appDatas = [3435, 2324, 4344, 3455, 7845, 722];
            let dateList = this.get7DaysNearByToday();
            let rows = dateList.map((item, index) => {
                return {
                    '日期': item,
                    '推广费': pcDatas[index],
                    // 'app端': appDatas[index]
                };
            });
            return {
                // columns: ['日期', 'PC端', 'APP端'],
                columns: ['日期', '推广费'],
                rows
            };
        },
        get7DaysNearByToday() {
            let dateList = [];
            for (let i = 0; i < 7; i++) {
                dateList.push(this.getDate(0 - i));
            }
            return _.reverse(dateList);
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
        }
    }
};
</script>
<style lang="scss" scoped>
.channel-statistics-container {
    .sub-title {
        text-align: right;
    }
    .line-charts-container {
        padding: 20px;
        p {
            font-size: 22px;
            color: #fff;
            text-align: center;
            i {
                font-size: 30px;
            }
        }
    }
}
</style>
