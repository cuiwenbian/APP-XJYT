<template>
	<!-- 增加我的地址 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<view class="txt">地址昵称:</view>
			<input class="enter" type="text" :value="remark" @input="getRemark" placeholder="请输入备注名称" />
		</view>
		<view class="line"></view>
		<view class="list">
			<view class="txt">我的地址:</view>
			<input class="enter" type="text" :value="adr" @input="getAddress" placeholder="请输入我的地址" />
		</view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="save" v-if="allowLogin">保存</view>
			<view class="submit-btn-disable" v-else>保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				adr: '',
				remark: '',
				flag: ''
			}
		},
		onLoad(option) {
			this.flag = option.flag
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord()
		},
		computed: {
			allowLogin () {
				return !!(this.adr && this.remark)
			},
		},
		methods: {
			getAddress: function(e) {
				this.adr = e.detail.value
			},
			getRemark: function(e) {
				this.remark = e.detail.value
			},
			save: function() {
				if (this.adr == '') {
					uni.showToast({
						title: '我的地址不能为空',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				if (this.adr.length <= 32) {
					uni.showToast({
						title: '我的地址最少32位',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				if (this.remark == "") {
					uni.showToast({
						title: '备注名称不能为空',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				uni.request({
					url: this.url + 'walletaddresss/',
					method: 'POST',
					data: {
						wallet_key: this.remark,
						wallet_value: this.adr
					},
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					success(res) {
						if (res.statusCode == 202) {
							uni.showToast({
								title: '地址格式不正确(只能是字母或数字)',
								icon: 'none',
								duration: 2000
							})
							return false
						}
						if (res.statusCode == 204) {
							uni.showToast({
								title: '昵称不可重复',
								icon: 'none',
								duration: 2000
							})
							return false
						}
						if (res.statusCode == 205) {
							uni.showToast({
								title: '地址不合法',
								icon: 'none',
								duration: 2000
							})
							return false
						}
						if (res.statusCode == 200) {
							uni.navigateBack({
								delta: 1
							})
							uni.showToast({
								title: '添加成功',
								icon: 'none',
								duration: 1500
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #EDEEEE;
	}

	.line {
		height: 30rpx;
	}

	.list {
		width: 100%;
		height: 120rpx;
		padding-left: 48rpx;
		padding-right: 48rpx;
		box-sizing: border-box;
		background: #fff;
	}

	.txt {
		width: 150rpx;
		float: left;
		line-height: 120rpx;
		font-size: 30rpx;
		color: #5E5E5E;
	}

	.enter {
		width: 500rpx;
		height: 120rpx;
		line-height: 120rpx;
		font-size: 30rpx;
		color: #333;
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
			background-image: linear-gradient(to right, #01c774, #01dda9);
			&.active {
				opacity: 0.4;
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
			background-color: rgba(2,213,151, .4);
		}
	}
</style>
