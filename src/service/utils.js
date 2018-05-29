// define(function(require, exports, module){
module.exports = {
  name: '陈炼成',

  /**
   * 服务数据接口连接错误
   */
  serveErr() {
    // alert("服务器链接错误，请稍后重试");
  },
  /**
   * 验证手机号码
   */
  isPhone(value) {
    let patrn = /^1(3|4|5|7|8)\d{9}$/;
    if (!patrn.test(value)) return false
    return true
  },

  /**
   * 验证密码格式
   */
  isPassword(value) {
    // let patrn = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,20}$/;
    let patrn = /^[0-9A-Za-z]{5,20}$/;
    if (!patrn.test(value)) return false
    return true
  },
  /**
   * 验证姓名
   */
  isName(value) {
    // let patrn = /^[\u4E00-\u9FA5]{1,6}$/;
    // if (!patrn.test(value)) return false
    if (!value) {
      return false;
    }
    return true
  },
  /**
   * 验证邮箱
   */
  isEmail(value) {
    let patrn = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!patrn.test(value)) return false
    return true
  },
  /**
   * 验证身份证
   */
  isIdCard(value) {
    let patrn = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
    if (!patrn.test(value)) return false
    return true
  },

  /**
   * 验证银行卡号码
   */
  isBankCard(value) {
    // let patrn = /^([1-9]{1})(\d{14}|\d{18})$/;
    let patrn = /^([1-9]{1})(\d{14,18})$/;
    if (!patrn.test(value)) return false
    return true
  },

  // placeChooseList(type) {
  //   return this.$http.get(this.urlIp + `/api/dictionary/list.jspx?type=${type}`);
  // }

};
//   });
