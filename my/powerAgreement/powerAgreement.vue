<template>
	<!-- 用户协议 -->
	<view class="container">
		<view class="dde">
			<rich-text :nodes="agreement"></rich-text>
		</view>
		<view class="fix">
			<button class="down" @click="aaa">下载</button>
			<button class="down" v-if="flag" @click="sss">同意</button>
			<button class="dowwn" v-if="fllaag">已同意</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				agreement: '',
				chnerot: '',
				flag: false,
				fllaag: false
			};
		},
		onShow() {
			var that = this;
			uni.request({
				url: this.url + 'usercloudagree/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				success(res) {
					console.log(res)
					that.chnerot = res.data.data.user_agreement;
					that.agreement = res.data.data.agreement;
					if (that.chnerot == 0) {
						that.flag = true;
					}
				}
			});
		},
		methods: {
			sss: function() {
				var that = this;
				uni.request({
					url: this.url + 'usercloudagree/',
					method: 'POST',
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						if (res.statusCode == 200) {
							that.fllaag = true;
							that.flag = false;
							uni.showToast({
								title: '已阅读并同意协议',
								icon:'none',
								duration:3000
							});
						}
					}
				});
			},
			aaa: function() {
				uni.showLoading({
					title: '资源加载中',
					duration: 2000
				});
				uni.downloadFile({
					url: this.urla + 'media/用户存力服务协议.pdf',
					// #ifdef MP-WEIXIN
					filePath: wx.env.USER_DATA_PATH + '/用户存力服务协议.pdf',
					// #endif
					success: res => {
						console.log(res)
						/* uni.saveFile({
							success: res => {
								tempFilePath: res.tempFilePath,
								//打开文档
								uni.openDocument({
									success: function(res) {
										filePath: res.filePath
									}
								});
							},
						}) */
						if (res.statusCode === 200) {
							uni.hideLoading()
							uni.showToast({
								title: '下载成功',
								duration: 3000
							});
						}else{
							uni.showToast({
								title: '下载失败',
								icon:'none',
								duration: 3000
							});
						}
					},
					fail: function() {
						uni.showToast({
							title: '下载失败'
						});
					},
					complete: function() {

					}
				});
			}
		}
	};
</script>

<style>
	.dde {
		height: 500rpx;
	}

	.fix {
		width: 100%;
		height: 98rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: space-between;
	}

	.down {
		width: 130rpx;
		height: 60rpx;
		font-size: 30rpx;
		line-height: 60rpx;
		margin-top: 19rpx;
		color: #fff;
		border-radius: 50rpx;
		background-image: linear-gradient(to right, #01c774, #01dda9);
	}

	.dowwn {
		width: 160rpx;
		height: 60rpx;
		font-size: 30rpx;
		line-height: 60rpx;
		margin-top: 19rpx;
		color: #fff;
		border-radius: 50rpx;
		background-image: linear-gradient(to right, #01c774, #01dda9);
	}
	.agreemen {
		font-size: 20rpx;
	}
</style>
