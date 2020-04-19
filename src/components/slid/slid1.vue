<template>
    <div class="box1">
        <video :src="page[0].video" muted="muted" autoplay="autoplay" loop="loop" data-keepplaying></video>
        <div class="slide animated zoomIn">
            <img class="img1" :src="page[0].img1" alt="">
        </div>
        <div class="slide">
            <img class="img2" :src="page[0].img2"  alt=""/>
            <div>
                <a class="btn1" href="javascript:;" @click="down()">
                    <img :src="page[0].btn1" alt="">
                </a>
                <a class="btn2" href="javascript:;" @click="Bounce()">
                    <img :src="page[0].btn2" alt="">
                </a>
            </div>
            <div class="woman">
                <img :src="page[0].woman" alt="">
            </div>
        </div>
        <a href="javascript:;"><img @click="pageDown" class="downBtn" :src="page[0].downBtn" alt=""></a>
        <ul>
            <li @click="getPre" :class="active === 1 ? 'active' : ''"></li>
            <li @click="getNext" :class="active === 2 ? 'active' : ''"></li>
        </ul>
    </div>
</template>

<script>
import { Bus } from "../../main";
export default {
    name: "slid1",
    props: {
        page: {
            type: Array,
            default() {
                return []
            }
        },
        active: {
            type: Number,
            default() {
                return 1;
            }
        }
    },
    methods: {
        getPre() {
            Bus.$emit("getPre",this.active);
        },
        getNext() {
            Bus.$emit("getNext",this.active);

        },
        pageDown() {
            Bus.$emit("pageDown");
        },
        down() {
            Bus.$emit("down")
        },
        Bounce() {
            window.open("https://eg00000.com/","width = 1000", "height = 800");
        }
    }

}
</script>

<style lang="scss">
.box1 {
    position: relative;
    width: 100%;
    min-width: 1600px;

    video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .slide {
        position: relative;
        text-align: center;
        color: darkgreen;
        font-size: 30px;
        margin: 0 auto;
        .woman {
            position: absolute;
            right: 6%;
            top: 13%;
        }
    }
    .slide:nth-child(2) {
        .img2 {
            position: absolute;
            left: 13%;
            top: 32%;
        }
        .btn1 {
            position: absolute;
            left: 20%;
            top: 62%;
        }
        .btn2 {
            position: absolute;
            left: 36%;
            top: 62%;
        }
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
    .downBtn {
        position: absolute;
        left: 50%;
        margin-left: -23.5px;
        bottom: 50px;
        cursor: pointer;
        z-index: 10;
    }
    ul {
        position: absolute;
        bottom: 10%;
        left: 50%;
        margin-left: -110px;
        display: flex;
        z-index: 99999;
        li {
            cursor: pointer;
            list-style: none;
            width: 40px;
            height: 4px;
            margin: 7px 15px 7px;
            background: #fff;
        }
        li.active {
            background-color: aqua !important;
        }
    }
}
.fp-slidesNav {

}
</style>