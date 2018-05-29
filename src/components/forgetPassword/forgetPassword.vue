<!-- 忘记密码 -->
<template>
  <div class="bac">
    <div class="center">
      <div class="left_text left">
        <p class="p1"> 登录您的帐户时出现问题？</p>
        <p class="p2">需要重置您的密码以便登录？请输入您的电子邮件地址或您的手机号码。如果此为有效账户，您填写的电子邮件地址或手机将收到一封包含您用户名和验证码的电子邮件或短信。如需人工帮助，请联系官方客服：0755-23890088。</p>
      </div>

      <div class="right_login right">
        <p class="til">找回密码</p>

        <div class="user">
          <p>手机号</p>
          <div><input type="number" placeholder="请输入有效的手机" v-model="phone"></div>
        </div>
        <div class="user">
          <p>验证码</p>
          <div class="code">
            <input type="text" placeholder="请输入手机验证码" class="testCode" v-model="testCode">
            <span class="line"></span>
            <span class="getCode" @click="getPhoneCode" v-if="isGetPhoneCode">获取验证码</span>
            <span class="getCode" style="color:#999;padding-left:10px;" v-if="!isGetPhoneCode">{{codeTime}}秒后重新获取</span>
          </div>
        </div>
        <div class="user">
          <p>新密码</p>
          <div><input type="password" placeholder="5-20 位英文、数字、符号，区分大小写" v-model="password1"></div>
        </div>
        <div class="user">
          <p>确定新密码</p>
          <div><input type="password" placeholder="5-20 位英文、数字、符号，区分大小写" v-model="password2"></div>
        </div>

        <button class="but" @click="verify">重设密码</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "", //电话号码
      testCode: "", //输入的验证码
      password1: "",
      password2: "",

      codeTime: 60, //重新获取验证码倒计时
      isGetPhoneCode: true //是否可以获取手机验证码
    };
  },
  components: {},
  computed: {},
  mounted: {},
  methods: {
    /**@augments
     * 验证码输入信息
     */
    getPhoneCode() {
      if (!this.utils.isPhone(this.phone)) {
        alert("请输入正确的手机号码");
      } else {
        this.phoneCode(); //获取手机验证码
      }
    },
    /**@augments
     * 获取手机验证码
     */
    phoneCode() {

      let d = {
        mobile: this.phone,
        // timestamp: new Date().getTime(),
        // type: 2 //1为注册，2为找回密码
      };
      console.log(d);

      this.$http
        // .get(this.urlIp + "/api/message/sendsms.jspx", { params: d })
        .get(this.urlIp + "/api/user/getValidateToken.jspx", { params: d })
        .then(res => {
          console.log("验证码=================" + res.data.data);
          // 如果成功，则执行倒计时限制频繁请求
          if (res.data.code == 200) {
            this.codeTime = 10;
            this.isGetPhoneCode = false;
            this.reGetCode(); //倒计时
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.serveErr();
        });
    },

    /**@augments
     * 重新获取倒计时
     */
    reGetCode() {
      let st = setInterval(() => {
        this.codeTime = this.codeTime - 1;
        console.log(this.codeTime);
        if (this.codeTime <= 0) {
          this.isGetPhoneCode = true;
          window.clearInterval(st); //关闭倒计时
        }
      }, 1000);
    },

    /**@augments
     * 验证输入的信息
     */
    verify() {
      if (!this.utils.isPhone(this.phone)) {
        alert("请输入正确的手机号码");
      } else if (!this.testCode) {
        alert("请输入手机验证码");
      } else if (!this.utils.isPassword(this.password1) || !this.utils.isPassword(this.password2)) {
        alert("请输入5-20位的密码");
      } else if (this.password1 != this.password2) {
        alert("您输入的两次密码不一致");
      } else {
        this.submitData();
      }
    },

    /**
     * 找回密码
     */
    submitData() {
      let p = {
        mobile: this.phone,
        token: 123456,
        origPwd: this.password1,
        newPwd:this.password2,
        appId: 1,
      };
      console.log(p);
      this.$http
        .post(this.urlIp + "/api/user/forgetPassword.jspx", this.qs.stringify(p))
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            alert('重设密码成功，请重新登录');
            this.$router.push('/login');
          } else {
            alert(data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
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
    font-size: 26px;
    text-indent: 2em;
    font-family: MicrosoftYaHei;
    color: rgba(97, 97, 97, 1);
    line-height: 42px;
  }
}
// 登录框
.right_login {
  margin: 70px 0;
  padding: 0 40px 30px;
  width: 340px;
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
      margin: 10px 0 24px 0;
      input {
        font-size: 14px;
        width: 325px;
        padding-left: 15px;
        height: 40px;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #e1e1e1;
      }
    }
  }
  // 获取验证码
  .code {
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    .testCode {
      width: 180px;
      border: none;
    }
    .getCode {
      border-left: 1px solid #e1e1e1;
      cursor: pointer;
      font-size: 16px;
      color: #2f85fc;
      padding-left: 28px;
    }
  }
  .but {
    font-size: 16px;
    width: 340px;
    margin: 25px 0;
  }

  .but {
    width: 340px;
    margin: 25px 0;
    font-size: 16px;
  }
}
</style>