<!-- 首页 -->
<template>
  <div>
    <div class="banner">
      <search></search>

    </div>
    <div class="variety center">
      <p class="til">WOMICE
        <i style="color:#2f85fc">免费</i>助您寻找及预订合适的场地与服务</p>
      <ul id="variety">
        <li @mouseover="showChoose(0)" @mouseout="showChoose(-1)">
          <img src="../../assets/imges/b1.png" alt="">
          <p class="text">生日派对</p>
          <div class="choose"></div>
        </li>
        <li @mouseover="showChoose(1)" @mouseout="showChoose(-1)">
          <img src="../../assets/imges/b2.png" alt="">
          <p class="text">电影院</p>
          <div class="choose"></div>
        </li>
        <li @mouseover="showChoose(2)" @mouseout="showChoose(-1)">
          <img src="../../assets/imges/b3.png" alt="">
          <p class="text">宴会轰趴</p>
          <div class="choose"></div>
        </li>
        <li @mouseover="showChoose(3)" @mouseout="showChoose(-1)">
          <img src="../../assets/imges/b4.png" alt="">
          <p class="text">婚宴</p>
          <div class="choose"></div>
        </li>
        <li @mouseover="showChoose(4)" @mouseout="showChoose(-1)">
          <img src="../../assets/imges/b5.png" alt="">
          <p class="text">会议讲座</p>
          <div class="choose"></div>
        </li>
        <li @mouseover="showChoose(5)" @mouseout="showChoose(-1)">
          <img src="../../assets/imges/b6.png" alt="">
          <p class="text">Party主题</p>
          <div class="choose"></div>
        </li>
      </ul>

      <!-- 文字介绍轮播 -->
      <div class="presentation" @mouseover="stopNext" @mouseout="keepNext">
        <p class="marks left" style="margin-left:90px"><img src="../../assets/imges/quoteLeft.png" alt=""></p>

        <!-- 文字轮播窗口 -->
        <div class="showWindow">
          <ul id="textBanner" :style="{left:lisLeft + 'px'}">
            <li class="text">
              <p>1我们经常通过WOMICE得到fdh度假会给你有潜力的客户查询。WOMICE提供令人非常满意的客 户服务，是一个非常用户友好的网站。
              </p>
              <p class="second">-Brian Parfitt，公司董事，Castelo Concepts</p>
            </li>
            <li class="text">
              <p>2我们经常通过WOMICE得到有过节费过潜力的客户查询。WOMICE提供令人非常满意的客 户服务，是一个非常用户友好的网站。
              </p>
              <p class="second">-Brian Parfitt，公司董事，Castelo Concepts</p>
            </li>
            <li class="text">
              <p>3我们经常通过WOMICE得到有潜力的客户查询。WOMICE提供令收到货的说法人非常满意的客 户服务，是一个非常用户友好的网站。
              </p>
              <p class="second">-Brian Parfitt，公司丰东股份的董事，Castelo Concepts</p>
            </li>
            <li class="text">
              <p>4我们经常通过WOMICE得到有潜力的客户查询。WOMICE提供令收到货的说法人非常满意的客 户服务，是一个非常用户友好的网站。
              </p>
              <p class="second">-Bria沃麦斯牛逼epts</p>
            </li>
          </ul>
        </div>

        <p class="marks right" style="margin-right:90px;margin-bottom:20px;"><img src="../../assets/imges/quoteRight.png" alt=""></p>
      </div>
      <div class="tabs">
        <ul id="onBut" @mouseover="stopNext" @mouseout="keepNext">
          <li @click="onBut(0)"></li>
          <li @click="onBut(1)"></li>
          <li @click="onBut(2)"></li>
          <li @click="onBut(3)"></li>
        </ul>
      </div>
    </div>

    <div class="mice">
      <div class="center">
        <ul>
          <li>
            <div class="bac">
              <p class="text">M</p>
            </div>
            <p class="t1">M for Meetings</p>
            <p class="t2">集思广益，一切皆有可能！</p>
          </li>
          <li>
            <div class="bac">
              <p class="text">I</p>
            </div>
            <p class="t1">I for Incentives</p>
            <p class="t2">挖掘企业发展的动力源泉！</p>
          </li>
          <li>
            <div class="bac">
              <p class="text">C</p>
            </div>
            <p class="t1">C for Conferences</p>
            <p class="t2">请大胆的说出您的设想，其余的交给我们！</p>
          </li>
          <li>
            <div class="bac">
              <p class="text">E</p>
            </div>
            <p class="t1">E for Exhibitions</p>
            <p class="t2">我们将助您更好得展现企业风范！</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 推荐场地 -->
    <div class="recommend">
      <div class="center">
        <p class="til">推荐
          <i>场地</i>
        </p>
        <!-- 场地列表 -->
        <place-list :search='list'></place-list>

      </div>
    </div>

    <!-- 我们的优势 -->
    <div class="advantage">
      <div class="center">
        <p class="til">我们的优势</p>
        <p class="t">WOMICE 提供出色的服务和有效率的跟进，我们收到了一些非常好的查新商机。高度推崇！</p>
        <ul>
          <li>
            <p class="t1">专注且专业 - 他们和您一样，以您为本</p>
            <p class="t2">WOMICE的专业团队是一个有趣的群体，他们既可以专注的完成您的活动，也可以提出建议升华您的设想。我们的团队获得过很多荣誉，但是我们坚信与您的合作会是彼此的荣誉。</p>
          </li>
          <li>
            <p class="t1">共创圆满MICE - 只因你我，皆在此中</p>
            <p class="t2">我们相信WOMICE会为客户和服务商带来更多的合作机会和经济收益。同时帮助客户选择合适的服务商，尤其为跨区域举行活动的客户提供更便捷的服务和质量/品质保障。</p>
          </li>
          <li>
            <p class="t1">高效有力，免费助您节省时间</p>
            <p class="t2">搜索目的地的各种场地和服务是免费的，并且任何时间都能找到合适的！从网站直接点击你想查询的服务，利用查询列表同时查询多项服务，如果可以，请点击发布需求，其余的交给我们，助您节省更多的时间。</p>
          </li>
          <li>
            <p class="t1">保障/安全 - 以客为尊</p>
            <p class="t2">无论是客户还是服务商，WOMICE产品体验的每一部分旨在您的服务保障与资金安全。</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 我们的服务 -->
    <div class="service">
      <div class="center">
        <p class="til">我们的服务</p>
        <p class="t">在数字化时代，WOMICE致力于以数据为基础的洞察力，通过提供资源整合，创意的智慧化活动解决方案，对企业产生高价值的商业影响。</p>
        <ul>
          <li @click="toNews">
            <div class="til">目的地服务</div>
            <div class="details">
              <p class="img"><img src="../../assets/imges/homeService.png" alt=""></p>
              <!-- <p class="t1">MICE“2017中国会议酒店+互联网高峰论坛”圆满落幕</p> -->
              <p class="t2">理智的，有目的的会议/活动；<br> 开放的、免费的大中华区目的地服务平台；
              </p>
            </div>
            <div class="more">查看更多</div>
          </li>

          <li @click="toShare">
            <div class="til">MICE分享</div>
            <div class="details">
              <p class="img"><img src="../../assets/imges/homeService.png" alt=""></p>
              <!-- <p class="t1">MICE“2017中国会议酒店+互联网高峰论坛”圆满落幕</p> -->
              <p class="t2">MICE分享，发掘会议/活动于企业的最大力量； 帮助分享者搭建一个以知识为中心的平台； 协助MICE从业者一起输出高质量的知识，培养会议/活动行业的KOL，在这，您可以找到问题的答案。
              </p>
            </div>
            <div class="more">查看更多</div>
          </li>

          <li @click="toService">
            <div class="til">智慧MICE</div>
            <div class="details">
              <p class="img"><img src="../../assets/imges/homeService.png" alt=""></p>
              <!-- <p class="t1">MICE“2017中国会议酒店+互联网高峰论坛”圆满落幕</p> -->
              <p class="t2">一站式提供会议/活动数字化解决方案，通过会前、会中和会后全流程的会议活动管理服务，让会议/活动服务更智慧，更简单。</p>
            </div>
            <div class="more">查看更多</div>
          </li>

          <li @click="toNews">
            <div class="til">活动预告</div>
            <div class="details">
              <p class="img"><img src="../../assets/imges/homeService.png" alt=""></p>
              <!-- <p class="t1">MICE“2017中国会议酒店+互联网高峰论坛”圆满落幕</p> -->
              <p class="t2">中国会议/活动信息分析聚合平台，最新会议/活动信息及参与方式，适时分析国内产业变迁趋势，深度把握国内经济脉动。</p>
            </div>
            <div class="more">查看更多</div>
          </li>
        </ul>
      </div>
    </div>

    <news></news>

  </div>
