<template>
    <div class="second_screen">
        <div class="two_content">
            <div class="topText">
                <h3>
                    产品展示
                </h3>
                <span>
                    运营活动层出不穷，满足您全方位需求<br>
                </span>
            </div>
            <div class="second_screen_carousel">
                <img
                        v-for="(item, index) of btnImg"
                        :key="index"
                        :src="item.img"
                        :id="`imgBtn${index}`"
                        @click="changeImg(index)"
                        @mouseenter="stopSm()"
                        @mouseleave="startSm()"
                />
            </div>
            <div class="second_screen_mian">
                <div
                    class="slide"
                    v-for="(item, index) in slid"
                    :key="index"
                >
                    <img
                        :src="item.img"
                        :datagroup="item.img1"
                    />
                </div>
            </div>
            <div class="threeBottomTxt">
                <div>
                    <p v-html="btnImg[hashUrl].text"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Bus } from "../../main";

export default {
    name: "slid2",
    data() {
        return {
            slid: [
                {
                    img: require("../../assets/imgs/Product1.png")
                },{
                    img: require("../../assets/imgs/Product2.png")
                },{
                    img: require("../../assets/imgs/Product3.png")
                },{
                    img: require("../../assets/imgs/Product4.png")
                }
            ],
            btnImg: [
                {
                    img: require("../../assets/imgs/pager1.png"),
                    img1: require("../../assets/imgs/pager5.png"),
                    text:`<p>强大互动聊天室，可以进入聊天室的用户设置门槛，<br>聊天室娱乐发红包，互动跟单刷排行，劲畅游戏放松心情。</p>`
                },
                {
                    img: require("../../assets/imgs/pager2.png"),
                    img1: require("../../assets/imgs/pager6.png"),
                    text:`<p>一款全面、高效、精准的彩票计划预测软件,<br>支持快三、PK拾、时时彩、11选5等；</p>`
                },
                {
                    img: require("../../assets/imgs/pager3.png"),
                    img1: require("../../assets/imgs/pager7.png"),
                    text: `<p>年化率远超银行理财，安全、复利、便捷让您日进斗金</p>`
                },
                {
                    img: require("../../assets/imgs/pager4.png"),
                    img1: require("../../assets/imgs/pager8.png"),
                    text: `<p>完美开发自主彩秒开系列，24小时不间断随买随开，<br>让您畅玩游戏无需等待</p>`
                },
            ],
            hashUrl: 0,
        }
    },
    watch: {
        $route(to,from) {
            console.log(to);
        }
    },
    created() {
        window.onload = () => {
            document.getElementById(`imgBtn${this.hashUrl}`).src = this.btnImg[this.hashUrl].img1;
            console.log(window.location.hash.split("/")[1]);
            window.onhashchange = () => {
                if (window.location.hash.split("/")[1]) {
                    this.hashUrl = window.location.hash.split("/")[1];
                } else this.hashUrl = 0;
                //第二屏分页器
                for (let i = 0; i < 4; i++) {
                    if (i === Number(this.hashUrl)) {
                        document.getElementById(`imgBtn${i}`).src = this.btnImg[i].img1;
                    } else {
                        document.getElementById(`imgBtn${i}`).src = this.btnImg[i].img;
                    }
                }
                //第三屏分页器
                for (let i = 0; i < 5; i++) {
                    if (i === Number(this.hashUrl)) {
                        document.getElementById(`slid3Btn${i}`).classList.add("leftColor");
                    } else {
                        document.getElementById(`slid3Btn${i}`).classList.remove("leftColor");
                    }
                }
            }
        }

    },
    methods: {
        changeImg(i) {
            Bus.$emit("changeImg", i);
        },
        stopSm() {
            Bus.$emit("stopSm")
        },
        startSm() {
            Bus.$emit("startSm")
        }
    }
}
</script>

<style lang="scss">
.second_screen {
    height: 100%;
    width: 100%;
    background: url("../../assets/imgs/service_bg .png") no-repeat;
    background-size: cover;
    ul {
        list-style: none;
    }
    .fp-slides {
        height: 120%!important;
    }
    .two_content {
        max-width: 1600px;
        margin: 0 auto;
        .topText {
            width: 100%;
            padding-top: 130px;
            text-align: center;
            border: none;
            h3 {
                font-size: 28px;
                color: #ffffff;
                margin: 0;
            }
            span {
                display: block;
                font-size: 18px;
                color: #ffffff;
                margin-top: 14px;
                margin-bottom: 18px;
            }
        }
        .second_screen_carousel {
            cursor: pointer;
            z-index: 9999;
            text-align: center;
            margin: 30px auto auto auto;
            img {
               margin: 0 54px 0 54px;
            }
            .pager5 {
                background: url("../../assets/imgs/pager5.png") center;
            }
            .pager6 {
                background: url("../../assets/imgs/pager6.png") center;
            }
            .pager7 {
                background: url("../../assets/imgs/pager7.png") center;
            }
            .pager8 {
                background: url("../../assets/imgs/pager8.png") center;
            }
        }
        .second_screen_mian {
            max-width: 1600px;
            max-height: 500px;
            overflow: hidden;
            margin: 0 auto;
            cursor: pointer;
            text-align: center;
            ul {
                display: flex;
                justify-content: center;
                margin-top: 30px;
            }
            .fp-tableCell {
                height: 0!important;
            }
            .fp-prev,.fp-next {
                position: absolute;
                top: 50%;
                border-color: transparent!important;
            }
            .fp-prev {
                background: url("../../assets/imgs/bt_prev.png") no-repeat left;
                left: 6%!important;
            }
            .fp-next {
                background: url("../../assets/imgs/bt_next.png") no-repeat right;
                right: 6%!important;
            }
        }
        .threeBottomTxt {
            font-size: 16px;
            color: #ffffff;
            text-align: center;
        }
    }
}


</style>