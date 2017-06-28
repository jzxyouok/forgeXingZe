<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd">
                    <x-header :left-options="{backText: ''}">手机绑定</x-header>
            </header>
            <div class="main_bd">
                <group class="phone-group">
                    <x-input type="tel" placeholder="请输入手机号" class="input-phone" :show-clear="false">
                        <span slot="label" class="iconfont icon-phone"></span>
                        <div slot="right" class="get-code">验证码</div>
                    </x-input>
                    <x-input type="number" placeholder="请输入验证码" class="input-code">
                        <span slot="label" class="iconfont icon-code"></span>
                    </x-input>
                </group>
                <div style="margin: auto 10px;">
                    <x-button class="save-btn"  @click.native="isPhone=false">绑定</x-button>
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
    margin: 40px auto 15px;
    background-color: #1b92c8;
}
</style>