</template>

<script>
import news from "../../components/news/news";
import placeList from "../place/placeList";
import search from "../../components/home/child/homeSearch";
export default {
  data() {
    return {
      list: [], //推荐场地数据
      messageList: [], //推荐资讯数据
      lisLeft:0,//文字轮播盒子的left值
    };
  },
  components: {
    news,
    search,
    placeList
  },
  computed: {},
  mounted() {
    this.getLists();

    this.timeNext();//定时器，用于文字轮播
  },

    // 退出当前页面的生命周期
  beforeDestroy: function() {
    this.stopNext();
  },

  methods: {
    showChoose(value) {
      // console.log(value);
      let lis = document.getElementById("variety").getElementsByTagName("li");
      if (value < 0) {
        //悬浮离开时
        for (let i = 0; i < lis.length; i++) {
          let choose = lis[i].getElementsByTagName("div")[0];
          choose.style.display = "none";
        }
      } else {
        let choose = lis[value].getElementsByTagName("div")[0];
        choose.style.display = "block";
      }
    },

    /**
     * 获取场地列表数据
     */
    getLists() {
      let d = {
        channelIds: 75, //场地的查询id
        first: 0, //查询开始下标  非必选  默认0
        count: 10, //查询数量  非必选  默认10
        recommend: true //查询是否是推荐场地列表,true为推荐，‘’为全部
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/list.jspx", { params: d })
        .then(res => {
          this.list = res.data.data;
          console.log("列表=================0" + res.data.data);
        })
        .catch(err => {
          this.serveErr();
        });
    },

    // 我们的服务跳转
    toNews() {
      this.$router.push({ path: "/message" });
    },

    toShare() {
      this.$router.push({ path: "/share" });
    },

    toService() {
      this.$router.push({ name: "service", params: { type: "智慧MICE" } });
    },
    // 我的服务结束


    // 文字轮播
    /**
     * 轮播图，每个文字盒子宽度是720px
     */
    // 轮播图上一页
    up() {
      this.lisLeft = this.lisLeft + 720;
      if (this.lisLeft > 0) {
        // this.lisLeft = -(this.bannerImgData.length - 1) * 800;
        this.lisLeft = -(4 - 1) * 720;
      }

      let i = this.lisLeft / -720;
      this.onBut(i);
    },

    // 轮播图下一页
    next() {
      this.lisLeft = this.lisLeft - 720;

      if (this.lisLeft <= -4 * 720) {
        this.lisLeft = 0;
      }

      let i = this.lisLeft / -720;
      this.onBut(i);
    },

    // 轮播图小白点
    onBut(index) {
      // let onButs = document.getElementById("onBut").getElementsByTagName("li");
      let onButs = document.getElementById("onBut").children;
      for (const li of onButs) {
        li.style.background = "#ddd";
      }
      onButs[index].style.background = "#2f85fc";

      this.lisLeft = -720 * index;
    },

    // 定时器自动播放
    timeNext() {
      this.setInt = setInterval(() => {
        this.next();
      }, 2500);
    },

    // 鼠标悬浮图片时清除自动播放
    stopNext() {
      clearInterval(this.setInt);
    },

    // 鼠标离开图片时继续自动播放
    keepNext() {
      clearInterval(this.setInt);
      this.timeNext();
    },
  }
};
</script>

<style lang='scss' scoped>
.banner {
  // width: 1600px;
  // margin: 0 auto;
  height: 568px;
  background: url("../../assets/imges/homeBanner.png") no-repeat;
  background-size: 100% 100%;
}
.variety {
  padding: 58px 0 40px 0;
  .til {
    text-align: center;
    font-size: 32px;
    font-family: MicrosoftYaHei;
    color: rgba(49, 49, 49, 1);
  }
  #variety {
    overflow: hidden;
    margin-top: 60px;
    li {
      cursor: pointer;
      float: left;
      text-align: center;
      width: 380px;
      height: 240px;
      margin-bottom: 30px;
      img {
        vertical-align: top;
        margin: 32px 0 19px 0;
      }
      .text {
        font-size: 28px;
        font-family: MicrosoftYaHei-Bold;
        color: rgba(255, 255, 255, 1);
      }
      // 悬浮蓝色蒙层
      div {
        display: none;
        position: relative;
        top: -218px;
        width: 380px;
        height: 240px;
        background-color: rgba(47, 133, 252, 0.3);
      }
    }
    li:nth-child(1) {
      background: url("../../assets/imges/var1.png") no-repeat;
    }
    li:nth-child(2) {
      background: url("../../assets/imges/var2.png") no-repeat;
      margin: 0 30px;
    }
    li:nth-child(3) {
      background: url("../../assets/imges/var3.png") no-repeat;
    }
    li:nth-child(4) {
      background: url("../../assets/imges/var4.png") no-repeat;
    }
    li:nth-child(5) {
      background: url("../../assets/imges/var5.png") no-repeat;
      margin: 0 30px;
    }
    li:nth-child(6) {
      background: url("../../assets/imges/var6.png") no-repeat;
      div {
        top: -222px;
      }
    }
  }
}

