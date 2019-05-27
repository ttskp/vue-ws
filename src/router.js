import Vue from 'vue'
import Router from 'vue-router'
import home from './Home.vue'
import user from './domain/user/router'
import cats from './domain/cats/router'

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    ...user,
    ...cats
  ]
})
