<!--  -->
<template>
  <div>
    <div class="hlepForm">
      <ul>
        <li>
          <p class="textStyle">地区</p>
          <select v-model="city">
            <option :value='list.value' v-for="list of cityList">{{list.value}}</option>
          </select>
        </li>

        <li>
          <p class="textStyle">日期</p>
          <input type="date" name="" id="" v-model="placeDate">
        </li>
        <li>
          <p class="textStyle">活动时长</p>
          <select v-model="time">
            <option value="上午">上午</option>
            <option value="下午">下午</option>
            <option value="晚上">晚上</option>
            <option value="一天">一天</option>
            <option value="两天">两天</option>
            <option value="三天">三天</option>
            <option value="三天以上">三天以上</option>
          </select>
        </li>
        <li>
          <p class="textStyle">活动类型</p>
          <select v-model="activeType">
            <option :value="list.value" v-for="list of activeTypeList">{{list.value}}</option>
          </select>
        </li>
        <li>
          <p class="textStyle">人数</p>
          <select v-model="numPeople">
            <option :value="list.value" v-for="list of numPeopleList">{{list.value}}</option>
          </select>
        </li>
        <li>
          <p class="textStyle">预算</p>
          <select v-model="placeMoney">
            <option :value="list.value" v-for="list of placeMoneyList">{{list.value}}</option>
          </select>
        </li>
        <li class="otherService">
          <p class="textStyle">其他服务</p>
          <ul>
            <li v-for="list of serviceList" style="margin:0;">
              <label><input type="checkbox" name="service" id="" :value="list.value"> {{list.value}}</label>
            </li>
          </ul>
        </li>
        <li style="width:100%"></li>
        <li>
          <p class="textStyle">姓名</p>
          <input type="text" name="" id="" v-model="name">
        </li>
        <li>
          <p class="textStyle">电话</p>
          <input type="text" name="" id="" v-model="phone">
        </li>
        <li>
          <p class="textStyle">公司名称</p>
          <input type="text" name="" id="" v-model="companyName">
        </li>
        <li>
          <p class="textStyle">邮件地址</p>
          <input type="text" name="" id="" v-model="email">
        </li>
        <li>
          <p class="textStyle">特殊需求</p>
          <textarea name="" id="" cols="30" rows="10" v-model="otherNeed"></textarea>
        </li>
      </ul>

      <div class="submit_box">
        <div class="submit_but left" @click="goSubmit()">提交</div>
        <div class="submit_text">
          活动需求即时接收您提交的信息<br> 获取活动最好的报价
          <br> 100%免费报价查询服务
        </div>
      </div>
      <div class="getEmail">
        <!-- <label> -->
        <input type="checkbox" name="" id="">
        <i>订阅WOMICE资讯</i>（备注：可勾选）
        <!-- </label> -->
      </div>
    </div>

    <div class="text2 center">
      <p class="tilStyle">关注沃麦斯会展微信公众号方式：</p>
      <p class="textStyle">1、添加朋友-输入：沃麦斯会展-点击搜一搜 沃麦斯会展-搜索沃麦斯会展相关的公众号-选择沃麦斯会展-点击关注。</p>
      <p class="textStyle">2、直接扫描下方二维码，点击关注即可。</p>
    </div>

    <div class="towCode">
      <img src="../../assets/imges/towCode.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: this.getCityList("场地地区"), //场地地区选择列表
      activeTypeList: this.getCityList("活动类型"), //活动类型选择列表
      numPeopleList: this.getCityList("容纳人数"), //容纳人数选择列表
      placeMoneyList: this.getCityList("预算价格"), //预算价格选择列表
      serviceList: this.getCityList("服务类型"), //服务类型选择列表
      city: "", //地区
      placeDate: "", //日期
      time: "", //时长
      activeType: "", //活动类型
      numPeople: "", //容纳人数
      placeMoney: "", //预算
      service: this.getCheckValue("service"), //服务类型
      name: "", //公司联系人姓名
      phone: "", //电话号码
      companyName: "", //公司名字
      email: "", //电子邮件
      otherNeed: "" //其他要求
    };
  },

  components: {},

  computed: {},

  mounted() {
    // this.getCityList();
  },

  methods: {
    /**
     * 连接后台api获取选择列表的数据
     */
    getCityList(type) {
      this.placeChooseList(type)
        .then(res => {
          console.log(res.data);

          let value = res.data.data;
          if (res.data.code == 200) {
            if (type == "场地地区") {
              this.cityList = value;
            } else if (type == "活动类型") {
              this.activeTypeList = value;
            } else if (type == "容纳人数") {
              this.numPeopleList = value;
            } else if (type == "预算价格") {
              this.placeMoneyList = value;
            } else if (type == "服务类型") {
              this.serviceList = value;
            }
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
        });
    },

    /**
     * 获取选择框的值的公共方法
     */
    getCheckValue(name) {
      let obj = document.getElementsByName(name);
      let value = "";
      for (let li of obj) {
        if (li.checked) {
          value = value + li.value + "，";
        }
      }
      return value;
    },

    /** 
    验证输入数据
     */
    goSubmit() {
      if (
        !this.city ||
        !this.placeDate ||
        !this.time ||
        !this.activeType ||
        !this.numPeople ||
        !this.placeMoney||
        !this.name||
        !this.phone||
        !this.companyName||
        !this.email
      ) {
        alert('请输入完整的资料');
      }else {
        this.submit();
      }
    },

    /**
     * 提交数据
     */
    submit() {
      let ed = {
        title: "协助寻找场地",
        location: this.city,
        date: this.placeDate,
        eventDuration: this.time,
        eventType: this.activeType,
        peopleNumber: this.numPeople,
        budget: this.placeMoney,
        otherService: this.service,
        name: this.name,
        mobile: this.phone,
        corporation: this.companyName,
        email: this.email,
        other: this.otherNeed
      };
      let d = {
        channelId: 100,
        appId: 1,
        expandData: JSON.stringify(ed) //与后台约定传入的是字符串格式
        // sessionKey: localStorage.sessionKey,
      };
      console.log(d);

      this.$http
        .post(this.urlIp + "/api/content/save.jspx", this.qs.stringify(d))
        // .get(this.urlIp + "/api/content/save.jspx", { params: d })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            alert("提交成功，我们会尽快联系您！");
            this.$router.push({ path: "/" }); //回到首页
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
.center {
  width: 920px;
}
// 中间表单样式
.hlepForm {
  width: 750px;
  margin: 0 auto;
  padding: 60px 0;

  ul {
    overflow: hidden;
    li {
      float: left;
      margin-right: 30px;
      margin-bottom: 15px;
    }

    li.otherService {
      label {
        width: 150px;
        margin-right: 30px;
      }
    }
  }

  .textStyle {
    font-size: 16px;
  }

  //   提交盒子
  .submit_box {
    margin: 0 auto;
    margin-top: 50px;
    width: 490px;
    padding: 20px;
    background: #f3f3f3;
    border: 1px solid #dddddd;
    overflow: hidden;

    .submit_but {
      cursor: pointer;
      width: 270px;
      height: 70px;
      background: #40aa3f;
      color: #ffffff;
      font-size: 26px;
      text-align: center;
      line-height: 70px;
      margin-right: 20px;
    }

    .submit_text {
      font-size: 14px;
      color: #40aa3f;
      line-height: 24px;
    }
  }

  // 订阅邮件选择
  .getEmail {
    width: 250px;
    margin: 0 auto;
    margin-top: 10px;
    font-size: 14px;
    color: #313131;
    i {
      color: #2f85fc;
    }
  }
}

.towCode {
  margin: 0px auto 50px;
  width: 160px;
  height: 160px;
  box-shadow: 0 0 15px #cccccc;
  img {
    width: 160px;
    height: 160px;
  }
}
</style>