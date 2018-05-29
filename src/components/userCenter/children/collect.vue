<!--  -->
<template>
  <div class="collect_bac">
    <p class="collect_til">收藏的场地</p>

    <div class="content">
      <ul>
        <li v-for="list of collectList">

          <!-- 左侧图片 -->
          <div class="left img">
            <img :src="list.titleImg" alt="">
          </div>

          <!-- 右侧描述 -->
          <div class="left text">
            <p class="name">{{list.place_name}}</p>
            <div class="activity">
              <p class="numPlace">预算:
                <i>{{list.budget}}元(每人)</i>
              </p>
              <p class="numDiscounts">人数:
                <i>{{list.population}}</i>人</p>
            </div>
            <p class="address">{{list.address}}</p>
          </div>

          <!-- 删除按钮 -->
          <div class="right delete">
            <img title="移除收藏" src="../../../assets/imges/delete.png" alt="" @click="closeCollect(list.id)">
          </div>

        </li>

        <!-- <li>
          <div class="left img">
            <img src="../../../assets/imges/var5.png" alt="">
          </div>
          <div class="left text">
            <p class="name">大宴会厅A+B+C</p>
            <div class="activity">

              <p class="numPlace">
                <i>3</i> 个活动场地</p>
              <p class="numDiscounts">
                <i>0</i> 个优惠套餐</p>
            </div>
            <p class="address">「宝安区」宝安大道6529号</p>
          </div>

          <div class="right delete">
            <img src="../../../assets/imges/delete.png" alt="">
          </div>
        </li> -->

      </ul>

      <div class="more">
        <i @click="more">加载更多</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collectList: [],
      allItem: 1
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.getList();
  },
  methods: {
    /**
     * 获取收藏列表
     */
    getList() {
      let data = {
        appId: 1,
        sessionKey: localStorage.sessionKey,
        type: 0,
        first: 0, //查询开始下标  非必选  默认0
        count: this.allItem * 1 //查询数量  非必选  默认10
      };
      this.$http
        .get(this.urlIp + "/api/content/extend/collectAndShopCartList.jspx", {
          params: data
        })
        .then(res => {
          console.log(JSON.stringify(res.data));
          if (res.data.code == 200) {
            this.collectList = res.data.data;
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.serveErr();
        });
    },

    /**@augments
     * 加载更多
     */
    more() {
      this.allItem = this.allItem + 1;
      this.getList();
    },
    /**
     * 删除收藏
     */
    closeCollect(id) {
      let d = {
        appId: 1,
        id: id,
        sessionKey: localStorage.sessionKey,
        type: 0, //0为收藏，1为购物车
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
            // alert(data.message);
            this.getList();
          } else {
            alert(data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
        });
    },

    chooseNow(index) {
      let lis = document
        .getElementById("letter-tab")
        .getElementsByTagName("li");
      for (let li of lis) {
        console.log(li);
        li.style = "color: #919191;border-bottom-color: transparent;";
      }
      lis[index].style = "color: #313131;border-bottom-color: #1e1e1e;";
    }
  }
};
</script>

<style lang='scss' scoped>
.collect_bac {
  // padding-bottom: 30px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee;

  .collect_til {
    font-size: 18px;
    font-weight: 700;
    padding-left: 30px;
    height: 65px;
    color: #313131;
    line-height: 65px;
    border-bottom: 1px solid #eee;
  }
  .more {
    height: 40px;
    color: #999;
    text-align: center;
    margin-top: 10px;
    i {
      cursor: pointer;
    }
  }
  // 列表内容
  .content {
    padding: 0 30px;
    ul {
      li {
        padding: 20px 0 20px 10px;
        overflow: hidden;
        border-bottom: 1px solid #eee;

        .img {
          //div1    左侧图片
          width: 150px;
          height: 100px;
          margin-right: 20px;
          img {
            width: 150px;
            height: 100px;
          }
        }

        .text {
          //div2
          .name {
            font-size: 18px;
            color: #2f85fc;
          }
          .activity {
            overflow: hidden;
            font-size: 16px;
            margin: 15px 0 20px 0;
            p {
              float: left;
              width: 220px;
              i {
                font-size: 18px;
                color: #fe7272;
              }
            }
          }
          .address {
            font-size: 14px;
            color: #919191;
          }
        }

        .delete {
          cursor: pointer;
          line-height: 100px;
          padding-right: 20px;
        }
      }
    }
  }
}
</style>