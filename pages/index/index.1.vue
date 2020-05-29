<template>
	<view>
		<Home v-if="active==0"></Home>
		<Pool v-if="active==1"></Pool>
		<Order v-if="active==2"></Order>
		<Mine v-if="active==3"></Mine>
		<!-- #ifdef APP-PLUS -->
		<view class="shade" v-if="According" @touchmove.stop.prevent="moveHandle">
			<image class="pop" src="../../static/images/update.png" mode="">
				<view class="desc1">
					<view class="one">{{ remark }}</view>
				</view>
				<view class="pops">
					<view class="pop-btn quxiao" @click="noupdate">暂不更新</view>
					<view class="pop-btn yess" @click="update">立即升级</view>
				</view>
				<view class="tishi">您的当前版本过低影响使用，请立即更新</view>
			</image>
		</view>
		<!-- #endif -->
		<view class="cu-bar tabbar foot bar">
			<view class="action" :class="active==0?'text-green':'text-gray'" @click="active=0">
				<image class="tab_icon" :src="active==0?tabList[0].imgOn:tabList[0].imgOff"></image>
				首页
			</view>
			<view class="action" :class="active==1?'text-green':'text-gray'" @click="active=1">
				<image class="tab_icon" :src="active==1?tabList[1].imgOn:tabList[1].imgOff"></image>
				存储中心
			</view>
			<view class="action" :class="active==2?'text-green':'text-gray'" @click="active=2">
				<image class="tab_icon" :src="active==2?tabList[2].imgOn:tabList[2].imgOff"></image>
				订单
			</view>
			<view class="action" :class="active==3?'text-green':'text-gray'" @click="active=3">
				<image class="tab_icon" :src="active==3?tabList[3].imgOn:tabList[3].imgOff"></image>
				我的
			</view>
		</view>
		
	</view>
</template>

<script>
	import Home from './home1.vue'
	import Pool from './../pool/pool.vue'
	import Order from './../order/order.vue'
	import Mine from './../my/my.vue'
	export default {
		components: {
			Home,
			Pool,
			Order,
			Mine
		},
		data() {
			return {
				active: 0,
				tabList: [{
						id: 0,
						name: "首页",
						imgOff: "../../static/wyg-bottom-tab/img/icon_01.png",
						imgOn: "../../static/wyg-bottom-tab/img/icon_01_f.png",
					},
					{
						id: 1,
						name: "存储中心",
						imgOff: "../../static/wyg-bottom-tab/img/icon_02.png",
						imgOn: "../../static/wyg-bottom-tab/img/icon_02_f.png",
					},
					{
						id: 2,
						name: "订单",
						imgOff: "../../static/wyg-bottom-tab/img/icon_03.png",
						imgOn: "../../static/wyg-bottom-tab/img/icon_03_f.png",
					},
					{
						id: 3,
						name: "我的",
						imgOff: "../../static/wyg-bottom-tab/img/icon_04.png",
						imgOn: "../../static/wyg-bottom-tab/img/icon_04_f.png",
					}
				],
				According: false,
				diro: true,
				remark:''
			}

		},
		onLoad() {
			var that = this;
			uni.getSystemInfo({
				success: res => {
					//检测当前平台，如果是安卓则启动安卓更新
				}
			});
			//更新版本
			uni.request({
				url: that.url + 'versionview/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success: res => {
					that.andri = uni.getStorageSync('version'); //当前应用版本
					console.log(res)
					that.daern = res.data[0].must;
					if (that.daern == 1) {
						that.diro = false;
					}
					that.version = res.data[0].version;
					if (that.andri != that.version) {
						that.According = true;
						that.remark = res.data[0].remark;
						uni.hideTabBar()
					}
				}
			});
		},
		methods: {
			moveHandle: function(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			quit() {
				if (this.daern == 1) {
					plus.runtime.quit(); //退出应用
				} else {
					this.According = false;
				}
			},
			update() {
				var _self = this;
				_self.andri = uni.getStorageSync('version');
				uni.request({
					//请求地址，设置为自己的服务器链接
					url: this.url + 'version/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					success: resMz => {
						console.log(resMz)
						var server_version = resMz.data[0].version;
						console.log(server_version)
						_self.link = resMz.data[1].link;
						console.log(_self.link)
						_self.version = uni.getStorageSync('version');
						_self.checkVersionToLoadUpdate(server_version, _self.version);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			checkVersionToLoadUpdate: function(server_version, curr_version) {
				console.log(server_version)
				console.log(curr_version)
				var that = this;
				if (server_version != curr_version) {
					//TODO 此处判断是否为 WIFI连接状态
					if (plus.networkinfo.getCurrentType() != 3) {
						uni.showToast({
							title: '有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止更新，将在您连接WIFI之后重新检测更新',
							mask: true,
							duration: 5000,
							icon: 'none'
						});
						return;
					} else {
						uni.showModal({
							title: '版本更新',
							content: '有新的版本发布，检测到您当前为Wifi连接，是否立即进行新版本下载？',
							confirmText: '立即更新',
							cancelText: '稍后进行',
							success: function(res) {
								console.log(res)
								if (res.confirm) {
									uni.showToast({
										icon: 'none',
										mask: true,
										title: '有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序',
										duration: 5000
									});
									//设置 最新版本apk的下载链接
									var downloadApkUrl = that.link;
									console.log(downloadApkUrl);
									var dtask = plus.downloader.createDownload(downloadApkUrl, {}, function(d, status) {
										// 下载完成
										if (status == 200) {
											plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, {}, function(error) {
												uni.showToast({
													title: '安装失败',
													duration: 1500
												});
											});
										} else {
											uni.showToast({
												title: '更新失败',
												duration: 1500
											});
										}
									});
									dtask.start();
								} else if (res.cancel) {}
							}
						});
					}
				}
			},
			noupdate() {
				this.According = false;
			},
		}
	}
</script>

<style scoped>
	.bar {
		background: url(../../static/wyg-bottom-tab/img/tabbar_bg.png);
		background-size: 100%;
	}

	.tab_icon {
		display: block;
		width: 45upx;
		height: 45upx;
		margin: 0 auto 10upx;
	}
	/* 更新弹框 */
	.shade {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	
	.pop {
		width: 632rpx;
		height: 769rpx;
		margin: 325rpx auto;
		display: block;
		position: relative;
	}
	
	.desc1 {
		width: 570rpx;
		height: 150rpx;
		position: absolute;
		top: 704rpx;
		left: 100rpx;
		font-size: 24rpx;
	}
	
	.one {
		width: 100%;
		height: 50rpx;
		overflow: hidden;
		line-height: 50rpx;
	}
	
	.pops {
		width: 570rpx;
		height: 72rpx;
		position: absolute;
		top: 904rpx;
		left: 100rpx;
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
	
	.tishi {
		width: 100%;
		height: 30rpx;
		line-height: 30rpx;
		font-size: 24rpx;
		text-align: center;
		position: absolute;
		top: 1020rpx;
		color: red;
	
	}
	
</style>
