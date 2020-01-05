import Vue from 'vue'
import Router from 'vue-router'
import LogInForm from './components/LogInForm.vue'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login-form',
      component: LogInForm
    }
  ]
})