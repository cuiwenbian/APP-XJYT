<template>
	<view class="container">
		<!-- <view class='height'></view> -->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			<view class="boxx"  v-for="(item, index) in pool" :key="index">
				<image class="tag" src="../../static/images/news.png" mode=""></image>
				<view class="title">
					{{item.name}} 
				</view>
				<view class="opts">
					<view class="lists">
						<view class="dates">
							{{item.cloud_hard_disk}}
						</view>
						<view class="room">
							矿池存储空间(T)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							{{item.theory_of_income}}
						</view>
						<view class="room">
							日理论收益(FIL)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							{{item.harduse}}
						</view>
						<view class="room">
							存储能力(t)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							{{item.hardfree}}
						</view>
						<view class="room">
							可出售空间(T)
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							¥{{item.price}}/T
						</view>
						<view class="room">
							每T价格
						</view>
					</view>
					<view class="lists">
						<view class="dates">
							{{item.address}}
						</view>
						<view class="room">
							地区
						</view>
					</view>
				</view>
			    <view :class="n?'buys':'buys1'" @click="buy(item.cloudid)" @touchstart="next" @touchend="back">立即购买</view>
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
			n:true,
			pool:'',
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
	onLoad() {
		uni.request({
			url: this.url+'cloud/',
			method: 'GET',
			data: {},
			success: res => {
				console.log(res)
				this.pool=res.data.data;
			},
			fail: () => {},
			complete: () => {}
		});
	},
	methods: {
		next:function(){
			this.n=false
		},
		back:function(){
		   this.n=true
		},
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
		},
		tabClick(index) {
			var that=this;
			that.tabCurrentIndex = index;
		},
		buy:function(item){
			uni.navigateTo({
				url:'../poolDetails/poolDetails?cloudid='+item
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
	clear: both;
	background: #41BEC9;
	width:630rpx;
	height:76rpx;
	line-height: 76rpx;
	font-size: 28rpx;
	text-align: center;
	color:#FFFFFF;
}
.buys1{
	clear: both;
	background: rgba(65, 190, 201, 0.5);
	width:630rpx;
	height:76rpx;
	line-height: 76rpx;
	font-size: 28rpx;
	text-align: center;
	color:#FFFFFF;
}
.buysall{
	background: #B1B1B1;
	color: #333333;
}
</style>
