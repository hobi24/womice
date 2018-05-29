<!--  -->
<template>
	<div class="saveShare">
		<p class="til">发表分享</p>

		<div class="content">
			<div class="user">
				<p>文章标题:</p>
				<div>
					<textarea name="" id="" cols="30" rows="10" style="height:20px;font-size:18px;" v-model="title"></textarea>
				</div>
			</div>
			<div class="user">
				<p>文章内容:</p>
				<div>
					<textarea name="" id="" cols="30" rows="10" style="height:200px;" v-model="text"></textarea>
				</div>
			</div>

			<div class="but" @click="save">发表分享</div>
		</div>

	</div>
</template>

<script>
export default {
  data() {
    return {
      title: "", //标题
      text: "" //分享内容
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    /**@augments
     * 发表分享
     */
    save() {
      if (!this.title) {
        alert("请输入标题！");
        return;
      } else if (!this.text) {
        alert("请输入内容!");
        return;
      }

      let d = {
        appId: 1,
        sessionKey: localStorage.sessionKey,
        channelId: 103,
        title: this.title,
        txt: this.text
      };
      console.log(d);

      this.$http
        .post(this.urlIp + "/api/content/save.jspx", this.qs.stringify(d))
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            alert("发表分享成功");
            this.title = "";
			this.text = "";
			this.$router.push({path:'/userCenter/userShare'});//评论成功后回到分享页面
          } else {
            alert(res.data.message);
          }
        })
        .catch(err => {
          this.serveErr();
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.saveShare {
  padding-bottom: 30px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eee;
  height: 800px;

  .til {
    font-size: 18px;
    font-weight: 700;
    padding-left: 30px;
    height: 65px;
    color: #313131;
    line-height: 65px;
    border-bottom: 1px solid #eee;
  }

  .content {
    padding: 30px;
    .user {
      margin-bottom: 20px;
      overflow: hidden;
      p {
        height: 35px;
        line-height: 35px;
        float: left;
        width: 80px;
        font-size: 16px;
        color: #000000;
        font-family: PingFang-SC-Bold;
      }
      div {
        float: left;
        // padding: 10px 0 24px 0;
        input {
          font-size: 110%;
          font-size: 14px;
          padding-left: 10px;
          width: 300px;
          height: 35px;
          background: #fff;
          border-radius: 3px;
          border: 1px solid #e1e1e1;
        }
      }
    }

    .but {
      width: 200px;
      margin-top: 40px;
      margin-left: 80px;
    }
  }
}
</style>