<template>
	<div style="height: 100%">
		<div class="SixOuter">
			<div class="contain_six">
				<div class="sixUp">
					<h3>联系我们</h3>
					<h5>在线沟通 服务至上</h5>
				</div>
				<div class="sixDown">
					<div :class="item.classString"
						 v-for="(item, index) of slid"
						 :key="index"
						 @click="Bounce(item.title)"
					>
						<img :src="item.img" />
						<h6>{{ item.title }}</h6>
						<p>{{ item.p }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="SixLast">
			<div class="bottom_con">
				<span>COPYRIGHT © 2017 EG GROUPALL RIGHTS RESERVED</span>
				<p>版权所有 伪冒必究 </p>
				<div>EG娱乐推荐使用谷歌 火狐 IE9以上浏览器</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "slid6",
	data() {
		return {
			slid:[
				{
					classString: "getSkype",
					img: require("../../assets/imgs/skpe.png"),
					title: "Skype",
					p: "earlgamecs"
				},
				{
					classString: "getQQ",
					img: require("../../assets/imgs/QQ.png"),
					title: "QQ",
					p: "97133111/97133222"
				},
				{
					classString: "threeEmail",
					img: require("../../assets/imgs/email.png"),
					title: "邮箱",
					p: "eg66666666@gmail.com"
				},
			]
		}
	},
	methods: {
		Bounce(title) {
			if( title === 'Skype') {
				window.open("skype:earlgamecs?chat");
			} else if (title === 'QQ') {
				window.open("tencent://message/?uin=97133222");
				window.location.href="mqqwpa://im/chat?chat_type=crm&uin=97133222&version=1&src_type=web&web_src=http:://wpa.b.qq.com";
			} else {
				window.open("mailto: eg66666666@gmail.com.org");
			}
		}
	}
}
</script>

<style lang="scss">
	.SixOuter {
		width: 100%;
		height: 100%;
		background-image: url("../../assets/imgs/six_bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		.contain_six {
			padding-top: 130px;
			text-align: center;
			color: #fff;
			max-width: 1600px;
			margin: 0 auto;
			.sixUp {
				padding-top: 50px;
				h3 {
					margin: 0;
					font-size: 28px;
				}
				h5 {
					margin: 10px;
					font-size: 18px;
					font-weight: 400;
					letter-spacing: 2px;
				}
			}
			.sixDown {
				display: inline-flex;
				margin-top: 150px;
				div {
					width: 390px;
					height: 215px;
					border-right: 2px solid #ffffff;
					font-size: 16px;
					img {
						cursor: pointer;
					}
					h6 {
						font-size: 16px;
						font-weight: 600;
						margin-bottom: 0;
						cursor: pointer;
					}
					p {
						margin-top: 10px;
						cursor: pointer;
					}
					.threeEmail {
						h6 {
							margin-bottom: 10px;
						}
						p {
							display: inline;
						}
					}
				}
			}
		}
	}
	.SixLast {
		width: 100%;
		height: 60px;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		bottom: 0;
		font-size: 14px;
		color: #fff;
		.bottom_con {
			max-width: 1600px;
			padding-top: 12px;
			margin: 0 auto;
			text-align: center;
			p {
				display: inline;
			}
		}
	}
</style>
