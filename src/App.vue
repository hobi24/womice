<template>
  <div id="app">
    <headertop></headertop>
    <!-- <div class="center">
          <img src="./assets/logo.png">
        </div> -->
    <router-view/>
    <fixed-icon></fixed-icon>
    <footw></footw>
  </div>
</template>

<script>
import headertop from "./components/header/header.vue";
import footw from "./components/footw/footw.vue";
import fixedIcon from "./components/fixedIcon/fixedIcon";
export default {
  name: "app",
  components: {
    headertop,
    footw,
    fixedIcon
  },
  data: {

  },
   mounted() {
  },
  methods: {
  }
};
</script>

<style lang='scss'>
// a {
//   color: #000000;
// }
// .left {
//   float: left;
// }
// .right {
//   float: right;
// }
// /* 页面居中类 */
// .center {
//   width: 1200px;
//   margin: 0 auto;
// }
// // 按钮样式
// .but {
//   background: rgba(47, 133, 252, 1);
//   color: #fff;
//   text-align: center;
//   font-size: 16px;
//   width: 100px;
//   height: 40px;
//   line-height: 40px;
//   border-radius: 4px;
//   cursor: pointer;
// }
// $baseColor:#2F85FC;
</style>
