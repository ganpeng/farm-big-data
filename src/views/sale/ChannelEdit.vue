<template>
    <div class="channel-edit-container my-content-container">
        <channel-form ref="channelFormComponent"></channel-form>
        <div class="fixed-btn-container">
            <el-button class="btn-style-two" type="primary" @click="channelEditHandler">保存</el-button>
            <el-button class="btn-style-three" @click="gotoChannelList" plain>返回列表</el-button>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import ChannelForm from './ChannelForm';
export default {
    name: 'ChannelEdit',
    components: {ChannelForm},
    created() {
        let {id} = this.$route.params;
        this.setCurrentChannelById({id});
    },
    methods: {
        ...mapMutations({
            setCurrentChannelById: 'channel/setCurrentChannelById'
        }),
        gotoChannelList() {
            this.$router.push({name: 'ChannelList'});
        },
        channelEditHandler() {
            this.$router.push({name: 'ChannelList'});
        }
    }
};
</script>
<style lang="scss" scoped>

</style>
