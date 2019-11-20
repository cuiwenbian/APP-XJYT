<template>
	<!-- 邮箱认证 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<image class="icon" src="../../static/images/icon-email.png" mode=""></image>
			<input class="enter" type="number" :value="email" @input='getEmailValue' @blur='getEmailStyle' placeholder="请输入邮箱地址" />
		</view>
		<view class="line"></view>
		<view class="list">
			<image class="icon" src="../../static/images/icon-code.png" mode=""></image>
			<input class="enter enter1" type="number"  @input='getEmailCode' placeholder="请输入邮箱验证码" />
			<button :class="flag?'getcode':'getcode1'" @click="sendcode" :disabled="disabled">{{ codename }}</button>
		</view>
		
		<view class="save"  @click="save">确认</view>
	</view>
</template>

<script>
	var check= require("../../common/utils.js");
	export default{
		data(){
			return{
				email:'',
				emailCode:'',
				codename: ' 获取验证码',
				disabled:false,
				flag:true
			}
		},
		onBackPress(option){
		      plus.key.hideSoftKeybord()    
		    },
		methods:{
			getEmailValue:function(e){
				this.email=e.detail.value
			},
			getEmailStyle:function(e){
				var flag=check.checkEmail(this.email);
				if(!flag){
				  uni.showToast({
				    title: '邮箱格式不正确', 
				    icon: 'none',
				    duration: 2000
				  })
				  return false
				}
			},
			getEmailCode:function(e){
				this.emailCode=e.detail.value
			},
			sendcode:function(){
				var that=this; 
				 if(!that.email){
				   uni.showToast({
				     title: '请输入邮箱',
				     icon:'none',
				     duration: 2000
				   })
				   return false
				 }
				 var flag=check.checkEmail(that.email);
				 if(!flag){
				   uni.showToast({
				     title: '邮箱格式不正确', 
				     icon: 'none',
				     duration: 2000
				   })
				   return false
				 }
				 uni.request({
					 //绑定邮箱验证码
				 	url: this.url+'binding/',
				 	method:'POST',
				 	data:{
						email:that.email
					},
				 	 success:function(res){
				 		 console.log(res)
						 if(res.statusCode==200){
							var num = 121;
							var timer = setInterval(function () {
							  num--;
							  if (num <= 0) {
							    clearInterval(timer);
								that.flag=true,
							    that.codename = '重新发送',
							    that.disabled = false
										
							  } else {
								that.flag=false
							    that.codename = num + "s"
							    that.disabled = true
							  }
							}, 1000)
						 }
						 if(res.statusCode==401){
						 	uni.showToast({
						 		title:'该邮箱已被使用',
						 		icon:'none',
						 		duration:2000
						 	})
							return false
						 }
				 	 },
				 	 fail: function(err){
				 	     console.log(err)
				 	}
				 })
								
			},
			save:function(){
				if(this.email==''){
					uni.showToast({
						title:'请输入邮箱地址',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.emailCode==''){
					uni.showToast({
						title:'请输入验证码',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url:this.url+'linkemail/',
					method:"POST",
					data:{
						email:this.email,
						email_msg:this.emailCode,
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						console.log(res)
						if(res.statusCode==200){
							uni.showToast({
								title:'邮箱已绑定',
								icon:'none',
								duration:2000
							})
							uni.switchTab({
								url:'../my/my'
							})
						}
						if(res.statusCode==400){
							uni.showToast({
								title:'验证码错误',
								icon:'none',
								duration:2000
							})
						}
					}
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
		width:100%;
		height:120rpx;
		padding-left:48rpx;
		padding-right:48rpx;
		box-sizing: border-box;
		background: #fff;
	}
	.icon{
		float: left;
		width:60rpx;
		height: 60rpx;
		margin-right: 20rpx;
		margin-top:30rpx;
	}
	.enter{
		float: left;
		width:550rpx;
		height:120rpx;
		line-height: 120rpx;
		font-size: 30rpx;
		color:#333;
	}
	.enter1{
		width:300rpx;
	}
	
	.getcode{
		float:right;
		width:200rpx;
		height:50rpx;
		background: #f2f2f2;
		border: 1rpx solid #797979;
		border-radius: 50rpx;
		font-size: 24rpx;
		text-align: center;
		line-height: 50rpx;
		margin-top:35rpx;
		color:#333;
	}
	.getcode1{
		float:right;
		width:200rpx;
		height:50rpx;
		background: #f2f2f2;
		border: 1rpx solid #B2B2B2;
		border-radius: 50rpx;
		font-size: 24rpx;
		text-align: center;
		line-height: 50rpx;
		margin-top:35rpx;
		color:#B2B2B2;
	}
	.save{
		margin: 100rpx auto;
		width:654rpx;
		height:90rpx;
		background: #0A1117;
		border-radius: 80rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
