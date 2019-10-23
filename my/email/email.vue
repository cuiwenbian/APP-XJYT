<template>
	<!-- 邮箱认证 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<image class="icon" src="../../static/images/icon-email.png" mode=""></image>
			<input class="enter" type="text" :value="email" @input='getEmailValue' @blur='getEmailStyle' placeholder="请输入邮箱地址" />
		</view>
		<view class="line"></view>
		<view class="list">
			<image class="icon" src="../../static/images/icon-code.png" mode=""></image>
			<input class="enter enter1" type="text" :value="emailCode" @input='getEmailCode' placeholder="请输入邮箱验证码" />
			<view class="getcode" @click="sendcode" v-show="send">获取验证码</view>
			<view class="getcode" v-show="alreadysend">{{second+"s"}}</view>
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
				send:true,
				alreadysend:false,
				second:120
			}
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
				 	url: this.urll+'binding/',
				 	method:'POST',
				 	data:{
						email:that.email
						
					},
				 	 success:function(res){
				 		 console.log(res)
				 	     that.send= false,
				 	     that.alreadySend= true,
				 	     check.timer(that);
				 	 },
				 	 fail: function(err){
				 	     console.log(err)
				 	}
				 	
				 })
								
			},
			save:function(){
				console.log(this.global_.token)
				console.log('JWT'+this.global_.token)
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
					url:this.urll+'linkemail/',
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
							uni.navigateTo({
								url:'../my/my'
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
		color:#BCBCBC;
	}
	.enter1{
		width:300rpx;
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
		margin-top:35rpx;
		color:#333;
	}
	.save{
		margin: 100rpx auto;
		width:654rpx;
		height:90rpx;
		background: #444343;
		border-radius: 10rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
