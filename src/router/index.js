import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test1CORS from '@/components/Test1CORS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test1CORS',
      name: 'Test1CORS',
      component: Test1CORS
    }
  ]
})
