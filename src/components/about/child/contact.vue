<!--  -->
<template>
	<div>
		<div>
			<div class="text">
				<p class="name">深圳沃麦斯文化传媒有限公司</p>
				<div class="contact">
					<p> 地址：广东省深圳市福田区福田街道金田路3037号金中环国际商务大厦A1226</p>
					<p>(1226, Golden Central Towel, No.3037#, Jintian Rd, Futian District, Shenzhen, P.R.C)</p>
					<p style="padding-top:20px;">电话：0755-23890088</p>
					<p>传真：0755-23890089</p>
					<p>邮编：518000</p>

          <p class="til" style="padding-top:30px;">合作咨询：</p>
          <p>0755-23890088 邮箱：luojiayan@womice.com 罗先生</p>
          <p class="til">微信合作：</p>
          <p>0755-23890088 邮箱：panguifen@womice.com 潘小姐</p>
          <p class="til">微博合作：</p>
          <p>0755-23890088 邮箱：panguifen@womice.com 潘小姐</p>
          <p class="til">投稿咨询：</p>
          <p>0755-23890088 邮箱：luojiayan@womice.com 罗先生</p>
          <p class="til">招聘咨询：</p>
          <p>0755-23890088 邮箱：panguifen@womice.com 潘小姐</p>
				</div>
			</div>
			<bmap :m="mapData"></bmap>

		</div>
	</div>
</template>

<script>
import bmap from "../../../components/map/map";
export default {
  data() {
    return {
      mapData: {
        w: 500,
        h: 300,
        x: 114.069041,
        y: 22.539796
      }
    };
  },
  components: {
    bmap
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.text {
  padding-bottom: 30px;
  .name {
    color: #2f85fc;
    font-size: 30px;
    padding-bottom: 20px;
  }
  .contact {
    color: #313131;
    font-size: 16px;

    p {
      margin-bottom: 5px;
    }

    .til {
      font-weight: 600;
      margin-top: 15px;
    }
  }
}
</style>