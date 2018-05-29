<!--  -->
<template>
  <div class="center detail_bac">
    <p class="tilStyle" style="text-align: center;">{{list.title}}</p>
    <div v-html="list.txt" style="margin-bottom:200px;"></div>
    <!-- <discuss></discuss> -->
      <discuss :typeId='id'></discuss>
    
  </div>

</template>

<script>
import discuss from "../place/discuss";
export default {
  data() {
    return {
      list:'',//详情数据
      detail: "", //内容
      id:localStorage.messageId,//id
      title: "" ,//标题
    };
  },

  components: {
    discuss
  },

  computed: {},

  mounted() {
    this.getDetail();
    // this.detail = this.$route.params.detail;
    // this.title = this.$route.params.title;
    // this.id = this.$route.params.id;
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
.detail_bac {
  padding: 100px 0;
  color: #666;
  line-height: 30px;
  font-size: 18px;
}
</style>