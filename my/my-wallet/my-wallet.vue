<template>
	<!-- 我的钱包 -->
	<view class="container">
		<view class="bg">
			<view class="line"></view>
			<view class="txt">Filecoin</view>
			<view class="mess">
				<view class="num"><text class="number">&nbsp;322&nbsp;</text>个</view>
				<view class="trade" @click="transfer">转账</view>
			</view>
		</view>
		<view class="income">
			收支记录
		</view>
	</view>
</template>

<script>
	export default{
		methods: {
		    transfer:function(){
				uni.navigateTo({
					url:'../transfer/transfer'
				})
			}
			
		}
	}
</script>

<style>
	page{
		background:#EDEEEE;
	}
	.bg{
		width:100%;
		height:300rpx;
		background-image: url('../../static/images/wallet-bg.png');
	}
	.line{
		height:100rpx;
	}
	.txt{
		line-height: 50rpx;
		margin-left:56rpx;
	}
	.mess{
		width:654rpx;
		height:70rpx;
		margin:0 auto;
	}
	.num{
		float: left;
		color:#121212;
		font-size: 30rpx;
		line-height:70rpx;
	}
	.number{
		color:#F0AD4E;
		font-size: 42rpx;
		
	}
	.trade{
		float: right;
		width:130rpx;
		height:60rpx;
		border-radius: 10rpx;
		background: #121212;
		color:#fff;
		text-align: center;
		line-height: 60rpx;
		font-size: 30rpx;
	}
	.income{
		width:100%;
		height:80rpx;
		padding-left: 48rpx;
		box-sizing: border-box;
		line-height: 80rpx;
		background: #FFFFFF;
		color:#121212;
		font-size: 30rpx;
	}
</style>
