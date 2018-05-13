import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OutView from '@/components/OutView'
import InView from '@/components/InView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/out',
      name: 'OutView',
      component: OutView
    },
  ]
})
