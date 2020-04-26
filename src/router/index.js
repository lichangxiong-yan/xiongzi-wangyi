import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import Home from '../views/Home'
import Ai from '../views/Ai'
import Commerce from '../views/Commerce'
import Dessign from '../views/Dessign'
import Language from '../views/Language'
import MyAccount from '../views/MyAccount'
import Products from '../views/Products'
import Professional from '../views/Professional'
import Secrch from '../views/Secrch'
import Workplace from '../views/Workplace'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/ai',
      component: Ai
    },
    {
      path: '/commerce',
      component: Commerce
    },
    {
      path: '/dessign',
      component: Dessign
    },
    {
      path: '/language',
      component: Language
    },
    {
      path: '/myAccount',
      component: MyAccount
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/professional',
      component: Professional
    },
    {
      path: '/secrch',
      component: Secrch
    },
    {
      path: '/workplace',
      component: Workplace
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
export default router
