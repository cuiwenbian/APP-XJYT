<template>
	<!-- 我的 -->
    <view class="container" >
		 <view class="height"></view>
		<view class="top">
			<image class="bg" src="../../static/images/my-background.png" mode="">
				<image class="logout" src="../../static/images/logout.png" mode=""></image>
			</image>
			<view class="avator" @click="personal"><image class="img" src="../../static/images/a.jpg" mode=""></image></view>
			<view class="nickname">用户昵称</view>
			<view class="phone">{{phone}}</view>
		</view>
		<view class="line"></view>
    	<view class="list">
    		<view class="listItem" @click="wallet">
				<image class="pic" src="../../static/images/my-wallet.png" mode=""></image>
				<view class="txt"  >我的钱包</view>
			</view>
			<view class="listItem" @click="address">
				<image class="pic" src="../../static/images/my-address.png" mode=""></image>
				<view class="txt" >提币地址</view> 
			</view>
			<view class="listItem" @click="certification">
				<image class="pic" src="../../static/images/my-identity.png" mode=""></image>
				<view class="txt" >实名认证</view>
			</view>
			<view class="listItem" @click="mymachine">
				<image class="pic" src="../../static/images/my-machine.png" mode=""></image>
				<view class="txt" >我的矿机</view>
			</view>
			<view class="listItem" @click="tradePassword">
				<image class="pic" src="../../static/images/my-password.png" mode=""></image>
				<view class="txt" >交易密码</view>
			</view>
			<view class="listItem" @click="loginPassword">
				<image class="pic" src="../../static/images/my-password.png" mode=""></image>
				<view class="txt" >登录密码</view>
			</view>
			<view class="listItem"  @click="bindEmail">
				<image class="pic" src="../../static/images/my-email.png" mode=""></image>
				<view class="txt">邮箱绑定</view>
			</view>
			<view class="listItem" @click="suggest">
				<image class="pic" src="../../static/images/my-suggest.png" mode=""></image>
				<view class="txt" >建议反馈</view>
			</view>
			
    	</view>
    </view>
</template>
<!-- 我的 -->
<script>
	export default {
		data() {
			return {
				phone:this.global_.phone
			}
		},
		onShow() {
	       
		},
		methods: {
	        personal:function(){
				uni.navigateTo({
					url:'../personal/personal'
				})
			},
			wallet:function(){
				uni.navigateTo({
					url:'../my-wallet/my-wallet'
				})
			},
			address:function(){
				uni.navigateTo({
					url:'../address/address'
				})
			},
			tradePassword:function(){
				uni.request({
					url:this.urll+'setmoney/',
					method:'GET',
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						console.log(res)
						if(res.statusCode==400){
							uni.showToast({
								title:'用户未绑定邮箱',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==201){
							uni.navigateTo({
								url:'../change-password/change-password'
							})
						}
						if(res.statusCode==200){
							uni.navigateTo({
								url:'../trade-password/trade-password'
							})
						}
					}
				})
			},
			loginPassword:function(){
				uni.navigateTo({
					url:'../login-password/login-password'
				})
			},
			bindEmail:function(){
				uni.request({
					url:this.urll+'setmoney/',
					method:'GET',
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						console.log(res)
						if(res.statusCode==200||res.statusCode==201){
							uni.navigateTo({
								url:'../unbindemail/unbindemail'
								
							})
						}
						if(res.statusCode==400){
							uni.navigateTo({
								url:'../email/email'
							})
						}
					}
				})
				
			},
			suggest:function(){
				uni.navigateTo({
					url:'../suggest/suggest'
				})
			},
			certification:function(){
				uni.navigateTo({
					url:'../identity/identity'
				})
			},
			mymachine:function(){
				uni.navigateTo({
					url:'../my-machine/my-machine'
				})
			}
		}
	}
</script>

<style>
	.height {
		height: var(--status-bar-height);
		background: #121212;
	}
	.top{
		width:100%;
		height:580rpx;
		position: relative;
	}
	.bg{
		width:100%;
		height:480rpx;
		position: relative;
	}
	.logout{
		width:50rpx;
		height:50rpx;
		position: absolute;
		right:20rpx;
		top:20rpx;
	}
	.avator{
		width:150rpx;
		height:150rpx;
		z-index: 9;
		position: absolute;
		left:300rpx;
		bottom:150rpx;
		border-radius: 50%;
		border: 1px solid #f2f2f2;
	
	}
	.img{
		width:100%;
		height:100%;
		display: block;
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
		height:10rpx;
		background: #EDEEEE;
	}
	.list{
		width:100%;
		height:500rpx;
		display: flex;
		justify-content:space-between;
		flex-wrap: wrap;
		padding:50rpx;
		box-sizing: border-box;
	}
	.listItem{
		width:25%;
		height:50%;
		box-sizing: border-box;
	}
	.pic{
		display: block;
		width:45rpx;
		height:45rpx;
		margin: 30rpx auto;
	}
	.txt{
		line-height: 20rpx;
		font-size: 28rpx;
		text-align: center;
	}
</style>
