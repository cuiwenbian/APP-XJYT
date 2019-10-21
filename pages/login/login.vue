<template>
	<!-- 登录 -->
	<view class="container">
		<image class='logo' src="../../static/images/FIL.png" mode=""></image>
		<view class='fil'>Filecoin</view>
		<view class="enter">
			<image class="icon" src="../../static/images/phone.png" mode=""></image>
			<input class="number" type="number" value="" placeholder="请输入手机号码" />
		</view>
		<view class="enter">
			<image class="icon" src="../../static/images/lock.png" mode=""></image>
			<input class="number" type="text" value="" placeholder="请输入密码" />
		</view>
		<view class="tip">
			<navigator url="../otherLogin/otherLogin" class="tips">快速登录</navigator>
			<navigator url="../getBackPassword/getBackPassword" class="tips">忘记密码</navigator>
		</view>
		<view class='btn' type="primary" @click="login">登录</view>
		<navigator url="../register/register" class="register">
			注册
		</navigator>
		<view class="agree" @click="agree">
			<view class="check"></view>
			<text>我已阅读并同意【<text style="color: #34b5c1;" >星际云通用户协议</text>】</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods:{
			agree(){
				uni.navigateTo({
					url:'../agreement/agreement'
				});
			},
			login(){
				uni.reLaunch({
					url:'../index/index'
				});
			},
			
		}
	}
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
	.tip{
		width:600rpx;
		margin: 0 auto;
		height:20rpx;
		display: flex;
		font-size: 28rpx;
		justify-content: space-between;
	}
	.tips{
		line-height: 20rpx;
		color:#646464;
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
	.register{
		width:150rpx;
		height:57rpx;
		border-radius: 30rpx;
		border: 1px solid #fff;
		margin:0 auto;
		color:#fff;
		font-size: 26rpx;
		line-height: 57rpx;
		text-align: center;
	}
	.agree{
		width:320rpx;
		height:30rpx;
		color:#fff;
		font-size: 18rpx;
		position: fixed;
		bottom:50rpx;
		left:calc((100% - 320rpx)/2);
	}
	.check{
		float: left;
		width:20rpx;
		height:20rpx;
		margin-right: 10rpx;     
		outline: 0;
		border: 1px solid #d1d1d1;
		background-color: #fff;
		border-radius: 3px;
		margin-top:5rpx;
	}
</style>
