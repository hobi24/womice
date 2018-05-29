<!--  -->
<template>
  <div class="change_bac">
    <p class="change_til">修改密码</p>

    <div class="content">
      <div class="user">
        <p>原密码:</p>
        <div><input type="password" v-model="oldPassword" placeholder="请输入原密码"></div>
      </div>
      <div class="user">
        <p>新密码:</p>
        <div><input type="password" v-model="newPassword" placeholder="5-20 位英文、数字、符号，区分大小写"></div>
      </div>
      <div class="user">
        <p>确定密码:</p>
        <div><input type="password" v-model="newPassword2" placeholder="5-20 位英文、数字、符号，区分大小写"></div>
      </div>

      <div class="but" @click="verify()">确定修改</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      newPassword2: ""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    /**
     * 验证用户输入的信息
     */
    verify() {
      if (!this.oldPassword || !this.newPassword || !this.newPassword2) {
        alert("密码不能为空");
      } 
      else if (this.newPassword != this.newPassword2) {
        alert("您输入的两次密码不一致");
      } 
      else if (!this.utils.isPassword(this.newPassword) || !this.utils.isPassword(this.newPassword2)) {
        alert("请输入5-20位的密码");
      } 
      else {
        this.goChangePassword();
      }
    },

    /**
     * 修改密码提交
     */
    goChangePassword() {
      let changeData = {
        mobile: localStorage.phone,
        newPwd: this.newPassword,
        origPwd: this.oldPassword,
        appId: 1
      };
      console.log(changeData);

      this.$http
        .post(
          this.urlIp + "/api/user/changePassword.jspx",
          this.qs.stringify(changeData)
        )
        .then(res => {
          console.log(res.data);
          
          if (res.data.code == 200) {
            alert(res.data.message);
            this.$router.push({path:'/userCenter'});
          }else {
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
.change_bac {
  padding-bottom: 30px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee;
  height: 800px;

  .change_til {
    font-size: 18px;
    font-weight: 700;
    padding-left: 30px;
    height: 65px;
    color: #313131;
    line-height: 65px;
    border-bottom: 1px solid #eee;
  }

  .content {
    padding: 30px;
    .user {
      margin-bottom: 20px;
      overflow: hidden;
      p {
        height: 35px;
        line-height: 35px;
        float: left;
        width: 80px;
        font-size: 16px;
        color: #000000;
        font-family: PingFang-SC-Bold;
      }
      div {
        float: left;
        // padding: 10px 0 24px 0;
        input {
          font-size: 110%;
          font-size: 14px;
          // padding-left: 15px;
          width: 300px;
          height: 35px;
          background: #fff;
          border-radius: 4px;
          border: 1px solid #e1e1e1;
        }
      }
    }

    .but {
      width: 200px;
      margin-top: 40px;
      margin-left: 80px;
    }
  }
}
</style>