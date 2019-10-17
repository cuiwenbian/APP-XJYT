<template>
	<!-- 忘记密码 -->
	<view class="container" >
		<view class="pass">
			<image class="icon" src="../../static/images/call.png" mode=""></image>
			<input class="phone" type="number" value="" placeholder="请输入手机号" />
			<view class="line"></view>
		</view>
		<view class="pass">
			<image class="icon" src="../../static/images/code.png" mode=""></image>
			<view class="getcode">获取验证码</view>
			<input class="code" type="text" value="" placeholder="请输入手机验证码" />
		</view>
		<view class="next" type="primary" @click="next">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods:{
			next(){
				uni.navigateTo({
					url:'../setNewPassword/setNewPassword'
				});
			},
			
		}
	}
</script>

<style>
	page{
		background:#EDEEEE;
	}
	.pass{
		width:100%;
		height:120rpx;
		background: #FFFFFF;
		position: relative;
	}
	.icon{
		float: left;
		width:60rpx;
		height: 60rpx;
		margin-left: 48rpx;
		margin-top:30rpx;
	}
	.phone{
		float: right;
		width:600rpx;
		height:120rpx;
		font-size: 30rpx;
	}
	.code{
		float: right;
		width:380rpx;
		height:120rpx;
		font-size: 30rpx;
	}
	.getcode{
		float: right;
		border-radius: 10rpx;
		width:200rpx;
		height:60rpx;
		margin-right:24rpx;
		margin-top:30rpx;
		border: 1px solid #f1f1f1;
		font-size: 30rpx;
		color:#C7C529;
		text-align: center;
		line-height: 60rpx;
		background: #EDEDED;
	}
	.line{
		width:650rpx;
		height:1rpx;
		border-bottom: 1rpx solid #EDEDED;
		position: absolute;
		left:48rpx;
		bottom:0;
	}
	.next{
		margin: 100rpx auto;
		width:600rpx;
		height:90rpx;
		background: #444343;
		border-radius: 10rpx;
	    text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
