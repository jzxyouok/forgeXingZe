<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">个人信息</x-header>
            </header>
            <div class="main_bd">
                <div class="content-box">
                    <CellBox is-link class="u-info " is-link >
                        <div class="u-photo float_l"><img src="../assets/images/photo.jpg" alt="photo"><span class="rankNum">Lv 0</span></div>
                        <div class="text-Uinfo">
                            <p class="u-name">黑钦王</p>
                            <p class="my-addre">广西壮族自治区 南宁市</p>
                        </div>
                    </CellBox>

                    <group class="group group-list" gutter="10px">
                        <cell title="行者报名卡" is-link @click.native="">
                        </cell>
                        <cell title="运动装备设置" is-link @click.native="">
                        </cell>
                    </group>

                    <group class="group group-list" gutter="10px">
                        <cell title="手机号" value="点击绑定手机号码" is-link @click.native="phoneDoalogFun()">
                        </cell>
                        <cell title="邮箱" value="点击绑定邮箱" is-link @click.native="">
                        </cell>
                        <cell title="密码" value="修改密码" is-link @click.native="">
                        </cell>
                    </group>

                    <grid :rows="3" class="bind-info">
                        <grid-item>
                            <span class="iconfont icon-qq"></span>
                            <p>QQ</p>
                        </grid-item>
                        <grid-item>
                            <span class="iconfont icon-weixin"></span>
                            <p>微信</p>
                        </grid-item>
                        <grid-item>
                            <span class="iconfont icon-xinlang"></span>
                            <p>新浪</p>
                        </grid-item>
                    </grid>

                    <!-- 组件上绑定事件 @click.native -->
                    <div style="margin: auto 10px;">
                        <x-button type="warn">退出</x-button>
                    </div>
                </div>
            </div>
        </div>
        <!--手机-->
        <x-dialog v-model="isPhone">
            <header class="top_hd">
                <x-header :left-options="{showBack: false}">手机绑定</x-header>
            </header>
            <div class="main_bd">
                <group class="phone-group">
                    <x-input placeholder="请输入手机号" class="input-phone">
                        <span slot="label" class="iconfont icon-phone"></span>
                    </x-input>
                    <x-input placeholder="请输入验证码" class="input-code">
                        <span slot="label" class="iconfont icon-code"></span>
                    </x-input>
                </group>
                <div style="margin: auto 10px;">
                    <x-button type="warn">退出</x-button>
                </div>
            </div>
        </x-dialog>  

        <!--密码-->
        <x-dialog v-model="isPassword">
        </x-dialog>  

        <!--邮箱-->
        <x-dialog v-model="isEmail">
        </x-dialog>  
    </div>
</template>

<script>
import {
    XHeader, XButton, XDialog, XInput,
    Group, Cell, CellBox,
    Grid, GridItem
} from 'vux'
export default {
    data () {
        return {
            'isPhone': false,
            'isPassword': false,
            'isEmail': false
        }
    },
    components: {
        XHeader,
        XButton,
        XDialog,
        XInput,
        Group,
        Cell,
        CellBox,
        Grid,
        GridItem
    },
    methods: {
        phoneDoalogFun () {
            this.isPhone = true
        }
    },
    mounted () {
    }
}
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/font_kezx2khkain0o1or.css';
// ++ userAdmin 
// ++ Class
.page-content {
    background-color: #f2f2f2;
}
// u-info
.main_bd .content-box > .vux-cell-box {
    background-color: #fff;
}
.u-info .u-photo {
    width: 64px;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
}
.u-info .u-photo img {
    display: block;
    font-size: 0;
    width: 100%;
    max-width: 100%;
}
.u-info .u-photo .rankNum {
    position: absolute;
    top: auto;
    bottom: 0;
    right: auto;
    left: 32px;
    z-index: 999;
    color: #fff;
    font-size: 10px;
    line-height: 1;
    background-color: #2e8ecf;
    padding: 2px 3px 1px;
    border: 1px solid #fff;
    border-radius: 4px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.u-info .text-Uinfo {
    width: 100%;
    height: 100%;
    padding-top: 10px;
    padding-left: 75px;
    position: absolute;
    font-size: 14px;
    box-sizing: border-box;
}
.u-info .text-Uinfo .my-addre { margin-top: 10px; }

// group-list
.main_bd .content-box > .group-list .weui-cell {
    font-size: 14px;
    padding-top: 14px;
    padding-bottom: 14px;
}

// bind-info
.main_bd .content-box > .bind-info {
    background-color: #fff;
    margin-top: 15px;
    margin-bottom: 30px;
    padding: 0;
    text-align: center;
}
.bind-info a {
    padding: 8px 0;
    font-size: 12px;
    color: #666;
}
.bind-info a .iconfont {
    font-size: 30px;
    line-height: 1;
}


// 弹层
.vux-x-dialog .main_bd {
    position: absolute;
    width: 100%;
    top: 50px; right: 0;
    bottom: 0; left: 0;
    background-color: #f2f2f2;
}
// 手机绑定
.phone-group .iconfont {
    font-size: 20px;
    color: #ccc;
    margin-right: 10px
}
.phone-group .input-code::before {
    left: 45px;
}

</style>
<style>
.vux-x-dialog > .weui-dialog {
    width: 100%; height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translate(0,0);
    max-width: 100%;
}
</style>

