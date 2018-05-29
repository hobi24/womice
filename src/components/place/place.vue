<!-- 场地 -->
<template>
  <div class="place_bac">

    <div class="chooseBox">
      <!-- 选择列表 -->
      <div class="chooseList center c1" id="chooseList">

        <div class="city">
          <p class="til left">场地地区：</p>
          <ul id="city">
            <li @click="chooseCity(index,list.value)" v-for="(list,index) in cityList">{{list.value}}</li>
          </ul>
        </div>

        <div class="nearby">
          <p class="til left">地理位置：</p>
          <ul id="nearby">
            <li @click="chooseNear(index,list.value)" v-for="(list,index) in nearList">{{list.value}}</li>
          </ul>
        </div>

        <div class="type">
          <p class="til left">场地类型：</p>
          <ul id="type">
            <li @click="chooseType(index,list.value)" v-for="(list,index) of typeList">{{list.value}}</li>

          </ul>
        </div>

        <div class="use">
          <p class="til left">活动类型：</p>
          <ul id="use">
            <li @click="chooseUser(index,list.value)" v-for="(list,index) of useList">{{list.value}}</li>
          </ul>
        </div>

        <div class="people">
          <p class="til left">容纳人数：</p>
          <ul id="people">
            <li @click="choosePeople(index,list.value)" v-for="(list,index) of peopleList">{{list.value}}</li>

          </ul>
        </div>

        <div class="area">
          <p class="til left">场地面积：</p>
          <ul id="area">
            <li @click="chooseArea(index,list.value)" v-for="(list,index) of areaList">{{list.value}}</li>

          </ul>
        </div>

        <div class="money">
          <p class="til left">预算价格：</p>
          <ul id="money">
            <li @click="chooseMoney(index,list.value)" v-for="(list,index) of moneyList">{{list.value}}</li>
          </ul>
        </div>

        <div class="money">
          <p class="til left">客房参考价：</p>
          <ul id="money2">
            <li @click="chooseMoney2(index,list.value)" v-for="(list,index) of money2List">{{list.value}}</li>
          </ul>
        </div>

        <div class="facility">
          <p class="til left">场地设施：</p>
          <ul id="facility">
            <li @click="chooseFac(index,list.value)" v-for="(list,index) of facList">{{list.value}}</li>
          </ul>
        </div>

        <div class="eat">
          <p class="til left">餐饮要求：</p>
          <ul id="eat">
            <li @click="chooseEat(index,list.value)" v-for="(list,index) of eatList">{{list.value}}</li>
          </ul>
        </div>

      </div>

      <p class="listMore" @click="listTop()" v-if="moreList == 'top'">
        <span>展开</span> <img src="../../assets/imges/listDown.png" alt="" class="left">
      </p>

      <p class="listMore" @click="listBottom()" v-if="moreList == 'bottom'">
        <span>收起</span> <img src="../../assets/imges/listUp.png" alt="" class="left">
      </p>
    </div>

    <place-list ref="placeChild" :search='list'></place-list>
    <class-page :allPage='listPage' @childMethod="getLists" v-if="isClassPage" ></class-page>
    <news></news>
  </div>
</template>

