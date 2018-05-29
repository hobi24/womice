<!-- 资讯 -->
<template>
  <div class="bac_message">

    <!-- 轮播图 -->
    <div class="banner center">
      <div class="banner_box left" @mouseover="stopNext()" @mouseout="keepNext()">
        <!-- <ul id="lis" v-bind:style="{left : lisLeft+'px',transition: leftTime + 's'}"> -->
        <ul id="lis" v-bind:style="{left : lisLeft+'px'}">
          <li v-for="list of messageList"><img :src="list.titleImg" @click="toDetail(list.id)" alt="" /></li>
          <!-- <li><img src="../../assets/imges/var3.png" alt=""></li>
          <li><img src="../../assets/imges/var6.png" alt=""></li>
          <li><img src="../../assets/imges/var2.png" alt=""></li>
          <li><img src="../../assets/imges/messageBanner.png" alt=""></li> -->
        </ul>

        <!-- <ul id="onBut" :style="{marginLeft: (messageList.length * -11) + 'px'}"> -->
        <ul id="onBut">
          <li v-for="(list,index) of messageList" @click="onBut(index)"></li>
          <!-- <li @click="onBut(1)"></li>
          <li @click="onBut(2)"></li>
          <li @click="onBut(3)"></li> -->
        </ul>

        <p class="lef" @click="up()"><img src="../../assets/imges/lef.png" alt=""></p>
        <p class="rig" @click="next()"><img src="../../assets/imges/rig.png" alt=""></p>
      </div>
      <!-- ==================轮播图======================= -->

      <div class="rig_message right">
        <p class="m1"><img src="../../assets/imges/message1.png" alt=""></p>
        <p class="m2"><img src="../../assets/imges/message1.png" alt=""></p>
      </div>
    </div>

    <!-- 新闻资讯 -->
    <div class="message_list center">
      <!-- ========tabs选项卡 -->
      <div class="list_tabs">
        <ul id="listTabs">
          <li @click="mesTabs(0,97)">MICE新闻</li>
          <li @click="mesTabs(1,98)">行业资讯</li>
          <li @click="mesTabs(2,99)">活动事件</li>
        </ul>
      </div>
      <!-- ========tabs -->

      <!-- 内容 -->
      <div class="list_content">
        <ul>
          <!-- 列表项 -->
          <li v-for="lis of list" @click="toDetail(lis.id)">
            <!-- 左侧图片 -->
            <div class="left img">
              <img :src="lis.titleImg" alt="">
            </div>
            <!-- 右侧描述 -->
            <div class="left text">
              <p class="name">{{lis.title}}</p>
              <div class="activity">
                {{lis.description}}
              </div>
              <div class="address">
                <p class="time">
                  <img src="../../assets/imges/mesTime.png" alt="" style="width:13px;"> {{lis.releaseDate}}
                </p>
                <p class="num">
                  <!-- <img src="../../assets/imges/mesNum.png" alt=""> 122 -->
                </p>
                <p class="type">
                  <!-- <img src="../../assets/imges/mesType.png" alt=""> 场地标签 -->
                </p>
              </div>
            </div>
          </li>
          <!-- ====================列表项 -->

          <!-- <li>
            <div class="left img">
              <img src="../../assets/imges/var6.png" alt="">
            </div>
            <div class="left text">
              <p class="name">快到年底了，年会策划怎么做，你做对了吗？</p>
              <div class="activity">
                对于想要进行各类活动的企业来说，最苦恼的不是dshgafdshfd地方有回复国际化股份几号放假回复法国队没有活动方案，活动 人员，活动对象而是缺少适合的活动场地，有时候万事俱备可这场地的 东风却迟迟不能确定，让很多活动就这样陷入了停顿的状态...
              </div>
              <div class="address">
                <p class="time">
                  <img src="../../assets/imges/mesTime.png" alt="" style="width:13px;"> 2017-11-23
                </p>
                <p class="num">
                </p>
                <p class="type">
                </p>
              </div>
            </div>
          </li> -->

        </ul>

        <div class="more">
          <i @click="more">加载更多</i>
        </div>
      </div>

    </div>
    <!-- ================新闻资讯================ -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      lisLeft: 0,
      leftTime: 1,
      setInt: "",
      list: [],
      type: 97, //查询资讯的类型
      allItem: 1, //用于查看更多
      messageList: [], //推荐
      bannerImgData: [
        {
          imgUrl: "../../../src/assets/imges/messageBanner.png",
          id: 1
        },
        {
          imgUrl: "../../../src/assets/imges/var5.png",
          id: 2
        },
        {
          imgUrl: "../../../src/assets/imges/var6.png",
          id: 3
        },
        {
          imgUrl: "../../../src/assets/imges/var5.png",
          id: 2
        },
        {
          imgUrl: "../../../src/assets/imges/var6.png",
          id: 3
        },
        {
          imgUrl: "../../../src/assets/imges/var2.png",
          id: 4
        }
      ]
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted: function() {
    this.getMessageList();
    // this.mesTabs(0, 97);
    // this.onBut(0);
    // this.timeNext();

    // this.getLists('MICE新闻');
  },

  // 退出当前页面的生命周期
  beforeDestroy: function() {
    this.stopNext();
  },

  methods: {
    /**
     * 获取资讯列表数据
     */
    getMessageList() {
      console.log("123321");
      let d = {
        channelIds: 95, //资讯的查询id
        channel: "新闻资讯",
        recommend: true, //查询是否是推荐场地列表,true为推荐，‘’为全部
        first: 0, //查询开始下标  非必选  默认0
        count: 5 //查询数量  非必选  默认10
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/list.jspx", { params: d })
        .then(res => {
          this.messageList = res.data.data;
          console.log(res.data.data);

          this.mesTabs(0, 97);
          // this.onBut(0);
          // this.timeNext();
        })
        .catch(err => {
          this.serveErr();
        });
    },
    /**
     * 轮播图，每个图片宽度是800px
     */
    // 轮播图上一页
    up() {
      this.lisLeft = this.lisLeft + 800;
      if (this.lisLeft > 0) {
        // this.lisLeft = -2400;
        this.lisLeft = -(this.messageList.length - 1) * 800;
      }

      let i = this.lisLeft / -800;
      this.onBut(i);
    },

    // 轮播图下一页
    next() {
      this.lisLeft = this.lisLeft - 800;

      if (this.lisLeft <= -this.messageList.length * 800) {
        this.lisLeft = 0;
      }

      let i = this.lisLeft / -800;
      this.onBut(i);
    },

    // 轮播图小白点
    onBut(index) {
      // let onButs = document.getElementById("onBut").getElementsByTagName("li");
      let onButs = document.getElementById("onBut").children;
      for (const li of onButs) {
        li.style.background = "transparent";
      }
      onButs[index].style.background = "#fff";

      this.lisLeft = -800 * index;
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

    // 列表tabs选择
    mesTabs(index, type) {
      this.type = type;
      this.allItem = 1;
      console.log(this.type);
      this.getLists();
      let lis = document.getElementById("listTabs").children;
      for (const li of lis) {
        li.style.borderColor = "transparent";
      }
      lis[index].style.borderColor = "#2f85fc";
    },

    /**
     * 获取资讯列表数据
     */
    getLists() {
      let d = {
        channelIds: this.type, //资讯的查询id,95是全部资讯
        // channel: type
        first: 0, //查询开始下标  非必选  默认0
        count: this.allItem * 1 //查询数量  非必选  默认10
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/list.jspx", { params: d })
        .then(res => {
          this.list = res.data.data;
           this.onBut(0);
          this.timeNext();
          console.log(res.data.data);
        })
        .catch(err => {
          this.serveErr();
        });
    },

    /**@augments
     * 加载更多
     */
    more() {
      this.allItem = this.allItem + 1;
      this.getLists();
    },

    /**@augments
     * 跳转到详情
     */
    toDetail(id) {
      localStorage.setItem("messageId", id);
      this.$router.push({
        name: "contentDetail"
        // params: { detail, title }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.bac_message {
  background: #f6f8f9;
  padding-bottom: 60px;
}

.banner {
  overflow: hidden;
}

.more {
  height: 40px;
  color: #999;
  text-align: center;
  margin-top: 10px;
  i {
    cursor: pointer;
  }
}

.rig_message {
  margin: 50px 0;

  .m1 {
    margin-bottom: 16px;
  }
}

// 轮播图
.banner_box {
  position: relative;
  overflow: hidden;
  height: 424px;
  width: 800px;
  margin: 50px 0;

  // 左右翻页按钮
  .rig,
  .lef {
    cursor: pointer;
    width: 40px;
    // height: 40px;
    // line-height: 40px;
    padding: 10px 0 7px;
    border-radius: 4px;
    text-align: center;
    position: absolute;
    right: 20px;
    top: 48%;
    background: rgba($color: #000000, $alpha: 0.5);
    img {
      width: 24px;
      height: 24px;
    }
  }

  .lef {
    right: 0;
    left: 20px;
  }

  ul#lis {
    height: 424px;
    width: 600%;
    position: absolute;
    // left: 0;
    transition-property: left;

    li {
      float: left;
      width: 800px;
      height: 424px;
      img {
        width: 800px;
        height: 424px;
      }
    }
  }

  // 轮播图下面的小白圈
  ul#onBut {
    position: absolute;
    top: 400px;
    left: 50%;
    // margin-left: -80px;
    // width: 100px;

    li {
      cursor: pointer;
      float: left;
      width: 10px;
      height: 10px;
      margin-right: 15px;
      border: 1px solid #ffffff;
      border-radius: 6px;
    }

    li:last-child {
      margin-right: 0;
    }
  }
}
// ==================轮播图===================

.message_list {
  .list_tabs {
    width: 760px;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    background: #ffffff;
    ul {
      overflow: hidden;
      li {
        cursor: pointer;
        float: left;
        font-size: 18px;
        color: #313131;
        margin-right: 60px;
        padding-bottom: 10px;
        border-bottom: 3px solid transparent;
      }
    }
  }

  .list_content {
    width: 760px;
    padding: 0 20px;
    // padding-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    background: #ffffff;

    ul {
      li {
        padding: 20px 0;
        overflow: hidden;
        border-bottom: 1px solid #eee;

        //左侧图片
        .img {
          margin-right: 20px;
          width: 220px;
          height: 150px;
          img {
            width: 220px;
            height: 150px;
          }
        }

        // 右侧内容
        .text {
          // 标题
          .name {
            font-size: 22px;
            font-weight: 600;
            font-family: MicrosoftYaHei-Bold;
            color: #313131;
          }
          .activity {
            width: 500px;
            height: 63px;
            overflow: hidden;
            font-size: 16px;
            margin: 15px 0 20px 0;
            color: #616161;
          }
          .address {
            font-size: 14px;
            color: #919191;
            p {
              float: left;
              margin-right: 30px;
            }
          }
        }
      }
    }
  }
}
</style>