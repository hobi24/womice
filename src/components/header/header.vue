<!-- 网页头部组件 -->
<template>
  <div class="bigBox1">
    <div class="content">
      <div class="top_box1 ">
        <p class="center" v-if="login != 'true'">欢迎您，
          <router-link to="/login">
            <span class="login">请登录</span>
          </router-link>
          <router-link to="/register">
            <span class="register">免费注册</span>
          </router-link>
          <button class="but" @click="placeHelp()">需要协助申请场地</button>
        </p>
        <p class="center" v-if="login == 'true'">欢迎您，
          <i class="login" @click="userCenter()">{{name}}</i>
          <router-link to="/userLetter/letter">
            <span class="letter">
              <span class="img"><img src="../../assets/imges/letter.png" alt=""></span>
              <i>站内信</i>
              <i class="letter_num">({{letter}})</i>
            </span>
          </router-link>
          <i style="cursor: pointer;" @click="exit()">退出</i>
          <button class="but" @click="placeHelp()">需要协助申请场地</button>
        </p>
      </div>
      <div class="top_box2">
        <div class="center">
          <p class="img"><img src="../../assets/imges/logo.png" alt=""></p>
          <div class="search">
            <div class="textbox">
              <img src="../../assets/imges/search.png" alt="">
              <input type="text" name="" id="" placeholder="地区/类型" style="font-size:125%">
              <button class="but but_search">搜索</button>
            </div>
          </div>
          <div class="need left">
            <i>或</i>
            <button class="but but_need" @click="placeHelp()">发布需求</button>
          </div>
          <div class="telephone">
            <p class="num">0755-23890088</p>
            <p class="time">免费咨询热线:9:00-18:00</p>
          </div>
          <p class="line"></p>
          <!-- 线条-->
          <p class="phone"><img src="../../assets/imges/phone.png" alt=""></p>
        </div>
      </div>

      <div class="top_box3">

        <div class="center">
          <div class="tabs">
            <ul class="left" id="lis">
              <li @click="toNewPage('home',0)">
                <router-link to="/" style="color:rgba(47,133,252,1)">首页</router-link>
              </li>
              <li @click="toNewPage('about',1)">
                <router-link to="/about">关于WOMICE</router-link>
              </li>
              <li @click="toNewPage('place',2)">
                <router-link to="/place">MICE场地</router-link>
              </li>
              <li @click="toNewPage('service',3)">
                <router-link to="/service">MICE服务</router-link>
              </li>
              <!-- <li @click="toNewPage('share',4)" @mouseover="showShareBox()"> -->
              <li @click="toNewPage('share',4)">
                <!-- <router-link to="/share">MICE分享</router-link> -->

                <a class="share">MICE分享
                  <!-- 分享悬浮框 -->
                  <!-- <div class="shareBox" id="shareBox" @mouseout="closeShareBox()"> -->
                  <div class="shareBox" id="shareBox">
                    <p @click="toCase()">精品案例</p>
                    <p @click="toShare()">知识分享</p>
                  </div>
                </a>
              </li>
              <li @click="toNewPage('message',5)">
                <router-link to="/message">MICE资讯</router-link>
              </li>
              <li @click="toNewPage('member',6)">
                <router-link to="/member">会员礼遇</router-link>
              </li>
            </ul>
          </div>
          <div class="left list">
            <div class="qingdan">
              <p class="img left"><img src="../../assets/imges/qingdan.png" alt=""></p>
              <p class="left" @click="goShopping()">
                <i>询价清单</i>
                <button class="but">{{shopping}}</button>
              </p>
            </div>
            <p class="img left">
              <a class="hint_a"><img src="../../assets/imges/yiwen.png" alt="">
                <div class="hint">
                  提示：你可以利用「加入清单」按钮存储最多10个场地，然后一起把你的联络资料及活动细节提交。
                </div>
              </a>
            </p>
          </div>
          <router-link to="/join">
            <button class="but right but_in">申请驻入</button>
          </router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      login: false,
      name: "",
      letter: 0,
      shopping: 0
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.getUserData();
    window.addEventListener("storage", this.getUserData); //监听浏览器缓存变化
  },

  methods: {
    getUserData() {
      this.login = localStorage.getItem("isLogin");
      this.name = localStorage.getItem("realname");
      this.letter = localStorage.getItem("letter")
        ? localStorage.getItem("letter")
        : 0;
      this.shopping = localStorage.getItem("shopping")
        ? localStorage.getItem("shopping")
        : 0;
    },

    /**
     * 退出登录
     */
    exit() {
      if (confirm("确定要退出登录吗?")) {
        // this.login = false;
        localStorage.removeItem("isLogin");
        localStorage.removeItem("realname");
        localStorage.removeItem("letter");
        localStorage.removeItem("shopping");
        localStorage.removeItem("userData");
        // localStorage.clear();

        this.getUserData(); //重新获取浏览器缓存信息
      }
    },

    toNewPage(page, index) {
      // 设计点击tabs颜色更改 start
      let lis = document.getElementById("lis").getElementsByTagName("li");
      for (let i = 0; i < lis.length; i++) {
        let a = lis[i].getElementsByTagName("a")[0];
        a.style.color = "#000";
      }
      lis[index].getElementsByTagName("a")[0].style.color = "#2F85FC";
      // 设计点击tabs颜色更改 end
    },

    // 跳转个人中心
    userCenter() {
      this.$router.push({ path: "/userCenter" });
    },

    // 跳转询价清单
    goShopping() {
      this.$router.push({ path: "/shopping" });
    },

    // 跳转到精品案例
    toCase() {
      this.$router.push({ path: "/boutique" });
    },
    // 跳转到分享
    toShare() {
      this.$router.push({ path: "/share" });
    },

    // 跳转到协助申请场地
    placeHelp() {
      this.$router.push({ path: "/placeHelp" });
    },

    // 悬浮显示分享框
    showShareBox() {
      let box = document.getElementById("shareBox");
      box.style = "display:block";
    },

    // 关闭分享框
    closeShareBox() {
      document.getElementById("shareBox").style = "display:none";
    }
  }
};
</script>

