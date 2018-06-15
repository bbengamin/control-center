import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage'

Vue.use(Router)

const routes = [{
  path: '/home',
  name: 'home',
  component: HomePage,
}]

export default new Router({ routes, mode: 'history' })
