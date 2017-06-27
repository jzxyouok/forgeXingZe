<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd">
                    <x-header :left-options="{backText: ''}">手机绑定</x-header>
            </header>
            <div class="main_bd">
                <group class="email-group">
                    <x-input type="email" placeholder="请输入邮箱" class="input-email" :show-clear="false">
                        <span slot="label" class="iconfont icon-email"></span>
                    </x-input>
                </group>
                <div style="margin: auto 10px;">
                    <x-button class="save-btn" @click.native="isEmail=false">绑定</x-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    XHeader, XButton, XInput,
    Group
} from 'vux'
export default {
    components: {
        XHeader,
        XButton,
        XInput,
        Group
    },
    data () {
        return {
            'isPhone': false
        }
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
@import '//at.alicdn.com/t/font_h4xlek2jnd5z5mi.css';

.page-content {
    background-color: #f2f2f2;
}
// 手机绑定、邮箱绑定、密码修改
.get-code {
    padding: 4px 6px;
    background-color: #1b92c8;
    font-size: 14px;
    color: #fff;
}
.iconfont {
    font-size: 20px;
    color: #ccc;
    margin-right: 10px
}
.phone-group .input-code::before,
.password-group .input-password-again::before  {
    left: 45px;
}
.save-btn {
    color: #fff;
    margin: 50px auto 30px;
    background-color: #1b92c8;
}
</style>
