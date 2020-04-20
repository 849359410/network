<template>
	<div class="third_screen">
		<div class="three_content">
			<div class="three_tit">
				<h3>产品特色</h3>
				<h5>您长期运营彩票平台的绝佳选择</h5>
			</div>
			<div class="three_middle">
				<div>
					<ul>
						<li
							v-for="(k, i) of slid"
							:key="i"
							:id="`slid3Btn${i}`"
							@click="changeImg(i)"
							@mouseenter="stopSm()"
							@mouseleave="startSm()"
						>
							{{k.btn}}
						</li>
					</ul>
				</div>
				<div class="three_carousel">
					<div
						class="slide"
					 	v-for="(item, index) of slid"
						:key="index"
					>
						<img :src="item.img" />
					</div>
				</div>
			</div>
			<div class="three_bottom">
				<div>
					<p v-html="btnImg3[hashUrl3].text"></p>
				</div>
				<button class="bottom_btn" @click="down()">
					<p>根据您的需求，为您量身定制</p>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { Bus } from "../../main";
export default {
	name: "slid3",
	props: {
		slid3Url: {
			type: Number,
			default() {
				return 0
			}
		},
		hashUrl3: {
			type: Number,
			default() {
				return 0;
			}
		}
	},
	data() {
		return {
			slid: [
				{
					img: require("../../assets/imgs/Characteristic1.png"),
					btn: "最全面的彩种"
				},
				{
					img: require("../../assets/imgs/Characteristic2.png"),
					btn: "最多端的支持"
				},
				{
					img: require("../../assets/imgs/Characteristic3.png"),
					btn: "最顶尖的技术"
				},
				{
					img: require("../../assets/imgs/Characteristic4.png"),
					btn: "最全面的安全防护"
				},
				{
					img: require("../../assets/imgs/Characteristic5.png"),
					btn: "杀率/赔率自定义"
				},
			],
			btnImg3: [
				{
					text: `<p>囊括时下各类热门彩种，自主研发<b>秒开彩种<br></b>24小时不间断随买随开，让您畅玩游戏无需等待</p>`
				},
				{
					text: `<p>强大互动聊天室，可以进入聊天室的用户设置门槛，<br>聊天室娱乐发红包，互动跟单刷排行，劲畅游戏放松心情</p>`
				},
				{
					text: `<p>一款全面、高效、精准的彩票计划预测软件；支持快三、<br>PK拾、时时彩、11选5等</p>`
				},
				{
					text: `<p>年化率远超银行理财，安全、复利、便捷让您日进斗金</p>`
				},
				{
					text: `<p>完美开发自主彩秒开系列，24小时不间断随买随开，让<br>您畅玩游戏无需等待</p>`
				}
			]
		}
	},
	destroyed() {
		console.log(111)
	},
	methods: {
		changeImg(i) {
			Bus.$emit("slid3", i);
		},
		stopSm() {
			Bus.$emit("stopSm")
		},
		startSm() {
			Bus.$emit("startSm")
		},
		down() {
			Bus.$emit("down")
		}
	}
}
</script>

<style lang="scss">
.third_screen {
	position: relative;
	height: 100%;
	width: 100%;
	background: url("../../assets/imgs/third_screen_bg.png") no-repeat;
	background-size: cover;
	.three_content {
		max-width: 1600px;
		margin: 0 auto;
		.three_tit {
			padding-top: 130px;
			text-align: center;
			h3 {
				font-size: 28px;
				color: #3982e5;
				margin: 0;
			}
			h5 {
				margin: 10px;
				font-size: 18px;
				font-weight: 400;
				letter-spacing: 2px;
				color: #494949;
			}
		}
		.three_middle {
			max-width: 1600px;
			margin: -45px auto 0;
			font-size: 16px;
			display: flex;
			ul {
				margin: 90px 0 0 140px;
				li {
					list-style: none;
					width: 167px;
					height: 35px;
					margin: 30px 0;
					border: 2px solid #347fe8;
					color: #1753d6;
					text-align: center;
					padding-top: 12px;
					cursor: pointer;
				}

			}
			.three_carousel {
				display: inline;
				max-height: 560px;
				overflow: hidden;
				max-width: 900px;
				cursor: pointer;
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
		}
		.three_bottom {
			text-align: center;
			div {
				font-size: 18px;
				color: #494949;
				height: 50px;
			}
			button {
				font-size: 18px;
				width: 326px;
				height: 70px;
				text-align: center;
				margin: 30px auto 0;
				background: linear-gradient(#035fd6, #1c96ee);     /*设置渐变色*/
				-webkit-background-clip: text;           /*私有属性将背景色应用到文字上*/
				color: rgba(255, 255, 255, 0.1);
				border: 3px solid rgba(255, 255, 255, 0.1);
				border-image: linear-gradient(#035fd6, #1c96ee) 2 2;
				cursor: pointer;
			}
			button:hover {
				background: linear-gradient(#035fd6, #1c96ee);
				color: #ffffff;
			}
		}
	}
}
</style>
