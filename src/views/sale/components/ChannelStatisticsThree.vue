<template>
    <div class="channel-statistics-container my-content-container">
        <channel-statistics-bord-three></channel-statistics-bord-three>
        <div class="channel-statistics-content">
            <h4 class="content-sub-title">统计图表</h4>
            <el-row>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                        <p>累计销售额 元 <i>42,383,398</i></p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                        <p>累计有效订单 个 <i>383,398</i></p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                        <p>累计注册用户 个 <i>83,398</i></p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="line-charts-container">
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                        <p>累计入驻店铺 个 <i>3,398</i></p>
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
            i {
                font-size: 30px;
            }
        }
    }
}
</style>
