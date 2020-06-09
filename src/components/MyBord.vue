<template>
    <div class="my-bord-status">
        <div v-for="(bord, index) in bordList" :key="index" class="status-item">
            <div class="line"></div>
            <div class="item_con">
                {{bord.title}}
            </div>
            <div class="count">{{bord.count}}</div>
        </div>
        <!--
        <div class="status-item">
            <div class="line"></div>
            <div class="item_con">
                总数
            </div>
            <div class="count">3</div>
        </div>
        <div class="status-item">
            <div class="line"></div>
            <div class="item_con">
                吉视农业电商平台
            </div>
            <div class="count">1</div>
        </div>
        <div class="status-item">
            <div class="line"></div>
            <div class="item_con">
                合作渠道
            </div>
            <div class="count">1</div>
        </div>
        <div class="status-item">
            <div class="line"></div>
            <div class="item_con">
                线下渠道
            </div>
            <div class="count">1</div>
        </div>
        -->
    </div>
</template>
<script>
export default {
    name: 'MyBord',
    props: {
        bordList: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
