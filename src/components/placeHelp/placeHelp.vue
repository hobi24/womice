<!--  -->
<template>
	<div class="help_bac">
		<div class="banner_box">
			<div class="bannerStyle"></div>
		</div>
		<div class="text1 center">
			<p class="textStyle">【100%免费查询场地服务】想找到合适的活动场地？</p>
			<p class="textStyle">立即致电0755-23890088告诉我们您的活动信息或活动场地需求，我们很乐意为您提供专业协助！</p>
			<p class="textStyle">您也可以关注我们的微信公众号联络我们！立即把您的活动场地需求（如有特定场地查询请连同场地名称或者活动服务 需求）发送到微信公众号“沃麦斯会展“（只限微信），我们的团队将很快回复并为您提供建议。
			</p>
		</div>

		<help-form></help-form>
		
	<news></news>
	</div>

</template>

<script>
import news from '../news/news'
import helpForm from './helpForm'
export default {
  data() {
    return {};
  },

  components: {
	  news,
		helpForm
  },

  computed: {},

  mounted: function() {},

  methods: {}
};
</script>

<style lang='scss' scoped>
.help_bac {
	background: #f6f8f9;
//   padding-bottom: 50px;
}

// banner图
.banner_box {
  height: 220px;
  .bannerStyle {
    background: url(../../assets/imges/helpBanner.png) no-repeat;
    height: 220px;
    overflow: hidden;
  }
}

.text1 {
  padding-top: 40px;
}

</style>