<template>
    <view class="container">
        <view class="box">
            <text class="name">姓名:</text>
            <input type="text" placeholder="接收人姓名" placeholder-style="color:#8796AA" :value="name" class="inp" @input="end" />
            <view class="line"></view>
            <view class="name1">
                手机:
                <input type="number" maxlength="11" placeholder-style="color:#8796AA" @input="ennd" :value="coloe" placeholder="接收人手机号码" class="int" />
            </view>
        </view>
        <view><text class="stop">提示:交易需要买家和卖家进行实名认证</text></view>
        <view class="btn"><button class="primary" @click="step" @touchstart="next" @touchend="back">下一步</button></view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            coloe: '',
            ids: '',
            days: '',
            rate: ''
        };
    },
    onLoad(option) {
        this.ids = option.ids;
        this.days = option.day;
        this.rate = option.rate;
    },
    methods: {
        end: function(e) {
            this.name = e.detail.value;
        },
        ennd: function(e) {
            this.coloe = e.detail.value;
        },
        step: function() {
            var that = this;
            var name = that.name;
            var cool = that.coloe;
            if (this.name == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请输入姓名'
                });
                return false;
            } else if (this.coloe == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请输入手机号'
                });
            }
            var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
            if (!myreg.test(this.coloe)) {
                uni.showToast({
                    title: '请输入正确的手机号',
                    icon: 'none',
                    mask: true,
                    duration: 2000
                });
                return false;
            }
            uni.navigateTo({
                url: '../confirm-order/confirm-order?name=' + name + '&cllo=' + cool + '&ids=' + that.ids + '&day=' + that.days + '&shadrate=' + that.rate
            });
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
    width: 300rpx;
    padding-right: 240rpx;
    font-size: 24rpx;
    color: #ffffff;
    height: 144rpx;
    float: right;
}
.int {
    font-size: 24rpx;
    height: 144rpx;
    float: right;
    color: #ffffff;
    padding-left: 60rpx;
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
</style>
