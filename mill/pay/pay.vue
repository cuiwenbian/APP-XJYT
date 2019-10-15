<template>
    <!-- 买单 -->
    <view class="container">
        <view class="box1">
            <view class="tab">
                <text class="colo">矿机交易</text>
                <text class="many">{{many}}台</text>
            </view>
        </view>
        <view class="box2">
            <view class="market">
                <button class="primary" >买单</button>
                <button class="primary1">卖单</button>
            </view>
        </view>
        <view class="box3">
            <view class="sold">
                <text class="bt">待付款</text>
                <view class="xia"></view>
                <text>待确认</text>
                <view class="xia"></view>
                <text>待付款</text>
                <view class="xia"></view>
                <text>待付款</text>
                <view class="xia"></view>
            </view>
        </view>
    </view>
</template>

<script>
</script>

<style>
    .box1{
        height: 280rpx;
        background-color:#091219;
        position: relative;
    }
    .tab {
        width: 100%;
    }
    .colo {
        position: absolute;
        top: 42%;
        left: 41%;
        font-size: 16px;
        color: #FFFFFF;
    }
    .many{
        position: absolute;
        top: 64%;
        left: 47%;
        font-size: 14rpx;
        color: #DCB16E;
    }
    .box2{
        height: 200rpx;
        background-color: #FFFFFF;
        position: relative;
    }
    .market {
        width: 100%;
    }
    .primary {
        position: absolute;
        top: 20%;
        left: 5%;
        width: 300rpx;
        height: 120rpx;
        line-height: 120rpx;
        
    }
    .primary1 {
        position: absolute;
        top: 20%;
        left: 57%;
        width: 300rpx;
        height: 120rpx;
        line-height: 120rpx;
       background-color: #091219;
        color: #FFFFFF;
    }
    .box3 {
        height: 90rpx;
        background-color: #F6F6F6;
        position: relative;
    }
    .box3 text {
        float: left;
        padding-left: 90rpx;
        line-height: 90rpx;
        font-size: 28rpx;
        padding-bottom : 40rpx;
        
    }
    .xia {
        display: block;
        float: left;
        width: 90rpx;
        border-bottom: 2rpx solid #DCB16E;
        margin-left: -84rpx;
        margin-top: 90rpx;
        border: hidden;
    }

</style>
