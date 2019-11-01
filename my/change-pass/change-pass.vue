<template>
	<!-- 根据现有密码 修改登录密码 -->
	<view class="container">
			<view class="line">验证现有密码</view>
			<view class="list">
				<input class="code" type="password" :value="pass" @input='getNowPwd' placeholder="请输入现有密码" />
			</view>
			<view class="set">设置新密码</view>
			<view class="list">
				<view class="title">登录密码</view>
				<input class="code" type="password" :value="pwd1" @input='getPwd1' placeholder="6-16位数字,字母" />
				<image class="close" :src="hidden?'../../static/images/password.png':'../../static/images/openeye.png'" @click="show" mode=""></image>
			</view>
			<view class="linee"></view>
			<view class="list">
				<input class="code" type="password" :value="pwd2" @input='getPwd2' placeholder="请再次输入新密码" />
				<image class="close" :src="hidden?'../../static/images/password.png':'../../static/images/openeye.png'" @click="show" mode=""></image>
			</view>
			<view class="save"  @click="save">确认修改</view>
			
		</view>
</template>

<script>
	export default{
			data(){
				return{
					hidden:true,
					pass:'',
					pwd1:'',
					pwd2:''
				}
			},
			methods:{
				getNowPwd:function(e){
					this.pass=e.detail.value;
				},
				getPwd1:function(e){
					this.pwd1=e.detail.value;
				},
				getPwd2:function(e){
					this.pwd2=e.detail.value;
				},
				show:function(){
					this.hidden=false;
				},
				other:function(){
					uni.navigateTo({
						url:'../change-loginPassword/change-loginPassword'
					})
				},
				save:function(){
					var _self=this;
					if(this.pass==""){
						uni.showToast({
						  title: '请输入现有密码',
						  icon: 'none',
						  duration: 2000
						})
						return false
					}
					if(this.pwd1==""){
						uni.showToast({
						  title: '请输入登录密码',
						  icon: 'none',
						  duration: 2000
						})
						return false
					}
					if(this.pwd2==""){
						uni.showToast({
						  title: '请确认登录密码',
						  icon: 'none',
						  duration: 2000
						})
						return false
					}
					if(this.pwd1!==this.pwd2){
						uni.showToast({
							title:'两次密码不一致',
							icon:'none',
							duration:2000
						})
						return false
					}
					uni.request({
						url:this.urll+'updataLoginpassword/',
						method: 'POST',
						data: {
						    mobile:this.global_.phone,
							password:this.pass,
							password1:this.pwd1,
							password2:this.pwd2
						},
						headers: {
						   Authorization:'JWT'+' '+this.global_.token
						},
						success: res => {
					
							console.log(res) 
							if(res.statusCode==200){
								uni.showToast({
									title:'登陆密码修改成功',
									icon:'none',
									duration:2000
								})
								uni.switchTab({
									url:'../my/my'
								})
								
							}
							if(res.statusCode==400){
								uni.showToast({
									title:'现有密码错误',
									icon:'none'
								})
							}
							// if(res.statusCode==201){
							// 	uni.navigateTo({
							// 		url:'../login/login'
							// 	})
							// }
							
						},
					    fail: () => {},
						complete: () => {}
					});
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
		
</style>
