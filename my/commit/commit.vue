<template>
	<view class="container">
		<view class="height"></view>
		<view class="add">
			<image class="img" src="../../static/images/loijd.png" mode=""></image>
			<view class="size">转账已提交，请耐心等待审核</view>
			<view class="loder">
				<view style='font-weight: 600;'>Fil：</view> 
				<view>{{ filNum }}</view>
				</view>
			<view class="loderw">
				<view style='font-weight: 600;'>转账地址：</view>
				<view>{{address}}</view>
			</view>
		</view>
		<view class="btn" @click="save">完成</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				filNum: '',
				address: '',
				n: true
			};
		},
		onLoad(option) {
			this.filNum = option.fil_num;
			this.address = option.wallet_value;
		},
		methods: {
			save() {
				uni.navigateBack({
					delta: 2
				});
			},
			next: function() {
				var that = this;
				that.n = false;
			},
			back: function() {
				var that = this;
				that.n = true;
			}
		},
		onBackPress(options) {
			if (options.from === 'backbutton') {
				uni.navigateBack({
					delta: 2
				});
			}
		}
	};
</script>

<style>
	.height {
		height: var(--status-bar-height);
		background-color: #FFFFFF;
	}

	.add {
		padding: 160rpx 0;
	}

	.img {
		width: 274rpx;
		height: 318rpx;
		display: block;
		margin: 0 auto;
	}

	.size {
		font-size: 34rpx;
		line-height: 60rpx;
		text-align: center;
		font-family: PingFang SC;
		font-weight: 600;
		color: rgba(17, 17, 17, 1);
	}

	.loder {
		width:59%;
		height:auto;
		margin:0 auto;
		font-size: 24rpx;
		color: #666666;
		text-align: left;
		line-height: 50rpx;
	}

	.loderw {
		width:59%;
		height:auto;
		/* display: inline-block; */
		margin:0 auto;
		font-size: 24rpx;
		color: #666666;
		text-align: left;
		line-height: 50rpx;
		word-wrap: break-word;
	}

	.btn {
		width: 444rpx;
		height: 100rpx;
		background-color: #08D896;
		background: linear-gradient(rgba(255, 255, 255, 0.25));
		box-shadow: 0px 7px 14px 0px rgba(8, 150, 216, 0.35);
		border-radius: 70px;
		color: #FFFFFF;
		font-size: 32rpx;
		line-height: 100rpx;
		margin: 0 auto;
		text-align: center;
	}
</style>
