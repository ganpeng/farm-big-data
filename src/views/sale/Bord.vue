<template>
    <div class="bord-container">
        <ul class="bord-list">
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    总数
                </span>
                <span class="count">
                    3
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    自营电商
                </span>
                <span class="count">
                    1
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    合作渠道
                </span>
                <span class="count">
                    1
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    线下渠道
                </span>
                <span class="count">
                    1
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Bord'
};
</script>
<style lang="scss" scoped>
.bord-container {
    .bord-list {
        display: flex;
        .bord-item {
            position: relative;
            width: 180px;
            height: 80px;
            border-radius: 8px;
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

