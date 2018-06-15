import Vue from 'vue'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'

import App from './App'

import vuetify from './utils/vuetify'
import axios from './utils/axios'
import router from './router'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(VueAxios, axios)
Vue.use(Vuetify)


window.Vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})