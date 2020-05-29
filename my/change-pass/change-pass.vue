<template>
	<!-- 根据现有密码 修改登录密码 -->
	<view class="container">
		<view class="line">验证现有密码</view>
		<view class="list"><input class="code" type="password" :value="pass" @input="getNowPwd" placeholder="请输入现有密码" /></view>
		<view class="set">设置新密码</view>
		<view class="list">
			<view class="title">登录密码:</view>
			<input class="code" :password="isPassword" :value="pwd1" @input="getPwd1" @blur='checkPwd' placeholder="6-16位数字或字母" />
			<image :class="isPassword ? 'close' : 'cloose'" :src="isPassword ? '../../static/images/password.png' : '../../static/images/openeye.png'"
			 @click="show" mode=""></image>
		</view>
		<view class="linee"></view>
		<view class="list">
			<view class="title">确认密码:</view>
			<input class="code" :password="isPassword1" :value="pwd2" @input="getPwd2" placeholder="请再次输入新密码" />
			<image :class="isPassword1 ? 'close' : 'cloose'" :src="isPassword1 ? '../../static/images/password.png' : '../../static/images/openeye.png'"
			 @click="show1" mode=""></image>
		</view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="save" v-if="allowLogin">确认修改</view>
			<view class="submit-btn-disable" v-else>确认修改</view>
		</view>
		<view class="other" @click="other">其他方式</view>
	</view>
</template>

<script>
	import {
		debounce
	} from '@/common/utils.js';
	export default {
		data() {
			return {
				isPassword: true,
				isPassword1: true,
				checked: true,
				n: true,
				pass: '',
				pwd1: '',
				pwd2: ''
			};
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord();
		},
		computed: {
			allowLogin () {
				return !!(this.pass && this.pwd1 && this.pwd2)
			},
		},
		methods: {
			getNowPwd: function(e) {
				this.pass = e.detail.value;
			},
			getPwd1: function(e) {
				this.pwd1 = e.detail.value;
			},
			getPwd2: function(e) {
				this.pwd2 = e.detail.value;
			},
			checkPwd:function(e){
				this.pwd1 = e.detail.value;
				var str = /^[a-z0-9]{6,16}$/;
				if(!str.test(this.pwd1)) {
					uni.showToast({
						title: '密码格式为6到16位字母或数字',
						icon: 'none',
						duration: 2000
					});
					
				}
			},
			show: function() {
				this.isPassword = !this.isPassword;
			},
			show1: function() {
				this.isPassword1 = !this.isPassword1;
			},
			next: function() {
				var that = this;
				that.n = false;
			},
			back: function() {
				var that = this;
				that.n = true;
			},
			linkToTransfer: debounce(function() {
				uni.navigateTo({
					url: '../login-password/login-password'
				});
			}, 500, true),
			other: function() {
				this.linkToTransfer()
			},
			save: function() {
				var _self = this;
				var str = /^[a-z0-9]{6,16}$/;
				if (this.pass == '') {
					uni.showToast({
						title: '请输入现有密码',
						icon: 'none',
						duration: 2000
					});
					// return false;
				} else if (this.pwd1 == '') {
					uni.showToast({
						title: '请输入登录密码',
						icon: 'none',
						duration: 2000
					});
					// return false;
				} else if (this.pwd1 && this.pwd2 && this.pwd1 !== this.pwd2) {
					uni.showToast({
						title: '两次密码不一致',
						icon: 'none',
						duration: 2000
					});
					// return false;
				} else if (this.pwd2 == '') {
					uni.showToast({
						title: '请确认登录密码',
						icon: 'none',
						duration: 2000
					});
					// return false;
				} else if(!str.test(this.pwd1)) {
					uni.showToast({
						title: '密码格式为6到16位字母或数字',
						icon: 'none',
						duration: 2000
					});
					
				}else{
					uni.request({
						url: this.url + 'updataloginpwd/',
						method: 'POST',
						data: {
							mobile: uni.getStorageSync('phone'),
							password: this.pass,
							password1: this.pwd1,
							password2: this.pwd2
						},
						headers: {
							Authorization: 'JWT' + ' ' + this.global_.token
						},
						success: res => {
							if (res.statusCode == 200) {
								
								uni.removeStorageSync('phone');
								uni.removeStorageSync('token');
								uni.removeStorageSync('nowtime');
								uni.reLaunch({
									url: '../../pages/login/login'
								});
								uni.showToast({
									title: '登录密码修改成功',
									icon: 'none',
									duration: 1500
								});
							}
							if (res.statusCode == 400) {
								uni.showToast({
									title: '现有密码错误',
									icon: 'none'
								});
							}
						}
					});
				}
			
			}
		}
	};
</script>

<style lang="scss">
	page {
		background: #edeeee;
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
			// background-image: linear-gradient(to right, #706f72, #a9a8ab);
			background-color: rgba(2,213,151, .4);
		}
	}

	.other {
		line-height: 100rpx;
		float: right;
		margin-right: 48rpx;
		color: #41bec9;
		font-size: 24rpx;
	}
</style>
