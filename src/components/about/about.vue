<!-- 关于我们 -->
<template>
  <div>
    <div class="banner">
      <img src="../../assets/imges/about-banner.png" alt="">
    </div>
    <div class="center">
      <div class="content">
        <div class="tabs">
          <ul id="about-lis">
            <li @click="toNewAbout(0)">
              <router-link to="/about" style="background: #2F85FC;color: #fff;">关于我们</router-link>
            </li>
            <li @click="toNewAbout(1)">
              <router-link to="/about/team">精英团队</router-link>
            </li>
            <li @click="toNewAbout(2)">
              <router-link to="/about/toWe">加入我们</router-link>
            </li>
            <li @click="toNewAbout(3)">
              <router-link to="/about/contact">联系我们</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import our from './child/our';
  export default {
    data() {
      return {};
    },
    components: {
      our
    },
    computed: {},
    mounted: {},
    methods: {
      toNewAbout(index) {
        // 设计点击tabs颜色更改 start
        let lis = document.getElementById('about-lis').getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
          let a = lis[i].getElementsByTagName('a')[0];
          a.style.background = "#f2f2f2"; 
          a.style.color = "#313131"; 
        }
        // lis[index].getElementsByTagName('a')[0].style = "background: #2F85FC;color: #fff;";
        lis[index].getElementsByTagName('a')[0].style.background = "#2F85FC";
        lis[index].getElementsByTagName('a')[0].style.color = "#ffffff";
        // 设计点击tabs颜色更改 end
      }
    }
  }
</script>

<style lang='scss' scoped>
  .banner {
    // margin: 0 auto;
    // position: relative;
    // left: 50%;
    // margin-left: -1000px;
    // padding-bottom: 40px;
    img {
      vertical-align: top;
      width: 100%;
      height: 254px;
    }
  }
  .content {
    padding-bottom: 80px;
    .tabs {
      padding-bottom: 60px;
      height: 42px;
      .choose {
        background: #2F85FC;
        color: #fff;
      }
      li {
        a {
          display: block;
          height: 42px;
          width: 300px;
        }
        cursor: pointer;
        float: left;
        width: 300px;
        height: 42px;
        line-height: 42px;
        font-size: 16px;
        text-align: center;
        background: #F2F2F2;
        color: #313131;
      }
      
    }
  }
</style>