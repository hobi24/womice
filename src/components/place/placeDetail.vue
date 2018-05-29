<!--  -->
<template>
  <div class="placeDetail_bac">
    <div class="banner_box">
      <div class="banner">
        <img :src="placeDetail.contentImg" alt="">
      </div>
      <!-- <div class="bannerStyle" :style="{backgroundImges:url(placeDetail.contentImg)}"></div> -->
    </div>

    <div class="detail_box center">
      <div class="left_box left">
        <div class="text">
          <div class="text1">
            <div class="name">
              <p class="tilStyle">{{placeDetail.place_name}} </p>
              <p class="gps textStyle"><img src="../../assets/imges/gps.png" alt=""> 位于
                <i style="color:#2F85FC">{{placeDetail.palce_city}}</i>
              </p>
            </div>
            <div class="but right" @click="joinList()">加入询价清单</div>
          </div>

          <div class="text2">
            <div class="detail_list">
              <div class="tilStyle list left" style="font-size:16px">
                {{placeDetail.place_describe}}
              </div>
            </div>

            <!-- <div class="but right">场地资料</div> -->

            <div class="clear"></div>

            <div class="detail_text" v-html="placeDetail.txt">
            </div>
          </div>
          <div class="text3">
            <placeBanner :banData="banList" v-if="isMap"></placeBanner>

          </div>

        </div>

      </div>
      <div class="right_box right">

        <div class="submit_box">
          <div class="submit_but" @click="toShopping()"><img src="../../assets/imges/getEmail.png" alt=""> 联系场地</div>
          <div class="submit_text">
            活动需求即时接收您提交的信息<br> 获取活动最好的报价
            <br> 100%免费报价查询服务
          </div>
        </div>

        <div class="price">
          <div class="til">价格</div>

          <div class="money_box">
            <div class="left img"><img src="../../assets/imges/price.png" alt=""></div>
            <div class="left">
              <div class="money">
                <p class="t1">全日租用</p>
                <p class="t2">￥{{placeDetail.quanrizhuyongjiage}}</p>
              </div>
              <!-- <div class="money">
                <p class="t1">全日租用（包括场地，厨房，设 备）
                </p>
                <p class="t2">￥9,800</p>
              </div> -->
            </div>
          </div>

          <div class="botNotice">*以上價格為場地提供的預算參考，實際價格隨活動而定</div>
        </div>

        <div class="right_detail">
          <div class="til">中影UL城市影城 </div>
          <ul class="detail_lis">
            <li>
              <div class="left b1">
                <img src="../../assets/imges/people.png" alt="">
              </div>
              <div class="left b2">
                <p class="t1">人数:</p>
                <p class="t2">最多可容纳{{placeDetail.population}}人</p>
              </div>
            </li>

            <li>
              <div class="left b1">
                <img src="../../assets/imges/areasize.png" alt="">
              </div>
              <div class="left b2">
                <p class="t1">场地面积:</p>
                <p class="t2">{{placeDetail.face_place_area}}平方</p>
              </div>
            </li>

            <li>
              <div class="left b1">
                <img src="../../assets/imges/address.png" alt="">
              </div>
              <div class="left b2">
                <p class="t1">地址:</p>
                <p class="t2">{{placeDetail.address}}</p>
              </div>
            </li>

            <li>
              <div class="left b1">
                <img src="../../assets/imges/partytype.png" alt="">
              </div>
              <div class="left b2">
                <p class="t1">场地类别:</p>
                <p class="t2">{{placeDetail.place_type}}</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="download">
          <div class="til">场地资料下载 </div>
          <ul class="file">
            <li>
              <img src="../../assets/imges/download.png" alt="">
              <span>XXX场地资料.DOC</span>
            </li>
            <li>
              <img src="../../assets/imges/download.png" alt="">
              <span>XXX场地资料.DOC</span>
            </li>
            <li>
              <img src="../../assets/imges/download.png" alt="">
              <span>XXX场地资料.DOC</span>
            </li>
          </ul>

        </div>
      </div>

      <div class="clear"></div>
      <div class="placeData">
        <div class="til tilStyle">
          中影UL城市影城
          <i style="color:#2F85FC;font-weight:600;">的场地资料</i>
        </div>

        <div class="dataBox_bac">
          <div class="dataBox">
            <ul>
              <li>
                <p class="til">容纳人数</p>
                <div class="text" v-html="placeDetail.rongnarenshu">
                </div>
              </li>
              <li>
                <p class="til">食物与餐饮</p>
                <div class="text" v-html="placeDetail.shiwuyucanyin">
                </div>

              </li>
              <li>
                <p class="til">设备设施</p>
                <div class="text" v-html="placeDetail.shibeisheshi">
                </div>

              </li>
              <li>
                <p class="til">其他</p>
                <div class="text" v-html="placeDetail.other">
                </div>

              </li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>

      </div>
      <div class="placeMap_box">
        <div class="top">
          <div class="til tilStyle left"> 中影UL城市影城
            <i style="color:#2F85FC;font-weight:600;">的位置</i>
          </div>

          <div class="submit_but right" @click="toShopping()"><img src="../../assets/imges/getEmail.png" alt=""> 联系场地</div>
          <div class="but right" @click="joinList">加入询价清单</div>

        </div>
        <!-- <div class="clear"></div> -->
        <div class="map">
          <bdmap :m="mapData" v-if="isMap"></bdmap>
        </div>
      </div>

      <!-- 相关案例 -->
      <div class="clear"></div>
      <div class="case">
        <div class="til tilStyle" style="margin-top:40px;font-size: 24px;">
          相关案例
        </div>

        <!-- 案例列表 -->
        <ul class="caselist" style="overflow:hidden;">
          <li class="lis">
            <div class="img left">
              <img src="../../assets/imges/var5.png" alt="">
            </div>

            <div class="left caseText">
              <p class="til">沃麦斯场地出租大型网站</p>
              <p class="tex">案例描述洛杉矶dgfds反倒是因泛海很关键梵蒂冈地方更合适的火锅店分公司烦得很高粉红色的更好发给你 高房价和房管局和国际航空港方法结合体粉红色祸得福过还好个房间风格的快高考；老地方看见过；了的罚款了关键时刻力合股份即可拉伸考虑过剪短发了肯德基；考虑好</p>
              <button style="font-size:18px;font-weight:600;color:#2F85FC">查看案例>></button>
            </div>
          </li>
          <li class="lis">
            <div class="img left">
              <img src="../../assets/imges/var4.png" alt="">
            </div>

            <div class="left caseText">
              <p class="til">沃麦斯场地出租大型网站</p>
              <p class="tex">案例描述洛杉矶dgfds反倒是因泛海很关键梵蒂冈地方更合适的火锅店分公司烦得很高粉红色的更好发给你 高房价和房管局和国际航空港方法结合体粉红色祸得福过还好个房间风格的快高考；老地方看见过；了的罚款了关键时刻力合股份即可拉伸考虑过剪短发了肯德基；考虑好</p>
              <button style="font-size:18px;font-weight:600;color:#2F85FC">查看案例>></button>
            </div>
          </li>
          <li class="lis">
            <div class="img left">
              <img src="../../assets/imges/var1.png" alt="">
            </div>

            <div class="left caseText">
              <p class="til">沃麦斯场地出租大型网站</p>
              <p class="tex">案例描述洛杉矶dgfds反倒是因泛海很关键梵蒂冈地方更合适的火锅店分公司烦得很高粉红色的更好发给你 高房价和房管局和国际航空港方法结合体粉红色祸得福过还好个房间风格的快高考；老地方看见过；了的罚款了关键时刻力合股份即可拉伸考虑过剪短发了肯德基；考虑好</p>
              <button style="font-size:18px;font-weight:600;color:#2F85FC">查看案例>></button>
            </div>
          </li>
          <li class="lis">
            <div class="img left">
              <img src="../../assets/imges/var3.png" alt="">
            </div>

            <div class="left caseText">
              <p class="til">沃麦斯场地出租大型网站</p>
              <p class="tex">案例描述洛杉矶dgfds反倒是因泛海很关键梵蒂冈地方更合适的火锅店分公司烦得很高粉红色的更好发给你 高房价和房管局和国际航空港方法结合体粉红色祸得福过还好个房间风格的快高考；老地方看见过；了的罚款了关键时刻力合股份即可拉伸考虑过剪短发了肯德基；考虑好</p>
              <button style="font-size:18px;font-weight:600;color:#2F85FC">查看案例>></button>
            </div>
          </li>
        </ul>
      </div>
      <discuss :typeId='id'></discuss>
    </div>
    <news></news>
  </div>

