import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Dairy from '@/components/Dairy'
import About from '@/components/About'
import Tags from '@/components/Tags'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/home'
      // component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/dairy',
      name: 'dairy',
      component: Dairy
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    }
  ]
})
