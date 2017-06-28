<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">运动装备设置</x-header>
            </header>
            <div class="main_bd">
                <div class="enrollCard-con">
                    <p class="tip">完善行者报名卡内的资料后，报名行者赛事活动会自动填写个人信息。</p>
                    <group gutter="10px">
                        <x-input :show-clear="false" class="u-name" text-align="right" v-model="userInfo.name">
                            <span slot="label">姓名</span>
                        </x-input>
                        <x-input :show-clear="false" class="u-id" text-align="right" v-model="userInfo.userId">
                            <span slot="label">身份证</span>
                        </x-input>
                        <x-input :show-clear="false" class="u-sex"
                            text-align="right" 
                            v-model="userInfo.sex.name"
                            :readonly="true"
                            @click.native="sexDialogFun()" >
                            <span slot="label">性别</span>
                        </x-input>
                        <x-input :show-clear="false" class="u-birthday"
                            text-align="right"
                            v-model="userInfo.birthday"
                            :readonly="true"
                            @click.native="birthdayDialogFun()" >
                            <span slot="label">出生日期</span>
                        </x-input>
                    </group>

                    <group gutter="10px">
                        <x-input :show-clear="false" class="u-phone" text-align="right" v-model="userInfo.phone">
                            <span slot="label">手机</span>
                        </x-input>
                        <x-input :show-clear="false" class="u-email" text-align="right" v-model="userInfo.email">
                            <span slot="label">邮箱</span>
                        </x-input>
                        <x-textarea class="u-address" v-model="userInfo.address" :max="200" placeholder="请输入地址" :show-counter="false" :height="80">
                            <span slot="label">地址</span>
                        </x-textarea>
                    </group>

                    <group gutter="10px">
                        <x-input :show-clear="false" class="u-urgenUname" text-align="right" v-model="userInfo.urgentUname">
                            <span slot="label">紧急联系人</span>
                        </x-input>
                        <x-input :show-clear="false" class="u-urgenUphone" text-align="right"  v-model="userInfo.urgentUphone">
                            <span slot="label">紧急联系人电话</span>
                        </x-input>
                    </group>

                    <div style="margin: auto 10px;">
                        <x-button class="save-btn"  @click.native="isPhone=false">保存</x-button>
                    </div>
                </div>
            </div>
        </div>
        <!--弹窗-->
        <!--性别选择-->
        <x-dialog class="sex-dialog" v-model="sexDialog"
            :hide-on-blur="true"
            :dialog-style="{'text-align': 'left'}">
            <div class="content-box">
                <div class="content-hd">请选择性别</div>
                <div class="content-sex" is-link @click.stop="sexFun(0, '男')">男</div>
                <div class="content-sex" is-link @click.stop="sexFun(1, '女')">女</div>
            </div>
        </x-dialog>
        <!--生日选择-->
        <x-dialog class="birthday-dialog" v-model="birthdayDialog"
            :hide-on-blur="true">
            <div class="content-hd"><span class="data_">2017</span>年<span class="Month_">6</span>月<span class="Day_">23</span>日</div>
            <div class="content-box">
            </div>
        </x-dialog>
        
    </div>
</template>
<script>
import {
    XHeader, XButton, XInput, XTextarea,
    Group, XDialog
} from 'vux'
// 获取对应年、月、日
export default {
    components: {
        XHeader,
        XButton,
        XInput,
        XTextarea,
        Group,
        XDialog
    },
    watch: {
    },
    data () {
        return {
            'userInfo': {
                'name': '农振立',
                'userId': '450703199821321X',
                'sex': {
                    'number': 0,
                    'name': '男'
                },
                'birthday': '2017-6-18',
                'phone': 1313277334,
                'email': 'nong99@outlook.com',
                'address': '广西壮族自治区南宁市西乡塘区高科路28号',
                'urgentUname': 'big黑钦',
                'urgentUphone': 15578965432
            },
            'sexDialog': false,
            'birthdayDialog': false
        }
    },
    methods: {
        sexDialogFun () {
            this.sexDialog = true
        },
        birthdayDialogFun () {
            this.birthdayDialog = true
        },
        sexFun (number_, value_) {  // 选择性别
            this.userInfo.sex.number = number_
            this.userInfo.sex.name = value_
            this.sexDialog = false
            console.log(number_, value_)
        },
        birthdayFun () {
            console.log('xxx')
        }
    },
    mounted () {
    }
}
</script>
<style lang="less" scoped>
@import '//at.alicdn.com/t/font_h4xlek2jnd5z5mi.css';

.page-content { background-color: #f2f2f2; }
.enrollCard-con .tip {
    margin: 10px 15px;
    font-size: 10px;
    color: red;
    text-align: center;
}

// 弹窗
.sex-dialog .content-box { margin: 0 auto 5px; }
.sex-dialog .content-box div { padding: 8px 15px; font-size: 14px; }
.sex-dialog .content-sex:active { background-color: #ECECEC; }
.save-btn {
    color: #fff;
    margin: 20px auto 15px;
    background-color: #1b92c8;
}
</style>
<style>
.u-address textarea { padding-left: 25px; }

.enrollCard-con .weui-input,
.enrollCard-con .weui-textarea {
    font-size: 14px;
    color: #999;
}
.enrollCard-con .weui-cell__hd > span { font-size: 14px; }
.enrollCard-con .weui-textarea { padding-top: 5px; }

</style>

