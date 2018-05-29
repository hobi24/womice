<!-- 分享 -->
<template>
  <div class="share_bac">
    <div class="banner">
      <div class="case_search">
        <input type="text" class="left" name="" id="" placeholder="搜案例、分享、服务">
        <p class="but right">搜索</p>
      </div>

    </div>

    <div class="text">
      <p class="p1">MICE分享，发掘MICE于企业的最大力量</p>
      <p class="p2">帮助分享者搭建一个以知识为中心的平台；协助MICE从业者一起输出高质量的知识，培养MICE行业的KOL，形成圈层文化并采用文字、图片、语音和视频等富媒体方式分享知识，实现知识的持续变现。
      </p>
    </div>

    <div class="lis center">
      <ul>
        <li v-for="lis of list" @click="toDetail(lis.id)">
          <div class="img"><img :src="lis.titleImg" alt=""></div>
          <p class="til">{{lis.title}}</p>
          <div class="lisText">{{lis.description}}</div>
        </li>
        <!-- <li>
          <div class="img"><img src="../../assets/imges/var5.png" alt=""></div>
          <p class="til">分享分享沃麦斯</p>

          <div class="lisText">美国名校硕士，高端留学顾问，美国名校硕士高端留学顾问，美国名校硕士，高端留学顾问美国名校硕士，高端留学顾问，更待何时的任何的双方各该机构.</div>
        </li> -->
      </ul>

      <class-page @childMethod="getLists"></class-page>
    </div>
  </div>
</template>

<script>
import classPage from "../classPage/classPage";
export default {
  data() {
    return {
      list: []
    };
  },

  components: { classPage },

  computed: {},

  mounted() {
    this.getLists();
  },

  methods: {
    /**
     * 获取知识分享列表数据
     */
    getLists(index = 1) {
      this.firstIndex = index - 1;
      let d = {
        channelIds: 103, //案例的查询id
        first: this.firstIndex * 12, //查询开始下标  非必选  默认0
        count: 12 //查询数量  非必选  默认10
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/list.jspx", { params: d })
        .then(res => {
          this.list = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          this.serveErr();
        });
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
.share_bac {
  .banner {
    // width: 1600px;
    // margin: auto;
    height: 460px;
    background: url(../../assets/imges/shareBanner.png) no-repeat;
    background-size: 100% 100%;

    // 搜索部分
    .case_search {
      position: absolute;
      left: 50%;
      margin-left: -260px;
      top: 635px;
      overflow: hidden;
      padding: 0 5px 0 30px;
      height: 50px;
      line-height: 50px;
      width: 485px;
      //   margin: 0 auto;
      background: #ffffff;
      border-radius: 25px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

      // 输入框
      input {
        border: 0;
        width: 300px;
        height: 50px;
        font-size: 16px;
      }
      input:placeholder {
        color: #919191;
      }
      // 搜索按钮
      .but {
        margin-top: 5px;
        width: 80px;
        border-radius: 20px;
      }
    }
  }
  .til {
    font-weight: 600;
    margin: 5px;
  }
  // 文字标题
  .text {
    width: 600px;
    margin: 0 auto;
    padding-top: 85px;
    .p1 {
      text-align: center;
      font-size: 32px;
      color: #313131;
    }

    .p2 {
      margin: 30px 0 60px 0;
      text-align: center;
      font-size: 16px;
      color: #717682;
    }
  }

  // 列表详情
  .lis {
    padding-bottom: 100px;
    ul {
      padding-bottom: 40px;
      overflow: hidden;
      li {
        float: left;
        width: 285px;
        margin-right: 20px;
        margin-bottom: 20px;
        .img {
          width: 285px;
          height: 180px;
        }

        img {
          width: 285px;
          height: 180px;
        }
        .lisText {
          height: 60px;
          overflow: hidden;
          font-size: 14px;
          color: #616161;
        }
      }

      li:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>