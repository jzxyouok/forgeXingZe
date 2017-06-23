<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">我的勋章</x-header>
            </header>
            <div class="main_bd">
                <div class="hd-tab">
                    <sticky scrollBox="vux_view_box_body" :offset="46">
                        <tab :line-width="2" active-color="#2e8ecf" v-model="tabIndex" >
                            <tab-item selected >限时活动</tab-item>
                            <tab-item>线上赛事</tab-item>
                            <tab-item>常规挑战</tab-item>
                            <tab-item>月度挑战</tab-item>
                        </tab>
                    </sticky>
                </div>
                <swiper :show-dots="false" height="100%" v-model="tabIndex" class="medal-swiper" >
                    <swiper-item v-for="(item, index) in tabImg" :key='index' >
                        <div class="tab-swiper vux-center border0">
                            <grid :rows="3" class="border0">
                                <grid-item class="border0 medal-item" v-for="(items, index) in item.medalArry" :key='index' >
                                    <div @click.stop="showDialogFun(items)" class="medal-bg" :style="{backgroundImage: 'url(' + items.src + ')'}" >{{items.src}}</div>
                                    <p>{{items.name}}</p>
                                </grid-item>
                            </grid>
                        </div>
                    </swiper-item>
                </swiper>
            </div>
        </div>
        <!--弹出层-->
        <x-dialog style="height: 100%;" class="dialog-medal" v-model="isDialog"  :hide-on-blur='true' >
            <div style="padding: 5px 10px; height: 100%;">
                <swiper height="100%" dots-position="center" dots-class="current-dots" v-model="dialogIndex">
                    <swiper-item >
                        <header><h3 class="medal-name vux-1px-b"></h3></header>
                        <div class="dialog-content clearfix">
                            <div class="img-box first">
                                <img class="medal-img" src="" style="max-width:100%">
                            </div>
                        </div>
                        <footer><p class="medal-tip">未获得</p></footer>
                    </swiper-item>
                    <swiper-item >
                        <header><h3 class="medal-name vux-1px-b"></h3></header>
                        <div class="dialog-content">
                            <div class="img-box">
                                <img class="medal-img" src="" style="max-width:100%">
                            </div>
                            <div class="medal-des"></div>
                        </div>
                        <footer><p class="medal-time"></p></footer>
                    </swiper-item>
                </swiper>
            </div>
        </x-dialog>
    </div>
    <!-- not navBar -->
</template>
<script>
import { XHeader, Tab, TabItem, Sticky, Swiper, SwiperItem, Grid, GridItem, XDialog, TransferDomDirective as TransferDom } from 'vux'
const list = () => ['限时活动', '线上赛事', '常规挑战', '月度挑战']

