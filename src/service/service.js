import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
// import utils from './utils'

// exports.install = function (Vue, options) {
Vue.prototype.changeData = function () {
  alert('执行成功');
};
// };

// Vue.prototype.urlIp = 'http://192.168.31.70:8085';//老周
// Vue.prototype.urlIp = 'http://192.168.1.102:8080';//朱辉
Vue.prototype.urlIp = 'http://192.168.1.117:8080';//陈总
// Vue.prototype.urlIp = 'http://192.168.31.39:8033/wms';//正式
// Vue.prototype.urlIp = 'http://113.108.88.29:2828/wms_war';//正式

Vue.prototype.$http = axios;
Vue.prototype.qs = qs;

let utils = require('./utils');
Vue.prototype.utils = utils;


Vue.prototype.placeChooseList = function(type) {
  return this.$http.get(this.urlIp + `/api/dictionary/list.jspx?type=${type}`);
}
 