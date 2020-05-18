<template>
    <div class="revenue-information-container">
        <el-form
            :model="data"
            status-icon
            ref="peeForm"
            label-width="200px"
            @submit.native.prevent
            class="my-form">
            <el-row>
                <h4 class="content-sub-title">本年度统计</h4>
                <el-col :span="12">
                    <el-form-item label="服务营收 元" prop="name">
                        <el-input v-model="data.one"></el-input>
                    </el-form-item>
                    <el-form-item label="服务对象个数" prop="createdAt">
                        <el-input v-model="data.two"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="其中服务小农户营收 元" prop="type">
                        <el-input v-model="data.three"></el-input>
                    </el-form-item>
                    <el-form-item label="其中服务小农户个数">
                        <el-input v-model="data.four"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <h4 class="content-sub-title">历史信息</h4>
                <el-col :span="12">
                    <div class="left-line-charts">
                        <ve-line :extend="chartExtend" :data="chartData"></ve-line>
                        <p>营收、盈余金额历年走势图</p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="left-line-charts">
                        <ve-line :extend="chartExtend" :data="chartData2"></ve-line>
                        <p>缴税、分红金额历年走势图</p>
                    </div>
                </el-col>
            </el-row>
            <div class="seperator-line"></div>
            <el-row>
                <el-table
                    :data="tableData"
                    header-row-class-name="common-table-header"
                    size="small"
                    :row-class-name="tableRowClassName"
                    class="my-table-style"
                    style="width: 100%">
                    <el-table-column align="center" prop="date" label="年份"></el-table-column>
                    <el-table-column align="center" prop="area1" label="服务总营收"></el-table-column>
                    <el-table-column align="center" prop="area2" label="服务小农户营收"></el-table-column>
                    <el-table-column align="center" prop="area3" label="服务对象个数"></el-table-column>
                    <el-table-column align="center" prop="area4" label="服务小农户个数"></el-table-column>
                </el-table>
            </el-row>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'RevenueInformation',
    data() {
        this.chartExtend = {
            'xAxis.0.axisLabel': {color: 'rgb(255,255,255)'},
            'yAxis.0.axisLabel': {color: 'rgb(255,255,255)'}
        };
        return {
            data: {
                one: '500,000',
                two: '50',
                three: '200,000',
                four: '10'
            },
            chartData: {
                columns: ['日期', '营收', '盈余'],
                rows: [
                    { '日期': '2015', '营收': 4593, '盈余': 4293, },
                    { '日期': '2016', '营收': 3792, '盈余': 3492, },
                    { '日期': '2017', '营收': 1393, '盈余': 1093, },
                    { '日期': '2018', '营收': 3530, '盈余': 3230, },
                    { '日期': '2019', '营收': 2923, '盈余': 2623, },
                    { '日期': '2020', '营收': 1723, '盈余': 1423, },
                ]
            },
            chartData2: {
                columns: ['日期', '缴税', '分红'],
                rows: [
                    { '日期': '2015', '缴税': 1393, '分红': 1093, },
                    { '日期': '2016', '缴税': 3530, '分红': 3230, },
                    { '日期': '2017', '缴税': 2923, '分红': 2623, },
                    { '日期': '2018', '缴税': 1723, '分红': 1423, },
                    { '日期': '2019', '缴税': 3792, '分红': 3492, },
                    { '日期': '2020', '缴税': 4593, '分红': 4293, }
                ]
            },
            tableData: [
                {
                    date: '2020',
                    area1: '1723',
                    area2: '1423',
                    area3: '4593',
                    area4: '4293'
                },
                {
                    date: '2019',
                    area1: '2923',
                    area2: '2623',
                    area3: '3792',
                    area4: '3492'
                },
                {
                    date: '2018',
                    area1: '3530',
                    area2: '3230',
                    area3: '1723',
                    area4: '1423'
                },
                {
                    date: '2017',
                    area1: '1393',
                    area2: '1093',
                    area3: '2923',
                    area4: '2623'
                },
                {
                    date: '2016',
                    area1: '3792',
                    area2: '3492',
                    area3: '3530',
                    area4: '3230'
                }
            ]
        };
    },
    methods: {
        tableRowClassName({rowIndex}) {
            if ((rowIndex % 2) === 0) {
                return 'warning-row';
            } else {
                return 'success-row';
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.revenue-information-container {
    .left-line-charts {
        padding: 20px;
        p {
            font-size: 20px;
            color: #fff;
            text-align: center;
        }
    }
}
</style>
