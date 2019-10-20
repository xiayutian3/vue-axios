import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/2-2',
    name: 'axios2-2',
    component: () => import('./views/2-2.vue')
  },
  {
    path: '/2-5',
    name: 'axios2-5',
    component: () => import('./views/2-5.vue')
  },
  {
    path: '/3-1',
    name: 'axios3-1',
    component: () => import('./views/3-1.vue')
  },
  {
    path: '/3-2',
    name: 'axios3-2',
    component: () => import('./views/3-2.vue')
  },
  {
    path: '/contactlist',
    name: 'contactList',
    component: () => import('./views/ContactList.vue')
  }
  ]
})