// 文字轮播
.presentation {
  overflow: hidden;
  padding: 40px 0 20px 0;

  // 文字轮播展示的盒子
  .showWindow {
    position: relative;
    overflow: hidden;
    float: left;
    width: 720px;
    height: 100px;
    left: 100px;
  }
  ul {
    position: absolute;
    left: 0;
    overflow: hidden;
    width: 10000px;
  }
  .text {
    float: left;
    width: 720px;
    height: 100px;
    font-size: 20px;
    text-align: center;
    font-family: MicrosoftYaHei;
    color: rgba(97, 97, 97, 1);
    .second {
      font-size: 15px;
      font-family: MicrosoftYaHei-Bold;
      color: rgba(49, 49, 49, 1);
      margin-top: 20px;
      font-weight: 700;
    }
  }
}
.tabs {
  ul {
    margin: 0 auto;
    overflow: hidden;
    width: 71px;
    li {
      cursor: pointer;
      float: left;
      width: 10px;
      height: 10px;
      margin-right: 10px;
      border-radius: 5px;
      background: #dddddd;
    }
    li:last-child {
      margin: 0;
    }
    li:first-of-type {
      background: #2f85fc;
    }
  }
}
.mice {
  background: #f6f8f9;
  ul {
    padding: 100px 0 120px 0;
    overflow: hidden;
    li {
      float: left;
      margin-left: 140px;
      .bac {
        width: 154px;
        height: 154px;
        border-radius: 50%;
        background: #ffffff;
        text-align: center;
        box-shadow: 0 8px 12px rgba(194, 194, 194, 0.3);
        .text {
          padding-top: 10px;
          font-weight: 700;
          font-size: 100px;
          font-family: MicrosoftYaHei-Bold;
          color: #2f85fc;
        }
      }
    }
    li:first-child {
      margin-left: 60px;
    }
    .t1 {
      font-size: 20px;
      font-family: MicrosoftYaHei;
      color: #2f85fc;
      text-align: center;
      width: 172px;
      margin: 30px 0 20px 0;
    }
    .t2 {
      text-align: center;
      width: 170px;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #616161;
    }
  }
}

