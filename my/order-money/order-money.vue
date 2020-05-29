<template>
	<view class="container">
		<view class="box">
			<view>
				<image src="../../static/images/zuanz.png" class="img"></image>
			</view>
			<view class="waiting">等待付款:
				<text class="big">¥15000</text>
			</view>
			<view class="wait">剩余15分钟自动取消</view>
		</view>
		<view class="box1">
			<view class="line">订单编号
					<text class="line2">7629672352735397395</text>
				</view>
				<view class="xx"></view>
				<view class="item">下单时间
					<text class="line2">2019-12-18 10:30:02</text>
				</view>
			</view>
			<view class="x"></view>
			<view class="box2">
				<view class="item">存储中心名称
					<text class="line2">韭菜存储中心</text>
				</view>
				<view class="xx"></view>
				<view class="item">产品名称
					<text class="line2">Fil云存力</text>
				</view>
				<view class="xx"></view>
				<view class="item">购买数量
					<text class="line2">10TB</text>
				</view>
				<view class="xx"></view>
				<view class="item">购买单价
					<text class="line2">¥1500/T</text>
				</view>
				<view class="xx"></view>
				<view class="item">购买时长
					<text class="line2">360天</text>
				</view>
			</view>
			<view class="x"></view>
			<view class="box3">
				<view class="item">付款方式
					<text class="line2">支付宝</text>
				</view>
				<view class="xx"></view>
				<view class="item">优惠券
					<text class="line2">¥0.00</text>
				</view>
				<view class="xx"></view>
				<view class="item">支付金额
					<text class="line3">¥15000</text>
				</view>
				<view class="xx"></view>
			</view>
			<view class="rening">
				<button :class="bt?'btn2':'btm'" @click="ben" @touchstart="next" @touchend="back">付款</button>
				<button :class="n?'btn':'btnn'" @click="btn" @touchstart="next" @touchend="back">取消订单</button>
			</view>

		</view>
	</view>
</template>

<script>
    export default {
        data () {
            return {
                n:true,
                bt:true
            }
        },
        methods:{
        }
    }
</script>

<style>
	page{
		background-color: #121E2C;
	}
	.box {
		width: 100%;
		height: 176rpx;
		background-color: #182A42;
	}
	.img{
		width: 171rpx;
		height: 114rpx;
		display: block;
		padding-right: 80rpx;
		padding-top: 40rpx;
		float: right;
	}
	.waiting{
		font-size: 26rpx;
		padding-top: 68rpx;
		padding-bottom: 10rpx;
		color: #FFFFFF;
		padding-left: 81rpx;
	}
	.big{
		font-size: 28rpx;
		color: #FFFFFF;
		padding-left: 20rpx;
	}
	.wait{
		font-size: 20rpx;
		color: #FFFFFF;
		padding-left: 81rpx;
	}
	.line{
		height: 107rpx;
		line-height: 107rpx;
		padding-left: 32rpx;
		font-size: 24rpx;
		color: #FFFFFF;
	}
	.line2 {
		float: right;
		padding-right: 32rpx;
	}
	.line3{
		font-size: 36rpx;
		color: #FF2B2B;
		float: right;
		padding-right: 32rpx;
	}
	.item{
		height: 82rpx;
		line-height: 82rpx;
		padding-left: 32rpx;
		font-size: 24rpx;
		color: #FFFFFF;
	}
	.xx{
		width: 694rpx;
		border-bottom: 1rpx solid #091926;
		margin: 0 auto;
	}
	.x{
		height: 20rpx;
		background-color: #091926;
	}

	.btn{
		margin-top: 60rpx;
		float: right;
		width: 160rpx;
		height: 56rpx;
		margin-right: 32rpx;
		background-color: #B1B1B1;
		font-size: 24rpx;
	}
    .btnn{
        margin-top: 60rpx;
        float: right;
        width: 160rpx;
        height: 56rpx;
        margin-right: 32rpx;
        background: RGBA(0, 193, 203, 0.5);
        font-size: 24rpx;
    }
	.btn2{
		float: right;
		width: 150rpx;
		height: 56rpx;
		margin-top: 60rpx;
		margin-right: 30rpx;
		background-color: #41BEC9;
		font-size: 24rpx;
		color: #FFFFFF;
	}
    .btm{
        float: right;
        width: 150rpx;
        height: 56rpx;
        margin-top: 60rpx;
        margin-right: 30rpx;
        background: RGBA(0, 193, 203, 0.5);
        font-size: 24rpx;
        color: #FFFFFF;
     }
</style>
