export default {
    data() {
        return {
            urlHref: 1,
            hashUrl: 0,
            hashUrl3: 0,
            waiting: true,
            btnImg: [
                {
                    img: require("../assets/imgs/pager1.png"),
                    img1: require("../assets/imgs/pager5.png"),
                    text:`<p>强大互动聊天室，可以进入聊天室的用户设置门槛，<br>聊天室娱乐发红包，互动跟单刷排行，劲畅游戏放松心情。</p>`
                },
                {
                    img: require("../assets/imgs/pager2.png"),
                    img1: require("../assets/imgs/pager6.png"),
                    text:`<p>一款全面、高效、精准的彩票计划预测软件,<br>支持快三、PK拾、时时彩、11选5等；</p>`
                },
                {
                    img: require("../assets/imgs/pager3.png"),
                    img1: require("../assets/imgs/pager7.png"),
                    text: `<p>年化率远超银行理财，安全、复利、便捷让您日进斗金</p>`
                },
                {
                    img: require("../assets/imgs/pager4.png"),
                    img1: require("../assets/imgs/pager8.png"),
                    text: `<p>完美开发自主彩秒开系列，24小时不间断随买随开，<br>让您畅玩游戏无需等待</p>`
                },
            ],
        }
    },
    created() {
        let self = this;
        self.urlHref = Number(window.location.href.split("#")[1]);
        window.onload = () => {
            this.getHashUrl();
            self.waiting = false;
            window.onhashchange = (e) => {
                let url = e.newURL.split("#");
                if (url[1].length > 1) {
                    self.urlHref = Number(url[1].split("/")[0]);
                } else self.urlHref = Number(url[1]);
                this.getHashUrl();
            }
        }
    },
    methods: {
        getHashUrl() {
            let self = this;
            if(window.location.hash.split("/")[0] === "#2") {
                if (window.location.hash.split("/")[1]) {
                    self.hashUrl = Number(window.location.hash.split("/")[1]);
                } else self.hashUrl = 0;
                //第二屏分页器
                for (let i = 0; i < 4; i++) {
                    document.getElementById(`imgBtn${self.hashUrl}`).src = self.btnImg[self.hashUrl].img1;
                    if (i === Number(self.hashUrl)) {
                        document.getElementById(`imgBtn${i}`).src = self.btnImg[i].img1;
                    } else {
                        document.getElementById(`imgBtn${i}`).src = self.btnImg[i].img;
                    }
                }
            } else {
                if (window.location.hash.split("/")[1]) {
                    self.hashUrl3 = Number(window.location.hash.split("/")[1]);
                } else self.hashUrl3 = 0;
                for (let i = 0; i < 5; i++) {
                    document.getElementById(`slid3Btn${self.hashUrl3}`).classList.add("leftColor");
                    if (i === Number(self.hashUrl3)) {
                        document.getElementById(`slid3Btn${i}`).classList.add("leftColor");
                    } else {
                        document.getElementById(`slid3Btn${i}`).classList.remove("leftColor");
                    }
                }
            }
        }
    }
}