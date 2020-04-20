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

    props: {
        btnImg:{
            type: Array,
            default() {
                return []
            }
        },
        hashUrl: {
            type: Number,
            default() {
                return 0;
            }
        }
    },
    watch: {
        btnImg: {
            handler(n) {
                console.log("btnImg", n);
            },
            deep: true
        }
    },
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
            ]
        }
    },
    created() {
        console.log("this.btnImg", this.btnImg);
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