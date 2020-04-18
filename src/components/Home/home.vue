<template>
    <div>
        <nav id="fullPageMenu" class="container-fluid">
            <topMenu :menu="menu"></topMenu>
        </nav>
        <leftMenu :menu="menu"></leftMenu>
        <full-page class="fullpage" :options="options" ref="page">
            <!-- 第一屏 -->
            <div class="section">
                <slid1 :page="page" :active="active" />
            </div>
            <!-- 第二屏 -->
            <div class="section">
                <slid2></slid2>
            </div>
            <div class="section">3</div>
            <div class="section">4</div>
            <div class="section">5</div>
            <div class="section">6</div>
        </full-page>
    </div>
</template>

<script>
import "@/assets/css/fullpage.min.css";
import { Bus } from "../../main";
import slid1 from "../slid/slid1";
import slid2 from "../slid/slid2";
import topMenu from "../menu/topMenu";
import leftMenu from "../menu/leftMenu";
    export default {
        name: "home",
        components: {
            slid1,
            slid2,
            topMenu,
            leftMenu
        },
        data() {
            return {
                menu:[
                    {
                        img1: require("../../assets/imgs/logo.png")
                    },
                    //顶部导航栏
                    [
                        {dataMenuanchor: 1, href: "#1", style: "color: #fff", value: "首页"},
                        {dataMenuanchor: 2, href: "#2", style: "color: #fff", value: "产品"},
                        {dataMenuanchor: 3, href: "#3", style: "color: #fff", value: "特色"},
                        {dataMenuanchor: 4, href: "#4", style: "color: #fff", value: "服务"},
                        {dataMenuanchor: 5, href: "#5", style: "color: #fff", value: "合作"},
                        {dataMenuanchor: 6, href: "#6", style: "color: #fff", value: "联系"},
                    ],
                    //左侧导航栏
                    [
                        {dataMenuanchor: 1, href: "#1", style: "color: #fff", value: "首页"},
                        {dataMenuanchor: 2, href: "#2", style: "color: #fff", value: "产品"},
                        {dataMenuanchor: 3, href: "#3", style: "color: #fff", value: "特色"},
                        {dataMenuanchor: 4, href: "#4", style: "color: #fff", value: "服务"},
                        {dataMenuanchor: 5, href: "#5", style: "color: #fff", value: "合作"},
                        {dataMenuanchor: 6, href: "#6", style: "color: #fff", value: "联系"},
                    ],
                ],
                page: [
                    {
                        video: require("../../assets/imgs/index_video.mp4"),
                        img1: require("../../assets/imgs/index1.png"),
                        img2: require("../../assets/imgs/index2.png"),
                        btn1: require("../../assets/imgs/index4.png"),
                        btn2: require("../../assets/imgs/index5.png"),
                        woman: require("../../assets/imgs/index3.png"),
                        downBtn: require("../../assets/imgs/index_down.png")
                    },
                ],
                options: {
                    css3:true,
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                    loopHorizontal: true,
                    afterLoad: this.afterLoad,
                    afterRender: this.afterRender,
                    scrollOverflow: true,
                    menu: '#fullPageMenu',
                    anchors: ['1','2','3','4','5', '6'],
                    // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59'],
                },
                timer: null,
                active: 1,
                url: window.location.href
            }
        },
        mounted() {
            Bus.$on("getPre", (i) => {
                this.getPre(i)
            });
            Bus.$on("getNext", (i) => {
                this.getNext(i)
            });
            Bus.$on("pageDown", () => {
                this.pageDown()
            })
        },
        methods: {
            afterLoad (link, index) {
                if(index.index) {
                    clearInterval(this.timer);
                    this.timer = setInterval(() => {
                        this.$refs.page.api.moveSlideRight();
                    }, 600000);
                }
            },
            afterRender () {
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    this.$refs.page.api.moveSlideRight();
                }, 6000000);
            },
            getPre (i) {
                if(i === 2) {
                    this.$refs.page.api.moveSlideLeft();
                    this.active = 1
                }
            },
            getNext (i) {
                if(i === 1) {
                    this.$refs.page.api.moveSlideRight();
                    this.active = 2
                }
            },
            pageDown () {
                this.$refs.page.api.moveSectionDown();
            },
        },
    }
</script>

<style lang="scss">



</style>