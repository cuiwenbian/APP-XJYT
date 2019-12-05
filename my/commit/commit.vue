<template>
	<view class="container">
		<view class="height"></view>
			<image class="com" src="../../static/images/commit.png" mode=""></image>
			<view class="wait">转账已提交，请耐心等待审核</view>
			<view class="num">FIL: {{filNum}}</view>
			<view class="add">
				<view class='tran_add'>转账地址：</view>
				<view class='tran_detail'>{{address}}</view>
			</view>
		<view class="next"  @click="save">完成</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				filNum:'',
				address:""
			}
		},
		onLoad(option) {
			this.filNum=option.fil_num;
			this.address=option.wallet_value;
		},
		methods:{
			save(){
				uni.navigateBack({
					delta:2
				})
			}
		},
		onBackPress(options) {
			if (options.from === 'backbutton') { 
				uni.navigateBack({
					delta:2
				})
			}
		}
	}
</script>

<style>
	.height {
		height: var(--status-bar-height);
		background-color: #121212;
	}
	.com{
		width:100rpx;
		height:100rpx;
		display: block;
		margin:100rpx auto 20rpx;
	}
	.wait{
		text-align: center;
		line-height: 100rpx;
		font-weight: bold;
	}
	.num{
		text-align: center;
		line-height: 50rpx;
		color:#333;
		font-size: 30rpx;
	}
	.add{
		width:100%;
		height:auto;
		margin-top: 50rpx;
		padding:0 48rpx;
		box-sizing: border-box;
		overflow:hidden;
	}
	.tran_add{
		float: left;
		width:25%;
		line-height: 80rpx;
		font-size: 28rpx;
	}
	.tran_detail{
		float: right;
		width:75%;
		line-height: 80rpx;
		font-size: 28rpx;
		word-break:break-all;
		word-wrap:break-word;
	}
	.next{
		margin: 100rpx auto 0;
		width:690rpx;
		height:88rpx;
		background: #0A1117;
		border-radius: 80rpx;
		text-align: center;
		line-height: 88rpx;
		color: #fff;
		font-size: 30rpx;
	}
</style>
