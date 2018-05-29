<!--  -->
<template>
  <!-- 轮播图 -->
  <div class="banner center">
    <div class="banner_box left" @mouseover="stopNext()" @mouseout="keepNext()">
      <ul id="lis" v-bind:style="{left : lisLeft+'px'}">
        <li v-for="list of banData"><img :src="list" alt="" /></li>
      </ul>

      <p class="lef" @click="up()"><img src="../../assets/imges/lef.png" alt=""></p>
      <p class="rig" @click="next()"><img src="../../assets/imges/rig.png" alt=""></p>
    </div>
    <div class="clear"></div>
    <!-- 下面的缩略图 -->
    <div class="bot">
      <ul id="botImg">
        <li v-for="(list,index) of banData">
          <img @click="onBut(index)" @mouseover="stopNext()" @mouseout="keepNext()" class="img" :src="list" alt="" />
          <div class="meng" name='meng' @click="onBut(index)"></div>
        </li>
      </ul>
    </div>
    <!-- ============地下的缩略图=========== -->

  </div>
  <!-- ==================轮播图======================= -->
</template>

<script>
export default {
  data() {
    return {
      lisLeft: 0,
      // bannerImgData: [
      //   {
      //     imgUrl: "../../../src/assets/imges/messageBanner.png",
      //     id: 1
      //   },
      //   {
      //     imgUrl: "../../../src/assets/imges/var5.png",
      //     id: 2
      //   },
      //   {
      //     imgUrl: "../../../src/assets/imges/var6.png",
      //     id: 3
      //   },
      //   {
      //     imgUrl: "../../../src/assets/imges/var4.png",
      //     id: 4
      //   },
      //   {
      //     imgUrl: "../../../src/assets/imges/var2.png",
      //     id: 5
      //   }
      // ]
    };
  },

  props: ["banData"],

  components: {},

  computed: {},

  mounted() {
    this.onBut(0);
    this.timeNext();

  },
  // 退出当前页面的生命周期
  beforeDestroy: function() {
    this.stopNext();
  },
  methods: {
    /**
     * 轮播图，每个图片宽度是800px
     */
    // 轮播图上一页
    up() {
      this.lisLeft = this.lisLeft + 800;
      if (this.lisLeft > 0) {
        // this.lisLeft = -2400;
        this.lisLeft = -(this.banData.length - 1) * 800;
      }

      let i = this.lisLeft / -800;
      this.onBut(i);
    },

    // 轮播图下一页
    next() {
    // console.log(this.banData);
      
      this.lisLeft = this.lisLeft - 800;

      if (this.lisLeft <= -this.banData.length * 800) {
        this.lisLeft = 0;
      }

      let i = this.lisLeft / -800;
      this.onBut(i);
    },

    // 轮播图小白点
    onBut(index) {
      // let onButs = document.getElementById("onBut").getElementsByTagName("li");
      let onButs = document.getElementById("botImg").children;
      for (const li of onButs) {
        li.style.borderColor = "transparent";
        li.getElementsByClassName("meng")[0].style.display = "block";
      }
      onButs[index].style.borderColor = "#2F85FC";
      onButs[index].getElementsByClassName("meng")[0].style.display = "none";

      this.lisLeft = -800 * index;
    },

    // 定时器自动播放
    timeNext() {
      this.setInt = setInterval(() => {
        this.next();
      }, 2500);
    },

    // 鼠标悬浮图片时清除自动播放
    stopNext() {
      clearInterval(this.setInt);
    },

    // 鼠标离开图片时继续自动播放
    keepNext() {
      clearInterval(this.setInt);
      this.timeNext();
    }
  }
};
</script>

<style lang='scss' scoped>
.banner {
  // border: 3px solid #eeeeee;
  width: 800px;
  padding: 5px;
  margin-top: 50px;
}
// 轮播图
.banner_box {
  position: relative;
  overflow: hidden;
  height: 424px;
  width: 800px;
  margin-bottom: 10px;

  // 左右翻页按钮
  .rig,
  .lef {
    cursor: pointer;
    width: 40px;
    padding: 10px 0 7px;
    border-radius: 4px;
    text-align: center;
    position: absolute;
    right: 20px;
    top: 48%;
    background: rgba($color: #000000, $alpha: 0.5);
    img {
      width: 24px;
      height: 24px;
    }
  }

  .lef {
    right: 0;
    left: 20px;
  }

  ul#lis {
    height: 424px;
    width: 600%;
    position: absolute;
    // left: 0;
    transition-property: left;

    li {
      float: left;
      width: 800px;
      height: 424px;
      img {
        width: 800px;
        height: 424px;
      }
    }
  }
}

// 轮播图下面的缩略图
.bot {
  height: 110px;
  width: 800px;
  overflow: hidden;
  // border: 4px solid #eeeeee;
  ul#botImg {
    padding-left: 5px;
    float: left;
    z-index: 1;
    // overflow: hidden;
    // width: 800px;

    li {
      cursor: pointer;
      float: left;
      width: 130px;
      height: 100px;
      margin-right: 5px;
      border: 1px solid #ffffff;
      padding: 2px;
      border: 3px solid transparent;
      position: relative;

      .img {
        // border-radius: 4px;
        background: rgba(0, 0, 0, 0.5);
        width: 130px;
        height: 100px;
      }

      .meng {
        position: absolute;
        top: 0;
        background: rgba($color: #ffffff, $alpha: 0.4);
        width: 130px;
        height: 105px;
      }
    }

    li:last-child {
      margin-right: 0;
    }
  }
}
// ==================轮播图===================
</style>