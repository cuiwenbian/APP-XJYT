<template>
	<!-- 身份认证 -->
	<view class="container" style="position: relative;">
		<view class="line">基本资料</view>
		<view class="enter enters">
			<view>
				<text class="enter-2">姓名:</text>
				<input class="weui-input1 input1" placeholder="请输入您的姓名" @input="getName" :value="name" />
			</view>
		</view>
		<view class="enter">
			<view>
				<text class="enter-2 ">身份证号:</text>
				<input class="weui-input1" placeholder="请输入您的身份证号码" type="text" @input="getIdcard" :value="idcard" />
			</view>
		</view>
		<view class="line">上传身份证</view>
		<view class="uploadfile">
			<view class="list" v-show="p_flag" @click="chooseImageTap" :data-flag="positive">
				<text class="tips">
					上传身份证
					<text style="color:#333333">人像</text>
					面
				</text>
				<image class="up-card" src="../static/images/shen1.png" mode=""></image>
			</view>
			<view class="list" v-show="!p_flag" @click="chooseImageTap" :data-flag="positive">
				<text class="tips">
					上传身份证
					<text style="color:#333333">人像</text>
					面
				</text>
				<image class="prev" :src="p_url" :data-src="p_url" @click="chooseImageTap" :data-flag="positive" style="width:250rpx;height:150rpx;"></image>
				<image class="watermark" src="../static/images/water.png" mode=""></image>
			</view>
			<view class="list" v-show="r_flag" @click="chooseImageTap" :data-flag="reverse">
				<text class="tips">
					上传身份证
					<text style="color:#333333">国徽</text>
					面
				</text>
				<image class="up-card" src="../static/images/shen2.png" mode=""></image>
			</view>
			<view class="list" v-show="!r_flag" @click="chooseImageTap" :data-flag="reverse">
				<text class="tips">
					上传身份证
					<text style="color:#333333">国徽</text>
					面
				</text>
				<image class="prev" :src="r_url" :data-src="r_url" @click="chooseImageTap" :data-flag="reverse" style="width:250rpx;height:150rpx;"></image>
				<image class="watermark" src="../static/images/water.png" mode=""></image>
			</view>
		</view>
		<view class="line2">
			<view class="reque">拍摄图片要求</view>
		</view>
		<view class="idcard">
			<view class="id1">
				<image class="c" src="../static/images/card.png"></image>
				<view class="biaozhun">
					<image class="y" src="../static/images/yes.png"></image>
					<view class="pai">标准拍摄</view>
				</view>
			</view>
			<view class="id1">
				<image class="c" src="../static/images/card2.png"></image>
				<view class="biaozhun">
					<image class="y" src="../static/images/no.png"></image>
					<view class="pai">边框缺失</view>
				</view>
			</view>
			<view class="id1">
				<image class="c" src="../static/images/card3.png"></image>
				<view class="biaozhun">
					<image class="y" src="../static/images/no.png"></image>
					<view class="pai">照片模糊</view>
				</view>
			</view>
			<view class="id1">
				<image class="c" src="../static/images/card4.png"></image>
				<view class="biaozhun">
					<image class="y" src="../static/images/no.png"></image>
					<view class="pai">闪光强烈</view>
				</view>
			</view>
		</view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="submitt" v-if="idcard && name && imgs.length == 2">提交审核</view>
			<view class="submit-btn-disable" v-if="!idcard || !name || imgs.length !== 2">提交审核</view>
		</view>
		<view class="shade" v-show="shade" @touchmove.stop.prevent="moveHandle">
			<view class="pop">
				<view class="pop-title">提交成功，等待审核</view>
				<view class="pop-btn" @click="sure">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	var check = require('../../common/utils.js');
	export default {
		data() {
			return {
				name: '',
				idcard: '',
				imgs: [], //本地图片地址数组
				picPaths: [], //网络路径
				positive: 'positive',
				reverse: 'reverse',
				pos: '',
				rev: '',
				type: '',
				p_flag: true,
				r_flag: true,
				p_url: '',
				r_url: '',
				shade: true
			};
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord();
		},
		methods: {
			moveHandle: function(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			getName: function(e) {
				this.name = e.detail.value;
			},
			getIdcard: function(e) {
				this.idcard = e.detail.value;
			},
			//添加上传图片
			chooseImageTap: function(e) {
				var that = this;
				var flag = e.currentTarget.dataset.flag;
				uni.showActionSheet({
					itemList: ['从相册中选择', '拍照'],
					itemColor: '#00000',
					success: function(res) {
						if (!res.cancel) {
							if (res.tapIndex == 0) {
								if (flag == 'positive') {
									that.chooseWxImage1('album');
								}
								if (flag == 'reverse') {
									that.chooseWxImage2('album');
								}
							} else if (res.tapIndex == 1) {
								if (flag == 'positive') {
									that.chooseWxImage1('camera');
								}
								if (flag == 'reverse') {
									that.chooseWxImage2('camera');
								}
							}
						}
					}
				});
			},
			// 图片本地路径
			chooseWxImage1: function(type) {
				var that = this;
				var imgsPaths = that.imgs;
				var obj = {};
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: [type],
					success: function(res) {
						for (var i = imgsPaths.length - 1; i >= 0; i--) {
							for (var j in imgsPaths[i]) {
								if (j == 'positive') {
									imgsPaths.splice(i, 1);
								}
							}
						}
						obj.positive = res.tempFilePaths[0];
						that.imgs.push(obj);
						that.p_url = res.tempFilePaths[0];
						that.p_flag = false;
						that.imgs = that.imgs;
					}
				});
			},
			chooseWxImage2: function(type) {
				var that = this;
				var imgsPaths = that.imgs;
				var obj = {};
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: [type],
					success: function(res) {
						for (var i = imgsPaths.length - 1; i >= 0; i--) {
							for (var j in imgsPaths[i]) {
								if (j == 'reverse') {
									imgsPaths.splice(i, 1);
								}
							}
						}
						obj.reverse = res.tempFilePaths[0];
						that.imgs.push(obj);
						(that.r_url = res.tempFilePaths[0]), (that.r_flag = false), (that.imgs = that.imgs);
						that.rev = imgsPaths[1].reverse;
						that.pos = imgsPaths[0].positive;
					}
				});
			},
			//上传服务器
			upImgs: function(imgpaths, index) {
				var that = this;
				let token = this.global_.token;
				for (var key in imgpaths[index]) {
					uni.uploadFile({
						url: this.url + 'realnames/', //上传接口
						//url:'http://192.168.1.218:8005/api/v1.1.0/realname/',
						filePath: imgpaths[index][key],
						name: key,
						header: {
							Authorization: 'JWT' + ' ' + token
						},
						formData: null,
						success: function(res) {
							console.log(res)
							if (res.statusCode == 400) {
								uni.showToast({
									title: '数据异常',
									icon: 'none',
									duration: 2000
								});
								return false;
							}
							if (res.statusCode == 406) {
								uni.showToast({
									title: '图片太大，请重新上传',
									icon: 'none',
									duration: 2000
								});
								return false;
							}
							index++;
							if (index == imgpaths.length) {
								uni.request({
									url: that.url + 'realnames/',
									// url:th'realname/',
									method: 'POST',
									data: {
										name: that.name,
										idcard: that.idcard
									},
									header: {
										Authorization: 'JWT' + ' ' + token
									},
									success: function(res) {
										console.log(res)
										if (res.statusCode == 402) {
											uni.showToast({
												title: '身份证号已存在，请重新认证',
												icon: 'none',
												duration: 2000
											});
											return false;
										}
										if (res.statusCode == 401) {
											uni.showToast({
												title: '身份证号错误',
												icon: 'none'
											});
											return false;
										}
										if (res.statusCode == 410) {
											uni.showToast({
												title: '图片格式错误',
												icon: 'none'
											});
											return false;
										}
										if (res.statusCode == 200) {
											that.shade = true;
										}
									}
								});
							} else {
								that.upImgs(imgpaths, index);
							}
						},
						fail: function(res) {}
					});
				}
			},
			submitt: function() {
				var that = this;
				if (!that.name) {
					uni.showToast({
						title: '用户名不能为空',
						icon: 'none'
					});
					return false;
				}
				if (!that.idcard) {
					uni.showToast({
						title: '身份证号不能为空',
						icon: 'none'
					});
					return false;
				}
				var flag = check.checkIdcard(that.idcard);
				if (!flag) {
					uni.showToast({
						title: '请输入正确的身份证号',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if (that.imgs.length !== 2) {
					uni.showToast({
						title: '身份证照不全',
						icon: 'none'
					});
					return false;
				}
				that.upImgs(that.imgs, 0);
			},
			sure: function() {
				uni.redirectTo({
					url: '../../pages/set/set'
				})
			}
		}
	};
</script>

<style lang="scss">
	page {
		background: #ededed;
	}

	.line {
		line-height: 120rpx;
		font-size: 32rpx;
		color: #333333;
		padding-left: 24rpx;
		box-sizing: border-box;
	}

	.enter {
		width: 710rpx;
		margin: 0 auto;
		padding-left: 30rpx;
		box-sizing: border-box;
		background: #fff;
		overflow: hidden;
		border-radius: 5rpx;
	}

	.enters {
		border-bottom: 1rpx solid #f2f2f2;
	}

	.enter-2 {
		display: block;
		float: left;
		width: 150rpx;
		text-align: justify;
		text-justify: distribute-all-lines;
		text-align-last: justify;
		font-size: 32rpx;
		margin-top: 30rpx;
		color: #434343;
		margin-bottom: 30rpx;
	}

	.weui-input1 {
		ime-mode: disabled;
		font-size: 30rpx;
		display: block;
		float: left;
		margin-top: 30rpx;
		margin-left: 30rpx;
	}

	.uploadfile {
		width: 100%;
		height: 350rpx;
	}

	.list {
		width: 50%;
		height: 100%;
		line-height: 100rpx;
		text-align: center;
		float: left;
		position: relative;
	}

	.watermark {
		width: 250rpx;
		height: 150rpx;
		background: rgba(0, 0, 0, 0.2);
		display: block;
		position: absolute;
		top: 100rpx;
		left: 65rpx;
		z-index: 99;
	}

	.tips {
		display: block;
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
		text-align: center;
		color: #999999;
	}

	.up-card {
		display: block;
		width: 250rpx;
		height: 150rpx;
		margin: 20rpx auto;
	}

	.shen1-1 {
		width: 50rpx;
		height: 50rpx;
		background: #fff;
		border-radius: 50rpx;
		position: absolute;
		top: 170rpx;
		left: 158rpx;
		border: none;
		text-align: center;
		line-height: 50rpx;
	}

	.click {
		display: block;
		width: 150rpx;
		height: 30rpx;
		font-size: 28rpx;
		text-align: center;
		position: absolute;
		bottom: 120rpx;
		left: 115rpx;
	}

	.line2 {
		width: 100%;
		height: 2rpx;
		position: relative;
		margin-top: 50rpx;
		margin-bottom: 30rpx;
	}

	.reque {
		width: 200rpx;
		height: 40rpx;
		background: #f2f2f2;
		font-size: 28rpx;
		text-align: center;
		position: absolute;
		top: -20rpx;
		left: 275rpx;
	}

	.idcard {
		width: 650rpx;
		height: 150rpx;
		margin: 50rpx auto 0;
		display: flex;
		justify-content: space-between;
	}

	.id1 {
		width: 130rpx;
		height: 150rpx;
	}

	.c {
		width: 100%;
		height: 80rpx;
	}

	.biaozhun {
		width: 100%;
		height: 70rpx;
	}

	.y {
		float: left;
		width: 30rpx;
		height: 30rpx;
		margin-top: 20rpx;
	}

	.pai {
		float: left;
		font-size: 24rpx;
		margin-left: 10rpx;
		line-height: 70rpx;
	}

	.out2 {
		margin: 100rpx 0;
		overflow: hidden;
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
			background-color: rgb(2, 213, 151);
			transition: all .2s;

			&:active {
				background-color: rgba(2, 213, 151, .85);
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
			background-color: rgba(2, 213, 151, .4);
		}
	}

	.shade {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	.pop {
		width: 500rpx;
		height: 250rpx;
		margin: 450rpx auto 0;
		background: #fff;
		border-radius: 20rpx;
	}

	.pop-title {
		text-align: center;
		font-size: 32rpx;
		color: #121212;
		line-height: 150rpx;
	}

	.pop-btn {
		width: 158rpx;
		height: 66rpx;
		margin: 0 auto;
		border-radius: 50rpx;
		line-height: 66rpx;
		font-size: 26rpx;
		color: #fff;
		background-image: linear-gradient(to right, #01c774, #01dda9);
		text-align: center;
	}
</style>
