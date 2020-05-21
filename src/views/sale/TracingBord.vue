<template>
    <div class="my-bord-status">
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                总数
            </div>
            <div class="count">4</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                稻米
            </div>
            <div class="count">1</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                杂粮
            </div>
            <div class="count">2</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                果蔬
            </div>
            <div class="count">0</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                菌类
            </div>
            <div class="count">1</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                其他
            </div>
            <div class="count">0</div>
        </div>
    </div>
    <!--
    <div class="bord-container">
        <ul class="bord-list">
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    总数
                </span>
                <span class="count">
                    150
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    稻米
                </span>
                <span class="count">
                    30
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    杂粮
                </span>
                <span class="count">
                    20
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    果蔬
                </span>
                <span class="count">
                    24
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    菌类
                </span>
                <span class="count">
                    35
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    其他
                </span>
                <span class="count">
                    11
                </span>
            </li>
        </ul>
    </div>
    -->
</template>
<script>
export default {
    name: 'TracingBord'
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
<style lang="scss" scoped>
.bord-container {
    .bord-list {
        display: flex;
        .bord-item {
            position: relative;
            width: 180px;
            height: 80px;
            border-radius: 4px;
            background: #252C3D;
            margin-right: 12px;
            text-align: left;
            padding: 10px;
            .title {
                display: flex;
                color: #A8ABB3;
                align-items: center;
                i {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border-radius: 16px;
                    margin-right: 10px;
                }
            }
            .count {
                position: absolute;
                bottom: 10px;
                right: 10px;
            }
            &:nth-of-type(1) {
                i {
                    background-color: purple;
                }
            }
            &:nth-of-type(2) {
                i {
                    background-color: purple;
                }
            }
            &:nth-of-type(3) {
                i {
                    background-color: red;
                }
            }
            &:nth-of-type(4) {
                i {
                    background-color: orange;
                }
            }
            &:nth-of-type(5) {
                i {
                    background-color: yellow;
                }
            }
            &:nth-of-type(6) {
                i {
                    background-color: blue;
                }
            }
        }
    }
}
</style>
