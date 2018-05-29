<!--  -->
<template>
  <div class="joinForm_bac">
    <div class="main">

      <div class="logo">
        <img src="../../assets/imges/logoJoin.png" alt="">
      </div>

      <div class="box1">

        <p class="textStyle til1" style="font-size:20px;">场地详情注册</p>

        <p class="tilStyle" style="margin-top:20px;">场地数据</p>
        <p class="textStyle til1" style="color:#616161;">场地详情注册</p>

        <p class="tilStyle" style="margin-top:20px;">注意事项</p>
        <p class="textStyle til1" style="color:#616161; border-bottom: 1px solid #cdcdcd;">加入WOMICE是收费服务，您可选择固定月费或佣金计划，详情请向WOMICE了解更多。（目前暂时不收费）</p>
      </div>

      <div class="box2">
        <p class="textStyle">公司联系人：</p>
        <input type="text" name="" id="" v-model="user">

        <p class="textStyle">公司联系人电子邮件：</p>
        <input type="text" name="" id="" v-model="email">

        <p class="textStyle">公司联系人电话：</p>
        <input type="text" name="" id="" v-model="phone">

        <p class="textStyle">公司联系人微信号码：</p>
        <input type="text" name="" id="" v-model="wechat">

        <p class="textStyle">公司名称（酒店/集团名称）：</p>
        <input type="text" name="" id="" v-model="companyName">

        <p class="textStyle">公司固定电话：</p>
        <input type="text" name="" id="" v-model="fixedPhone">

        <p class="textStyle">公司行业类别：</p>
        <input type="text" name="" id="" v-model="businessType">

        <p class="textStyle">工商登记公司名称：</p>
        <input type="text" name="" id="" style="width:600px;" v-model="registerName">

        <p class="textStyle">公司地址：</p>
        <input type="text" name="" id="" style="width:600px;" v-model="address">

        <p class="textStyle">公司介绍：</p>
        <textarea name="" id="" cols="30" rows="10" style="width:600px;" v-model="desricbe"></textarea>

      </div>

      <div class="box3">
        <p class="til2">适合的活动 - 企业</p>
        <div class="checkboxs">
          <label><input type="checkbox" name="active" id="" value="周年晚会"> 周年晚会</label>
          <label><input type="checkbox" name="active" id="" value="商务会议"> 商务会议</label>
          <label><input type="checkbox" name="active" id="" value="新车发布会"> 新车发布会</label>
          <label><input type="checkbox" name="active" id="" value="新车试驾"> 新车试驾</label>
          <label><input type="checkbox" name="active" id="" value="培训/团建活动"> 培训/团建活动</label>
          <label><input type="checkbox" name="active" id="" value="讲座/沙龙"> 讲座/沙龙</label>
          <label><input type="checkbox" name="active" id="" value="展览"> 展览</label>
          <label><input type="checkbox" name="active" id="" value="品酒会"> 品酒会</label>
          <label><input type="checkbox" name="active" id="" value="发布会"> 发布会</label>
          <label><input type="checkbox" name="active" id="" value="校友会"> 校友会</label>
          <label><input type="checkbox" name="active" id="" value="产品发布"> 产品发布</label>
          <label><input type="checkbox" name="active" id="" value="派对聚会"> 派对聚会</label>
          <label><input type="checkbox" name="active" id="" value="音乐厅"> 音乐厅/演出</label>
        </div>

        <p class="til2">适合的活动 - 婚礼</p>
        <div class="checkboxs">
          <label><input type="checkbox" name="marry" id="" value="婚礼"> 婚礼</label>
          <label><input type="checkbox" name="marry" id="" value="婚礼行礼"> 婚礼行礼</label>

        </div>

        <p class="til2">场地类型/类别</p>
        <div class="checkboxs">
          <label><input type="checkbox" name="placeType" id="" value="五星国际酒店"> 五星国际酒店</label>
          <label><input type="checkbox" name="placeType" id="" value="五星国内酒店"> 五星国内酒店</label>
          <label><input type="checkbox" name="placeType" id="" value="四星酒店"> 四星酒店</label>
          <label><input type="checkbox" name="placeType" id="" value="试驾场地"> 试驾场地</label>
          <label><input type="checkbox" name="placeType" id="" value="艺术中心"> 艺术中心</label>
          <label><input type="checkbox" name="placeType" id="" value="会展中心"> 会展中心</label>
          <label><input type="checkbox" name="placeType" id="" value="游艇会"> 游艇会</label>
          <label><input type="checkbox" name="placeType" id="" value="室外烧烤场地"> 室外烧烤场地</label>
          <label><input type="checkbox" name="placeType" id="" value="培训中心"> 培训中心</label>
          <label><input type="checkbox" name="placeType" id="" value="剧院"> 剧院</label>
          <label><input type="checkbox" name="placeType" id="" value="会议室"> 会议室</label>
          <label><input type="checkbox" name="placeType" id="" value="会所"> 会所</label>
          <label><input type="checkbox" name="placeType" id="" value="餐厅"> 餐厅</label>
          <label><input type="checkbox" name="placeType" id="" value="户外场地/露台"> 户外场地/露台</label>
          <label><input type="checkbox" name="placeType" id="" value="轰趴别墅"> 轰趴别墅</label>
          <label><input type="checkbox" name="placeType" id="" value="私人贵宾房"> 私人贵宾房</label>
          <label><input type="checkbox" name="placeType" id="" value="学校"> 学校</label>
          <label><input type="checkbox" name="placeType" id="" value="文体中心"> 文体中心</label>
          <label><input type="checkbox" name="placeType" id="" value="多用途活动空间"> 多用途活动空间</label>
          <label><input type="checkbox" name="placeType" id="" value="独特场地"> 独特场地</label>
          <label><input type="checkbox" name="placeType" id="" value="度假村"> 度假村</label>
          <label><input type="checkbox" name="placeType" id="" value="其他"> 其他</label>
        </div>

      </div>

      <div class="box4">
        <div class="smallText">人均活动消费 <input type="text" name="" id="" v-model="money"> 元</div>

        <div class="smallText">
          <p class="textStyle" style="font-size:16px;">其他租用费用（如最低消费，任饮费，半日场租，全日场租）</p>
          <textarea name="" id="" cols="30" rows="10" style="width:600px;" v-model="otherMoney"></textarea>
        </div>
        <div class="smallText">场地总面积 <input type="text" name="" id="" v-model="placeArea"> 平方</div>

        <div class="smallText">场地容纳 - 最多人数 <input type="text" name="" id="" v-model="numPeople"> 人</div>

        <div class="smallText">场地容纳座位 - 最多座位 <input type="text" name="" id="" v-model="numSeat"> 位</div>

        <div class="smallText">
          <p class="textStyle" style="font-size:16px;">容纳人数 - 附加资料（如露台，座位，宴会，会议室容纳人数）</p>
          <textarea name="" id="" cols="30" rows="10" style="width:600px;" v-model="otherNumPeople"></textarea>
        </div>
      </div>

      <div class="box3">

        <p class="til2">特点及设施 - 场地设计</p>
        <div class="checkboxs">
          <label><input type="checkbox" name="design" id="" value="室外露台"> 室外露台</label>
          <label><input type="checkbox" name="design" id="" value="长桌"> 长桌</label>
          <label><input type="checkbox" name="design" id="" value="多层"> 多层</label>
          <label><input type="checkbox" name="design" id="" value="室内设有厨房"> 室内设有厨房</label>
          <label><input type="checkbox" name="design" id="" value="圆桌"> 圆桌</label>
          <label><input type="checkbox" name="design" id="" value="VIP房"> VIP房</label>
          <label><input type="checkbox" name="design" id="" value="无柱位"> 无柱位</label>
          <label><input type="checkbox" name="design" id="" value="可移动分隔板"> 可移动分隔板</label>
          <label><input type="checkbox" name="design" id="" value="舞台"> 舞台</label>
          <label><input type="checkbox" name="design" id="" value="地铺"> 地铺</label>
          <div style="clear:both;"></div>

          <p class="textStyle" style="font-size:16px;">其他（请用逗号分隔列明）</p>
          <input type="text" name="" id="" v-model="otherDesign">
        </div>

        <p class="til2">特点及设施 - 食物与餐饮</p>
        <div class="checkboxs">
          <label><input type="checkbox" name="eat" id="" value="可自带饮品"> 可自带饮品</label>
          <label><input type="checkbox" name="eat" id="" value="可提供自助餐"> 可提供自助餐</label>
          <label><input type="checkbox" name="eat" id="" value="提供店内餐饮"> 提供店内餐饮</label>
          <label><input type="checkbox" name="eat" id="" value="烧烤BBQ"> 烧烤BBQ</label>
          <label><input type="checkbox" name="eat" id="" value="允许自搞饮食"> 允许自搞饮食</label>
          <label><input type="checkbox" name="eat" id="" value="可预订外面西式餐饮"> 可预订外面西式餐饮</label>
          <label><input type="checkbox" name="eat" id="" value="餐酒/鸡尾酒"> 餐酒/鸡尾酒</label>

          <div style="clear:both;"></div>
          <p class="textStyle" style="font-size:16px;">其他（请用逗号分隔列明）</p>
          <input type="text" name="" id="" v-model="otherEat">
        </div>

        <p class="til2">特点及设施 - 设备</p>
        <div class="checkboxs">
          <label><input type="checkbox" name="fac" id="" value="自定灯光"> 自定灯光</label>
          <label><input type="checkbox" name="fac" id="" value="DJ台"> DJ台</label>
          <label><input type="checkbox" name="fac" id="" value="卡拉OK"> 卡拉OK</label>
          <label><input type="checkbox" name="fac" id="" value="扩音系统/麦克风"> 扩音系统/麦克风</label>
          <label><input type="checkbox" name="fac" id="" value="投影仪"> 投影仪</label>
          <label><input type="checkbox" name="fac" id="" value="音响系统"> 音响系统</label>
          <label><input type="checkbox" name="fac" id="" value="LED"> LED</label>
          <label><input type="checkbox" name="fac" id="" value="无线上网"> 无线上网</label>

          <div style="clear:both;"></div>
          <p class="textStyle" style="font-size:16px;">其他（请用逗号分隔列明）</p>
          <input type="text" name="" id="" v-model="otherFac">
        </div>

        <p class="til2">特点及设施 - 其他</p>
        <div class="checkboxs">
          <label><input type="checkbox" name="special" id="" value="可携带宠物"> 可携带宠物</label>
          <label><input type="checkbox" name="special" id="" value="可滞留至凌晨"> 可滞留至凌晨</label>

          <div style="clear:both;"></div>
          <p class="textStyle" style="font-size:16px;">其他（请用逗号分隔列明）</p>
          <input type="text" name="" id="" v-model="otherSpecial">
        </div>

        <p class="til2">预定服务优惠</p>
        <div class="checkboxs">
          <label><input type="checkbox" name="discounts" id="" value="5%折扣"> 5%折扣</label>
          <label><input type="checkbox" name="discounts" id="" value="10%折扣"> 10%折扣</label>
          <label><input type="checkbox" name="discounts" id="" value="没有折扣"> 没有折扣</label>
        </div>

        <p class="otherWarn">相关附件：
          <i>请把优质的高清图片、案例以及其他常见格式的介绍文档发送至WOMICE官方电子邮箱：luojiayan@womice.com</i>
        </p>

      </div>

      <div class="remark">
        <p class="tilStyle">备注：</p>
        <p class="textStyle">1、分辨率越高越好。我们的网站会自动调整大小，以便快速加载页面。</p>
        <p class="textStyle">
          2、JPEG格式是建议的照片格式，PDF是最好的其他格式。</p>
        <p class="textStyle">
          3、请尽可能地发送展示您的场馆内部的照片。</p>
        <p class="textStyle">
          4、实际案例的照片推荐您发送给到我们以便于让客户更好的了解您。</p>
        <p class="textStyle">
          5、更多的实景照片将为站点访问者提供大量的视觉信息，但过多的照片会减慢页面加载速度。如 果您希望发送更多，并允许我们选择根据我们的经验替您选择。我们的建议照片数量是16张。</p>
        <p class="textStyle">
          6、请发送无水印的照片。</p>
        <p class="textStyle">7、如果您想您的照片是在一个特定的顺序显示，请说出相应的照片（如image1.jpg，image2.jpg等）。</p>
        <p class="textStyle">8、请确保从所有材料中删除任何直接的场地联系信息。这包括场地电子邮件地址，电话号码，社交媒体等。。</p>
      </div>

      <!-- <div class="but" @click="goSubmit()">提交</div> -->
      <div class="but" @click="getValue()">提交</div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "", //公司联系人
      email: "", //公司电子邮箱
      phone: "", //公司联系人电话
      wechat: "", //联系人微信
      companyName: "", //公司名称
      fixedPhone: "", //公司固定电话
      businessType: "", //公司行业类别
      registerName: "", //公司工商登记名称
      address: "", //公司地址
      desricbe: "", //公司介绍
      activity: "", //适合的活动
      marry: "", //婚礼
      placeType: "", //场地类型
      money: "", //人均消费
      otherMoney: "", //其他租用费用
      placeArea: "", //场地面积
      numPeople: "", //最多容纳人数
      numSeat: "", //最多座位数
      otherNumPeople: "", //容纳人数附加资料
      design: "", //场地设计
      otherDesign: "",
      eat: "", //场地饮食
      otherEat: "",
      fac: "", //场地设备
      otherFac: "",
      special: "", //特殊
      otherSpecial: "",
      discounts: "" //优惠
    };
  },

  components: {},

  computed: {},

  mounted: function() {},

  methods: {
    /**
     * 获取选择值
     */
    getValue() {
      this.activity = this.getCheckValue("active");
      this.marry = this.getCheckValue("marry");
      this.placeType = this.getCheckValue("placeType");
      this.design = this.getCheckValue("design");
      this.eat = this.getCheckValue("eat");
      this.fac = this.getCheckValue("fac");
      this.special = this.getCheckValue("special");
      this.discounts = this.getCheckValue("discounts");

      this.goSubmit();
    },

    /**
     * 获取选择框的值的公共方法
     */
    getCheckValue(name) {
      let obj = document.getElementsByName(name);
      let value = "";
      for (let li of obj) {
        if (li.checked) {
          value = value + li.value + "，";
        }
      }
      return value;
      // alert(value);
    },

/** 
    验证输入数据
     */
    goSubmit() {
      if (
        !this.user ||
        !this.email ||
        !this.phone ||
        !this.wechat ||
        !this.companyName ||
        !this.fixedPhone||
        !this.businessType||
        !this.registerName||
        !this.address||
        !this.money||
        !this.placeArea||
        !this.numPeople||
        !this.numSeat||
        !this.desricbe
      ) {
        alert('请输入完整的资料');
      }else {
        this.submit();
      }
    },
    /**
     * 提交数据
     */
    submit() {
      let ed = {
        title:'申请驻入',
        corporateContacts: this.user,
        corporateContactsEmail: this.email,
        corporateContactsPhone: this.phone,
        corporateContactsWechat: this.wechat,
        corporateName: this.companyName,
        corporateTelephone: this.fixedPhone,
        corporateTrade: this.businessType,
        corporateRegisterAddress: this.registerName,
        corporateAddress: this.address,
        corporateInfo: this.desricbe,
        eventEnterprise: this.activity,
        eventWedding: this.marry,
        eventConsume: this.money,
        otherConsume: this.otherMoney,
        area: this.placeArea,
        population: this.numPeople,
        seat: this.numSeat,
        populationMoreInfo: this.otherNumPeople,
        characteristicDesign: this.design + this.otherDesign,
        characteristicFood: this.eat + this.otherEat,
        characteristicDevice: this.fac + this.otherFac,
        characteristicOther: this.special + this.otherSpecial,
        concessions: this.discounts
      };

      let d = {
        channelId: 101,
        appId: 1,
        // sessionKey: localStorage.sessionKey,
        expandData: JSON.stringify(ed)
      };

      console.log(d);

      this.$http
        .post(this.urlIp + "/api/content/save.jspx", this.qs.stringify(d))
        // .get(this.urlIp + "/api/content/save.jspx", { params: d })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            alert("提交成功，我们会尽快联系您！");
            this.$router.push({ path: "/" });
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
// label {
//   float: left;
//   color: #616161;
//   margin-bottom: 10px;
//   display: block;
//   width: 200px;
// }

.tilStyle {
  margin-bottom: 10px;
}

.joinForm_bac {
  background: #f6f7f8;
  padding: 50px 0;
  .main {
    background: #ffffff;
    width: 920px;
    margin: 0 auto;
    padding: 40px;
    box-shadow: 0 0 15px rgba($color: #000000, $alpha: 0.2);

    .logo {
      margin-bottom: 40px;
    }

    .box1 {
      padding-bottom: 10px;
    }

    .box2 {
      .textStyle {
        margin-top: 20px;
      }
    }

    .box3 {
      padding-bottom: 20px;
      .checkboxs {
        overflow: hidden;
      }
    }

    .til1 {
      padding-bottom: 20px;
      border-bottom: 1px dashed #cdcdcd;
    }

    .til2 {
      margin: 30px 0 10px 0;
      font-weight: 600;
    }

    .smallText {
      margin-bottom: 30px;
      input {
        height: 30px;
        width: 80px;
      }
    }

    .otherWarn {
      font-size: 14px;
      color: #313131;
      padding: 20px 0;
      border-bottom: 1px dashed #cdcdcd;

      i {
        color: #999999;
      }
    }

    // 备注样式
    .remark {
      padding: 30px 0;
      border-bottom: 1px dashed #cdcdcd;

      .textStyle {
        color: #616161;
      }
    }

    // 提交按钮
    .but {
      margin: 50px auto;
      width: 250px;
      height: 75px;
      line-height: 75px;
      font-size: 30px;
    }
  }
}
</style>