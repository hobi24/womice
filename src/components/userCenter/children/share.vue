<!--  -->
<template>
  <div class="share_bac">
    <div class="tabs">
      <ul id="letter-tab">
        <li @click="chooseNow(0)">全部分享
        </li>
        <!-- <li @click="chooseNow(1)">审核中
        </li>
        <li @click="chooseNow(2)">已通过
        </li>
        <li @click="chooseNow(3)">未通过
        </li> -->
      </ul>
      <div class="but share_but" @click="toSave">发表分享</div>
    </div>

    <!-- 内容列表项 -->
    <div class="content">
      <ul>
        <li v-for="lis of list" >

          <!-- 左侧图片 -->
          <div class="left img">
            <img :src="lis.titleImg" alt="">
          </div>

          <!-- 右侧描述 -->
          <div class="left text">
            <p class="name">{{lis.title}}</p>
            <div class="activity" @click="toDetail(lis.id)">
              {{lis.txt}}
            </div>
            <!-- <p class="address">「宝安区」宝安大道6529号</p> -->
          </div>
          <!-- 删除按钮 -->
          <div class="right delete" title="移除此分享">
            <img src="../../../assets/imges/delete.png" alt="" @click="close(lis.id)">
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
      allItem: 1,
      list: []
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.chooseNow(0);
    this.getShareList();
  },
  methods: {
    chooseNow(index) {
      let lis = document
        .getElementById("letter-tab")
        .getElementsByTagName("li");
      for (let li of lis) {
        li.className = "";
      }
      lis[index].className = "choose";
    },

    /**@augments
     * 去发表分享
     */
    toSave() {
      this.$router.push({ name: "saveShare" });
    },

    /**@augments
     * 跳转到详情
     */
    toDetail(id) {
      localStorage.setItem('messageId',id);
      this.$router.push({
        name: "contentDetail",
        // params: { detail,title}
      });
    },

    /**@augments
     * 获取分享列表
     */
    getShareList() {
      let d = {
        appId: 1,
        sessionKey: localStorage.sessionKey,
        first: 0, //查询开始下标  非必选  默认0
        count: this.allItem * 1 //查询数量  非必选  默认10
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/mycontents.jspx", { params: d })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.list = res.data.data;
            console.log(this.list);
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.serveErr();
        });
    },

    /**@augments
     * 删除此分享
     */
    close(id) {
      let d = {
        appId: 1,
        sessionKey: localStorage.sessionKey,
        ids:id,//分享的id
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/del.jspx", { params: d })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.getShareList();//删除成功后重新获取列表
          } else {
            alert(res.data.message);
          }
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
      this.getShareList();
    }
  }
};
</script>

<style lang='scss' scoped>
.share_bac {
  // padding-bottom: 30px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee;

  .more {
    height: 40px;
    color: #999;
    text-align: center;
    margin-top: 10px;
    i {
      cursor: pointer;
    }
  }
  .tabs {
    overflow: hidden;
    border-bottom: 1px solid #eeeeee;
    ul {
      float: left;
      width: 600px;
      padding: 0 30px;
      overflow: hidden;
      li {
        cursor: pointer;
        float: left;
        margin-right: 50px;
        display: block;
        height: 65px;
        line-height: 65px;
        font-size: 18px;
        color: #919191;
        text-align: center;
        border-bottom: 2px solid transparent;
      }
      .choose {
        color: #313131;
        border-bottom-color: #1e1e1e;
      }
    }
    .share_but {
      float: right;
      width: 120px;
      height: 40px;
      margin-top: 13px;
      margin-right: 50px;
      line-height: 42px;
      color: #ffffff;
    }
  }

  .content {
    padding: 0 30px;
    ul {
      li {
        // cursor: pointer;
        padding: 20px 0 20px 10px;
        overflow: hidden;
        border-bottom: 1px solid #eee;

        .img {
          //div1    左侧图片
          margin-right: 20px;
          width: 150px;
          height: 100px;
          img {
            width: 150px;
            height: 100px;
          }
        }

        .text {
          width: 600px;
          height: 100px;
          overflow: hidden;
          .name {
            font-size: 18px;
            color: #2f85fc;
          }
          .activity {
            overflow: hidden;
            font-size: 16px;
            margin: 15px 0 20px 0;
            p {
              float: left;
              width: 120px;
              i {
                font-size: 18px;
                color: #fe7272;
              }
            }
          }
          .address {
            font-size: 14px;
            color: #919191;
          }
        }

        .delete {
          cursor: pointer;
          line-height: 100px;
          padding-right: 20px;
        }
      }
    }
  }
}
</style>