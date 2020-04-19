<script>
import "@/assets/css/fullpage.min.css";
import "@/assets/animate.css";
import { Bus } from "../../main";
import slid1 from "../slid/slid1";
import slid2 from "../slid/slid2";
import slid3 from "../slid/slid3";
import slid4 from "../slid/slid4";
import slid5 from "../slid/slid5";
import slid6 from "../slid/slid6";
import topMenu from "../menu/topMenu";
import leftMenu from "../menu/leftMenu";
    export default {
        name: "home",
        components: {
            slid1,
            slid2,
            slid3,
            slid4,
            slid5,
            slid6,
            topMenu,
            leftMenu
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
                    normalScrollElements:''
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
            });
            Bus.$on("changeImg", i => {
                this.changeImg(i)
            });
            Bus.$on("stopSm", i => {
                this.stopsm()
            });
            Bus.$on("startSm", i=> {
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
                if(index.index) {
                    clearInterval(this.timer);
                    this.timer = setInterval(() => {
                        this.$refs.page.api.moveSlideRight();
                    }, 3000);
                }
            },
            afterRender () {
                this.timer = setInterval(() => {
                    this.$refs.page.api.moveSlideRight();
                }, 3000);
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
                console.log("i",i)
            },
            stopsm() {
                clearInterval(this.timer);
            },
            startSm() {
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
			        <nav id="fullPageMenu" class="container-fluid">
				        <top-menu menu={this.menu}></top-menu>
				    </nav>
			        <left-menu menu={this.menu}></left-menu>
				    <full-page class="fullpage" options={this.options} ref="page">
					    {
						    this.options.anchors.map(i => {
						        return (
						            <div class="section">
						                {
						                    createElement(`slid${i}`, {
						                        props: {
						                            page: this.page,
						                            active: this.active
						                        }
						                    })
						                }
						            </div>
						        )
						    })
					    }
				    </full-page>
			    </div>
	        )
	    },
    }
</script>

<style lang="scss">



</style>
