<template>
	<!-- 解绑邮箱 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<view class="icon">
				<image src="../../static/images/icon-email.png" style="width:38rpx;height:30rpx;" mode=""></image>
			</view>
			<view class="enter" :value='email'>{{email}}</view>
		</view>
		<view class="line"></view>
		<view class="list">
			<view class="icon">
				<image src="../../static/images/icon-code.png" style="width:36rpx;height:42rpx;" mode=""></image>
			</view>
			<input class="enter enter1" type="number" :value="emailCode" @input='getEmailCode' placeholder="请输入邮箱验证码" />
			<button class="getcode" @click="sendcode" :disabled="disabled">{{ codename }}</button>
		</view>
		<view class="save"  @click="unbind">确认</view>
	</view>
</template>

<script>
	var check= require("../../common/utils.js");
	export default{
		data(){
			return{
				email:'',
				email1:'',
				emailCode:'',
				codename: ' 获取验证码',
				disabled:false,
				
			}
		},
		onShow() {
			var _this=this;
			uni.request({
				url:this.url+'delemail/',
				method:'GET',
				header:{
					Authorization:'JWT'+' '+this.global_.token
				},
				success(res) {
					var email=res.data.data;
					var email1=res.data.data;
					_this.email1=email1;
					var l = email.split('@');
					email = l[0].substr(0, l[0].length - 5) + '****@' + l[1];
					_this.email=email;
				}
			})
		},
        onBackPress(option){
              plus.key.hideSoftKeybord()
            },
		methods:{
			getEmailCode:function(e){
				this.emailCode=e.detail.value
			},
			sendcode:function(){
				var that=this; 
				 uni.request({
					 //解除绑定邮箱验证码
				 	url: this.url+'deleteemail/',
				 	method:'POST',
				 	data:{
						email:that.email,
						email_msg:that.emailCode
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
				 	 success:function(res){
				 	     var num = 121;
				 	     var timer = setInterval(function () {
				 	       num--;
				 	        if (num <= 0) {
				 	         clearInterval(timer);
							
				 	         that.codename = '重新发送',
				 	         that.disabled = false
				 	     			
				 	       } else{
							 
							 that.disabled = true
				 	         that.codename = num + "s"
				 	       }
				 	     }, 1000)
				 	 },
				 	 fail: function(err){
				 	}
				 })				
			},
			unbind:function(){
				if(this.emailCode==''){
					uni.showToast({
						title:'请输入验证码',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url:this.url+'delemail/',      //解除绑定接口
					method:"POST",
					data:{
						email:this.email1,
						email_msg:this.emailCode,
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						if(res.statusCode==400){
							uni.showToast({
								title:'验证码错误',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==200){
							uni.showToast({
								title:'邮箱已解绑',
								icon:'none',
								duration:2000
							})
							uni.switchTab({
								url:'../../pages/my/my'
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
		margin-top:38rpx;
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
		float: right;
		border-radius: 50rpx;
		width: 180rpx;
		height: 50rpx;
		font-size: 22rpx;
		background: #797979;
		color: #fff;
		text-align: center;
		line-height: 50rpx;
		margin-top:35rpx;
	}
	button[disabled] {
		background:  #797979 !important;
		color: #fff !important;
	}
	.save{
		margin: 100rpx auto;
		width:690rpx;
		height:88rpx;
		background: #0A1117;
		border-radius: 80rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
		font-size: 30rpx;
	}
</style>
