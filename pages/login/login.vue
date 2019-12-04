<template>
	<!-- 登录 -->
	<view class="container">
		<image class='logo' src="../../static/images/FIL.png" mode=""></image>
		<image class='fil' src="../../static/images/filecoin.png" mode=""></image>
		<view class="enter">
			<image class="icon" src="../../static/images/phone.png" mode=""></image>
			<input class="number" maxlength="11" type="number" :value="phone" placeholder="请输入手机号码" @input="getPhoneValue" />
		</view> 
		<view class="enter">
			<image class="icon" src="../../static/images/lock.png" mode=""></image>
			<input class="number" type="password" :value="password" placeholder="请输入密码" @input="getPasswordValue" />
		</view>
		<view class="tip">
			<navigator url="../otherLogin/otherLogin" class="tips">快速登录</navigator>
			<navigator url="../getBackPassword/getBackPassword" class="tips">忘记密码</navigator>
		</view>
		<view class='btn'  @click="login">登录</view>
		<navigator url="../register/register" class="register">
			注册
		</navigator>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				show:false,
				phone:'',
				password:'',
			};
		},	
		onLoad() {
		},
		methods:{
			getPhoneValue:function(e){
				this.phone=e.detail.value
			},
			getPasswordValue:function(e){
				this.password=e.detail.value
			},
			login() {
				var _self=this;
				if(this.phone==""){
					uni.showToast({
						icon:'none',
						title:'请输入手机号'
					})
					return false;
				}
				var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;	
				if(!myreg.test(this.phone)){
					 uni.showToast({
					 	title:'请输入正确的手机号',
						icon:'none',
						mask:true,
						duration:2000
					 })
					  return false
				 }
				if(!this.password){
					uni.showToast({
						title:'请输入密码',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url: this.url+'users/login/',
					method: 'POST',
					data: {
						mobile:this.phone,
						password:this.password
					},
					headers: {
					    "Content-Type": "application/json"
					},
					success: res => {
						uni.setStorageSync('phone',this.phone)
						uni.setStorageSync('token',res.data.token)
						_self.global_.phone=this.phone;
						_self.global_.token=res.data.token;
						if(res.statusCode==401){
							uni.showToast({
								title:'用户信息不存在',
								icon:'none'
							})
						}
						if(res.statusCode==402){
							uni.showToast({
								title:'密码错误',
								icon:'none'
							})
						}
						if(res.statusCode==200){
							uni.reLaunch({
								url:'../index/index'
							});
						}
					},
		            fail: () => {},
					complete: () => {}
				});
			},
			agree(){
				uni.navigateTo({
					url:'../agreement/agreement'
				});
			}
		}
	}
</script>

<style>
	page{
		background: #121212;
	}
	.logo{  
		display: block;
		width:185rpx;
		height:185rpx;
		margin: 150rpx auto 0;
	}
	.fil{
		width:250rpx;
		height:100rpx;
		display: block;	
		margin:30rpx auto 100rpx;
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
		width:40rpx;
		height:40rpx;
		margin-top:30rpx;
		margin-left: 10rpx;
	}
	.number{
		float:right;
		width:520rpx;
		height:100rpx;
		/* color:#646464; */
		color:#fff;
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
</style>
