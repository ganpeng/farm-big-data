<template>
    <div class="monitoring-data-container">
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
                    data: [29, 31, 30, 32, 36, 30, 38]
                },
                {
                    name: '盐分',
                    type: 'line',
                    data: [12, 15, 26, 36, 25, 18, 16]
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
                    data: [ '2016-01', '2016-02', '2016-03', '2016-04', '2016-05',
                            '2016-06', '2016-07']
                } ],
                yAxis: [ {
                    type: 'value',
                    name: '土壤湿度',
                    min: 0,
                    max: 80,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: this.colors[2]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }, {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 40,
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
                }, {
                    type: 'value',
                    name: '盐分',
                    min: 0,
                    max: 40,
                    position: 'left',
                    offset: 120,
                    axisLine: {
                        lineStyle: {
                            color: this.colors[0]
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
.monitoring-data-line-chart {
    width: 6.4rem;
    height: 3.2rem;
}
</style>
