<template>
    <div class="home-container my-content-container">
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
                    <div class="title">物流统计 >></div>
                    <div class="right-top-field">
                        <div class="r_t_l_field">
                            <span class="text">200公里以下路线</span>
                            <span class="text">200公里以上路线</span>
                        </div>
                        <div class="r_t_r_field">
                            <div class="top-bar-container">
                                <div class="bar"></div>
                                <span class="bar-text">55条</span>
                            </div>
                            <div class="bottom-bar-container">
                                <div class="bar"></div>
                                <span class="bar-text">15条</span>
                            </div>
                        </div>
                    </div>
                    <div class="right-bottom-field">
                        <ul class="car-list">
                            <li class="car-item">
                                <div class="item-left">
                                    <svg-icon icon-class="home_wuliu1"/>
                                </div>
                                <div class="item-right">
                                    <p class="name">大型货车</p>
                                    <p class="count">10<i>辆</i></p>
                                </div>
                            </li>
                            <li class="car-item">
                                <div class="item-left">
                                    <svg-icon icon-class="home_wuliu2"/>
                                </div>
                                <div class="item-right">
                                    <p class="name">中小型货车</p>
                                    <p class="count">100<i>辆</i></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="seperator-line"></div>
            <div class="bottom-field">
                <div class="title">未失效预警 >></div>
                <ul class="bottom-field-list">
                    <li class="bottom-field-item">
                        <div class="item-top">
                            <div class="left">
                                <svg-icon icon-class="home_b_1"/>
                            </div>
                            <div class="middle">红色预警</div>
                            <p class="count">1<i>条</i></p>
                        </div>
                        <div class="item-bottom">监测设备发现：稻瘟病的爆发系数为0.8，高于0.6。请及时除虫、预防。</div>
                    </li>
                    <li class="bottom-field-item">
                        <div class="item-top">
                            <div class="left">
                                <svg-icon icon-class="home_b_2"/>
                            </div>
                            <div class="middle">橙色预警</div>
                            <p class="count">1<i>条</i></p>
                        </div>
                        <div class="item-bottom">
                            冰雹伴有大风降温，最大降幅为10度左右，请做好农作物保护工作。
                        </div>
                    </li>
                    <li class="bottom-field-item">
                        <div class="item-top">
                            <div class="left">
                                <svg-icon icon-class="home_b_3"/>
                            </div>
                            <div class="middle">黄色预警</div>
                            <p class="count">1<i>条</i></p>
                        </div>
                        <div class="item-bottom">
                            监测水稻的长势分析预判，今年水稻亩产可能减少0.5吨，请采取应…
                        </div>
                    </li>
                    <li class="bottom-field-item">
                        <div class="item-top">
                            <div class="left">
                                <svg-icon icon-class="home_b_4"/>
                            </div>
                            <div class="middle">蓝色预警</div>
                            <p class="count">1<i>条</i></p>
                        </div>
                        <div class="item-bottom">
                            根据农业部统计显示，大米今日收购价格低于去年最低值。
                        </div>
                    </li>
                </ul>
            </div>
            <div class="seperator-line"></div>
            <div class="footer">
                <p class="name">吉林省智慧农业管理系统</p>
                <p class="copyright">2020 © 吉林省智慧农业管理系统 版权所有</p>
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
    position: relative;
    width: 100%;
    height: 100%;
    .field-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .top-field {
            margin-bottom: 0.2rem;
            .top-field-list {
                display: flex;
                height: 100%;
                .top-field-item {
                    position: relative;
                    width: 33.33%;
                    height: 4.42rem;
                    background: linear-gradient(180deg,rgba(44,54,74,1) 0%,rgba(37,45,63,1) 100%);
                    border-radius: 0.12rem;
                    .top-icon {
                        position: absolute;
                        top: 0.12rem;
                        left: 0.12rem;
                        .svg-icon {
                            width: 1.12rem;
                            height: 1.12rem;
                        }
                    }
                    .top-title {
                        position: absolute;
                        top: 0.12rem;
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 0.26rem;
                        font-weight: 500;
                        color: rgba(163,208,253,1);
                        line-height: 0.38rem;
                    }
                    .top-count {
                        position: absolute;
                        top: 0.70rem;
                        left: 50%;;
                        transform: translateX(-50%);
                        height: 0.52rem;
                        font-size: 0.42rem;
                        font-weight: 600;
                        line-height: 0.52rem;
                        color: #fff;
                        padding: 0 0.08rem;
                        background-color: #0062C4;
                        border: 1px solid #64A4E5;
                        border-radius: 0.05rem;
                        i {
                            font-size: 0.27rem;
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
            margin: 0.40rem 0;
            .middle-field-left,
            .middle-field-right {
                text-align: left;
                flex: 1;
                .title {
                    font-size: 0.27rem;
                    line-height: 0.27rem;
                    font-weight: 500;
                    color: rgba(163,208,253,1);
                }
            }
            .middle-field-left {
                border-right: 1px solid #252D3F;
                padding-right: 0.20rem;
                .count {
                    display: inline-block;
                    margin: 0.30rem 0;
                    width: 1.20rem;
                    height: 0.52rem;
                    font-size: 0.42rem;
                    font-weight: 600;
                    line-height: 0.52rem;
                    color: #fff;
                    padding: 0 0.08rem;
                    background-color: #0062C4;
                    border: 1px solid #64A4E5;
                    border-radius: 0.05rem;
                    text-align: center;
                    i {
                        font-size: 0.27rem;
                    }
                }
                .left-list {
                    display: flex;
                    justify-content: space-between;
                    .left-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 2.50rem;
                        height: 2.50rem;
                        padding: 0.08rem;
                        background: linear-gradient(180deg,rgba(44,54,74,1) 0%,rgba(37,45,63,1) 100%);
                        border-radius: 0.12rem;
                        img {
                            display: block;
                            margin-top: 0.20rem;
                            margin-bottom: 0.20rem;
                        }
                        .name {
                            font-size: 0.20rem;
                            line-height: 0.20rem;
                            font-weight: 500;
                            color: rgba(163,208,253,1);
                            margin-top: 0.22rem;
                        }
                        &:nth-of-type(1) {
                            img {
                                width: 1.56rem;
                                height: 1.03rem;
                            }
                        }
                        &:nth-of-type(2) {
                            img {
                                width: 2.09rem;
                                height: 1.13rem;
                            }
                        }
                        &:nth-of-type(3) {
                            img {
                                width: 2.13rem;
                                height: 1.08rem;
                            }
                        }
                    }
                }
            }
            .middle-field-right {
                margin-left: 0.2rem;
                .right-top-field {
                    display: flex;
                    height: 1.50rem;
                    margin-top: 0.32rem;
                    .r_t_l_field {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        padding-right: 0.12rem;
                        border-right: 2px solid #252D3F;
                        margin-left: 0.2rem;
                        .text {
                            font-size: 0.19rem;
                            color: rgba(102,119,153,1);
                            line-height: 0.32rem;
                        }
                    }
                    .r_t_r_field {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        .top-bar-container {
                            display: flex;
                            .bar {
                                width: 4.4rem;
                                height: 0.32rem;
                                background: linear-gradient(90deg,rgba(101,153,210,1) 0%,rgba(74,144,226,1) 100%);
                            }
                            .bar-text {
                                font-size: 0.19rem;
                                color: rgba(163,208,253,1);
                                line-height: 0.32rem;
                                margin-left: 0.2rem;
                            }
                        }
                        .bottom-bar-container {
                            display: flex;
                            .bar {
                                width: 1.2rem;
                                height: 0.32rem;
                                background: linear-gradient(90deg,rgba(101,181,210,1) 0%,rgba(74,184,226,1) 100%);
                            }
                            .bar-text {
                                font-size: 0.19rem;
                                color: rgba(163,208,253,1);
                                line-height: 0.32rem;
                                margin-left: 0.2rem;
                            }
                        }
                    }
                }
                .right-bottom-field {
                    margin-top: 0.5rem;
                    .car-list {
                        display: flex;
                        justify-content: space-around;
                        height: 1.08rem;
                        .car-item {
                            display: flex;
                            align-items: center;
                            .item-left {
                                margin-right: 0.14rem;
                                .svg-icon {
                                    width: 1.10rem;
                                    height: 1.10rem;
                                }
                            }
                            .item-right {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-around;
                                .name {
                                    font-size: 0.2rem;
                                    line-height: 0.3rem;
                                    font-weight: 500;
                                    color:rgba(163,208,253,1);
                                }
                                .count {
                                    display: inline-block;
                                    width: 1.20rem;
                                    height: 0.42rem;
                                    font-size: 0.40rem;
                                    font-weight: 600;
                                    line-height: 0.42rem;
                                    color: #fff;
                                    padding: 0 0.08rem;
                                    background-color: #0062C4;
                                    border: 1px solid #64A4E5;
                                    border-radius: 0.05rem;
                                    text-align: center;
                                    margin-top: 0.1rem;
                                    i {
                                        font-size: 0.27rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .bottom-field {
            text-align: left;
            padding: 0.24rem 0 0.14rem 0;
            .title {
                font-size: 0.27rem;
                line-height: 0.27rem;
                font-weight: 500;
                color: rgba(163,208,253,1);
            }
            .bottom-field-list {
                display: flex;
                margin-top: 0.14rem;
                .bottom-field-item {
                    width: 2.64rem;
                    margin-right: 1rem;
                    .item-top {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .left {
                            .svg-icon {
                                width: 0.64rem;
                                height: 0.64rem;
                            }
                        }
                        .middle {
                            font-size: 0.20rem;
                            font-weight: 500;
                            line-height: 0.3rem;
                        }
                        .count {
                            display: inline-block;
                            width: 0.92rem;
                            height: 0.42rem;
                            font-size: 0.40rem;
                            font-weight: 600;
                            line-height: 0.42rem;
                            color: #fff;
                            padding: 0 0.08rem;
                            background-color: #0062C4;
                            border: 1px solid #64A4E5;
                            border-radius: 0.05rem;
                            text-align: center;
                            margin-top: 0.1rem;
                            i {
                                font-size: 0.27rem;
                                line-height: 0.42rem;
                            }
                        }
                    }
                    .item-bottom {
                        font-size: 0.16rem;
                        font-weight: 400;
                        color: rgba(102,119,153,1);
                        line-height: 0.24rem;
                        background: rgba(34,42,58,1);
                        border-radius: 0.06rem;
                        padding: 0.05rem;
                        margin-top: 0.14rem;
                    }
                }
            }
        }
        .footer {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-end;
            height: 1rem;
            .name {
                font-size: 0.24rem;
                font-weight: 500;
                color: rgba(62,73,94,1);
                line-height: 0.34rem;
            }
            .copyright {
                font-size: 0.16rem;
                line-height: 0.24rem;
                color: rgba(62,73,94,1);
            }
        }
    }
}
</style>
