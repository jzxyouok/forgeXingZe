<template>
    <div class="page page-user">
        <div class="page-content">
            <header class="top_hd">
                <x-header :left-options="{backText: ''}">修改资料</x-header>
            </header>
            <div class="main_bd">
                <div class="userinfo-con">
                    <group gutter="0">
                        <cell title="头像">
                            <div slot="value">
                                <div class="u-photo"><img :src="userInfo.photo" alt="photo"></div>
                            </div>
                        </cell>
                        <cell title="用户名" @click.native="dialogFun('name-input')">
                            <div slot="value">
                                <div class="u-name">{{userInfo.name}}</div>
                            </div>
                        </cell>
                        <cell title="地址">
                            <div slot="value">
                                <div class="u-address">{{userInfo.address.string_}}</div>
                            </div>
                        </cell>
                    </group>

                    <group gutter="10px">
                        <cell title="性别" @click.native="dialogFun('sex-input')">
                            <div slot="value">
                                <div class="u-sex">{{userInfo.sex.name}}</div>
                            </div>
                        </cell>
                        <cell title="年龄" @click.native="dialogNewFun('age')">
                            <div slot="value">
                                <div class="u-age">{{userInfo.age}}</div>
                            </div>
                        </cell>
                        <cell title="身高" @click.native="dialogNewFun('height')">
                            <div slot="value">
                                <div class="u-height">{{userInfo.height}}cm</div>
                            </div>
                        </cell>
                        <cell title="体重" @click.native="dialogFun('weight-input')">
                            <div slot="value">
                                <div class="u-weight">{{userInfo.weight}}kg</div>
                            </div>
                        </cell>
                    </group>

                    <div style="margin: auto 10px;">
                        <x-button class="save-btn"  @click.native="isPhone=false">确定修改</x-button>
                    </div>
                </div>
            </div>
        </div>
        <!--基础弹层-->
        <x-dialog class="all-dialog old_dialog" v-model="isDialog"
            :hide-on-blur="true"
            :dialog-style="{'text-align': 'left'}">
            <div class="sex-box" v-show="isDialog && isSex">
                <div class="content-box">
                    <div class="content-hd">请选择性别</div>
                    <div class="content-sex" is-link @click.stop="sexFun(0, '男')">男</div>
                    <div class="content-sex" is-link @click.stop="sexFun(1, '女')">女</div>
                </div>
            </div>
            <div class="name-box" v-show="isDialog && isName">
                <div class="content-box">
                    <div class="content-hd">修改昵称</div>
                    <div class="content-input">
                        <input type="text" class="input-con" id="name-input" :value="userInfo.name">
                    </div>
                    <div class="content-btn text_r">
                        <div class="close-btn" @click.stop="isDialog = false">取消</div>
                        <div class="save-btn" @click.stop="okbtnFun('name-input')">确定</div>
                    </div>
                </div>
            </div>
            <div class="weightr-box" v-show="isDialog && isWeight">
                <div class="content-box">
                    <div class="content-hd">修改体重</div>
                    <div class="content-input">
                        <input type="text" class="input-con" id="weight-input" :value="userInfo.weight">
                    </div>
                    <div class="content-btn text_r">
                        <div class="close-btn" @click.stop="isDialog = false">取消</div>
                        <div class="save-btn" @click.stop="okbtnFun('weight-input')">确定</div>
                    </div>
                </div>
            </div>
        </x-dialog>
        <!--身高、年龄-->
        <x-dialog class="all-dialog new_dialog" v-model="isNewDialog"
            dialog-transition="dialogAnimation"
            mask-transition="mask_hidden"
            :hide-on-blur="true"
            :dialog-style="dialogStyle">
            <!--年龄-->
            <div class="age-box" v-show="isNewDialog && isAge" dialog-transition="fuck">
                <ul>
                    <li class="list-item" v-for="n in 90" :key="n" @click.stop="newokbtnFun('age', n)">{{n}}</li>
                </ul>
            </div>
            <!--身高-->
            <div class="height-box" v-show="isNewDialog && isHeight">
                <ul>
                    <li class="list-item" v-for="n in 230" :key="n" v-if="n >= 50" @click.stop="newokbtnFun('height', n)">{{n}}</li>
                </ul>
            </div>
        </x-dialog>
    </div>
</template>

