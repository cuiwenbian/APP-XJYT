<template>
	<view>	
		<view class="add">
			<image class="img" src="../../static/images/loijd.png" mode=""></image>
			<view class="size">出售成功</view>
			<view class="loder">手机号:{{number}}</view>
			<view  class="loderw">数量:{{number2}} T</view>
		</view>
		<view class="btn" @click="btn">完成</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number:'',
				number2:''
			}
		},
		onLoad(option) {
			console.log(option)
			this.number = option.ler
			this.number2 = option.cserf
		},
		methods:{
			btn:function () {
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
.add{
	padding: 160rpx;
} 
.img {
	width: 274rpx;
	height: 318rpx;
	display: block;
	margin:0 auto;
}
.size {
	font-size:38rpx;
	line-height: 60rpx;
	text-align: center;
	font-family:PingFang SC;
	font-weight:600;
	color:rgba(17,17,17,1);
}
.loder {
	font-size: 24rpx;
	color: #666666;
	text-align: center;
	line-height: 50rpx;
}
.loderw {
	font-size: 24rpx;
	color: #666666;
	text-align: center;
	line-height: 50rpx;
}
.btn{
	width: 444rpx;
	height: 100rpx;
	background-color: #08D896;
	background:linear-gradient(rgba(255,255,255,0.25));
	box-shadow:0px 7px 14px 0px rgba(8, 150, 216, 0.35);
	border-radius:70px;
	color: #FFFFFF;
	font-size: 32rpx;
	line-height: 100rpx;
	margin:0 auto;
	text-align: center;
}
</style>
