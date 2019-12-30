<template>
	<view class="container">
		<!-- <view class='height'></view> -->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			<view class="boxx">
				<image class="tag" src="../../static/images/news.png" mode=""></image>
				<view class="title">
					矿池名称
				</view>
				<view class="opts">
					<view class="lists">
						<view class="dates">
							4800
						</view>
						<view class="room">
							矿池存储空间(T)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							46427
						</view>
						<view class="room">
							日理论收益(FIL)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							100
						</view>
						<view class="room">
							存储能力(t)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							2000
						</view>
						<view class="room">
							可出售空间(T)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							¥1500/T
						</view>
						<view class="room">
							每T价格
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							江浙沪
						</view>
						<view class="room">
							地区
						</view>
					</view>
				</view>
			    <button type="primary" class='buys' @click="buy">立即购买</button>
			</view>
			<view class="boxx">
				<image class="tag" src="../../static/images/remen.png" mode=""></image>
				<view class="title">
					矿池名称
				</view>
				<view class="opts">
					<view class="lists">
						<view class="dates">
							4800
						</view>
						<view class="room">
							矿池存储空间(T)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							46427
						</view>
						<view class="room">
							日理论收益(FIL)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							100
						</view>
						<view class="room">
							存储能力(t)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							2000
						</view>
						<view class="room">
							可出售空间(T)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							¥1500/T
						</view>
						<view class="room">
							每T价格
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							江浙沪
						</view>
						<view class="room">
							地区
						</view>
					</view>
				</view>
			    <button type="primary" class='buys buysall'>售罄</button>
			</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 1">2</view>
		<view class="list" v-if="tabCurrentIndex === 2">3</view>
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
		},
		buy:function(){
			uni.navigateTo({
				url:'../poolDetails/poolDetails'
			})
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
	border-bottom: 1rpx solid #182A42;
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
	left: 90rpx;
}
.boxx{
	width:704rpx;
	height:536rpx;
	background: #182A42;
	margin:24rpx auto;
	border-radius: 5rpx;
	/* opacity: 0.5; */
	position:relative;
	padding: 36rpx 31rpx;
	box-sizing: border-box;
}
.tag{
	position: absolute;
	top:0;
	right:0;
	width:89rpx;
	height:86rpx;
	display: block;
	/* opacity: 1; */
}
.title{
	font-size: 28rpx;
	color:#FFFFFF;
	
}
.opts{
	width:100%;
	height:auto;
    margin-top:36rpx;
}
.lists{
	width:33%;
	height:160rpx;
	float: left;
	
}
.dates{
	font-size: 42rpx;
	color:#FFFFFF;
	text-align: center;
	line-height:60rpx;
}
.room{
	font-size: 22rpx;
	color:#8796AA;
	text-align: center;
	line-height: 60rpx;
}
.buys{
	background: #41BEC9;
	width:630rpx;
	height:76rpx;
	line-height: 76rpx;
	font-size: 28rpx;
}
.buysall{
	background: #B1B1B1;
	color: #333333;
}
</style>
