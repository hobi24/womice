<!--  -->
<template>
  <div class="letter_bac">
    <div class="tabs">
      <ul id="letter-tab">
        <li @click="chooseNow(0)">全部通知 </li>
        <!-- <li @click="chooseNow(1)">公告 </li>
        <li @click="chooseNow(2)">系统 </li>
        <li @click="chooseNow(3)">投诉反馈 </li> -->
      </ul>
    </div>
    <div class="content">
      <ul>
        <li v-for="list of messageList">
          <div class="left content_left">
            <p class="img"><img src="../../../assets/imges/footQQ.png" alt=""></p>
          </div>
          <div class="left content_right">
            <p class="til">
              <span class="type">{{list.msgTitle}}</span>
              <span class="time">{{list.sendTime}}</span>
            </p>
            <p class="text">
              {{list.msgContent}}
            </p>
          </div>
        </li>

        <li>
          <div class="left content_left">
            <p class="img"><img src="../../../assets/imges/footQQ.png" alt=""></p>
          </div>
          <div class="left content_right">
            <p class="til">
              <span class="type">公告</span>
              <span class="time">12/05 13:07</span>
            </p>
            <p class="text">
              “咚咚咚”，请领取总奖30万元赛事豪华大礼包~ 年底我们决定玩票大的！ 这里有：超强评委阵容，让你的才华不被埋没！ 多位设计大神，为你助燃灵感的小火苗~ 更有10万头奖、30万总奖等你来赢！ 赶快报名小米MIX2全面屏海报创意设计大赛吧！ 详情猛戳：
            </p>
          </div>
        </li>
      </ul>

      <div class="more">
        <i @click="more">加载更多</i>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageList: [],

      allItem: 1
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.chooseNow(0);
    this.getMessageList();
  },
  methods: {
    /**
    选择不同类型样式
     */
    chooseNow(index) {
      let lis = document
        .getElementById("letter-tab")
        .getElementsByTagName("li");
      for (let li of lis) {
        li.className = "";
      }
      lis[index].className = "choose";
    },

    /**
    获取通知列表
     */
    getMessageList() {
      let messageData = {
        appId: 1,
        sessionKey: localStorage.sessionKey,
        first: 0, //查询开始下标  非必选  默认0
        count: this.allItem * 1 //查询数量  非必选  默认10
      };

      console.log(messageData);
      this.$http
        .get(this.urlIp + `/api/message/list.jspx`, { params: messageData })
        .then(res => {
          this.messageList = res.data.data;
          console.log(res.data);
          console.log(this.messageList);
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
      this.getMessageList();
    }
  }
};
</script>

<style lang='scss' scoped>
.letter_bac {
  // padding-bottom: 30px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee;
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
// 导航栏
.tabs {
  ul {
    padding: 0 30px;
    overflow: hidden;
    border-bottom: 1px solid #eeeeee;
    li {
      cursor: pointer;
      float: left;
      margin-right: 50px;
      display: block;
      height: 65px;
      line-height: 65px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #919191;
      text-align: center;
      border-bottom: 2px solid transparent;
    }
    .choose {
      color: #313131;
      border-bottom-color: #1e1e1e;
    }
  }
}
// 内容
.content {
  padding: 0 30px;
  li {
    padding: 20px 0 30px 0;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    .content_left {
      margin-right: 20px;
      .img {
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
    .content_right {
      font-family: MicrosoftYaHei;
      .til {
        .tpye {
          color: #616161;
          font-size: 14px;
        }
        .time {
          margin-left: 10px;
          color: #919191;
          font-size: 12px;
        }
      }
      .text {
        margin-top: 20px;
        width: 500px;
        color: #616161;
      }
    }
  }
}
</style>