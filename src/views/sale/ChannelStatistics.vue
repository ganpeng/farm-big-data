<template>
    <div class="channel-statistics-container my-content-container">
        <channel-statistics-one v-if="flag === 1"></channel-statistics-one>
        <channel-statistics-two v-if="flag === 2"></channel-statistics-two>
        <channel-statistics-three v-if="flag === 3"></channel-statistics-three>
    </div>
</template>
<script>
import ChannelStatisticsOne from './components/ChannelStatisticsOne';
import ChannelStatisticsTwo from './components/ChannelStatisticsTwo';
import ChannelStatisticsThree from './components/ChannelStatisticsThree';
export default {
    name: 'ChannelStatistics',
    components: {ChannelStatisticsOne, ChannelStatisticsTwo, ChannelStatisticsThree},
    data() {
        this.chartExtend = {
            'xAxis.0.axisLabel': {color: 'rgb(255,255,255)'},
            'yAxis.0.axisLabel': {color: 'rgb(255,255,255)'}
        };
        return {
            flag: 1,
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
    },
    created() {
        let {id} = this.$route.query;
        this.flag = parseInt(id);
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
