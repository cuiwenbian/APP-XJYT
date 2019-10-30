<template>
	<!-- 反馈详情 -->
	<view class="container" style="position: relative;">
		<view v-if='hidden'>
			<view class='t'></view>
			<view class="suggest-list" style='line-height: 280rpx;font-size: 30rpx;'>
				请耐心等待平台回复...
			</view>
		</view>
		<view v-else>
			<view class='t'></view>
			<view class="suggest-list" >
				<view class='top' style='height:20rpx;'></view>
				<view style="width:calc(100% - 96rpx);">
					<view class='tit' style='width:150rpx;line-height: 60rpx;color:#DCB16E'>平台回复：</view>
					<view class='answer1'>平台回复平台回复平台回复平台回复平台回复平台回复平
					台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复
					</view>
				</view>
				<view class="submit-time">xxxx-xx-xx xx:xx</view>
			</view>
		</view>
		<view class='t'></view>
		<view class="suggest-list">
			<view class='time'>
				   <view class="submit-time">提交时间：xxxx-xx-xx xx:xx</view>
				   <view class='status'>已回复</view>
			</view>
			<view class="question">
				<view class='tit'>标题：</view>
				<view class='answer'>闪退怎么回事</view>
			</view>
			<view class="question">
				<view class='tit'>描述：</view>
				<view class='answer'>描述描述描述描述描述描述描述描述描述描述描述描述</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				hidden:true
			}
		}
	}
</script>

<style>
	
	page{
	    background: #EDEEEE;	
	}
	.t{
		height:30rpx;
	}
	.suggest-list{
		width:100%;
		height:280rpx;
		background: #fff;
		padding: 0 48rpx;
	}
	.time{
		height:90rpx;
		width:calc(100% - 96rpx);
		border-bottom:1rpx solid #f2f2f2;
	}
	.submit-time{
		line-height: 90rpx;
		float:left;
		font-size: 30rpx;
	}
	.status{
		line-height: 90rpx;
		float: right;
		color:#DCB16E;
		font-size: 30rpx;
	}
	.question{
		margin-top:20rpx;
		width:calc(100% - 96rpx);
		background: #000000;
	}
	.tit{
		width:100rpx;
		height:45rpx;
		float: left;
		line-height: 45rpx;
		font-size: 28rpx;
	}
	.answer{
		width:554rpx;
		float: left;
		line-height: 45rpx;
		font-size: 28rpx;
	}
	.answer1{
		width:500rpx;
		float: right;
		font-size: 28rpx;
		line-height: 60rpx;
		height:180rpx;
		overflow: hidden;
	}
</style>
