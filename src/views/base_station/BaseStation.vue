<template>
    <div class="base-station-container">
        <building></building>
    </div>
</template>
<script>
import Building from '@/components/Building';
export default {
    name: 'BaseStation',
    components: {Building}
};
</script>
<style lang="scss" scoped>
.base-station-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
