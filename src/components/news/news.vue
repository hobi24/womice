<!-- mice快讯 -->
<template>
  <div class="bac">
    <div class="center">
      <div class="newsLeft left">
        <div class="newstil">
          <p class="til left">WOMICE快讯</p>
          <p class="more right" @click="toMessage">查看全部</p>
        </div>
        <ul class="details">
          <li v-for="lis of messageList">
            <div class="img" @click="toDetail(lis.id)"><img :src="lis.titleImg" alt=""></div>
            <div class="time">{{lis.releaseDate}}</div>
            <div class="til">{{lis.title}}</div>
            <div class="text">{{lis.description}}</div>
            <div class="more">
              <p @click="toDetail(lis.id)">更多</p>
            </div>
          </li>
          <!-- <li>
            <div class="img"><img src="../../assets/imges/newsDetails.png" alt=""></div>
            <div class="time">2017-11-26</div>
            <div class="til">MICE“2017中国会议酒店+互联网高峰论坛”圆满落幕</div>
            <div class="text">今天（6月12日），由中国最大的会议场地预订平台——会MIC主办的“2017中国会议酒店+互联网高峰论坛”在北京圆满落幕。本次论坛齐聚酒店业顶级管理者和互联网 精英，共同探讨会议酒店如何全面 把握市场趋势，迎接会议酒店新兴 市场（Emerging market）崛起...</div>
            <div class="more">
              <p>更多</p>
            </div>
          </li> -->
        </ul>
      </div>
      <div class="newsRight left">
        <p class="til">
          获得WOMICE<br> 最新场地资讯
        </p>
        <div class="img">
          <!-- <img src="../../assets/imges/email.png" alt=""> -->
          <p class="t1">租场快讯每周更新</p>
        </div>

        <div class="search">
          <div class="textbox">
            <input type="text" name="" id="" placeholder="您的邮箱地址" style="font-size:125%">
            <button class="but but_search">获取</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageList: []
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.getMessageList();
  },
  methods: {
    /**
     * 获取资讯列表数据
     */
    getMessageList(type) {
      let d = {
        channelIds: 95, //资讯的查询id
        channel: type,
        recommend: true, //查询是否是推荐场地列表,true为推荐，‘’为全部
        first: 0, //查询开始下标  非必选  默认0
        count: 2 //查询数量  非必选  默认10
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/list.jspx", { params: d })
        .then(res => {
          this.messageList = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          this.serveErr();
        });
    },

    /**@augments
     * 查看全部
     */
    toMessage() {
      this.$router.push({ path: "/message" });
    },

     /**@augments
     * 跳转到详情
     */
    toDetail(id) {  
      localStorage.setItem('messageId',id);
      this.$router.push({
        name: "contentDetail",
        // params: { detail, title }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.bac {
  overflow: hidden;
  background: #2f85fc;
  padding: 60px 0;
  .newsLeft {
    // width: 600px;
    font-family: MicrosoftYaHei;
    color: #ffffff;
    // 顶部标题和更多按钮
    .newstil {
      overflow: hidden;
      width: 590px;
      padding-bottom: 30px;
      .til {
        font-size: 32px;
      }
      .more {
        cursor: pointer;
        font-size: 16px;
      }
    }
    // 快讯项
    .details {
      overflow: hidden;
      li {
        float: left;
        width: 285px;
        background: #ffffff;
        border-radius: 4px;
        margin-right: 20px;
        .img {
          height: 180px;
          width: 285px;

          img {
            width: 285px;
            height: 180px;
          }
        }
        .time {
          padding: 28px 20px 11px 20px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: rgba(145, 145, 145, 1);
        }
        .til {
          padding: 20px;
          padding-top: 0;
          font-size: 18px;
          font-weight: bold;
          font-family: MicrosoftYaHei-Bold;
          color: rgba(49, 49, 49, 1);
          line-height: 30px;
          border-bottom: 1px solid #e1e8ed;
        }
        .text {
          padding: 20px;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(145, 145, 145, 1);
          line-height: 24px;
        }
        .more {
          overflow: hidden;
          padding: 0 20px 20px 0;
          p {
            cursor: pointer;
            text-align: center;
            line-height: 30px;
            float: right;
            width: 50px;
            height: 30px;
            border-radius: 4px;
            border: 1px solid #2f85fc;
            color: #2f85fc;
          }
        }
      }
      li:last-child {
        margin-right: 40px;
      }
    }
  }
  .newsRight {
    margin-top: 70px;
    border-left: 1px solid #e1e8ed;
    padding-left: 40px;
    height: 610px;
    .til {
      padding-top: 60px;
      font-size: 32px;
      font-family: MicrosoftYaHei;
      color: #ffffff;
    }
    .img {
      background: url(../../assets/imges/email.png) no-repeat;
      font-family: MicrosoftYaHei;
      width: 462px;
      padding-top: 230px;
    }
    .t1 {
      height: 70px;
      padding-left: 100px;
      font-size: 20px;
      color: #ffffff;
    }

    .search {
      float: left;
      height: 40px;
      .textbox {
        background: #ffffff;
        line-height: 36px;
        height: 50px;
        margin: 0;
        // border: 2px solid #fff;
        border-radius: 4px;
        input {
          border: 0;
          padding-left: 20px;
          height: 45px;
          width: 300px;
          margin-top: -5px;
        }
        .but_search {
          font-size: 18px;
          border-radius: 0 4px 4px 0;
          height: 50px;
          width: 100px;
          background: #47bcff;
          color: #fff;
        }
      }
    }
  }
}
</style>