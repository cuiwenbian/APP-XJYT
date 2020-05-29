<template>
	<view>
		<view class='height'></view>
		<view :style="{ height: navigationHeight }">
			<view class="header">
				<view class='back-bg'></view>
				<view class='back' @click="onBack"></view>
				<view class="content">设置</view>
			</view>
			<view class="back" @click="backfront">
				<view class='back_r'></view>
			</view>
		</view>
		<view class="maincontent">
			<view class="l" @click="personal">
				<view class='icon'>
					<image style='width:36rpx;height:32rpx;' src="../../static/images/person-set.png" mode=""></image>
				</view>
				<view class="infoo">
					<view>个人资料</view>
					<image class='right-go' src="../../static/images/jj.png" mode=""></image>
				</view>
			</view>
			<view class="l" @click="mailaddress">
				<view class='icon'>
					<image style='width:42rpx;height:42rpx;' src="../../static/images/email-set.png" mode=""></image>
				</view>
				<view class="infoo">
					<view>邮箱绑定</view>
					<image class='right-go' src="../../static/images/jj.png" mode=""></image>
				</view>
			</view>
			<view class='s-line'></view>
			<view class="l" @click="authentication">
				<view class='icon'>
					<image style='width:38rpx;height:32rpx;' src="../../static/images/identity-set.png" mode=""></image>
				</view>
				<view class="infoo">
					<view>实名认证</view>
					<image class='right-go' src="../../static/images/jj.png" mode=""></image>
				</view>
			</view>
			<view class="l" @click="loginpassword">
				<view class='icon'>
					<image style='width:20rpx;height:38rpx;' src="../../static/images/login-set.png" mode=""></image>
				</view>
				<view class="infoo">
					<view>登录密码</view>
					<image class='right-go' src="../../static/images/jj.png" mode=""></image>
				</view>
			</view>
			<view class="l" @click="radepassword">
				<view class='icon'>
					<image style='width:34rpx;height:34rpx;' src="../../static/images/tran-set.png" mode=""></image>
				</view>
				<view class="infoo">
					<view>交易密码</view>
					<image class='right-go' src="../../static/images/jj.png" mode=""></image>
				</view>
			</view>
		</view>

		<!-- #ifdef APP-PLUS -->
		<view class="l">
			<view class='icon'>
				<image style='width:26rpx;height:31rpx;' src="../../static/images/person-set.png" mode=""></image>
			</view>
			<view class="infoo">
				<view>当前版本</view>
				<view style="font-family: 'myface';">v{{ version }}</view>
			</view>
		</view>
		<!-- #endif -->
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="logout">退出登录</view>
		</view>
		<view class="shade" v-if="shade" @touchmove.stop.prevent="moveHandle">
			<view class="pop">
				<view class="tips">提示</view>
				<view class="pop-title">退出登录？</view>
				<view class="pops">
					<view class="pop-btn quxiao" @click="cancel">取消</view>
					<view class="pop-btn yess" @click="sure">退出</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		debounce
	} from '@/common/utils.js';
	export default {
		data() {
			return {
				phone: '',
				version: uni.getStorageSync('version'),
				shade: false,
				navigationHeight:''
			};
		},
		onLoad() {
			// #ifdef MP-WEIXIN
			let systemInfo = uni.getSystemInfoSync()
			// px转换到rpx的比例
			let pxToRpxScale = 750 / systemInfo.windowWidth;
			// 状态栏的高度
			let ktxStatusHeight = systemInfo.statusBarHeight * pxToRpxScale
			// 导航栏的高度
			let navigationHeight = 44 * pxToRpxScale
			this.navigationHeight=navigationHeight + 'rpx';
			console.log(ktxStatusHeight)
			console.log(navigationHeight)
			// #endif
			var p = uni.getStorageSync('phone');
			var p1 = p.split(''); //字符串转为数组
			var phone =
				p1
				.slice(0, 3)
				.join()
				.replace(/,/g, '') +
				'****' +
				p1
				.slice(7, 11)
				.join()
				.replace(/,/g, '');
			this.phone = phone;
		},
		onHide() {
			this.shade = false;
		},
		methods: {
			backfront: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			logout: function() {
				this.shade = true;
			},
			moveHandle: function(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			cancel: function() {
				this.shade = false;
			},
			sure: function() {
				this.global_.token == '';
				this.global_.phone == '';
				uni.removeStorageSync('phone');
				uni.removeStorageSync('token');
				uni.removeStorageSync('nowtime');
				uni.reLaunch({
					url:'../index/index'
				})
			},
			// 跳转路劲
			linkToTransfer: debounce(
				function() {
					uni.navigateTo({
						url: '../../my/personal/personal?phone=' + this.phone
					});
				},
				500,
				true
			),
			personal: function() {
				this.linkToTransfer();
			},
			linkToTransfer1: debounce(
				function() {
					uni.request({
						url: this.url + 'linkemails/',
						method: 'GET',
						header: {
							Authorization: 'JWT' + ' ' + this.global_.token
						},
						success(res) {
							if (res.statusCode == 200 || res.statusCode == 201) {
								uni.navigateTo({
									url: '../../my/email/email'
								});
							}
							if (res.statusCode == 400) {
								uni.navigateTo({
									url: '../../my/unbindemail/unbindemail'
								});
							}
						}
					});
				},
				500,
				true
			),
			mailaddress: function() {
				this.linkToTransfer1();
			},
			linkToTransfer2: debounce(
				function() {
					uni.request({
						url: this.url + 'realnames/',
						method: 'GET',
						header: {
							Authorization: 'JWT' + ' ' + this.global_.token
						},
						success: function(res) {
							if (res.statusCode == 202) {
								uni.showToast({
									title: '已实名认证',
									icon: 'none',
									duration: 2000
								});
								return false;
							}
							if (res.statusCode == 205) {
								uni.showToast({
									title: '身份认证审核中，请等待',
									icon: 'none',
									duration: 2000
								});
								return false;
							}
							if (res.statusCode == 200) {
								uni.navigateTo({
									url: '../../my/identity/identity'
								});
							}
						}
					});
				},
				500,
				true
			),
			authentication: function() {
				this.linkToTransfer2();
			},
			linkToTransfer3: debounce(
				function() {
					uni.request({
						url: this.url + 'updataloginpwd/',
						method: 'GET',
						header: {
							Authorization: 'JWT' + ' ' + this.global_.token
						},
						success(res) {
							if (res.statusCode == 400) {
								uni.navigateTo({
									url: '../../my/change-loginPassword/change-loginPassword'
								});
							}
							if (res.statusCode == 200) {
								uni.navigateTo({
									url: '../../my/change-pass/change-pass'
								});
							}
						}
					});
				},
				500,
				true
			),
			loginpassword: function() {
				this.linkToTransfer3();
			},
			linkToTransfer4: debounce(
				function() {
					var that = this;
					uni.request({
						url: this.url + 'setmoneys/',
						method: 'GET',
						header: {
							Authorization: 'JWT' + ' ' + this.global_.token
						},
						success(res) {
							if (res.statusCode == 302) {
								uni.showToast({
									title: '用户未绑定邮箱',
									icon: 'none',
									duration: 2000
								});
								return false;
							}
							if (res.statusCode == 400) {
								uni.navigateTo({
									url: '../../my/change-password/change-password'
								});
							}
							if (res.statusCode == 200) {
								uni.navigateTo({
									url: '../../my/trade-password/trade-password'
								});
							}
						}
					});
				},
				500,
				true
			),
			radepassword: function() {
				this.linkToTransfer4();
			},
			// 返回
			onBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	};
</script>

<style lang="scss">
	.height {
		height: var(--status-bar-height);
		background: #FAFBFC;
	} 

	.l {
		width: 100%;
		height: 154rpx;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.icon {
		display: block;
		float: left;
		width: 15%;
		height: 126rpx;
		padding: 38rpx 30rpx;
		box-sizing: border-box;
	}

	.infoo {
		float: left;
		width: 85%;
		height: 126rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
		padding-top: 30rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		color: #35394F;
	}

	.right-go {
		width: 36rpx;
		height: 36rpx;
	}

	.s-line {
		width: 100%;
		height: 20rpx;
		background: #eee;
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
			background-image: linear-gradient(to right, #01c774, #01dda9);

			&.active {
				opacity: 0.4;
			}
		}
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
		width: 636rpx;
		height: 368rpx;
		margin: 450rpx auto;
		padding: 47rpx 40rpx 48rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 5rpx;
	}

	.tips {
		text-align: center;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}

	.pop-title {
		height: 160rpx;
		line-height: 160rpx;
		text-align: center;
		font-size: 28rpx;
		color: #666666;
	}

	.pops {
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.pop-btn {
		width: 260rpx;
		height: 72rpx;
		border-radius: 5rpx;
		line-height: 72rpx;
		font-size: 26rpx;
		color: #666666;
		background: #cacaca;
		text-align: center;
	}

	.yess {
		background: #41bec9;
		color: #ffffff;
	}
	.header{
		background-color: #FAFBFC;
		color: #000;
		position: fixed;
		top:var(--status-bar-height);
	    left: 0;
	    width: 100%;
		height: 88rpx;
		padding: 7px 3px;
		display: flex;
		overflow: hidden;
		-webkit-box-pack: justify;
		justify-content: space-between;
	    box-sizing: border-box;
	    z-index: 1;
		.back{
			width:160rpx;
			height:88rpx;
			position: absolute;
			z-index:10;
		}
		.back-bg{
			width:24rpx;
			height:24rpx;
			border-top:3rpx solid #031024;
			border-left:3rpx solid #031024;
			transform: rotate(-45deg);
			margin:15rpx 0 0 26rpx;
			position: absolute;
			z-index:1;
		}
		.content{
			text-align: center;
			font-weight: bold;
			height:88rpx;
			flex:1;
			font-size: 16px;
		}
	}
</style>
