<template>
    <div class="channel-statistics-container my-content-container">
        <channel-statistics-bord-three></channel-statistics-bord-three>
        <div class="channel-statistics-content">
            <h4 class="content-sub-title">统计图表</h4>
            <el-row>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计销售额 <i>137</i>万元</p>
                        <div class="sub-title">每日销售额</div>
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计有效订单 <i>383,398</i>个</p>
                        <div class="sub-title">每日有效订单</div>
                        <ve-line :extend="chartExtend" :data="chartData2"></ve-line>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计会员 <i>83,398</i>个</p>
                        <div class="sub-title">每日新增会员</div>
                        <ve-line :extend="chartExtend" :data="chartData3"></ve-line>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计入驻店铺 <i>3,398</i>个</p>
                        <div class="sub-title">每日推广费用</div>
                        <ve-line :extend="chartExtend" :data="chartData4"></ve-line>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import ChannelStatisticsBordThree from './ChannelStatisticsBordThree';
export default {
    name: 'ChannelStatisticsThree',
    components: {ChannelStatisticsBordThree},
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
            let pcDatas = [3, 4, 5, 6, 2, 8, 9, 9];
            let dateList = this.get7DaysNearByToday();
            let rows = dateList.map((item, index) => {
                return {
                    '日期': item,
                    '数值': pcDatas[index]
                };
            });
            return {
                columns: ['日期', '数值'],
                rows
            };
        },
        generatorChartData2() {
            let pcDatas = [123, 344, 675, 786, 233, 257, 146];
            let dateList = this.get7DaysNearByToday();
            let rows = dateList.map((item, index) => {
                return {
                    '日期': item,
                    '数值': pcDatas[index]
                };
            });
            return {
                columns: ['日期', '数值'],
                rows
            };
        },
        generatorChartData3() {
            let pcDatas = [23, 55, 45, 76, 78, 23, 34];
            let dateList = this.get7DaysNearByToday();
            let rows = dateList.map((item, index) => {
                return {
                    '日期': item,
                    '数值': pcDatas[index]
                };
            });
            return {
                columns: ['日期', '数值'],
                rows
            };
        },
        generatorChartData4() {
            let pcDatas = [948, 434, 545, 342, 423, 544, 343];
            let dateList = this.get7DaysNearByToday();
            let rows = dateList.map((item, index) => {
                return {
                    '日期': item,
                    '数值': pcDatas[index]
                };
            });
            return {
                columns: ['日期', '数值'],
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
