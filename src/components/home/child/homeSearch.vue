<!--  -->
<template>
  <div class="homesearch">
    <div class="box1">
      <p class="left">搜索</p>
      <div class="box_search left" @click="showSearch(0)">
        <p class="text" v-if="activity">{{activity}}</p>
        <p class="text" v-if="!activity">活动类型</p>
        <i class="right">▼</i>
      </div>
    </div>
    <div class="box1">
      <p class="left">在</p>
      <div class="box_search left" @click="showSearch(1)">
        <p class="text" v-if="placeType">{{placeType}}</p>
        <p class="text" v-if="!placeType">场地类型</p>
        <i class="right">▼</i>
      </div>
    </div>
    <div class="box1">
      <p class="left">位于</p>
      <div class="box_search left" style="width:60px" @click="showSearch(2)">
        <p class="text" style="width:40px" v-if="city">{{city}}</p>
        <p class="text" style="width:40px" v-if="!city">地区</p>
        <i class="right">▼</i>
      </div>
    </div>
    <div class="box1">
      <p class="left">适合</p>
      <div class="box_search left" style="width:100px" @click="showSearch(3)">
        <p class="text" style="width:80px" v-if="num">{{num}}</p>
        <p class="text" style="width:80px" v-if="!num">参与人数</p>
        <i class="right">▼</i>
      </div>
    </div>
    <div class="box1">
      <p class="left">在</p>
      <div class="box_search left" style="width:100px" @click="showSearch(4)">
        <p class="text" style="width:80px" v-if="money">{{money}}</p>
        <p class="text" style="width:80px" v-if="!money">活动预算</p>
        <i class="right">▼</i>
      </div>
    </div>
    <div class="box1">
      <p class="left">以内</p>
      <div class="box_search left" style="width:160px" @click="showSearch(5)">
        <p class="text" style="width:140px">{{help}}</p>
        <i class="right">▼</i>
      </div>
    </div>
    <button class="but right" @click="search()">搜索场地</button>
    <!-- <div class="chooseBox1" id="d1" @mouseout="closeSearch()"> -->
    <!-- 选择框 -->
    <div class="bigChooseBox" id="box">
      <div class="chooseBox1" :style="{'display':showArr[0]? 'block':'none'}">
        <p class="til">活动类型</p>
        <ul class="lis">
          <li @click="chooseActivity(0,list.value)" v-for="list of activeTypeList">
            <a>{{list.value}}</a>
          </li>
          
        </ul>
      </div>
      <div class="chooseBox1" :style="{'display':showArr[1]? 'block':'none'}">
        <p class="til">场地类型</p>
        <ul class="lis">
          <li @click="chooseActivity(1,list.value)" v-for="list of placeTypeList">
            <a>{{list.value}}</a>
          </li>
         
        </ul>
      </div>

      <div class="chooseBox1" :style="{'display':showArr[2]? 'block':'none'}">
        <p class="til">地区</p>
        <ul class="lis lis2">
          <li @click="chooseActivity(2,list.value)" v-for="list of cityList">
            <a>{{list.value}}</a>
          </li>
        </ul>
      </div>

      <div class="chooseBox1" id="" :style="{'display':showArr[3]? 'block':'none'}">
        <p class="til">参与人数</p>
        <ul class="lis">
         <li @click="chooseActivity(3,list.value)" v-for="list of numPeopleList">
            <a>{{list.value}}</a>
          </li>
        </ul>
      </div>

      <div class="chooseBox1" id="" :style="{'display':showArr[4]? 'block':'none'}">
        <p class="til">活动预算</p>
        <ul class="lis">
          <li @click="chooseActivity(4,list.value)" v-for="list of placeMoneyList">
            <a>{{list.value}}</a>
          </li>
        </ul>
      </div>

      <div class="chooseBox1 d2" id="" :style="{'display':showArr[5]? 'block':'none'}" style=" margin-left: 800px;">
        <!-- <p class="til">地区</p> -->
        <ul class="lis">
          <li @click="chooseActivity(5,'需要DNC推荐')">
            <a>需要</a>
          </li>
          <li @click="chooseActivity(5,'不需要DNC推荐')">
            <a>不需要</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      show1: -1,
      showArr: [false, false, false, false, false, false],
      activity: "",
      placeType: "",
      city: "",
      num: "",
      money: "",
      help: "是否需要DNC推荐",
      cityList: this.getCityList("场地地区"), //场地地区选择列表
      activeTypeList: this.getCityList("活动类型"), //活动类型选择列表
      numPeopleList: this.getCityList("容纳人数"), //容纳人数选择列表
      placeMoneyList: this.getCityList("预算价格"), //预算价格选择列表
      placeTypeList: this.getCityList("场地类型") //场地类型选择列表
    };
  },
  components: {},
  computed: {},
  mounted() {},
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
            } else if (type == "场地类型") {
              this.placeTypeList = value;
            }
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
        });
    },

    // 点击选择执行的方法
    showSearch(value) {
      // this.changeData();

      if (this.nowBox != value) {
        let divs = document.getElementsByClassName("chooseBox1");
        for (let i = 0; i < divs.length; i++) {
          this.showArr[i] = false;
        }
        this.showArr[value] = true;
      } else {
        this.showArr[value] = !this.showArr[value];
      }
      //vue中数组绑定更新不能被实时检测，要手动添加set方法，告诉vue去监控次数组的变化
      Vue.set(this.showArr, value, this.showArr[value]);

      this.nowBox = value; //将点击的value赋值给全局变量nowBox，用于判断是否点击同一个box
    },

    // 选择类型后的执行方法
    chooseActivity(indexBox, choose) {
      if (indexBox == 0) {
        this.activity = choose;
      } else if (indexBox == 1) {
        this.placeType = choose;
      } else if (indexBox == 2) {
        this.city = choose;
      } else if (indexBox == 3) {
        this.num = choose;
      } else if (indexBox == 4) {
        this.money = choose;
      } else if (indexBox == 5) {
        this.help = choose;
      }
      this.showSearch(indexBox); //改变show1的值；
    },

    /**
     * 提交搜索
     */
    search() {
      let data = {
        activity: this.activity,
        placeType: this.placeType,
        city: this.city,
        num: this.num,
        money: this.money,
        help: this.help
      };
      this.$router.push({ name: "place", params: data });
    }
  }
};
</script>

