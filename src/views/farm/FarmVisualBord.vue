<template>
    <div class="my-bord-status">
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                总数
            </div>
            <div class="count">1</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                农民专业合作社
            </div>
            <div class="count">1</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                国有企业
            </div>
            <div class="count">0</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                个体企业
            </div>
            <div class="count">0</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FarmVisualBord'
};
</script>
<style lang="scss" scoped>
.my-bord-status {
    display: flex;
    width: 100%;
    .status-item + .status-item {
        margin-left: 10px;
    }
    .status-item {
        background-color: #272f44;
        // width: 360px;
        flex: 1;
        height: 80px;
        border-radius: 4px;
        background: #272f44 no-repeat right 20px;
        overflow: hidden;
        color: #bdbec2;

        &.total {
            background-position: 100% 100%;
            background-size: 78px 78px;
        }
        .line {
            width: 2px;
            height: 50px;
            margin: 20px;
            float: left;
            background: #f96549;
        }
        .item_con {
            float: left;
            padding-top: 17px;
        }
        .count {
            float: right;
            margin-right: 30px;
            font-size: 40px;
            line-height: 80px;
        }
    }
}
</style>
