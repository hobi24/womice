<!--  -->
<template>
  <!-- 服务 -->
  <div class="recommend">
    <div class="center">
      <!-- 服务列表 -->
      <ul id="recommend">
        <!-- 列表项 -->
        <li class="lis" v-for="lis of service">
          <!-- 鼠标悬浮出现朦层 -->
          <div class="img" @click="goDetail(lis.id)"><img :src="lis.titleImg" alt="">
            <div class="showUp">
              <p class="t1">{{lis.title}}</p>
              <p class="t2" v-html="lis.description"></p>
            </div>
          </div>
          <!-- ==========蒙层================ -->

          <p class="shop">{{lis.title}}
          </p>
          <p class="join">
            <img src="../../assets/imges/gps.png" alt="" class="left">
            <span class="left">{{lis.service_city}}</span>
            <button class="but right">加入清单</button>
          </p>
          <p class="details">
            标签：
            <span>{{lis.service_type}}</span>
          </p>
          <p class="num right">共 {{lis.readNum}}次浏览</p>
        </li>
        <!-- =================列表项==================== -->

        <!-- 列表项 -->
        <!-- <li class="lis">
          <div class="img" @click="goDetail()"><img src="../../assets/imges/101.png" alt="">
            <div class="showUp">
              <p class="t1">中影UL城市影城（宝立方店）:</p>
              <p class="t2">● 深圳其中一个餐饮的首领 <br>● 概独特又有风格的3层1700平方尺现代化 <br>● 空间 <br>● 墙上的空间除了可以挂上相片和书， <br>● 也可以作投影只用</p>
            </div>
          </div>

          <p class="shop">深圳市沃麦斯
          </p>
          <p class="join">
            <img src="../../assets/imges/gps.png" alt="" class="left">
            <span class="left">深圳</span>
            <button class="but right">加入清单</button>
          </p>
          <p class="details">
            标签：
            <span>公告传媒、活动策划</span>
          </p>
          <p class="num right">共 2333次浏览</p>
        </li> -->
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {};
  },

  // 父组件传过来的数据，js中使用this.service
  props: ["service"],

  components: {},

  computed: {},

  mounted() {},

  methods: {
    /**
     * 点击进入场地详情
     */
    goDetail(id) {
      this.$router.push({ name: "serviceDetail", params: { id } });
      localStorage.setItem("contentId", id); //将id储存到缓存,场地和服务公用一个id
    }
  }
};
</script>

<style lang='scss' scoped>
// 服务列表
.recommend {
  background-size: 100% 100%;
  padding-bottom: 70px;

  // 服务列表
  ul {
    overflow: hidden;
  }
  .lis {
    margin: 0 30px 30px 0;
    float: left;
    width: 378px;
    background: #ffffff;
    padding-bottom: 20px;
    position: relative;
    border: 1px solid #e1e8ed;
    border-radius: 4px;

    // 悬浮朦层
    .showUp {
      border-radius: 4px;
      display: none;
      position: absolute;
      top: 0;
      padding: 20px;
      width: 338px;
      height: 200px;
      background: rgba(0, 0, 0, 0.7);
      font-size: 20px;
      font-family: MicrosoftYaHei-Bold;
      color: #ffffff;
      .t1 {
        height: 30px;
        overflow: hidden;
        padding-bottom: 40px;
      }
      .t2 {
        height: 130px;
        overflow: hidden;
        font-size: 16px;
      }
    }

    // 服务列表简介图
    .img {
      cursor: pointer;
      height: 240px;
      width: 378px;
      img {
        vertical-align: top;
        height: 240px;
        width: 378px;
      }
    }

    .img:hover .showUp {
      display: block;
    }

    .shop {
      padding: 20px;
      font-size: 18px;
      font-weight: 700;
      font-family: MicrosoftYaHei-Bold;
      color: #313131;
      i {
        font-weight: 700;
        color: #2f85fc;
      }
    }
    .join {
      overflow: hidden;
      padding: 20px;
      padding-top: 0;
      border-bottom: 1px solid #e1e8ed;

      span {
        margin-left: 6px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #2f85fc;
      }
      button {
        width: 100px;
        height: 34px;
        line-height: 34px;
      }
    }
    .details {
      padding: 20px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #313131;
      span {
        color: #2f85fc;
      }
    }
    .num {
      padding-right: 20px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #919191;
    }
  }
  .lis:nth-child(3n) {
    margin-right: 0;
  }
}
</style>