<style lang='scss' scoped>
.homesearch {
  color: #ffffff;
  font-size: 18px;
  position: absolute;
  left: 50%;
  margin-left: -550px;
  padding: 20px;
  top: 650px;
  width: 1060px;
  height: 34px;
  background: rgba($color: #000000, $alpha: 0.6);

  .box1 {
    float: left;
    line-height: 34px;
    .box_search {
      .text {
        text-align: center;
        float: left;
        width: 65px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      cursor: pointer;
      padding: 8px 5px;
      margin: 0 10px;
      background: #ffffff;
      border-radius: 4px;
      font-size: 16px;
      color: rgba(49, 49, 49, 1);
      height: 18px;
      line-height: 18px;
      width: 84px;
    }
  }

  // 搜索按钮
  .but {
    width: 100px;
    height: 34px;
    line-height: 34px;
    font-size: 16px;
  }

  // 弹出的选择框
  .chooseBox1 {
    display: none;
    border-radius: 3px;
    padding: 20px 30px 10px;
    margin-top: 60px;
    width: 1000px;
    background: #ffffff;
    box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);

    // 标题
    .til {
      margin-bottom: 10px;
      font-size: 20px;
      color: #2f85fc;
      font-weight: 600;
    }

    // 选项样式
    .lis {
      overflow: hidden;
      li {
        float: left;
        margin: 3px;
        margin-right: 30px;
        margin-bottom: 20px;
        a {
          border-radius: 4px;
          // box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
          // margin-right: 20px;
          border: 1px solid #eeeeee;
          font-size: 16px;
          display: block;
          padding: 10px;
          // width: 180px;
          line-height: 14px;
          color: #777777;
        }

        // 悬浮时的样式
        a:hover {
          // box-shadow: 0 0 5px rgba($color: #2f85fc, $alpha: 1);
          background: #2f85fc;
          color: #ffffff;
        }
      }
    }
  }

  //  是否需要协助弹出框
  .d2 {
    padding: 10px;
    width: 75px;
    .lis {
      li {
        margin-bottom: 0;
        a {
          text-align: center;
          width: 50px;
        }
      }
    }
  }
}
</style>