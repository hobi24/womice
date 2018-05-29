<!-- 站内信 -->
<template>
	<div class="bac">
		<div class="center">
			<div class="left">
				<user-head></user-head>
				<div class="knows" id="knows">
					<p id="u1" @click="knowTabs(0,'letter')">通知</p>
					<p id="u2" @click="knowTabs(1,'discuss')">评论</p>
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
		
		created: function() {
			this.knowTabs(0,'letter');
		},
		methods: {

			knowTabs(index,value) {
				
				this.$router.push({
					path:`/userLetter/${value}`
				})
				let lis = document.getElementById('knows').getElementsByTagName('p');
				for (let li of lis) {
					li.style.borderLeftColor = "transparent";
				}
				lis[index].style.borderLeftColor = "#2F85FC";
			},
			// 点击通知
			letter() {
				this.$router.push({
					path: '/userLetter/letter'
				});
				document.getElementById('u1').style.borderLeftColor = "#2F85FC";
				document.getElementById('u2').style.borderLeftColor = "transparent";
			},
			// 点击评论
			discuss() {
				this.$router.push({
					path: '/userLetter/discuss'
				});
				document.getElementById('u1').style.borderLeftColor = "transparent";
				document.getElementById('u2').style.borderLeftColor = "#2F85FC";
			}
		}
	};
</script>

<style lang='scss' scoped>
	.bac {
		background: #f6f8f9; 
		padding: 40px 0 60px 0;
		.center {
			overflow: hidden;
		}
		.left {
			.knows {
				border-radius: 4px;
				border: 1px solid #eee;
				background: #ffffff;
				margin-top: 20px;
				p {
					cursor: pointer;
					padding-left: 40px;
					height: 50px;
					line-height: 50px;
					font-size: 16px;
					color: #313131;
					font-family: MicrosoftYaHei;
				}
				#u1 {
					border-bottom: 1px solid #eee;
					border-left: 3px solid #2F85FC;
				}
				#u2 {
					border-bottom: 1px solid #eee;
					border-left: 3px solid transparent;
				}
			}
		}
		.right {
			width: 920px; 
		}
	}
</style>