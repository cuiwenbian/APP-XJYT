<template>
	<!-- 个人资料 -->
	<view class="container">
		<view class="pass top" >
			<text class="title title1">头像</text>
			<view class="avator"><image class="pic" src="../../static/images/avator.png" mode=""></image></view>
		</view>
		<view class="linee"></view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="pass">
			<text class="title">昵称</text>
			<open-data type="userNickName" class='info'></open-data>
			<view class="line"></view>
		</view>
		<!-- #endif -->
		<view class="pass">
			<text class="title">手机号</text>
			<view class="info1">{{phone}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				phone:''
			}
		},
		onLoad(option) {
			this.phone=uni.getStorageSync('phone')
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
	.top{
		height:150rpx;
	}
	.title{
		float: left;
		width:140rpx;
		height: 120rpx;
		line-height: 120rpx;
		margin-left: 48rpx;
		font-size:30rpx;
		color:#797979;
	}
	.title1{
		line-height: 150rpx;
	}
	.more{
		width:25rpx;
		height:30rpx;
		float: right;
		margin-right:48rpx;
		margin-top: 45rpx;
		font-size: 30rpx;
	}
	.more1{
		margin-top: 60rpx;
	}
	.avator{
		float: right;
		width:100rpx;
		height:112rpx;
		border-radius: 50%;
		margin-top: 25rpx;
		margin-right: 48rpx;
	}
	.pic{
		display: block;
		width:100%;
		height:100%;
	}
	.info{
		float: right;
		line-height: 120rpx;
		margin-right:48rpx;
		font-size:30rpx;
	}
	.info1{
		float: right;
		line-height: 120rpx;
		margin-right:48rpx;
		font-size:30rpx;
		font-family: 'myface';
	}
	.line{
		width:650rpx;
		height:1rpx;
		border-bottom: 1rpx solid #EDEDED;
		position: absolute;
		left:48rpx;
		bottom:0;
	}
	.linee{
		width:100%;
		height:30rpx;
		background: #f5f5f5;
	}
	.next{
		margin: 100rpx auto;
		width:700rpx;
		height:90rpx;
		background: #0A1117;
		border-radius: 80rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
