<template>
    <div class="channel-form-container">
        <el-form
            :model="channel"
            status-icon
            ref="peeForm"
            label-width="100px"
            @submit.native.prevent
            class="my-form">
            <el-row>
                <h4 class="content-sub-title">渠道信息</h4>
                <el-col span="10">
                    <el-form-item label="渠道名称" prop="name">
                        <el-input
                            maxlength="20"
                            :value="channel.name"
                            @input="inputHandler($event, 'name')"
                            placeholder="请输入渠道名称"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="创建时间" prop="createdAt">
                        <span>{{channel.createdAt}}</span>
                    </el-form-item>
                </el-col>
                <el-col span="10">
                    <el-form-item label="渠道类型" prop="type">
                        <el-select
                            :value="channel.type"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'type')"
                        >
                            <el-option
                                v-for="item in channelTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="累计销售额" prop="salesVolume">
                        <span>{{channel.salesVolume}}</span>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="seperator-line"></div>
            <el-row>
                <h4 class="content-sub-title">渠道联系人</h4>
                <el-col span="10">
                    <el-form-item label="姓名">
                        <el-input
                            maxlength="20"
                            :value="channel.contacts.name"
                            @input="inputHandler($event, 'contacts.name')"
                            placeholder="请输入姓名"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col span="10">
                    <el-form-item label="联系电话">
                        <el-input
                            maxlength="20"
                            :value="channel.contacts.phone"
                            @input="inputHandler($event, 'contacts.phone')"
                            placeholder="请输入联系电话"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="seperator-line"></div>
            <el-row>
                <h4 class="content-sub-title">内部联系人</h4>
                <el-col span="10">
                    <el-form-item label="所属公司">
                        <el-select
                            :value="channel.innerContacts.company"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'channel.innerContacts.company')"
                        >
                            <el-option
                                v-for="item in peeFarmOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="员工电话">
                        <span>{{channel.innerContacts.phone || '15893214936'}}</span>
                    </el-form-item>
                </el-col>
                <el-col span="10">
                    <el-form-item label="员工姓名">
                        <el-select
                            :value="channel.innerContacts.name"
                            clearable
                            placeholder="请选择"
                            @input="inputHandler($event, 'channel.innerContacts.name')"
                        >
                            <el-option
                                v-for="item in staffOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'ChannelForm',
    data() {
        return {
            channelTypeOptions: this.$util.channelTypeOptions,
            peeFarmOptions: this.$util.peeFarmOptions,
            staffOptions: this.$util.staffOptions
        };
    },
    computed: {
        ...mapGetters({
            channel: 'channel/currentChannel'
        })
    },
    methods: {
        ...mapMutations({
            updateCurrentChannel: 'channel/updateCurrentChannel'
        }),
        inputHandler(value, key) {
            this.updateCurrentChannel({key, value});
        }
    }
};
</script>
<style lang="scss" scoped>

</style>