export default {
    data () {
        return {
            'color': "#000",
            'isFalse': false,
            'tabList': list(),
            'tabIndex': 0,     // tab滚动索引
            'dialogIndex': 0,  // 弹出层滚动索引
            'tabImg': [
                // 限时活动
                {
                    'id': 1,
                    'name': '限时活动',
                    'medalArry': [
                        {
                            'id': 11,
                            'name': '低碳达人',
                            'src': require('../assets/images/photo.jpg'),
                            'starTime': 1497110400,
                            'endTime': 1497628800,
                            'color': '#000',
                            'des': '全国节能宣传周期间（2017年6月11日00:00 - 6月17日23:59），参加由行者联合中国节能协会主办的线上骑行减碳活动，累计贡献降碳量>1kg（累计骑行超过5.33km），即可获得“低碳达人”勋章。'
                        },
                        {
                            'id': 12,
                            'name': '上站杀敌',
                            'src': require('../assets/images/photo.jpg')
                        }
                    ]
                },
                // 线上赛事
                {
                    'id': 2,
                    'name': '线上赛事',
                    'medalArry': [
                        {
                            'id': 21,
                            'name': '速度激情',
                            'src': require('../assets/images/photo.jpg')
                        },
                        {
                            'id': 22,
                            'name': '全场第一',
                            'src': require('../assets/images/photo.jpg')
                        }
                    ]
                },
                // 常规挑战
                {
                    'id': 3,
                    'name': '常规挑战',
                    'medalArry': [
                        {
                            'id': 23,
                            'name': '平凡的世界',
                            'src': require('../assets/images/photo.jpg')
                        }
                    ]
                },
                // 月度挑战
                {
                    'id': 4,
                    'name': '月度挑战',
                    'medalArry': [
                        {
                            'id': 41,
                            'name': '月度挑战者',
                            'src': require('../assets/images/photo.jpg')
                        }
                    ]
                }
            ],
            'isDialog': false
        }
    },
    directives: {
        TransferDom
    },
    components: {
        XHeader,
        Tab,
        TabItem,
        Sticky,
        Swiper,
        SwiperItem,
        Grid,
        GridItem,
        XDialog
    },
    methods: {
        // 勋章弹出
        showDialogFun (item) {
            this.isDialog = !this.isDialog
            // ++++ 暂且无法去修复焦点索引位置错乱问题 +++
            // if (this.dialogIndex === 1) {
            //     this.dialogIndex = 0  // 使用索引控制，弹出每次都为第一个滚动
            //     let dots = document.querySelectorAll('.current-dots i')
            //     dots[0].setAttribute('class', 'vux-icon-dot active')
            //     dots[1].setAttribute('class', 'vux-icon-dot')
            // }

            let dialogMedal = document.querySelector('.dialog-medal')
            let medalImg = dialogMedal.querySelectorAll('.medal-img')
            let medalName = dialogMedal.querySelectorAll('.medal-name')
            let medalDes = dialogMedal.querySelector('.medal-des')
            let medalTime = dialogMedal.querySelector('.medal-time')

            medalName[0].textContent = item.name
            medalName[1].textContent = item.name
            medalImg[0].setAttribute('src', item.src)
            medalImg[1].setAttribute('src', item.src)
            medalDes.textContent = item.des
            medalTime.textContent = String(item.starTime) + ' - ' + String(item.endTime)
        }
    },
    mounted () {
    }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';

.page-content .main_bd .medal-swiper {
    position: absolute;
    width: 100%;
    top: 44px;
    bottom: 0;
}


/*勋章列表*/
.medal-swiper .medal-item p {
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    color: #666;
}
.medal-swiper .vux-swiper-item { overflow-y: auto; }
.medal-bg {
    font-size: 0;
    width: 70%;
    padding-top: 70%;
    margin: auto;
    border-radius: 50%;
    background-color: #f2f2f2;
    box-shadow: 0px 0px 1px #cdcdcd;
    background-size: cover;
}
/*弹出勋章详情*/
// .dialog-medal .weui-dialog { padding: 10px; height: 100%; } 
.dialog-medal header h3 {
    margin-bottom: 15px;
    padding-bottom: 4px;
    line-height: 2;
    font-weight:  normal;
}
.dialog-medal .dialog-content {
    position: absolute;
    top: 60px; bottom: 60px;
    width: 100%;
    padding: 0 10px;
    font-size: 12px;
    overflow-y: scroll;
}
.dialog-medal .dialog-content .img-box {
    float: left;
    overflow: hidden;
    border-radius: 50%;
    font-size: 0;
}
// 首屏图
.dialog-medal .dialog-content .img-box.first {
    float: none; 
    width: 60%; 
    margin: auto; 
    margin-top: 18%;
} 
.dialog-medal .dialog-content .medal-img {
    display: block;
    width: 60px; height: 60px;
    background-color: #f2f2f2;
}
// 首屏图
.dialog-medal .dialog-content .img-box.first .medal-img {
    width: 100%;
    height: 100%; 
}
.dialog-medal .dialog-content .medal-des {
    margin-left: 80px;
    text-align: left;
    line-height: 1.1;
    letter-spacing: 1px;
}
.dialog-medal footer {
    font-size: 12px;
    margin: auto;
    position: absolute;
    bottom: 30px;
    width: 100%;
}


</style>
<style>
/*轮播提示点*/
.dialog-medal .weui-dialog { padding: 10px; padding-top: 0; height: 60%; min-height: 300px; }
.dialog-medal .weui-dialog .vux-slider { height: 100%; }
.current-dots { bottom: 0 !important; }
.current-dots a > i.vux-icon-dot { background-color: #cdcdcd !important; }
.current-dots a > i.vux-icon-dot.active { background-color: #2e8ecf !important; }
.current-dots a:first-child { margin-left: 0 !important; }
</style>

