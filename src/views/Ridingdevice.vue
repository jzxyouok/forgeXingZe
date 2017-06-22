<template>
    <div class="page page-device">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">智能设备</x-header>
            </header>
            <div class="main_hd">
                <group-title class="device-category">传感器</group-title>
                <grid :rows="4" class="device-row">
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">鳃</p>
                    </grid-item>
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">踏频器</p>
                    </grid-item>
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">心率计</p>
                    </grid-item>
                </grid>

                <group-title class="device-category">码表</group-title>
                <grid :rows="4" class="device-row">
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">行者码表</p>
                    </grid-item>
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">佳明码表</p>
                    </grid-item>
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">百锐腾码表</p>
                    </grid-item>
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">iGSport码表</p>
                    </grid-item>
                </grid>

                <group-title class="device-category">其他智能设备</group-title>
                <grid :rows="4" class="device-row">
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">基本概念</p>
                    </grid-item>
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">麦步手表</p>
                    </grid-item>
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">腾讯手表</p>
                    </grid-item>
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">安卓手表</p>
                    </grid-item>
                    <grid-item class="device-item" >
                        <div class="device-img"></div>
                        <p class="device-name">Pebble手表</p>
                    </grid-item>
                </grid>
            </div>
        </div>
    </div>
</template>

<script>
import {
    XHeader,
    Grid, GridItem, GroupTitle
} from 'vux'
export default {
    components: {
        XHeader,
        Grid,
        GridItem,
        GroupTitle
    }
}
</script>

<style scoped>
.page-content > .main_hd { background-color: #f2f2f2; }

.device-row, .device-category { background-color: #fff; margin-bottom: 0; }
.device-category { line-height: 2.6; }
.device-row .device-item {
    padding: 10px 5px;
    text-align: center;
}
.device-item .device-name {
    font-size: 12px;
    color: #666;
}
.device-item .device-img {
    width: 60px;
    height: 60px;
    margin: auto;
    margin-bottom: 6px;
    background-color: #666;
}

</style>
