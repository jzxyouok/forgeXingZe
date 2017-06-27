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
}, { // 智能设备 Ridingdevice
    path: '/user/device',
    name: '/user/device',
    component (resolve) { require(['../views/Ridingdevice'], resolve) },
    meta: { scrollToTop: true }
}, { // 等级权限说明 Rank
    path: '/user/rank',
    name: '/user/rank',
    component (resolve) { require(['../views/Rank'], resolve) },
    meta: { scrollToTop: true }
}, { // 个人中心后台 userAdmin
    path: '/user/userAdmin',
    name: '/user/userAdmin',
    component (resolve) { require(['../views/UserAdmin'], resolve) },
    meta: { scrollToTop: true }
}, { // 修改手机号码  phone
    path: '/user/phone',
    name: '/user/phone',
    component (resolve) { require(['../views/user/PhoneEdit'], resolve) },
    meta: { scrollToTop: true }
}, { // 绑定邮箱  email
    path: '/user/email',
    name: '/user/email',
    component (resolve) { require(['../views/user/EmailEdit'], resolve) },
    meta: { scrollToTop: true }
}, { // 修改密码  password
    path: '/user/password',
    name: '/user/password',
    component (resolve) { require(['../views/user/PasswordEdit'], resolve) },
    meta: { scrollToTop: true }
}, { // 报名卡片  card
    path: '/user/card',
    name: '/user/card',
    component (resolve) { require(['../views/user/EnrollCard'], resolve) },
    meta: { scrollToTop: true }
}, { // 运动装备设置  card
    path: '/user/sportsdevice',
    name: '/user/sportsdevice',
    component (resolve) { require(['../views/user/SportsDevice'], resolve) },
    meta: { scrollToTop: true }
}]