</template>

<script>
import bdmap from "../../components/map/map";
import news from "../news/news";
import placeBanner from "./placeBanner";
import discuss from "./discuss";
export default {
  data() {
    return {
      mapData: {
        x: 121.514693,
        y: 31.237538,
        w: 1200,
        h: 350
      },
      isMap: false, //判断是否显示地图组件

      placeDetail: [], //场地资料
      banList: [], //轮播图数组
      id: localStorage.contentId //场地id
    };
  },

  components: {
    bdmap,
    news,
    placeBanner,
    discuss
  },

  computed: {},

  mounted() {
    this.getDetail();
  },

  methods: {
    /**
     * 进入页面查询场地详情
     */
    getDetail() {
      let id = this.$route.params.id;

      this.$http
        .get(this.urlIp + `/api/content/get.jspx?id=${this.id}`)
        .then(res => {
          this.placeDetail = res.data.data;
          this.banList = res.data.data.picPaths; //轮播图数组
          this.mapData.x = res.data.data.longitude; //经度
          this.mapData.y = res.data.data.latitude; //纬度
          this.isMap = true;
          console.log(res.data);
        })
        .catch(err => {
          this.serveErr();
        });
    },

    /**
     * 将场地加入购物车
     */
    joinList() {
      let d = {
        appId: 1,
        id: this.id,
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
     * 联系场地
     */
    toShopping() {
      let d = {
        appId: 1,
        id: this.id,
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
            this.$router.push({ name: "shopping" }); //页面跳转
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
.but2 {
  height: 34px;
  line-height: 34px;
  background: #ffffff;
  color: #2f85fc;
  border: 1px solid #2f85fc;
}

.placeDetail_bac {
  background: #f6f8f9;
}

// 顶部banner图
.banner_box {
  height: 460px;
  .banner {
    height: 460px;
    width: 100%;
    img {
    height: 460px;
    width: 100%;

    }
    // background: url(../../assets/imges/placeDetailBanner.png) no-repeat;
    // background: no-repeat;
  }
}

.detail_box {
  overflow: hidden;
  padding: 30px 0;

  .left_box {
    width: 800px;

    // 场地名字盒子
    .text1 {
      overflow: hidden;
      margin-bottom: 40px;
      border-bottom: 10px solid #2f85fc;

      .name {
        float: left;
        width: 500px;
      }

      .but {
        margin-top: 20px;
        padding: 0 10px;
        // background: #ffffff;
        // color: #2f85fc;
        // border: 1px solid #2f85fc;
      }
    }

    // 场地资料
    .text2 {
      .list {
        line-height: 30px;
        width: 600px;
      }
      .but {
        height: 34px;
        line-height: 34px;
        background: #ffffff;
        color: #2f85fc;
        border: 1px solid #2f85fc;
      }
      .detail_text {
        font-size: 16px;
        color: #313131;
        line-height: 26px;
      }
    }
  }

  .right_box {
    width: 360px;
    //   联系场地盒子
    .submit_box {
      margin: 0 auto;
      padding: 10px;
      background: #f3f3f3;
      border: 1px solid #dddddd;
      overflow: hidden;

      .submit_but {
        cursor: pointer;
        height: 80px;
        line-height: 80px;
        background: #40aa3f;
        color: #ffffff;
        font-size: 26px;
        text-align: center;
      }

      .submit_text {
        margin-top: 20px;
        text-align: center;
        font-size: 16px;
        color: #40aa3f;
        line-height: 24px;
      }
    }

    // 右边价格盒子
    .price {
      color: #ffffff;
      margin-top: 30px;
      .til {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        background: #2f85fc;
      }

      .botNotice {
        background: #2f85fc;
        color: #ffffff;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }

      .money_box {
        padding-bottom: 25px;
        overflow: hidden;
        background: #47a8fb;

        .img {
          padding: 25px;
        }
        .money {
          width: 250px;
          margin-top: 25px;
          .t1 {
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }

  .right_detail {
    margin-top: 30px;
    padding: 20px 30px;
    background: #393f48;
    color: #ffffff;
    .til {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }

    .detail_lis {
      li {
        margin-top: 20px;
        overflow: hidden;
        .b1 {
          padding-right: 50px;
        }
        .b2 {
          width: 210px;
          .t1 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  // 下载文件
  .download {
    margin-top: 30px;
    padding: 20px 30px;
    background: #393f48;
    color: #ffffff;

    .til {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }

    .file {
      li {
        margin-top: 20px;
      }
      img {
        margin-right: 30px;
      }
      span {
        font-size: 18px;
      }
    }
  }

  // 场地数据
  .placeData {
    margin-top: 40px;
    .til {
      font-size: 24px;
    }

    .dataBox_bac {
      // height: 300px;
      padding: 30px 60px;
      background: #cee1fa;

      .dataBox {
        // height: 200px;
        padding: 20px;
        background: #ffffff;
        ul {
          overflow: hidden;
          li {
            overflow: hidden;
            padding: 0 3px;
            float: left;
            width: 250px;
            height: 260px;
            border-right: 1px solid #cdcdcd;

            .til {
              padding: 10px 0 10px 20px;
              color: #2f85fc;
              font-size: 24px;
              font-weight: 600;
            }
            .text {
              height: 170px;
              overflow: hidden;
              line-height: 28px;
              padding-left: 10px;
              padding-bottom: 20px;
              padding: 0 10px 20px 10px;
            }
          }
          li:last-child {
            border: 0;
          }
        }
      }
    }
  }

  // 场地地图
  .placeMap_box {
    margin-top: 60px;

    .top {
      height: 50px;
      margin-bottom: 30px;
      .til {
        font-size: 24px;
      }

      .submit_but {
        cursor: pointer;
        margin-left: 30px;
        margin-top: -17px;
        width: 270px;
        height: 70px;
        line-height: 70px;
        background: #40aa3f;
        color: #ffffff;
        font-size: 26px;
        text-align: center;
      }
    }
  }

  // 相关案例
  .case {
    .caseList {
      overflow: hidden;
    }
    .lis:nth-child(even) {
      margin-left: 20px;
    }
    .lis {
      float: left;
      background-color: #ffffff;
      overflow: hidden;
      width: 586px;
      margin-bottom: 30px;
      border-radius: 4px;
      .img {
        // margin-right: 30px;
        width: 280px;
        height: 205px;
        img {
          width: 280px;
          height: 205px;
        }
      }

      .caseText {
        padding: 20px;
        width: 260px;
        color: #313131;
        .til {
          font-weight: 600;
          font-size: 20px;
        }
        .tex {
          overflow: hidden;
          font-size: 14px;
          color: #999;
          height: 80px;
          margin: 16px 0;
        }
      }
    }
  }
}
</style>