<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">
                    <tab :line-width="0" class="nav-tab" defaultColor="#fff" active-color="#000">
                        <tab-item selected class="navTab-item">已发货</tab-item>
                        <tab-item class="navTab-item">未发货</tab-item>
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
<style lang="less" scpode>
.top_hd .vux-tab.nav-tab {
    height: 32px;
    background: #000;
    margin-top: 4px;
    border: 1px solid #fff;
    border-radius: 2px;
    overflow: hidden;
}
.vux-tab.nav-tab .vux-tab-item {
    background: inherit;
    line-height: 32px;
}
.vux-tab.nav-tab .vux-tab-item.vux-tab-selected { background: #fff; }
</style>

