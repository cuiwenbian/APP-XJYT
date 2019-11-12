<template>
	<!-- 启动页 -->
	<view class="container">
		
		<image class='logo animated fadeIn delay-0.5s' src="../../static/images/FIL.png" mode=""></image>
		<image class='fil animated fadeIn delay-0.5s' src="../../static/images/filecoin.png" mode=""></image>
		<image class='tit animated fadeIn delay-0.5s' src="../../static/images/start.png" mode=""></image>
		
	</view>
</template>

<script>
	export default{
		data(){
			
		},
		onLoad() {
			var timer=3;
			var flag;
			function daoji(){
				timer=timer-1;
				if(timer==0){
					uni.redirectTo({
						url:'../login/login'
					})
					clearInterval(flag)
				}
			}
			flag=setInterval(daoji,1000);
		}
		
	}
</script>

<style>
	@import url('../../components/animation.css');
	page{
		background: #121212;
	}
	
	.logo{
		display: block;
		width:185rpx;
		height:185rpx;
		margin: 150rpx auto 0;
		
	}
	.fil{
		width:250rpx;
		height:100rpx;
		display: block;	
		margin:30rpx auto 60rpx;
		
	}
	.tit{
		width:400rpx;
		height:100rpx;
		display: block;	
		margin:0 auto;
	}
</style>
