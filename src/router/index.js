import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../components/home/home.vue'
import about from '../components/about/about.vue'
import place from '../components/place/place.vue'
import service from '../components/service/service.vue'
import serviceDetail from '../components/service/serviceDetail.vue'
import share from '../components/share/share.vue'
import boutique from '../components/case/case.vue'
import message from '../components/message/message.vue'
import member from '../components/member/member.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import join from '../components/join/join.vue'
import our from '../components/about/child/our.vue'
import team from '../components/about/child/team.vue'
import toWe from '../components/about/child/toWe.vue'
import contact from '../components/about/child/contact.vue'
import forgetPassword from '../components/forgetPassword/forgetPassword.vue'
import userLetter from '../components/userLetter/userLetter.vue'
import letter from '../components/userLetter/letter/letter.vue'
import discuss from '../components/userLetter/discuss/discuss.vue'
import userCenter from '../components/userCenter/userCenter.vue'
import inquiryList from '../components/userCenter/children/inquiryList.vue'
import baseInformation from '../components/userCenter/children/baseInformation.vue'
import changePassword from '../components/userCenter/children/changePassword.vue'
import bindAccount from '../components/userCenter/children/bindAccount.vue'
import userShare from '../components/userCenter/children/share.vue'
import collect from '../components/userCenter/children/collect.vue'
import placeHelp from '../components/placeHelp/placeHelp.vue'
import joinForm from '../components/joinForm/joinForm.vue'
import placeDetail from '../components/place/placeDetail.vue'
import shopping from '../components/shoppingCart/shopping.vue'
import contentDetail from '../components/contentDetail/contentDetail.vue'
import saveShare from '../components/userCenter/children/saveShare.vue';


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {//关于我们
      path: '/about',
      component: about,
      children: [{
          path: '',
          component: our
        },
        {
          path: 'team',
          component: team
        },
        {
          path: 'toWe',
          component: toWe
        },
        {
          path: 'contact',
          component: contact
        }
      ]
    },
    {//场地
      path: '/place',
      component: place,
      name:'place'
    },
    // 场地详情
    {
      path: '/place/placeDetail',
      component: placeDetail,
      name:'placeDetail'
    },
    {//服务
      path: '/service',
      component: service,
      name:'service'
    },
    {//服务详情
      path: '/serviceDetail',
      component: serviceDetail,
      name:'serviceDetail'
    },
    {//分享
      path: '/share',
      component: share
    },
    {
      path: '/boutique',
      component: boutique
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/member',
      component: member
    },
    {//登录
      path: '/login',
      component: login
    },
    {//注册
      path: '/register',
      component: register
    },
    {//申请驻入
      path: '/join',
      component: join
    },
    {//忘记密码
      path: '/forgetPassword',
      component: forgetPassword
    },
    {
      // 站内信
      path: '/userLetter',
      component: userLetter,
      children: [{
          path: 'letter',
          component: letter,

        },
        {
          path: 'discuss',
          component: discuss
        }
      ]
    },
    // 个人中心
    {
      path: '/userCenter',
      component: userCenter,
      children: [{
        // path: 'inquiryList',
        path: '/',
        component: inquiryList,
      }, {
        path: 'baseInformation',
        component: baseInformation,

      }, {
        path: 'changePassword',
        component: changePassword,

      }, {
        path: 'bindAccount',
        component: bindAccount,

      }, {
        path: 'userShare',
        component: userShare,

      }, 
      // 发布分享
      {
        path: 'saveShare',
        component: saveShare,
        name:'saveShare'

      }, 
      {
        path: 'collect',
        component: collect,

      }]
    },

    // 需要协助申请场地
    {
      path: '/placeHelp',
      component: placeHelp,
    },
    {//购物车
      path: '/shopping',
      component: shopping,
      name:'shopping'
    },
    // 需要协助申请场地
    {
      path: '/joinForm',
      component: joinForm,
    },
    // 文章详情
    {
      path: '/contentDetail',
      component: contentDetail,
      name:'contentDetail'
    },

  ],

  // 配置当路由改变时，页面回到最顶端,返回和前进按钮则回到原先所在的位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
     return savedPosition
    } else {
     return { x: 0, y: 0 }
    }
   }

})
