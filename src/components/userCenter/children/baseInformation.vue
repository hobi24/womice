<!--  -->
<template>
  <div class="baseInformation_bac">
    <p class="baseInformation_til">基本信息</p>

    <div class="content">
      <div class="user">
        <p>电话号码:</p>
        <p>{{list.mobile}}</p>
      </div>
      <div class="user">
        <p>真实姓名:</p>
        <div><input type="text" v-model="list.realName"></div>
      </div>
      <div class="user">
        <p>所在城市:</p>
        <div><input type="text" v-model="list.city"></div>
      </div>
      <div class="user">
        <p>所在公司:</p>
        <div><input type="text" v-model="list.company"></div>
      </div>
      <div class="user">
        <p>邮箱:</p>
        <div><input type="text" v-model="list.email"></div>
      </div>
      <div class="user">
        <p>生日:</p>
        <div><input type="text" v-model="list.birthday"></div>
      </div>

      <div class="but" @click="changeUserData">保存</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getUserData();
  },

  methods: {
    /**
     * 获取用户信息
     */
    getUserData() {
      let phone = localStorage.getItem("phone");
      this.$http
        .get(this.urlIp + `/api/user/getUserInfo.jspx?appId=1&mobile=${phone}`)
        .then(res => {
          console.log(res.data.data);
          this.list = res.data.data;
        })
        .catch(err => {
          this.serveErr();
        });
    },

    /**
     * 修改用户信息
     */
    changeUserData() {
      let d = {
        mobile: localStorage.phone,
        appId:1,
        birthdayStr:this.list.birthday,
        city:this.list.city,

      };
      console.log(d);
      this.$http.post(this.urlIp + "/api/user/editInfo.jspx",this.qs.stringify(d))
      .then(
        res => {
          console.log(res.data);
          alert(res.data.message);
        }
      )
      .catch(
        err => {
          this.serveErr();
        }
      )
    }
  }
};
</script>

<style lang='scss' scoped>
.baseInformation_bac {
  padding-bottom: 30px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee;
  height: 800px;

  .baseInformation_til {
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
          padding-left: 10px;
          width: 300px;
          height: 35px;
          background: #fff;
          border-radius: 3px;
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