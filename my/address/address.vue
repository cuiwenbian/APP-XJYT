<template>
	<!-- 提币地址 -->
	<view class="container">
		<view v-if="flag" style="position: relative;">
			<!-- <mt-cell-swipe> -->
			  <view class="list">
			  	<view class="left">
			  		<view class="nickname" >地址昵称: {{nickname}}</view>
			  		<view class="adr">地址：{{address}}</view>
			  	</view>
			  	<view class="right" @click="edit"><image class="edit" src="../../static/images/edit.png" mode=""></image></view>
			  </view>
			  <!-- </mt-cell-swipe> -->
		</view>
		<view v-else>
			<view class="box"></view>
			<view>
				<image class="none" src="../../static/images/address.png" mode=""></image>
				<view class="tips">您还没有提币地址哦！</view>
			</view>
			<view class="newadd" @click="add">新建地址</view>
		</view>
	</view>
</template>
<script src="../../static/js/jquery.min.js"></script>
<script src="https://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script>
export default {
	data() {
		return {
			nickname:'ss',
			address:'dss12gfgytnmkihqss3sss',
			allList: [
				// 模拟从后台获取过来的数据格式
				{
					repeatList: ['周一', '周三'],
					startTime: '00:00',
					endTime: '20:20'
				},
				{
					repeatList: ['周二', '周四', '周五'],
					startTime: '12:00',
					endTime: '23:59'
				},
				{
					repeatList: ['周六', '周日'],
					startTime: '00:00',
					endTime: '23:59'
				}
			],
			flag: true,
			right:''
		};
	},
	onLoad() {
		uni.request({
			url:this.urll+'walletaddress/',
			method:'GET',
			header:{
				Authorization:'JWT'+' '+this.global_.token
			},
			success(res) {
				console.log(res)
			}
		})
	},
	methods: {
		add: function() {
			uni.navigateTo({
				url: '../add-address/add-address',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		edit: function() {
			uni.navigateTo({
				url: '../edit-address/edit-address?nickname='+this.nickname+'&address='+this.address,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		delete:function(){
			uni.showModal({
				title:'提示',
				content:'确定删除该地址',
				confirmText:'确定',
				cancelText:'取消'
			})
		}
	}
};
</script>

<style>
	
.box {
	height: 200rpx;
}
.none {
	display: block;
	width: 150rpx;
	height: 150rpx;
	margin: 0 auto;
}
.tips {
	margin-top: 50rpx;
	text-align: center;
	color: #797979;
	font-size: 28rpx;
}
.newadd {
	width: 200rpx;
	height: 70rpx;
	background: #03143b;
	border-radius: 50rpx;
	color: #fff;
	text-align: center;
	line-height: 70rpx;
	margin: 80rpx auto;
	font-size: 30rpx;
}
.list {
	width: calc(100% - 48rpx);
	height: 140rpx;
	border-bottom: 1rpx solid #f2f2f2;
	margin-left: 48rpx;
}
.left {
	float: left;
	width: 88%;
	
}
.right {
	float: left;
	width: 12%;
}
.nickname {
	line-height: 80rpx;
	font-size: 30rpx;
}
.adr {
	line-height: 40rpx;
	font-size: 30rpx;
}
.edit {
	width: 50rpx;
	height: 50rpx;
	margin-top: 45rpx;
}
.delete {
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
