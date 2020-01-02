<template>
	<!-- 优惠券 -->
	<view class="container">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			<view class="coupon" v-for="(item, index) in news" :key="index">
				<view class="discount">{{item.discount}}</view>
				<view class="info">
					<view class="name1">{{item.name}}</view>
					<view class="require1">消费满{{item.sill}}可用</view>
					<view class="time1">限{{item.start}}至{{item.end}}使用</view>
					<view class="nums1">剩余{{item.lens}}张</view>
				</view>
				<view :class="n ? 'use' : 'use1'" @click="transfer" @touchstart="next" @touchend="back">转让</view>
			</view>
			<view class="coupon" v-for="(item, index) in discount" :key="index">
				<view class="discount">{{item.discount*10}}折</view>
				<view class="info">
					<view class="name">{{item.name}}</view>
					<view class="time">限{{item.start}}至{{item.end}}使用</view>
					<view class="nums">剩余{{item.lens}}张</view>
				</view>
				<view :class="n ? 'use' : 'use1'" @touchstart="next" @touchend="back">使用</view>
			</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 1">
			<view class="coupon" v-for="(item, index) in news" :key="index">
				<view class="discount">{{item.discount}}</view>
				<view class="info">
					<view class="name1">{{item.name}}</view>
					<view class="require1">消费满{{item.sill}}可用</view>
					<view class="time1">限{{item.start}}至{{item.end}}使用</view>
					<view class="nums1">剩余{{item.lens}}张</view>
				</view>
				<view :class="n ? 'use' : 'use1'" @click="transfer" @touchstart="next" @touchend="back">转让</view>
			</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 2">
			<view class="coupon" v-for="(item, index) in discount" :key="index">
				<view class="discount">{{item.discount*10}}折</view>
				<view class="info">
					<view class="name">{{item.name}}</view>
					<view class="time">限{{item.start}}至{{item.end}}使用</view>
					<view class="nums">剩余{{item.lens}}张</view>
				</view>
				<view :class="n ? 'use' : 'use1'" @touchstart="next" @touchend="back">使用</view>
			</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 3"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			n: true,
			coupon: '',
			news: '',
			discount:'',
			tabCurrentIndex: 0,
			navList: [
				{
					state: 0,
					text: '全部(3)'
				},
				{
					state: 1,
					text: '存力满减券(2)'
				},
				{
					state: 2,
					text: '存力打折券(2)'
				},
				{
					state: 3,
					text: '转出(0)'
				}
			]
		};
	},
	onLoad() {
		uni.request({
			url: this.url + 'mydiscount/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success: res => {
				console.log(res.data.data[0]);
				console.log(res.data.data[1]);
				this.coupon = res.data.data[1];
				this.news = res.data.data[1].filter(val => {
					return val.type === 1;
				});
				this.discount = res.data.data[1].filter(val => {
					return val.type === 2;
				});
				console.log(this.news)
				console.log(this.discount)
			},
			fail: () => {},
			complete: () => {}
		});
	},
	methods: {
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
		},
		tabClick(index) {
			var that = this;
			that.tabCurrentIndex = index;
		},
		transfer() {
			uni.navigateTo({
				url: '../coupon-transfer/coupon-transfer'
			});
		},
		next: function() {
			this.n = false;
		},
		back: function() {
			this.n = true;
		}
	}
};
</script>

<style>
page {
	background: #121e2c;
}
.navbar {
	display: flex;
	height: 120rpx;
	color: #ffffff;
	position: relative;
	z-index: 10;
	/* border-bottom: 1rpx solid #182A42; */
}
.nav-item {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 24rpx;
	color: #ffffff;
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
	top: 90rpx;
	left: 56rpx;
}
.coupon {
	width: 704rpx;
	height: 208rpx;
	background: #182a42;
	border-radius: 5rpx;
	margin: 0 auto 26rpx;
}
.discount {
	width: 180rpx;
	height: 100%;
	float: left;
	text-align: center;
	line-height: 208rpx;
	color: #ffffff;
	font-size: 36rpx;
}
.info {
	width: 380rpx;
	height: 100%;
	float: left;
	padding-top: 20rpx;
	box-sizing: border-box;
}
.name {
	font-size: 26rpx;
	color: #ffffff;
	line-height: 60rpx;
}
.name1 {
	font-size: 26rpx;
	color: #ffffff;
	line-height: 50rpx;
}
.time,
.nums,
.require {
	color: #8796aa;
	font-size: 22rpx;
	line-height: 50rpx;
}
.time1,
.nums1,
.require1 {
	color: #8796aa;
	font-size: 22rpx;
	line-height: 40rpx;
}
.use {
	width: 104rpx;
	height: 46rpx;
	float: left;
	background: #41bec9;
	margin-top: 81rpx;
	border-radius: 5rpx;
	color: #ffffff;
	font-size: 22rpx;
	line-height: 46rpx;
	text-align: center;
}
.use1 {
	width: 104rpx;
	height: 46rpx;
	float: left;
	background: rgba(65, 190, 201, 0.5);
	margin-top: 81rpx;
	border-radius: 5rpx;
	color: #ffffff;
	font-size: 22rpx;
	line-height: 46rpx;
	text-align: center;
}
</style>
