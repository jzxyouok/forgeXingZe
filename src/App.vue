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
.border0::after, .border0::before { height: 0 !important; border-top: 0 !important; }

#app, .page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 2000;
}
</style>
