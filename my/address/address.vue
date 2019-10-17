<template>
	<!-- 提币地址 -->
	<view class="container">
		<view v-if='flag' style='position: relative;'>
			<view class="list">
				<view class="left">
					<view class="nickname">地址昵称</view>
					<view class="adr">
						地址：xxxxxxxxxxxxxxxxx
					</view>
				</view>
				<view class="right" @click="edit">
					<image class="edit"  src="../../static/images/edit.png" mode=""></image>
				</view>
			</view>
			<view class="delete">
				删除
			</view>
		</view>
		<view v-else>
			<view class="box"></view>
			<view>
				<image class="none" src="../../static/images/address.png" mode=""></image>
				<view class="tips">
					您还没有提币地址哦！
				</view>
			</view>
			<view class="newadd" @click="add">
				新建地址
			</view>
		</view>
		
	</view>
</template>
<script src="../../static/js/jquery.min.js"></script>
<script src="https://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script>
	export default{
		data(){
		  return{
			  flag:false
		  }	
		},
		methods:{
			add:function(){
				uni.navigateTo({
					url: '../add-address/add-address',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			edit:function(){
				uni.navigateTo({
					url: '../edit-address/edit-address',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			 function(){
				 $('.list').on("swipeleft", function () {//左滑显示隐藏按键
				        console.log("lll")
				        $(this).animate({left: '-3rem'}, 200, 'linear');
				        $(this).siblings('.delete').animate({width: '3rem'}, 200, 'linear');
				        // $(this).parent('li').siblings('li').find('.apply').animate({left: '0'}, 200).siblings('.addit').animate({width: '0'}, 200);
				    });
				    $('.list').on("swiperight", function () {//右滑恢复
				        $(this).animate({left: '0'}, 200, 'linear');
				        $(this).siblings('.delete').animate({width: '0rem'}, 200, 'linear');
				    });
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
	.list{
		width:calc(100% - 48rpx);
		height:140rpx;
		border-bottom: 1rpx solid #f2f2f2;
		margin-left:48rpx;
	}
	.left{
		float: left;
		width:88%
	}
	.right{
		float:left;
		width:12%;
	}
	.nickname{
		line-height: 80rpx;
		font-size:30rpx;
	}
	.adr{
		line-height: 40rpx;
		font-size: 30rpx;
	}
	.edit{
		width:50rpx;
		height:50rpx;
		margin-top:45rpx;
	}
	.delete{
		height: 140rpx;
		line-height: 140rpx;
		position: absolute;
		right: 0;
		width: 0;
		top: 0;
		background: red;
		color: #fff;
		text-align: center;	        
	}
</style>
