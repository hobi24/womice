<!-- 场地 -->
<template>
  <div class="service_bac">

    <!-- 选择列表 -->
    <div class="chooseList center">

      <div class="gps">
        <p class="til left">地理位置：</p>
        <ul id="city">
          <li @click="chooseCity(index,list.value)" v-for="(list,index) of cityList">{{list.value}}</li>
        </ul>
      </div>

      <div class="serviceType">
        <p class="til left">服务类型：</p>
        <ul id="type">
          <li @click="chooseType(index,list.value)" v-for="(list,index) of serviceTypeList">{{list.value}}</li>
        </ul>
      </div>
    </div>

    <service-list :service="list"></service-list>
    <class-page @childMethod="getLists"></class-page>

    <news></news>
  </div>
</template>

<script>
import news from "../news/news";
import serviceList from "./serviceList";
import classPage from "../classPage/classPage";
export default {
  data() {
    return {
      cityList: this.getCityList("场地地区"),
      serviceTypeList: this.getCityList("服务类型"),
      list: [], //列表数据
      indexPage: 0, //选择的第几页

      city: "", //筛选城市
      type: "" //筛选类型，可能会接收来自首页的我的服务的中的智慧MICE
    };
  },

  components: {
    news,
    serviceList,
    classPage
  },

  computed: {},

  mounted: function() {
    this.type = this.$route.params.type;
    if (this.type) {
      this.chooseType(5, "智慧MICE");
      this.chooseCity(0);
    } else {
      this.getLists();
    }
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
            } else if (type == "服务类型") {
              this.serviceTypeList = value;
            }
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
        });

      // 获取完场地选项列表后执行样式方法
      setTimeout(() => {
        this.chooseCity(0);
        // 如果选择了智慧mice，这上面就已经选择了样式，这里就忽略吧
        if (!this.type) {
          this.chooseType(0);
        }
      }, 2000);
    },

    /**
     * 获取场地列表数据
     */
    getLists(index = 1) {
      this.indexPage = index - 1;
      let d = {
        channelIds: 94, //场地的查询id
        first: this.indexPage * 9, //查询开始下标  非必选  默认0
        count: 9, //查询数量  非必选  默认10
        service_city: this.city == "不限" ? "" : this.city,
        service_type: this.city == "不限" ? "" : this.type
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/list.jspx", { params: d })
        .then(res => {
          this.list = res.data.data;
          console.log(res.data);
          console.log(res.data.data);
        })
        .catch(err => {
          this.serveErr();
        });
    },

    // 选择样式
    chooseStyle(index, lists) {
      for (const li of lists) {
        li.className = "";
      }
      lists[index].className = "choose";
    },

    // 选择城市
    chooseCity(index, value) {
      this.city = value;
      this.getLists(); //重新获取筛选列表

      let cities = document.getElementById("city").getElementsByTagName("li");
      this.chooseStyle(index, cities);
    },

    // 选择服务类型
    chooseType(index, value) {
      console.log(value);
      this.type = value;
      this.getLists();

      let types = document.getElementById("type").getElementsByTagName("li");
      this.chooseStyle(index, types);
    },

    // 推荐场地悬浮事件
    showShop(value) {
      let lis = document.getElementById("recommend").getElementsByTagName("li");
      if (value < 0) {
        //悬浮离开时
        for (let i = 0; i < lis.length; i++) {
          let choose = lis[i].getElementsByClassName("showUp")[0];
          choose.style.display = "none";
        }
      } else {
        let choose = lis[value].getElementsByClassName("showUp")[0];
        choose.style.display = "block";
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.service_bac {
  padding-top: 40px;
  background: #f6f8f9;
}

// 选择列表项
.chooseList {
  margin-bottom: 40px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;

  .gps,
  .serviceType {
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
        padding: 2px 4px 3px 4px;
        cursor: pointer;
        float: left;
        color: #666666;
        border-radius: 3px;
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