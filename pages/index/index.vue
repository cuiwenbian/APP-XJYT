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
                <image src="../../static/images/information.png" mode=""></image>
				<text class="te">热门资讯</text> 
            </view>
		</view>
        <view class="bt">
			<view class="left">
				<text class="tex">时上你io萨的厚爱u山东i阿士东i啊阿萨的徽标u十多i啊收到</text>
				<view>
					<text class="yu">6月</text>
					<image class="yj" src="../../static/images/eye.png"> 
					</image>
					<text class="yjj">1000人看过</text>
				</view>
			</view>
			<view class="right">
				<image class="ig" src="../../static/images/kuangji.png"></image>
			</view>
        </view>
        <text class="b"></text>
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
    .Todayprice{
			float: left;
			line-height: 120rpx;
			font-size: 56rpx;
			color: #DCB16E;
	}
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
	.information{
		width: 100%;
		height: 80rpx;
	}
    .Small{
        margin-top: 14rpx;
    }
    .Small image{
        width: 40rpx;
        height: 40rpx;
		float: left;
        margin-left: 20rpx;
    }
    .te {
		float: left;
        display: block;
        color: #FFFFFF;
        font-size: 32rpx;
        width: 134rpx;
		margin-left: 20rpx;
        border-bottom: 1rpx solid #CCCCCC;
        padding-bottom: 14rpx;
    }
    .bt{
		width: 100%;
        height: 600rpx;
    }
	.left {
		float: left;
		width: 60%;
	}
    .tex {
        text-indent: 34rpx;
        font-size: 28rpx;
        color: #FFFFFF;
        padding-top: 20rpx;
        padding-left: 24rpx;
		
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
	.right {
		width: 40%;
		float: right;
	}
    .ig {
        width: 190rpx;
        height: 127rpx;
		padding-top: 30rpx;
		padding-left: 48rpx;
    }
 
	.yu {
		float: left;
		padding-top: 40rpx;
		padding-left: 48rpx;
        font-size: 16rpx;
        color: #CCCCCC;
    }
    .yj {
        width: 40rpx;
        height: 22rpx;
		padding-left: 140rpx;
		padding-top: 46rpx;
    }
    .yjj {
		float: right;
		padding-right: 40rpx;
		padding-top: 40rpx;
        font-size: 16rpx;
        color: #CCCCCC;
    }
    .b {
        width: 94%; 
        margin: 0 auto;
        border-bottom:2rpx solid #CCCCCC;
    }
</style>
