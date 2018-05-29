<!-- 申请驻入 -->
<template>
  <div class="join_bac">
    <div class="banner_box">
      <div class="bannerStyle"></div>
    </div>

    <div class="text">
      <ul>
        <li>
          <p class="blueTil">获得更多的预定查询</p>

          <p class="textStyle">我们的工作是为了给您带来更多的生意。</p>
          <p class="textStyle">WOMICE旨在为您提供优质的场地预订信息，并助您转介给寻找场地的用户。</p>
          <p class="textStyle">我们的网站流量每月不断增加中！</p>
          <p class="textStyle">我们从公众以至知名的大公司收到预订查询。这些预订的价值很多都超过人民币50,000元。</p>

          <div class="line"><img src="../../assets/imges/blueLine.png" alt=""></div>
        </li>

        <li>
          <p class="blueTil">双嬴、优惠价格（前期免费）</p>

          <p class="textStyle">免费的页面设置，其后的产品展现也是完全免费的服务。
          </p>
          <p class="textStyle">
            我们会以佣金形式在成功订场的个案中收取相应的服务费用。</p>
          <p class="textStyle">
            当然您也可选择免佣金的固定月费计划，欢迎联络我们索取详细的计划文档。</p>

          <div class="line"><img src="../../assets/imges/blueLine.png" alt=""></div>
        </li>

        <li>
          <p class="blueTil">增加曝光</p>

          <p class="textStyle">我们的社交媒体（官方微信、微博等），每月订阅信息和网站等将不断更新。</p>
          <p class="textStyle">
            我们会定期向寻找场地的用户宣传场地，为您的场地增加曝光率</p>

          <div class="line"><img src="../../assets/imges/blueLine.png" alt=""></div>
        </li>

        <li>
          <p class="blueTil">展示您完美的场地</p>

          <p class="textStyle">每一个加入的场地都拥有度身订造的独立页面。</p>
          <p class="textStyle">我们确保您的场地可以展示出最好的一面和突出的信息，以吸引更多预订。</p>

          <div class="line"><img src="../../assets/imges/blueLine.png" alt=""></div>
        </li>

        <li>
          <p class="blueTil">友好、快速的技术支持</p>

          <p class="textStyle">我们以大中华区市场为主，无论什么类型需求的客户我们都能提供优质、即时的服务。</p>

          <div class="line"><img src="../../assets/imges/blueLine.png" alt=""></div>
        </li>

        <li>
          <p class="blueTil">您准备好得到更多生意吗？</p>

          <p class="textStyle">只需在下方按钮进入登记表格，并填写您的公司产品数据，WOMICE的工作人员就会主动与您联络，尽快把您的产品信息展示在网站上。</p>
          <p class="textStyle">
            当一切都办妥，您只需要安躺在椅背看着电邮和接听电话，场地预订咨询会自动地推送进来。</p>

        </li>

      </ul>
    </div>

    <div class="towCode">
			<img src="../../assets/imges/towCode.png" alt="">
		</div>

    <div class="toJoin">
			<div class="but" @click="toJoin()">现在加入你的场地 ▶</div>
		</div>

    <news></news>
  </div>
</template>

<script>
import news from '../news/news'
export default {
  data() {
    return {};
  },

  components: {
    news
  },

  computed: {},

  mounted: {},

  methods: {
    toJoin() {
      this.$router.push({
        path:'/joinForm'
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.join_bac {
  background: #f6f8f9;
}
.textStyle {
  text-align: center;
  margin-bottom: 5px;
}
.blueTil {
  margin: 30px 0 20px;
}

.banner_box {
  height: 220px;
  .bannerStyle {
    height: 220px;
    background: url(../../assets/imges/joinBanner.png) no-repeat;
  }
}

.text {
  ul {
    padding-bottom: 50px;
    li {
      // 小蓝线
      .line {
        margin-top: 20px;
        text-align: center;
      }
    }
  }
}

.towCode {
	margin: 30px auto 80px;
	width: 160px;
  height: 160px;
	box-shadow: 0 0 15px #cccccc;
  img {
    width: 160px;
    height: 160px;
  }
}

.toJoin {
  margin-bottom: 120px;
  height: 15px;
  background: rgba($color: #2F85FC, $alpha: 0.2);
  .but {
    margin: 20px auto;
    width: 310px;
    height: 80px;
    font-size: 24px;
    line-height: 80px;

    position: relative;
    top: -35px;
  }
}
</style>