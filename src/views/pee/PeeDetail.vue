<template>
    <div class="pee-detail-container my-content-container">
        <div class="common-details">
            <div class="info-section">
                <div class="title-wrapper">
                    <div class="left-side">
                        <span class="title">{{pee.dId}}</span>
                    </div>
                    <div class="right-wrapper">
                        <div class="date">
                            <span class="create-date">
                                创建于：{{pee.createdAt}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="seperator-line"></div>
                <ul class="text-info">
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">设备ID：</label>
                            <span class="value">{{pee.dId}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">设备SN：</label>
                            <span class="value">{{pee.sn}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">传感器类型：</label>
                            <span class="value">{{getTypeLabel(pee.type)}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">数据指标：</label>
                            <span class="value">{{pee.type}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">地址：</label>
                            <span class="value">
                                {{pee.address.city}}/{{pee.address.area}}/{{pee.address.detail}}
                            </span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">经度：</label>
                            <span class="value">{{pee.latitude}}</span>
                        </div>
                    </li>

                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">纬度：</label>
                            <span class="value">{{pee.longitude}}</span>
                        </div>
                    </li>

                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">厂商：</label>
                            <span class="value">{{getFirmLabel(pee.firmName)}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">所属农场：</label>
                            <span class="value">{{pee.farm}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="range-file-container">
            <h4 class="content-sub-title">运维负责人</h4>
            <ul class="text-info">
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">所属公司：</label>
                        <span class="value">{{pee.head.company}}</span>
                    </div>
                </li>
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">员工姓名：</label>
                        <span class="value">{{pee.head.name}}</span>
                    </div>
                </li>
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">员工垫还：</label>
                        <span class="value">{{pee.head.phone}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="seperator-line"></div>
        <div class="range-file-container">
            <h4 class="content-sub-title">设备数据</h4>
            <div v-if="pee.type === 5" class="live-video">
                <video-player :options="videoOptions"></video-player>
            </div>
            <div v-if="pee.type === 6" class="live-video">
                <video-player :options="video2Options"></video-player>
            </div>
            <div v-if="pee.type !== 5 && pee.type !== 6" class="my-echarts">
                <monitoring-data></monitoring-data>
            </div>
        </div>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="gotoPeeEdit">编辑</el-button>
            <el-button class="btn-style-three" @click="gotoPeeList">返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import _ from 'lodash';
import VideoPlayer from '@/components/VideoPlayer';
import MonitoringData from './MonitoringData';
export default {
    name: 'PeeDetail',
    components: {VideoPlayer, MonitoringData},
    data() {
        return {
            videoOptions: {
                autoplay: true,
                controls: true,
                liveui: true,
                width: 640,
                height: 320,
                sources: [
                    {
                        src: "http://n.video.tianchimedia.net/live/34020000001320000001.m3u8?auth_key=1887345156-0-0-7a1e07618d0822cea368feceaeecbf09",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            video2Options: {
                autoplay: true,
                controls: true,
                liveui: true,
                width: 640,
                height: 320,
                sources: [
                    {
                        src: "http://n.video.tianchimedia.net/live/34020000001320000004.m3u8?auth_key=1887345171-0-0-29ab1884a19a51a0d647b906cc99f9ff",
                        type: "application/x-mpegURL"
                    }
                ]
            }
        }
    },
    created() {
        let {id} = this.$route.params;
        this.setCurrentPeeById({id});
        // this.setVideoSrc();
    },
    computed: {
        ...mapGetters({
            pee: 'pee/currentPee'
        }),
        status() {
            return this.pee.type === 5 || this.pee.type === 6;
        },
        getTypeLabel() {
            return (value) => {
                let option = this.$util.sensorTypeOptions.find((item) => item.value === value);
                return _.get(option, 'label');
            };
        },
        getFirmLabel() {
            return (value) => {
                let option = this.$util.peeFirmOptions.find((item) => item.value === value);
                return _.get(option, 'label');
            }
        }
    },
    methods: {
        ...mapMutations({
            setCurrentPeeById: 'pee/setCurrentPeeById'
        }),
        setVideoSrc() {
            let {type} = this.pee;
            if (type === 5) {
                this.videoOptions = {
                    sources: [
                        {
                            src: "http://n.video.tianchimedia.net/live/34020000001320000001.m3u8?auth_key=1887345156-0-0-7a1e07618d0822cea368feceaeecbf09",
                            type: "application/x-mpegURL"
                        }
                    ]
                };
            }
            if (type === 6) {
                this.videoOptions = {
                    sources: [
                        {
                            src: "http://n.video.tianchimedia.net/live/34020000001320000004.m3u8?auth_key=1887345171-0-0-29ab1884a19a51a0d647b906cc99f9ff",
                            type: "application/x-mpegURL"
                        }
                    ]
                };
            }
        },
        gotoPeeList() {
            this.$router.push({name: 'PeeList'});
        },
        gotoPeeEdit() {
            let {id} = this.$route.params;
            this.$router.push({name: 'PeeEdit', params: {id}});
        }
    }
};
</script>
<style lang="scss" scoped>
.pee-detail-container {
    padding-bottom: 220px;
    .my-echarts {
        width: 70%;
        height: 3.2rem;
    }
}
</style>
