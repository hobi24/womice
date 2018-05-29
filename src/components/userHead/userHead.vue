<!-- 用户头像 -->
<template>
  <div class="userHead_bac">
	  <p class="img"><img src="../../assets/imges/wechat.png" alt=""></p>
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
.userHead_bac {
  width: 260px;
  height: 280px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee;
  .img {
    text-align: center;
    img {
      width: 80px;
      height: 80px;
      // margin: 0 auto;
      margin: 40px 0;
    }
  }
}
</style>