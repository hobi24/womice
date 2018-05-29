<!-- 网页底部 -->
<template>
  <div class="bac">
    <div class="center">
      <div class="main">
        <div class="tabs">
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/about">关于WOMICE</router-link>
            </li>
            <li>
              <router-link to="/about/contact">联系我们</router-link>
            </li>
            <li>
              <router-link to="/">条款及条件</router-link>
            </li>
            <li>
              <router-link to="/">目的地</router-link>
            </li>
            <li>
              <router-link to="/">服务协议</router-link>
            </li>
          </ul>
        </div>
        <div class="friends">
          <ul>
            <li>友情链接：</li>
            <li>
              <a href="https://www.hao123.com" target="_blank">展览信息</a>
            </li>
            <li>
              <a href="https://www.hao123.com" target="_blank">活动行</a>
            </li>
            <li>
              <a href="https://www.hao123.com" target="_blank">国际展会</a>
            </li>
            <li>
              <a href="https://www.hao123.com" target="_blank">北京度假村</a>
            </li>
            <li>
              <a href="https://www.hao123.com" target="_blank">上海礼仪公司</a>
            </li>
            <li>
              <a href="https://www.hao123.com" target="_blank">重启中国旅行社</a>
            </li>
            <li>
              <a href="https://www.hao123.com" target="_blank">异业合作</a>
            </li>
            <li>
              <a href="https://www.hao123.com" target="_blank">八戒商业装修</a>
            </li>
            <li>
              <a href="https://www.hao123.com" target="_blank">88酒店网</a>
            </li>
          </ul>
        </div>
        <div class="box1 left">
          <p class="til">为什么你需要WOMICE？</p>
          <p class="text">
            WOMICE免费协助你寻找和预定最佳的活动场地<br> 我们把场地集合在此，使你可以快速、简单寻找适合你需要的场地。
          </p>
        </div>
        <div class="box2 left">
          <ul>
            <li>关于WOMICE</li>
            <li>
              <router-link to="/about">公司简介</router-link>
            </li>
            <li>
              <router-link to="/about/toWe">加入我们</router-link>
            </li>
            <li>
              <router-link to="/about">服务声明</router-link>
            </li>
          </ul>
        </div>
        <div class="box3 left">
          <ul>
            <li>WOMICE服务</li>
            <li>
              <router-link to="/about">客户案例</router-link>
            </li>
            <li>
              <router-link to="/about/toWe">产品体系</router-link>
            </li>
          </ul>

        </div>
        <div class="box4 left">
          <ul>
            <li>客服服务</li>
            <li>0755—23890088</li>
            <li>（早9:00-晚10:00）</li>
            <li>panguifen@womice.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="center">
        <div class="left logo">
          <p class="img left">
            <img src="../../assets/imges/logo.png" alt="">
          </p>
          <p class="text left">© 2011~2017深圳沃麦斯文化传媒有限公司<br> ALL Rights Reserved.
          </p>
        </div>
        <div class="right share">
          <ul>
            <!-- <li><a class="a1">
							<img class="shareCode1" src="../../assets/imges/logo.png" alt="">
							<img class="img" src="../../assets/imges/footQQ.png" alt="">
							</a></li> -->
            <li>
              <a class="a2">
                <img class="shareCode2" src="../../assets/imges/wxCodeUp.png" alt="">
                <img class="img" src="../../assets/imges/footWechat.png" alt="">
              </a>
            </li>
            <li>
              <a class="a3" href="https://weibo.com/womice" target="_blank" title="点击进入沃麦斯官方微博">
                <!-- <img class="shareCode3" src="../../assets/imges/wxCodeUp.png" alt=""> -->
                <img class="img" src="../../assets/imges/footWeibo.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
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
  mounted: {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.bac {
  overflow: hidden;
  height: 462px;
  background: url("../../assets/imges/footBac.png") no-repeat;
  background-size: 100% 100%;
  .main {
    height: 364px;
    .tabs {
      ul {
        overflow: hidden;
      }
      padding: 56px 0 30px 0;
      li {
        float: left;
        margin-right: 60px;
        a {
          color: #fff;
          font-size: 18px;
          font-family: MicrosoftYaHei-Bold;
        }
      }
    }
    .friends {
      padding-bottom: 50px;
      ul {
        overflow: hidden;
      }
      li:first-of-type {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: rgba(238, 238, 238, 1);
      }
      li {
        float: left;
        margin-right: 20px;
        a {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
    .box1 {
      width: 368px;
      margin-right: 100px;
      .til {
        font-size: 30px;
        font-family: MicrosoftYaHei-Bold;
        color: #fff;
        padding-bottom: 30px;
      }
      .text {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #aaa;
        line-height: 30px;
      }
    }
    .box2,
    .box3,
    .box4 {
      margin-right: 100px;

      li:first-of-type {
        font-size: 18px;
        font-family: MicrosoftYaHei;
        color: rgba(238, 238, 238, 1);
      }
      li {
        padding-bottom: 23px;
        color: rgba(153, 153, 153, 1);
        a {
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
    .box4 {
      margin: 0;
      li {
        padding-bottom: 15px;
      }
      li:nth-of-type(2) {
        font-size: 24px;
      }
    }
  }
  .bottom {
    background: #212121;
    height: 98px;
    .logo {
      padding-top: 20px;
      .text {
        padding: 5px 0 0 10px;
        color: #fff;
      }
    }
    .share {
      padding-right: 50px;
      position: relative;
      li {
        padding: 25px 20px 0;
        float: right;
        .a1:hover .shareCode1 {
          display: block;
        }
        .a2:hover .shareCode2 {
          display: block;
        }
        // .a3:hover .shareCode3 {
        //   display: block;
        // }
        .img {
          width: 40px;
          height: 40px;
        }
        .shareCode1,
        .shareCode2,
        .shareCode3 {
          display: none;
          position: absolute;
          right: 10px;
          top: -110px;
        }
        .shareCode2 {
          right: 30px;
        }
        // .shareCode3 {
        //   right: 113px;
        // }
      }
    }
  }
}
// div {
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   height: 100px;
//   line-height: 100px;
//   margin-top: 300px;
//   background: #cccccc;
// }
</style>