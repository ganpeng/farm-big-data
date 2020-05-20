<template>
    <div class="monitoring-data-container">
        <ul class="legend-list">
            <li class="legend-item">
                <i></i> 温度
            </li>
            <li class="legend-item">
                <i></i> 湿度
            </li>
        </ul>
        <div width="100%" height="100%" id="monitoring-data-line-chart" class="monitoring-data-line-chart"></div>
    </div>
</template>
<script>
import echarts from 'echarts';
export default {
    name: 'MonitoringData',
    data() {
        return {
            monitoringDataLineChart: null,
            colors: ['#FF6D00', '#6ED800', '#FEF895'],
            monitoringDataList: [
                {
                    name: '土壤湿度',
                    type: 'line',
                    data: [80, 60, 40, 50, 60, 50, 60]
                },
                {
                    name: '温度',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [29, 31, 30, 32, 29, 30, 33]
                }
            ]
        }
    },
    async mounted() {
        try {
            await this.$nextTick();
            this.initMonitoringDataLineChart();
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        initMonitoringDataLineChart() {
            let myChart = echarts.init(document.getElementById('monitoring-data-line-chart'));
            // 绘制图表
            myChart.setOption(this.lineOption());
            this.monitoringDataLineChart = myChart;
        },
        lineOption() {
            let option = {
                color: this.colors,
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: 10,
                    left: '14%',
                    right: 40,
                    bottom: 20
                },
                toolbox: {
                    feature: {
                        dataView: {
                            show: false,
                            readOnly: false
                        },
                        restore: {
                            show: false
                        },
                        saveAsImage: {
                            show: false
                        }
                    }
                },
                legend: {
                    show: false,
                },
                xAxis: [ {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: false
                    },
                    axisLabel: {
                        color: '#fff',
                        fontSize: 12
                    },
                    data: [ '00:00', '04:00', '08:00', '12:00', '16:00',
                            '20:00', '24:00']
                } ],
                yAxis: [ {
                    type: 'value',
                    name: '湿度',
                    min: 0,
                    max: 80,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: this.colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }, {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 35,
                    position: 'left',
                    offset: 60,
                    axisLine: {
                        lineStyle: {
                            color: this.colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}℃'
                    }
                }],
                series: this.monitoringDataList
            };
            return option;
        }
    }
}
</script>
<style lang="scss" scoped>
.legend-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .legend-item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        margin-right: 20px;
        i {
            display: block;
            width: 12px;
            height: 12px;
            margin-right: 6px;
        }
        &:nth-of-type(1) {
            i {
                background-color: #6ED800;
            }
        }
        &:nth-of-type(2) {
            i {
                background-color: #FF6D00;
            }
        }
    }

}
.monitoring-data-line-chart {
    width: 100%;
    height: 3.2rem;
}
</style>
