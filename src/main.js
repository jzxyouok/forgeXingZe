// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routerConfig from './router/index'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routerConfig  // 直接引入单独的路由PATH  index.js
})

FastClick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  ...App  // 使用es6写法替换： render: h => h(App)
}).$mount('#app-box')
