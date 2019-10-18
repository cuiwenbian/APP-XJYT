<template>
	<!-- 设置交易密码 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<text class="title">邮箱：</text>
			<text class="email" >1345****5454@163.com</text>
		</view>
		<view class="linee"></view>
		<view class="list">
			<input class="code" type="text" value="" placeholder="请输入邮箱验证码" />
			<view class="getcode">获取验证码</view>
		</view>
		<view class="set">设置交易密码</view>
		<view class="list">
			<input class="code" type="text" value="" placeholder="请输入交易密码,6位数字组合" />
			<image class="close" :src="hidden?'../../static/images/password.png':'../../static/images/pwd.png'" @click="show" mode=""></image>
		</view>
		<view class="linee"></view>
		<view class="list">
			<input class="code" type="text" value="" placeholder="请再次输入交易密码" />
			<image class="close" :src="hidden?'../../static/images/password.png':'../../static/images/pwd.png'" @click="show" mode=""></image>
		</view>
		<view class="save"  @click="save">确认</view>
		<view class="forget" @click="forget">修改交易密码</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				hidden:true
			}
		},
		methods:{
			show:function(){
				this.hidden=false;
			},
			forget:function(){
				uni.navigateTo({
					url:'../change-password/change-password'
				})
			}
		}
	}
</script>

<style>
	page{
		background: #EDEEEE;
	}
	.line{
		height:50rpx;
	}
	
	.list{
		height:100rpx;
		width:100%;
		background: #fff;
		padding-left:48rpx;
		box-sizing: border-box;
	}
	.title,.email{
	    line-height: 100rpx;
	    font-size:30rpx;
	    color:#333333;
	}
	.code{
		float: left;
		width:500rpx;
		height:100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
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
		margin-right:48rpx;
		margin-top:25rpx;
		color:#333;
	}
	.close{
		float: right;
		display: block;
		width:50rpx;
		height:25rpx;
		margin-right:48rpx;
		margin-top:40rpx;
		
	}
	.linee{
		height:20rpx;
	}
	.set{
		line-height: 100rpx;
		font-size: 30rpx;
		margin-left:48rpx;
	}
	.save{
		margin: 100rpx auto 0;
		width:654rpx;
		height:90rpx;
		background: #444343;
		border-radius: 10rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
	.forget{
		line-height: 100rpx;
		float: right;
		margin-right:48rpx;
		color:#8080FF;
		font-size: 28rpx;
	}
</style>
