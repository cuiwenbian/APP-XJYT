<template>
	<view class="con">
		
		<rich-text :nodes="aa"></rich-text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			cont: '',
			add: '',
			volume: '',
			aa: ''
		};
	},
	onLoad(option) {
		this.title = option.title;
		this.cont = option.cont;
		console.log(this.cont)
		// #ifdef MP-WEIXIN
		this.cont = decodeURIComponent(option.cont);
		// #endif
		this.aa = this.cont.replace(/_/g, '=').replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
		this.add = option.add;
		this.volume = option.volume;
	}
};
</script>

<style>
page {
	background-color: #ededed;
}
uni-rich-text img {
	max-width: 100% !important;
}
.con {
	width: 100%;
	padding: 36rpx;
	box-sizing: border-box;
	overflow: hidden;
}
.titel {
	line-height: 60rpx;
	font-weight: 400;
	color: rgba(18, 18, 18, 1);
}
.time {
	width: 100%;
	line-height: 60rpx;
	color: #9b9b9b;
	font-size: 22rpx;
}
.see {
	margin-left: 40rpx;
}
</style>
