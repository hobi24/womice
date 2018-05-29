<!--  -->
<template>
  <div class="shopping_bac">
    <div class="shopping_box center">
      <div class="text">
        <p class="tilStyle">现正查询{{num}}个场地 </p>
        <p class="textStyle">加入最多10个场地并一起提交询价</p>
        <p class="p3">列表中的场地会即时收到您的查询，并有专人于24小时内直接与你联络</p>
      </div>

      <div class="list">
        <ul>
          <li v-for="list of shoppingList">
            <div class="d1">
              <div class="iconbox" title="移除此场地" @click="closeShopping(list.id)">
                <i class="iconfont icon-delete"></i>
              </div>
              <img :src="imgUrl + list.place_imges" alt="">
              <!-- <img src="../../assets/imges/var3.png" alt=""> -->
            </div>
            <div class="d2">
              <p class="name tilStyle">{{list.place_name}}</p>
              <div class="details">
                <p>预算:
                  <i>{{list.budget}}(每人）</i>
                </p>
                <p>人数:
                  <i>{{list.population}}座</i>
                </p>
              </div>
            </div>
            <div class="d3 gps">
              <i class="iconfont icon-location"></i>
              {{list.palce_city}}
            </div>
          </li>

          <li>
            <div class="d1">
              <div class="iconbox" title="移除此场地" @click="closeShopping()">
                <i class="iconfont icon-delete"></i>
              </div>
              <img src="../../assets/imges/var3.png" alt="">
            </div>
            <div class="d2">
              <p class="name tilStyle">咸杜瑞什么啦宴会厅</p>
              <div class="details">
                <p>预算:
                  <i>10000元（每人）</i>
                </p>
                <p>人数:
                  <i>10000座</i>
                </p>
              </div>
            </div>
            <div class="d3 gps">
              <i class="iconfont icon-location"></i>
              sz
            </div>
          </li>

        </ul>
      </div>
    </div>
    <div class="bottom_box center"></div>
    <help-form></help-form>
    <news></news>
  </div>
</template>

<script>
import helpForm from "../placeHelp/helpForm";
import news from "../news/news";
export default {
  data() {
    return {
      shoppingList: [],
      num: ""
    };
  },

  components: {
    helpForm,
    news
  },

  computed: {},

  mounted() {
    this.getShoppingList();
  },

  methods: {
    /**
     * 获取购物车列表
     */
    getShoppingList() {
      let data = {
        appId: 1,
        sessionKey: localStorage.sessionKey,
        type: 1
      };
      this.$http
        .get(this.urlIp + "/api/content/extend/collectAndShopCartList.jspx", {
          params: data
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.shoppingList = res.data.data;
            this.num = res.data.data.length;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.serveErr();
        });
    },

      /**
     * 删除收藏
     */
    closeShopping(id) {
      let d = {
        appId: 1,
        id: id,
        sessionKey: localStorage.sessionKey,
        type: 1, //0为收藏，1为购物车
        operate: 0 //1为加入，0为移除
      };
      console.log(d);
      this.$http
        .post(
          this.urlIp + "/api/content/collectShopCart.jspx",
          this.qs.stringify(d)
        )
        .then(res => {
          console.log(res.data);
          let data = res.data;
          if (data.code == 200) {
            this.getShoppingList();//重新获取购物车列表
          } else {
            alert(data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
        });
    },
  }
};
</script>

<style lang='scss' scoped>
.shopping_bac {
  background: #f6f8f9;
}

.shopping_box {
  background: #e5e5e5;
  padding-top: 30px;

  .text {
    p {
      text-align: center;
    }
    .tilStyle {
      color: #2f85fc;
      font-size: 30px;
    }
    .textStyle {
      color: #2f353e;
    }

    .p3 {
      color: #454c54;
      font-size: 14px;
      font-weight: 600;
    }
  }

  // 列表项
  .list {
    ul {
      overflow: hidden;
      padding: 20px 50px 0;
      li {
        float: left;
        margin-right: 30px;
        margin-bottom: 30px;
        width: 195px;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.4);
        .d1 {
          position: relative;
          width: 195px;
          height: 130px;
          //   移除按钮
          .iconbox {
            cursor: pointer;
            position: absolute;
            top: 5px;
            right: 5px;
            text-align: center;
            line-height: 30px;
            width: 30px;
            height: 30px;
            border-radius: 15px;
            background: rgba($color: #ffffff, $alpha: 0.6);
            i {
              font-size: 22px;
              color: #666666;
            }
          }
          .iconbox:hover {
            background: rgba($color: #ffffff, $alpha: 0.9);
          }

          img {
            border-radius: 10px 10px 0 0;
            vertical-align: top;
            width: 195px;
            height: 130px;
          }
        }
        .d2 {
          .name {
            height: 9px;
            overflow: hidden;
            font-size: 16px;
            text-align: center;
            margin: 0;
            padding: 10px 0 15px 0;
            border-bottom: 1px solid #d2d2d2;
          }
          .details {
            font-size: 14px;
            overflow: hidden;
            padding: 10px 0;
            color: #313131;
            p {
              padding-left: 15px;
              i {
                color: #2f85fc;
              }
            }
          }
        }
        .d3 {
          text-align: center;
          padding: 10px 0;
          background: #ededed;
          border-radius: 0 0 10px 10px;
          i {
            font-size: 18px;
            color: #2f85fc;
          }
        }
      }
      li:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
.bottom_box {
  width: 0;
  height: 0;
  border-left: 600px solid transparent;
  border-right: 600px solid transparent;
  border-top: 100px solid #e5e5e5;
}
</style>