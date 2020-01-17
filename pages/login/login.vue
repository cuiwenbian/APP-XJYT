<template>
	<!-- 登录 -->
	<view class="container">
		<view class="autho" v-if="isHide">
			<view class="login-icon">
				<image class="login-img" src="../../static/images/xiao.png"></image>
				<text class="login-text">欢迎来到星际云通</text>
			</view>
			<image class="img" src="../../static/images/hosting.svg"></image>
			<view class="txt">
				<text class="item">矿机在线管理</text>
				<text class="item">|</text>
				<text class="item">收益实时查询</text>
			</view>
			<!-- <view class="iti"></view> -->
			<!--注册-->
			<button class="changeBtn" size="default" open-type="getUserInfo" @getuserinfo="autuWXLogin" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">授权登录</button>
		</view>
		<image class="logo" src="../../static/images/FIL.png" mode=""></image>
		<image class="fil" src="../../static/images/filecoin.png" mode=""></image>
		<view class="enter">
			<image class="icon" src="../../static/images/phone.png" mode=""></image>
			<input class="number" maxlength="11" type="number" :value="phone" placeholder="请输入手机号码" @input="getPhoneValue" />
		</view>
		<view class="enter">
			<image class="icon" src="../../static/images/lock.png" mode=""></image>
			<input class="number" type="password" :value="password" placeholder="请输入密码" @input="getPasswordValue" />
		</view>
		<view class="tip">
			<view @click="quickLogin" class="tips">快速登录</view>
			<view @click="forgetPassword" class="tips">忘记密码</view>
		</view>
		<view :class="n ? 'btn' : 'btn1'" @click="login" @touchstart="next" @touchend="back">登录</view>
		<view @click="sure" class="register">注册</view>
		<view class="shade" v-if="shade">
			<view class="pop">
				<view class="pop-title">用户不存在，是否注册？</view>
				<view class="pops">
					<view class="pop-btn quxiao" @click="cancel">暂不</view>
					<view class="pop-btn yess" @click="sure">前往注册</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			isHide: false,
			n: true,
			show: false,
			phone: '',
			password: '',
			shade: false
		};
	},
	onLoad() {
		 // #ifdef MP-WEIXIN
		var that = this;
		uni.getSetting({
			success: function(res) {
				console.log(res)
				uni.setStorageSync('scope',res.authSetting['scope.userInfo'])
				console.log(res.authSetting['scope.userInfo'])
				if (res.authSetting['scope.userInfo']) {
					//用户已经授权
					uni.getUserInfo({
						success: function(res) {
							// 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
							// 根据自己的需求有其他操作再补充
							// 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
							uni.login({
								success: res => {
									// 获取到用户的 code 之后：res.code
									console.log('用户的code:' + res.code);
									// 可以传给后台，再经过解析获取用户的 openid
									uni.request({
									    url:that.url+'users/authorization/',
									    method: 'POST',
									    data: {
									        code: res.code
									    },
									    headers: {
									        'Content-Type': 'application/json'
									    },
									    success: res => {
									        console.log(res);
									        uni.setStorageSync('openid', res.data.data);
									       
									    },
									});
									
								}
							});
						}
					});
				} else {
					// 用户没有授权
					// 改变 isHide 的值，显示授权页面
					that.isHide = true;
				}
			}
		});
		// #endif
	},

	methods: {
		autuWXLogin: function(e) {
			console.log(e)
			if (e.detail.userInfo) {
				//用户按了允许授权按钮
				var that = this;
				// 获取到用户的信息了，打印到控制台上看下
				console.log('用户的信息如下：');
				console.log(e.detail.userInfo);
				//授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
				that.isHide=false
			} else {
				//用户按了拒绝按钮
				uni.showModal({
					title: '警告',
					content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
					showCancel: false,
					confirmText: '返回授权',
					success: function(res) {
						// 用户没有授权成功，不需要改变 isHide 的值
						if (res.confirm) {
							console.log('用户点击了“返回授权”');
						}
					}
				});
			}
		},
		quickLogin: function() {
			uni.redirectTo({
				url: '../otherLogin/otherLogin'
			});
		},
		forgetPassword: function() {
			uni.navigateTo({
				url: '../getBackPassword/getBackPassword',
				animationType: 'fade-in',
				animationDuration: 200
			});
		},
		next: function() {
			this.n = false;
		},
		back: function() {
			this.n = true;
		},
		cancel: function() {
			this.shade = false;
		},
		getPhoneValue: function(e) {
			this.phone = e.detail.value;
		},
		getPasswordValue: function(e) {
			this.password = e.detail.value;
		},
		sure: function() {
			uni.redirectTo({
				url: '../register/register'
			});
		},
		login() {
			var _self = this;
			if (this.phone == '') {
				uni.showToast({
					icon: 'none',
					title: '请输入手机号'
				});
				return false;
			}
			var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
			if (!myreg.test(this.phone)) {
				uni.showToast({
					title: '请输入正确的手机号',
					icon: 'none',
					mask: true,
					duration: 2000
				});
				return false;
			}
			if (!this.password) {
				uni.showToast({
					title: '请输入密码',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			uni.request({
				url: this.url + 'users/login/',
				method: 'POST',
				data: {
					mobile: this.phone,
					password: this.password
				},
				headers: {
					'Content-Type': 'application/json'
				},
				success: res => {
					uni.setStorageSync('phone', this.phone);
					uni.setStorageSync('token', res.data.token);
					_self.global_.phone = this.phone;
					_self.global_.token = uni.getStorageSync('token');
					if (res.statusCode == 401) {
						_self.shade = true;
					}
					if (res.statusCode == 402) {
						uni.showToast({
							title: '密码错误',
							icon: 'none'
						});
					}
					if (res.statusCode == 200) {
						uni.reLaunch({
							url: '../index/index'
						});
					}
					if (res.statusCode == 412) {
						uni.showToast({
							title: '请用手机短信快速登录,并设置密码',
							icon: 'none'
						});
					}
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
};
</script>

<style>
page {
	background: #121212;
}
.autho {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9;
	background-color: #121e2c;
}
.login-icon {
	flex: none;
	margin-top: 120rpx;
	display: flex;
	align-items: center;
}
.login-img {
	width: 92rpx;
	height: 80rpx;
	margin-top: 120rpx;
	margin-left: 120rpx;
}
.iti {
	height: 800rpx;
}
.login-text {
	font-weight: bold;
	font-size: 50rpx;
	color: #01c0dd;
	margin-top: 100rpx;
}
/* 矿机图片 */
.img {
	width: 500rpx;
	height: 500rpx;
	display: block;
	margin: 10px auto;
}

.txt {
	height: 100rpx;
	line-height: 100rpx;
	color: #01c0dd;
	display: flex;
	justify-content: space-around;
}
.item {
	font-size: 30rpx;
	margin-left: 50rpx;
}
/*按钮*/
.changeBtn {
	/* 一 */
	width: 80%;
	height: 80rpx;
	background-color: #41bec9;
	color: #fff;
	border-radius: 30rpx;
	margin: 100rpx auto;
	line-height: 80rpx;
	font-size: 42rpx;
}
.shade {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
}
.pop {
	width: 550rpx;
	height: 300rpx;
	margin: 500rpx auto;
	padding: 0 60rpx;
	box-sizing: border-box;
	background: #fff;
	border-radius: 10rpx;
}
.pop-title {
	height: 180rpx;
	line-height: 180rpx;
	text-align: center;
	font-size: 34rpx;
}
.pops {
	height: 100rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.pop-btn {
	width: 158rpx;
	height: 66rpx;
	border-radius: 10rpx;
	line-height: 66rpx;
	font-size: 30rpx;
	color: #fff;
	text-align: center;
}
.yess {
	background: #121212;
}
.quxiao {
	color: rgba(137, 137, 137, 1);
}
.logo {
	display: block;
	width: 185rpx;
	height: 185rpx;
	margin: 150rpx auto 0;
}
.fil {
	width: 250rpx;
	height: 100rpx;
	display: block;
	margin: 30rpx auto 100rpx;
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
	width: 40rpx;
	height: 40rpx;
	margin-top: 30rpx;
	margin-left: 10rpx;
}
.number {
	float: right;
	width: 520rpx;
	height: 100rpx;
	/* color:#646464; */
	color: #fff;
	font-size: 30rpx;
}
.tip {
	width: 600rpx;
	margin: 0 auto;
	height: 20rpx;
	display: flex;
	font-size: 28rpx;
	justify-content: space-between;
}
.tips {
	line-height: 20rpx;
	color: #646464;
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
.btn1 {
	width: 680rpx;
	height: 80rpx;
	background: RGBA(255, 255, 255, 0.5);
	border-radius: 50rpx;
	margin: 80rpx auto;
	color: #333;
	text-align: center;
	line-height: 80rpx;
}
.register {
	width: 150rpx;
	height: 57rpx;
	border-radius: 30rpx;
	border: 1px solid #fff;
	margin: 0 auto;
	color: #fff;
	font-size: 26rpx;
	line-height: 57rpx;
	text-align: center;
}
</style>
