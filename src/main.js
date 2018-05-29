// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/common.css'
import './service/service'
// import './style/iconfont.css'
import axios from 'axios'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// Vue.config.productionTip = false;

// 配置当路由发生改变时，页面回到顶端
// router.afterEach((to,from,next) => {
//   window.scrollTo(0,0);
// });
// Vue.use(service);
// Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

 
