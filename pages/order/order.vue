<template>
	<view class="container">
		<view class='height'></view>
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			
		</view>
		<view class="list" v-if="tabCurrentIndex === 1">2</view>
		<view class="list" v-if="tabCurrentIndex === 2">3</view>
		<view class="list" v-if="tabCurrentIndex === 3">4</view>
		<view class="list" v-if="tabCurrentIndex === 4">5</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabCurrentIndex: 0,
			navList: [
				{
					state: 0,
					text: '全部'
				},
				{
					state: 1,
					text: '待付款'
				},
				{
					state: 2,
					text: '待确认'
				},
				{
					state: 3,
					text: '待审核'
				},
				{
					state: 4,
					text: '历史订单'
				}
			]
		};
	},
	methods: {
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
		},
		tabClick(index) {
			var that=this;
			that.tabCurrentIndex = index;
		}
	}
};
</script>

<style>
page {
	background: #121e2c;
}
.height {
	height: var(--status-bar-height);
	background: #121e2c;
}
.navbar {
	display: flex;
	height: 80rpx;
	color: #ffffff;
	position: relative;
	z-index: 10;
}
.nav-item {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 26rpx;
	color: #FFFFFF;
	position: relative;
}

.current {
	color: #41bec9;
}
.current:after {
	content: '';
	width: 66rpx;
	height: 1rpx;
	background: #41bec9;
	position: absolute;
	top: 80rpx;
	left: 40rpx;
}
</style>
