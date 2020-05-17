<template>
    <div class="data-statistics-container my-content-container">
        <div class="tab-bar-container">
            <ul class="tab-bar-list">
                <li @click="changeTab(index)" v-for="(item, index) in tabBarList"
                    :key="index" :class="['tab-bar-item', item.active && 'active']">
                    <span class="title">{{item.title}}</span>
                </li>
            </ul>
        </div>
        <div class="tab-content-container">
            <div v-if="activeIndex === 0" class="tab-content-item tab-content-one">
                <div class="title-container">
                    <h3 class="title">吉林智慧农业系统地块统计</h3>
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
                <div class="table-container">
                    <el-table
                        :data="tableData1"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份"></el-table-column>
                        <el-table-column align="center" prop="area1" label="耕地面积"></el-table-column>
                        <el-table-column align="center" prop="area2" label="宅基地面积"></el-table-column>
                        <el-table-column align="center" prop="area3" label="水田面积"></el-table-column>
                        <el-table-column align="center" prop="area4" label="旱田面积"></el-table-column>
                        <el-table-column align="center" prop="area5" label="水浇地面积"></el-table-column>
                    </el-table>
                </div>
            </div>
            <div v-if="activeIndex === 1" class="tab-content-item tab-content-two">
                <div class="title-container">
                    <h3 class="title">吉林智慧农业系统从业人员统计</h3>
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
                <div class="table-container">
                    <el-table
                        :data="tableData2"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份"></el-table-column>
                        <el-table-column align="center" prop="area1" label="经营人员"></el-table-column>
                        <el-table-column align="center" prop="area2" label="种植人员"></el-table-column>
                        <el-table-column align="center" prop="area3" label="接受培训时长"></el-table-column>
                        <el-table-column align="center" prop="area4" label="有专业证书人员"></el-table-column>
                        <el-table-column align="center" prop="area5" label="贫困户成员"></el-table-column>
                    </el-table>
                </div>
            </div>
            <div v-if="activeIndex === 2" class="tab-content-item tab-content-three">
                <div class="title-container">
                    <h3 class="title">吉林智慧农业系统农作物统计</h3>
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
                <div class="table-container">
                    <el-table
                        :data="tableData3"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份"></el-table-column>
                        <el-table-column align="center" prop="area1" label="种植面积"></el-table-column>
                        <el-table-column align="center" prop="area2" label="产量"></el-table-column>
                        <el-table-column align="center" prop="area3" label="亩产"></el-table-column>
                        <el-table-column align="center" prop="area4" label="产值"></el-table-column>
                        <el-table-column align="center" prop="area5" label="人均产值"></el-table-column>
                    </el-table>
                </div>
            </div>
            <div v-if="activeIndex === 3" class="tab-content-item tab-content-four">
                <div class="title-container">
                    <h3 class="title">吉林智慧农业系统投入品统计</h3>
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
                <div class="table-container">
                    <el-table
                        :data="tableData4"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份"></el-table-column>
                        <el-table-column align="center" prop="area1" label="种植面积"></el-table-column>
                        <el-table-column align="center" prop="area2" label="有机肥使用量"></el-table-column>
                        <el-table-column align="center" prop="area3" label="无机肥使用量"></el-table-column>
                        <el-table-column align="center" prop="area4" label="农药使用量"></el-table-column>
                        <el-table-column align="center" prop="area5" label="其他"></el-table-column>
                        <el-table-column align="center" prop="area5" label="总计"></el-table-column>
                    </el-table>
                </div>
            </div>
            <div v-if="activeIndex === 4" class="tab-content-item tab-content-five">
                <div class="title-container">
                    <h3 class="title">吉林智慧农业系统销售统计</h3>
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
                <div class="table-container">
                    <el-table
                        :data="tableData5"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份"></el-table-column>
                        <el-table-column align="center" prop="area1" label="自营电商销售额"></el-table-column>
                        <el-table-column align="center" prop="area2" label="合作电商销售额"></el-table-column>
                        <el-table-column align="center" prop="area3" label="线下渠道销售额"></el-table-column>
                        <el-table-column align="center" prop="area4" label="总计"></el-table-column>
                    </el-table>
                </div>
            </div>
            <div v-if="activeIndex === 5" class="tab-content-item tab-content-five">
                <div class="title-container">
                    <h3 class="title">吉林智慧农业系统农业社会化服务统计</h3>
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
                <div class="table-container">
                    <el-table
                        :data="tableData6"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份"></el-table-column>
                        <el-table-column align="center" prop="area1" label="服务营收"></el-table-column>
                        <el-table-column align="center" prop="area2" label="其中服务小农户营收"></el-table-column>
                        <el-table-column align="center" prop="area3" label="服务对象个数"></el-table-column>
                        <el-table-column align="center" prop="area4" label="其中服务小农户个数"></el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DataStatistics',
    data() {
        return {
            tabBarList: [
                {
                    title: '地块统计',
                    active: true
                },
                {
                    title: '从业人员统计',
                    active: false
                },
                {
                    title: '农作物统计',
                    active: false
                },
                {
                    title: '投入品统计',
                    active: false
                },
                {
                    title: '销售统计',
                    active: false
                },
                {
                    title: '农业社会化服务统计',
                    active: false
                }
            ],
            tableData1: [
                {
                    date: '2019',
                    area1: '144556  公顷',
                    area2: '56  公顷',
                    area3: '123436  公顷',
                    area4: '3436  公顷',
                    area5: '3236  公顷'
                },
                {
                    date: '2018',
                    area1: '144556  公顷',
                    area2: '56  公顷',
                    area3: '123436  公顷',
                    area4: '3436  公顷',
                    area5: '3236  公顷'
                },
                {
                    date: '2017',
                    area1: '144556  公顷',
                    area2: '56  公顷',
                    area3: '123436  公顷',
                    area4: '3436  公顷',
                    area5: '3236  公顷'
                },
                {
                    date: '2016',
                    area1: '144556  公顷',
                    area2: '56  公顷',
                    area3: '123436  公顷',
                    area4: '3436  公顷',
                    area5: '3236  公顷'
                }
            ],
            tableData2: [
                {
                    date: '2019',
                    area1: '1023',
                    area2: '3455',
                    area3: '123436',
                    area4: '3223',
                    area5: '223'
                },
                {
                    date: '2018',
                    area1: '2323',
                    area2: '3567',
                    area3: '123436',
                    area4: '2324',
                    area5: '122'
                },
                {
                    date: '2017',
                    area1: '1223',
                    area2: '3445',
                    area3: '123436',
                    area4: '1232',
                    area5: '223'
                },
                {
                    date: '2016',
                    area1: '3341',
                    area2: '3556',
                    area3: '123436',
                    area4: '1114',
                    area5: '116'
                }
            ],
            tableData3: [
                {
                    date: '2019',
                    area1: '144556  公顷',
                    area2: '562443  吨',
                    area3: '36  公顷',
                    area4: '3436  万元',
                    area5: '8236  元'
                },
                {
                    date: '2018',
                    area1: '144556  公顷',
                    area2: '534346  吨',
                    area3: '46  公顷',
                    area4: '3436  万元',
                    area5: '8236  元'
                },
                {
                    date: '2017',
                    area1: '144556  公顷',
                    area2: '534346  吨',
                    area3: '24  公顷',
                    area4: '3436  万元',
                    area5: '8236  元'
                },
                {
                    date: '2016',
                    area1: '144556  公顷',
                    area2: '343353  吨',
                    area3: '46  公顷',
                    area4: '3436  万元',
                    area5: '8236  元'
                },
                {
                    date: '总计',
                    area1: '144556  公顷',
                    area2: '343353  吨',
                    area3: '/',
                    area4: '3436  万元',
                    area5: '/'
                }
            ],
            tableData4: [
                {
                    date: '2019',
                    area1: '144556  公顷',
                    area2: '562443  吨',
                    area3: '562443  吨',
                    area4: '562443  吨',
                    area5: '562443  吨',
                    area6: '562443  吨'
                },
                {
                    date: '2018',
                    area1: '144556  公顷',
                    area2: '534346  吨',
                    area3: '534346  吨',
                    area4: '534346  吨',
                    area5: '534346  吨',
                    area6: '534346  吨'
                },
                {
                    date: '2017',
                    area1: '144556  公顷',
                    area2: '534346  吨',
                    area3: '534346  吨',
                    area4: '534346  吨',
                    area5: '534346  吨',
                    area6: '534346  吨'
                },
                {
                    date: '2016',
                    area1: '144556  公顷',
                    area2: '343353  吨',
                    area3: '534346  吨',
                    area4: '534346  吨',
                    area5: '534346  吨',
                    area6: '534346  吨'
                },
                {
                    date: '总计',
                    area1: '144556  公顷',
                    area2: '343353  吨',
                    area3: '534346  吨/',
                    area4: '534346  吨',
                    area5: '534346  吨/',
                    area6: '534346  吨'
                }
            ],
            tableData5: [
                {
                    date: '2019',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556  万元',
                    area4: '4556  万元'
                },
                {
                    date: '2018',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556  万元',
                    area4: '4556  万元'
                },
                {
                    date: '2017',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556  万元',
                    area4: '4556  万元'
                },
                {
                    date: '2016',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556  万元',
                    area4: '4556  万元'
                },
                {
                    date: '总计',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556  万元',
                    area4: '4556  万元'
                }
            ],
            tableData6: [
                {
                    date: '2019',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556',
                    area4: '4556'
                },
                {
                    date: '2018',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556',
                    area4: '4556'
                },
                {
                    date: '2017',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556',
                    area4: '4556'
                },
                {
                    date: '2016',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556',
                    area4: '4556'
                },
                {
                    date: '总计',
                    area1: '4556  万元',
                    area2: '4556  万元',
                    area3: '4556',
                    area4: '4556'
                }
            ]
        };
    },
    computed: {
        activeIndex() {
            return this.tabBarList.findIndex((item) => item.active);
        }
    },
    methods: {
        tableRowClassName({rowIndex}) {
            if ((rowIndex % 2) === 0) {
                return 'warning-row';
            } else {
                return 'success-row';
            }
        },
        changeTab(index) {
            this.tabBarList = this.tabBarList.map((item, _index) => {
                if (index === _index) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.data-statistics-container {
    .tab-bar-container {
        position: absolute;
        top: 1px;
        left: 0;
        right: 0;
        background-color: #0F1623;
        z-index: 10;
        .tab-bar-list {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            .tab-bar-item {
                display: flex;
                align-items: center;
                height: 80px;
                line-height: 80px;
                .title {
                    display: inline-block;
                    font-size: 27px;
                    // font-weight: 400;
                    color:#667799 ;
                    height: 52px;
                    line-height: 52px;
                    padding: 0 28px;
                    cursor: pointer;
                }
                &.active {
                    .title {
                        color: #fff;
                        background-color: $mainColor;
                        border-radius: 27px;
                    }
                }
            }
            .tab-bar-item + .tab-bar-item {
                margin-left: 20px;
            }
        }
    }
    .tab-content-container {
        margin-top: 1rem;
        .tab-content-item {
            .title-container {
                position: relative;
                height: 0.8rem;
                .title {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 7rem;
                    height: 0.8rem;
                    line-height: 0.8rem;
                    text-align: center;
                    background-image: url('../../assets/img/data_statics_bg.png');
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;
                    font-size: 0.27rem;
                    font-weight: 500;
                    color: #fff;
                }
                .download-img {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: absolute;
                    top: 50%;
                    right: 1.6rem;
                    transform: translateY(-50%);
                    cursor: pointer;
                    .svg-icon {
                        width: 0.64rem;
                        height: 0.45rem;
                    }
                    span {
                        font-size: 0.16rem;
                        font-weight: 400;
                        color: rgba(72,87,119,1);
                        line-height: 0.23rem;
                        margin-top: 0.06rem;
                    }
                }
                .download-excel {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: absolute;
                    top: 50%;
                    right: 0.3rem;
                    transform: translateY(-50%);
                    cursor: pointer;
                    .svg-icon {
                        width: 0.64rem;
                        height: 0.45rem;
                    }
                    span {
                        font-size: 0.16rem;
                        font-weight: 400;
                        color: rgba(72,87,119,1);
                        line-height: 0.23rem;
                        margin-top: 0.06rem;
                    }
                }
            }
            .table-container {
                margin-top: 0.53rem;
            }
        }
    }
}
</style>
