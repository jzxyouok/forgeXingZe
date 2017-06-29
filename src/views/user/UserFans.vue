<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">
                    <tab :line-width="0" class="nav-tab" defaultColor="#fff" active-color="#000">
                        <tab-item selected class="navTab-item">粉丝</tab-item>
                        <tab-item class="navTab-item">关注</tab-item>
                    </tab>
                </x-header>
            </header>
            <div class="main_bd">
                <div class="content-con">
                    xxxx
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    XHeader, XButton, XInput, XTextarea,
    Group, XDialog, Cell,
    Tab, TabItem
} from 'vux'
export default {
    components: {
        XHeader,
        XButton,
        XInput,
        XTextarea,
        Group,
        XDialog,
        Cell,
        Tab,
        TabItem
    },
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
<style lang="less">
.vux-header .vux-header-title, .vux-header h1 { margin: 0 110px !important; }
.top_hd .vux-tab.nav-tab {
    height: 28px;
    background: #000;
    margin-top: 6px;
    border: 1px solid #fff;
    border-radius: 2px;
    overflow: hidden;
}
.vux-tab.nav-tab .vux-tab-item {
    background: inherit;
    line-height: 28px;
}
.vux-tab.nav-tab .vux-tab-item.vux-tab-selected { background: #fff; }
</style>

