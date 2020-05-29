<template>
	<view class="container">
		<view style='padding:92rpx 34rpx 0;'>
			<view class="solo">输入验证码</view>
			<view class='solophone'>验证码已经发送到您的手机</view>
			<view class='solophone'>+{{phonecode}}&nbsp;&nbsp;{{phone}}</view>
			<view class='phoneinfo'>
				<view class='phoneinfo_left'>4位数字验证码</view>
				<view class='phoneinfo_right' @click="getCodeNumber" v-model="disabled">{{codename}}</view>
			</view>
			<view class="codes">
				<validCode ref="code" :maxlength="4" :isPwd="false" @finish="getCodess"  ></validCode>
			</view>
			<view class="submit-btn-wrap">
				<view class="submit-btn" hover-class="active" v-if="!code">登录</view>
				<view class="submit-btn-disable" @click="getcodepage" v-else="code">登录</view>
			</view>

		</view>
	</view>
</template>
<script>
	import validCode from '@/components/p-validCode/validCode.vue' 
	import {
		debounce
	} from '@/common/utils.js';
	export default {
		data() {
			return {
				phone: '', //手机号
				code: '', //验证码
				iscode: '', //用于存放验证码接口里获取到的code
				codename: '',
				disabled: false,
				phonecode:'',
				
				
			};
		},
		components: {
			validCode,
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord()
		},
		onHide() {
			plus.key.hideSoftKeybord()
		},
		onLoad(option) {
			this.phone = option.phone;
			this.phonecode = option.codes;
			console.log(this.phone);
			this.getCode();
		},
		methods: {
			getCodess:function(val){
				var _this = this;
			   this.code=val
			   console.log(this.code);
			   if(this.code.length==4){
				   if (_this.code == '') {
				   	uni.showToast({
				   		title: '验证码不能为空',
				   		icon: 'none',
				   		duration: 1000
				   	});
				   	return false;
				   }
				   // else if (_this.code != _this.iscode) {
				   // 	uni.showToast({
				   // 		title: '验证码错误',
				   // 		icon: 'none',
				   // 		duration: 1000
				   // 	});
				   // 	return false;
				   // }
					else{
				   	uni.request({
				   		url: _this.url + 'users/login/',
				   		method: 'POST',
				   		data: {
				   			mobile: _this.phone,
				   			code: _this.code
				   		},
				   		success(res) {
				   			uni.setStorageSync('phone', _this.phone);
				   			uni.setStorageSync('token', res.data.data);
				   			_this.global_.phone = _this.phone;
				   			_this.global_.token = res.data.data;
				   			if (res.statusCode == 400) {
				   				uni.showToast({
				   					title: '验证码不正确',
				   					icon: 'none'
				   				});
				   			}
				   			if (res.statusCode == 200) {
				   				uni.reLaunch({
				   					url: '../index/index'
				   				});
								//plus.key.hideSoftKeybord()
				   			}
				   		}
				   	});
				   }
			   }
			},
			getPhoneValue: function(e) {
				if (e.detail.value.length == 11) {
					this.disabled = false;
				}
				this.phone = e.detail.value;
			},
			getCodeValue: function(e) {
				var that = this;
				this.code = e.detail.value;

			},
			getCode: function() {
				var _this = this;
				if(_this.disabled==false){
					uni.request({
						method: 'POST',
						data: {
							mobile: _this.phone
						},
						//短信接口
						url: _this.url + 'users/login/sms/',
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(res) {
							//根据code判断
							console.log(res)
							var ocode = res.statusCode;
							if (ocode == 200) {
								_this.iscode = res.data.data || _this.codess;
								_this.disabled = true;
								var num = 61;
								var timer = setInterval(function() {
									num--;
									if (num <= 0) {
										clearInterval(timer);
										_this.codename = '重新发送';
										_this.disabled = false;
									} else {
										_this.codename = num + 's';
										_this.disabled = true;
									}
								}, 1000);
							} else if (ocode == 400) {
								uni.showToast({
									title: '用户不存在',
									icon: 'none',
									duration: 2000
								});
								return false;
							} else if (ocode == 411) {
								uni.showToast({
									title: '操作太频繁，请稍候重试',
									icon: 'none',
									duration: 2000
								});
								return false;
							}
						}
					});
				}

			},
			//获取验证码
			linkToTransfer: debounce(function(e) {
				this.getCode();
			}, 1000, true),
			getCodeNumber: function(e) {
				this.linkToTransfer(e)
			},
			//提交表单信息
		}
	};
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}

	.solo {
		color: #3E3E3E;
		font-size: 48rpx;
		line-height: 130rpx;
		font-weight: bold;
	}

	.solophone {
		color: #3E3E3E;
		font-size: 28rpx;
		line-height: 50rpx;
	}

	.phoneinfo {
		width: 100%;
		height: 50rpx;
		margin-top: 80rpx;
		font-size: 24rpx;
		display: flex;
		justify-content: space-between;
	}

	.phoneinfo_left {
		color: #999999;
	}

	.phoneinfo_right {
		color: #01CC81
	}

	.codes {
		width: 100%;
		height: 140rpx;
		margin: 30rpx 0;
	}

	.area {
		width: 120rpx;
		height: 56rpx;
		background-color: #EEEEEE;
		border-radius: 5rpx;
		color: #3E3E3E;
		font-size: 32rpx;
		float: left;
		text-align: center;
		line-height: 56rpx;
		margin-top: 25rpx;
	}

	.nums {
		float: right;
		width: 76%;
		height: 100%;
	}

	.submit-btn-wrap {
		padding-top: 130rpx;
		text-align: center;

		.submit-btn {
			display: inline-block;
			width: 511rpx;
			height: 98rpx;
			line-height: 98rpx;
			text-align: center;
			color: #fff;
			font-size: 30rpx;
			border-radius: 50rpx;
			background-image: linear-gradient(to right, #000000, #d9d9d9);

			&.active {
				opacity: 0.4;
			}
		}

		.submit-btn-disable {
			display: inline-block;
			width: 511rpx;
			height: 98rpx;
			line-height: 98rpx;
			text-align: center;
			color: #fff;
			font-size: 30rpx;
			border-radius: 50rpx;
			box-shadow: 0 0 15rpx 15rpx rgba(#cdf7eb, 0.3);
			background-image: linear-gradient(to right, #01c774, #01dda9);

			&.active {
				opacity: 0.4;
			}
		}
	}

	.lo {
		text-align: center;
		color: #999999;
		font-size: 32rpx;
		line-height: 100rpx;
	}
</style>
