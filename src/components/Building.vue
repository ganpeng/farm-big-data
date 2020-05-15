<template>
    <div class="building-container">
        <div class="content">
            <img class="icon" src="../assets/img/404.gif" alt="">
            <svg-icon icon-class="building"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Building'
}
</script>
<style lang="scss" scoped>
.building-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 3.4rem;
            height: 3.4rem;
            margin-bottom: 0.4rem;
        }
        .svg-icon {
            width: 1.7rem;
            height: 0.28rem;
        }
    }
}
</style>
