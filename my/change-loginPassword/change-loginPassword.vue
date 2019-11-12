<template> 
	<!-- 设置登录密码 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<text class="email1" >手机号：{{phone}}</text>
		</view>
		<view class="linee"></view>
		<view class="list">
				<input class="code"  type="text" @input='getCodeValue' :value="code" placeholder="请输入手机验证码" />
				<button class="getcode" @click='getCodeBtn' :disabled="disabled">{{codename}}</button>
		</view>
		<view class="set">设置登录密码</view>
		<view class="list">
			<view class="title">登录密码</view>
			<input class="code" style='width:400rpx;' :password="isPassword" :value="pwd" @input='getLoginPassword'  placeholder="6-16位数字,字母" />
			<image class="close" :src="isPassword?'../../static/images/password.png':'../../static/images/openeye.png'" @click="show" mode=""></image>
		</view>
		<view class="linee"></view>
		<view class="list">
			<input class="code" :password="isPassword1" :value="pwd1" @input='getLoginPassword1' placeholder="请再次输入登录密码" />
			<image class="close" :src="isPassword1?'../../static/images/password.png':'../../static/images/openeye.png'" @click="show1" mode=""></image>
		</view>
		<view class="save"  @click="save">确认</view>
		
	</view>
</template> 
 
<script>
	export default{
		data(){
			return{
				isPassword:true,
				isPassword1:true,
				phone:this.global_.phone,
				codename: ' 获取验证码 ',
				pwd:'',
				pwd1:'',
				iscode:'',
				code:'',
				disabled:false
			}
		},
		methods:{
			getLoginPassword:function(e){
				this.pwd=e.detail.value
			},
			getLoginPassword1:function(e){
				this.pwd1=e.detail.value
			},
			getCodeValue:function(e){
				this.code=e.detail.value
			},
			show:function(){
				this.isPassword=!this.isPassword
			},
			show1:function(){
				this.isPassword1=!this.isPassword1
			},
			other:function(){
				uni.navigateTo({
					url:'../change-pass/change-pass'
				})
			},
			getCode: function () {
			      var _this = this;
			     
			        uni.request({
						//短信接口
					  url: _this.urll + 'users/login/sms/',
			          method: 'POST',
			          data: {
			            mobile: this.phone,
			          },
			          header: {
			            "Content-Type": "application/x-www-form-urlencoded"
			          },
			          success(res) {
			            //根据code判断
			            console.log(res)
			            var ocode = res.statusCode
			            console.log(ocode)
			            if (ocode == 200) {
			              _this.iscode = res.data.data,
			              console.log(res.data.data)
			            } 
			            var num = 61;
			            var timer = setInterval(function () {
			              num--;
			              if (num <= 0) {
			                clearInterval(timer);
			                _this.codename = '重新发送',
			                _this.disabled = false
			
			              } else {
			                _this.codename = num + "s"
			                _this.disabled = true
			              }
			            }, 1000)
			          }
			        })
			
			},
			//获取验证码
			getCodeBtn: function(e){
			      this.getCode();
			      var _this = this
			      _this.disabled = true
			},
			save(){
				var _self=this;
				
				if(this.pwd==""){
					uni.showToast({
					  title: '请输入登录密码',
					  icon: 'none',
					  duration: 2000
					})
					return false
				}
				var str =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				if(!str.test(this.pwd)){
					uni.showToast({
						title:'密码格式不正确',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.pwd1==""){
					uni.showToast({
					  title: '请确认登录密码',
					  icon: 'none',
					  duration: 2000
					})
					return false
				}
				if(this.pwd1!==this.pwd){
					uni.showToast({
						title:'两次密码不一致',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.code==""){
					uni.showToast({
						title:"验证码不能为空",
						icon:'none',
						duration:2000
					})
					return false
				}
				
				if(this.code!=this.iscode){
					uni.showToast({
						title:'验证码错误',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url:this.urll+'updataloginpassword/',
					method: 'POST',
					data: {
						mobile:this.phone,
						password:this.pwd,
						password1:this.pwd1,
						code:this.code
					},
					headers: {
					    "Content-Type": "application/json"
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
								title:'验证码已过期',
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
		height:50rpx;
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
		width:150rpx;
	    line-height: 100rpx;
	    font-size:30rpx;
	    color:#333333;
		
	}
	.email1{
		line-height: 100rpx;
		font-size:30rpx;
		color:#333333;
	}
	.code{
		float: left;
		width:450rpx;
		height:100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
		
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
		margin-right:48rpx;
		margin-top:25rpx;
		color:#333;
	}
	.close{
		float: right;
		display: block;
		width:50rpx;
		height:30rpx;
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
		background: #0A1117;
		border-radius: 80rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
	
</style>
