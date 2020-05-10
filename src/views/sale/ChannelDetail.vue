<template>
    <div class="channel-detail-container">
        <h2 class="content-title">渠道详情</h2>
        <div class="seperator-line"></div>
        <div class="common-details">
            <div class="info-section">
                <div class="title-wrapper">
                    <div class="left-side">
                        <span class="title">{{channel.name}}</span>
                    </div>
                    <div class="right-wrapper">
                        <div class="date">
                            <span class="create-date">
                                创建于：{{channel.createdAt}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="seperator-line"></div>
                <ul class="text-info">
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">渠道名称：</label>
                            <span class="value">{{channel.name}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">渠道类型：</label>
                            <span class="value">{{channel.type}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">渠道联系人：</label>
                            <span class="value">{{channel.contacts.name}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">渠道联系人电话：</label>
                            <span class="value">{{channel.contacts.phone}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">内部联系人：</label>
                            <span class="value">
                                {{channel.innerContacts.name}}
                            </span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">内部联系人电话：</label>
                            <span class="value">{{channel.innerContacts.phone}}</span>
                        </div>
                    </li>
                    <li class="text-info-item">
                        <div class="text-info-item-wrapper">
                            <label class="label">累计销售额：</label>
                            <span class="value">{{channel.salesVolume}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="gotoChannelEdit">编辑</el-button>
            <el-button class="btn-style-three" @click="gotoChannelList">返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import _ from 'lodash';
export default {
    name: 'ChannelDetail',
    created() {
        let {id} = this.$route.params;
        this.setCurrentChannelById({id});
    },
    computed: {
        ...mapGetters({
            channel: 'channel/currentChannel'
        }),
        getTypeLabel() {
            return (value) => {
                let option = this.$util.sensorTypeOptions.find((item) => item.value === value);
                return _.get(option, 'label');
            };
        },
        getFirmLabel() {
            return (value) => {
                let option = this.$util.channelFirmOptions.find((item) => item.value === value);
                return _.get(option, 'label');
            }
        }
    },
    methods: {
        ...mapMutations({
            setCurrentChannelById: 'channel/setCurrentChannelById'
        }),
        gotoChannelList() {
            this.$router.push({name: 'ChannelList'});
        },
        gotoChannelEdit() {
            let {id} = this.$route.params;
            this.$router.push({name: 'ChannelEdit', params: {id}});
        }
    }
};
</script>
<style lang="scss" scoped>

</style>
