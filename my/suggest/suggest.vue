<template>
	<!-- 建议反馈 -->
	<view class="container">
		<view v-if='flag' >
			建议
		</view>
		<view v-else>
			<view class="box"></view>
			<view>
				<image class="none" src="../../static/images/machine.png" mode=""></image>
				<view class="tips">
					您还没有提交反馈！
				</view>
			</view>
			<view class="newadd" @click="addMessage">
				提交建议
			</view>
			<view  :class="hidden?'cover1':'cover'">
				<view class="frame">
					<input class="title" type="text" value="" placeholder="标题"/>
					<textarea class="area" value="" placeholder="问题描述"/>
					<view class="submit">提交</view>
					<view class="close" @click="close">X</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
		  return{
			  flag:false,
			  hidden:true
		  }	
		},
		methods:{
			addMessage:function(){
				this.hidden=false
			},
			close:function(){
				this.hidden=true
			}
		}
	}
</script>

<style>
	.box{
		height:200rpx;
	}
	.none{
		display: block;
		width:150rpx;
		height:150rpx;
		margin:0 auto;
	}
	.tips{
		margin-top:50rpx;
		text-align: center;
		color:#797979;
		font-size: 28rpx;
	}
	.newadd{
		width:200rpx;
		height:70rpx;
		background: #03143B;
		border-radius: 50rpx;
		color:#fff;
		text-align: center;
		line-height: 70rpx;
		margin:80rpx auto;
		font-size: 30rpx;
	}
	.cover{
		width:100%;
		height:100%;
		background: rgba(0,0,0,0.3);
		z-index: 9;
		position: fixed;
		left:0;
		top:0;
	}
	.cover1{
		display: none;
	}
	.frame{
		width:624rpx;
		height:600rpx;
		position: absolute;
		top:300rpx;
		left:63rpx;
		border-radius: 8rpx;
		background: #fff;
		padding:100rpx 50rpx;
		box-sizing: border-box;
	}
	.title{
		width:524rpx;
		height:80rpx;
		border:1rpx solid #f2f2f2;
		line-height: 80rpx;
		font-size: 30rpx;
	}
	.area{
		width:524rpx;
		height:240rpx;
		border:1rpx solid #f2f2f2;
		line-height: 80rpx;
		font-size: 30rpx;
		margin-top:30rpx;
	}
	.submit{
		width:480rpx;
		height:80rpx;
		background: #000000;
		margin:30rpx auto;
		text-align: center;
		line-height: 80rpx;
		color:#fff;
		border-radius: 8rpx;
		font-size: 30rpx;
	}
	.close{
		width:35rpx;
		height:30rpx;
		position: absolute;
		top:10rpx;
		right:20rpx;
		color:#797979;
	}
</style>
