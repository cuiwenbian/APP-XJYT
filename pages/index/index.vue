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
           <image class="g" src="../../static/images/notice.png"></image>
           <text class="i"></text>
           <text class="m">重大通知：明天是2019年10月15日，星期二</text>
        </view>
        <view class="bor"></view>

        <view class="borx">
            <view class="price">
                <text class="bot">今日币价:</text>
                <text class="Todayprice">{{Todayprice}}</text>
            </view>
            <view class="price1">
                <text class="bot1">
                    昨日交易:
                </text>
                <text class="yesterdayprice , yesterday"> +{{yesterdayprice}}  +{{yesterday}}</text>
            </view>
        </view>
        
        <view class="gg">
            
        </view>
        
        <view class="bor1"></view>
        <view class="information">
            <view class="Small">
                <image src="../../static/images/information.png" mode="">
                    <text>热门资讯</text>            
                </image>
            </view>
            <view class="bt">
                <text class="tex">时代都i阿松大就安排时间第哦啊hi烦恼的大数据大家阿松i的脚手架滴哦祭祀哦大家都怕是怕佛奥反扒批发按时递交世界第哦啊就是滴哦就爱哦大脚世界的i哦啊是降低哦阿森纳都俺是男滴哦纳斯哦对你啊iOS电脑爱哦电脑i哦啊十多年i哦阿森纳都i哦按段i哦爱上你io</text>
                <image class="ig" src="../../static/images/kuangji.png"></image>
                <view class="yu">6月</view>
                <image class="yj" src="../../static/images/eye.png"> <text class="yjj">1000人看过</text></image>      
            </view>
            <text class="b"></text>
            <view class="bt">
                <text class="tex">时代都i阿松大就安排时间第哦啊hi烦恼的大数据大家阿松i的脚手架滴哦祭祀哦大家都怕是怕佛奥反扒批发按时递交世界第哦啊就是滴哦就爱哦大脚世界的i哦啊是降低哦阿森纳都俺是男滴哦纳斯哦对你啊iOS电脑爱哦电脑i哦啊十多年i哦阿森纳都i哦按段i哦爱上你io</text>
                <image class="ig" src="../../static/images/kuangji.png"></image>
                <view class="yu">6月</view>
                <image class="yj" src="../../static/images/eye.png"> 
                <text class="yjj">1000人看过</text>
                </image>      
            </view>
            <text class="b"></text>
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
        height: 60rpx;
    }
    .g {
        width: 28rpx;
        height: 28rpx;
        float: left;
        padding-left: 23rpx;
        padding-top: 17rpx;
    }
    .i{
        width: 600rpx;
        height: 40rpx;        
        background-color: #BCBCBC;
        margin-left: 52rpx;
        padding-top: 20rpx;
        border-radius: 50rpx;  
    }
    .m {
        float: left;
        padding-top: 17rpx;
        margin-left: 32rpx;
        font-size: 24rpx;

        color: #FFFFFF;
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
        width: 100%;
        height: 140rpx;

    }
    .price{
        padding-left: 24rpx;
    }
    /* 白 */
    .bot{
        float: left;
        line-height: 120rpx;
        font-size: 34rpx;
        color: #FFFFFF;
    }
    /* 2 */
    .price1{
        float: right;
        padding-right: 24rpx;
    }
    /* 黄 */
    
    .bot1 {
        color: #FFFFFF;
        margin-bottom: 12rpx;
        font-size: 34rpx;
    }
    .yesterdayprice {
        font-size: 34rpx;
        line-height: 120rpx;
        color: #DCB16E;
    }
    .gg{
        width: 100%;
        height: 608rpx;
    }
    .Small{
        margin-top: 14rpx;
    }
    .Small image{
        width: 40rpx;
        height: 40rpx;
        margin-left: 20rpx;
    }
    .Small text {
        display: block;
        color: #FFFFFF;
        font-size: 32rpx;
        width: 134rpx;
        border-bottom: 1rpx solid #CCCCCC;
        padding-bottom: 14rpx;
    }
    .bt{
        height: 200rpx;
    }
    .tex {
        line-height: 40rpx;
        text-indent: 34rpx;
        font-size: 32rpx;
        color: #FFFFFF;
        float: left;
        padding-top: 20rpx;
        margin-left: 46rpx;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .ig {
        width: 190rpx;
        height: 127rpx;
        float: right;
        padding-right: 46rpx;
        padding-top: 20rpx;
    }
    .yu {
        font-size: 16rpx;
        color: #CCCCCC;
    }
    .yj {
        width: 40rpx;
        height: 22rpx;
    }
    .yjj {
        font-size: 16rpx;
        color: #CCCCCC;
    }
    .b {
        width: 94%; 
        margin: 0 auto;
        border-bottom:2rpx solid #CCCCCC;
    }
</style>
