<template>
	<div class="FiveBg">
		<div class="five_outer">
			<div class="five_tit">
				<h3>合作流程</h3>
				<h5>极简流程 贴心服务</h5>
			</div>
			<div class="five_img">
				<ul>
					<li v-for="(item, index) of slid" :key="index">
						<span>{{ item.Numbering }}</span>
						<div class="bg_picture">
							<h4>{{ item.title }}</h4>
							<p>{{ item.text }}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "slid5",
	data() {
		return {
			slid: [
				{
					Numbering: "1",
					title: "合作意向洽谈",
					text: "请与EG彩票的在线客服沟通您的包网内容，所选择套餐方案等等，建立初步合作意向"
				},
				{
					Numbering: "2",
					title: "了解合作费用",
					text: "初步确认合作方案后，EG彩票会向您传送《合作细节》文档，方便您了解各项费用的标准"
				},
				{
					Numbering: "3",
					title: "签订合作协议",
					text: "各项费用得到您的认可后，我们将会向您发送《合作协议》文档，双方签署并确认缴费细节"
				},
				{
					Numbering: "4",
					title: "缴纳相关费用",
					text: "商户提供的技术需求及开发文档经我们审核无误后，您需要缴纳相关费用（如开版费、月服务费等），之后我们将为您创建账号并进入项目研发阶段"
				},
				{
					Numbering: "5",
					title: "项目开发设计",
					text: "根据您提供的需求文档，我们将为您量身订制项目的前端策划设计，后端统一高效开发管理，正式确立建站"
				},
				{
					Numbering: "6",
					title: "正式上线运营",
					text: "项目整个设计开发完成后，EG彩票将为您预留7天的内测时间，内测完毕后正式上线，将为您开通一对一的VIP客服专线"
				}
			]
		}
	}
}
</script>

<style lang="scss">
	.FiveBg {
		width: 100%;
		height: 100%;
		background-image: url("../../assets/imgs/five_bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		.five_outer {
			max-width: 1600px;
			margin: 0 auto;
			.five_tit {
				padding-top: 140px;
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
					color: #4b4b4b;
				}
			}
			.five_img {
				max-width: 1600px;
				margin: 70px auto 0;
				ul {
					width: 1376px;
					list-style: none;
					padding: 0;
					margin: 0 auto;
					li {
						display: inline-flex;
						margin: 10px 73px 60px;
						position: relative;
						width: 305px;
						height: 240px;
						background-image: url("../../assets/imgs/four_pc.png");
						background-size: cover;
						transition: all 0.5s;
						span {
							font-size: 28px;
							font-weight: bold;
							color: #fff;
							position: absolute;
							left: 145px;
							top: 9px;
							transition: all 0.5s;
						}
						div {
							width: 305px;
							/*height: 240px;*/
							margin: 50px auto 0;
							cursor: pointer;
							transition: all 0.5s;
							h4 {
								font-size: 22px;
								color: #3982e5;
								text-align: center;
								font-weight: 400;
								margin-bottom: 0;
								transition: all 0.5s;
							}
							p {
								font-size: 16px;
								color: #3f3f3f;
								margin: 10px 30px;
								transition: all 0.5s;
							}
						}

					}
					li:hover {
						transition: all 0.5s;
						transform: scale(1.07);
					}
				}
			}
		}
	}
</style>
