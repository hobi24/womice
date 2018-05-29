<!-- 注册 -->
<template>
  <div class="bac">

    <!-- 注册协议弹出窗口 -->
    <div class="protocal" id="protocal">
      <div class="pro_box">

        <p class="tilStyle">注册协议</p>
        <p class="shanchu" @click="closeProBox()">
          <i class="iconfont icon-shanchu"></i>
        </p>
        <p>
          <i class="blod">【审慎阅读】</i>您在申请注册流程中点击同意前，应当认真阅读以下协议。
          <i class="blod">请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</i>
        </p>
        <p style="font-weight:600">
          1、与您约定免除或限制责任的条款；
        </p>
        <p style="font-weight:600">
          2、与您约定法律适用和管辖的条款；
        </p>
        <p style="font-weight:600">
          3、其他以粗体下划线标识的重要条款
        </p>
        <p>如您对协议有任何疑问，可向平台客服咨询。</p>
        <p>
          <i class="blod">【特别提示】</i>当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与WOMICE发生争议的，适用《WOMICE网站服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。
          <i class="blod">阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</i>
        </p>

        <p class="book">
          <a href="http://www.baidu.com" target="_blank"> 《WOMICE网站使用条款》</a>
        </p>
        <p class="book">
          <a href="http://www.baidu.com" target="_blank"> 《WOMICE网站服务协议》</a>
        </p>
        <p class="book">
          <a href="http://www.baidu.com" target="_blank"> 《WOMICE法律声明及隐私权政策》</a>
        </p>

        <div class="but_box">
          <button class="but proBut" @click="agree">同意协议</button>
        </div>
      </div>
    </div>

    <div class="center">
      <div class="left_text left">
        <!-- <p class="p1"> 找场地，从未如此简单</p> -->
        <!-- <p class="p2"><img src="../../assets/imges/trem.png" alt=""> 社区外展场地、商圈外展场地、写字楼场地等一网打尽<br>
          <img src="../../assets/imges/trem.png" alt=""> 10万场地供你选择<br>
          <img src="../../assets/imges/trem.png" alt=""> 专业场地顾问，全场一对一服务！
        </p> -->
        <p class="p2">立即成为 WOMICE 俱乐部 ®会员并开始享受精彩礼遇。在中国超过数千家豪华酒店、特色场地及服务赚取和兑换积分，通过WOMICE平台预订服务，每次皆可尊享会员礼遇。加入免费，操作简单。 WOMICE俱乐部 ®：专为MICE而设
        </p>
        <p class="p2">
          此外，如果您是专业的会议筹划者或旅行代理，您可加入成为WOMICE俱乐部 ®会员以为您的代理预订赚取积分奖励—— 一个简单的WOMICE俱乐部 ®账号即可轻松解决一切。</p>

      </div>

      <div class="right_login right">
        <p class="til">账号注册</p>
        <div class="user_small">
          <p>姓氏</p>
          <div><input type="text" placeholder="请输入你的姓氏" v-model="familyName"></div>
        </div>
        <div class="user_small">
          <p>名字</p>
          <div><input type="text" placeholder="请输入你的名字" v-model="name"></div>
        </div>

        <div class="user_small">
          <p>省/市</p>
          <div>
            <select v-model="province">
              <option value="广东">广东</option>
              <option value="北京">北京</option>
              <option value="上海">上海</option>
              <option value="香港">香港</option>
              <option value="澳门">澳门</option>
              <option value="台湾">台湾</option>
              <option value="安徽">安徽</option>
              <option value="重庆">重庆</option>
              <option value="福建">福建</option>
              <option value="甘肃">甘肃</option>
              <option value="广西">广西</option>
              <option value="贵州">贵州</option>
              <option value="海南">海南</option>
              <option value="河北">河北</option>
              <option value="河南">河南</option>
              <option value="黑龙江">黑龙江</option>
              <option value="湖北">湖北</option>
              <option value="湖南">湖南</option>
              <option value="吉林">吉林</option>
              <option value="江苏">江苏</option>
              <option value="江西">江西</option>
              <option value="辽宁">辽宁</option>
              <option value="内蒙古">内蒙古</option>
              <option value="宁夏">宁夏</option>
              <option value="青海">青海</option>
              <option value="山东">山东</option>
              <option value="山西">山西</option>
              <option value="陕西">陕西</option>
              <option value="四川">四川</option>
              <option value="天津">天津</option>
              <option value="西藏">西藏</option>
              <option value="新疆">新疆</option>
              <option value="云南">云南</option>
              <option value="浙江">浙江</option>
            </select>
          </div>
        </div>

        <div class="user_small">
          <p>城市</p>
          <div><input type="text" placeholder="中文或英文字符" v-model="city"></div>
        </div>
        <div style="clear:both;"></div>
        <div class="user">
          <p>手机号</p>
          <div><input type="number" placeholder="请输入手机号码" v-model="phone"></div>
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
          <p>电子邮件</p>
          <div><input type="text" placeholder="填写电子邮件，接受最新优惠信息" v-model="email"></div>
        </div>
        <div class="user">
          <p>密码</p>
          <div><input type="password" placeholder="5-20 位英文、数字、符号，区分大小写" v-model="password"></div>
        </div>

        <div class="choose_agree">
          <label><input type="checkbox" name="" id="" value="isCompany" v-model="isCompany"> 个人企业</label>
        </div>
        <div class="choose_agree">
          <label><input type="checkbox" name="" id="" value="isActive" v-model="isActive"> 预定会议与活动</label>
        </div>
        <div class="choose_agree" style="padding-top:10px">
          <input type="checkbox" name="" id="" class="left" v-model="isAgree">
          <p class="left agree">阅读并同意
            <i class="agreement" @click="showProtocal">服务协议</i>
          </p>
        </div>

        <button class="but" :disabled='!isAgree' @click="verify">确定注册</button>
        <p class="toLogin">
          <router-link to="/login">立即登录</router-link>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import formatXml from "../../service/service.js";
