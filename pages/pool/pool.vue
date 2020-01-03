<template>
	<view class="container">
		<!-- <view class='height'></view> -->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			<view class="boxx" v-for="(item, index) in pool" :key="index">
				<image class="tag" src="../../static/images/news.png" mode=""></image>
				<view class="title">{{ item.name }}</view>
				<view class="opts">
					<view class="lists">
						<view class="dates">{{ item.cloud_hard_disk }}</view>
						<view class="room">矿池存储空间(T)</view>
					</view>
					<view class="lists">
						<view class="dates">{{ item.theory_of_income }}</view>
						<view class="room">日理论收益(FIL)</view>
					</view>
					<view class="lists">
						<view class="dates">{{ item.harduse }}</view>
						<view class="room">存储能力(t)</view>
					</view>
					<view class="lists">
						<view class="dates">{{ item.hardfree }}</view>
						<view class="room">可出售空间(T)</view>
					</view>
					<view class="lists">
						<view class="dates">¥{{ item.price }}/T</view>
						<view class="room">每T价格</view>
					</view>
					<view class="lists">
						<view class="dates">{{ item.address }}</view>
						<view class="room">地区</view>
					</view>
				</view>
				<view :class="n ? 'buys' : 'buys1'" @click="buy(item.cloudid)" >立即购买</view>
			</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 1">
			<image class="ranking" src="../../static/images/ranking.png" mode=""></image>
			<view class="updating">排行榜更新中～</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 2">
			<view class="mill">
				<view class="machine machine-left">
					<view class="machine-num">0</view>
					<view class="machine-mill">我的存力(T)</view>
				</view>
				<view class="machine">
					<view class="machine-num">0</view>
					<view class="machine-mill">存力收益(FIL)</view>
				</view>
			</view>
			<view v-if="flag">
				<image class="transfer" src="../../static/images/no-transfer.png" mode=""></image>
				<view class="info">暂无购买记录～</view>
			</view>
			<view v-else>
				<view class="tablist">
					<view class="li">序号</view>
					<view class="li">矿池名称</view>
					<view class="li">已购存力</view>
					<view class="li">目前收益</view>
					<view class="li">剩余天数</view>
					<view class="li">操作</view>
				</view>
				<view class="tablists">
					<view class="li">1    </view>
					<view class="li">韭菜矿池</view>
					<view class="li">50TB</view>
					<view class="li">2547FIL</view>
					<view class="li">360天</view>
					<view class="li give">转让</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			n: true,
			pool: '',
			tabCurrentIndex: 0,
			navList: [
				{
					state: 0,
					text: '最新'
				},
				{
					state: 1,
					text: '排行'
				},
				{
					state: 2,
					text: '已购买'
				}
			],
			flag: true
		};
	},
	onLoad() {
		uni.request({
			url: this.url + 'cloud/',
			method: 'GET',
			data: {},
			success: res => {
				console.log(res);
				this.pool = res.data.data;
			},
			fail: () => {},
			complete: () => {}
		});
	},
	methods: {
		next: function() {
			this.n = false;
		},
		back: function() {
			this.n = true;
		},
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
		},
		tabClick(index) {
			var that = this;
			that.tabCurrentIndex = index;
		},
		buy: function(item) {
			uni.navigateTo({
				url: '../poolDetails/poolDetails?cloudid=' + item
			});
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
	border-bottom: 1rpx solid #182a42;
}
.nav-item {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 26rpx;
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
	top: 80rpx;
	left: 90rpx;
}
.boxx {
	width: 704rpx;
	height: 536rpx;
	background: #182a42;
	margin: 24rpx auto;
	border-radius: 5rpx;
	/* opacity: 0.5; */
	position: relative;
	padding: 36rpx 31rpx;
	box-sizing: border-box;
}
.tag {
	position: absolute;
	top: 0;
	right: 0;
	width: 89rpx;
	height: 86rpx;
	display: block;
	/* opacity: 1; */
}
.title {
	font-size: 28rpx;
	color: #ffffff;
}
.opts {
	width: 100%;
	height: auto;
	margin-top: 36rpx;
}
.lists {
	width: 33%;
	height: 160rpx;
	float: left;
}
.dates {
	font-size: 42rpx;
	color: #ffffff;
	text-align: center;
	line-height: 60rpx;
}
.room {
	font-size: 22rpx;
	color: #8796aa;
	text-align: center;
	line-height: 60rpx;
}
.buys {
	clear: both;
	background: #41bec9;
	width: 630rpx;
	height: 76rpx;
	line-height: 76rpx;
	font-size: 28rpx;
	text-align: center;
	color: #ffffff;
}
.buys1 {
	clear: both;
	background: rgba(65, 190, 201, 0.5);
	width: 630rpx;
	height: 76rpx;
	line-height: 76rpx;
	font-size: 28rpx;
	text-align: center;
	color: #ffffff;
}
.buysall {
	background: #b1b1b1;
	color: #333333;
}
.ranking {
	width: 234rpx;
	height: 156rpx;
	margin: 138rpx auto 0;
	display: block;
}
.updating {
	color: #8796aa;
	text-align: center;
	line-height: 100rpx;
	font-size: 26rpx;
}

.mill {
	width: 706rpx;
	height: 210rpx;
	margin: 27rpx auto;
	position: relative;
	background-image: url('../../static/images/powers.png');
	background-size: 706rpx 210rpx;
	padding-top: 29rpx;
	box-sizing: border-box;
}
.machine {
	width: 50%;
	height: 100%;
	float: left;
	text-align: center;
}
.machine-left:after {
	content: '';
	position: absolute;
	top: 60rpx;
	left: 50%;
	width: 3rpx;
	height: 92rpx;
	background: #97a2e7;
}
.machine-num {
	font-size: 42rpx;
	line-height: 100rpx;
	color: #ffffff;
}
.machine-mill {
	font-size: 24rpx;
	color: #ffffff;
}
.transfer {
	width: 234rpx;
	height: 147rpx;
	display: block;
	margin: 152rpx auto 35rpx;
}
.info {
	text-align: center;
	color: #8796aa;
	font-size: 26rpx;
}
.tablist {
	height: 107rpx;
	width: 100%;
	border-bottom: 1rpx solid #121e2c;
	display: flex;
	justify-content: space-around;
}
.tablists {
	height: 107rpx;
	width: 100%;
	border-bottom: 1rpx solid #121e2c;
	display: flex;
	justify-content: space-around;
}
.li {
	color: #ffffff;
	font-size: 24rpx;
	line-height: 107rpx;
}
.give{
	width:76rpx;
	height:34rpx;
	border: 1rpx solid #41BEC9;
	border-radius: 5rpx;
	color:#41BEC9;
	font-size: 20rpx;
	margin-top:36rpx;
	line-height: 34rpx;
	text-align: center;
}
</style>
