<template>
    <div class="channel-create-container my-content-container">
        <channel-form ref="channelFormComponent"></channel-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="channelCreateHandler">创建</el-button>
            <el-button class="btn-style-three" @click="gotoChannelList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import ChannelForm from './ChannelForm';
export default {
    name: 'ChannelCreate',
    components: {ChannelForm},
    methods: {
        gotoChannelList() {
            this.$router.push({name: 'ChannelList'});
        },
        channelCreateHandler() {
            this.$router.push({name: 'ChannelList'});
        }
    }
};
</script>
<style lang="scss" scoped>

</style>
