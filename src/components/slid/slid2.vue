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
            <!--分页器-->
            <div class="second_screen_carousel">
                <ul>
                    <li class="pager1"></li>
                    <li class="pager2"></li>
                    <li class="pager3"></li>
                    <li class="pager4"></li>
                </ul>
            </div>
            <!--版心.-->
            <div class="second_screen_mian">
                <div class="slide" v-for="(item, index) in page[1]" :key="index">
                    <img :src="item.img1" alt="">
                </div>
            </div>
            <div class="threeBottomTxt">
                <div>
                    <p>强大互动聊天室，可以进入聊天室的用户设置门槛，<br>聊天室娱乐发红包，互动跟单刷排行，劲畅游戏放松心情。</p>
                </div>
                <div class="textList">
                    <p>一款全面、高效、精准的彩票计划预测软件,<br>支持快三、PK拾、时时彩、11选5等；</p>
                </div>
                <div class="textList">
                    <p>年化率远超银行理财，安全、复利、便捷让您日进斗金</p>
                </div>
                <div class="textList">
                    <p>完美开发自主彩秒开系列，24小时不间断随买随开，<br>让您畅玩游戏无需等待</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "slid2",
    props: {
        page: {
            type: Array,
            default() {
                return [];
            }
        },
    },
    watch: {
       page: {
           handler(val){
               console.log(val)
           },
           deep:true
       }
    }
}
</script>

<style>
    .second_screen {
        height: 100%;
        width: 100%;
        background: url("../../assets/imgs/service_bg .png") no-repeat;
        background-size: cover;
    }
    .two_content {
        max-width: 1600px;
        margin: 0 auto;
    }
    /* 顶部文案 */
    .topText {
        width: 100%;
        padding-top: 130px;
        text-align: center;
        border: none;
    }

    .topText > h3 {
        font-size: 28px;
        color: #ffffff;
        margin: 0;
    }

    .topText > span {
        display: block;
        font-size: 18px;
        color: #ffffff;
        margin-top: 14px;
        margin-bottom: 18px;
    }

    /* 显示屏 */
    .second_screen_mian {
        max-width: 1600px;
        max-height: 500px;
        overflow: hidden;
        margin: 0 auto;
        cursor: pointer;
    }
    .second_screen_carousel {
        margin: 0 auto;
        cursor: pointer;
        z-index: 9999;
    }
    .second_screen_carousel ul {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
    ul {
        list-style: none;
    }
    .second_screen_carousel li {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin: 0 54px;
    }

    .pager1 {
        background: url("../../assets/imgs/pager1.png") center;
    }
    .pager2 {
        background: url("../../assets/imgs/pager2.png") center;
    }
    .pager3 {
        background: url("../../assets/imgs/pager3.png") center;
    }
    .pager4{
        background: url("../../assets/imgs/pager4.png") center;
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

    /* 底部文字 */
    .threeBottomTxt {
        font-size: 16px;
        color: #ffffff;
        text-align: center;
    }
    .second_screen .fp-slides {
        height: 120%!important;
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

</style>