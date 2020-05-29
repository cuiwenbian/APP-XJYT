<template>
	<!-- 快速登录 -->
	<view class="container">
		<view :class="visible?'keyboardpage':'keyboard'">
			<view class="solo">快捷登录注册</view>
			<view class='solophone'>请输入您常用的手机号</view>
			<view class='phoneinfo' :class="{ active: phoneFocusStatus }">
				<view class='area' @click="arrowDown">
					<uni-icon type="arrowdown" size="20"></uni-icon>
					<view class='vall'>
						<p class='vals' title="请选择">+{{unitName}}</p>
					</view>
					<image class='bot' src="../../static/images/bot.png" mode=""></image>
					<view class="selectBox_list" v-show="isShowSelect">
						<view class='height'></view>
						<view class='area-list'>
							<image class='close' @click="close" src="../../static/images/close.png" mode=""></image>
							<view class='country'>
								国家
							</view>
						</view>
						<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
							<view class="selectBox_listLi" v-for="(item, index) in lists" :key="index" @click.stop="select(item, index)">{{item}}</view>
						</scroll-view>
					</view>
				</view>

				<input class='nums' maxlength="11" type="number" :value="phone" @input="getPhoneValue" @focus="formItemFocus" @blur="formItemBlur"
				 placeholder="请输入手机号" placeholder-style="color:#999999;font-size:30rpx;" />
			</view>

			<view class="submit-btn-wrap">
				<view class="submit-btn" hover-class="active" @click="getcodepage" v-if="allowLogin">下一步</view>
				<view class="submit-btn-disable" v-else>下一步</view>
			</view>
			<view class='lo' @click="backLogin">账号登录</view>
		</view>
	</view>
</template>

