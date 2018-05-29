<!-- 登录 -->
<template>
  <div class="bac">
    <div class="center">
      <div class="left_text left">
        <p class="p1">为什么你需要WOMICE？</p>
        <p class="p2">WOMICE免费协助你寻找和预定最佳的活动场地<br>我们把场地集合在此，使你可以快速、简单寻找 适合你需要的场地。</p>
        <!-- <p class="p3">我们把场地集合在此，使你可以快速、简单寻找 适合你需要的场地。</p> -->
      </div>

      <div class="right_login right">
        <p class="til">账号登录</p>

        <div class="user">
          <p>账号</p>
          <div><input type="text" placeholder="手机号码" v-model="name"></div>
          <!-- <div><input type="text" placeholder="邮箱/手机/用户名" v-model="name"></div> -->
        </div>

        <div class="user">
          <p>密码</p>
          <div><input type="password" placeholder="密码" v-model="password"></div>
        </div>

        <div class="remember" @click="choose()">
          <div>
            <p v-if="active"></p>
          </div>
          <p class="left">记住密码</p>
        </div>

        <button class="but" @click="verify()">登 录</button>

        <ul class="forget">
          <li class="left">
            <router-link to="/forgetPassword">忘记密码</router-link>
          </li>
          <li class="right">还没有账号?
            <router-link to="/register">马上注册</router-link>
          </li>
        </ul>

        <div class="three">
          <div class="division">
            <p class="line"></p>
            <p class="other">第三方登录</p>
            <p class="line"></p>
          </div>

          <ul class="icon">
            <!-- <li><img src="../../assets/imges/weibo.png" alt=""></li> -->
            <li><img src="../../assets/imges/wechat.png" alt=""></li>
            <li><img src="../../assets/imges/qq.png" alt=""></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,

      name: "",
      password: ""
    };
  },
  components: {},
  computed: {},
  mounted: {},
  methods: {
    // 记住密码函数
    choose() {
      this.active = !this.active;
    },

    verify() {
      if (!this.name) {
        alert("输入的账号不能为空");
      } else if (!this.password) {
        alert("输入密码不能为空");
      } else {
        this.goLogin();
      }
    },

    goLogin() {
      let loginData = {
        mobile: this.name,
        password: this.password,
        appId: 1
      };
      console.log(loginData);
      console.log(this.urlIp + "/api/user/login.jspx");
      this.$http
        .post(this.urlIp + "/api/user/login.jspx", this.qs.stringify(loginData))
        .then(res => {
          console.log(res.data);

          if (res.data.code == 200) {
            window.location.reload(); //重新加载页面

            let data = res.data.data;
            let userData = JSON.stringify(data);
            localStorage.setItem("userData", userData); //用户数据

            localStorage.setItem("isLogin", true); //用于判断用户登录
            localStorage.setItem("realname", data.realName); //用户名
            localStorage.setItem("phone", data.mobile); //用户电话号码
            localStorage.setItem("sessionKey", data.sessionKey); //储存登录session

            // this.$router.go(-1);
            this.$router.push({ path: "/" });
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
          console.log(err);
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.bac {
  overflow: hidden;
  background: url("../../assets/imges/lbac.png") no-repeat;
  background-size: 100% 100%;
}
.left_text {
  width: 640px;
  padding-top: 204px;
  .p1 {
    padding-bottom: 64px;
    font-size: 50px;
    font-family: MicrosoftYaHei-Bold;
    color: rgba(49, 49, 49, 1);
    line-height: 48px;
  }
  .p2 {
    font-size: 30px;
    font-family: MicrosoftYaHei;
    color: rgba(97, 97, 97, 1);
    line-height: 42px;
  }
}
// 登录框
.right_login {
  margin: 70px 0;
  padding: 0 40px;
  padding-bottom: 30px;
  width: 340px;
  // height: 600px;
  background: #fff;
  color: #313131;
  border-radius: 4px;
  .til {
    text-align: center;
    font-size: 30px;
    font-family: MicrosoftYaHei;
    padding: 28px 0 41px 0;
  }
  .user {
    p {
      font-size: 16px;
      color: #000000;
      font-family: PingFang-SC-Bold;
    }
    div {
      padding: 5px 0 15px 0;
      input {
        // font-size: 110%;
        font-size: 16px;
        padding-left: 15px;
        width: 325px;
        height: 40px;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #e1e1e1;
      }
    }
  }
  // 记住密码
  .remember {
    cursor: pointer;
    overflow: hidden;
    div {
      margin-top: 4px;
      margin-right: 8px;
      float: left;
      width: 7px;
      height: 7px;
      padding: 2px;
      border: 1px solid #e1e1e1;
      background: #f5f5f5;
      border-radius: 2px;
      p {
        background: #2f85fc;
        width: 7px;
        height: 7px;
        border-radius: 2px;
      }
    }
  }
  .but {
    width: 340px;
    margin: 15px 0;
    font-size: 16px;
  }
  .forget {
    overflow: hidden;
    cursor: pointer;
    .right a {
      color: #2f85fc;
    }
    .left a {
      color: #999;
    }
  }
  // 第三方登录
  .three {
    .division {
      margin-top: 40px;
      margin-bottom: 23px;
      overflow: hidden;
      p {
        float: left;
      }
      .line {
        margin-top: 12px;
        height: 1px;
        width: 100px;
        background: #e1e1e1;
      }
      .other {
        font-size: 16px;
        padding: 0 30px;
        font-family: MicrosoftYaHei;
        color: rgba(75, 187, 250, 1);
      }
    }
    .icon {
      padding-left: 100px;
      // width: 200px;
      // margin: 0 auto;
      overflow: hidden;

      li:nth-child(2) {
        padding: 0 40px;
      }
      li {
        cursor: pointer;
        float: left;
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
}
</style>