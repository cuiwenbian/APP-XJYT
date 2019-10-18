<template>
    <!-- 买单 -->
    <view class="container">
        <view class="box1">
            <view class="colo">买单数量</view>
            <view class="many">{{many}}台</view>		
			<view class="colo1">买</view>
			<view class="many1">卖出</view>
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
			<view class="top">
				<text class="mation">买家姓名</text>
				<text class="contact">联系方式</text>
			</view>
			
            <view class="line"></view>
            <view class="xi">
				<view class="edit">订单编号</view>
				<view class="numbe">矿机数量</view>
				<view class="trading">交易总价</view>
				<view class="date">创建日期</view>
			</view>

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
    }
    .colo {
		float: left;
		width: 50%;
		height: 40rpx;
		padding-left: 48rpx;
		padding-top: 80rpx;
        font-size: 24px;
    }
   .many{
		float: left;
		width: 36%;
		height: 60rpx;
		padding-left: 62rpx;
		padding-top: 40rpx;
        font-size: 28rpx;
        color: #DCB16E;
    }    
	.colo1{
		height: 60rpx;
		padding-top: 80rpx;
		padding-left: 552rpx;
	}
	.many1{
		float: right;
		width: 10%;
		height: 60rpx;
		padding-right: 140rpx;
	}
    .box3 {
        height: 90rpx;
        background-color: #F6F6F6;

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

    }
	.top{
		height: 88rpx;
	}
	.xi {
		height: 360rpx;
	}
    .mation{
        float: left;
		height: 40rpx;
        font-size: 28rpx;
        padding-left: 48rpx;
    }
    .contact{
        float: right;
        font-size: 28rpx;
        padding-right: 208rpx;
    }
    .line{
        width: 92%;
        border: 1rpx solid #CCCCCC;
        margin: 0 auto;
    }
    .edit{
		float: left;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		padding-left: 48rpx;
        font-size: 28rpx;
    }
        
    .numbe{
		float: left;
		height: 90rpx;
		line-height: 90rpx;
		width: 100%;
		padding-left: 48rpx;
        font-size: 28rpx;

    }
    .trading{
		float: left;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		padding-left: 48rpx;
        font-size: 28rpx;

    }
    .date{
		float: left;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		padding-left: 48rpx;
        font-size: 28rpx;

    }
    .line1 {
        width: 92%;
		margin: 0 auto;
        border: 1rpx solid #CCCCCC;
    }
    .hz{
        width: 100%;
		height: 80rpx;
    }
    .btn1{
		float: left;
		margin-left: 340rpx;
		margin-top: 40rpx;
        width: 160rpx;
        height: 60rpx;
        font-size: 26rpx;
        line-height: 60rpx;
        color: #CCCCCC;
    }
    .btn2 {
		float: right;
		margin-right: 48rpx;
		margin-top: 40rpx;
        width: 160rpx;
        height: 60rpx;
        font-size: 26rpx;
        line-height: 60rpx;
        color: #FFFFFF;
        background-color: #091219;
    }
</style>
