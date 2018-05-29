<!--  -->
<template>
  <div class="serviceDetailBac">
    <div class="center">
      <div class="box1">
        <div class="img left"><img :src="list.titleImg" alt=""></div>
        <div class="text left">
          <p class="til">{{list.title}}</p>
          <p class="money">
          </p>
          <div class="num">
            <i style="color:#FE6969;font-size:18px;font-weight:600;">￥{{list.price}}</i> 元/天
            <!-- <span>场地面积：168 平方米</span>
            <span>人流量：3500 人/天</span>
            <span>位置：室内</span> -->
          </div>
          <div class="address">地址：{{list.address}}</div>
          <div class="phone">
            <i class="iconfont icon-phone6dianhua" style="color:#2F85FC"></i> {{list.tel}}
            <button class="but">加入询价清单</button>
          </div>
        </div>
      </div>

      <!-- 商家详情 -->
      <div class="box2">
        <p class="til">商家详情</p>
        <div class="content" v-html="list.txt">
        </div>
      </div>

      <!-- 精品案例 -->
      <div class="box2">
        <p class="til">精品案例</p>
        <div class="content">案例
        </div>
      </div>
      <discuss :typeId='id'></discuss>

    </div>
  </div>
</template>

<script>
import discuss from "../place/discuss";
export default {
  data() {
    return {
      id: localStorage.contentId, //服务id
      list:[],//服务数据
      
    };
  },

  components: {
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

      this.$http
        .get(this.urlIp + `/api/content/get.jspx?id=${this.id}`)
        .then(res => {
          this.list = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          this.serveErr();
        });
    },
  }
};
</script>

<style lang='scss' scoped>
.serviceDetailBac {
  background-color: #f6f8f9;
  padding: 40px 0;
  color: #313131;
}
.box1 {
  overflow: hidden;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
  padding: 20px 0 50px 20px;
  // box-shadow: 0 0 8px #cccccc;
  .img {
    width: 480px;
    height: 300px;
    img {
      width: 480px;
      height: 300px;
    }
  }

  .text {
    padding-top: 20px;
    margin-left: 50px;
    width: 567px;
    .til {
      font-size: 20px;
      color: #313131;
      font-weight: 600;
    }
    .money {
      margin: 30px 0 20px 0;
      padding-left: 30px;
    }
    .num {
      height: 60px;
      background-color: #f8f8f8;
      padding: 30px 0 0 30px;
      span {
        // display: block;
        float: left;
        margin-bottom: 30px;
        width: 300px;
      }
    }
    .address {
      margin: 26px 0 30px 0;
    }
    .but {
      float: right;
      margin-right: 160px;
    }
  }
}

.box2 {
  width: 800px;
  margin-top: 40px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  .til {
    padding: 10px 20px;
    font-size: 18px;
    color: #313131;
    font-weight: 600;
    border-bottom: 1px solid #e5e5e5;
  }
  .content {
    padding: 20px;
  }
}
</style>