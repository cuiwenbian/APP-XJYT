<template>
	<view class="container">
		<view class="box">
			<view class="mill">矿池名称 
				<text class="mill2">{{pool.name}}</text>
			</view>
			<view class="mill">产品名称
				<text class="mill2">Filecoin云存力</text>
			</view>
			<view class="mill">购买数量
				<text class="mill2">10tb</text>
			</view>
			<view class="mill">购买时间
				<text class="mill2">9999天</text>
			</view>
			<view class="mil">订单金额
				<text class="mill2">¥15000</text>
			</view>
		</view>
		<view class="box2"></view>
		<view class="box3">
			<view class="coupons">优惠卷
				<image src="../../static/images/jiantou3.png" class="img"></image>
				<text class="coupons2">请选择
				</text>
			</view>
			<view class="payment">付款方式
				<image src="../../static/images/pay.png" class="Alipay"></image>
				<text>支付宝</text>
				<image :src="aplay?'../../static/images/xuanz.png':'../../static/images/xiaotu.png'" class="img2" @click="pay">
				</image>
				<image src="../../static/images/coin.png" class="imge"></image>
				<text>USDT</text>
				<image :src="usdt?'../../static/images/xuanz.png':'../../static/images/xiaotu.png'" class="img2" @click="usd">
				</image>
			</view>
			<view class="mil">总金额
				<text class="mani">¥15000</text>
			</view>
			<view class="cl">
				<image :src="agree?'../../static/images/xuanz.png':'../../static/images/xiaotu.png'" class="img2" @click="agreement"></image>
				<text class="tet">我已阅读并同意用户存力租赁协议</text>
			</view>
			<button class="btn">提交订单</button>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				agree:true,
				aplay:true,
				usdt:true,
				pool:''
			}
		},
		onLoad(option) {
			this.pool=JSON.parse(option.a)
			console.log(this.pool)
		},
		methods:{
			pay(){
				this.aplay=!this.aplay
			},
			usd(){
				this.usdt=!this.usdt
			},
			agreement(){
				this.agree=!this.agree
			}
		}
	}
</script>

<style>
	page{
		background-color: #121E2C;
	}
	.box{
		padding-bottom: 20rpx;
	}
	.mill{
		height: 98rpx;
		line-height: 98rpx;
		padding-left: 32rpx;
		font-size: 24rpx;
		border-bottom:1rpx solid #091926;
		color: #FFFFFF;
	}
	.mill2{
		float: right;
		padding-right: 35rpx;
	}
	.mil{
		height: 98rpx;
		line-height: 98rpx;
		padding-left: 32rpx;
		font-size: 24rpx;
		color: #FFFFFF;
	}
	.box2{
		height: 20rpx;
		background-color: #091926;
	}
	.box3{
	}
	.coupons{
		height: 98rpx;
		font-size: 24rpx;
		line-height: 98rpx;
		padding-left: 32rpx;
		color: #FFFFFF;
		border-bottom: 1rpx solid #091926;
	}
	.coupons2{
		float: right;
		padding-right: 35rpx;
	}
	.img{
		width: 11rpx;
		height: 21rpx;
		padding-right: 20rpx;
		padding-top: 38rpx;
		float: right;
	}
	.payment{
		height: 98rpx;
		font-size: 24rpx;
		line-height: 98rpx;
		padding-left: 32rpx;
		color: #FFFFFF;
		border-bottom: 1rpx solid #091926;
		
		
	}
	.Alipay{
		width: 36rpx;
		height: 36rpx;
		padding:0 20rpx 0 108rpx;
		margin-top: 30rpx;
	}
	.img2{

		width: 32rpx;
		height: 32rpx;
		padding-left:30rpx;
		margin-top: 30rpx;
	}
/* 	.img3{
		width: 32rpx;
		height: 32rpx;
		padding-left:30rpx;
	} */
	.imge{
		width: 40rpx;
		height: 40rpx;
		padding-left: 138rpx;
		padding-right: 10rpx;
	}
	.mani{
		float: right;
		padding-right: 35rpx;
		color: #FF2B2B;
		font-size: 36rpx;
	}
	.tet{
		padding-left: 20rpx;
		line-height: 36rpx;
		font-size: 24rpx;
		color: #FFFFFF;
	}
	.cl{
		padding-bottom: 102rpx;
	}
	.btn{
		width: 702rpx;
		height: 88rpx;
		background-color: #41BEC9;
	}
</style>
