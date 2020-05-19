<template>
    <div class="logistics-container">
        <!-- <building></building> -->
    </div>
</template>
<script>
import Building from '@/components/Building';
export default {
    name: 'Logistics',
    components: {Building}
};
</script>
<style lang="scss" scoped>
.logistics-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url('../../assets/img/my_bg_2.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
