<template>
    <div class="home-container">
        <div class="field-wrapper">
            <div class="top-field">
                <ul class="top-field-list">
                    <li class="top-field-item">
                       <span class="top-icon">
                            <svg-icon icon-class="home1"/>
                       </span>
                       <span class="top-title">农场统计 >></span>
                       <span class="top-count">20<i>个</i></span>
                    </li>
                    <li class="top-field-item">
                       <span class="top-icon">
                            <svg-icon icon-class="home2"/>
                       </span>
                       <span class="top-title">物环设备统计 >></span>
                       <span class="top-count">500<i>个</i></span>
                    </li>
                    <li class="top-field-item">
                       <span class="top-icon">
                            <svg-icon icon-class="home3"/>
                       </span>
                       <span class="top-title">基站统计 >></span>
                       <span class="top-count">500<i>个</i></span>
                    </li>
                </ul>
            </div>
            <div class="seperator-line"></div>
            <div class="middle-field">
                <div class="middle-field-left">
                    <div class="title">销售渠道统计 >></div>
                    <span class="count">3<i>个</i></span>
                    <ul class="left-list">
                        <li class="left-item">
                            <img src="../../assets/img/home_1.png" alt="">
                            <div class="seperator-line"></div>
                            <p class="name">自营电商</p>
                        </li>
                        <li class="left-item">
                            <img src="../../assets/img/home_2.png" alt="">
                            <div class="seperator-line"></div>
                            <p class="name">天猫旗舰店</p>
                        </li>
                        <li class="left-item">
                            <img src="../../assets/img/home_3.png" alt="">
                            <div class="seperator-line"></div>
                            <p class="name">欧亚商都线下体验店</p>
                        </li>
                    </ul>
                </div>
                <div class="middle-field-right">

                </div>
            </div>
            <div class="seperator-line"></div>
            <div class="bottom-field">
                <ul class="bottom-field-list">
                    <li class="bottom-field-item"></li>
                    <li class="bottom-field-item"></li>
                    <li class="bottom-field-item"></li>
                    <li class="bottom-field-item"></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home'
};
</script>
<style lang="scss" scoped>
.home-container {
    .field-wrapper {
        .top-field {
            margin-bottom: 20px;
            .top-field-list {
                display: flex;
                .top-field-item {
                    position: relative;
                    width: 33.33%;
                    height: 442px;
                    background: linear-gradient(180deg,rgba(44,54,74,1) 0%,rgba(37,45,63,1) 100%);
                    border-radius: 12px;
                    .top-icon {
                        position: absolute;
                        top: 12px;
                        left: 12px;
                        .svg-icon {
                            width: 112px;
                            height: 112px;
                        }
                    }
                    .top-title {
                        position: absolute;
                        top: 12px;
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 26px;
                        font-weight: 500;
                        color: rgba(163,208,253,1);
                        line-height: 38px;
                    }
                    .top-count {
                        position: absolute;
                        top: 70px;
                        left: 50%;;
                        transform: translateX(-50%);
                        height: 52px;
                        font-size: 42px;
                        font-weight: 600;
                        line-height: 52px;
                        color: #fff;
                        padding: 0 8px;
                        background-color: #0062C4;
                        border: 1px solid #64A4E5;
                        border-radius: 5px;
                        i {
                            font-size: 27px;
                        }
                    }
                }
                .top-field-item + .top-field-item {
                    margin-left: 0.574%;
                }
            }
        }
        .middle-field {
            display: flex;
            margin: 40px 0;
            .middle-field-left,
            .middle-field-right {
                text-align: left;
                flex: 1;
                .title {
                    font-size: 27px;
                    line-height: 27px;
                    font-weight: 500;
                    color: rgba(163,208,253,1);
                }
            }
            .middle-field-left {
                border-right: 1px solid #252D3F;
                padding-right: 30px;
                .count {
                    display: inline-block;
                    margin: 30px 0;
                    width: 120px;
                    height: 52px;
                    font-size: 42px;
                    font-weight: 600;
                    line-height: 52px;
                    color: #fff;
                    padding: 0 8px;
                    background-color: #0062C4;
                    border: 1px solid #64A4E5;
                    border-radius: 5px;
                    text-align: center;
                    i {
                        font-size: 27px;
                    }
                }
                .left-list {
                    display: flex;
                    justify-content: space-between;
                    .left-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 250px;
                        height: 250px;
                        padding: 8px;
                        background: linear-gradient(180deg,rgba(44,54,74,1) 0%,rgba(37,45,63,1) 100%);
                        border-radius: 12px;
                        img {
                            display: block;
                            margin-top: 20px;
                            margin-bottom: 20px;
                        }
                        .name {
                            font-size: 21px;
                            line-height: 21px;
                            font-weight: 500;
                            color: rgba(163,208,253,1);
                            margin-top: 22px;
                        }
                        &:nth-of-type(1) {
                            img {
                                width: 156px;
                                height: 103px;
                            }
                        }
                        &:nth-of-type(2) {
                            img {
                                width: 209px;
                                height: 113px;
                            }
                        }
                        &:nth-of-type(3) {
                            img {
                                width: 213px;
                                height: 108px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