<style lang='scss' scoped>
.bigBox1 {
  .content {
    .choose {
      color: rgba(47, 133, 252, 1);
    } // 登录注册
    .top_box1 {
      background: rgba(246, 248, 249, 1);
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      .login {
        color: rgba(47, 133, 252, 1);
        cursor: pointer;
      }
      .register {
        cursor: pointer;
      }
      button {
        float: right;
        font-size: 14px;
        width: 132px;
        height: 30px;
        line-height: 30px;
        margin-top: 5px;
      }
      .letter {
        cursor: pointer;
        border-right: 1px solid rgba(168, 168, 168, 1);
        border-left: 1px solid rgba(168, 168, 168, 1);
        padding: 0 10px;
        .letter_num {
          color: rgba(47, 133, 252, 1);
        }
      }
    }

    // 搜索，联系方式
    .top_box2 {
      height: 100px;
      .img {
        float: left;
        padding-top: 26px;
        img {
          width: 155px;
          height: 48px;
        }
      }
      .search {
        margin-left: 100px;
        margin-top: 30px;
        float: left; // width: 500px;
        height: 40px;
        .textbox {
          img {
            margin: 5px 3px 0 10px;
          }
          input {
            border: 0;
            height: 30px;
            width: 300px;
          }
          line-height: 36px;
          height: 36px; // width: 340px;
          margin: 0;
          border: 2px solid #2f85fc;
          border-radius: 4px;
          .but_search {
            border-radius: 0;
            height: 38px;
            line-height: 38px;
            width: 100px;
            background: rgba(47, 133, 252, 1);
            color: #fff;
          }
        }
      }
      .need {
        margin-top: 30px;
        height: 40px;
        i {
          margin: 0 13px;
        }
        .but_need {
          width: 96px;
        }
      }
      .phone {
        padding-top: 25px;
        padding-right: 10px;
        float: right;
        img {
          width: 50px;
          height: 52px;
        }
      }
      .line {
        float: right;
        margin-top: 30px;
        width: 1px;
        height: 38px;
        background: rgba(222, 222, 222, 1);
      }
      .telephone {
        float: right;
        padding-top: 28px;
        padding-left: 10px;
        font-family: PingFang-SC-Medium;
        .num {
          height: 20px;
          font-size: 24px;
          color: rgba(47, 133, 252, 1);
          line-height: 24px;
        }
        .time {
          margin: auto;
          padding-top: 13px;
          width: 180px;
          height: 15px;
          font-size: 15px;
          color: rgba(49, 49, 49, 1);
          line-height: 15px;
        }
      }
    }

    // 导航栏
    .top_box3 {
      // position: relative;
      height: 60px;
      line-height: 60px;
      border-top: 1px solid rgba(229, 229, 229, 1);
      border-bottom: 1px solid rgba(229, 229, 229, 1);

      a.share:hover .shareBox {
        display: block;
      }

      a.share {
        width: 90px;
        height: 60px;
        // position: relative;
        // z-index: 9999999; 

      }

      // 分享悬浮框
      .shareBox {
        z-index: 9999; 
        width: 100px;
        margin-left: -10px;
        display: none;
        position: absolute;
        // left: 0px;
        // top: 30px;
        float: left;
        background: #fff;
        width: 100px;
        border-radius: 3px;
        border: 1px solid #eeeeee;

        p {
          cursor: pointer;
          border-bottom: 1px solid #eeeeee;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #000000;
        }
      }

      .tabs {
        ul {
          width: 905px;
          overflow: hidden;
          border-right: 1px solid rgba(229, 229, 229, 1);
          li {
            float: left;
            margin-right: 50px;
            font-size: 18px;
            font-family: PingFang-SC-Medium;
            cursor: pointer; //设置router-link的样式
            a {
              display: block;
              height: 60px;
            }
          }
        }
      }
      .list {
        height: 60px;
        width: 160px;
        padding: 0 10px;
        border-right: 1px solid rgba(229, 229, 229, 1);
        .qingdan {
          cursor: pointer;
        }
        i {
          padding: 0 5px;
          font-size: 16px;
        }
        .img {
          padding-top: 3px;
        }
        button {
          padding: 0;
          margin-right: 15px;
          width: 24px;
          height: 20px;
          line-height: 20px;
        }
      }
      .but_in {
        width: 96px;
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        margin-top: 14px;
      }

      .hint {
        z-index: 99999;
        display: none;
        font-size: 14px;
        line-height: 20px;
        width: 260px;
        height: 100px;
        position: absolute;
        top:30px;
        left: -137px;
        background: url("../../assets/imges/bac_text.png") no-repeat;
        padding: 20px;
      }

      a.hint_a {
        position: relative;
      }

      a.hint_a:hover .hint {
        display: block;
      }
    }
  }
}
</style>