<script>
import {
    XHeader, XButton, XInput, XTextarea,
    Group, XDialog, Cell
} from 'vux'
export default {
    components: {
        XHeader,
        XButton,
        XInput,
        XTextarea,
        Group,
        XDialog,
        Cell
    },
    data () {
        return {
            'userInfo': {
                'photo': require('../../assets/images/photo.jpg'),
                'name': '农振立',
                'sex': {
                    'number': 0,
                    'name': '男'
                },
                'age': 9,
                'height': 170,
                'weight': 65.0,
                'birthday': '2017-6-18',
                'phone': 1313277334,
                'email': 'nong99@outlook.com',
                'address': {
                    'province': '广西壮族自治区',
                    'city': '南宁市',
                    'string_': '广西壮族自治区 南宁市'
                }
            },
            'isDialog': false,
            'isName': false,
            'isSex': false,
            'isAge': false,
            'isHeight': false,
            'isWeight': false,
            'isNewDialog': false, // 另外一个弹层
            // 自定义弹窗样式
            'dialogStyle': {
                'width': '60%',
                'text-align': 'left',
                'right': '15px',
                'left': 'auto',
                'transform': 'translateX(0)',
                'top': '60px'
            }
        }
    },
    watch: {
        isDialog(val, oldVal) {
            if (val === false) {
                this.isName = false
                this.isSex = false
                this.isWeight = false
            }
        },
        isNewDialog(val, oldVal) {
            if (val === false) {
                this.isAge = false
                this.isHeight = false
            }
        }
    },
    methods: {
        dialogFun (type_) {
            this.isDialog = true
            // 性别
            switch (type_) {
                case 'sex-input':
                    this.isSex = true
                    break
                case 'name-input':
                    this.isName = true
                    break
                case 'weight-input':
                    this.isWeight = true
                    break
                default :
                    return false
            }
            setTimeout(function autoInputFocus() {
                if (type_ !== 'sex-input') {
                    document.getElementById(type_).focus()
                }
            }, 300)
        },
        dialogNewFun (type_) {
            this.isNewDialog = true
            switch (type_) {
                case 'age':
                    this.isAge = true
                    break
                case 'height':
                    this.isHeight = true
                    break
                default:
                    return false
            }
        },
        // 性别
        sexFun (number_, value_) {
            this.userInfo.sex.number = number_
            this.userInfo.sex.name = value_
            this.isDialog = false
        },
        // 体重、昵称
        okbtnFun (id_) {
            switch (id_) {
                case 'name-input':
                    // ## 通过 querySelector() 没办法获取value值
                    let nameValue = document.getElementById(id_).value
                    this.userInfo.name = nameValue
                    this.isDialog = false
                    break
                case 'weight-input':
                    // ## 通过 querySelector() 没办法获取value值
                    let weightValue = document.getElementById(id_).value
                    console.log(weightValue)
                    this.userInfo.weight = weightValue
                    this.isDialog = false
                    break
                default:
                    return false
            }
        },
        newokbtnFun (type_, val_) {
           this.userInfo[type_] = val_
           this.isNewDialog = false
        }
    },
    mounted () {
    }
}
</script>

<style lang="less"  scoped>
@import '//at.alicdn.com/t/font_h4xlek2jnd5z5mi.css';

.page-content { background-color: #f2f2f2; }
.userinfo-con .weui-cell {
    font-size: 14px;
    padding-top: 15px;
    padding-bottom: 15px;
}
.userinfo-con .u-photo {
    width: 46px;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
}
.userinfo-con .u-photo img{
    display: block;
    font-size: 0;
    width: 100%;
    max-width: 100%;
}

// 弹窗
.all-dialog .content-hd
.all-dialog .content-box { margin: 0 auto 5px; }
.all-dialog .content-box .content-hd {margin-top: 8px; }
.all-dialog .content-box > div { padding: 8px 15px; font-size: 14px; }
.all-dialog .content-sex:active { background-color: #ECECEC; }
.save-btn {
    color: #fff;
    margin: 20px auto 15px;
    background-color: #1b92c8;
}
.all-dialog .content-input {
    margin: 5px 15px 10px;
    border: 1px solid #eee;
    padding: 2px 6px !important;
}
.all-dialog .content-input .input-con {
    border: none;
    outline: none;
    line-height: 2;
    display: block;
    width: 100%;
}
.all-dialog .content-btn > div {
    display: inline-block;
    padding: 4px 8px;
    color: #aaa;
    margin: 0;
    margin-left: 10px;
    border-radius: 4px;
}
.all-dialog .content-btn > div.save-btn {
    color: #fff;
}

// 性别
.sex-box .content-box { margin: 0 auto 5px; }
.sex-box .content-box .content-hd { margin-top: 0; }

// 身高、年龄 弹层动画
.new_dialog .list-item {
    text-align: center;
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    color: #888;
    font-size: 14px;
}
.new_dialog div {
    height: 272px;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #f2f2f2;
}
.new_dialog .height-box { height: 306px; }
.new_dialog li.list-item:active { background-color: #f2f2f2; }

@keyframes dialogAnimation {
  from {
    width: 0; height: 0;
    transform: scale(0, 0);
    opacity: 0;
    transition: all 1s;    
  }
  to {
    width: 100%; height: 100%;
    transform: scale(1, 1);
    opacity: 1;
    transition: all 1s;
  }
}
</style>
<style>
.all-dialog.new_dialog > div.weui-mask { background-color: transparent }
</style>

