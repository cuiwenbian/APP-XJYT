<template>
	<!-- 启动页 -->
	<view class="container">
		<image class='logo animated fadeIn delay-0.5s' src="../../static/images/FIL.png" mode=""></image>
		<image class='fil animated fadeIn delay-0.5s' src="../../static/images/filecoin.png" mode=""></image>
		<image class='tit animated fadeIn delay-0.5s' src="../../static/images/start1.png" mode=""></image>
		<image class='tit1 animated fadeIn delay-0.5s' src="../../static/images/start2.png" mode=""></image>
		<image class='tit2 animated fadeIn delay-0.5s' src="../../static/images/start3.png" mode=""></image>
	</view>
</template>

<script>
	export default{
		onLoad() {
			var p=uni.getStorageSync('phone');
			var t=uni.getStorageSync('token');
			this.global_.phone=p;
			this.global_.token=t;
			console.log(p)
			console.log(t)
			if(p!='' && t!=''){
				uni.switchTab({
					url:'../index/index'
				})
			}
			else{
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
		width:365rpx;
		height:45rpx;
		display: block;	
		position:absolute;
		bottom: 199rpx;
		left:192rpx;
	}
	.tit1{
		width:400rpx;
		height:22rpx;
		display: block;	
		position:absolute;
		bottom: 169rpx;
		left:176rpx;
	}
	.tit2{
		width:426rpx;
		height:19rpx;
		display: block;	
		position:absolute;
		bottom: 49rpx;
		left:161rpx;
	}
	
</style>
