<template>
    <div class="monitoring-data-container">
        <ul class="legend-list">
            <li v-for="(item, index) in legendData" :key="index" class="legend-item">
                <i></i> {{item}}
            </li>
            <!--
            <li class="legend-item">
                <i></i> 湿度
            </li>
            -->
        </ul>
        <div width="100%" height="100%" id="monitoring-data-line-chart" class="monitoring-data-line-chart"></div>
    </div>
</template>
<script>
import echarts from 'echarts';
export default {
    name: 'MonitoringData',
    props: {
        type: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            monitoringDataLineChart: null,
            legendData: [],
            commonOption: {
                color: ['#6ED800', '#FF6D00'],
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
                    data: [ '00:00', '02:00', '04:00', '06:00', '08:00',
                            '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
                } ],
            },
            colors: ['#6ED800', '#FF6D00'],
            dataOne: [
                {
                    name: '土壤湿度',
                    type: 'line',
                    data: [80, 60, 40, 50, 60, 50, 60, 55, 62, 72, 63, 74]
                },
                {
                    name: '温度',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [29, 31, 30, 32, 29, 30, 33, 28, 30, 31, 29, 32]
                }
            ],
            dataTwo: [
                {
                    name: '捕虫量',
                    type: 'line',
                    data: [34, 46, 67, 34, 45, 45, 67, 88, 99, 76, 87, 73]
                }
            ],
            dataThree: [
                {
                    name: '浊度',
                    type: 'line',
                    data: [3, 2, 1, 3, 4, 5, 4, 4, 4, 3, 2, 2]
                }
            ],
            dataFour: [

                {
                    name: '土壤湿度',
                    type: 'line',
                    data: [9, 13, 14, 11, 13, 14, 12, 11, 9, 9, 8, 7]
                },
                {
                    name: '土壤温度',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [22, 23, 24, 23, 21, 22, 24, 26, 25, 24, 21, 22]
                }
            ]
        }
    },
    async mounted() {
        try {
            await this.$nextTick();
            this.init();
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        init() {
            switch (this.type) {
                case 1:
                    this.initdataLineChartOne();
                    this.legendData = ['温度', '湿度'];
                    break;
                case 2:
                    this.initdataLineChartTwo();
                    this.legendData = ['捕虫量'];
                    break;
                case 3:
                    this.initdataLineChartFour();
                    this.legendData = ['土壤温度', '土壤湿度'];
                    break;
                case 4:
                    this.initdataLineChartThree();
                    this.legendData = ['浊度'];
                    break;
            }
        },
        initdataLineChartOne() {
            let myChart = echarts.init(document.getElementById('monitoring-data-line-chart'));
            // 绘制图表
            myChart.setOption(this.lineOptionOne(this.dataOne));
            this.monitoringDataLineChart = myChart;
        },
        initdataLineChartTwo() {
            let myChart = echarts.init(document.getElementById('monitoring-data-line-chart'));
            // 绘制图表
            myChart.setOption(this.lineOptionTwo(this.dataTwo));
            this.monitoringDataLineChart = myChart;
        },
        initdataLineChartThree() {
            let myChart = echarts.init(document.getElementById('monitoring-data-line-chart'));
            // 绘制图表
            myChart.setOption(this.lineOptionThree(this.dataThree));
            this.monitoringDataLineChart = myChart;
        },
        initdataLineChartFour() {
            let myChart = echarts.init(document.getElementById('monitoring-data-line-chart'));
            // 绘制图表
            myChart.setOption(this.lineOptionFour(this.dataFour));
            this.monitoringDataLineChart = myChart;
        },
        lineOptionOne(data) {
            let option = {
                yAxis: [ {
                    type: 'value',
                    name: '湿度',
                    min: 0,
                    max: 80,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: this.colors[1]
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
                            color: this.colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}℃'
                    }
                }],
                series: data
            };
            return Object.assign({}, this.commonOption, option);
        },
        lineOptionTwo(data) {
            let option = {
                yAxis: [
                {
                    type: 'value',
                    name: '捕虫量',
                    min: 20,
                    max: 100,
                    position: 'left',
                    offset: 60,
                    axisLine: {
                        lineStyle: {
                            color: this.colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}个'
                    }
                }],
                series: data
            };
            return Object.assign({}, this.commonOption, option);
        },
        lineOptionThree(data) {
            let option = {
                yAxis: [
                {
                    type: 'value',
                    name: '浊度',
                    min: 0,
                    max: 5,
                    position: 'left',
                    offset: 60,
                    axisLine: {
                        lineStyle: {
                            color: this.colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}JTU'
                    }
                }],
                series: data
            };
            return Object.assign({}, this.commonOption, option);
        },
        lineOptionFour(data) {
            let option = {
                yAxis: [ {
                    type: 'value',
                    name: '土壤湿度',
                    min: 5,
                    max: 15,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: this.colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }, {
                    type: 'value',
                    name: '土壤温度',
                    min: 20,
                    max: 30,
                    position: 'left',
                    offset: 60,
                    axisLine: {
                        lineStyle: {
                            color: this.colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}℃'
                    }
                }],
                series: data
            };
            return Object.assign({}, this.commonOption, option);
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
