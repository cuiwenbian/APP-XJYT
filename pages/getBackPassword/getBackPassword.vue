<template>
	<!-- 忘记密码 -->
	<view class="container" >
		<view class="pass">
			<image class="icon" src="../../static/images/phone.png" mode=""></image>
			<input class="phone" maxlength="11" type="number" :value="phone" @input="getPhoneValue" placeholder="请输入手机号" />
			<view class="line"></view>
		</view>
		<view class="pass">
			<image class="icon" src="../../static/images/icon-code.png" mode=""></image>
			<button class="getcode" @click="getCodeNumber" hover-class="none" :disabled="disabled">{{ codename }}</button>
			<input class="code" type="text"  @input="getCodeValue" :value="code" placeholder="请输入手机验证码" />
		</view>
		<view class="next" type="primary" @click="next">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '', //手机号
				code: '', //验证码
				iscode: '', //用于存放验证码接口里获取到的code
				codename: ' 获取验证码 ',
				disabled:false
			};
		},
		
		methods:{
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
			          method: 'POST',
			          data: {
			            mobile: this.phone,
			          },
			            //短信接口
			          'url': _this.url + 'users/forgot/sms/',
			            
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
			                _this.disabled = true
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
			},
			//提交表单信息
			next: function() {
				var _this = this;
				// var pre = that.data;
				var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
			
				if (this.phone == '') {
					uni.showToast({
						title: '手机号不能为空',
						icon: 'none',
						duration: 1000
					});
					return false;
				} else if (!myreg.test(this.phone)) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				if (this.code == '') {
					uni.showToast({
						title: '验证码不能为空',
						icon: 'none',
						duration: 1000
					});
					return false;
				} 
				if(this.code!=this.iscode){
					uni.showToast({
						title:'验证码错误',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.navigateTo({
					url:'../setNewPassword/setNewPassword?code='+this.code+'&phone='+this.phone,
				});
			}
			
			
		}
	}
</script>

<style>
	page{
		background:#EDEEEE;
	}
	.pass{
		width:100%;
		height:120rpx;
		background: #FFFFFF;
		position: relative;
	}
	.icon{
		float: left;
		width:60rpx;
		height: 60rpx;
		margin-left: 48rpx;
		margin-top:30rpx;
	}
	.phone{
		float: right;
		width:600rpx;
		height:120rpx;
		font-size: 30rpx;
	}
	.code{
		float: right;
		width:350rpx;
		height:120rpx;
		font-size: 30rpx;
	}
	button::after{border:none}
	.getcode{
		float: right;
		border-radius: 10rpx;
		width:230rpx;
		height:60rpx;
		margin-right:24rpx;
		margin-top:30rpx;
		border: 1px solid #f1f1f1;
		font-size: 30rpx;
		text-align: center;
		line-height: 60rpx;
		background: #EDEDED;
	}
	.line{
		width:650rpx;
		height:1rpx;
		border-bottom: 1rpx solid #EDEDED;
		position: absolute;
		left:48rpx;
		bottom:0;
	}
	.next{
		margin: 100rpx auto;
		width:600rpx;
		height:90rpx;
		background: #0A1117;
		border-radius: 80rpx;
	    text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
