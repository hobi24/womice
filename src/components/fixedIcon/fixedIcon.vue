<!--  -->
<template>
  <div class="fixedIcon_bac">

    <div class="rel" id="rel">
      <div class="rel_but">联系客服</div>
      <div class="rel_box">
        <ul>
          <li>
            <p class="mobile">
              <img src="../../assets/imges/mobile.png" alt="">
            </p>
            <p class="number">
              <i>电话：0755-23890088</i>
            </p>
          </li>
          <li>
            <p class="mobile">
              <img src="../../assets/imges/mobile.png" alt="">
            </p>
            <p class="number">
              <i>传真：0755-23890089</i>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="fixedIcons" id="icons">
      <ul>
        <li title="点击申请驻入" @click="goJoinPage()">
          <img src="../../assets/imges/joinIcon.png" alt="">
        </li>

        <li title="点击进入沃麦斯官方微博">
          <a href="https://weibo.com/womice" target="_blank">
            <img src="../../assets/imges/weiboIcon.png" alt="">
          </a>
        </li>
        <li class="wxIcon">
          <img src="../../assets/imges/wechatIcon.png" alt="">
          <img src="../../assets/imges/wxCodeleft.png" alt="" class="wxCode">
        </li>
        <!-- <li title="投诉与反馈" @click="goJoinPage()"><img src="../../assets/imges/relationIcon.png" alt=""></li> -->
        <li @click="toTop()"><img src="../../assets/imges/toTopIcon.png" alt="" title="点击回到页面顶部"></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolly: false
    };
  },

  components: {},

  computed: {},

  mounted() {
    // 持续监控页面下拉高度
    window.addEventListener("scroll", () => {
      this.getScrollY();
    });
  },

  methods: {
    //   点击回到顶部
    toTop() {
      window.scrollTo(0, 0);
    },

    // 点击进入申请驻入页面
    goJoinPage() {
      this.$router.push({ path: "/join" });
    },

    // 判断页面下翻一定距离出现右下角小图标
    getScrollY() {
      // let y = window.scrollY;
      var y =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      let icons = document.getElementById("icons");
      if (y > 200) {
        icons.style.display = "block";
      } else {
        icons.style.display = "none";
      }
    }
  }
};
</script>

<style lang='scss' scoped>
// 联系客服
div.rel:hover {
  right: 2px;
}

.rel {
  cursor: pointer;
  position: fixed;
  right: -245px;
  bottom: 400px;
  transition: right 0.5s;

  .rel_but {
    position: relative;
    left: -66px;
    top: 67px;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.5);
    //   border: 1px solid rgba($color: #313131, $alpha: 0.1);
    width: 100px;
    height: 35px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    border-radius: 2px;
    background: #2f85fc;
    color: #ffffff;
    transform: rotate(-90deg);
  }

  .rel_box {
    padding: 20px;
    width: 200px;
    //   height: 200px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.5);
    border-left: 3px solid #2f85fc;

    ul {
      li {
        overflow: hidden;
        margin-bottom: 15px;
        p {
          float: left;
        }
        .mobile {
          margin-right: 10px;
        }
      }
    }
  }
}
// 联系客服结束

.fixedIcons {
  display: none;
  position: fixed;
  bottom: 50px;
  right: 50px;
  ul {
    li {
      cursor: pointer;
      padding: 10px;
      margin-bottom: 3px;
      border-radius: 5px;
      background: rgba($color: #000000, $alpha: 0.6);
      // background: #999999;
      width: 30px;
      height: 30px;

      .wxCode {
        display: none;
        position: absolute;
        top: 70px;
        right: 60px;
      }
    }

    .wxIcon:hover .wxCode {
      display: block;
    }

    li:last-child {
      background: transparent;
      padding-left: 13px;
    }
  }
}
</style>