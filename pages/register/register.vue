<template>
	<!-- 注册 -->
	<view class="container">
		<image class='logo' src="../../static/images/FIL.png" mode=""></image>
		<view class='fil'>Filecoin</view>
		<view class="enter">
			<text class="title">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</text> 
			<input class="number" type="text" value="" placeholder="请输入手机号" />
		</view>
		<view class="enter">
			<text class="title">登录密码</text>
			<input class="number" type="text" value="" placeholder="6-16位数字,英文"/>
		</view>
		<view class="enter">
			<text class="title">确认密码</text>
			<input class="number" type="text" value="" placeholder="请再次输入登录密码"/>
		</view>
		<view class="enter" style="position: relative;">
			<text class="title">验 &nbsp;证&nbsp; 码</text>
			<view class="getcode">获取验证码</view>
			<input class="number" type="text" value="" placeholder="请输入短信验证码"/>
		</view>
		<view class='btn' type="primary">注册</view>
		<navigator url='../login/login' class="goback">
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
		margin-bottom: 50rpx;
	}
	.enter{
		
		width:600rpx;
		height:100rpx;
		margin: 0 auto;
	}
	.title{
		float:left;
		color: #fff;
		width:150rpx;
		line-height: 80rpx;
		font-size: 30rpx;
	}
	.number{
		float:right;
		width:450rpx;
		height:80rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid #555555;
		color:#646464;
		font-size: 24rpx;
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
		bottom: 40rpx;
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