<script>
	import lists from "../../static/js/phone.js"
	import {
		debounce
	} from '@/common/utils.js';
	export default {
		data() {
			return {
				//isHide: false,
				phoneFocusStatus: false, // 是否获得焦点
				phone: '', //手机号
				disabled: false,
				lists,
				lists_num: '',
				value: lists,
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
				isShowSelect: false,
				unitName: '86',
				visible: false
			};
		},
		onLoad() {
			// #ifdef MP-WEIXIN
			var that = this;
			uni.getSetting({
				success: function(res) {
					console.log(res);
					uni.setStorageSync('scope', res.authSetting['scope.userInfo']);
					console.log(res.authSetting['scope.userInfo']);
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
											url: that.url + 'users/authorization/',
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
											fail: (authErr) => {
												console.log(authErr);
											}
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
			for (let i = 0; i <= this.lists.length; i++) {
				that.lists_num = this.lists[i].split("-")[2];
			}
		},
		computed: {
			allowLogin() {
				return !!(this.phone)
			}
		},
		onShow() {
			var that = this;
			uni.onKeyboardHeightChange(res => {
				if (res.height != 0) {
					that.visible = true
				} else {
					that.visible = false
				}
				console.log(res.height)
			})
		},
		methods: {
			autuWXLogin: function(e) {
				console.log(e);
				if (e.detail.userInfo) {
					//用户按了允许授权按钮
					var that = this;
					// 获取到用户的信息了，打印到控制台上看下
					console.log('用户的信息如下：');
					console.log(e.detail.userInfo);
					//授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
					that.isHide = false;
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
			formItemFocus() {
				this.phoneFocusStatus = true;
			},
			formItemBlur() {
				this.phoneFocusStatus = false;
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			arrowDown() {
				this.isShowSelect = !this.isShowSelect;
			},
			close: function() {
				this.isShowSelect = true;
			},
			select(item, index) {
				this.isShowSelect = false;
				this.unitName = item.split("-")[2];
			},

			getPhoneValue: function(e) {
				this.phone = e.detail.value;
			},
			getcodepage: function() {
				var _this = this;
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
				uni.navigateTo({
					url: '../otherlogin_code/otherlogin_code?phone=' + this.phone + '&codes=' + this.unitName
				})
			},
			backLogin: function() {
				uni.navigateTo({
					url: '../login/login'
				})
			}

		}
	};
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
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
    /* 服务器图片 */
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
	.keyboard {
		padding: 234rpx 34rpx 0;
	}

	.keyboardpage {
		padding: 134rpx 34rpx 0;
	}

	.solo {
		color: #3E3E3E;
		font-size: 48rpx;
		line-height: 100rpx;
		font-weight: bold;
	}

	.solophone {
		color: #3E3E3E;
		font-size: 28rpx;
		line-height: 100rpx;
	}

	.phoneinfo {
		width: 100%;
		height: 100rpx;
		margin-top: 80rpx;
		border-bottom: 1rpx solid #9EA0AA;
	}

	.active {
		border-bottom: 1rpx solid #02d393;
	}

	.area {
		width: 118rpx;
		height: 56rpx;
		background-color: #EEEEEE;
		border-radius: 5rpx;
		color: #3E3E3E;
		font-size: 28rpx;
		float: left;
		line-height: 56rpx;
		text-align: left;
		padding-left: 13rpx;
		box-sizing: border-box;
		margin-top: 25rpx;
		position: relative;
	}

	.bot {
		width: 10rpx;
		height: 6rpx;
		display: block;
		position: absolute;
		top: 25rpx;
		right: 13rpx;
	}

	.vall {
		width: 120rpx;
		height: 56rpx;
		position: absolute;
		top: 0;
		left: 0;
	}

	.vals {
		width: 99rpx;
		height: 56rpx;
		line-height: 56rpx;
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		font-size: 28rpx;
	}

	.selectBox_list {
		width: 100%;
		height: 100%;
		padding-left: 24rpx;
		box-sizing: border-box;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		background-color: #FFFFFF;
		z-index: 99;
		overflow: hidden;
	}

	.height {
		height: var(--status-bar-height);
		background: #ffffff;
	}

	.area-list {
		width: 100%;
		height: 90rpx;
		position: relative;
		border-bottom: 1rpx solid #F0F0F0;
	}

	.close {
		width: 50rpx;
		height: 50rpx;
		display: block;
		position: absolute;
		top: 20rpx;
		left: 10rpx;
	}

	.country {
		text-align: center;
		line-height: 90rpx;
		font-size: 32rpx;
	}

	.scroll-view {
		width: 100%;
		height: 100%;
	}

	.selectBox_listLi {
		text-align: left;
		font-size: 28rpx;
		line-height: 60rpx;
		color: #111111;
	}

	.nums {
		float: right;
		width: 75%;
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
			box-shadow: 0 0 15rpx 15rpx rgba(#cdf7eb, 0.3);
			background-color: rgb(2,213,151);
			transition: all .2s;
			&:active {
			    background-color: rgba(2,213,151, .85);
			}

			// background-image: linear-gradient(to right, #01c774, #01dda9);

			// &.active {
			// 	background: #333333;
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

	.submitbtnwraps {
		padding-top: 60rpx
	}

	.lo {
		text-align: center;
		color: #999999;
		font-size: 32rpx;
		line-height: 100rpx;
	}

	.logo {
		width: 185rpx;
		height: 185rpx;
		margin-top: 135rpx;
		margin-left: calc((100% - 185rpx) / 2);
	}

	.fil {
		width: 250rpx;
		height: 100rpx;
		display: block;
		margin: 0 auto 100rpx;
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
		color: #fff;
		font-size: 30rpx;
	}

	.getcode {
		border-radius: 50rpx;
		width: 180rpx;
		height: 50rpx;
		font-size: 22rpx;
		background: rgba(243, 243, 243, 0.5);
		color: #fff;
		text-align: center;
		line-height: 50rpx;
		position: absolute;
		bottom: 20rpx;
		right: 0;
	}

	.getcode1 {
		border-radius: 50rpx;
		width: 180rpx;
		height: 50rpx;
		font-size: 22rpx;
		background: rgba(243, 243, 243, 0.3);
		color: RGBA(255, 255, 255, 0.5);
		text-align: center;
		line-height: 50rpx;
		position: absolute;
		bottom: 20rpx;
		right: 0;
	}

	button[disabled] {
		background: rgba(243, 243, 243, 0.5) !important;
		color: #fff !important;
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
