<template>
    <div class="page page-user">
        <div class="page-content">
            <div class="main_bd">
                <header class="content-hd">
                    <div class="show-content">
                        <div class="tip-box text_r">
                            <!--消息-->
                            <span class="iconfont icon-msg msg"></span>
                            <!--设置-->
                            <span class="iconfont icon-set set-btn"></span>
                        </div>
                        <div class="u-info clearfix">
                            <div class="u-photo float_l"><img src="../assets/images/photo.jpg" alt="photo"><span class="rankNum">Lv 0</span></div>
                            <div class="text-Uinfo float_l">
                                <div class="float_l">
                                    <p class="name">黑钦王</p>
                                    <p class="my-club">我的俱乐部</p>
                                    <p class="my-addre">广西南宁市，男，18</p>
                                </div>
                                <div class="total-info">
                                    <div class="fans_" @click.stop="linkFun('/user/fans')">
                                        <span>0</span>
                                        <p>粉丝</p>
                                    </div>
                                    <div class="concern_">
                                        <span>0</span>
                                        <p>关注</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="u-more clearfix">
                            <div class="u-rank float_l" @click.stop="linkFun('/user/rank')" ><span class="iconfont icon-dengji"></span><strong>等级特权</strong></div>
                            <div class="u-xingzeID float_l"><span class="iconfont icon-biaoqian"></span><strong>行者号</strong></div>
                            <div class="u-editBtn float_r" @click.stop="linkFun('/user/userAdmin')">编辑个人信息</div>
                        </div>
                    </div>
                    <!--遮罩层-->
                    <div class="layer bg_color"></div>
                </header>
                <!--统计-->
                <grid :rows="3" class="border0 total-content">
                    <grid-item class="border0">
                        <span class="num">0</span>
                        <p class="unit">总里程(km)</p>
                    </grid-item>
                    <grid-item class="border0">
                        <span class="num">100</span>
                        <p class="unit">总积分</p>
                    </grid-item>
                    <grid-item class="border0">
                        <span class="num">9999+</span>
                        <p class="unit">骑行排名</p>
                    </grid-item>
                </grid>
                <!--进度条-->
                <group class="group group_2">
                    <CellBox>
                        <div slot="default" class="float_l time_M">6月</div>
                        <div slot="default" class="float_r medal-img"></div>
                        <div slot="default" class="degree-num">
                            <p class="current">0 ℃</p>
                            <div class="progress-length">
                                <box>
                                    <x-progress :percent='degree' :show-cancel="false"></x-progress>
                                </box>
                            </div>
                            <p class="des">热度</p>
                        </div>
                    </CellBox>
                    <cell title="历史记录" is-link>
                        <span class="iconfont icon-jilu" slot="icon"></span>
                    </cell>
                </group>
                <!--勋章、智能设备、聊天-->
                <group class="group group_3">
                    <cell title="勋章" is-link  link="user/medal">
                        <span class="iconfont icon-huizhang" slot="icon"></span>
                    </cell>
                    <cell title="智能设备" is-link link="user/device">
                        <span class="iconfont icon-lanyashili" slot="icon"></span>
                    </cell>
                    <cell title="聊天" is-link>
                        <span class="iconfont icon-liaotian" slot="icon"></span>
                    </cell>
                </group>
            </div>
        </div>
        <div class="bar bar-nav">
            <tabbar class="nav-list">
                <tabbar-item class="home_ nav-item" link="/home">
                    <span slot="icon" class="iconfont icon-qixing"></span>
                    <span slot="label">运动</span>
                </tabbar-item>
                <tabbar-item selected show-dot class="user_ nav-item" link="/user">
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
import { Tabbar, TabbarItem, XSwitch, XProgress, Box, Grid, GridItem, Badge, Group, Cell, CellBox, TransferDomDirective as TransferDom } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components: {
        Tabbar,
        TabbarItem,
        Grid,
        GridItem,
        XSwitch,
        XProgress,
        Box,
        Badge,
        Group,
        Cell,
        CellBox
    },
    data () {
        return {
            'navbar': true,
            'degree': 10
        }
    },
    mounted () {
        // 控制不存在nav-bar时 .page-content 容器的高度沾满屏幕
        this.navbar ? document.querySelector('.page-content').style.bottom = '58px' : true
    },
    methods: {
        linkFun (link) {
            this.$router.push({ name: link })
        }
    }
}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_xe00hyji2gmsra4i.css';

