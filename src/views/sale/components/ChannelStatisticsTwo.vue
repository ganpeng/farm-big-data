<template>
    <div class="channel-statistics-container my-content-container">
        <channel-statistics-bord-two></channel-statistics-bord-two>
        <div class="channel-statistics-content">
            <h4 class="content-sub-title">统计图表</h4>
            <el-row>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计销售额 <i>42,383,398</i>元</p>
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计有效订单 <i>383,398</i>个</p>
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计会员 <i>83,398</i>个</p>
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <p>累计推广费用 <i>3,398</i>元</p>
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import ChannelStatisticsBordTwo from './ChannelStatisticsBordTwo';
export default {
    name: 'ChannelStatisticsTwo',
    components: {ChannelStatisticsBordTwo},
    data() {
        this.chartExtend = {
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
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.channel-statistics-container {
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