export default {
  data() {
    return {
      familyName: "",
      name: "",
      province: "广东",
      city: "",
      phone: "",
      testCode: "",
      email: "",
      password: "",
      isCompany: false,
      isActive: false,
      isAgree: false,

      codeTime: 60, //重新获取验证码倒计时
      isGetPhoneCode: true //是否可以获取手机验证码
    };
  },
  components: {},
  computed: {},
  mounted() {
    // this.submitData();
  },
  methods: {
    getPhoneCode() {
      if (!this.utils.isName(this.familyName)) {
        alert("您的姓氏输入有误");
      } else if (!this.utils.isName(this.name)) {
        alert("您的名字输入有误");
      } else if (!this.utils.isName(this.city)) {
        alert("您的城市输入有误");
      } else if (!this.utils.isPhone(this.phone)) {
        alert("您的手机号码输入有误");
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
        timestamp: new Date().getTime(),
        type: 1 //1为注册，2为找回密码
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/message/sendsms.jspx", { params: d })
        .then(res => {
          console.log("验证码=================" + res.data.data);
          // 如果成功，则执行倒计时限制频繁请求
          if (res.data.code == 200) {
            this.codeTime = 10;
            this.isGetPhoneCode = false;
            this.reGetCode(); //倒计时
          }else {
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
      if (
        !this.familyName ||
        !this.name ||
        !this.city ||
        !this.phone ||
        // !this.email ||
        !this.password
      ) {
        alert("请把资料填写完整");
      } else if (!this.utils.isName(this.familyName)) {
        alert("您的姓氏输入有误");
      } else if (!this.utils.isName(this.name)) {
        alert("您的名字输入有误");
      } else if (!this.utils.isName(this.city)) {
        alert("您的城市输入有误");
      } else if (!this.utils.isPhone(this.phone)) {
        alert("您的手机号码输入有误");
      } else if (this.email && !this.utils.isEmail(this.email)) {
        alert("您的电子邮箱输入有误");
      } else if (!this.utils.isPassword(this.password)) {
        alert("请输入5-20位的密码");
      } else {
        this.submitData();
      }
    },

    /**
     * 注册
     */
    submitData() {
      let p = {
        realname: this.familyName + this.name,
        email: this.email,
        password: this.password,
        mobile: this.phone,
        province: this.province,
        city: this.city,
        code:this.testCode,
        appId: 1,
        isEnterprise: this.isCompany ? 1 : 0,
        isReserve: this.isActive ? 1 : 0
      };
      console.log(p);
      this.$http
        // .get("http://192.168.31.88:8080/api/content/list.jspx",{params:{channelIds:75}})
        // .get("http://192.168.31.88:8080/api/content/list.jspx",this.qs.stringify({channelIds:75}))
        .post(this.urlIp + "/api/user/register.jspx", this.qs.stringify(p))
        .then(res => {
          console.log(res.data);

          let data = res.data;
          if (data.code == 200) {
            this.goLogin();
            alert("注册成功");
            // this.$router.go(-1); //返回上一页
            this.$router.push({ path: "/" });
          } else {
            alert(data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
        });
    },

    /**
     * 登录接口
     */
    goLogin() {
      let loginData = {
        mobile: this.phone,
        password: this.password,
        appId: 1
      };

      this.$http
        .post(this.urlIp + "/api/user/login.jspx", this.qs.stringify(loginData))
        .then(res => {
          console.log(res.data);

          if (res.data.code == 200) {
            window.location.reload(); //重新加载页面

            let data = res.data.data;
            let userData = JSON.stringify(data);
            localStorage.setItem("userData", userData);

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
    },

    /**
     * 关闭协议盒子
     */
    closeProBox() {
      document.getElementById("protocal").style.display = "none";
    },

    /**@augments
     * 显示协议盒子
     */
    showProtocal() {
      document.getElementById("protocal").style.display = "block";
    },

    /**
     * 同意协议
     */
    agree() {
      this.isAgree = true;
      document.getElementById("protocal").style.display = "none";
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

// 注册协议弹窗
.protocal {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  color: #313131;

  .blod {
    font-weight: 600;
  }

  .proBut {
    margin-top: 20px;
    margin-left: 41%;
    width: 140px;
  }
  .shanchu {
    z-index: 10001;
    position: absolute;
    right: 2px;
    top: 2px;
    color: #999;
    cursor: pointer;
    i {
      font-size: 24px;
    }
  }

  p.shanchu:hover {
    color: #333333;
  }

  .pro_box {
    position: relative;
    padding: 30px;
    width: 800px;
    height: 500px;
    margin: auto auto;
    margin-top: 150px;
    background-color: #eee;
    border-radius: 6px;

    p {
      margin-bottom: 10px;
    }

    .book a {
      font-size: 20px;
      color: #ff0036;
    }
  }
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
    img {
      height: 24px;
      width: 24px;
    }
    text-indent: 2em;
    font-size: 26px;
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
  .user,
  .user_small {
    p {
      font-size: 16px;
      color: #000000;
      font-family: PingFang-SC-Bold;
    }
    div {
      margin: 10px 0 15px 0;
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
  .user_small {
    float: left;
    div input {
      width: 145px;
    }
    // 城市选择框
    select {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: #666666;
      padding-left: 15px;
      width: 160px;
      height: 40px;
      border-radius: 4px;
      border: 1px solid #e1e1e1;
    }
  }
  .user_small:nth-of-type(even) {
    float: right;
  }
  .but {
    font-size: 16px;
    width: 340px;
    margin: 25px 0;
  }
  .toLogin {
    text-align: center;
    a {
      cursor: pointer;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: rgba(145, 145, 145, 1);
    }
  }

  // 记住密码
  .choose_agree {
    float: left;
    width: 50%;
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
    .agree {
      margin-top: -4px;
      margin-left: 7px;
      font-size: 14px;
    }
    .agreement {
      color: #919191;
    }
  }
  .but {
    width: 340px;
    margin: 25px 0;
    font-size: 16px;
  }
  .forget {
    overflow: hidden;
    cursor: pointer;
    .right a {
      color: #2f85fc;
    }
  }
}
</style>