/*头部*/
.page-user header.content-hd {
    position: relative;
}
.content-hd > .show-content {
    position: relative;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.24);
}
/*遮罩阴影层*/
.layer.bg_color {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('../assets/images/U_header_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.page-user .tip-box .msg { font-size: 20px; }
.page-user .tip-box .set-btn {
    display: inline-block;
    font-size: 20px;
    margin-left: 8px;
}
.page-user .tip-box { padding: 10px; color: #fff; }
/*u-info*/
.page-user .content-hd .u-info {
    position: relative;
    margin-left: 15px;
    box-sizing: border-box;
}
.u-info .u-photo {
    width: 64px;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
}
.u-info .u-photo img { display: block; font-size: 0; width: 100%; max-width: 100%; }
.u-info .u-photo .rankNum {
    position: absolute; 
    top: auto; bottom: -10px; 
    right: auto; left: 32px;
    z-index: 999;
    color: #fff;
    font-size: 10px;
    line-height: 1;
    background-color: #2e8ecf;
    padding: 1px 3px;
    border: 1px solid #fff;
    border-radius: 4px;
    transform: translateX(-50%);
}
.u-info .text-Uinfo {
    width: 100%; height: 100%;
    padding-left: 75px;
    position: absolute;
    font-size: 12px;
    color: #fff;
    box-sizing: border-box
}
.u-info .text-Uinfo .name { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
.u-info .text-Uinfo .total-info {
    position: absolute;
    z-index: 999;
    right: 15px;
    bottom: 0;
    top: auto;
}
.u-info .total-info > div {
    position: relative;
    display: inline-block;
    text-align: center;
    padding: 0 10px;
    color: #fff;
    line-height: 1.6;
}
.u-info .total-info > div > span {
    display: inline-block;
    margin-top: 4px;
    font-size: 14px;
    font-weight: 600;
}
.u-info .total-info > div:active::after {
    content: '';
    position: absolute;
    top: 0; right: 0; left: 0; right: 0;
    width: 95%; height: 100%;
    margin: auto;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.16);
}
/*u-more*/
.page-user .content-hd .u-more {
    position: relative;
    margin: 15px; margin-bottom: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 10px;
    line-height: 1.2;
}
.page-user .content-hd .u-more > div {
    background-color: rgba(0, 0, 0, 0.38);
    color: #fff;
    border-radius: 4px;
}
.content-hd .u-more > div.float_l { margin-right: 10px; padding-right: 10px; padding-top: 1px; }
.content-hd .u-more > div.float_l > span { display: inline-block; vertical-align: middle; margin-right: 8px; }
.content-hd .u-more > div.float_l > strong { display: inline-block; vertical-align: middle; font-weight: normal;}
/*.content-hd .u-more .u-rank {
}
.content-hd .u-more .u-xingzeID {
}
*/
.content-hd .u-more div.u-editBtn {
    font-size: 12px;
    padding: 6px 10px;
    margin-top: -4px;
}

/*主体*/
.page-user .main_bd { background-color: #f2f2f2; top: 0; }
.page-user .main_bd > div { background-color: #fff; }
.group_3 .weui-cell:before { left: 0; }
.group .icon-jilu { color: #e36763 }
.group .icon-huizhang { color: #e89c3c }
.group .icon-lanyashili { color: #35ade4 }
.group .icon-liaotian { color: #f6910d }

/*进度条*/
.degree-num {
    overflow: hidden;
    padding: 0 5px 0 10px;
}
.degree-num .progress-length {
    position: relative;
    padding-right: 40px;
    margin: 5px auto;
}
.degree-num .progress-length::after {
    content: "100℃";
    font-size: 12px;
    color: #c2c2c2;
    line-height: 1;

    position: absolute;
    right: 0; top: 0;
}
.degree-num .current { font-weight: 600; color: #f04c5b; }
.degree-num .des {
    font-size: 12px;
    color: #888;
}
/*勋章*/
.medal-img {
    width: 50px; height: 50px;
    border: 1px solid #cdcdcd;
    background-color: #f2f2f2;
    border-radius: 50%;
    margin-top: 3px;
}
/*月份*/
.time_M { font-size: 16px; margin-top: 18px; }



/*icon*/
.page-user .group .weui-cell { font-size: 14px; }
.page-user .group .iconfont {
    font-size: 20px;
    margin-right: 10px
}

/*top_total 统计*/
.total-content a {
    padding: 10px;
    text-align: center;
    font-size: 10px;
    color: #ababab;
    line-height: 1.2;
}
.total-content a .num {
    display: block;
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
}

</style>
<style>
/*怪异的问题：style添加scoped属性后，vux嵌套组件的样式无法使用
* 临时解决方案：另外添加style（不添加scoped属性）
*/
.group_2 .vux-no-group-title { margin-top: 4px; }
.group_3 .vux-no-group-title { margin-top: 8px; }
.group .vux-cell-box > div {
    padding-right: 0;
    display: block;
    width: 100%;
}
.degree-num .weui-progress__bar {
    height: 10px;
    border-radius: 4px;
}
.degree-num .weui-progress__inner-bar { border-radius: inherit; }
</style>
