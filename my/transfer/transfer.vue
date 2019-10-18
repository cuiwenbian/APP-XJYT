<template>
	<!-- 转账 -->
	<view class="container">
		<view class="t"></view>
		<view class="box">
			<view class="desc">当前可转</view>
			<view class="num"><text class="number">156.00</text>个</view>
		</view>
		<view class="t"></view>
		<view class="box1">
			<view class="top">
				<view class="lab">转账地址</view>
				<input class="address" type="text" placeholder="请输入转账地址">
				<image class="right" src="../../static/images/jiantou3.png" mode=""></image>
			</view>
			<view class="top1">
				<view class="lab">提币数量</view>
				<input class="address" type="text" placeholder="请输入提币数量">
				<view class="all">全部</view>
			</view>
		</view>
		<view class="tip">
			手续费：0.00
		</view>
		<view class="next" type="primary" @click="save">提交</view>
	</view>
</template>

<script>
</script>

<style>
	page{
		background: #EDEEEE;
	}
	.t{
		height:20rpx;
	}
	.box{
		width:654rpx;
		height:292rpx;
		margin:0 auto;
		background: #fff;
		border-radius: 12rpx;
		text-align: center;
		padding: 50rpx;
		box-sizing: border-box;
	}
	.box1{
		width:654rpx;
		height:292rpx;
		margin:0 auto;
		background: #fff;
		border-radius: 12rpx;
		
	}
	.desc{
		font-size: 30rpx;
		line-height: 80rpx;
	}
	.num{
		font-size:30rpx;
		color:#555555;
	}
	.number{
		font-size:48rpx;
		color:#E4BF8C;
	}
	.top{
		height:147rpx;
		border-bottom: 1px solid #F2F2F2;
	}
	.lab{
		float: left;
		margin-left:48rpx;
		line-height: 147rpx;
		font-size: 30rpx;
		color:#9F9F9F;
	}
	.address{
		float: left;
		width:300rpx;
		height:147rpx;
		margin-left:20rpx;
		color:#DADADA;
		font-size: 30rpx;
	}
	.right{
		float: right;
		width:25rpx;
		height:30rpx;
		margin-top:58rpx;
		margin-right:24rpx;
	}
	.all{
		float:right;
		line-height: 147rpx;
		margin-right:24rpx;
		color:#EBC9A0;
		font-size: 30rpx;
	}
	.tip{
		margin-top:20rpx;
		margin-left:48rpx;
		line-height: 50rpx;
		font-size:28rpx;
		color:#797979;
	}
	.next{
		margin: 100rpx auto;
		width:654rpx;
		height:90rpx;
		background: #444343;
		border-radius: 10rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
