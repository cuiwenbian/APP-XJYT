<template>
	<view class="container">
        <view class="height"></view>
        <swiper 
        indicator-dots 
        autoplay interval="3000" 
        circular
        indicator-color="rgda(255 , 255 , 255 , .6)"
        >
            <swiper-item>
                <image src="../../static/images/tu.png"></image>
            </swiper-item>
            <swiper-item>
                <image src="../../static/images/lb.png"></image>
            </swiper-item>
            <swiper-item>
                <image src="../../static/images/tu1.png"></image>
            </swiper-item>
        </swiper>
        
        <view class="notice">
            <image src="../../static/images/notice.png"></image>
            <view class="bgc">
                <image src="../../static/images/juxing.png">
                    <text>重大通知：明天是2019年10月15日，星期二</text>
                </image>
            </view>
        </view>
        <view class="bor"></view>
        <view class="borx">
            <view class="price">
                <text class="bot">
                    今日币价:<text class="Todayprice">{{Todayprice}}</text>
                </text>
                <text class="bot1">
                    昨日交易:<text class="yesterdayprice , yesterday"> +{{yesterdayprice}}  +{{yesterday}}</text>
                </text>
            </view>
        </view>
        
        <view class="bor1"></view>
        <view class="information">
            <view class="Small">
                <image src="../../static/images/information.png" mode="">
                    <text>热门资讯</text>
                </image>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {      
                Todayprice:"0.05",
                yesterdayprice:"0.52",
                yesterday:"1.0%"
			}
		},

		methods: {

		}
	}
</script>

<style>
    page {
        background-color: #121212;
    }
	.height {
		height: var(--status-bar-height);
	}
    .swiper{
      width:720rpx;
      height:270rpx;
      margin:20rpx auto;
    }
    swiper-item image {
      width: 100%;
      height:100%;
    }
    .notice{
        width: 100%;
        height: 60rpx;
        position: relative;
        top: 10rpx;
    }
    .notice image {
        position: absolute;
        left: 3%;
        top: 2%;
        width: 28rpx;
        height: 28rpx;
    }
    .bgc {
        position: absolute;
        left: 10%;
        width: 668rpx;
        height: 40rpx;
        background-color: #272727;
    }
    .bgc image {
        
        width: 40rpx;
    }
    .bgc  text {
        color: #FFFFFF;
        position: absolute;
        bottom: 2rpx;
        font-size: 26rpx; 
        padding-bottom: 4rpx;
        padding-left: 16rpx;
    }
    .bor {
        width: 94%;
        margin: 0 auto;
        border: 2rpx solid #CcCcCc;
    }
    .bor1 {
        width: 94%;
        margin: 0 auto;
        border: 2rpx solid #CCCCCC;
        margin-top: 20rpx;
    }
    .borx {
        width: 735rpx;
        height: 608rpx;
        background-color: #007AFF;
    }
    .price{
        margin-top: 20rpx;
        position: relative;
       
        
    }
    .bot{
        display: block;
        position: relative;
        left: 20rpx;
        top: 20rpx;
        font-size: 34rpx;
        width: 160rpx;
        color: #FFFFFF;
    }
    .Todayprice {
        display: block;
        position: absolute;
        top: -17rpx;
        left: 146rpx;
        font-size: 56rpx;
        color: #DCB16E;
    }
    .bot1 {
        position: absolute;
        top: 17rpx;
        left: 370rpx;
        color: #FFFFFF;
        margin-bottom: 12rpx;
        font-size: 34rpx;
    }
    .yesterdayprice {
        font-size: 34rpx;
        color: #DCB16E;
    }
    .Small{
        position: relative;
        margin-top: 14rpx;
    }
    .Small image{
        width: 40rpx;
        height: 40rpx;
        margin-left: 20rpx;
    }
    .Small text {
        position: absolute;
        top: -2rpx;
        left: 80rpx;
        display: block;
        color: #FFFFFF;
        font-size: 32rpx;
        width: 134rpx;
        border-bottom: 1rpx solid #CCCCCC;
        padding-bottom: 14rpx;
    }
</style>
