<template>
	<!-- 快速登录 -->
	<view class="container">
		<image class='logo' src="../../static/images/FIL.png" mode=""></image>
		<view class='fil'>Filecoin</view>
		<view class="enter">
			<image class="icon" src="../../static/images/phone.png" mode=""></image>
			<input class="number" type="text" value="" placeholder="请输入手机号码" />
		</view>
		<view class="enter" style="position: relative;">
			<image class="icon" src="../../static/images/lock.png" mode=""></image>
			<view class="getcode">获取验证码</view>
			<input class="number" type="text" value="" placeholder="请输入验证码" />
		</view>
		
		<view class='btn' type="primary">立刻登录</view>
		<navigator url="../login/login" class="goback">
			已有账号，返回登录
		</navigator>
		
		
	</view>
</template>

<script>
</script>

<style>
	page{
		background: #121212;
	}
	.logo{
		width:185rpx;
		height:185rpx;
		margin-top:135rpx;
		margin-left: calc((100% - 185rpx)/2);
		
	}
	.fil{
		height:100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #fff;
		font-size: 64rpx;
		margin-bottom: 100rpx;
	}
	.enter{
		
		width:600rpx;
		height:100rpx;
		margin: 30rpx auto;
		border-bottom: 1px solid #555555;
	}
	.icon{
		float:left;
	    display: block;
		width:50rpx;
		height:50rpx;
		margin-top:25rpx;
	}
	.number{
		float:right;
		width:520rpx;
		height:100rpx;
		color:#646464;
		font-size: 30rpx;
	}
	.getcode{
		float: right;
		border-radius: 50rpx;
		width:200rpx;
		height:60rpx;
		font-size: 30rpx;
		color:#646464;
		text-align: center;
		line-height: 60rpx;
		background: #808080;
		position: absolute;
		bottom: 20rpx;
		right:0;
	}
	.btn{
		width:680rpx;
		height:80rpx;
		background: #fff;
		border-radius: 50rpx;
		margin:80rpx auto;
		color:#333;
		text-align: center;
		line-height: 80rpx;
	}
	.goback{
		width:280rpx;
		height:57rpx;
		border-radius: 30rpx;
		border: 1px solid #fff;
		margin:80rpx auto;
		color:#fff;
		font-size: 26rpx;
		line-height: 57rpx;
		text-align: center;
	}
</style>
