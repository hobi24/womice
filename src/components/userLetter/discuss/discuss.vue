<!--  -->
<template>
  <div class="discuss_bac">
    <p class="discuss_til">全部评论</p>
    <div class="content">
      <ul>
        <li v-for="lis of discussList">
          <div class="left content_left">
            <p class="img"><img src="../../../assets/imges/weibo.png" alt=""></p>
          </div>
          <div class="left content_right">
            <div class="til">
              <p class="type">{{lis.commentUser}}</p>
              <p class="time">{{lis.createTime}}</p>
            </div>
            <p class="text">
              {{lis.text}}
            </p>
          </div>
        </li>
        <li>
          <div class="left content_left">
            <p class="img"><img src="../../../assets/imges/weibo.png" alt=""></p>
          </div>
          <div class="left content_right">
            <div class="til">
              <p class="type">库里</p>
              <p class="time">2017-06-30 23:12:33</p>
            </div>
            <p class="text">
              多位设计大神，为你助燃灵感的小火苗~ 更有10万头奖、30万总奖等你来赢！ 赶快报名小米MIX2全面屏海报创意设计大赛吧！ 详情猛戳：
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
      discussList: [],
      allItem: 1 //用于获取多少条评论
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.getDiscussList();
  },
  methods: {
    /**
    获取评论列表
     */
    getDiscussList() {
      let discussData = {
        appId: 1,
        sessionKey: localStorage.sessionKey,
        first: 0, //查询开始下标  非必选  默认0
        count: this.allItem * 1 //查询数量  非必选  默认10
      };

      console.log(discussData);
      this.$http
        .get(this.urlIp + `/api/comment/myList.jspx`, { params: discussData })
        .then(res => {
          this.discussList = res.data.data;
          console.log(res.data);
          console.log(this.discussList);
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
      this.getDiscussList();
    }
  }
};
</script>

<style lang='scss' scoped>
.discuss_bac {
  // padding-bottom: 10px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee;
  .discuss_til {
    padding-left: 30px;
    height: 65px;
    color: #313131;
    line-height: 65px;
    border-bottom: 1px solid #eee;
  }
} // 内容

.more {
  height: 40px;
  color: #999;
  text-align: center;
  margin-top: 10px;
  i {
    cursor: pointer;
  }
}
.content {
  padding: 0 30px;
  li {
    padding: 20px 0 15px 0;
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
          font-size: 16px;
          color: #313131;
        }
        .time {
          font-size: 14px;
          color: #c1c1c1;
        }
      }
      .text {
        margin-top: 15px;
        padding: 15px;
        width: 755px;
        background: #f5f5f5;
        color: #616161;
        border: 1px solid #f1f1f1;
      }
    }
  }
}
</style>