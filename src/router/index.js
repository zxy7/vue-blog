import Vue from 'vue'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Dairy from '@/views/Dairy'
import About from '@/views/About'
import Tags from '@/views/Tags'

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
