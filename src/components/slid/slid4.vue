<template>
	<div class="serve_four">
		<div class="serve_content">
			<div class="four_tit">
				<h3>服务品质</h3>
				<h5>我用心, 您放心</h5>
			</div>
			<div class="four_con">
				<div class="four_limit">
					<ul>
						<li v-for="(item, index) of slid" :key="index">
							<img :src="item.img" />
							<div>
								<h4>{{item.title}}</h4>
								<p>{{item.text}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "slid4",
	data() {
		return {
			slid: [
				{
					img:require("../../assets/imgs/serve1.png"),
					title: '便捷式管理',
					text: '强大的后台管理系统，协助您轻松管理站点的日常事务：多人共享存取款审批流程、子账号权限管理、系统自动生成返水与返佣报表等…'
				},{
					img:require("../../assets/imgs/serve2.png"),
					title: "更新不停机",
					text: "EG彩票系统每一次例行升级，均采用不停机更新，维护期间玩家仍可正常游戏，服务永不间断"
				},{
					img:require("../../assets/imgs/serve3.png"),
					title: "注单更即时",
					text: "拥有全网最快、最稳定的返奖系统，数据与官方实时同步，注单结算、出款稽核更快速，无需耗损客服大量的人工成本"
				},{
					img:require("../../assets/imgs/serve4.png"),
					title: "域名防劫持",
					text: "EG彩票防劫持技术(业内遥遥领先)，为您提供域名“零劫持”的稳定运营环境，您再也无需担心推广费用打水漂！"
				},{
					img:require("../../assets/imgs/serve5.png"),
					title: "全角色报表",
					text: "供详细的经营数据报表，日报、周报、月报，全面涵盖各个角色层相关的核心数据，大幅提升运营人员制作财务报表的效率"
				},{
					img:require("../../assets/imgs/serve6.png"),
					title: "24小时服务",
					text: "我们的客服及运维24小时坚守岗位，安全防护，让您安全放心"
				}
			]
		}
	}
}
</script>

<style lang="scss">
	.serve_four {
		width: 100%;
		height: 100%;
		background-image: url("../../assets/imgs/four_bg.png");
		background-repeat: no-repeat;
		background-size: cover;
		.serve_content {
			height: 0;
			max-width: 1600px;
			margin: 0 auto;
			/*padding-top: 2.467rem;*/
			.four_tit {
				padding-top: 130px;
				text-align: center;
				color: #fff;
				h3 {
					font-size: 28px;
					margin: 0;
				}
				h5 {
					margin: 10px;
					font-size: 18px;
					font-weight: 400;
					letter-spacing: 2px;
				}
			}
			.four_con {
				max-width: 1600px;
				margin: 80px auto 0;
				.four_limit {
					width: 1180px;
					margin: 0 auto;
					ul {
						list-style: none;
						padding: 0;
						margin: 0;
						li {
							position: relative;
							display: inline-flex;
							overflow: hidden;
							margin: -3px;
							div {
								padding: 16px 20px;
								position: absolute;
								top: 268px;
								color: #fff;
								font-size: 18px;
								background-color: rgba(0, 85, 208, 0.66);
								height: 240px;
								transition: all 0.5s;
								h4:nth-child(1) {
									font-weight: 400;
									margin: 0;
									padding-bottom: 16px;
									width: 116px;
									border-bottom: 1px solid #fff;
								}
							}
						}
						li:hover div {
							padding: 40px 26px;
							position: absolute;
							top: 0;
							color: #fff;
							transition: all 1s;
						}
					}
				}
			}
		}
	}

	.fourHover {
		padding: 40px 26px !important;
		position: absolute !important;
		top: 0 !important ;
		color: #fff !important;
		font-size: 18px !important;
		background-color: rgba(0, 85, 208, 0.66) !important;
		height: 240px !important;
		transition: all 1s !important;
	}

</style>
