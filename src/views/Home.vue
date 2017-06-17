<template>
    <div class="page page-home">
        <div class="page-content">
            <header class="top_hd clearfix">
                <!--菜单-->
               <div class="menu">
                   <span class="iconfont icon-qixing current"></span>
                   <span class="iconfont icon-xiala"></span>
               </div>

                <h1 class="titel-text text_c">虽千万里，俱往矣</h1>
                
                <!--拍照 设置-->
                <div class="more"></div>
            </header>
            <div class="cneter_bd">
                <div class="tatol-info">
                    <grid :rows="1" class="border0">
                        <grid-item class="border0">
                            <span class="unit">时速(km/h)</span>
                            <p class="num first-num">0.00</p>
                        </grid-item>
                    </grid>
                    <grid :rows="3">
                        <grid-item class="border0">
                            <span class="unit">里程(km)</span>
                            <p class="num">0.00</p>
                        </grid-item>
                        <grid-item class="border0">
                            <span class="unit">时间</span>
                            <p class="num">00:00</p>
                        </grid-item>
                        <grid-item class="border0">
                            <span class="unit">均速(km/h)</span>
                            <p class="num">0.00</p>
                        </grid-item>
                    </grid>
                    <grid :rows="3">
                        <grid-item class="border0">
                            <span class="unit">极速(km/h)</span>
                            <p class="num">0.00</p>
                        </grid-item>
                        <grid-item class="border0">
                            <span class="unit">海拔(m)</span>
                            <p class="num">0.00</p>
                        </grid-item>
                        <grid-item class="border0">
                            <span class="unit">爬升(m)</span>
                            <p class="num">0.00</p>
                        </grid-item>
                    </grid>
                </div>
                <div class="btn">
                    <div class="start">开始骑行</div>
                    <div class="map">运动地图</div>
                </div>
            </div>
            <footer class="bottom_ft"></footer>
        </div>
        <div class="bar bar-nav">
            <tabbar class="nav-list">
                <tabbar-item selected class="home_ nav-item">
                    <span slot="icon" class="iconfont icon-qixing"></span>
                    <span slot="label">运动</span>
                </tabbar-item>
                <tabbar-item show-dot class="user_ nav-item">
                    <span slot="icon" class="iconfont icon-luxian"></span>
                    <span slot="label">我的</span>
                </tabbar-item>
                <tabbar-item class="find_ nav-item">
                    <span slot="icon" class="iconfont icon-banshizhinan"></span>
                    <span slot="label">发现</span>
                </tabbar-item>
                <tabbar-item class="line_ nav-item">
                    <span slot="icon" class="iconfont icon-dili"></span>
                    <span slot="label">路书</span>
                </tabbar-item>
                <tabbar-item class="club_ nav-item">
                    <span slot="icon" class="iconfont icon-julebu"></span>
                    <span slot="label">俱乐部</span>
                </tabbar-item>
            </tabbar>
        </div>
    </div>
</template>

<script>
import { Tabbar, TabbarItem, XSwitch, Grid, GridItem, TransferDomDirective as TransferDom } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components: {
        Tabbar,
        TabbarItem,
        Grid,
        GridItem,
        XSwitch
    },
    data () {
        return {
            show: false
        }
    }
}
</script>

<style>
@import '//at.alicdn.com/t/font_xfp3caga57zgds4i.css';

/*+++设置底部样式++++*/
.page-content + .bar.bar-nav {
    position: absolute;
    left: 0; right: 0;
    top: auto;
    bottom: 0;
    height: 58px;
}
.page-content + .bar.bar-nav::after,
.page-content + .bar.bar-nav::before {
    content: "";
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
}
.bar.bar-nav .nav-list {  background-color: #000; }
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
    bottom: 58px;
}
.page-home .page-content .cneter_bd {
    position: absolute;
    left: 0; right: 0;
    top: 48px;
    width: 100%;
    height: calc(100% - 48px);
}
/*头部*/
.top_hd { padding: 10px 0; background-color: #000; color: #fff; }
.top_hd h1.titel-text { 
    position: absolute; 
    width: 100%; font-size: 16px; 
    height: 28px; line-height: 28px;
    font-weight: normal;
    margin-top: -1px;
}
.top_hd .menu {
    float: left;
    padding: 0 6px;
    margin-left: 10px;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    line-height: 1.2;
    vertical-align: middle;
    overflow: hidden;
}
.top_hd .menu span.current { 
    display: inline-block; 
    padding-top: 1px; 
    font-size: 22px;
}

/*主体*/
.cneter_bd .tatol-info .weui-grid {
    text-align: center;
    color: #333;
}
.tatol-info {
    margin-top: 15%;
}
.tatol-info .weui-grid .unit {
    font-size: 12px;
    color: #888;
}
.tatol-info .weui-grid .num {
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2;
}
.tatol-info .weui-grid .first-num { font-size: 58px; }

.tatol-info + div.btn {
    position: absolute;
    width: 100%;
    bottom: 0;
}
.tatol-info + div.btn > div { 
    float: left; width: 50%; 
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
    font-size: 18px;
}
.tatol-info + div.btn .start {  background-color: #288af0; }
.tatol-info + div.btn .map {  background-color: #333; }

</style>
