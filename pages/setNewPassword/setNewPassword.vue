<template>
	<!-- 设置新密码 -->
	<view class="container" >
		<view class="pass">
			<text class="title">新密码</text>
			<input class="phone" type="text" value="" placeholder="6-16位数字、字母" />
			<view class="line"></view>
		</view>
		<view class="pass">
			<text class="title">确认密码</text>
			<input class="phone" type="text" value="" placeholder="请再次输入新密码" />
		</view>
		<view class="next" type="primary" @click="next">确认</view>
	</view>
</template>

<script>
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
	.title{
		float: left;
		width:140rpx;
		height: 120rpx;
		line-height: 120rpx;
		margin-left: 48rpx;
		font-size:34rpx;
	}
	.phone{
		float: right;
		width:540rpx;
		height:120rpx;
		font-size: 30rpx;
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
		height:100rpx;
		background: #444343;
		border-radius: 10rpx;
		text-align: center;
		line-height: 100rpx;
		color: #fff;
	}
</style>
