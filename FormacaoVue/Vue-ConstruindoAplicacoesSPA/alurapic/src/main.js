import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'
import './components/Directives/Transform'

const router = new VueRouter({ routes, mode: 'history' })

Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
