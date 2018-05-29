<!--  -->
<template>
	<div>
		<!-- 轮播图 -->
		<div class="banner center">
			<div class="banner_box left" @mouseover="stopNext()" @mouseout="keepNext()">
				<!-- <ul id="lis" v-bind:style="{left : lisLeft+'px',transition: leftTime + 's'}"> -->
				<ul id="lis" v-bind:style="{left : lisLeft+'px'}">
					<li v-for="list of messageList"><img :src="list.titleImg" @click="toDetail(list.id)" alt="" /></li>
				</ul>

				<!-- <ul id="onBut" :style="{marginLeft: (messageList.length * -11) + 'px'}"> -->
				<ul id="onBut">
					<li v-for="(list,index) of messageList" name='but' @click="onBut(index)"></li>
				</ul>

				<p class="lef" @click="up()"><img src="../../assets/imges/lef.png" alt=""></p>
				<p class="rig" @click="next()"><img src="../../assets/imges/rig.png" alt=""></p>
			</div>
			<!-- ==================轮播图======================= -->

		</div>

	</div>
</template>

<script>
export default {
  data() {
    return {
      messageList: [],
      lisLeft: 0,
      leftTime: 1,
      setInt: "",
      list: [],
      type: 97 //查询资讯的类型
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getMessageList();
    // this.onBut(0);
    // this.timeNext();
  },

  methods: {
    /**
     * 获取资讯列表数据
     */
    getMessageList() {
      let d = {
        channelIds: 95, //资讯的查询id
        // channel: "新闻资讯",
        recommend: true, //查询是否是推荐场地列表,true为推荐，‘’为全部
        first: 0, //查询开始下标  非必选  默认0
        count: 5 //查询数量  非必选  默认10
      };
      console.log(d);

      this.$http
        .get(this.urlIp + "/api/content/list.jspx", { params: d })
        .then(res => {
          this.messageList = res.data.data;
          this.onBut(0);
          this.timeNext();
          console.log(this.messageList);
        })
        .catch(err => {
          this.serveErr();
        });
    },
    /**
     * 轮播图，每个图片宽度是800px
     */
    // 轮播图上一页
    up() {
      this.lisLeft = this.lisLeft + 800;
      if (this.lisLeft > 0) {
        // this.lisLeft = -2400;
        this.lisLeft = -(this.messageList.length - 1) * 800;
      }

      let i = this.lisLeft / -800;
      this.onBut(i);
    },

    // 轮播图下一页
    next() {
      this.lisLeft = this.lisLeft - 800;

      if (this.lisLeft <= -this.messageList.length * 800) {
        this.lisLeft = 0;
      }

      let i = this.lisLeft / -800;
      this.onBut(i);
    },

    // 轮播图小白点
    onBut(index) {
      // let onButs = document.getElementById("onBut").getElementsByTagName("li");
      //   let onButs = document.getElementById("onBut").children;
      let onButs = document.getElementsByName("but");
      for (const li of onButs) {
        li.style.background = "transparent";
      }
      onButs[index].style.background = "#fff";

      this.lisLeft = -800 * index;
    },

    // 定时器自动播放
    timeNext() {
      this.setInt = setInterval(() => {
        this.next();
      }, 2000);
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
// 轮播图
.banner_box {
  position: relative;
  overflow: hidden;
  height: 424px;
  width: 800px;
  margin: 50px 0;

  // 左右翻页按钮
  .rig,
  .lef {
    cursor: pointer;
    width: 40px;
    // height: 40px;
    // line-height: 40px;
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

  // 轮播图下面的小白圈
  ul#onBut {
    position: absolute;
    top: 400px;
    left: 50%;
    // margin-left: -80px;
    // width: 100px;

    li {
      cursor: pointer;
      float: left;
      width: 10px;
      height: 10px;
      margin-right: 15px;
      border: 1px solid #ffffff;
      border-radius: 6px;
    }

    li:last-child {
      margin-right: 0;
    }
  }
}
// ==================轮播图===================
</style>