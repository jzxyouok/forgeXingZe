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
            <div class="main_bd">
                <div class="tatol-info">
                    <div>
                        <div class="top-info">
                            <span class="gps_">GPS</span>
                        </div>
                        <grid :rows="1" class="border0">
                            <grid-item class="border0">
                                <span class="unit">时速(km/h)</span>
                                <p class="num first-num">0.00</p>
                            </grid-item>
                        </grid>
                        <grid :rows="3" class="border0">
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
                        <grid :rows="3" class="border0">
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
                </div>
            </div>
            <footer class="bottom_ft clearfix">
                <div class="btn clearfix">
                    <div class="start">开始骑行</div>
                    <div class="map">运动地图</div>
                </div>
            </footer>
        </div>
        <div class="bar bar-nav">
            <tabbar class="nav-list">
                <tabbar-item selected class="home_ nav-item">
                    <span slot="icon" class="iconfont icon-qixing"></span>
                    <span slot="label">运动</span>
                </tabbar-item>
                <tabbar-item show-dot class="user_ nav-item" link="/user">
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
            'navbar': true,
            'show': false
        }
    },
    methods: {
        routerLink (name) {
            this.$router.push({ name: name })
        }
    },
    mounted () {
        // 控制不存在nav-bar时 .page-content 容器的高度沾满屏幕
        this.navbar ? document.querySelector('.page-content').style.bottom = '58px' : true
    }
}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_xe00hyji2gmsra4i.css';

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
    font-size: 20px;
}
.top_hd .menu span.icon-xiala { font-size: 14px; }

/*主体*/
.main_bd .tatol-info {
    position: absolute;
    top: 0; bottom: 48px;
    left: 0; right: 0;
    width: 100%;
    overflow-y: auto;
}
.main_bd .tatol-info .weui-grid {
    text-align: center;
    color: #333;
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

.page-content > footer div.btn {
    position: absolute;
    width: 100%;
    bottom: 0;
}
.page-content > footer div.btn > div { 
    float: left; width: 50%; 
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
    font-size: 18px;
}
.page-content > footer div.btn .start {  background-color: #288af0; }
.page-content > footer div.btn .map {  background-color: #333; }
.tatol-info .top-info {
    color: #ccc;
    padding: 10px;
    font-size: 12px
}

</style>
