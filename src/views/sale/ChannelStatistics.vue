<template>
    <div class="channel-statistics-container my-content-container">
        <channel-statistics-one v-if="flag === 1"></channel-statistics-one>
        <channel-statistics-two v-if="flag === 2"></channel-statistics-two>
        <channel-statistics-three v-if="flag === 3"></channel-statistics-three>
    </div>
</template>
<script>
import ChannelStatisticsOne from './components/ChannelStatisticsOne';
import ChannelStatisticsTwo from './components/ChannelStatisticsTwo';
import ChannelStatisticsThree from './components/ChannelStatisticsThree';
export default {
    name: 'ChannelStatistics',
    components: {ChannelStatisticsOne, ChannelStatisticsTwo, ChannelStatisticsThree},
    data() {
        return {
            flag: 1
        };
    },
    created() {
        let {id} = this.$route.query;
        this.flag = parseInt(id);
    }
};
</script>
<style lang="scss" scoped>
.channel-statistics-container {
    .line-charts-container {
        padding: 20px;
        p {
            font-size: 22px;
            color: #fff;
            i {
                font-size: 30px;
            }
        }
    }
}
</style>
