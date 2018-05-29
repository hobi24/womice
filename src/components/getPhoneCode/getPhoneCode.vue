<!--  -->
<template>
	<div>
		<div class="user">
			<p>验证码</p>
			<div class="code">
				<input type="text" placeholder="请输入手机验证码" class="testCode" v-model="testCode">
				<span class="line"></span>
				<span class="getCode" @click="getPhoneCode" v-if="isGetPhoneCode">获取验证码</span>
				<span class="getCode" style="color:#999;padding-left:10px;" v-if="!isGetPhoneCode">{{codeTime}}秒后重新获取</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
	   getPhoneCode() {
      if (!this.familyName || !this.name) {
        alert("请填写姓名");
      } else if (!this.city) {
        alert("请填写城市");
      } else if (!this.phone) {
        alert("请输入手机号码");
      } else if (this.phone.length != 11) {
        alert("请输入11位手机号码");
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
  }
};
</script>

<style lang='scss' scoped>
.user {
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
</style>