<script>
import news from "../news/news";
import placeList from "./placeList";
import classPage from "../classPage/classPage";
export default {
  data() {
    return {
      moreList: "top", //判断拉动更多筛选框
      list: [], //场地列表信息
      listPage: 1, //场地有多少页
      isClassPage: false, //是否显示分页
      firstIndex:0,//查询的起始
      
      imgUrl: this.urlIp, //获取图片的ip
      cityList: this.getCityList("场地地区"),
      nearList: this.getCityList("地理位置"),
      typeList: this.getCityList("场地类型"),
      useList: this.getCityList("活动类型"),
      peopleList: this.getCityList("容纳人数"),
      areaList: this.getCityList("场地面积"),
      moneyList: this.getCityList("预算价格"),
      money2List: this.getCityList("客房参考价"),
      facList: this.getCityList("场地设施"),
      eatList: this.getCityList("餐饮要求"),

      searchData: "",
      city: this.$route.params.city, //筛选城市,上一页传过来的参数，通过$route来获取
      near: "", //附近
      type: this.$route.params.placeType, //场地类型
      use: this.$route.params.activity, //活动类型
      people: this.$route.params.num, //容纳人数
      area: "", //场地面积
      money: this.$route.params.money, //场地预算
      money2: "", //场地预算
      fac: "", //场地设施
      eat: "" //场地用餐
    };
  },

  components: {
    news,
    placeList,
    classPage
  },

  computed: {},

  mounted: function() {
    this.getLists(); //获取场地列表
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
              this.useList = value;
            } else if (type == "容纳人数") {
              this.peopleList = value;
            } else if (type == "预算价格") {
              this.moneyList = value;
            } else if (type == "场地类型") {
              this.typeList = value;
            } else if (type == "地理位置") {
              this.nearList = value;
            } else if (type == "场地面积") {
              this.areaList = value;
            } else if (type == "客房参考价") {
              this.money2List = value;
            } else if (type == "餐饮要求") {
              this.eatList = value;
            } else if (type == "场地设施") {
              this.facList = value;
            }
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
        });

      // setTimeout处理异步
      setTimeout(() => {
        this.chooseCity(0);
        this.chooseNear(0);
        this.chooseType(0);
        this.FchooseUser(0);
        this.FchoosePeople(0);
        this.FchooseArea(0);
        this.FchooseMoney(0);
        this.FchooseFac(0);
        this.FchooseEat(0);
      }, 1000);
    },

    /**
     * 选择后改变样式，和重新获取场地列表
     */
    chooseStyle(index, lists) {
      for (const li of lists) {
        // li.className = "";
        li.style.background = "#fff";
        li.style.color = "#666";
      }
      // lists[index].className = "choose";
      lists[index].style.background = "#2f85fc";
      lists[index].style.color = "#ffffff";
    },

    /**
     * 获取场地列表数据
     */
    getLists(index = 1) {
      this.firstIndex = index - 1;
      let d = {
        channelIds: 75, //场地的查询id
        first: this.firstIndex * 9, //查询开始下标  非必选  默认0
        count: 9, //查询数量  非必选  默认10
        recommend: "", //查询是否是推荐场地列表,true为推荐，‘’为全部
        palceCity: this.city == "不限" ? "" : this.city,
        placeNearby: this.near == "不限" ? "" : this.near,
        placeType: this.type == "不限" ? "" : this.type,
        placeUse: this.use == "不限" ? "" : this.use,
        numPeople: this.people == "不限" ? "" : this.people,
        placeArea: this.area == "不限" ? "" : this.area,
        placeMoney: this.money == "不限" ? "" : this.money,
        placeFacility: this.fac == "不限" ? "" : this.fac,
        placeDiet: this.eat == "不限" ? "" : this.eat
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/list.jspx", { params: d })
        .then(res => {
          this.list = res.data.data; //列表数据
          // this.listPage = Math.ceil(this.list.length / 1); //列表有多少页，向上取整
          this.isClassPage = true;
          console.log(this.listPage);
          console.log(res.data.data);
        })
        .catch(err => {
          this.serveErr();
        });
    },

    // 选择城市
    chooseCity(index, value) {
      this.city = value; //赋值城市为选择的城市
      this.getLists(); //重新获取场地列表

      let cities = document.getElementById("city").getElementsByTagName("li");
      this.chooseStyle(index, cities);
    },
    // 选择城市,F用于进入页面时初始化
    FchooseCity(index, value) {
      this.city = value; //赋值城市为选择的城市
      // this.getLists(); //重新获取场地列表

      let cities = document.getElementById("city").getElementsByTagName("li");
      this.chooseStyle(index, cities);
    },

    // 选择场地附近
    chooseNear(index, value) {
      this.near = value;
      this.getLists(); //重新获取场地列表

      let types = document.getElementById("nearby").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 选择场地附近
    FchooseNear(index, value) {
      this.near = value;
      // this.getLists(); //重新获取场地列表

      let types = document.getElementById("nearby").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },

    // 选择场地类型
    chooseType(index, value) {
      this.type = value;
      this.getLists(); //重新获取场地列表

      let types = document.getElementById("type").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 选择场地类型
    FchooseType(index, value) {
      this.type = value;
      // this.getLists(); //重新获取场地列表

      let types = document.getElementById("type").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },

    // 选择场地用途
    chooseUser(index, value) {
      this.use = value;
      this.getLists(); //重新获取场地列表

      let types = document.getElementById("use").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 选择场地用途
    FchooseUser(index, value) {
      this.use = value;
      // this.getLists(); //重新获取场地列表

      let types = document.getElementById("use").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },

    // 选择容纳人数
    choosePeople(index, value) {
      this.people = value;
      this.getLists(); //重新获取场地列表

      let types = document.getElementById("people").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 选择容纳人数
    FchoosePeople(index, value) {
      this.people = value;
      // this.getLists(); //重新获取场地列表

      let types = document.getElementById("people").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },

    // 选择场地面积
    chooseArea(index, value) {
      this.area = value;
      this.getLists(); //重新获取场地列表

      let types = document.getElementById("area").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 选择场地面积
    FchooseArea(index, value) {
      this.area = value;
      // this.getLists(); //重新获取场地列表

      let types = document.getElementById("area").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },

    // 选择场地预算
    chooseMoney(index, value) {
      this.money = value;
      this.getLists(); //重新获取场地列表

      let types = document.getElementById("money").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 选择场地预算
    FchooseMoney(index, value) {
      this.money = value;
      // this.getLists(); //重新获取场地列表

      let types = document.getElementById("money").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 客房预算
    chooseMoney2(index, value) {
      this.money2 = value;
      this.getLists(); //重新获取场地列表

      let types = document.getElementById("money2").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 客房预算
    FchooseMoney2(index, value) {
      this.money2 = value;
      // this.getLists(); //重新获取场地列表

      let types = document.getElementById("money2").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },

    // 选择场地设施
    chooseFac(index, value) {
      this.fac = value;
      this.getLists(); //重新获取场地列表

      let types = document
        .getElementById("facility")
        .getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 选择场地设施
    FchooseFac(index, value) {
      this.fac = value;
      // this.getLists(); //重新获取场地列表

      let types = document
        .getElementById("facility")
        .getElementsByTagName("li");
      this.chooseStyle(index, types);
    },

    // 选择场地用餐
    chooseEat(index, value) {
      this.eat = value;
      this.getLists(); //重新获取场地列表

      let types = document.getElementById("eat").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },
    // 选择场地用餐
    FchooseEat(index, value) {
      this.eat = value;
      // this.getLists(); //重新获取场地列表

      let types = document.getElementById("eat").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },

    // 点击展开列表按钮事件
    listBottom() {
      // document.getElementById("chooseList").style.height = "230px";
      document.getElementById("chooseList").className = "chooseList center c1";

      this.moreList = "top";
    },

    // 点击收起列表按钮事件
    listTop() {
      // document.getElementById("chooseList").style.height = "870px";
      document.getElementById("chooseList").className = "chooseList center c2";
      this.moreList = "bottom";
    }

    // // 推荐场地悬浮事件
    // showShop(value) {
    //   let lis = document.getElementById("recommend").getElementsByTagName("li");
    //   if (value < 0) {
    //     //悬浮离开时
    //     for (let i = 0; i < lis.length; i++) {
    //       let choose = lis[i].getElementsByClassName("showUp")[0];
    //       choose.style.display = "none";
    //     }
    //   } else {
    //     let choose = lis[value].getElementsByClassName("showUp")[0];
    //     choose.style.display = "block";
    //   }
    // }
  }
};
</script>

<style lang='scss' scoped>
.place_bac {
  background: #f6f8f9;
  padding-top: 40px;
}

.chooseBox {
  padding-bottom: 40px;

  // 展开收起按钮
  .listMore {
    cursor: pointer;
    margin: 0 auto;
    width: 100px;
    height: 30px;
    border-radius: 2px;
    background: #ffffff;

    border: 1px solid #dddddd;
    border-top: 0;
    text-align: center;
    line-height: 30px;

    span {
      margin-left: 22px;
      margin-right: 5px;
      float: left;
    }
    img {
      margin-top: 5px;
    }
  }
}

.c1 {
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  height: 260px;
  transition: height 0.7s;
}

.c2 {
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  // height: 230px;
  transition: height 0.7s;
  padding-bottom: 20px;
}

// 选择列表项
.chooseList {
  // 盒子的height在js事件中有设置
  // overflow: hidden;
  // background: #ffffff;
  // border: 1px solid #dddddd;
  // border-radius: 4px;
  // height: 230px;
  // // transition: height 0.7s;
  // padding-bottom: 30px;

  .city,
  .nearby,
  .type,
  .use,
  .people,
  .area,
  .money,
  .facility,
  .eat {
    padding: 10px 20px;
    border-bottom: 1px dashed #dddddd;
    overflow: hidden;

    .til {
      padding-top: 7px;
      width: 100px;
      font-size: 16px;
      font-weight: 600;
      color: #313131;
    }

    ul {
      overflow: hidden;
      li {
        margin: 7px 0;
        margin-right: 30px;
        padding: 2px 4px 3px;
        cursor: pointer;
        float: left;
        color: #666666;
        border-radius: 3px;
      }

      li:first-child {
        color: #ffffff;
        background: #2f85fc;
      }

      .choose {
        color: #ffffff;
        background: #2f85fc;
      }
    }
  }
}
// 出去最后一个选项盒子的虚线边框
.chooseList > div:last-of-type {
  border-bottom: 0;
}
</style>