<template>
	<!-- 注册 -->
	<view class="container">
		<image class='logo' src="../../static/images/FIL.png" mode=""></image>
		<view class='fil'>Filecoin</view>
		<view class="enter">
			<text class="title">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</text> 
			<input class="number" type="number" @input='getPhoneValue' @blur="getNumber" :value="phone" placeholder="请输入手机号" />
		</view>
		<view class="enter">
			<text class="title">登录密码</text>
			<input class="number" type="password" @input='getPwdValue' @blur="getPassword" :value="pwd" placeholder="6-16位数字,英文"/>
		</view>
		<view class="enter">
			<text class="title">确认密码</text>
			<input class="number" type="password" @input='getPwdValue1' :value="pwd1" placeholder="请再次输入登录密码"/>
		</view>
		<view class="enter" style="position: relative;">
			<text class="title">验 &nbsp;证&nbsp; 码</text>
			<view class="getcode" @click.once='getCodeBtn' :disabled="disabled">{{codename}}</view>
			<input class="number" style="width:230rpx;float: left;margin-left:10rpx" type="text"  @input='getCodeValue' :value="code" placeholder="请输入短信验证码"/>
		</view>
		<view class='btn' @click.once='register'>注册</view>
		<neil-modal 
		    :show="show" 
		    title="标题" 
		    content="这里是正文内容，这里是正文内容，这里是正文内容，这里是正文内容，这里是正文内容，这里是正文内容"
		    :show-cancel="false">
		</neil-modal>
		<navigator url='../login/login' class="goback">
			已有账号，返回登录
		</navigator>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show:false,
				phone:'',
				pwd:'',
				pwd1:'',
				code:'',
				iscode: '',//用于存放验证码接口里获取到的code
				codename: ' 获取验证码 '
			}
		},
		onLoad: function (options) {
		  this.disabled = true
		},
		methods:{
			getPhoneValue:function(e){
				this.phone=e.detail.value
			},
			getNumber:function(e){
				var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
				this.phone=e.detail.value	
				   if(!myreg.test(this.phone)){
					   uni.showToast({
					   	title:'请输入正确的手机号',
					   	icon:'none',
					   	duration:2000
					   })
				   }
				 
			},
			getPwdValue:function(e){
				this.pwd=e.detail.value
			},
			getPassword:function(e){
				var str =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				this.pwd=e.detail.value
				if(!str.test(this.pwd)){
					uni.showToast({
						title:'密码格式不正确',
						icon:'none',
						duration:2000
					})
				}
			},
			getPwdValue1:function(e){
				this.pwd1=e.detail.value
			},
			getCodeValue:function(e){
				this.code=e.detail.value
			},
			getCode: function () {
			      var _this = this;
			      //判断手机号格式
			      var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
			      if (this.phone == "") {
			        uni.showToast({
			          title: '手机号不能为空',
			          icon: 'none',
			          duration: 1000
			        })
			        return false;
			      } else if (!myreg.test(this.phone)) {
			        uni.showToast({
			          title: '请输入正确的手机号',
			          icon: 'none',
			          duration: 1000
			        })
			        return false;
			      } else {
			        uni.request({
						//短信接口
					  url: _this.url + 'users/regist/sms/',
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
			            } else if (ocode == 400) {
			              uni.showToast({
			                title: '手机号已注册',
			                icon: 'none',
			                duration: 2000
			              })
			              return false;
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
			                
			              }
			            }, 1000)
			          }
			        })
			
			      }
			
			},
			//获取验证码
			getCodeBtn: function(e){
			      this.getCode();
			      var _this = this
			      _this.disabled = true
			},
			register(){
				var _self=this;
				if(this.phone==""){
					uni.showToast({
					  title: '请输入手机号',
					  icon: 'none',
					  duration: 2000
					})
					return false
				}
				if(this.pwd==""){
					uni.showToast({
					  title: '请输入登录密码',
					  icon: 'none',
					  duration: 2000
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
				console.log(this.iscode);
				console.log(this.code);
				if(this.code!=this.iscode){
					uni.showToast({
						title:'验证码错误',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url:this.url+'users/regist/',
					method: 'POST',
					data: {
						mobile:this.phone,
						password:this.pwd,
						sec_password:this.pwd1,
						code:this.code
					},
					headers: {
					    "Content-Type": "application/json"
					},
					success: res => {
						_self.global_.phone=this.phone;
						_self.global_.token=res.data.token;
						// uni.setStorageSync('token',res.data.token)
						console.log(res) 
						console.log(res.statusCode)
						
						if(res.statusCode==400){
							uni.showToast({
								title:'验证码已过期',
								icon:'none'
							})
						}
						if(res.statusCode==201){
							uni.navigateTo({
								url:'../login/login'
							})
						}
						
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
		background: #121212;
	}
	.logo{
		width:185rpx;
		height:185rpx;
		margin-top:135rpx;
		margin-left: calc((100% - 185rpx)/2);
	}
	.fil{
		height:100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #fff;
		font-size: 64rpx;
		margin-bottom: 50rpx;
	}
	.enter{
		
		width:600rpx;
		height:100rpx;
		margin: 0 auto;
	}
	.title{
		float:left;
		color: #fff;
		width:150rpx;
		line-height: 80rpx;
		font-size: 30rpx;
	}
	.number{
		float:right;
		width:450rpx;
		height:80rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid #555555;
		color:#646464;
		font-size: 24rpx;
	}
	
	.getcode{
		float: right;
		border-radius: 50rpx;
		width:200rpx;
		height:60rpx;
		font-size: 30rpx;
		color:#646464;
		text-align: center;
		line-height: 60rpx;
		background: #808080;
		position: absolute;
		bottom: 20rpx;
		right:0;
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
	.goback{
		width:280rpx;
		height:57rpx;
		border-radius: 30rpx;
		border: 1px solid #fff;
		margin:80rpx auto;
		color:#fff;
		font-size: 26rpx;
		line-height: 57rpx;
		text-align: center;
	}
	
</style>
