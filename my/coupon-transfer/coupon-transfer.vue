<template>
    <view class="container">
        <view class="box">
            <text class="name">电话号码:</text>
            <input type="text" maxlength="11" placeholder="接收人电话号码" placeholder-style="color:#8796AA" class="inp" @input="getPhone" :value="phone" />
            <view class="line"></view>
            <view class="name1">转让数量:</view>
            <input type="number" placeholder-style="color:#8796AA" @input="getTransferNums" placeholder="优惠券数量" class="int" :value="transferNums" />
            <view class="all" @click="all">全部</view>
        </view>
        <view>
            <text class="stop">优惠券可用数量：{{ nums }}</text>
        </view>
        <view class="btn"><button :class="n ? 'primary' : 'primary1'" @click="step" @touchstart="next" @touchend="back">下一步</button></view>
        <!-- #ifndef H5 -->
        <password-input v-if="passIn" @clo="clo" ref="wrong" @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
        <!-- #endif -->
        <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
        <!-- #ifdef H5 -->
        <view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" ref="wrong" :list="numberList"></password-input></view>
        <!-- #endif -->
        <!-- 数字键盘 -->
        <keyboard-package ref="number" @onChange="onChange" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
    </view>
</template>

<script>
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
export default {
    data() {
        return {
            nums: '3',
            n: true,
            phone: '',
            transferNums: '',
            password: '',
            passIn: false,
            numberList: [],
            length: 6,
            type: ''
        };
    },
    onLoad(option) {
        this.type = option.t;
    },
    components: {
        keyboardPackage,
        passwordInput
    },
    methods: {
        getPhone: function(e) {
            this.phone = e.detail.value;
        },
        getTransferNums: function(e) {
            this.transferNums = e.detail.value;
        },
        all: function() {
            this.transferNums = this.nums;
        },
        step: function() {
            var that = this;
            if (this.phone == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请输入手机号'
                });
                return false;
            }
            var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
            if (!myreg.test(this.phone)) {
                uni.showToast({
                    title: '请输入正确的手机号',
                    icon: 'none',
                    mask: true,
                    duration: 2000
                });
                return false;
            }
            if (this.transferNums == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请输入转让数量'
                });
                return false;
            }
            this.passIn = true;
            this.$refs['number'].open();
            this.onInput(val);

            uni.navigateTo({
                url: '../coupon-success/coupon-success'
            });
        },
        clo: function() {
            this.passIn = false;
            this.$refs['number'].close();
            this.numberList.length = 0;
        },
        onDelete() {
            this.numberList.pop();
        },
        onChange(e) {
            if (e.show == false) {
                this.passIn = false;
            }
            this.numberList.length = 0;
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
                    url: this.url + 'discounttransfer/',
                    method: 'POST',
                    data: {
                        mobile: this.phone,
                        number: this.transferNums,
                        type: this.type,
                        password: this.password
                    },
                    header: {
                        Authorization: 'JWT' + ' ' + this.global_.token
                    },
                    success(res) {
                        if (res.statusCode == 303) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.showToast({
                                title: '用户不存在',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        if (res.statusCode == 302) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.showToast({
                                title: '不允许转让经销商',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        if (res.statusCode == 204) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.showToast({
                                title: '用户之间不允许转让',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        if (res.statusCode == 305) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.showToast({
                                title: '可用优惠券数量不足',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        if (res.statusCode == 200) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.redirectTo({
                                url: '../coupon-success/coupon-success'
                            });
                        }
                        if (res.statusCode == 400) {
                            that.numberList.pop();
                            that.numberList.length = 0;
                            that.$refs.wrong.flag = false;
                            var n = res.data.data.err_num;
                            var s = 5 - n;
                            that.$refs.wrong.tip = '剩余' + s + '次机会';
                        }
                        if (res.statusCode == 423) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.showToast({
                                title: '交易密码已锁定,请在今日24:00后进行交易',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        var page = getCurrentPages().pop();
                        if (page == undefined || page == null) return;
                        page.onLoad();
                    }
                });
                this.numberList.length = 0;
            }
        },
        next: function() {
            this.n = false;
        },
        back: function() {
            this.n = true;
        }
    }
};
</script>

<style>
page {
    background-color: #0f1e2d;
}
.box {
    width: 704rpx;
    height: 288rpx;
    background-color: #0f2439;
    margin: 40rpx auto;
}
.name {
    float: left;
    color: #ffffff;
    height: 144rpx;
    font-size: 26rpx;
    line-height: 144rpx;
    padding-left: 48rpx;
}
.line {
    height: 20rpx;
    width: 100%;
    padding-top: 128rpx;
    border-bottom: 1rpx solid #091926;
}
.name1 {
    float: left;
    color: #ffffff;
    font-size: 26rpx;
    height: 144rpx;
    line-height: 144rpx;
    padding-left: 48rpx;
}
.inp {
    width: 400rpx;
    font-size: 26rpx;
    color: #ffffff;
    height: 144rpx;
    margin-left: 93rpx;
    float: left;
}
.int {
    width: 350rpx;
    font-size: 26rpx;
    height: 144rpx;
    float: left;
    margin-left: 93rpx;
    color: #ffffff;
}
.all {
    color: #f2443c;
    font-size: 26rpx;
    line-height: 144rpx;
}
.stop {
    float: left;
    padding-left: 68rpx;
    padding-bottom: 161rpx;
    font-size: 24rpx;
    color: #ffffff;
}
.btn {
    height: 120rpx;
}
.primary {
    margin: 134rpx auto 0;
    width: 706rpx;
    height: 88rpx;
    background: #41bec9;
    text-align: center;
    line-height: 88rpx;
    color: #fff;
    font-size: 30rpx;
}
.primary1 {
    margin: 134rpx auto 0;
    width: 706rpx;
    height: 88rpx;
    background: RGBA(0, 193, 203, 0.5);
    text-align: center;
    line-height: 88rpx;
    color: #fff;
    font-size: 30rpx;
}
</style>
