<!--  -->
<template>
	<div class="mbac">

		<div class="map_bac">
			<div class="left_box">
				<p class="chooseBig" @click="showBigMap()">查看大地图</p>
				<div id="bdMap" class="map" :style="minStyle"></div>
			</div>
			<!-- <div class="right_box" :style="{height:m.minHeight + 'px'}">
				<ul class="tabs">
					<li @click="choose1()" id="l1" class="choose">交通枢纽</li>
					<li @click="choose2()" id="l2">附近酒店</li>
				</ul>

				<ul class="lis">
					<li>深圳北站</li>
					<li>深圳东火车站</li>
					<li>深圳火车站</li>
					<li>深圳宝安机场</li>
				</ul>

				<p class="more">查看更多交通信息</p>
			</div> -->
		</div>

		<div class="bigMapBox" id="bigMapBox">
			<div class="close">
				<p class="textStyle">地图模式</p>
				<p class="shanchu" @click="closeBigMap()">
					<i class="iconfont icon-shanchu"></i>
				</p>
				<div id="bigMap"></div>
			</div>
		</div>

	</div>

</template>

<script>
export default {
  data() {
    return {

      minStyle: {
        width: this.m.w + "px",
        height: this.m.h + "px"
      }
    };
  },

  props: ["m"], //获取父组件传过来的数据

  components: {},

  computed: {},

  mounted() {
    this.createMap();
    this.closeBigMap();
    this.choose1();
  },

  methods: {
    createMap() {
      let map = new BMap.Map("bdMap"); //创建地图实例
      let point = new BMap.Point(this.m.x, this.m.y);
      map.centerAndZoom(point, 15);
      let marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      // map.enableScrollWheelZoom(true); //鼠标滚动放大缩小
      map.addControl(new BMap.NavigationControl()); //添加地图左边控件
      map.addControl(new BMap.ScaleControl()); //比例尺控件
      map.addControl(new BMap.OverviewMapControl()); //右下角缩略图控件
      //   map.addControl(new BMap.MapTypeControl());//卫星、三维图选择
    },

    /**@augments
     * 查看大图
     */
    bigMap() {
      let map = new BMap.Map("bigMap"); //创建地图实例
      let point = new BMap.Point(this.m.x, this.m.y);
      map.centerAndZoom(
        // new BMap.Point(this.m.x - 0.035, this.m.y + 0.018), //为了使坐标中心在师徒中心
        new BMap.Point(this.m.x, this.m.y), //为了使坐标中心在师徒中心
        15
      );
      //   map.centerAndZoom(point, 15);
      let marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      map.enableScrollWheelZoom(true); //鼠标滚动放大缩小
      map.addControl(new BMap.NavigationControl()); //添加地图左边控件
      map.addControl(new BMap.ScaleControl()); //比例尺控件
      map.addControl(new BMap.OverviewMapControl()); //右下角缩略图控件
      map.addControl(new BMap.MapTypeControl()); //卫星、三维图选择
    },

    closeBigMap() {
      document.getElementById("bigMapBox").style.display = "none";
      document.body.style.overflow = ""; //禁止蒙层后面页面滚动
    },
    showBigMap() {
      this.bigMap();
      document.getElementById("bigMapBox").style.display = "block";
      document.body.style.overflow = "hidden"; //禁止蒙层后面页面滚动
    },
    choose1() {
      document.getElementById("l1").className = "choose";
      document.getElementById("l2").className = "unchoose";
    },
    choose2() {
      document.getElementById("l1").className = "unchoose";
      document.getElementById("l2").className = "choose";
    }
  }
};
</script>

<style lang='scss' scoped>
.choose {
  color: #2f85fc !important;
  border-bottom: 2px solid #2f85fc;
}

.unchoose {
  border-bottom: 2px solid transparent;
}

.mbac {
  overflow: hidden;
}
.map_bac {
  overflow: hidden;
  float: left;
  // padding: 5px;
  // border: 1px solid #d2d2d2;

  .left_box {
    position: relative;
    float: left;

    // 小地图
    .map {
      // width: 400px;
      // height: 300px;
      border: 1px solid #d2d2d2;
    }

    .chooseBig {
      float: left;
      cursor: pointer;
      z-index: 999;
      position: absolute;
      right: 0;
      top: 0;
      padding: 2px 5px;
      font-size: 14px;
      background: rgba($color: #000000, $alpha: 0.6);
      color: #ffffff;
    }
  }

  .right_box {
    margin-left: 5px;
    overflow: hidden;
    float: left;
    width: 200px;
    height: 100%;
    position: relative;
    border: 1px solid #d2d2d2;

    .tabs {
      overflow: hidden;
      border-bottom: 1px solid #d2d2d2;
      // border-top: 1px solid #d2d2d2;
      li {
        padding: 5px 0;
        cursor: pointer;
        text-align: center;
        float: left;
        width: 50%;
        color: #666666;
      }
    }

    .lis {
      li {
        font-size: 12px;
        cursor: pointer;
        color: #2f85fc;
        padding: 10px;
        // padding-left: 10px;
        border-bottom: 1px solid #d2d2d2;
      }
    }
    .more {
      cursor: pointer;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      border-top: 1px solid #d2d2d2;
      font-size: 12px;
      color: #2f85fc;
      padding: 3px 0;
      text-align: center;
    }
  }
}

// 大地图盒子
.bigMapBox {
  display: none;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.7);

  .close {
    padding: 5px;

    background: #ffffff;
    position: absolute;
    left: 50%;
    margin-left: -500px;
    top: 50%;
    margin-top: -300px;

    .textStyle {
      color: #999999;
      padding: 5px;
      border-bottom: 1px solid #d2d2d2;
    }

    .shanchu {
      z-index: 10001;
      position: absolute;
      right: 6px;
      top: 7px;
      color: #999999;
      cursor: pointer;
      i {
        font-size: 24px;
      }
    }

    p.shanchu:hover {
      color: #333333;
      //   color: #C72015;
    }
  }

  // 大地图
  #bigMap {
    width: 1000px;
    height: 600px;
    border: 1px solid #d2d2d2;
  }
}
</style>