// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from '@/views/Home'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     }
//   ]
// })
export default [{
  path: '/',
  name: 'root-1',
  component (resolve) { require(['../views/Home'], resolve) },
  meta: { scrollToTop: true }
}]
