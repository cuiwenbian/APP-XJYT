<template>
	<!-- 我的 -->
	<view class="container" style="margin-bottom: 2.9rem;box-sizing: border-box;">
		<view>
			<image class='bg' src="../../static/images/my-background.png" mode="">
				<view class="my-top">
					<view class="avator">
						<!-- <open-data class="img" type="userAvatarUrl"></open-data> -->
						<image class="img" src="../../static/images/avator.png" mode=""></image>
					</view>
					<view class="myinformation" v-if='loginStatus'>
						<view class='phone userlogin'  @click="login">点击登录账户</view>
					</view>
					<view class="myinformation" v-else>
						<view class='phone'>{{ phone }}</view>
						<view class='users' v-if="categart == 1">普通用户</view>
						<view class='users' v-if="categart == 3">公司</view>
						<view class='users' v-if="categart == 5">投资人</view>
						<view class='users' v-if="categart == 2 ">经销商</view>
						<view class='users' v-if="categart == 4">销售员</view>
					</view>
				</view>
				<view class="my-content">
					<view class="list-item" @click="wallet">
						<image class="list-item-img" src="../../static/images/my-transfer.png" mode=""></image>
						<view class="list-item-txt">
							我的资产
						</view>
					</view>
					<view class="list-item" @click="power">
						<image class="list-item-img" src="../../static/images/my-cunli.png" mode=""></image>
						<view class="list-item-txt">
							我的存力
						</view>
					</view>
					<view class="list-item" @click="address">
						<image class="list-item-img" src="../../static/images/coin-address.png" mode=""></image>
						<view class="list-item-txt">
							我的地址
						</view>
					</view>
					<view class="list-item" @click="set">
						<image class="list-item-img" src="../../static/images/setting.png" mode=""></image>
						<view class="list-item-txt">
							设置
						</view>
					</view>
				</view>
			</image>
			<view class="my-bottom-content">
				<view class="my-bottom-content-list" @click="machinsale" v-if="categart == 2 || categart == 4">
					<image class='my-imgs' src="../../static/images/machine-transfer.png" mode=""></image>
					<view class='my-helping'>服务器交易</view>
					<image class='my-go-in' src="../../static/images/right-in.png" mode=""></image>
				</view>
				<view class="my-bottom-content-list" @click="lioj" v-if="categart == 2 || categart == 4">
					<image class='my-imgs' src="../../static/images/cunli-transfer.png" mode=""></image>
					<view class='my-helping'>存力交易</view>
					<image class='my-go-in' src="../../static/images/right-in.png" mode=""></image>
				</view>
				<view class="my-bottom-content-list" @click="help">
					<image class='my-imgs' src="../../static/images/helping.png" mode=""></image>
					<view class='my-helping'>帮助中心</view>
					<image class='my-go-in' src="../../static/images/right-in.png" mode=""></image>
				</view>
				<view class="my-bottom-content-list" @click="suggest">
					<image class='my-imgs' src="../../static/images/suggests.png" mode=""></image>
					<view class='my-helping'>意见反馈</view>
					<image class='my-go-in' src="../../static/images/right-in.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		debounce
	} from '@/common/utils.js';
	import wygBottomTab from '@/components/wyg-bottom-tab.vue';
	import TAB_LIST from '../../static/wyg-bottom-tab/js/botoom-list.js'
	export default {
		data() {
			return {
				phone: '',
				categart: '',
				tabList: TAB_LIST,
				user: false,
				loginStatus: true
			};
		},
		components: {
			wygBottomTab
		},
		mounted() {
			var _this = this;
			// this.token=uni.getStorageSync('token');
			// this.phone=uni.getStorageSync('phone');
			if (this.global_.token) {
				this.loginStatus = false;
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
				_this.phone = phone;
				console.log(_this.phone)
				uni.request({
					url: this.url + 'home/usersviews/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					success(res) {
						console.log(res)
						//字段名字就是categart这里面有三个状态 1,普通用户   2,经销商  3,公司   4,销售员   5,投资人
						_this.categart = res.data.data;
					}
				});
			} else {
				this.loginStatus = true;
			}
           // console.log(uni.getStorageSync('phone'))
			
		},

		methods: {
			login: function() {
				this.linkToTransfer10();
			},
			linkToTransfer10: debounce(
				function() {
					uni.navigateTo({
						url: '../login/login'
					});
				},
				1000,
				true
			),
			linkToTransfer4: debounce(
				function() {
					if (this.global_.token) {
						uni.navigateTo({
							url: '../../my/power/power'
						});
					} else {
						uni.showToast({
							title: '您还没有登录',
							icon: 'none',
							duration: 2000
						})
					}

				},
				1000,
				true
			),
			power: function() {
				this.linkToTransfer4();
			},
			personal: function() {
				uni.navigateTo({
					url: '../../my/personal/personal?phone=' + this.phone
				});
			},
			linkToTransfer: debounce(
				function() {
					if (this.global_.token) {
						uni.navigateTo({
							url: '../../my/my-wallet/my-wallet'
						});
					} else {
						uni.showToast({
							title: '您还没有登录',
							icon: 'none',
							duration: 2000
						})
					}

				},
				1000,
				true
			),
			wallet: function() {
				this.linkToTransfer();
			},
			linkToTransfer2: debounce(
				function() {
					uni.navigateTo({
						url: '../../my/machine-sale/machine-sale'
					});
				},
				1000,
				true
			),
			machinsale: function() {
				this.linkToTransfer2();
			},
			linkToTransfer3: debounce(
				function() {
					if (this.global_.token) {
						uni.request({
							url: this.url + 'walletaddresss/',
							method: 'GET',
							header: {
								Authorization: 'JWT' + ' ' + this.global_.token
							},
							success(res) {
								if (res.statusCode == 400) {
									uni.showToast({
										title: '用户未实名认证',
										icon: 'none',
										duration: 2000
									});
								}
								if (res.statusCode == 201) {
									uni.showToast({
										title: '身份认证审核中，请等待',
										icon: 'none',
										duration: 2000
									});
								}
								if (res.statusCode == 200) {
									uni.navigateTo({
										url: '../../my/address/address'
									});
								}
								if (res.statusCode == 302) {
									uni.showToast({
										title: '用户未设置交易密码',
										icon: 'none',
										duration: 2000
									});
								}
							}
						});
					} else {
						uni.showToast({
							title: '您还没有登录',
							icon: 'none',
							duration: 2000
						})
					}

				},
				1000,
				true
			),
			address: function() {
				this.linkToTransfer3();
			},
			tradePassword: function() {
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
			loginPassword: function() {
				uni.request({
					url: this.url + 'updataloginpasswords/',
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
			bindEmail: function() {
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
			linkToTransfer9: debounce(
				function() {
					if (this.global_.token) {
						uni.navigateTo({
							url: '../../my/suggest/suggest'
						});
					} else {
						uni.showToast({
							title: '您还没有登录',
							icon: 'none',
							duration: 2000
						})
					}
				},
				1000, true
			),
			suggest: function() {
				this.linkToTransfer9()
			},
			help: function() {
				uni.showToast({
					title: '暂未开放',
					icon: 'none',
					duration: 2000
				});
			},
			certification: function() {
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
			linkToTransfer5: debounce(
				function() {
					uni.navigateTo({
						url: '../../my/my-machine/my-machine'
					});
				},
				1000,
				true
			),
			mymachine: function() {
				this.linkToTransfer5();
			},

			linkToTransfer6: debounce(function() {
				uni.navigateTo({
					url: '../../my/coupon/coupon'
				});
			}, 1000, true),
			coupon: function() {
				this.linkToTransfer6()
			},
			linkToTransfer8: debounce(function() {
				if (this.global_.token) {
					uni.navigateTo({
						url: '../set/set'
					});
				} else {
					uni.showToast({
						title: '您还没有登录',
						icon: 'none',
						duration: 2000
					})
				}

			}, 1000, true),
			set: function() {
				this.linkToTransfer8()
			},
			lioj: function() {
				uni.navigateTo({
					url: '../malse/malse'
				})
			}
		}
	};
</script>

<style>
	page {
		background: #ffffff;
	}

	.bg {
		width: 100%;
		height: 612rpx;
		position: relative;
	}

	.my-top {
		width: 100%;
		height: 176rpx;
		padding: 0 48rpx;
		box-sizing: border-box;
		position: absolute;
		top: 148rpx;

	}

	.avator {
		width: 160rpx;
		height: 176rpx;
		z-index: 9;
		float: left;
		border-radius: 50%;

	}

	.img {
		width: 100%;
		height: 100%;
		display: block;
		margin: 0 auto;
		border-radius: 50%;
		overflow: hidden;
	}

	.myinformation {
		float: left;
		margin-left: 20rpx;
	}

	.login-person {
		text-align: left;
		line-height: 120rpx;
		font-size: 40rpx;
		color: #ffffff;
		font-family: 'myface_bold';
	}

	.phone {
		text-align: left;
		line-height: 80rpx;
		font-size: 48rpx;
		color: #ffffff;
		font-family: 'myface_bold';
	}
	.userlogin{
		width:240rpx;
		height:176rpx;
		line-height: 140rpx;
		text-align: center;
		font-size: 34rpx;
		display: block;
		
	}

	.users {
		text-align: left;
		line-height: 60rpx;
		font-size: 24rpx;
		color: #ffffff;
	}

	.my-content {
		width: 660rpx;
		height: 260rpx;
		background: rgba(255, 255, 255, 0.9);
		border-radius: 13rpx;
		position: absolute;
		top: 348rpx;
		left: 50%;
		margin-left: -330rpx;
		padding: 64rpx 0;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		box-shadow: 0 10rpx 50rpx 10rpx rgba(0, 0, 0, 0.2);
	}

	.list-item {
		width: 25%;
		height: auto;
	}

	.list-item-img {
		width: 102rpx;
		height: 102rpx;
		margin:0 auto;
		display: block;
	}

	.list-item-txt {
		font-size: 26rpx;
		color: #333333;
		text-align: center;
		line-height: 60rpx;
	}

	.my-bottom-content {
		width: 660rpx;
		height: auto;
		background: rgba(255, 255, 255, 0.9);
		border-radius: 13rpx;
		margin: 25rpx auto 50rpx;
		padding-bottom: 180rpx;
		padding-top: 20rpx;
		box-sizing: border-box;
		box-shadow: 0 10rpx 50rpx 10rpx rgba(0, 0, 0, 0.2);
	}

	.my-bottom-content-list {
		width: 90%;
		height: 104rpx;
		border-bottom: 1rpx solid #EDEDEF;
		margin: 20rpx auto;

	}

	.my-imgs {
		width: 38rpx;
		height: 38rpx;
		display: block;
		float: left;
		margin-top: 33rpx;
	}

	.my-helping {
		color: #35394F;
		font-size: 28rpx;
		float: left;
		margin-left: 38rpx;
		line-height: 104rpx;
	}

	.my-go-in {
		width: 10rpx;
		height: 16rpx;
		display: block;
		float: right;
		margin-top: 44rpx;
	}
</style>
