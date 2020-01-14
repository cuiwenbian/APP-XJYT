<template>
    <!-- 提币地址 -->
    <view class="container" style="position: relative;">
        <view v-if="flag">
            <block v-for="item in address_out" :key="item.id">
                <view @click="click(item)">
                    <view class="list">
                        <view class="left">
                            <view class="nickTitle">地址昵称:</view>
                            <view class="nickname" :value="nickname">{{ item.wallet_key }}</view>
                            <view class="addTitle">提币地址:</view>
                            <view class="adr" :value="address">{{ item.wallet_value }}</view>
                        </view>
                    </view>
                </view>
            </block>
        </view>
        <view v-else>
            <view class="box"></view>
            <view>
                <image class="none" src="../../static/images/no-add.png" mode=""></image>
                <view class="tips">您还没有提币地址哦！</view>
            </view>
        </view>
    </view>
</template>
<script src="../../static/js/jquery.min.js"></script>
<script src="https://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script>
export default {
    data() {
        return {
            wallet_value: '',
            wallet_key: '',
            address_out: '',
            flag: true,
            right: '',
            id: '',
            shade: true,
            bar: '',
            fee: '',
            user_id: ''
        };
    },
    onLoad(options) {
        var that = this;
        that.bar = options.bar;
        that.fee = options.fee;
        uni.request({
            url: this.url + 'walletaddress/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success(res) {
                if (res.statusCode == 302) {
                    uni.showToast({
                        title: '资金密码未设置',
                        icon: 'none',
                        duration: 2000
                    });
                }
                if (res.data.data == '') {
                    that.flag = false;
                } else {
                    that.flag = true;
                }
                that.address_out = res.data.data;
            }
        });
    },
    methods: {
        click: function(item) {
            uni.redirectTo({
                url: '../transfer/transfer?wallet_value=' + item.wallet_value + '&bar=' + this.bar + '&fee=' + this.fee
            });
        }
    }
};
</script>

<style>
.shade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
.pop {
    width: 70%;
    height: 250rpx;
    margin: 450rpx auto 0;
    background: #fff;
    border-radius: 20rpx;
}
.pop-title {
    text-align: center;
    font-size: 32rpx;
    color: #121212;
    line-height: 150rpx;
}
.pop-bottom {
    width: 100%;
    height: 56rpx;
    display: flex;
    justify-content: space-between;
}
.pop-btn {
    width: 126rpx;
    height: 56rpx;
    border-radius: 10rpx;
    background: #121212;
    color: #fff;
    font-size: 30rpx;
    text-align: center;
    line-height: 56rpx;
}
.box {
    height: 200rpx;
}
.none {
    display: block;
    width: 150rpx;
    height: 150rpx;
    margin: 0 auto;
}
.tips {
    margin-top: 50rpx;
    text-align: center;
    color: #797979;
    font-size: 28rpx;
}
.newadd {
    width: 200rpx;
    height: 70rpx;
    background: #0a1117;
    border-radius: 50rpx;
    color: #fff;
    text-align: center;
    line-height: 70rpx;
    margin: 80rpx auto;
    font-size: 30rpx;
}
.list {
    width: calc(100% - 48rpx);
    height: auto;
    overflow: hidden;
    border-bottom: 1rpx solid #f2f2f2;
    margin-left: 48rpx;
}
.left {
    float: left;
    width: 85%;
}
.nickTitle {
    float: left;
    width: 25%;
    line-height: 60rpx;
    font-size: 30rpx;
}
.nickname {
    float: right;
    width: 75%;
    line-height: 60rpx;
    font-size: 30rpx;
    word-break: break-all;
    word-wrap: break-word;
}
.addTitle {
    float: left;
    width: 25%;
    line-height: 60rpx;
    font-size: 30rpx;
}
.adr {
    float: right;
    width: 75%;
    line-height: 60rpx;
    font-size: 30rpx;
    word-break: break-all;
    word-wrap: break-word;
}
.right {
    float: left;
    width: 15%;
}
.edit {
    width: 50rpx;
    height: 50rpx;
    margin-top: 50rpx;
    margin-left: 20rpx;
}
.delete {
    height: 140rpx;
    line-height: 140rpx;
    position: absolute;
    right: 0;
    width: 0;
    top: 0;
    background: red;
    color: #fff;
    text-align: center;
}
</style>
