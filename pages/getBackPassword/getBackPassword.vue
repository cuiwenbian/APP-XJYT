<template>
	<!-- 忘记密码 -->
	<view class="container">
		<view class="header-tit" :style="{'paddingTop':isFoucs?'30rpx':'134rpx'}">忘记密码</view>
		<view class="form-list-wrap" :style="{'paddingTop':isFoucs?'40rpx':'80rpx'}">
			<ComInputCom :val.sync="phone" labelText="输入手机号" inputPRight="60rpx"  type="number" :maxlength="11" :isFocus='isFoucs' @onFocus='isFoucs=true' @onBlur='isFoucs=false'>
				<image src="/static/images/icon-u-phone.png" slot="defaultIcon" class="item-phone-icon"></image>
				<image src="/static/images/icon-u-phone-active.png" slot="activeIcon" class="item-phone-icon"></image>
				<view class="clear-phone-btn" slot="handleBtn" v-show="phoneClearBtnShow" @click="clearPhoneVal">
					<image src="/static/images/icon-u-close.png" class="close-icon-img"></image>
				</view>
			</ComInputCom>
		</view>
		<view class="form-list-wrap" :style="{'paddingTop':isFoucs?'40rpx':'80rpx'}">
			<ComInputCom :val.sync="code" labelText="输入验证码" type="number" :maxlength="11" :isFoucs='isFoucs' @onFocus='isFoucs=true' @onBlur='isFoucs=false'>
				<image src="/static/images/icon-trans.png" slot="defaultIcon" class="item-trans-icon"></image>
				<image src="/static/images/icon-trans-active.png" slot="activeIcon" class="item-trans-active-icon"></image>
				<view class="send-code-btn" :class="{ 'no-send': cutdownIng }" slot="handleBtn" @click="sendVeCode">{{ sendBtnText }}</view>
			</ComInputCom>
		</view>
		<view class="submit-btn-wrap" :style="{'paddingTop':isFoucs?'20rpx':'130rpx'}">
			<view class="submit-btn" hover-class="active" @click="next" v-if="allowLogin">下一步</view>
			<view class="submit-btn-disable" v-else>下一步</view>
		</view>
	</view>
</template>

<script>
import ComInputCom from '@/components/ComInputCom.vue';


