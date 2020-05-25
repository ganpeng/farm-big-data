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
                <div class="table-container">
                    <el-table
                        :data="tableData1"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area1" label="耕地面积">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area6" label="耕地同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area6) && 'text-success', isDanger(scope.row.area6) && 'text-danger']">
                                    {{ scope.row.area6 }}<i v-if="isSuccess(scope.row.area6) || isDanger(scope.row.area6)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area2" label="宅基地面积">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area2 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area7" label="宅基地同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area7) && 'text-success', isDanger(scope.row.area7) && 'text-danger']">
                                    {{ scope.row.area7 }}<i v-if="isSuccess(scope.row.area7) || isDanger(scope.row.area7)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area3" label="水田面积">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area3 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area4" label="旱田面积">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area4 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area5" label="水浇地面积">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area5) && 'text-success', isDanger(scope.row.area5) && 'text-danger']">
                                    {{ scope.row.area5 }}<i v-if="isSuccess(scope.row.area5) || isDanger(scope.row.area5)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="title-container">
                    <!-- <h3 class="title">吉林智慧农业系统地块统计</h3> -->
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
            </div>
            <div v-if="activeIndex === 1" class="tab-content-item tab-content-two">
                <div class="table-container">
                    <el-table
                        :data="tableData2"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area1" label="经营人员">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area6" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area6) && 'text-success', isDanger(scope.row.area6) && 'text-danger']">
                                    {{ scope.row.area6 }}<i v-if="isSuccess(scope.row.area6) || isDanger(scope.row.area6)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area2" label="种植人员">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area2 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area7" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area7) && 'text-success', isDanger(scope.row.area7) && 'text-danger']">
                                    {{ scope.row.area7 }}<i v-if="isSuccess(scope.row.area7) || isDanger(scope.row.area7)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area3" label="接受培训时长">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area3 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area8" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area8) && 'text-success', isDanger(scope.row.area8) && 'text-danger']">
                                    {{ scope.row.area8 }}<i v-if="isSuccess(scope.row.area8) || isDanger(scope.row.area8)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area4" label="有专业证书人员">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area4 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area9" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area9) && 'text-success', isDanger(scope.row.area9) && 'text-danger']">
                                    {{ scope.row.area9 }}<i v-if="isSuccess(scope.row.area9) || isDanger(scope.row.area9)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area5" label="贫困户成员">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area5 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area10" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area10) && 'text-success', isDanger(scope.row.area10) && 'text-danger']">
                                    {{ scope.row.area10 }}<i v-if="isSuccess(scope.row.area10) || isDanger(scope.row.area10)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="title-container">
                    <!-- <h3 class="title">吉林智慧农业系统从业人员统计</h3> -->
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
            </div>
            <div v-if="activeIndex === 2" class="tab-content-item tab-content-three">
                <div class="table-container">
                    <el-table
                        :data="tableData3"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area1" label="种植面积">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area6" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area6) && 'text-success', isDanger(scope.row.area6) && 'text-danger']">
                                    {{ scope.row.area6 }}<i v-if="isSuccess(scope.row.area6) || isDanger(scope.row.area6)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area2" label="产量">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area2 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area7" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area7) && 'text-success', isDanger(scope.row.area7) && 'text-danger']">
                                    {{ scope.row.area7 }}<i v-if="isSuccess(scope.row.area7) || isDanger(scope.row.area7)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area3" label="亩产">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area3 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area8" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area8) && 'text-success', isDanger(scope.row.area8) && 'text-danger']">
                                    {{ scope.row.area8 }}<i v-if="isSuccess(scope.row.area8) || isDanger(scope.row.area8)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area4" label="产值">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area4 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area9" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area9) && 'text-success', isDanger(scope.row.area9) && 'text-danger']">
                                    {{ scope.row.area9 }}<i v-if="isSuccess(scope.row.area9) || isDanger(scope.row.area9)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area5" label="人均产值">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area5 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area10" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area10) && 'text-success', isDanger(scope.row.area10) && 'text-danger']">
                                    {{ scope.row.area10 }}<i v-if="isSuccess(scope.row.area10) || isDanger(scope.row.area10)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="title-container">
                    <!-- <h3 class="title">吉林智慧农业系统农作物统计</h3> -->
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
            </div>
            <div v-if="activeIndex === 3" class="tab-content-item tab-content-four">
                <div class="table-container">
                    <el-table
                        :data="tableData4"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area1" label="有机肥">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area7" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area7) && 'text-success', isDanger(scope.row.area7) && 'text-danger']">
                                    {{ scope.row.area7 }}<i v-if="isSuccess(scope.row.area7) || isDanger(scope.row.area7)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area3" label="无机肥">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area3 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area8" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area8) && 'text-success', isDanger(scope.row.area8) && 'text-danger']">
                                    {{ scope.row.area8 }}<i v-if="isSuccess(scope.row.area8) || isDanger(scope.row.area8)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area4" label="农药">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area4 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area9" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area9) && 'text-success', isDanger(scope.row.area9) && 'text-danger']">
                                    {{ scope.row.area9 }}<i v-if="isSuccess(scope.row.area9) || isDanger(scope.row.area9)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area5" label="其他">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area5 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area10" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area10) && 'text-success', isDanger(scope.row.area10) && 'text-danger']">
                                    {{ scope.row.area10 }}<i v-if="isSuccess(scope.row.area10) || isDanger(scope.row.area10)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area6" label="总计">
                            <template slot-scope="scope">
                                <span>{{ scope.row.area6 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area11" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area11) && 'text-success', isDanger(scope.row.area11) && 'text-danger']">
                                    {{ scope.row.area11 }}<i v-if="isSuccess(scope.row.area11) || isDanger(scope.row.area11)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="title-container">
                    <!-- <h3 class="title">吉林智慧农业系统投入品统计</h3> -->
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
            </div>
            <div v-if="activeIndex === 4" class="tab-content-item tab-content-five">
                <div class="table-container">
                    <el-table
                        :data="tableData5"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style">
                        <el-table-column align="center" prop="date" label="年份">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area1" label="吉视农业电商平台销售额">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area5" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area5) && 'text-success', isDanger(scope.row.area5) && 'text-danger']">
                                    {{ scope.row.area5 }}<i v-if="isSuccess(scope.row.area5) || isDanger(scope.row.area5)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area2" label="合作电商销售额">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area6" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area6) && 'text-success', isDanger(scope.row.area6) && 'text-danger']">
                                    {{ scope.row.area6 }}<i v-if="isSuccess(scope.row.area6) || isDanger(scope.row.area6)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area3" label="线下渠道销售额">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area7" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area7) && 'text-success', isDanger(scope.row.area7) && 'text-danger']">
                                    {{ scope.row.area7 }}<i v-if="isSuccess(scope.row.area7) || isDanger(scope.row.area7)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area4" label="总计">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area8" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area8) && 'text-success', isDanger(scope.row.area8) && 'text-danger']">
                                    {{ scope.row.area8 }}<i v-if="isSuccess(scope.row.area8) || isDanger(scope.row.area8)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="title-container">
                    <!-- <h3 class="title">吉林智慧农业系统销售统计</h3> -->
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
            </div>
            <div v-if="activeIndex === 5" class="tab-content-item tab-content-five">
                <div class="table-container">
                    <el-table
                        :data="tableData6"
                        header-row-class-name="common-table-header"
                        size="small"
                        :row-class-name="tableRowClassName"
                        class="my-table-style"
                        style="width: 100%">
                        <el-table-column align="center" prop="date" label="年份">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area1" label="服务营收">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area5" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area5) && 'text-success', isDanger(scope.row.area5) && 'text-danger']">
                                    {{ scope.row.area5 }}<i v-if="isSuccess(scope.row.area5) || isDanger(scope.row.area5)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area2" label="服务小农户营收">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area6" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area6) && 'text-success', isDanger(scope.row.area6) && 'text-danger']">
                                    {{ scope.row.area6 }}<i v-if="isSuccess(scope.row.area6) || isDanger(scope.row.area6)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area3" label="服务对象">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area7" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area7) && 'text-success', isDanger(scope.row.area7) && 'text-danger']">
                                    {{ scope.row.area7 }}<i v-if="isSuccess(scope.row.area7) || isDanger(scope.row.area7)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area4" label="服务小农户">
                            <template slot-scope="scope">
                                <span>{{ scope.row.date }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="area8" label="同比增长">
                            <template slot-scope="scope">
                                <span
                                    :class="[isSuccess(scope.row.area8) && 'text-success', isDanger(scope.row.area8) && 'text-danger']">
                                    {{ scope.row.area8 }}<i v-if="isSuccess(scope.row.area8) || isDanger(scope.row.area8)">%</i>
                                </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="title-container">
                    <!-- <h3 class="title">吉林智慧农业系统农业社会化服务统计</h3> -->
                    <div class="download-img">
                        <svg-icon icon-class="d_img"/>
                        <span>下载图片</span>
                    </div>
                    <div class="download-excel">
                        <svg-icon icon-class="d_excel"/>
                        <span>下载excel文件</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: 'DataStatisticsDetail',
    data() {
        return {
            // activeIndex: 0,
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
                    area1: '1300 公顷',
                    area2: '56 公顷',
                    area3: '123436 公顷',
                    area4: '3436 公顷',
                    area5: '3236 公顷',
                    area6: 8,
                    area7: 23
                },
                {
                    date: '2018',
                    area1: '1200 公顷',
                    area2: '40 公顷',
                    area3: '123436 公顷',
                    area4: '3436 公顷',
                    area5: '3236 公顷',
                    area6: 9,
                    area7: 39
                },
                {
                    date: '2017',
                    area1: '1100 公顷',
                    area2: '30 公顷',
                    area3: '123436 公顷',
                    area4: '3436 公顷',
                    area5: '3236 公顷',
                    area6: 10,
                    area7: 50
                },
                {
                    date: '2016',
                    area1: '1000 公顷',
                    area2: '20 公顷',
                    area3: '123436 公顷',
                    area4: '3436 公顷',
                    area5: '3236 公顷',
                    area6: '/',
                    area7: '/'
                }
            ],
            tableData2: [
                {
                    date: '2019',
                    area1: '2223',
                    area2: '2223',
                    area3: '5348',
                    area4: '3223',
                    area5: '223',
                    area6: 8,
                    area7: 8,
                    area8: 8,
                    area9: 8,
                    area10: 8
                },
                {
                    date: '2018',
                    area1: '1323',
                    area2: '1323',
                    area3: '4665',
                    area4: '2324',
                    area5: '345',
                    area6: 9,
                    area7: 9,
                    area8: 9,
                    area9: 9,
                    area10:9
                },
                {
                    date: '2017',
                    area1: '1223',
                    area2: '1223',
                    area3: '4436',
                    area4: '1232',
                    area5: '223',
                    area6: 10,
                    area7: 10,
                    area8: 10,
                    area9: 10,
                    area10:10
                },
                {
                    date: '2016',
                    area1: '941',
                    area2: '941',
                    area3: '3436',
                    area4: '1114',
                    area5: '116',
                    area6: '/',
                    area7: '/',
                    area8: '/',
                    area9: '/',
                    area10: '/'
                }
            ],
            tableData3: [
                {
                    date: '2019',
                    area1: '1456 公顷',
                    area2: '432443 吨',
                    area3: '500 公斤',
                    area4: '3436 万元',
                    area5: '9436 元',
                    area6: 8,
                    area7: 8,
                    area8: 2,
                    area9: 8,
                    area10: 2
                },
                {
                    date: '2018',
                    area1: '1356 公顷',
                    area2: '324346 吨',
                    area3: '480 公斤',
                    area4: '2486 万元',
                    area5: '8443 元',
                    area6: 9,
                    area7: 9,
                    area8: -3,
                    area9: 9,
                    area10: -3
                },
                {
                    date: '2017',
                    area1: '1056 公顷',
                    area2: '234346 吨',
                    area3: '510 公斤',
                    area4: '2436 万元',
                    area5: '9748 元',
                    area6: 10,
                    area7: 10,
                    area8: 2,
                    area9: 10,
                    area10: 2
                },
                {
                    date: '2016',
                    area1: '956 公顷',
                    area2: '143353 吨',
                    area3: '500 公斤',
                    area4: '1436 万元',
                    area5: '8236 元',
                    area6: '/',
                    area7: '/',
                    area8: '/',
                    area9: '/',
                    area10: '/'
                },
                {
                    date: '总计',
                    area1: '4556 公顷',
                    area2: '1043353 吨',
                    area3: '/',
                    area4: '3436 万元',
                    area5: '/',
                    area6: '/',
                    area7: '/',
                    area8: '/',
                    area9: '/',
                    area10: '/'
                }
            ],
            tableData4: [
                {
                    date: '2019',
                    area1: '144556 公顷',
                    area2: '3795 吨',
                    area3: '3795 吨',
                    area4: '2129 吨',
                    area5: '3795 吨',
                    area6: '6344 吨',
                    area7: 8,
                    area8: 8,
                    area9: 8,
                    area10: 8,
                    area11: 8
                },
                {
                    date: '2018',
                    area1: '144556 公顷',
                    area2: '1443 吨',
                    area3: '1443 吨',
                    area4: '2048 吨',
                    area5: '1443 吨',
                    area6: '5845 吨',
                    area7: 3,
                    area8: 3,
                    area9: 3,
                    area10: 3,
                    area11: 3
                },
                {
                    date: '2017',
                    area1: '144556 公顷',
                    area2: '1344 吨',
                    area3: '1344 吨',
                    area4: '1948 吨',
                    area5: '1344 吨',
                    area6: '5344 吨',
                    area7: 5,
                    area8: 5,
                    area9: 5,
                    area10: 5,
                    area11: 5
                },
                {
                    date: '2016',
                    area1: '144556 公顷',
                    area2: '1053 吨',
                    area3: '1053 吨',
                    area4: '1454 吨',
                    area5: '1053 吨',
                    area6: '4353 吨',
                    area7: '/',
                    area8: '/',
                    area9: '/',
                    area10: '/',
                    area11: '/'
                },
                {
                    date: '总计',
                    area1: '144556  公顷',
                    area2: '343353  吨',
                    area3: '534346  吨/',
                    area4: '534346  吨',
                    area5: '534346  吨/',
                    area6: '534346  吨',
                    area7: '',
                    area8: '',
                    area9: '',
                    area10: '',
                    area11: ''
                }
            ],
            tableData5: [
                {
                    date: '2019',
                    area1: '6444 万元',
                    area2: '5666 万元',
                    area3: '4555 万元',
                    area4: '34444 万元',
                    area5: 8,
                    area6: 10,
                    area7: 7,
                    area8: 8

                },
                {
                    date: '2018',
                    area1: '5788 万元',
                    area2: '4789 万元',
                    area3: '3444 万元',
                    area4: '23466 万元',
                    area5: 11,
                    area6: 9,
                    area7: 9,
                    area8: 9
                },
                {
                    date: '2017',
                    area1: '5233 万元',
                    area2: '3766 万元',
                    area3: '2488 万元',
                    area4: '14556 万元',
                    area5: 10,
                    area6: 10,
                    area7: 6,
                    area8: 10
                },
                {
                    date: '2016',
                    area1: '4556 万元',
                    area2: '2334 万元',
                    area3: '1687 万元',
                    area4: '10556 万元',
                    area5: '/',
                    area6: '/',
                    area7: '/',
                    area8: '/'
                }
            ],
            tableData6: [
                {
                    date: '2019',
                    area1: '6444 万元',
                    area2: '834 万元',
                    area3: '1333 户',
                    area4: '234 户',
                    area5: 8,
                    area6: 8,
                    area7: 8,
                    area8: 8
                },
                {
                    date: '2018',
                    area1: '5788 万元',
                    area2: '713 万元',
                    area3: '1044 户',
                    area4: '168 户',
                    area5: 11,
                    area6: 11,
                    area7: 11,
                    area8: 11
                },
                {
                    date: '2017',
                    area1: '5233 万元',
                    area2: '645 万元',
                    area3: '945 户',
                    area4: '156 户',
                    area5: 10,
                    area6: 10,
                    area7: 10,
                    area8: 10
                },
                {
                    date: '2016',
                    area1: '4556 万元',
                    area2: '556 万元',
                    area3: '834 户',
                    area4: '134 户',
                    area5: '/',
                    area6: '/',
                    area7: '/',
                    area8: '/'
                }
            ]
        };
    },
    created() {
        let {index} = this.$route.query;
        this.changeTab(parseInt(index));
    },
    computed: {
        activeIndex() {
            let index = this.tabBarList.findIndex((item) => item.active);
            console.log(index);
            return index;
        },
        isSuccess() {
            return (value) => {
                return _.isFinite(value) && value > 0
            };
        },
        isDanger() {
            return (value) => {
                return _.isFinite(value) && value < 0;
            };
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
            justify-content: flex-start;
            // justify-content: center;
            height: 50px;
            .tab-bar-item {
                display: flex;
                align-items: center;
                height: 50px;
                line-height: 50px;
                .title {
                    display: inline-block;
                    font-size: 16px;
                    color:#667799 ;
                    height: 32px;
                    line-height: 32px;
                    padding: 0 24px;
                    cursor: pointer;
                }
                &.active {
                    .title {
                        color: #fff;
                        background-color: $mainColor;
                        border-radius: 20px;
                    }
                }
            }
            .tab-bar-item {
                margin-left: 20px;
            }
        }
    }
    .tab-content {
        margin-top: 40px;
    }
    .tab-content-container {
        // margin-top: 1rem;
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
