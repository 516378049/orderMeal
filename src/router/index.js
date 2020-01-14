import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import orderMenu from '@/components/orderMenu'
import cart from '@/components/cart'
import memberShip from '@/components/memberShip'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/orderMenu',
          name: 'orderMenu',
          component: orderMenu
        },
        {
          path: '/cart',
          name: 'cart',
          component: cart
        },
        {
          path: '/memberShip',
          name: 'memberShip',
          component: memberShip
        }
      ]
    }
    ,{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
