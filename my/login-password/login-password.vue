<template>
	<!--根据手机号 修改登录密码 -->
	<view class="container">
		<view class="line-t"></view>
		<view class="list1">
			<text class="email1">手机号：{{ phone }}</text>
		</view>
		<view class="linee"></view>
		<view class="list1">
			<input class="code1" type="text" @input="getCodeValue" :value="code" placeholder="请输入手机验证码" />
			<button class="getcode" @click="getCodeBtn" :disabled="disabled">{{ codename }}</button>
		</view>
		<view class="set">修改登录密码</view>
		<view class="list">
			<view class="title">登录密码:</view>
			<input class="code" :password="isPassword" :value="pwd" @input="getLoginPassword" @blur='checkPwd' placeholder="6-16位数字或字母" />
			<image
				:class="isPassword ? 'close' : 'cloose'"
				:src="isPassword ? '../../static/images/password.png' : '../../static/images/openeye.png'"
				@click="show"
				mode=""
			></image>
		</view>
		<view class="linee"></view>
		<view class="list">
			<view class="title">确认密码:</view>
			<input class="code1" :password="isPassword1" :value="pwd1" @input="getLoginPassword1" placeholder="请再次输入新密码" />
			<image
				:class="isPassword1 ? 'close' : 'cloose'"
				:src="isPassword1 ? '../../static/images/password.png' : '../../static/images/openeye.png'"
				@click="show1"
				mode=""
			></image>
		</view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="save" v-if="allowLogin">确认修改</view>
			<view class="submit-btn-disable" v-else>确认修改</view>
		</view>
	</view>
</template>

<script>
	import { debounce } from '@/common/utils.js';
export default {
	data() {
		return {
			phone: uni.getStorageSync('phone'),
			isPassword: true,
			isPassword1: true,
			codename: ' 获取验证码 ',
			pwd: '',
			pwd1: '',
			n: true,
			iscode: '',
			code: '',
			disabled: false
		};
	},
	onBackPress(option) {
		plus.key.hideSoftKeybord();
	},
	computed: {
		allowLogin () {
			return !!(this.pwd && this.pwd1 && this.code)
		},
	},
	methods: {
		next: function() {
			var that = this;
			that.n = false;
		},
		back: function() {
			var that = this;
			that.n = true;
		},
		getLoginPassword: function(e) {
			this.pwd = e.detail.value;
		},
		checkPwd:function(e){
			this.pwd = e.detail.value;
			var str = /^[a-z0-9]{6,16}$/;
			if(!str.test(this.pwd)) {
				uni.showToast({
					title: '密码格式为6到16位字母或数字',
					icon: 'none',
					duration: 2000
				});
			}
		},
		getLoginPassword1: function(e) {
			this.pwd1 = e.detail.value;
		},
		getCodeValue: function(e) {
			this.code = e.detail.value;
		},
		show: function() {
			this.isPassword = !this.isPassword;
		},
		show1: function() {
			this.isPassword1 = !this.isPassword1;
		},
		getCode: function() {
			var _this = this;
			uni.request({
				//短信接口
				url: _this.url + 'users/login/sms/',
				method: 'POST',
				data: {
					mobile: this.phone
				},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success(res) {
					//根据code判断
					var ocode = res.statusCode;
					if (ocode == 200) {
						_this.iscode = res.data.data;
						var num = 61;
						var timer = setInterval(function() {
							num--;
							if (num <= 0) {
								clearInterval(timer);

								(_this.codename = '重新发送'), (_this.disabled = false);
							} else {
								_this.codename = num + 's';
								_this.disabled = true;
							}
						}, 1000);
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
		},
		//获取验证码
		linkToTransfer: debounce(function(e){
			this.getCode();
			var _this = this;
		},500, true),
		getCodeBtn: function(e) {
			this.linkToTransfer(e)
		},
		save() {
			var _self = this;
			if (this.pwd == '') {
				uni.showToast({
					title: '请输入登录密码',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (this.pwd1 == '') {
				uni.showToast({
					title: '请确认登录密码',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (this.code && this.code != this.iscode) {
				uni.showToast({
					title: '验证码错误',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (this.pwd1 && this.pwd && this.pwd1 !== this.pwd) {
				uni.showToast({
					title: '两次密码不一致',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			var str = /^[a-z0-9]{6,16}$/;
			if (!str.test(this.pwd)) {
				uni.showToast({
					title: '密码格式不正确',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (this.code == '') {
				uni.showToast({
					title: '验证码不能为空',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			uni.request({
				url: this.url + 'updataLoginpwdcode/',
				method: 'POST',
				data: {
					mobile: this.phone,
					password: this.pwd,
					password1: this.pwd1,
					code: this.code
				},
				headers: {
					'Content-Type': 'application/json'
				},
				success: res => {
					if (res.statusCode == 200) {
						uni.showToast({
							title: '登录密码修改成功',
							icon: 'none',
							duration: 2000
						});
						uni.removeStorageSync('phone');
						uni.removeStorageSync('token');
						uni.removeStorageSync('nowtime');
						uni.reLaunch({
							url: '../../pages/login/login'
						});
					}
					if (res.statusCode == 400) {
						uni.showToast({
							title: '验证码已过期',
							icon: 'none'
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
page {
	background: #edeeee;
}
.line-t {
	height: 50rpx;
}
.list1 {
	height: 100rpx;
	width: 100%;
	background: #fff;
	padding-left: 48rpx;
	box-sizing: border-box;
}
.title1 {
	float: left;
	width: 150rpx;
	line-height: 100rpx;
	font-size: 30rpx;
	color: #333333;
}
.email1 {
	line-height: 100rpx;
	font-size: 30rpx;
	color: #333333;
}
.code1 {
	float: left;
	width: 450rpx;
	height: 100rpx;
	line-height: 100rpx;
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
	line-height: 100rpx;
	margin-left: 48rpx;
	font-size: 30rpx;
}
.list {
	height: 100rpx;
	width: 100%;
	background: #fff;
	padding-left: 48rpx;
	box-sizing: border-box;
}
.title {
	float: left;
	line-height: 100rpx;
	font-size: 30rpx;
	width: 150rpx;
}
.code {
	float: left;
	width: 450rpx;
	height: 100rpx;
	line-height: 100rpx;
	font-size: 30rpx;
}
.close {
	float: right;
	display: block;
	width: 34rpx;
	height: 15rpx;
	margin-right: 48rpx;
	margin-top: 40rpx;
}
.cloose {
	float: right;
	display: block;
	width: 34rpx;
	height: 24rpx;
	margin-right: 48rpx;
	margin-top: 40rpx;
}
.open {
	height: 40rpx;
	margin-top: 30rpx;
}
.linee {
	height: 20rpx;
}
.set {
	line-height: 100rpx;
	font-size: 30rpx;
	margin-left: 48rpx;
}
.submit-btn-wrap {
		padding-top: 130rpx;
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
			// background-image: linear-gradient(to right, #01c774, #01dda9);
			// &.active {
			// 	opacity: 0.4;
			// }
			background-color: rgb(2,213,151);
			transition: all .2s;
			&:active {
				background-color: rgba(2,213,151, .85);
			}
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
			// background-image: linear-gradient(to right, #706f72, #a9a8ab);
			background-color: rgba(2,213,151, .4);
		}
	}

</style>
