export default [{
    path: '/',
    name: 'root-1',
    component (resolve) { require(['../views/Home'], resolve) },
    meta: { scrollToTop: true }
}, { // 首页
    path: '/home',
    name: 'home',
    component (resolve) { require(['../views/Home'], resolve) },
    meta: { scrollToTop: true }
}, { // 用户中心
    path: '/user',
    name: 'user',
    component (resolve) { require(['../views/User'], resolve) },
    meta: { scrollToTop: true }
}, { // 我的勋章
    path: '/user/medal',
    name: 'Medal',
    component (resolve) { require(['../views/Medal'], resolve) },
    meta: { scrollToTop: true }
}]
