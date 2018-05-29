<!--  -->
<template>
  <div class="classPage_bac">
    <div class="classPage">
      <ul class="first">
        <li @click="firstPage">
          <button>首页</button>
        </li>
        <li @click="up">
          <button style="width:40px;font-size:24px;">
            <</button>
        </li>
      </ul>
      <ul id="choose">
        <li v-for="(list,index) of indexData" @click="choose(list)">
          <button name="but">{{list}}</button>
        </li>
      </ul>
      <ul class="last">
        <li @click="next">
          <button style="width:40px;font-size:24px;">></button>
        </li>
        <li @click="lastPage">
          <button>尾页</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chooseIndex: 1,
      mostIndex: 10,
      indexData: []
    };
  },

  props: ["allPage"], //父组件传过来的总页面

  components: {},

  computed: {},

  mounted() {
    this.pageList();
  },

  methods: {
    pageList() {
      // this.mostIndex = this.allPage ? this.allPage : 1; //总共页面

      for (let index = 1; index <= this.mostIndex; index++) {
        this.indexData.push(index); //将一共多少页加入到数组indexDataz中
      }
      //   初始化选择状态
      setTimeout(() => {
        this.chooseResult();
      }, 500);

      // console.log(this.indexData);
    },

    callMethod() {
      this.$emit("childMethod", this.chooseIndex);
      //第一个参数名为调用的方法名，第二个参数为需要传递的参数
    },
    /**
	  选择页码
	   */
    choose(index) {
      this.chooseIndex = index;
      // this.$emit("childMethod", this.chooseIndex);
      this.callMethod();
      this.chooseResult();
    },

    /**@augments
     * 下一页
     */
    next() {
      if (this.chooseIndex < this.mostIndex) {
        this.chooseIndex += 1;
        this.callMethod();
        this.chooseResult();
      }
    },

    /**@augments
     * 上一页
     */
    up() {
      if (this.chooseIndex > 1) {
        this.chooseIndex -= 1;
        this.callMethod();
        this.chooseResult();
      }
    },

    /**@augments
     * 选择首页
     */
    firstPage() {
      this.chooseIndex = 1;
      this.callMethod();
      this.chooseResult();
    },

    /**@augments
     * 选择尾页
     */
    lastPage() {
      this.chooseIndex = this.mostIndex;
      this.callMethod();
      this.chooseResult();
    },

    /**@augments
     * 选择后的结果
     */
    chooseResult() {
      //   let list = document.getElementById("choose").getElementsByTagName('button').children;
      let list = document.getElementsByName("but");
      for (const li of list) {
        li.className = "";
        li.style.display = "none";
      }
      list[this.chooseIndex - 1].className = "choose";

      if (this.chooseIndex > 0 && this.chooseIndex < 3) {
        // 显示前五个按钮
        for (let i = 0; i <= 4; i++) {
          list[i].style.display = "block";
        }
      } else if (
        this.chooseIndex <= this.mostIndex &&
        this.chooseIndex > this.mostIndex - 5
      ) {
        //   显示后五个按钮
        for (let b = this.mostIndex - 1; b >= this.mostIndex - 5; b--) {
          list[b].style.display = "block";
        }
      } else {
        // 选择的按钮居中
        for (let j = this.chooseIndex - 1 - 2; j <= this.chooseIndex + 1; j++) {
          list[j].style.display = "block";
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.classPage_bac {
  padding: 20px 0 100px;
}
.classPage {
  overflow: hidden;
  width: 480px;
  margin: 0 auto;
  // position: absolute;
  // left: 50%;
  // margin-left: -240px;
  ul {
    overflow: hidden;
    float: left;
    li {
      float: left;

      button {
        cursor: pointer;
        color: #616161;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        text-align: center;
        line-height: 30px;
        margin-right: 10px;
        margin-bottom: 5px;
        font-size: 16px;
        width: 35px;
        height: 35px;
      }
    }
    li:hover {
      // color: #2F85FC;
    }
    .choose {
      background: #2f85fc;
      color: #ffffff;
    }
  }

  //   ul#choose {
  //     width: 226px;
  //     height: 40px;
  //   }

  ul.first,
  ul.last {
    li {
      button {
        width: 55px;
      }
    }
  }
}
</style>