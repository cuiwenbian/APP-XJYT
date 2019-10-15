<template>
	<!-- 我的 -->
    <view class="container">
		<view class="top">
			<view class="bg"></view>
			<view class="avator" @click="personal"></view>
			<view class="nickname">用户昵称</view>
			<view class="phone">134****8943</view>
		</view>
		<view class="line"></view>
    	<view class="list">
    		<view class="listItem">
				<image class="pic" src="../../static/images/FIL.png" mode=""></image>
				<view class="txt" @click="wallet" >我的钱包</view>
			</view>
			<view class="listItem">
				<image class="pic" src="../../static/images/FIL.png" mode=""></image>
				<view class="txt" @click="address">提币地址</view>
			</view>
			<view class="listItem">
				<image class="pic" src="../../static/images/FIL.png" mode=""></image>
				<view class="txt" @click="certification">实名认证</view>
			</view>
			<view class="listItem">
				<image class="pic" src="../../static/images/FIL.png" mode=""></image>
				<view class="txt" @click="mymachine">我的矿机</view>
			</view>
			<view class="listItem">
				<image class="pic" src="../../static/images/FIL.png" mode=""></image>
				<view class="txt" @click="tradePassword">交易密码</view>
			</view>
			<view class="listItem">
				<image class="pic" src="../../static/images/FIL.png" mode=""></image>
				<view class="txt" @click="loginPassword">登录密码</view>
			</view>
			<view class="listItem">
				<image class="pic" src="../../static/images/FIL.png" mode=""></image>
				<view class="txt" @click="bindEmail">邮箱绑定</view>
			</view>
			<view class="listItem">
				<image class="pic" src="../../static/images/FIL.png" mode=""></image>
				<view class="txt" @click="suggest">建议反馈</view>
			</view>
			
    	</view>
    </view>
</template>
<!-- 我的 -->
<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
	
		},
		methods: {
	        personal:function(){
				uni.navigateTo({
					url:'../personal/personal'
				})
			}
		}
	}
</script>

<style>
	.top{
		width:100%;
		height:580rpx;
		position: relative;
	}
	.bg{
		width:2000rpx;
		height:1500rpx;
		position: relative;
		top:-1150rpx;
		left:-620rpx;
		border-radius: 50%;
		background: #4CD964;
		overflow: hidden;
	}
	.avator{
		width:150rpx;
		height:150rpx;
		background: #007AFF;
		z-index: 9;
		position: absolute;
		left:300rpx;
		bottom:150rpx;
		border-radius: 50%;
	}
	.nickname{
		width:100%;
		height:30rpx;
		position: absolute;
		bottom: 90rpx;
		text-align: center;
		line-height: 30rpx;
		font-size: 32rpx;
	}
	.phone{
		width:100%;
		height:30rpx;
		position: absolute;
		bottom: 30rpx;
		text-align: center;
		line-height: 30rpx;
		font-size: 32rpx;
	}
	.line{
		width:100%;
		height:40rpx;
		background: #EDEEEE;
	}
	.list{
		width:100%;
		height:500rpx;
		display: flex;
		justify-content:space-between;
		flex-wrap: wrap;
		padding:30rpx;
		box-sizing: border-box;
	}
	.listItem{
		width:25%;
		height:50%;
		box-sizing: border-box;
	}
	.pic{
		display: block;
		width:100rpx;
		height:100rpx;
		margin: 30rpx auto;
	}
	.txt{
		line-height: 20rpx;
		font-size: 30rpx;
		text-align: center;
	}
</style>
