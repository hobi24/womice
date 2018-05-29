<!-- 订单列表 -->
<template>
  <div class="inquiry_bac">
    <div class="tabs">
      <ul id="letter-tab">
        <li @click="chooseNow(0)">全部订单
        </li>
        <li @click="chooseNow(1)">询价中
        </li>
        <li @click="chooseNow(2)">已完成
        </li>
      </ul>
    </div>

    <!-- 列表内容 -->
    <div class="content">
      <ul>
        <li>
          <!-- 左侧图片 -->
          <div class="left img">
            <img src="../../../assets/imges/var6.png" alt="">
          </div>

          <!-- 右侧描述 -->
          <div class="left text">
            <p class="name">HQ by Terrace Concepts</p>
            <p class="numPeople" style="width:100px;">
              <i>80</i> 座位人数</p>
            <p class="gps" style="width:80px;">
              <img src="../../../assets/imges/gps.png" alt=""> 深圳</p>
            <!-- 删除按钮 -->
            <p class="delete">
              <img src="../../../assets/imges/delete.png" alt="">
            </p>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted() {
    this.chooseNow(0);
  },
  methods: {
    chooseNow(index) {
      let lis = document
        .getElementById("letter-tab")
        .getElementsByTagName("li");
      for (let li of lis) {
        li.className = "";
      }
      lis[index].className = "choose";
    }
  }
};
</script>

<style lang='scss' scoped>
.inquiry_bac {
  padding-bottom: 30px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee; // 导航栏
  .tabs {
    ul {
      padding: 0 30px;
      overflow: hidden;
      border-bottom: 1px solid #eeeeee;
      .choose {
        color: #313131;
        border-bottom-color: #1e1e1e;
      }
      li {
        cursor: pointer;
        float: left;
        margin-right: 50px; // a {
        display: block; // width: 110px;
        height: 65px;
        line-height: 65px;
        font-size: 18px;
        font-family: MicrosoftYaHei; // color: #313131;
        color: #919191;
        text-align: center;
        border-bottom: 2px solid transparent; // }
      }
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

        //div1    左侧图片
        .img {
          margin-right: 20px;
          img {
            width: 150px;
            height: 100px;
          }
        }

        //div2  内容描述
        .text {
          overflow: hidden;
          font-size: 16px;
          width: 650px;
          // margin: 15px 0 20px 0;
          p {
            float: left;
            width: 90px;
            height: 100px;
            line-height: 100px;
            padding-right: 30px;
            i {
              font-size: 18px;
              color: #313131;
              font-weight: 700;
            }
          }
          .name {
            width: 240px;
            font-size: 18px;
            font-weight: 700;
            color: #313131;
          }
          .gps {
            margin: 0 50px;
          }
          .delete {
            width: 20px;
            float: right;
            cursor: pointer;
            padding-right: 0;
            line-height: 100px;
          }
        }
      }
    }
  }
}
</style>