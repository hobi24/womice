<!--  -->
<template>
  <div class="bindAccount_bac">
    <p class="bind_til">绑定账号</p>

    <ul class="content">
      <li>
        <p class="img"><img src="../../../assets/imges/qq.png" alt=""></p>
        <p class="isBind">你还未绑定QQ</p>
        <p>
          <button class="but">立即绑定</button>
        </p>
      </li>

      <li>
        <p class="img"><img src="../../../assets/imges/wechat.png" alt=""></p>
        <p class="isBind">你还未绑定微信</p>
        <p>
          <button class="but">立即绑定</button>
        </p>
      </li>
    </ul>

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
.bindAccount_bac {
  padding-bottom: 30px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee;
  height: 800px;

  .bind_til {
     font-size: 18px;
    font-weight: 700;
    padding-left: 30px;
    height: 65px;
    color: #313131;
    line-height: 65px;
    border-bottom: 1px solid #eee;
  }

  .content {
    li {
      // height: 110px;
      overflow: hidden;
      border-bottom: 1px solid #eee;

      p {
        float: left;
        height: 110px;
        line-height: 110px;
      }

      .img {
        height: 60px;
        padding-top: 25px;
        padding-left: 30px;
        img {
          width: 60px;
          height: 60px;
        }
      }

      .isBind {
        margin: 0 280px 0 40px;
        font-size: 16px;
        color: #313131;
      }

      .but {
        font-size: 16px;
        width: 120px;
      }
    }
  }
}
</style>