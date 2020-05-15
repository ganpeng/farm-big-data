<!-- 可视农场 -->
<template>
    <div id="visual-farm-container">
        <!-- 左侧导航 -->
        <div id="fake-router-block">
            <div @click="gotoFarmVisual" class="back-block">
                <svg-icon icon-class="v_back"></svg-icon>
                <label>返回农场列表</label>
            </div>
            <div class="nav-list">
                <div class="nav-item"
                     v-for="(item, index) in navList"
                     :key="index"
                     @click="selectNav(index)"
                     :class="{'active':currentIndex === index}">
                    <svg-icon :icon-class="item.icon"></svg-icon>
                    <svg-icon :icon-class="item.icon + '_active'" class="active"></svg-icon>
                    <label>{{item.name}}</label>
                </div>
            </div>
        </div>
        <!-- 右侧内容 -->
        <div id="farm-content-block">
            <div id="content-image">
                <img :src="farmContentCoverUrl">
            </div>
            <div class="farm-content-title">
                <svg-icon icon-class="v_title_symbol"></svg-icon>
                <label>吉林市十月稻田生态农场</label>
            </div>
            <!-- 基本信息弹窗 -->
            <div id="basic-info-popup-block" v-if="currentIndex === 0">
                <div class="title">[吉林市十月稻田生态农场]</div>
                <div class="info-list">
                    <label>名称：吉林十月稻田生态农场</label>
                    <label>地址：吉林市/磐石市/取柴河镇/大桥村</label>
                    <label>面积：448.32公顷</label>
                    <label>类型：家庭农场</label>
                </div>
                <span class="close-block" @click="currentIndex = -1">
                    <svg-icon icon-class="v_popup_close"></svg-icon>
                </span>
            </div>
            <!-- 作物信息弹窗 -->
            <div id="crop-info-popup-block" v-if="currentIndex === 1">
                <div class="title">作物信息</div>
                <div class="info-list">
                    <div class="table-title">
                        <div></div>
                        <div>
                            <label>种植面积</label>
                            <span>（公顷）</span>
                        </div>
                        <div>
                            <label>预估产量</label>
                            <span>（吨）</span>
                        </div>
                        <div>
                            <label>预估产值</label>
                            <span>（元）</span>
                        </div>
                        <div></div>
                    </div>
                    <div class="data-item">
                        <div>
                            <svg-icon icon-class="v_rice"></svg-icon>
                            <label>水稻</label>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_up"></svg-icon>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_down"></svg-icon>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_down"></svg-icon>
                        </div>
                        <div>
                            <el-popover
                                placement="right-start"
                                trigger="click"
                                width="160"
                                v-model="visible">
                                <div class="title-block">
                                    <svg-icon icon-class="v_tip_info"></svg-icon>
                                    <label>说明</label>
                                </div>
                                <p class="content-block">种植面积增加了多少，根据预测将 会增收怎样怎样怎样怎样，这里是 假的文字填充。</p>
                                <el-button slot="reference">
                                    <svg-icon icon-class="v_info"></svg-icon>
                                    <svg-icon icon-class="v_info_active"></svg-icon>
                                </el-button>
                            </el-popover>
                        </div>
                    </div>
                    <div class="data-item">
                        <div>
                            <svg-icon icon-class="v_soybeans"></svg-icon>
                            <label>大豆</label>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_up"></svg-icon>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_down"></svg-icon>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_down"></svg-icon>
                        </div>
                        <div>
                            <el-popover
                                placement="right-start"
                                trigger="click"
                                width="160"
                                v-model="visible">
                                <div class="title-block">
                                    <svg-icon icon-class="v_tip_info"></svg-icon>
                                    <label>说明</label>
                                </div>
                                <p class="content-block">种植面积增加了多少，根据预测将 会增收怎样怎样怎样怎样，这里是 假的文字填充。</p>
                                <el-button slot="reference">
                                    <svg-icon icon-class="v_info"></svg-icon>
                                    <svg-icon icon-class="v_info_active"></svg-icon>
                                </el-button>
                            </el-popover>
                        </div>
                    </div>
                    <div class="data-item">
                        <div>
                            <svg-icon icon-class="v_corn"></svg-icon>
                            <label>玉米</label>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_up"></svg-icon>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_down"></svg-icon>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_down"></svg-icon>
                        </div>
                        <div>
                            <el-popover
                                placement="right-start"
                                trigger="click"
                                width="160"
                                v-model="visible">
                                <div class="title-block">
                                    <svg-icon icon-class="v_tip_info"></svg-icon>
                                    <label>说明</label>
                                </div>
                                <p class="content-block">种植面积增加了多少，根据预测将 会增收怎样怎样怎样怎样，这里是 假的文字填充。</p>
                                <el-button slot="reference">
                                    <svg-icon icon-class="v_info"></svg-icon>
                                    <svg-icon icon-class="v_info_active"></svg-icon>
                                </el-button>
                            </el-popover>
                        </div>
                    </div>
                    <div class="total">
                        <div>
                            <label>总计</label>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_up"></svg-icon>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_down"></svg-icon>
                        </div>
                        <div>
                            <label>12344</label>
                            <svg-icon icon-class="v_down"></svg-icon>
                        </div>
                        <div>
                            <el-popover
                                placement="right-start"
                                trigger="click"
                                width="160"
                                v-model="visible">
                                <div class="title-block">
                                    <svg-icon icon-class="v_tip_info"></svg-icon>
                                    <label>说明</label>
                                </div>
                                <p class="content-block">种植面积增加了多少，根据预测将 会增收怎样怎样怎样怎样，这里是 假的文字填充。</p>
                                <el-button slot="reference">
                                    <svg-icon icon-class="v_info"></svg-icon>
                                    <svg-icon icon-class="v_info_active"></svg-icon>
                                </el-button>
                            </el-popover>
                        </div>
                    </div>
                </div>
                <span class="close-block" @click="currentIndex = -1">
                    <svg-icon icon-class="v_popup_close"></svg-icon>
                </span>
            </div>
            <!-- 实时数据 -->
            <div id="real-data-popup-block" v-if="currentIndex === 2">
                <div class="title">实时数据</div>
                <div class="table-list">
                    <div class="item-data">
                        <div>
                            <label>温度</label>
                            <span>23℃</span>
                        </div>
                        <div>
                            <label>湿度</label>
                            <span>19.8%</span>
                        </div>
                        <div>
                            <label>风速</label>
                            <span>0m/s</span>
                        </div>
                        <div>
                            <label>风向</label>
                            <span>159°</span>
                        </div>
                    </div>
                    <div class="item-data">
                        <div>
                            <label>雨量</label>
                            <span class="rain-data">0mm</span>
                        </div>
                        <div>
                            <label>光照度</label>
                            <span>132wlux</span>
                        </div>
                        <div>
                            <label>大气压</label>
                            <span>978hpa</span>
                        </div>
                        <div>
                            <label>PH值</label>
                            <span>6.4</span>
                        </div>
                    </div>
                    <div class="item-data">
                        <div>
                            <label>土壤温度</label>
                            <span>22℃</span>
                        </div>
                        <div>
                            <label>土壤湿度</label>
                            <span>11.0%</span>
                        </div>
                        <div>
                            <label>电导率</label>
                            <span>125us/cm</span>
                        </div>
                        <div>
                            <label>捕虫量</label>
                            <span class="insect-data">592个</span>
                        </div>
                    </div>
                </div>
                <span class="close-block" @click="currentIndex = -1">
                    <svg-icon icon-class="v_popup_close"></svg-icon>
                </span>
            </div>
            <!-- 监控视频 -->
            <div id="monitor-popup-block" v-if="currentIndex === 3">
                <div class="title-block">
                    <div class="title">监控视频</div>
                    <el-select
                        v-model="monitor.currentCamera"
                        clearable
                        placeholder="请选择摄像头">
                        <el-option
                            v-for="item in monitorCameraOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="current-camera">{{monitor.currentCamera}}</div>
                <video :src="cameraUrlList[ monitor.currentCamera === '球形摄像头01' ? 0 : 1]" controls></video>
                <span class="close-block" @click="currentIndex = -1">
                    <svg-icon icon-class="v_popup_close"></svg-icon>
                </span>
            </div>
            <!-- 延时摄影 -->
            <div id="time-lapse-popup-block" v-if="currentIndex === 4">
                <div class="title-block">
                    <div class="title">延时摄影</div>
                    <el-select
                        v-model="timeLapse.currentTime"
                        clearable
                        placeholder="请选择时间">
                        <el-option
                            v-for="item in timelapseOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="current-camera">{{timeLapse.currentTime}}</div>
                <video :src="timeUrlList[0]" controls></video>
                <span class="close-block" @click="currentIndex = -1">
                    <svg-icon icon-class="v_popup_close"></svg-icon>
                </span>
            </div>
            <!-- 预警信息 -->
            <div id="warning-popup-block" v-if="currentIndex === 5">
                <div class="title">预警信息</div>
                <div class="table-list">
                    <div class="table-title">
                        <div>预警类型</div>
                        <div>发生时段</div>
                        <div>预警详情</div>
                        <div>预警时间</div>
                        <div>处理状态</div>
                    </div>
                    <div class="item-data">
                        <div>
                            <i class="warning-first"></i>
                            <label>冰雹预警</label>
                        </div>
                        <div>5/1 12:00-5/2 23:50</div>
                        <div>
                            <label>冰雹伴有大风降温，最大降幅为10</label>
                            <label>度左右，请做好农作物保护工作。</label>
                        </div>
                        <div>30分钟前</div>
                        <div>
                            <el-button type="primary" class="deal-btn" v-if="!warningInfoListStatus[0]"
                                       @click="warningDealShow = true">去处理
                            </el-button>
                            <label class="name" v-else>处理结果</label>
                        </div>
                    </div>
                    <div class="item-data">
                        <div>
                            <i class="warning-second"></i>
                            <label>冰雹预警</label>
                        </div>
                        <div>5/1 12:00-5/2 23:50</div>
                        <div>
                            <label>冰雹伴有大风降温，最大降幅为10</label>
                            <label>度左右，请做好农作物保护工作。</label>
                        </div>
                        <div>2天前</div>
                        <div>
                            <el-button type="primary" class="deal-btn" v-if="!warningInfoListStatus[1]"
                                       @click="warningDealShow = true">去处理
                            </el-button>
                            <el-popover
                                v-else
                                placement="right-start"
                                trigger="click"
                                width="160">
                                <p>处理结果</p>
                                <p>王进 185000001111</p>
                                <p>90分钟前</p>
                                <p>对农作物进行了防护，并通知了</p>
                                <p>有关负责人。</p>
                                <el-button slot="reference">
                                    <label class="name">处理结果</label>
                                </el-button>
                            </el-popover>
                        </div>
                    </div>
                    <div class="item-data">
                        <div>
                            <i class="warning-third"></i>
                            <label>冰雹预警</label>
                        </div>
                        <div>5/1 12:00-5/2 23:50</div>
                        <div>
                            <label>冰雹伴有大风降温，最大降幅为10</label>
                            <label>度左右，请做好农作物保护工作。</label>
                        </div>
                        <div>2天前</div>
                        <div>
                            <el-button type="primary" class="deal-btn"
                                       v-if="!warningInfoListStatus[2]"
                                       @click="warningDealShow = true">去处理
                            </el-button>
                            <el-popover
                                class="deal-info-popover"
                                v-else
                                placement="right-start"
                                trigger="click"
                                width="160">
                                <p>处理结果</p>
                                <p>王进 185000001111</p>
                                <p>90分钟前</p>
                                <p>对农作物进行了防护，并通知了</p>
                                <p>有关负责人。</p>
                                <el-button slot="reference">
                                    <label class="name">处理结果</label>
                                </el-button>
                            </el-popover>
                        </div>
                    </div>
                </div>
                <span class="close-block" @click="currentIndex = -1">
                    <svg-icon icon-class="v_popup_close"></svg-icon>
                </span>
            </div>
            <!-- 处理信息 -->
            <div id="warning-deal-block" v-if="warningDealShow">
                <el-form
                    ref="roleInfo"
                    :model="roleInfo"
                    :rules="infoRules"
                    status-icon
                    label-width="110px"
                    class="form-block">
                    <div class="title">预警处理</div>
                    <el-form-item label="处理人" required>
                        <el-select
                            v-model="dealInfo.person"
                            size="medium"
                            placeholder="请选择处理人">
                            <el-option
                                v-for="item in dealPersonOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="处理方式" required>
                        <el-input
                            v-model="dealInfo.style"
                            size="medium"
                            type="textarea"
                            :maxlength="600"
                            :rows="8"
                            placeholder="对农作物进行了防护，并通知了有关负责人。">
                        </el-input>
                    </el-form-item>
                </el-form>
                <div class="btn-block">
                    <el-button type="primary" class="deal-btn" @click="warningDealShow = false">确定</el-button>
                </div>
                <span class="close-block" @click="warningDealShow = false">
                    <svg-icon icon-class="v_popup_close"></svg-icon>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VisualFarm',
        data() {
            return {
                warningDealShow: false,
                monitor: {currentCamera: '球形摄像头01'},
                monitorCameraOptions: [{
                    value: '球形摄像头01',
                    label: '球形摄像头01'
                }, {
                    value: '枪机摄像头01',
                    label: '枪机摄像头01'
                }],
                cameraUrlList: [
                    'http://n.video.tianchimedia.net/live/34020000001320000001.m3u8?auth_key=1887345156-0-0-7a1e07618d0822cea368feceaeecbf09',
                    'http://n.video.tianchimedia.net/live/34020000001320000004.m3u8?auth_key=1887345171-0-0-29ab1884a19a51a0d647b906cc99f9ff'
                ],
                timeLapse: {currentTime: '2020.01'},
                timelapseOptions: [{
                    value: '2020.01',
                    label: '2020.01'
                }, {
                    value: '2020.02',
                    label: '2020.02'
                }],
                timeUrlList: [
                    'http://n.video.tianchimedia.net/live/34020000001320000001.m3u8?auth_key=1887345156-0-0-7a1e07618d0822cea368feceaeecbf09',
                    'http://n.video.tianchimedia.net/live/34020000001320000004.m3u8?auth_key=1887345171-0-0-29ab1884a19a51a0d647b906cc99f9ff'
                ],
                warningInfoListStatus: [false, true, true],
                dealInfo: {
                    person: '',
                    style: ''
                },
                dealPersonOptions: [{
                    label: '刘大力',
                    value: '刘大力'
                }, {
                    label: '李海啸',
                    value: '李海啸'
                }, {
                    label: '王美娇',
                    value: '王美娇'
                }, {
                    label: '童海川',
                    value: '童海川'
                }],
                farmContentCoverUrl: require('@/assets/img/v_farm_cover.jpg'),
                navList: [{
                    name: '基本信息',
                    icon: 'v_nav_basic_info'
                }, {
                    name: '作物信息',
                    icon: 'v_nav_crop_info'
                }, {
                    name: '实时数据',
                    icon: 'v_nav_real_data'
                }, {
                    name: '监控视频',
                    icon: 'v_nav_watch'
                }, {
                    name: '延时摄影',
                    icon: 'v_nav_clapboard'
                }, {
                    name: '预警信息',
                    icon: 'v_tab_warning'
                }],
                currentIndex: -1
            };
        },
        methods: {
            selectNav(index) {
                this.currentIndex = index;
            },
            gotoFarmVisual() {
                this.$router.push({ name: 'FarmVisual' });
            }
        }
    };
