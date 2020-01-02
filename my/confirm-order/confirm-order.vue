<template>
    <view class="container">
        <view class="box">
            <view class="transfer">转让详情</view>
            <view class="name">
                接收姓名:
                <text class="name1">{{ name }}</text>
            </view>
            <view class="name">
                手机号码:
                <text class="name1">{{ cool }}</text>
            </view>
            <view class="name">
                算力空间:
                <text class="name1">{{ shadrate }}T</text>
            </view>
            <view class="name">
                剩余时间:
                <text class="name1">{{ days }}天</text>
            </view>
        </view>
        <button :class="n ? 'btn' : 'btn1'" @click="btn">确认</button>
        <!-- #ifndef H5 -->
        <password-input v-if="passIn" ref="wrong" @clo="clo" @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
        <!-- #endif -->
        <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
        <!-- #ifdef H5 -->
        <view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" :list="numberList" ref="wrong"></password-input></view>
        <!-- #endif -->
        <!-- 数字键盘 -->
        <keyboard-package ref="number" @onChange="onChange" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
        <!-- <button class="primary1">我已付款</button> -->
    </view>
</template>

<script>
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
export default {
    data() {
        return {
            n: true,
            name: '',
            cool: '',
            numberList: [],
            passIn: false,
            days: '',
            shadrate: ''
        };
    },
    components: {
        keyboardPackage,
        passwordInput
    },
    onLoad(option) {
        this.name = option.name;
        this.cool = option.cllo;
        this.id = option.ids;
        this.days = option.day;
        this.shadrate = option.shadrate;
        console.log(this.name);
        console.log(this.cool);
        console.log(this.id);
        console.log(this.days);
        console.log(this.shadrate);
    },
    methods: {
        clo: function() {
            this.passIn = false;
            this.$refs['number'].close();
            this.numberList.length = 0;
        },
        onChange(e) {
            if (e.show == false) {
                this.passIn = false;
            }
            this.numberList.length = 0;
        },
        onDelete() {
            this.numberList.pop();
        },
        onConfirm() {
            if (this.numberList.length != 6) {
                uni.showToast({
                    title: '请输入六位交易密码！',
                    duration: 2000,
                    icon: 'none'
                });
            }
        },
        onInput(val) {
            var that = this;
            that.numberList.push(val);
            that.password = that.numberList.join().replace(/,/g, '');
            if (that.numberList.length >= that.length) {
                uni.request({
                    url: that.url + 'cloudtransfer/',
                    method: 'POST',
                    data: {
                        name: this.name,
                        cool: this.cool,
                        days: this.days,
                        cloudid: this.id,
                        hashrate: this.shadrate,
                        mobile: ''
                    },
                    header: {
                        Authorization: 'JWT' + ' ' + that.global_.token
                    },
                    success(res) {
                        if (res.statusCode == 400) {
                            uni.showToast({
                                icon:'none',
                                title:'用户未实名认证通过'
                            })
                        }
                        if (res.statusCode == 401) {
                            that.numberList.pop();
                            that.numberList.length = 0;
                            that.$refs.wrong.flag = false;
                            var n = res.data.data.err_num;
                            var s = 5 - n;
                            that.$refs.wrong.tip = '剩余' + s + '次机会';
                        }
                        if (res.statusCode == 200) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.navigateTo({
                                url: '../successful/successful'
                            });
                            uni.showToast({
                                title: '付款完成',
                                duration: 3000
                            });
                        }
                        if(res.statusCode == 303) {
                            uni.showToast({
                                icon:'none',
                                title:'该用户不存在'
                            })
                        }
                        var page = getCurrentPages().pop();
                        if (page == undefined || page == null) return;
                    }
                });
                this.numberList.length = 0;
            }
        },
        btn: function() {
            var that = this;
            this.passIn = true;
            this.$refs['number'].open();
            this.onInput(val);
        }
        // btn: function() {
        //     uni.request({
        //         url: this.url + 'cloudtransfer/',
        //         method: 'POST',
        //         header: {
        //             Authorization: 'JWT' + ' ' + this.global_.token
        //         },
        //         data:{
        //             name:this.name,
        //             cool:this.cool,
        //             days:this.days,
        //             cloudid:this.id,
        //             hashrate:this.shadrate,
        //             mobile:''
        //         },
        //         success(res) {
        //             console.log(res);
        //             if (res.statusCode == 200) {
        //                 uni.navigateTo({
        //                     url: '../successful/successful'
        //                 });
        //             }else if (res.statusCode == 303) {
        //                 uni.showToast({
        //                     icon:'none',
        //                     title:'该用户不存在'
        //                 })
        //             }
        //         }
        //     });
        // }
    }
};
</script>

<style>
page {
    background-color: #0f1e2d;
}
.box {
    width: 704rpx;
    height: 652rpx;
    background-color: #0f2439;
    margin: 0 auto;
    margin-top: 20rpx;
    font-size: 26rpx;
    margin-bottom: 127rpx;
    color: #ffffff;
}
.transfer {
    height: 111rpx;
    line-height: 111rpx;
    padding-left: 48rpx;
    border-bottom: 1rpx solid #091926;
}
.name {
    padding-top: 57rpx;
    padding-left: 48rpx;
}
.name1 {
    padding-left: 40rpx;
}
.btn {
    width: 706rpx;
    height: 88rpx;
    background-color: #41bec9;
    font-size: 30rpx;
    color: #ffffff;
}
.btn1 {
    width: 706rpx;
    height: 88rpx;
    background: RGBA(0, 193, 203, 0.5);
    font-size: 30rpx;
    color: #ffffff;
}
</style>
