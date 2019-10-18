<template>
    <!-- 卖单 -->
    <view class="container">
        <view class="box1">
            <view class="tab">
                <text class="colo">买单数量</text>
                <text class="many">{{many}}<text>台</text></text>
                <text class="colo1">卖</text>
                <text class="many1">卖出</text>
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
        
        <view class="order"> 
            <text class="mation">卖家姓名</text>
            <text class="contact">联系方式</text>
            <view class="line"></view>
            
            <view class="edit">订单编号</view>
            <view class="numbe">矿机数量</view>
            <view class="trading">交易总价</view>
            <view class="date">创建日期</view>
            <view class="line1"></view>
        </view>
        <view class="hz">
            <button class="btn1">取消订单</button>
            <button class="btn2">查看详细</button>
        </view>
    </view>
</template>

<script>
    export default {
    	data() {
    		return {
                many:'0'
    		};
        }
    }
</script>

<style>
    .box1{
        height: 280rpx;
        position: relative;
    }
    .tab {
        width: 100%;
    }
    .colo {
        position: absolute;
        top: 42%;
        left: 17%;
        font-size: 16px;
    }
    .many{
        position: absolute;
        top: 64%;
        left: 20%;
        font-size: 48rpx;
        color: #DCB16E;
    }
    .colo1{
        position: absolute;
        top: 42%;
        left: 70%;
        font-size: 28rpx;
    }
    .many1{
        position: absolute;
        top: 60%;
        left: 70%;
        font-size: 16rpx;
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
    .order{
        width: 100%;
        height: 238rpx;
        position: relative;
    }
    .mation{
        float: left;
        font-size: 28rpx;
        padding-left: 82rpx;
    }
    .contact{
        float: right;
        font-size: 28rpx;
        padding-right: 208rpx;
    }
    .line{
        position: absolute;
        top: 90rpx;
        left: 20rpx;
        width: 92%;
        border: 1rpx solid #CCCCCC;
        margin: 0 auto;
    }
    .edit{
        position: absolute;
        top: 142rpx;
        font-size: 28rpx;
        left: 82rpx;
    }
        
    .numbe{
        position: absolute;
        top: 246rpx;
        font-size: 28rpx;
        left: 82rpx;
    }
    .trading{
        position: absolute;
        top: 350rpx;
        font-size: 28rpx;
        left: 82rpx;
    }
    .date{
        position: absolute;
        top: 456rpx;
        font-size: 28rpx;
        left: 82rpx;
    }
    .line1 {
        position: absolute;
        top: 500rpx;
        left: 20rpx;
        width: 92%;
        border: 1rpx solid #CCCCCC;
    }
    .hz{
        position: relative;
        
    }
    .btn1{
        position: relative;
        top: 300rpx;
        left: 84rpx;
        width: 160rpx;
        height: 60rpx;
        font-size: 26rpx;
        line-height: 60rpx;
        color: #CCCCCC;
    }
    .btn2 {
        position: absolute;
        top: 300rpx;
        left: 550rpx;
        width: 160rpx;
        height: 60rpx;
        font-size: 26rpx;
        line-height: 60rpx;
        color: #FFFFFF;
        background-color: #091219;
    }
</style>