</script>

<style scoped lang="scss">

    #visual-farm-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(21, 32, 54, 1) 0%, rgba(37, 47, 70, 1) 100%);
    }

    /* 处理预警信息 */
    #warning-deal-block {
        position: absolute;
        left: 382px;
        top: 263px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 17px;
        background: rgba(41, 53, 80, 1);
        border-radius: 8px;
        width: 503px;
        height: 407px;
        .title {
            margin-bottom: 14px;
            text-align: center;
            font-size: 18px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
        }
        .btn-block {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .deal-btn {
                margin-top: 20px;
                width: 100px;
                height: 40px;
            }
        }
        .close-block {
            position: absolute;
            top: 15px;
            right: 8px;
            cursor: pointer;
            .svg-icon {
                height: 30px;
                width: 30px;
            }
        }
    }

    /* 预警信息 */
    #warning-popup-block {
        position: absolute;
        left: 27px;
        top: 145px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 17px;
        background: rgba(15, 22, 35, 0.9);
        border-radius: 8px;
        width: 947px;
        height: 407px;
        .title {
            font-size: 18px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
        }
        .el-button--default {
            width: auto;
            background: transparent;
            border: none;
            min-width: auto;
        }
        .table-list {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            > div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 98px;
                > div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                div:first-child {
                    width: 120px;
                }
                div:nth-child(2) {
                    width: 150px;
                }
                div:nth-child(3) {
                    width: 220px;
                }
                div:nth-child(4) {
                    width: 120px;
                }
                div:nth-child(5) {
                    width: 120px;
                }
            }
            .table-title {
                margin-top: 20px;
                height: 40px;
                div {
                    height: 16px;
                    text-align: center;
                    font-size: 16px;
                    color: rgba(141, 197, 243, 1);
                    &:first-child {
                        width: 120px;
                    }
                    &:last-child {
                        width: 120px;
                    }

                }
            }
            .item-data {
                div:first-child {
                    display: flex;
                    align-items: center;
                    i {
                        width: 18px;
                        height: 18px;
                        background: rgba(198, 44, 65, 1);
                        border-radius: 18px;
                        &.warning-second {
                            background: #FF7F00;
                        }
                        &.warning-third {
                            background: #FFD145;
                        }
                    }
                    label {
                        margin-left: 15px;
                        font-size: 14px;
                        color: rgba(255, 255, 255, 1);
                    }
                }
                div:not(:first-child):not(:last-child) {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 1);
                }
                .deal-btn {
                    width: 100px;
                    height: 40px;
                }
                .name {
                    text-underline: yellow;
                    text-decoration: yellow;
                    cursor: pointer;
                    font-size: 14px;
                    color: rgba(103, 194, 58, 1);
                }
            }
        }
        .close-block {
            position: absolute;
            top: 15px;
            right: 8px;
            cursor: pointer;
            .svg-icon {
                height: 30px;
                width: 30px;
            }
        }
    }

    /* 延时摄影 */
    #monitor-popup-block, #time-lapse-popup-block {
        position: absolute;
        left: 27px;
        top: 145px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 17px;
        width: 620px;
        height: 448px;
        background: rgba(15, 22, 35, 0.9);
        border-radius: 8px;
        .title-block {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title {
                font-size: 18px;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
            }
            .el-select {
                margin-right: 105px;
            }
        }
        .current-camera {
            margin-top: 20px;
            margin-left: 15px;
            font-size: 14px;
            height: 22px;
            color: rgba(97, 119, 156, 1);
        }
        video {
            margin-top: 10px;
            margin-left: 15px;
            width: 559px;
            height: 311px;
        }
        .close-block {
            position: absolute;
            top: 15px;
            right: 8px;
            cursor: pointer;
            .svg-icon {
                height: 30px;
                width: 30px;
            }
        }
    }

    /* 实时数据 */
    #real-data-popup-block {
        position: absolute;
        left: 27px;
        top: 145px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 17px;
        width: 437px;
        height: 405px;
        background: rgba(15, 22, 35, 0.9);
        border-radius: 8px;
        .title {
            font-size: 18px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
        }
        .table-list {
            display: flex;
            flex-direction: column;
            width: 100%;
            .item-data {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 118px;
                width: 100%;
                border-bottom: 1px solid #3E495E;
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    label {
                        font-size: 16px;
                        color: rgba(141, 197, 243, 1);
                    }
                    span {
                        margin-top: 23px;
                        font-size: 20px;
                        font-weight: 500;
                        color: rgba(103, 194, 58, 1);
                        &.insect-data {
                            color: #C62C41;
                        }
                        &.rain-data {
                            color: #FFD145;
                        }
                    }
                }
                &:last-child {
                    border: none;
                }
            }
        }
        .close-block {
            position: absolute;
            top: 15px;
            right: 8px;
            cursor: pointer;
            .svg-icon {
                height: 30px;
                width: 30px;
            }
        }
    }

    /* 作物信息 */
    #crop-info-popup-block {
        position: absolute;
        left: 27px;
        top: 145px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 17px;
        width: 597px;
        height: 522px;
        background: rgba(15, 22, 35, 0.9);
        border-radius: 8px;
        .title {
            font-size: 18px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
        }
        .info-list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            > div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 97px;
                .el-button--default {
                    width: auto;
                    background: transparent;
                    border: none;
                    min-width: auto;
                }
                &.table-title {
                    margin-top: 20px;
                    height: 60px;
                    div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        label {
                            font-size: 16px;
                            color: rgba(141, 197, 243, 1);
                            line-height: 20px;
                        }
                        span {
                            font-size: 12px;
                            color: rgba(141, 197, 243, 1);
                            line-height: 20px;
                        }
                    }
                }
                &.data-item {
                    div:first-child {
                        .svg-icon-v_rice {
                            width: 40px;
                            height: 51px;
                        }
                        .svg-icon-v_soybeans {
                            width: 47px;
                            height: 47px;
                        }
                        .svg-icon-v_corn {
                            width: 48px;
                            height: 54px;
                        }
                        label {
                            margin-top: 4px;
                            font-size: 12px;
                            color: rgba(255, 255, 255, 1);
                        }
                    }
                    div:not(:first-child):not(:last-child) {
                        display: flex;
                        align-items: center;
                        label {
                            font-size: 16px;
                            color: rgba(255, 255, 255, 1);
                        }
                        .svg-icon {
                            margin-left: 13px;
                            width: 12px;
                            height: 26px;
                        }
                    }
                }
                &.total {
                    div:first-child {
                        label {
                            font-size: 16px;
                            color: rgba(141, 197, 243, 1);
                        }
                    }
                    div:not(:first-child):not(:last-child) {
                        display: flex;
                        align-items: center;
                        label {
                            font-size: 16px;
                            color: rgba(255, 255, 255, 1);
                        }
                        .svg-icon {
                            margin-left: 13px;
                            width: 12px;
                            height: 26px;
                        }
                    }
                }
                div:first-child {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    width: 50px;
                }
                div:last-child {
                    width: 30px;
                    cursor: pointer;
                    &:hover {
                        .svg-icon {
                            display: none;
                            &:last-child {
                                display: block;
                            }
                        }
                    }
                    .svg-icon {
                        height: 30px;
                        width: 30px;
                        &:last-child {
                            display: none;
                        }
                    }
                }
            }
        }
        .close-block {
            position: absolute;
            top: 15px;
            right: 8px;
            cursor: pointer;
            .svg-icon {
                height: 30px;
                width: 30px;
            }
        }
    }

    /* 左侧导航 */
    #fake-router-block {
        flex-shrink: 0;
        flex-grow: 0;
        width: 180px;
        height: 100%;
        background: linear-gradient(90deg, rgba(21, 32, 54, 1) 0%, rgba(37, 47, 70, 1) 100%);
        .back-block {
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            .svg-icon {
                margin-right: 8px;
                width: 7px;
                height: 12px;
            }
            label {
                font-size: 14px;
                color: rgba(255, 255, 255, 1);
                cursor: pointer;
            }
        }
        .nav-list {
            margin-top: 86px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .nav-item {
                margin-top: 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 21px;
                padding-right: 37px;
                width: 171px;
                height: 43px;
                border-radius: 30px 0px 0px 30px;
                cursor: pointer;
                &.active {
                    background: rgba(15, 22, 35, 0.7);
                    label {
                        color: rgba(255, 255, 255, 1);
                    }
                    .svg-icon {
                        display: none;
                        &.active {
                            display: block;
                        }
                    }
                }
                &:hover {
                    label {
                        color: rgba(255, 255, 255, 1);
                    }
                    .svg-icon {
                        display: none;
                        &.active {
                            display: block;
                        }
                    }
                }
                .svg-icon {
                    display: block;
                    &.active {
                        display: none;
                    }
                }
                .svg-icon-v_nav_basic_info, .svg-icon-v_nav_basic_info_active {
                    width: 26px;
                    height: 30px;
                }
                .svg-icon-v_nav_crop_info, .svg-icon-v_nav_crop_info_active {
                    width: 26px;
                    height: 29px;
                }
                .svg-icon-v_nav_real_data, .svg-icon-v_nav_real_data_active {
                    width: 28px;
                    height: 22px;
                }
                .svg-icon-v_nav_watch, .svg-icon-v_nav_watch_active {
                    width: 20px;
                    height: 23px;
                }
                .svg-icon-v_nav_clapboard, .svg-icon-v_nav_clapboard_active {
                    width: 22px;
                    height: 22px;
                }
                .svg-icon-v_tab_warning, .svg-icon-v_tab_warning_active {
                    width: 21px;
                    height: 23px;
                }
                label {
                    font-size: 20px;
                    color: rgba(102, 119, 153, 1);
                    cursor: pointer;
                }
            }
        }
    }

    /* 农场信息 */
    #farm-content-block {
        position: relative;
        flex-shrink: 1;
        flex-grow: 1;
        height: 100%;
        .farm-content-title {
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 354px;
            height: 60px;
            background: rgba(15, 22, 35, 0.7);
            border-radius: 30px;
            .svg-icon {
                margin-right: 14px;
                width: 31px;
                height: 25px;
            }
            label {
                font-size: 20px;
                font-weight: 500;
                color: rgba(154, 196, 239, 1);
            }
        }
    }

    /* 基本信息弹窗 */
    #basic-info-popup-block {
        position: absolute;
        left: 27px;
        top: 145px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 17px;
        width: 354px;
        height: 216px;
        background: rgba(15, 22, 35, 0.9);
        border-radius: 8px;
        .title {
            font-size: 18px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
        }
        .info-list {
            margin-top: 26px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            label {
                margin-bottom: 12px;
                background: rgba(15, 22, 35, 0.9);
            }
        }
        .close-block {
            position: absolute;
            top: 15px;
            right: 8px;
            cursor: pointer;
            .svg-icon {
                height: 30px;
                width: 30px;
            }
        }
    }

    /* 农场内容底图 */
    #content-image {
        height: 100%;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }

</style>

<style lang="scss">
/* hover消息 */
.el-popover {
    width: 246px !important;
    background: rgba(15, 22, 35, 0.9);
    border-radius: 8px;
    border: none;
    padding-left: 14px;
    .popper__arrow {
        visibility: hidden;
    }
    .title-block {
        display: flex;
        align-items: center;
        .svg-icon {
            margin-right: 5px;
            width: 26px;
            height: 26px;
        }
        label {
            font-size: 16px;
            color: rgba(255, 255, 255, 1);
        }
    }
    .content-block {
        margin-top: 10px;
        width: 210px;
        height: 60px;
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
    }
    p {
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
        &:first-child {
            margin-bottom: 20px;
            font-size: 16px;
            color: rgba(255, 255, 255, 1);
        }
        &:nth-child(3), &:nth-child(5) {
            margin-bottom: 30px;
        }
    }
}
</style>
