<!--  -->
<template>
  <div>
    <!-- 场地 -->
    <div class="recommend">
      <div class="center">
        <!-- 场地列表 -->
        <ul id="recommend">

          <li class="lis" v-for='(lis,index) of search'>
            <!-- <div class="img" @click="goDetail(lis.id)" @mouseover="showShop(index)" @mouseout="showShop(-1)"> -->
            <div class="img" @click="goDetail(lis.id)">
              <!-- <img :src="imgUrl + lis.place_imges" alt=""> -->
              <img :src="lis.titleImg" alt="">
              <!-- 鼠标悬浮出现朦层 -->
              <div class="showUp">
                <p class="t1">{{lis.title}}</p>
                <p class="t2" v-html="lis.description"></p>
              </div>
            </div>

            <p class="shop">{{lis.place_name}}
              <i v-if="lis.business">@{{lis.business}}</i>
            </p>
            <p class="join">
              <img src="../../assets/imges/gps.png" alt="" class="left">
              <span class="left">{{lis.palce_city}}</span>
              <button class="but right" @click="joinList(lis.id)">加入清单</button>
            </p>
            <p class="details">
              预算:
              <span>{{lis.budget}}元(每人)</span>&nbsp;&nbsp; 人数:
              <span>{{lis.population}}人</span>
            </p>
            <!-- 收藏按钮 -->
            <i class="iconfont icon-collection-b collect" :id="'collect'+lis.id" @click="joinCollect(lis.id)"></i>

            <p class="num right">共 {{lis.readNum}}次浏览</p>
          </li>

          <!-- <li class="lis">
            <div class="img" @click="goDetail()">
              <img src="../../assets/imges/101.png" alt="">
              <div class="showUp">
                <p class="t1">中影UL城市影城（宝立方店）:</p>
                <p class="t2">● 深圳其中一个餐饮的首领 <br>● 概独特又有风格的3层1700平方尺现代化<br> ● 空间<br> ● 墙上的空间除了可以挂上相片和书，<br> ● 也可以作投影只用</p>
              </div>
            </div>
            <p class="shop">十號宴會廳
              <i>@ 拉斐特 Lafayette</i>
            </p>
            <p class="join">
              <img src="../../assets/imges/gps.png" alt="" class="left">
              <span class="left">深圳</span>
              <button class="but right">加入清单</button> 
            </p>
            <p class="details">
              预算：
              <span>{{budget}}元（每人）</span> 人数：
              <span>{{population}}座</span>
            </p>
            <p class="num right">共 2333次浏览</p>
          </li> -->

        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choose:-1,
    };
  },

  props: ["search"],

  components: {},

  computed: {},

  mounted() {},

  methods: {
    /**
     * 点击进入场地详情
     */
    goDetail(id) {
      this.$router.push({ name: "placeDetail", params: { id } });
      localStorage.setItem("contentId", id); //将id储存到缓存
      
    },

    /**
     * 加入清单
     */
    joinList(id) {
      let d = {
        appId: 1,
        id: id,
        sessionKey: localStorage.sessionKey,
        type: 1,
        operate: 1
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
            // this.goLogin();
            alert(data.message);
          } else {
            alert(data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
        });
    },

    /**
     * 加入收藏夹
     */
    joinCollect(id) {
      let d = {
        appId: 1,
        id: id,
        sessionKey: localStorage.sessionKey,
        type: 0,//0为收藏，1为购物车
        operate: 1,//1为加入，0为移除
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
            document.getElementById('collect'+id).style.color = '#fabf0b';
            // alert(data.message);
          } else {
            alert(data.message);
          }
        })
        .catch(err => {
          this.utils.serveErr();
        });
    }


  }
};
</script>

<style lang='scss' scoped>
// 场地列表
.recommend {
  background-size: 100% 100%;
  padding-bottom: 70px;

  // 场地列表
  ul {
    overflow: hidden;
  }
  .lis {
    margin: 0 30px 30px 0;
    float: left;
    width: 378px;
    background: #ffffff;
    padding-bottom: 20px;
    position: relative;
    border: 1px solid #e1e8ed;
    border-radius: 4px;

    .img {
      cursor: pointer;
      height: 240px;
      width: 378px;
      img {
        vertical-align: top;
        height: 240px;
        width: 378px;
      }
      // 悬浮朦层
      .showUp {
        overflow: hidden;
        height: 200px;
        border-radius: 4px;
        display: none;
        position: absolute;
        top: 0;
        width: 338px;
        background: rgba(0, 0, 0, 0.7);
        font-size: 20px;
        font-family: MicrosoftYaHei-Bold;
        color: #ffffff;
        padding: 20px;
        .t1 {
          padding-bottom: 30px;
        }
        .t2 {
          height: 130px;
          overflow: hidden;
          font-size: 16px;
        }
      }
    }

    .img:hover .showUp {
      display: block;
    }

    .shop {
      overflow: hidden;
      padding: 20px;
      font-size: 18px;
      font-weight: 700;
      font-family: MicrosoftYaHei-Bold;
      color: #313131;
      height: 33px;

      i {
        cursor: pointer;
        font-weight: 700;
        color: #2f85fc;
      }
    }
    .join {
      overflow: hidden;
      padding: 20px;
      padding-top: 0;
      border-bottom: 1px solid #e1e8ed;

      span {
        margin-left: 6px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #2f85fc;
      }
      button {
        width: 100px;
        height: 34px;
        line-height: 34px;
      }
    }
    .details {
      padding: 20px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #313131;
      span {
        color: #2f85fc;
      }
    }
    //收藏
    .collect {
      cursor: pointer;
      color: #cccccc;
      margin-left: 20px;
    }
    //浏览人数
    .num {
      padding-right: 20px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      color: #919191;
    }
  }
  .lis:nth-child(3n) {
    margin-right: 0;
  }
}
</style>