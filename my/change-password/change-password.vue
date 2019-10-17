<template>
	<!-- 修改资金密码 -->
	<view class="container">
		<view class="line">验证现有密码</view>
		<view class="list">
			<input class="code" type="text" value="" placeholder="请输入现有密码" />
		</view>
		<view class="set">设置新密码</view>
		<view class="list">
			<view class="title">登录密码</view>
			<input class="code" type="text" value="" placeholder="6-16位数字,字母" />
			<image class="close" :src="hidden?'../../static/images/password.png':'../../static/images/pwd.png'" @click="show" mode=""></image>
		</view>
		<view class="linee"></view>
		<view class="list">
			<input class="code" type="text" value="" placeholder="请再次输入新密码" />
			<image class="close open" :src="hidden?'../../static/images/eye.png':'../../static/images/openeye.png'" @click="show" mode=""></image>
		</view>
		<view class="save"  @click="save">确认修改</view>
		<view class="other" @click="other">其他方式</view>
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
			other:function(){
				uni.navigateTo({
					url:'../trade-password/trade-password'
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
		line-height: 100rpx;
		margin-left: 48rpx;
		font-size: 30rpx;
	}
	
	.list{
		height:100rpx;
		width:100%;
		background: #fff;
		padding-left:48rpx;
		box-sizing: border-box;
	}
	.title{
		float: left;
		line-height: 100rpx;
		font-size: 30rpx;
	    width:150rpx;
	}
	.code{
		float: left;
		width:450rpx;
		height:100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
	}
	
	.close{
		float: right;
		display: block;
		width:50rpx;
		height:25rpx;
		margin-right:48rpx;
		margin-top:40rpx;
		
	}
	.open{
		height:40rpx;
		margin-top:30rpx
	}
	.linee{
		height:20rpx;
	}
	.set{
		margin-top:50rpx;
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
	.other{
		line-height: 100rpx;
		float: right;
		margin-right:48rpx;
		color:#8080FF;
		font-size: 28rpx;
	}
</style>