// 推荐场地
.recommend {
  background: url(../../assets/imges/recommendBac.png) no-repeat;
  background-size: 100% 100%;
  padding-bottom: 70px;
  .til {
    padding: 60px 0 30px 0;
    font-size: 40px;
    font-family: MicrosoftYaHei;
    color: #ffffff;
    i {
      color: #2f85fc;
    }
  }

  // 场地列表
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
    // border: 1px solid #e1e8ed;
    border-radius: 4px;

    .img {
      cursor: pointer;
      height: 240px;
      width: 378px;
      img {
        vertical-align: top;
        height: 240px;
        width: 378px;
      }
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
          padding-bottom: 40px;
        }
        .t2 {
          font-size: 16px;
        }
      }
    }

    .img:hover .showUp {
      display: block;
    }

    .shop {
      overflow: hidden;
      padding: 20px;
      font-size: 18px;
      font-weight: 700;
      font-family: MicrosoftYaHei-Bold;
      color: #313131;
      height: 33px;

      i {
        cursor: pointer;
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
    //收藏
    .collect {
      cursor: pointer;
      color: #cccccc;
      margin-left: 20px;
    }
    //浏览人数
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

// 我们的服务
.service {
  background: #f6f8f9;
  padding: 60px 0 67px 0;
  .til {
    text-align: center;
    font-size: 32px;
    font-family: MicrosoftYaHei;
    color: #313131;
  }
  .t {
    padding: 30px 0 60px 0;
    text-align: center;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(113, 118, 130, 1);
  }

  ul {
    overflow: hidden;
    padding-bottom: 20px;
    li {
      cursor: pointer;
      margin-right: 20px;
      float: left;
      border-radius: 4px;
      background: #ffffff;
      box-shadow: 0 7px 20px rgba(70, 70, 70, 0.1);
      .til {
        width: 285px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px 4px 0 0;
        background: #2f85fc;
        color: #ffffff;
        font-size: 18px;
        font-family: MicrosoftYaHei;
      }
      .details {
        padding: 20px;
        width: 242px;
        .t1 {
          font-size: 18px;
          font-weight: 700;
          font-family: MicrosoftYaHei-Bold;
          color: rgba(49, 49, 49, 1);
          line-height: 30px;
        }
        .t2 {
          padding: 20px 0;
          height: 120px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(145, 145, 145, 1);
          line-height: 24px;
        }
      }
      .more {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #2f85fc;
        border-top: 1px solid #eef0f1;
      }
    }
    li:last-child {
      margin: 0;
    }
  }
}

// 我们的优势
.advantage {
  padding: 60px 0 67px 0;

  .til {
    text-align: center;
    font-size: 32px;
    font-family: MicrosoftYaHei;
    color: #313131;
  }
  .t {
    padding: 30px 0 60px 0;
    text-align: center;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(113, 118, 130, 1);
  }
  ul {
    overflow: hidden;
  }
  li {
    float: left;
    background: url(../../assets/imges/advantageBac.png) no-repeat;
    width: 285px;
    height: 325px;
    padding-right: 20px;
    .t1 {
      text-align: center;
      height: 70px;
      padding: 34px 0;
      font-size: 26px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
    }
    .t2 {
      padding: 0 20px;
      // text-align: center;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
    }
  }
  li:last-child {
    padding-right: 0;
  }
}
</style>