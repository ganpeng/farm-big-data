<template>
    <div class="video-player-container">
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>
<script>
import videojs from 'video.js';
import 'video.js/dist/alt/video-js-cdn.min.css';
export default {
    name: 'VideoPlayer',
    props: {
        options: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            player: null
        };
    },
    mounted() {
        this.player = videojs(
            this.$refs.videoPlayer,
            this.options,
            () => { console.log('onPlayerReady', this); }
        );
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
