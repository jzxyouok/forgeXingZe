<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
html, body {
    width: 100%; max-width: 100%;
    height: 100%;
    background-color: #fbf9fe;
}
.text_c { text-align: center }
.text_r { text-align: right }
.text_l { text-align: left }
.float_l { float: left }
.float_r { float: right }
.clearfix::after, .clearfix::before {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.border0 { border: 0; }
.border0::after, .border0::before {
    height: 0 !important;
    border-top: 0 !important;
    border-bottom: 0 !important;
}

#app, .page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 2000;
}

/*+++设置底部样式++++*/
.page-content + .bar.bar-nav {
    position: absolute;
    left: 0; right: 0;
    top: auto;
    bottom: 0;
    z-index: 9999;
    height: 58px;
    overflow: hidden;
    zoom: 1;
}
.page-content + .bar.bar-nav::after,
.page-content + .bar.bar-nav::before {
    content: "";
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}
.bar.bar-nav .nav-list {  background-color: #000; overflow: hidden }
.bar.bar-nav .nav-list .weui-tabbar__item { height: 58px; }
.bar.bar-nav .nav-list .weui-tabbar__label {
    font-size: 12px;
    padding-bottom: 4px;
}
.nav-list .nav-item.weui-bar__item_on .weui-tabbar__icon,
.nav-list .nav-item.weui-bar__item_on .weui-tabbar__label { color: #eee !important; }
.nav-item .weui-tabbar__icon span.iconfont { font-size: 22px; }
.nav-item .vux-reddot::after { top: 5px; right: -10px; }

/*+++主体内容区块+++*/

.page-content {
    position: absolute;
    left: 0; right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
}
.page-content .main_bd {
    position: absolute;
    width: 100%;
    top: 45px;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
}

/*头部样式*/
header .vux-header { background-color: #000; }
header .vux-header h1 { font-size: 16px !important; }
</style>
