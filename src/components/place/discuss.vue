<!--  -->
<template>
  <div>
    <!-- 全部评论 -->
    <div class="box2">
      <p class="til">全部评论（22）</p>
      <div class="content">
        <div class="content_top">

          <textarea v-model="discussText" name="" id="" cols="30" rows="10" placeholder="请输入你要评论的内容" style="width:740px;font-size:16px;background:#f5f5f5;"></textarea>
          <button @click="sareDiscuss" class="but right" style="height:34px;line-height:34px;width:90px;margin:20px 0;">提交</button>
        </div>
        <div class="clear"></div>
        <ul>
          <li class="lis" v-for="lis of list">
            <p class="userTil">
              <i style="font-weight:600">{{lis.commentUser}}</i>
              <i style="font-size:12px;">{{lis.createTime}}</i>
            </p>
            <div class="text" style="margin-top:10px;font-size:14px">{{lis.text}}</div>
          </li>
          <!-- <li class="lis">
            <p class="userTil">
              <i style="font-weight:600">科比2424KOBE</i>
              <i style="font-size:12px;">2018-02-26</i>
            </p>
            <div class="text" style="margin-top:10px;font-size:14px">评论内容测试评论内容测试评论评论评论</div>
          </li> -->
        </ul>
      </div>
      <div class="page" style="margin-left:-50px;">
        <class-page @childMethod="getDiscussList"></class-page>
      </div>

    </div>

  </div>
</template>

<script>
import classPage from "../classPage/classPage";
export default {
  data() {
    return {
      discussText: "",
      list: [],
      firstPage: 0
    };
  },

  props: ["typeId"],

  components: {
    classPage
  },

  computed: {},

  mounted() {
    this.getDiscussList();
  },

  methods: {
    /**
     *发表评论
     */
    sareDiscuss() {
      if (!this.discussText) {
        alert("请输入评论内容！");
        return;
      }
      let d = {
        contentId: this.typeId,
        appId: 1,
        sessionKey: localStorage.sessionKey,
        text: this.discussText
      };
      console.log(d);

      this.$http
        .post(
          this.urlIp + "/api/comment/publishComment.jspx",
          this.qs.stringify(d)
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            alert("评论成功");
            this.discussText = "";
            this.getDiscussList(); //评论成功后重新查询评论
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.serveErr();
        });
    },

    /**
     *获取评论列表
     */
    getDiscussList(index = 1) {
      this.firstPage = index - 1;
      let d = {
        contentId: this.typeId,
        appId: 1,
        first: this.firstPage * 10,
        count: 10
      };
      console.log(d);

      this.$http
        // .post(this.urlIp + "/api/comment/list.jspx", this.qs.stringify(d))
        .get(this.urlIp + "/api/comment/list.jspx", { params: d })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.list = res.data.data;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.serveErr();
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.box2 {
  width: 800px;
  margin-top: 40px;
  padding-bottom: 20px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  .til {
    padding: 10px 20px;
    font-size: 18px;
    color: #313131;
    font-weight: 600;
    border-bottom: 1px solid #e5e5e5;
  }
  .content {
    padding: 20px;
  }
  .content_top {
    padding-bottom: 0;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
  }

  .lis {
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>