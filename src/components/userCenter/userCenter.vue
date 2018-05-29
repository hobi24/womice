<!-- 站内信 -->
<template>
	<div class="userCenter_bac">
		<div class="center">
			<div class="left">
				<user-head></user-head>
				<div class="center_tabs">
					<ul id="userCenterTabs">
						<li @click="userCenterTabs(0,'')">订单列表
						</li>
						<li @click="userCenterTabs(1,'baseInformation')">基本信息
						</li>
						<li @click="userCenterTabs(2,'changePassword')">修改密码
						</li>
						<li @click="userCenterTabs(3,'bindAccount')">绑定账号
						</li>
						<li @click="userCenterTabs(4,'userShare')">发表分享
						</li>
						<li @click="userCenterTabs(5,'collect')">收藏的场地
						</li>
					</ul>
				</div>
			</div>
			<div class="right">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import userHead from "../userHead/userHead.vue";
	export default {
		data() {
			return {};
		},
		components: {
			userHead
		},
		computed: {},
		// 初始化
		created: function() {
			this.userCenterTabs(0, "");
		},
		methods: {
			userCenterTabs(index, value) {
				this.$router.push({
					path: `/userCenter/${value}`
				});
				let lis = document
					.getElementById("userCenterTabs")
					.getElementsByTagName("li");
				for (let li of lis) {
					li.style.borderLeftColor = "transparent";
				}
				lis[index].style.borderLeftColor = "#2F85FC";
			}
		}
	};
</script>

<style lang='scss' scoped>
	.userCenter_bac {
		background: #f6f8f9; // height: 100;
		padding: 40px 0 60px 0;
		.center {
			overflow: hidden;
		}
		.left {
			.center_tabs {
				border-radius: 4px;
				border: 1px solid #eee;
				background: #ffffff;
				margin-top: 20px;
				li {
					cursor: pointer;
					padding-left: 40px;
					border-top: 1px solid #eee; // a {
					display: block;
					height: 50px;
					line-height: 50px;
					font-size: 16px;
					color: #313131; // }
					border-left: 3px solid transparent;
				}
				li:first-child {
					border-top: transparent;
					border-left: 3px solid #2f85fc;
				}
			}
		}
		.right {
			// background: #ffffff;
			width: 920px; // height: 1200px;
		}
	}
</style>