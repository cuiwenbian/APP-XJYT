<template>
	<!-- 个人资料 -->
	<view class="container">
		<view class="pass top" >
			<text class="title title1">头像</text>
			<image class="more more1" src="../../static/images/jiantou3.png" mode=""></image>
			<view class="avator"><image class="pic" src="../../static/images/avator.jpg" mode=""></image></view>
		</view>
		<view class="linee"></view>
		<view class="pass">
			<text class="title">昵称</text>
			<image class="more" src="../../static/images/jiantou3.png" mode=""></image>
			<view class="info">nickname</view>
			<view class="line"></view>
		</view>
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
			this.phone=option.phone
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
		height:100rpx;
		border-radius: 50%;
		border: 1px solid #F2f2f2;
		margin-top: 25rpx;
		margin-right: 20rpx;
	}
	.pic{
		display: block;
		width:100%;
		height:100%;
	}
	.info{
		float: right;
		line-height: 120rpx;
		margin-right:20rpx;
		font-size:30rpx;
	}
	.info1{
		float: right;
		line-height: 120rpx;
		margin-right:93rpx;
		font-size:30rpx;
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
