<template>
    <!--
    <div class="bord-container">
        <ul class="bord-list">
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    总数
                </span>
                <span class="count">
                    20
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    农民专业合作社
                </span>
                <span class="count">
                    6
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    家庭农场
                </span>
                <span class="count">
                    10
                </span>
            </li>
            <li class="bord-item">
                <span class="title">
                    <i></i>
                    农村集体经济组织
                </span>
                <span class="count">
                    4
                </span>
            </li>
        </ul>
    </div>
    -->
    <div class="my-bord-status">
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                总数
            </div>
            <div class="count">20</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                农民专业合作社
            </div>
            <div class="count">6</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                家庭农场
            </div>
            <div class="count">10</div>
        </div>
        <div class="status-item terminal-status-item total">
            <div class="line"></div>
            <div class="item_con">
                农村集体经济组织
            </div>
            <div class="count">4</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Bord'
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
            // background: #272f44 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAFlElEQVR4nO2c608cVRiHn71xhxaWtlDa0hZqEddLUo3GtSZmY+If4L9L9IN8smmMrq2WhosI1sKWAlK2XP3wnnG3ONczZ3Zm6DzJhOycMzsvvz3nfc/lncnd//pbEsZF4H3ggvq8DfwCvIziZrVqReu6vGE7wtINfIaIl1PHRXWuO0a7/kfShLsClGzOl1RZYkiacF2aZR0nacKlhuKZzyPABDBoU9YJ3PzYLeCq6RvOzde9qhwBu8BarVp5YZ3MqahaAD4Arpk27JzxJ/BzrVo5LkxOzQJ8TAS/5jlkCBhcWn2+ngfGgbGYDUoTY8B4HpiM25IUMpkHhuO2IoUMF3GPnhvAH8BhZ+xJDCXgBnDJobzoJtpfwAPjJiUMp7nq3Hx9HfgEB//vNgB+Et6s9KIEddTATbh949akj1dOBdmUS5NMOE0y4TTJhNMkE06TTDhNMuE0yYTTJBNOk0w4TdIqXB7oI0b749iQCUMfcBvZGykBx0ADWf7aBHY6ZUhahCsC04hohbbzBeCyOgBeIwJuqKMZpUFJ5xrwLtDjo243sr05oT7/Q0vEBrLVZ4SwwvUhC31NxLDXoS1qMQy8R7il/QF13AJOgS1a3XpLndMijHBlJBmm3UHv0OoqDcQHBaUHaWGm93hzyIb7CHAXWW98CLxwu8iJMFHprs31Q4gf+hT4BvgcuEMr+8iNgqr7FZ3ZGO8F7s3N173sskW3xeWRX86rTlkdM8iGj9UaN4G9trpjSLfs83n/BvAYScS5pI4Bn9e204P4xcBBRFe4U+CENyOcFyVk83tcfX6FCNiPiOuHfeBXZCPJ4m/1t4eWiKP4y6c7RNMvhxFuEelauvQhW3B+OAKeqns6+c0msKoOELcxighZxv5HXqtVK1oBIkxw+A0JBuOIgVHlr60BjwjenXbUsYi4jWFarbELcRmPdI0KOxxZV0cO+YUtw0YI1o3t2EK65VbI7wFxKw11GMHUAPgUSXLeRrqUFRisrjKEd1S1aCKtedWrYpxENXM4oTVit6KfJeIo9tHzGOlWTzE4wo+KTk25Dmh1a5BIegWYQkR9hrSyPdurE0hcc9U9pHUtxnT/0KR1PS52MuE0yYTTJBNOk0w4TTLhNMmE0yQTTpNMOE0y4TTJhNPETbjBjlmRXBw1cBNuxqP8XDM3X88Ds07lbqsjZeBLZOn6wLBdicHhQd8uWg8821JEdnrsXiCAunAmrHHnkMM8Btfh3yIaeWA5bitSyFIe2RdYituSFLFUq1Y2reBQRwLAHd7iSOrBCbCAeqKwPao+QR7qvUp8r88YQLYS7dhB8t06jfX6jPVatfLfpvhZcZrEu4EyjbNwa8jWoVHOy0upUkNSUlkLSNbkdZc604i9idiwToJwE0gGZq9HvRISvK4DvyMpEtqpqGGJU7gLSDKh39w4ix7gQyRFzFRSTmDiEK4LmcbdwH8ijh3DwBfop4GFopPC5RA/9g7Oc2MdJpA8FK/EQ6N0SrjLyBJNVGt8RaQVTyKtb929upkbRkk/IlinXnrVC9wDbiL+bzuqG0UlnPUI0RTBxorHOGdynuLfJ5aB+0jkfUwE64lRCBfkESKLA+Qf7MZ5/W8BmS9a4zkvckgAGkeGL0YXMkwLdxsZYvjFyl5fQBZUp13qHiMBYBUR122w3E4JqKh7LQewzRXTwt0MUPc54sh3286duNS3yprAT8AKwZ71miDBwrn94xZ7iGDPbMo2sPdlp6qsnS3gB0SQWbxdg1E/Z3qSv+JSdoT4se+xFw2k9dV58wc4Ued2ba+QAfB3SHd3G8Ml2setIGOps+O1VSQ52s/ofhkZh1nfsYt3azlS37+C+LOzw5815PEnY0TRVX8EPkLmoi+RVhZ0PnmA3ibSvrp/GZmh9COCeb7sNyj/ApzHEuc4VMXsAAAAAElFTkSuQmCC) no-repeat;
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

