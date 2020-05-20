<template>
    <el-dialog
        title="种植管理信息"
        class="my-dialog"
        width="70%"
        :visible.sync="visible"
        :show-close="true"
        @open="openDialogHandler"
        :before-close="beforeCloseHandler"
        :close-on-click-modal="false"
        :close-on-press-escape="false">
        <div class="dialog-body">
            <div class="plant-protection-detail-container">
                <div class="steps">
                    <ul class="step-list">
                        <li v-for="(step, index) in stepList"
                            :key="index"
                            @click="toggleActive(index)" :class="['step-item', step.active && 'active']">
                            <span class="count">{{index + 1}}</span>
                            <span class="title">{{step.title}}</span>
                        </li>
                    </ul>
                </div>
                <div class="steps-content">
                    <el-form
                        :model="model"
                        status-icon
                        ref="peeForm"
                        label-width="160px"
                        @submit.native.prevent
                        class="my-form">
                        <div v-if="activeIndex === 0" class="step-content-item">
                            <el-row>
                                <el-col :span="10">
                                    <el-form-item label="作物名称">
                                        <el-input v-model="model.p1"></el-input>
                                    </el-form-item>
                                    <el-form-item label="种植面积 公顷">
                                        <span>1.2</span>
                                    </el-form-item>
                                    <el-form-item label="生长周期">
                                        <el-date-picker
                                            v-model="model.p3"
                                            type="daterange"
                                            :unlink-panels="true"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="品种">
                                        <el-select v-model="model.p2">
                                            <el-option
                                                v-for="item in options1"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="种植年份">
                                        <span>2020</span>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 1" class="step-content-item">
                            <el-row>
                                <el-col :span="10">
                                    <el-form-item label="二级品种名称">
                                        <el-input v-model="model.p4"></el-input>
                                    </el-form-item>
                                    <el-form-item label="种子公司名称">
                                        <el-input v-model="model.p6"></el-input>
                                    </el-form-item>
                                    <el-form-item label="生长周期">
                                        <el-date-picker
                                            v-model="model.p8"
                                            type="daterange"
                                            :unlink-panels="true"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="育种时间">
                                        <el-date-picker
                                            v-model="model.p5"
                                            type="date"
                                            placeholder="请选择上映时间">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="使用次数">
                                        <el-input v-model="model.p7"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 2" class="step-content-item">
                            <el-row>
                                <h3 class="titl">投入品1</h3>
                                <el-col :span="10">
                                    <el-form-item label="投入品类型">
                                        <el-select v-model="model.p9">
                                            <el-option
                                                v-for="item in options2"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="投入量 公斤">
                                        <el-input v-model="model.p11"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="投入时间">
                                        <el-date-picker
                                            v-model="model.p10"
                                            type="date"
                                            placeholder="请选择上映时间">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="投入品厂家">
                                        <el-input v-model="model.p12"></el-input>
                                    </el-form-item>
                                    <el-form-item label="投入方式">
                                        <el-select v-model="model.p13">
                                            <el-option
                                                v-for="item in option3"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="titl">投入品2</h3>
                                <el-col :span="10">
                                    <el-form-item label="投入品类型">
                                        <el-select v-model="model.p9">
                                            <el-option
                                                v-for="item in options2"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="投入量 公斤">
                                        <el-input v-model="model.p11"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="投入时间">
                                        <el-date-picker
                                            v-model="model.p10"
                                            type="date"
                                            placeholder="请选择上映时间">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="投入品厂家">
                                        <el-input v-model="model.p12"></el-input>
                                    </el-form-item>
                                    <el-form-item label="投入方式">
                                        <el-select v-model="model.p13">
                                            <el-option
                                                v-for="item in option3"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 3" class="step-content-item">
                            <el-row>
                                <h3 class="titl">田间管理1</h3>
                                <el-col :span="10">
                                    <el-form-item label="管理类型">
                                        <el-select v-model="model.p14">
                                            <el-option
                                                v-for="item in options4"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="管理方式">
                                        <el-select v-model="model.p16">
                                            <el-option
                                                v-for="item in options5"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="管理时间">
                                        <el-date-picker
                                            v-model="model.p15"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="titl">田间管理2</h3>
                                <el-col :span="10">
                                    <el-form-item label="管理类型">
                                        <el-select v-model="model.p14">
                                            <el-option
                                                v-for="item in options4"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="管理方式">
                                        <el-select v-model="model.p16">
                                            <el-option
                                                v-for="item in options5"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="管理时间">
                                        <el-date-picker
                                            v-model="model.p15"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 4" class="step-content-item">
                            <el-row>
                                <h3 class="titl">采收管理1</h3>
                                <el-col :span="10">
                                    <el-form-item label="管理类型">
                                        <el-select v-model="model.p17">
                                            <el-option
                                                v-for="item in options4"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="采收产量 公斤">
                                        <el-input v-model="model.p19"></el-input>
                                    </el-form-item>
                                    <el-form-item label="采收时间">
                                        <el-date-picker
                                            v-model="model.p21"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="采收方式">
                                        <el-select v-model="model.p18">
                                            <el-option
                                                v-for="item in options5"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="平均亩产 公斤">
                                        <el-input v-model="model.p20"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="titl">采收管理1</h3>
                                <el-col :span="10">
                                    <el-form-item label="管理类型">
                                        <el-select v-model="model.p17">
                                            <el-option
                                                v-for="item in options4"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="采收产量 公斤">
                                        <el-input v-model="model.p19"></el-input>
                                    </el-form-item>
                                    <el-form-item label="采收时间">
                                        <el-date-picker
                                            v-model="model.p21"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="采收方式">
                                        <el-select v-model="model.p18">
                                            <el-option
                                                v-for="item in options5"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="平均亩产 公斤">
                                        <el-input v-model="model.p20"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 5" class="step-content-item">
                            <el-row>
                                <h3 class="titl">加工管理1</h3>
                                <el-col :span="10">
                                    <el-form-item label="加工管理名称">
                                        <el-input v-model="model.p22"></el-input>
                                    </el-form-item>
                                    <el-form-item label="加工批次">
                                        <el-input v-model="model.p24"></el-input>
                                    </el-form-item>
                                    <el-form-item label="采收时间">
                                        <el-date-picker
                                            v-model="model.p26"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="加工厂商证件号">
                                        <el-input v-model="model.p23"></el-input>
                                    </el-form-item>
                                    <el-form-item label="加工量 公斤">
                                        <el-input v-model="model.p25"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="titl">加工管理2</h3>
                                <el-col :span="10">
                                    <el-form-item label="加工管理名称">
                                        <el-input v-model="model.p22"></el-input>
                                    </el-form-item>
                                    <el-form-item label="加工批次">
                                        <el-input v-model="model.p24"></el-input>
                                    </el-form-item>
                                    <el-form-item label="采收时间">
                                        <el-date-picker
                                            v-model="model.p26"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="加工厂商证件号">
                                        <el-input v-model="model.p23"></el-input>
                                    </el-form-item>
                                    <el-form-item label="加工量 公斤">
                                        <el-input v-model="model.p25"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 6" class="step-content-item">
                            <el-row>
                                <h3 class="titl">仓储管理1</h3>
                                <el-col :span="10">
                                    <el-form-item label="仓储类型">
                                        <el-select v-model="model.p27">
                                            <el-option
                                                v-for="item in options2"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="仓库容量 公斤">
                                        <el-input v-model="model.p29"></el-input>
                                    </el-form-item>
                                    <el-form-item label="仓储时间">
                                        <el-date-picker
                                            v-model="model.p31"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="仓库温度">
                                        <el-input v-model="model.p32"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="仓库地址">
                                        <el-input v-model="model.p28"></el-input>
                                    </el-form-item>
                                    <el-form-item label="本次仓储量 公斤">
                                        <el-input v-model="model.p30"></el-input>
                                    </el-form-item>
                                    <el-form-item label="仓库湿度">
                                        <el-input v-model="model.p33"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="titl">仓储管理2</h3>
                                <el-col :span="10">
                                    <el-form-item label="仓储类型">
                                        <el-select v-model="model.p27">
                                            <el-option
                                                v-for="item in options2"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="仓库容量 公斤">
                                        <el-input v-model="model.p29"></el-input>
                                    </el-form-item>
                                    <el-form-item label="仓储时间">
                                        <el-date-picker
                                            v-model="model.p31"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="仓库温度">
                                        <el-input v-model="model.p32"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="仓库地址">
                                        <el-input v-model="model.p28"></el-input>
                                    </el-form-item>
                                    <el-form-item label="本次仓储量 公斤">
                                        <el-input v-model="model.p30"></el-input>
                                    </el-form-item>
                                    <el-form-item label="仓库湿度">
                                        <el-input v-model="model.p33"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 7" class="step-content-item">
                            <el-row>
                                <h3 class="titl">检测信息1</h3>
                                <el-col :span="10">
                                    <el-form-item label="检测机构">
                                        <el-input v-model="model.p34"></el-input>
                                    </el-form-item>
                                    <el-form-item label="送检重量 公斤">
                                        <el-input v-model="model.p36"></el-input>
                                    </el-form-item>
                                    <el-form-item label="检验员">
                                        <el-input v-model="model.p38"></el-input>
                                    </el-form-item>
                                    <el-form-item label="检验项目">
                                        <el-input v-model="model.p40"></el-input>
                                    </el-form-item>
                                    <el-form-item label="检验报告">
                                        <img width="200px" height="300px" src="../../../../assets/img/检测报告.jpeg" alt="">
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="检测时间">
                                        <el-date-picker
                                            v-model="model.p35"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="送检人">
                                        <el-input v-model="model.p37"></el-input>
                                    </el-form-item>
                                    <el-form-item label="检验员电话">
                                        <el-input v-model="model.p39"></el-input>
                                    </el-form-item>
                                    <el-form-item label="送检结果">
                                        <el-input v-model="model.p41"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 8" class="step-content-item">
                            <el-row>
                                <h3 class="titl">自营电商</h3>
                                <el-col :span="10">
                                    <el-form-item label="销售额 万元">
                                        <el-input v-model="model.p42"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="利润 万元">
                                        <el-input v-model="model.p43"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="titl">合作电商</h3>
                                <el-col :span="10">
                                    <el-form-item label="销售额 万元">
                                        <el-input v-model="model.p44"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="利润 万元">
                                        <el-input v-model="model.p45"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="titl">线下渠道</h3>
                                <el-col :span="10">
                                    <el-form-item label="销售额 万元">
                                        <el-input v-model="model.p46"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="利润 万元">
                                        <el-input v-model="model.p47"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 9" class="step-content-item">
                            <el-row>
                                <h3 class="titl">受灾信息1</h3>
                                <el-col :span="10">
                                    <el-form-item label="受灾类型">
                                        <el-select v-model="model.p48">
                                            <el-option
                                                v-for="item in options7"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="受灾面积 公顷">
                                        <el-input v-model="model.p49"></el-input>
                                    </el-form-item>
                                    <el-form-item label="预计损失 元">
                                        <el-input v-model="model.p50"></el-input>
                                    </el-form-item>
                                    <el-form-item label="受灾图片">
                                        <img width="300px" height="189px" src="../../../../assets/img/水稻受灾照片.jpg" alt="">
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="受灾时间">
                                        <el-date-picker
                                            v-model="model.p52"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="预计减产 公斤">
                                        <el-input v-model="model.p53"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 10" class="step-content-item">
                            <el-row>
                                <h3 class="titl">农机具使用1</h3>
                                <el-col :span="10">
                                    <el-form-item label="农机具类型">
                                        <el-select v-model="model.p54">
                                            <el-option
                                                v-for="item in options8"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="农机具名称">
                                        <el-input v-model="model.p55"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="使用时间">
                                        <el-date-picker
                                            v-model="model.p56"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="作业面积 公顷">
                                        <el-input v-model="model.p57"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="titl">农机具使用2</h3>
                                <el-col :span="10">
                                    <el-form-item label="农机具类型">
                                        <el-select v-model="model.p54">
                                            <el-option
                                                v-for="item in options8"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="农机具名称">
                                        <el-input v-model="model.p55"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="使用时间">
                                        <el-date-picker
                                            v-model="model.p56"
                                            type="date">
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="作业面积 公顷">
                                        <el-input v-model="model.p57"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <div v-if="activeIndex === 11" class="step-content-item">
                            <el-row>
                                <h3 class="titl">证书1</h3>
                                <el-col :span="10">
                                    <el-form-item label="证书类型">
                                        <el-select v-model="model.p58">
                                            <el-option
                                                v-for="item in options9"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="证书颁发单位">
                                        <el-input v-model="model.p59"></el-input>
                                    </el-form-item>
                                    <el-form-item label="证书文件">
                                        <img width="200px" height="300px" src="../../../../assets/img/12步-证书.jpg" alt="">
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="证书编号">
                                        <el-input v-model="model.p60"></el-input>
                                    </el-form-item>
                                    <el-form-item label="有效期">
                                        <el-date-picker
                                            v-model="model.p61"
                                            type="daterange"
                                            :unlink-panels="true"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <h3 class="titl">证书2</h3>
                                <el-col :span="10">
                                    <el-form-item label="证书类型">
                                        <el-select v-model="model.p58">
                                            <el-option
                                                v-for="item in options9"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="证书颁发单位">
                                        <el-input v-model="model.p59"></el-input>
                                    </el-form-item>
                                    <el-form-item label="证书文件">
                                        <img width="200px" height="300px" src="../../../../assets/img/12步--证书1.jpg" alt="">
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="证书编号">
                                        <el-input v-model="model.p60"></el-input>
                                    </el-form-item>
                                    <el-form-item label="有效期">
                                        <el-date-picker
                                            v-model="model.p61"
                                            type="daterange"
                                            :unlink-panels="true"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button size="medium" @click="cancelHandler">取 消</el-button>
            <el-button type="primary" @click="enterHandler">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
    name: 'PlantProtectionDialog',
    data() {
        return {
            visible: false,
            model: {
                p1: '水稻',
                p2: '稻米',
                p3: ['2020-02-04', '2020-10-01'],
                p4: '稻花香1级',
                p5: '2020-03-03',
                p6: '吉林好米好种种子公司',
                p7: '8',
                p8: ['2020-02-04', '2020-10-01'],
                // 3
                p9: '有机肥',
                p10: '2020-03-03',
                p11: '10',
                p12: '吉林惠农生物科技有限公司',
                p13: '人工',
                // 4
                p14: '除草',
                p15: '2020-03-03',
                p16: '人工',
                // 5
                p17: '除草',
                p18: '人工',
                p19: '551',
                p20: '250',
                p21: '2020-03-12',
                // 6
                p22: '',
                p23: 'ss123110293',
                p24: '20200404938',
                p25: '250',
                p26: '2020-03-03',
                // 7
                p27: '分批次仓储',
                p28: '',
                p29: '20200404938',
                p30: '250',
                p31: '2020-03-03',
                p32: '33℃',
                p33: '32℃',
                // 8
                p34: '',
                p35: '2020-03-03',
                p36: '20200404938',
                p37: '',
                p38: '',
                p39: '',
                p40: '',
                p41: '',
                // 9
                p42: '230',
                p43: '230',
                p44: '230',
                p45: '230',
                p46: '230',
                p47: '230',
                // 10
                p48: '',
                p49: '',
                p50: '',
                p51: '',
                p52: '',
                p53: '',
                // 11
                p54: '',
                p55: '',
                p56: '',
                p57: '',
                // 12
                p58: '',
                p59: '',
                p60: '',
                p61: []

            },
            options1: [
                {
                    value: '稻花香',
                    label: '稻花香'
                },
                {
                    value: '长粒香',
                    label: '长粒香'
                }
            ],
            //  3
            options2: [
                {
                    value: '有机肥',
                    label: '有机肥'
                },
                {
                    value: '复合肥',
                    label: '复合肥'
                },
                {
                    value: '氮肥',
                    label: '氮肥'
                },
                {
                    value: '农药',
                    label: '农药'
                },
                {
                    value: '其他',
                    label: '其他'
                }
            ],
            option3: [
                {
                    value: '人工',
                    label: '人工'
                },
                {
                    value: '机械',
                    label: '机械'
                }
            ],
            // 4
            options4: [
                {
                    value: '除草',
                    label: '除草'
                },
                {
                    value: '间田',
                    label: '间田'
                },
                {
                    value: '松土',
                    label: '松土'
                }
            ],
            options5: [
                {
                    value: '机械化',
                    label: '机械化'
                },
                {
                    value: '半机械化',
                    label: '半机械化'
                },
                {
                    value: '人工',
                    label: '人工'
                }
            ],
            // 10
            options7: [
                {
                    value: '霜灾',
                    label: '霜灾'
                },
                {
                    value: '水灾',
                    label: '水灾'
                },
                {
                    value: '旱灾',
                    label: '旱灾'
                },
                {
                    value: '虫灾',
                    label: '虫灾'
                },
                {
                    value: '其他',
                    label: '其他'
                }
            ],
            // 11
            options8: [
                {
                    value: '收获机械',
                    label: '收获机械'
                },
                {
                    value: '运输机械',
                    label: '运输机械'
                }
            ],
            // 12
            options9: [
                {
                    value: '有机',
                    label: '有机'
                },
                {
                    value: '绿色',
                    label: '绿色'
                },
                {
                    value: '无公害',
                    label: '无公害'
                }
            ],
            stepList: [
                {
                    title: '基础信息',
                    active: true
                },
                {
                    title: '种质种苗',
                    active: false
                },
                {
                    title: '投入品',
                    active: false
                },
                {
                    title: '田间管理',
                    active: false
                },
                {
                    title: '采收管理',
                    active: false
                },
                {
                    title: '加工管理',
                    active: false
                },
                {
                    title: '仓储管理',
                    active: false
                },
                {
                    title: '检测信息',
                    active: false
                },
                {
                    title: '销售信息',
                    active: false
                },
                {
                    title: '受灾信息',
                    active: false
                },
                {
                    title: '农机具使用',
                    active: false
                },
                {
                    title: '证书管理',
                    active: false
                }
            ]
        }
    },
    computed: {
        activeIndex() {
            let index = this.stepList.findIndex((item) => item.active);
            return index;
        }
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
        openDialogHandler() {},
        beforeCloseHandler() {
            this.cancelHandler();
        },
        cancelHandler() {
            this.hide();
        },
        enterHandler() {
            this.cancelHandler();
        },
        toggleActive(active) {
            this.stepList = this.stepList.map((item, index) => {
                if (index === active) {
                    item.active = true
                } else {
                    item.active = false;
                }
                return item;
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.plant-protection-detail-container {
    .steps {
        width: 100%;
        margin-top: 20px;
        .step-list {
            display: flex;
            .step-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1;
                cursor: pointer;
                .count {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50px;
                    height: 50px;
                    color: #fff;
                    border: 1px solid $mainColor;
                    border-radius: 50%;
                    margin-bottom: 10px;
                }
                .title {
                    color: #fff;
                }
                &.active {
                    .count {
                        background-color: $mainColor;
                    }
                    .title {
                        color: $mainColor;
                    }
                }
            }

        }
    }
    .steps-content {
        margin-top: 40px;
    }
}
</style>
