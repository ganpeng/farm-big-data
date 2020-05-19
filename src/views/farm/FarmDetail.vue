<template>
    <div class="farm-detail-container my-content-container">
        <div class="common-details">
            <div class="info-section">
                <div class="title-wrapper">
                    <div class="left-side">
                        <span class="title">{{farm.name}}</span>
                    </div>
                    <div class="right-wrapper">
                        <div class="date">
                            <span class="create-date">
                                创建于：{{farm.createdAt}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="seperator-line"></div>
                <ul class="text-info">
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">农场名称：</label>
                            <span class="value">{{farm.name}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">农场类型：</label>
                            <span class="value">{{farm.type}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">成立日期：</label>
                            <span class="value">{{farm.createdAt}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">统一社会信用代码：</label>
                            <span class="value">{{farm.creditCode}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">地址：</label>
                            <span class="value">
                                {{farm.address.city}}/{{farm.address.area}}/{{farm.address.detail}}
                            </span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">经度：</label>
                            <span class="value">{{farm.latitude}}</span>
                        </div>
                    </li>

                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">纬度：</label>
                            <span class="value">{{farm.longitude}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">地块面积公顷：</label>
                            <span class="value">{{farm.area}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">经营项目：</label>
                            <span class="value">{{farm.project}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">主要特色：</label>
                            <span class="value">{{farm.feature}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">农场简介：</label>
                            <span class="value">{{farm.desc}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">专业级别：</label>
                            <span class="value">{{farm.level}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="seperator-line"></div>
        <div class="range-file-container">
            <h4 class="content-sub-title">法人信息</h4>
            <ul class="text-info">
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">姓名：</label>
                        <span class="value">{{farm.legal.name}}</span>
                    </div>
                </li>
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">联系电话：</label>
                        <span class="value">{{farm.legal.phone}}</span>
                    </div>
                </li>
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">身份证号：</label>
                        <span class="value">{{farm.legal.cId}}</span>
                    </div>
                </li>
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">住址：</label>
                        <span class="value">{{farm.legal.address}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="seperator-line"></div>
        <div class="range-file-container">
            <h4 class="content-sub-title">常务联系人</h4>
            <ul class="text-info">
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">姓名：</label>
                        <span class="value">{{farm.standing.name}}</span>
                    </div>
                </li>
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">联系电话：</label>
                        <span class="value">{{farm.standing.phone}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="seperator-line"></div>
        <div class="range-file-container">
            <h4 class="content-sub-title">党组信息</h4>
            <ul class="text-info">
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">成立党组织：</label>
                        <span class="value">{{farm.isPart ? '是' : '否'}}</span>
                    </div>
                </li>
                <li class="text-info-item">
                    <div class="text-info-item-wrapper">
                        <label class="label">人数：</label>
                        <span class="value">{{farm.partCount}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="gotoFarmEditHandler">编辑</el-button>
            <el-button class="btn-style-three" @click="gotoFarmList">返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'FarmDetail',
    data() {
        return {};
    },
    created() {
        let {id} = this.$route.params;
        this.setCurrentFarmById({id});
    },
    computed: {
        ...mapGetters({
            farm: 'farm/currentFarm'
        })
    },
    methods: {
        ...mapMutations({
            setCurrentFarmById: 'farm/setCurrentFarmById'
        }),
        gotoFarmEditHandler() {
            let {id} = this.$route.params;
            this.$router.push({name: 'FarmEdit', params: {id}});
        },
        gotoFarmList() {
            this.$router.push({name: 'FarmList'});
        }
    }
};
</script>
<style lang="scss" scoped>

</style>
