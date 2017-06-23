<template>
    <div class="page page-rank">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">等级权限说明</x-header>
            </header>
            <div class="main_bd">
                <header class="content-hd">
                    <div class="u-info clearfix">
                        <div class="u-photo float_l"><img src="../assets/images/photo.jpg" alt="photo"><span class="rankNum">Lv 0</span></div>
                        <div class="text-Uinfo float_l">
                            <div class="float_l">
                                <p class="name">黑钦王</p>
                                <p class="my-addre">广西南宁市，男，18</p>
                            </div>
                            <div class="total-info">
                                <span>Lv.1</span>
                                <p>当前等级</p>
                            </div>
                        </div>
                    </div>
                    <group class="progress-box" gutter="0">
                        <CellBox class="row">
                            <div slot="default" class="float_r rank-num">Lv.2</div>
                            <div slot="default" class="degree-num">
                                <p>等级成长</p>
                                <div class="progress-length">
                                    <box>
                                        <x-progress :percent='degree' :show-cancel="false"></x-progress>
                                    </box>
                                </div>
                                <p class="des">当前总热度： <strong class="current">0 ℃</strong><span class="float_r">3℃</span></p>
                            </div>
                        </CellBox>
                    </group>
                </header>
                <div class="content-box">
                    <div class="hd-tab">
                        <sticky scrollBox="vux_view_box_body" :offset="46">
                            <tab :line-width="2" active-color="#2e8ecf" v-model="tabIndex" >
                                <tab-item v-for="(item, index) in tabImg" :key='index' >{{item.name}}</tab-item>
                            </tab>
                        </sticky>
                    </div>
                    <swiper :show-dots="false" height="100%" v-model="tabIndex" class="medal-swiper rank-swiper" >
                        <swiper-item v-for="(item, index) in tabImg" :key='index' >
                            <h4 class="condition-title">{{item.condition}}</h4>
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
        </div>
        <!--弹出层-->
        <x-dialog style="height: 100%;" class="dialog-medal dialog-rank" v-model="isDialog"  :hide-on-blur='true' >
            <div style="padding: 5px 10px; height: 100%; position: relative;">
                <header><h3 class="rankItem-name vux-1px-b"></h3></header>
                <div class="rankItem-des"></div>
                <button class="rankItem-btn" @click="isDialog=false">我知道了</button>
            </div>
        </x-dialog>
    </div>
</template>