const cutdownTime = 60;
export default {
	data() {
		return {
			phone: '', //手机号
			code: '', //验证码
			iscode: '', //用于存放验证码接口里获取到的code
			codename: ' 获取验证码 ',
			disabled: false,
			// phoneClearBtnShow: false,
			
			cutdownIng: false, // 正在倒计时中，
			cutDownTiemr: '', // 倒计时定时器
			sendBtnText: '获取验证码',
			isFoucs:false
		};
	},
	computed: {
		allowLogin () {
			return !!(this.phone && this.code)
		},
		phoneClearBtnShow(){
			return !!this.phone
		}
	},
	components: {
		ComInputCom
	},
	onBackPress(option) {
		plus.key.hideSoftKeybord();
	},
	onUnload() {
		if (this.cutDownTiemr) {
			clearInterval(this.cutDownTiemr);
		}
	},
	methods: {
		onBackToOtherLogin(){
			uni.reLaunch({
				url:'/pages/login/login'
			})
		},
		getPhoneValue: function(e) {
			if (e.detail.value.length == 11) {
				this.disabled = false;
			}
			this.phone = e.detail.value;
		},
		getCodeValue: function(e) {
			this.code = e.detail.value;
		},
		sendVeCode() {
			let _this = this;
			if (this.cutdownIng) return;
			//判断手机号格式
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
			uni.request({
				method: 'POST',
				data: {
					mobile: this.phone
				},
				//短信接口
				url: _this.url + 'users/forgot/sms/',

				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success(res) {
					//根据code判断
					console.log(res)
					var ocode = res.statusCode;
					if (ocode == 200) {
						_this.iscode = res.data.data;
						let surTime = cutdownTime;
						_this.cutdownIng = true;
						_this.sendBtnText = `${surTime}s后重新获取`;
						_this.cutDownTiemr = setInterval(() => {
							surTime--;
							_this.sendBtnText = `${surTime}s后重新获取`;
							if (surTime <= 0) {
								clearInterval(_this.cutDownTiemr);
								_this.cutdownIng = false;
								_this.sendBtnText = '获取验证码';
								_this.cutDownTiemr = '';
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
				},
				fail: () => {
				}
			});
		},
		// getCode: function() {
		// 	var _this = this;
		// 	//判断手机号格式
		// 	var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
		// 	if (this.phone == '') {
		// 		uni.showToast({
		// 			title: '手机号不能为空',
		// 			icon: 'none',
		// 			duration: 1000
		// 		});
		// 		return false;
		// 	} else if (!myreg.test(this.phone)) {
		// 		uni.showToast({
		// 			title: '请输入正确的手机号',
		// 			icon: 'none',
		// 			duration: 1000
		// 		});
		// 		return false;
		// 	} else {
		// 		uni.request({
		// 			method: 'POST',
		// 			data: {
		// 				mobile: this.phone
		// 			},
		// 			//短信接口
		// 			url: _this.url + 'users/forgot/sms/',

		// 			header: {
		// 				'Content-Type': 'application/x-www-form-urlencoded'
		// 			},
		// 			success(res) {
		// 				//根据code判断
		// 				var ocode = res.statusCode;
		// 				if (ocode == 200) {
		// 					_this.iscode = res.data.data;
		// 					var num = 61;
		// 					var timer = setInterval(function() {
		// 						num--;
		// 						if (num <= 0) {
		// 							clearInterval(timer);
		// 							(_this.codename = '重新发送'), (_this.disabled = false);
		// 						} else {
		// 							_this.codename = num + 's';
		// 							_this.disabled = true;
		// 						}
		// 					}, 1000);
		// 				} else if (ocode == 400) {
		// 					uni.showToast({
		// 						title: '用户不存在',
		// 						icon: 'none',
		// 						duration: 2000
		// 					});
		// 					return false;
		// 				} else if (ocode == 411) {
		// 					uni.showToast({
		// 						title: '操作太频繁，请稍候重试',
		// 						icon: 'none',
		// 						duration: 2000
		// 					});
		// 					return false;
		// 				}
		// 			}
		// 		});
		// 	}
		// },
		//提交表单信息
		next: function() {
			var _this = this;
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
			if (this.code != this.iscode) {
				uni.showToast({
					title: '验证码错误',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			uni.request({
				url: _this.url + 'users/forgot/next/',
				method: 'POST',
				data: {
					mobile: this.phone,
					code: this.code
				},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success(res) {
					if (res.statusCode == 401) {
						uni.showToast({
							title: 'wrong',
							icon: 'none',
							duration: 2000
						});
					}
					if (res.statusCode == 400) {
						uni.showToast({
							title: '手机号验证码不匹配',
							icon: 'none',
							duration: 2000
						});
					}
					if (res.statusCode == 200) {
						uni.navigateTo({
							url: '../setNewPassword/setNewPassword?code=' + _this.code + '&phone=' + _this.phone
						});
					}
				}
			});
		},
		// 清除手机号
		clearPhoneVal() {
			this.phone = '';
		}
	}
};
</script>

<style lang="scss">
$page-plr: 31rpx;
page {
	background: #fff;
}
.page-primary-btn {
}
.page-silver-btn {
}
.pass {
	width: 100%;
	height: 120rpx;
	background: #ffffff;
	position: relative;
}
.icon {
	float: left;
	width: 60rpx;
	height: 60rpx;
	margin-left: 48rpx;
	margin-top: 30rpx;
}
.phone {
	float: right;
	width: 600rpx;
	height: 120rpx;
	font-size: 30rpx;
}
.code {
	float: right;
	width: 376rpx;
	height: 120rpx;
	font-size: 30rpx;
}

.getcode {
	float: right;
	border-radius: 50rpx;
	width: 180rpx;
	height: 50rpx;
	font-size: 22rpx;
	background: #797979;
	color: #fff;
	text-align: center;
	line-height: 50rpx;
	margin-right: 48rpx;
	margin-top: 35rpx;
}
button[disabled] {
	background: #797979 !important;
	color: #fff !important;
}
.line {
	width: 650rpx;
	height: 1rpx;
	border-bottom: 1rpx solid #ededed;
	position: absolute;
	left: 48rpx;
	bottom: 0;
}
.next {
	margin: 100rpx auto;
	width: 690rpx;
	height: 88rpx;
	background: #0a1117;
	border-radius: 80rpx;
	text-align: center;
	line-height: 88rpx;
	color: #fff;
	font-size: 30rpx;
}
.header-tit {
	padding: 30rpx;
	font-size: 49rpx;
	font-weight: bold;
	color: #262626;
	transition: 0.3s all;
}

.item-phone-icon {
	display: block;
	width: 19rpx;
	height: 37rpx;
}
.form-list-wrap {
	$active-color: #02d393;
	$wrap-pl: 46rpx;
	padding: 30rpx $page-plr 0;
	transition: 0.3s all;
}
.submit-btn-wrap {
	padding-top: 70rpx;
	text-align: center;
	transition: all 0.3s;
	.submit-btn {
		width: 511rpx;
		height: 98rpx;
		margin: 0 auto;
		line-height: 98rpx;
		text-align: center;
		color: #fff;
		font-size: 30rpx;
		border-radius: 50rpx;
		box-shadow: 0 0 15rpx 15rpx rgba(#cdf7eb, 0.3);
		        background-color: rgb(2,213,151);
		            transition: all .2s;
		            &:active {
		                background-color: rgba(2,213,151, .85);
		            }
		// background-image: linear-gradient(to right, #01c774, #01dda9);
		// &.active {
		// 	opacity: 0.4;
		// }
	}
	.submit-btn-disable {
		width: 511rpx;
		height: 98rpx;
		margin: 0 auto;
		line-height: 98rpx;
		text-align: center;
		color: #fff;
		font-size: 30rpx;
		border-radius: 50rpx;
		// box-shadow: 0 0 15rpx 15rpx rgba(#cdf7eb, 0.3);
		// background-image: linear-gradient(to right, #706f72, #a9a8ab);
		background-color: rgba(2,213,151, .4);
	}
}
.clear-phone-btn {
	padding: 5rpx;
}
.close-icon-img {
	width: 35rpx;
	height: 35rpx;
}
.item-trans-icon {
	width: 26rpx;
	height: 25rpx;
}
.item-trans-active-icon {
	width: 26rpx;
	height: 26rpx;
}
.send-code-btn {
	width: 240rpx;
	height: 66rpx;
	text-align: center;
	line-height: 66rpx;
	font-size: 26rpx;
	color: #fff;
	border-radius: 50rpx;
	transform: translateY(-15rpx);
	background-image: linear-gradient(to right, #01c774, #01dda9);
	&.no-send {
		background-image: linear-gradient(to right, #706f72, #a9a8ab);
	}
}

page{
	height:100%;
}
.top100rpx{
	margin-top:-200rpx;
}
.container{
	transition: margin 0.2s ease;
}
</style>
