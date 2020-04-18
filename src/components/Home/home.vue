
<script>
	import "@/assets/css/fullpage.min.css";
	import {Bus} from "../../main";
	import slid1 from "../slid/slid1";
	import topMenu from "../menu/topMenu";
	import leftMenu from "../menu/leftMenu"

	export default {
        name: "home",
        components: {
            slid1,
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
                    slidesNavigation: false,
                    navigation: true,//是否显示导航，默认为false
                    navigationPosition: 'right',//导航小圆点的位置
                    scrollBar: false,
                    keyboardScrolling: false,//是否可以使用键盘方向键导航，默认为true
                    continuousVertical: false, /// 是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop、loopBottom不兼容和，不要同时设置
                    menu: '#fullPageMenu',
                    anchors: ['1','2','3','4','5', '6'],
                    // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59'],
                },
                timer: null,
                active: 1,
                url: window.location.href,
	            section: [
		            { page: 1, class: 'bgWhite' },
		            { page: 2, class: 'bgWhite' },
		            { page: 3, class: 'bgBlue' },
		            { page: 4, class: 'bgWhite' },
		            { page: 5, class: 'bgBlue' },
		            { page: 6, class: 'bgWhite' }
	            ],
	            urlHref: "1",
	            colorClass: ""
            }
        },
		watch: {
        	$route: {
				handler(n) {
					console.log("n", n);
				},
		        deep: true
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
		created() {
        	// console.log(window.location)
			window.onhashchange = (e) => {
				this.urlHref = e.newURL.split("#")[1];
			}
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
	    render(createElement) {
		    return (
		        <div>
			        <nav id="fullPageMenu" class="container-fluid">
				        <top-menu menu={this.menu} colorClass={this.colorClass}></top-menu>
				    </nav>
			        <left-menu></left-menu>
				    <full-page class="fullpage" options={this.options} ref="page">
					    {
					    	this.section.map(i => {
					    		if (i.page === Number(this.urlHref)) {
					    			this.colorClass = i.class;
								    return (
									    <div class="section">
										    {
											    createElement(`slid${i.page}`, {
												    props: {
													    page: this.page,
													    active: this.active
												    }
											    })
										    }
									    </div>
								    )
							    } else {
								    return <div class="section">{i.id}</div>;
							    }
						    })
					    }
				    </full-page>
			    </div>
	        )
	    }
    }
</script>

<style lang="scss">



</style>
