<template>
	<!-- 邮箱认证 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<image class="icon" src="../../static/images/icon-email.png" mode=""></image>
			<input class="enter" type="text" value="" placeholder="请输入邮箱地址" />
		</view>
		<view class="line"></view>
		<view class="list">
			<image class="icon" src="../../static/images/icon-code.png" mode=""></image>
			<input class="enter enter1" type="text" value="" placeholder="请输入邮箱验证码" />
			<view class="getcode">获取验证码</view>
		</view>
		<view class="save"  @click="save">确认</view>
	</view>
</template>

<script>
</script>

<style>
	page{
		background: #EDEEEE;
	}
	.line{
		height:50rpx;
	}
	.list{
		width:100%;
		height:120rpx;
		padding-left:48rpx;
		padding-right:48rpx;
		box-sizing: border-box;
		background: #fff;
	}
	.icon{
		float: left;
		width:60rpx;
		height: 60rpx;
		margin-right: 20rpx;
		margin-top:30rpx;
	}
	.enter{
		float: left;
		width:550rpx;
		height:120rpx;
		line-height: 120rpx;
		font-size: 30rpx;
		color:#BCBCBC;
	}
	.enter1{
		width:300rpx;
	}
	.getcode{
		float:right;
		width:150rpx;
		height:50rpx;
		background: #f2f2f2;
		border: 1rpx solid #797979;
		border-radius: 50rpx;
		font-size: 24rpx;
		text-align: center;
		line-height: 50rpx;
		margin-top:35rpx;
		color:#333;
	}
	.save{
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
