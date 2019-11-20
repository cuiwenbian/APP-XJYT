<template>
	<!-- 根据现有密码  修改资金密码 -->
	<view class="container">
		<view class="line">验证现有密码</view>
		<view class="list">
			<input class="code" type="number" password :value="password" @input='getPassword' placeholder="请输入现有密码" />
		</view>
		<view class="set">设置新密码</view>
		<view class="list">
			<view class="title">交易密码</view>
			<input class="code" type='digit' :password="isPassword" :value="newPassword" @input='getNewPassword' placeholder="请输入新的交易密码" />
			<image class="close" :src="isPassword?'../../static/images/password.png':'../../static/images/openeye.png'" @click="show" mode=""></image>
		</view>
		<view class="linee"></view>
		<view class="list">
			<input class="code" type='digit' :password="isPassword1" :value="newPassword1" @input='getNewPassword1'  placeholder="请再次输入新密码" />
			<image class="close" :src="isPassword1?'../../static/images/password.png':'../../static/images/openeye.png'" @click="show1" mode=""></image>
		</view>
		<view class="save"  @click="changePassword">确认修改</view>
		<view class="other" @click="other">找回密码</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isPassword:true,
				isPassword1:true,
				password:'',
				newPassword:'',
				newPassword1:''
			}
		},
        onBackPress(option){
              plus.key.hideSoftKeybord()    
            },
		methods:{
			show:function(){
				this.isPassword=!this.isPassword
			},
			show1:function(){
				this.isPassword1=!this.isPassword1
			},
			getPassword:function(e){
				this.password=e.detail.value
			},
			getNewPassword:function(e){
				this.newPassword=e.detail.value
			},
			getNewPassword1:function(e){
				this.newPassword1=e.detail.value
			},
			changePassword:function(){
				if(this.password==''){
					uni.showToast({
						icon:'none',
						title:'请输入现有密码',
						duration:2000
					})
					return false;
				}
				if(this.newPassword==''){
					uni.showToast({
						icon:'none',
						title:'请输入新的交易密码',
						duration:2000
					})
					return false;
				}
				var f=this.global_.checkPassword(this.newPassword)
				if(!f){
					uni.showToast({
						title:'交易密码为六位数字!!',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.newPassword1==''){
					uni.showToast({
						icon:'none',
						title:'请确认新的交易密码',
						duration:2000
					})
					return false;
				}
				if(this.newPassword1!==this.newPassword){
					uni.showToast({
						icon:'none',
						title:'两次密码不一致',
						duration:2000
					})
					return false;
				}
				uni.request({
					url:this.url+'updatapasswod/',
					method:'POST',
					data:{
						password1:this.password,
						password2:this.newPassword,
						password3:this.newPassword1
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						console.log(res)
						
						if(res.statusCode==200){
							uni.showToast({
								title:'资金密码已修改',
								icon:'none',
								duration:2000
							})
							uni.switchTab({
								url:'../my/my'
							})
						}
						if(res.statusCode==400){
							uni.showToast({
								title:'现有密码错误，或是新旧密码一样',
								icon:'none',
								duration:2000
							})
							
						}
					}
				})
			},
			other:function(){
				uni.navigateTo({
					url:'../change-otherPassword/change_otherPassword'
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
		background: #0A1117;
		border-radius: 80rpx;
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
