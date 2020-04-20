<script>
import "@/assets/css/fullpage.min.css";
import "@/assets/animate.css";
import mix from "../../mixins/mix";
import { Bus } from "../../main";
import slid1 from "../slid/slid1";
import slid2 from "../slid/slid2";
import slid3 from "../slid/slid3";
import slid4 from "../slid/slid4";
import slid5 from "../slid/slid5";
import slid6 from "../slid/slid6";
import topMenu from "../menu/topMenu";
import leftMenu from "../menu/leftMenu";
import fluidVue from "../menu/fluid";
import waitingToLoad from "../menu/waitingToload"
    export default {
        name: "home",
        mixins: [mix],
        components: {
            slid1,
            slid2,
            slid3,
            slid4,
            slid5,
            slid6,
            topMenu,
            leftMenu,
            fluidVue,
            waitingToLoad
        },
        data() {
            return {
                menu:[
                    {
                        img1: require("../../assets/imgs/logo.png"),
                        img2: require("../../assets/imgs/logo2.png")
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
                        {dataMenuanchor: 1, href: "#1", value: "首页"},
                        {dataMenuanchor: 2, href: "#2", value: "产品"},
                        {dataMenuanchor: 3, href: "#3", value: "特色"},
                        {dataMenuanchor: 4, href: "#4", value: "服务"},
                        {dataMenuanchor: 5, href: "#5", value: "合作"},
                        {dataMenuanchor: 6, href: "#6", value: "联系"},
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
                        downBtn: require("../../assets/imgs/index_down.png"),
                        zoomIn:"animated zoomIn",
                        fadeInUp:"animated fadeInUp",
                        fadeInLeft: "animated fadeInLeft",
                    },
                ],
                options: {
                    css3:false,
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                    loopHorizontal: true,
                    afterLoad: this.afterLoad,
                    onLeave: this.onLeave,
                    afterRender: this.afterRender,
                    scrollOverflow: true,
                    verticalCentered:true,
                    menu: '#fullPageMenu',
                    anchors: ['1','2','3','4','5', '6'],
                    // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59'],
                    normalScrollElements:'',
                },
                timer: null,
                active: 1,
                url: window.location.href,
	            urlHref: 1,
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
            });
            Bus.$on("changeImg", i => {
                this.changeImg(i)
            });
            Bus.$on("stopSm", i => {
                this.stopsm()
            });
            Bus.$on("startSm", i => {
                this.startSm()
            });
            Bus.$on("slid3", i => {
                this.slid3(i)
            });
            Bus.$on("down", i => {
                this.down()
            })
        },
        methods: {
            afterLoad (link, index) {
                let arr = [1, 2, 3];
                console.log(index.anchor);
                if (Number(index.anchor) === 1) {
                    console.log(this.$refs);
                }
                if(arr.some(i => i === Number(index.anchor))) {
                    clearInterval(this.timer);
                    this.timer = setInterval(() => {
                        this.$refs.page.api.moveSlideRight();
                    }, 3000);
                }
            },
            onLeave(index, nextIndex, direction) {
                let arr = [1, 2, 3];
                clearInterval(this.timer);
                this.timer = null;
                //水平轮播固定第一页
                if(arr.some(i => i === Number(index.anchor))) {
                    this.$refs.page.api.moveTo(Number(index.anchor), 0);
                }
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
            changeImg (i) {
                this.$refs.page.api.moveTo(2, i);
            },
            slid3(i) {
                this.$refs.page.api.moveTo(3, i);
            },
            stopsm() {
                clearInterval(this.timer);
                this.timer = null;
            },
            startSm() {
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    this.$refs.page.api.moveSlideRight();
                }, 3000);
            },
            down() {
                this.$refs.page.api.moveTo(6, 1)
            }
        },
	    render(createElement) {
		    return (
		        <div>
                    <waiting-to-load waiting={this.waiting}></waiting-to-load>
                    <div>
                        <fluid-vue></fluid-vue>
                        <nav id="fullPageMenu" class="container-fluid">
                            <top-menu menu={this.menu} urlHref={this.urlHref}></top-menu>
                        </nav>
                        <left-menu menu={this.menu} urlHref={this.urlHref}></left-menu>
                        <full-page class="fullpage" options={this.options} ref="page">
                            {
                                this.options.anchors.map(i => {
                                    return (
                                        <div class="section">
                                            {
                                                createElement(`slid${i}`, {
                                                    props: {
                                                        page: this.page,
                                                        active: this.active,
                                                        btnImg: this.btnImg,
                                                        hashUrl: this.hashUrl,
                                                        hashUrl3: this.hashUrl3
                                                    }
                                                })
                                            }
                                        </div>
                                    )

                                })
                            }
                        </full-page>
                    </div>
                </div>
	        )
	    },
    }
</script>

<style lang="scss">
    .leftColor {
        background: #347fe8;
        color: #ffffff !important;
    }


</style>
