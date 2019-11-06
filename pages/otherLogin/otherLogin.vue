<template>
	<!-- 快速登录 -->
	<view class="container">
		<image class="logo" src="../../static/images/FIL.png" mode=""></image>
		<view class="fil">Filecoin</view>
		<view class="enter">
			<image class="icon" src="../../static/images/phone.png" mode=""></image>
			<input class="number" maxlength="11" type="number" :value="phone" @input="getPhoneValue" placeholder="请输入手机号码" />
		</view>
		<view class="enter" style="position: relative;">
			<image class="icon" src="../../static/images/lock.png" mode=""></image>
			<view class="getcode" @click.once="getCodeNumber" :disabled="disabled">{{ codename }}</view>
			<input class="number" style="width:350rpx;float: left;margin-left:30rpx" type="text" @input="getCodeValue" :value="code" placeholder="请输入验证码" />
		</view>
		<view class="btn" type="primary" @click="login">立刻登录</view>
		<navigator url="../login/login" class="goback">已有账号，返回登录</navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			phone: '', //手机号
			code: '', //验证码
			iscode: '', //用于存放验证码接口里获取到的code
			codename: ' 获取验证码'
		};
	},
	onLoad: function(options) {
		this.disabled = true;
	},
	methods: {
		getPhoneValue: function(e) {
			if (e.detail.value.length == 11) {
				this.disabled = false;
			}
			this.phone = e.detail.value;
			console.log(this.phone);
		},
		getCodeValue: function(e) {
			this.code = e.detail.value;
		},
		getCode: function () {
		      var _this = this;
		      //判断手机号格式
		      var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
		      if (_this.phone == "") {
		        uni.showToast({
		          title: '手机号不能为空',
		          icon: 'none',
		          duration: 1000
		        })
		        return false;
		      } else if (!myreg.test(_this.phone)) {
		        uni.showToast({
		          title: '请输入正确的手机号',
		          icon: 'none',
		          duration: 1000
		        })
		        return false;
		      } else {
		        uni.request({
		          method: 'POST',
		          data: {
		            mobile: _this.phone,
		          },
		            //短信接口
		          'url': _this.url + 'users/forgot/sms/',
		          header: {
		            "Content-Type": "application/x-www-form-urlencoded"
		          },
		
		          success(res) {
		            //根据code判断
		            console.log(res)
		            var ocode = res.statusCode;
		            console.log(ocode)
		            if (ocode == 200) {
		              _this.iscode = res.data.data,
		              console.log(res.data.data)
		            } else if (ocode == 400) {
		              uni.showToast({
		                title: '用户不存在',
		                icon: 'none',
		                duration: 2000
		              })
		              return false;
		            }
		            console.log(res)
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
		getCodeNumber: function(e) {
			this.getCode();
			var _this = this;
			_this.disabled = true;
		},
		//提交表单信息
		login: function() {
			var _this = this;
			// var pre = that.data;
			var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;

			if (_this.phone == '') {
				uni.showToast({
					title: '手机号不能为空',
					icon: 'none',
					duration: 1000
				});
				return false;
			} else if (!myreg.test(_this.phone)) {
				uni.showToast({
					title: '请输入正确的手机号',
					icon: 'none',
					duration: 1000
				});
				return false;
			}
			if (_this.code == '') {
				uni.showToast({
					title: '验证码不能为空',
					icon: 'none',
					duration: 1000
				});
				return false;
			} else if (_this.code != _this.iscode) {
				uni.showToast({
					title: '验证码错误',
					icon: 'none',
					duration: 1000
				});
				return false;
			} else {
				//uni.setStorageSync('phone', this.phone);
				uni.request({
					url:_this.url+'users/login/',
					method:'POST',
					data:{
						mobile:_this.phone,
						code:_this.code
					}, 
					success(res) {
						console.log(res);
						_this.global_.phone=_this.phone;
						_this.global_.token=res.data.data;
						console.log(res.data.data)
						if(res.statusCode==400){
							uni.showToast({
								title:'验证码不正确',
								icon:'none'
							})
						}
						if(res.statusCode==200){
							uni.switchTab({
								url:'../index/index'
							})
						}
					}
				})
				
			}
		}
	}
};
</script>

<style>
page {
	background: #121212;
}
.logo {
	width: 185rpx;
	height: 185rpx;
	margin-top: 135rpx;
	margin-left: calc((100% - 185rpx) / 2);
}
.fil {
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	color: #fff;
	font-size: 64rpx;
	margin-bottom: 100rpx;
}
.enter {
	width: 600rpx;
	height: 100rpx;
	margin: 30rpx auto;
	border-bottom: 1px solid #555555;
}
.icon {
	float: left;
	display: block;
	width: 50rpx;
	height: 50rpx;
	margin-top: 25rpx;
}
.number {
	float: right;
	width: 520rpx;
	height: 100rpx;
	color: #646464;
	font-size: 30rpx;
}
.getcode {
	float: right;
	border-radius: 50rpx;
	width: 200rpx;
	height: 60rpx;
	font-size: 30rpx;
	color: #646464;
	text-align: center;
	line-height: 60rpx;
	background: #808080;
	position: absolute;
	bottom: 20rpx;
	right: 0;
}
.btn {
	width: 680rpx;
	height: 80rpx;
	background: #fff;
	border-radius: 50rpx;
	margin: 80rpx auto;
	color: #333;
	text-align: center;
	line-height: 80rpx;
}
.goback {
	width: 280rpx;
	height: 57rpx;
	border-radius: 30rpx;
	border: 1px solid #fff;
	margin: 80rpx auto;
	color: #fff;
	font-size: 26rpx;
	line-height: 57rpx;
	text-align: center;
}
</style>
