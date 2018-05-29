<!--  -->
<template>
  <div class="case_bac">
    <div class="banner">
      <div class="case_search">
        <input type="text" class="left" name="" id="" placeholder="搜案例、分享、服务">
        <p class="but right">搜索</p>
      </div>
    </div>

    <div class="text">
      <p class="p1">每一场活动都是有价值的</p>
      <p class="p2">活动为品牌提升价值，为每一场活动提供合适的选择即我们存在的意义，帮助客户用创造性的方式与受众互动，我们并非最好，但我们不会比别人差。</p>
    </div>

    <div class="lis center">
      <ul>
        <li v-for="lis of list" @click="toDetail(lis.id)">
          <div class="img"><img :src="lis.titleImg" alt=""></div>
          <p class="til">{{lis.title}}</p>
          <div class="lisText" v-html="lis.description"></div>
        </li>
        <!-- <li @click="toDetail">
          <div class="img"><img src="../../assets/imges/var2.png" alt=""></div>
          <p class="til">ceshi测试沃麦斯</p>
          <div class="lisText">美国名校硕士，高端留学顾问，美国名校硕士高端留学顾问，美国名校硕士，高端留学顾问美国名校硕士，高端留学顾问，...</div>
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
      list: [],
      detail: "",
      firstIndex: 0 //查询的起始
    };
  },

  components: { classPage },

  computed: {},

  mounted() {
    this.getLists();
  },

  methods: {
    /**
     * 获取案例列表数据
     */
    getLists(index = 1) {
      this.firstIndex = index - 1;
      let d = {
        channelIds: 102, //案例的查询id
        first: this.firstIndex * 12, //查询开始下标  非必选  默认0
        count: 12 //查询数量  非必选  默认10
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/list.jspx", { params: d })
        .then(res => {
          this.list = res.data.data;
          console.log(this.list);
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
        // params: { detail , title ,id}
      });
    },
  }
};
</script>

<style lang='scss' scoped>
.case_bac {
  .banner {
    height: 460px;
    background: url(../../assets/imges/caseBanner.png) no-repeat;
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
    width: 530px;
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
          border: 1px solid #eee;
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