<script>
import {
    XHeader, XProgress, XDialog,
    Group, CellBox, Box,
    Tab, TabItem, Sticky, Swiper, SwiperItem, Grid, GridItem,
    TransferDomDirective as TransferDom
} from 'vux'
export default {
    data () {
        return {
            'degree': 10,
            'color': "#000",
            'isFalse': false,
            'tabIndex': 0,     // tab滚动索引
            'dialogIndex': 0,  // 弹出层滚动索引
            'tabImg': [
                {
                    'id': 1,
                    'name': 'Lv.1',
                    'condition': 'Lv.1 需要总热度达到 0℃',
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
                {
                    'id': 2,
                    'name': 'Lv.2',
                    'condition': 'Lv.2 需要总热度达到 3℃',
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
                {
                    'id': 3,
                    'name': 'Lv.3',
                    'condition': 'Lv.3 需要总热度达到 10℃',
                    'medalArry': [
                        {
                            'id': 23,
                            'name': '平凡的世界',
                            'src': require('../assets/images/photo.jpg')
                        }
                    ]
                },
                {
                    'id': 4,
                    'name': 'Lv.4',
                    'condition': 'Lv.4 需要总热度达到 30℃',
                    'medalArry': [
                        {
                            'id': 41,
                            'name': '月度挑战者',
                            'src': require('../assets/images/photo.jpg')
                        }
                    ]
                },
                {
                    'id': 5,
                    'name': 'Lv.5',
                    'condition': 'Lv.5 需要总热度达到 100℃',
                    'medalArry': [
                        {
                            'id': 51,
                            'name': '月度挑战者',
                            'src': require('../assets/images/photo.jpg')
                        }
                    ]
                },
                {
                    'id': 6,
                    'name': 'Lv.6',
                    'condition': 'Lv.6 需要总热度达到 200℃',
                    'medalArry': [
                        {
                            'id': 61,
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
        XProgress,
        XDialog,
        Group,
        CellBox,
        Box,
        Tab,
        TabItem,
        Sticky,
        Swiper,
        SwiperItem,
        Grid,
        GridItem
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

            // let dialogMedal = document.querySelector('.dialog-medal')
            // let medalImg = dialogMedal.querySelectorAll('.medal-img')
            // let medalName = dialogMedal.querySelectorAll('.medal-name')
            // let medalDes = dialogMedal.querySelector('.medal-des')
            // let medalTime = dialogMedal.querySelector('.medal-time')

            // medalName[0].textContent = item.name
            // medalName[1].textContent = item.name
            // medalImg[0].setAttribute('src', item.src)
            // medalImg[1].setAttribute('src', item.src)
            // medalDes.textContent = item.des
            // medalTime.textContent = String(item.starTime) + ' - ' + String(item.endTime)
            let dialogRank = document.querySelector('.dialog-rank')
            let rankItemName = dialogRank.querySelector('.rankItem-name')
            let rankItemDes = dialogRank.querySelector('.rankItem-des')

            rankItemName.textContent = item.name
            rankItemDes.textContent = item.des
        }
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';

.page-content .main_bd {  background-color: #f2f2f2; }
/*u-info*/
.content-hd .u-info {
    position: relative;
    box-sizing: border-box;
    
    background-color: #59add2;
    margin-left: 0;
    padding: 20px 10px 30px;
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
    top: auto; bottom: 20px; 
    right: auto; left: 42px;
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
    width: 100%; height: auto;
    padding-left: 75px;
    position: absolute;
    font-size: 12px;
    color: #fff;
    box-sizing: border-box;

    margin-top: 10px;

}
.u-info .text-Uinfo .name { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
.u-info .text-Uinfo .total-info {
    position: absolute;
    z-index: 999;
    top: auto;

    right: 25px;
    bottom: 0;
    text-align: center;
}
.u-info .total-info p { font-size: 10px; }
.u-info .total-info span { font-size: 16px; font-weight: 600; }

/*进度条*/
.progress-box .degree-num {
    font-size: 12px; color: #888; 
    overflow: hidden;
    padding-left: 5px;
    padding-right: 20px;
}
.degree-num .progress-length {
    position: relative;
    padding-right: 0;
    margin: 5px auto;
}
.degree-num .current {
    font-size: 14px;
    color: #f04c5b;
    font-weight: normal;
}
.progress-box .rank-num {
    font-size: 16px; 
    color: #59add2; 
    margin-right: 5px;
    margin-top: 15px;
}

/*滚动*/
.main_bd .content-box {
    position: absolute;
    width: 100%;
    bottom: 0;
    top: 195px;
    background-color: #fff;
}
.content-box .medal-swiper {
    position: absolute;
    top: 46px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
/*列表*/
.content-box .rank-swiper .condition-title {
    font-size: 16px;
    color: #59add2;
    font-weight: normal;
    margin: 10px auto;
    text-align: center;
}
.content-box .medal-swiper .medal-item p {
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    color: #666;
}
.content-box .medal-swiper .vux-swiper-item { overflow-y: auto; background-color: #fff; }
.content-box .medal-bg {
    font-size: 0;
    width: 60%;
    padding-top: 60%;
    margin: auto;
    border-radius: 50%;
    background-color: #f2f2f2;
    box-shadow: 0px 0px 1px #cdcdcd;
    background-size: cover;
}

/*弹出勋章详情*/
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
    padding: 0;
    font-size: 12px;
    overflow-y: auto;
}
.dialog-medal .dialog-content .img-box {
    float: left;
    overflow: hidden;
    border-radius: 50%;
    font-size: 0;
}
/*首屏图*/
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
/*首屏图*/
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

.dialog-rank .rankItem-des {
    font-size: 14px;
    text-align: justify;
}
// 按钮
.dialog-rank .rankItem-btn {
    display: block;
    position: absolute;
    bottom: 5px; top: auto;
    left: 0; right: 0;

    width: 100%;
    padding: 8px 0;
    border: 1px solid #59add2;
    border-radius: 2px;
    background-color: #fff;
    outline: 0;

    color: #59add2;
    font-size: 16px;
}

</style>
<style>
.progress-box .row > div {
    padding-right: 0;
    display: block;
    width: 100%;
}
.progress-box .degree-num .weui-progress__bar {
    height: 10px;
    border-radius: 4px;
}
.progress-box .degree-num .weui-progress__inner-bar { border-radius: inherit; }

/*弹出层*/
.dialog-medal .weui-dialog {
    padding: 10px;
    padding-top: 0;
    height: 60%;
}
.dialog-medal .weui-dialog .vux-slider { height: 100%; }
</style>

