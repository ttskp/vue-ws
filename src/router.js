import Vue from 'vue'
import Router from 'vue-router'
import app from './App.vue'
import user from './domain/user/router'

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: app
    },
    ...user
  ]
})
