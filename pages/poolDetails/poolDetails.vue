<template>
	<!-- 矿池详情 -->
	<view class="container">
		<image class="banner" src="../../static/images/banners.png" mode="">
			<view class="desc">
				<view class="name"> 矿池名称</view>
				 <progress class="progress-box" percent="20"  activeColor='#00C1CB' backgroundColor='#0F1E2D'/>
		         <view class='sale'>可出售空间：4000T/4800T</view>
			</view>
		</image>
		<view class="info">
			<view class="opts">
				<view class="every">
					<view class="date">4800</view>
					<view class="mark">每T售价/年</view>
				</view>
				<view class="every">
					<view class="date">5.074544</view>
					<view class="mark">每T㊐理论收益(FIL)</view>
				</view>
				<view class="every">
					<view class="date">900</view>
					<view class="mark">存储能力(t)</view>
				</view>
				<view class="every">
					<view class="date">10%</view>
					<view class="mark">技术服务费</view>
				</view>
			</view>
			<view class='line'></view>
			<view class="item">
				<view class="listItem">
					<view class='time'>购买时间：</view>
					<view :class="month?'metss':'mets'" @click='buy_month'>按月购买</view>
					<view :class="year?'metss':'mets'" @click='buy_year'>按年购买</view>
				</view>
				<view class="listItem" v-if='month'>
				    <view class='months'>
						<view class="btn" @click="reduce1">-</view>
						<input class="choosemonth" type="text" value="" placeholder="1个月"  placeholder-style="color:#ffffff;"/>
						<view class='btn' @click='add1'>+</view></view>					
				</view>
				<view class="listItem" style='padding-left:120rpx;box-sizing: border-box;' v-if='year'>
			         <view class='years'>1年</view>
					 <view class='years'>2年</view>
					 <view class='years'>3年</view>
				</view>
				<view class="listItem" >
					<view class='time'>购买份数：</view>
                    <view class='nums'>
						<view class="red" @click="reduce">-</view>
						<input class="maney" type="text" value="" placeholder="1T起购" placeholder-style="color:#FEFEFE;" />
						<view class='red' @click='add'>+</view></view>					
				</view>
				<view class="listItem">
					<view class='time'>付款金额：</view>
					<view class='man'>￥0</view>
				</view>
				<view class="listItem">
					<view class='time' style='color:#8796AA;font-size: 20rpx;'>付款方式：</view>
					<image class="pay" src="../../static/images/pay.png" mode=""></image>
					<image class="pay coin" src="../../static/images/coin.png" mode=""></image>
				</view>
			</view>
			<button type="primary" class='buy'>立即购买</button>
		</view>
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			<view class="intro">矿池介绍矿池介绍矿池介绍矿池介绍矿池介绍矿池介绍矿池介绍矿
			介绍矿池介绍矿池介绍矿池介绍矿池介绍矿池介绍是一家专注于区块链技术
			、人工智能和大数据的创新型研发公司，基于下一代互联网底层协议IPFS
			，构建分布式落地应用。整合已有的制造装配优势，坎通智能率先研发能支
			持亿级矿机双挖矿的操作系统，定制了全球首款。</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 1">2</view>
		<view class="list" v-if="tabCurrentIndex === 2">3</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				month:false,
				year:false,
				nums: 1 ,
				tabCurrentIndex: 0,
				navList: [
					{
						state: 0,
						text: '矿池介绍'
					},
					{
						state: 1,
						text: '合约详情'
					},
					{
						state: 2,
						text: '常见问题'
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
			reduce(){
				this.nums--;
				if(this.nums=1){
					this.nums='1T起购';
					return false
				}
					
			},
			add(){
				this.nums++;
			},
			buy_month:function(){
				this.month=true;
				this.year=false;
			},
			buy_year:function(){
				this.year=true;
				this.month=false;
			}
		}
	};
</script>

<style>
page {
	background: #121e2c;
}
.banner {
	width: 704rpx;
	height: 162rpx;
	display: block;
	margin: 43rpx auto 0;
	position: relative;
}
.desc {
	position: absolute;
	top: 43rpx;
	left: 0;
	padding:25rpx 35rpx;
}
.name {
	text-align: center;
	color:#FFFFFF;
	font-size: 30rpx;
}
.progress-box{
	width:642rpx;
	height:9rpx;
	display: block;
	margin:20rpx;
	
}
.sale{
	color:#8796AA;
	font-size: 20rpx;
	text-align: center;
	
}
.info{
	width:704rpx;
	height:auto;
	margin:0 auto;
	background: #182A42;
	padding:32rpx 0;
    
}
.opts{
	width:100%;
	height:312rpx;
}
.every{
	float: left;
	width:50%;
	height:50%;
	padding-top:30rpx;
	box-sizing: border-box;
}
.date{
	font-size: 42rpx;
	color:#FFFFFF;
	text-align: center;
}
.mark{
	font-size: 22rpx;
	color:#8796AA;
	text-align: center;
	line-height: 40rpx;
}
.line{
	width:100%;
	height: 1rpx;
	background: #091926;
}
.item{
	padding:30rpx;
	box-sizing: border-box;
}
.listItem{
	width:100%;
	height:100rpx;
}
.time{
	float: left;
	font-size: 24rpx;
	color:#FFFFFF;
	line-height: 100rpx;
}
.mets{
	float: left;
	width:130rpx;
	height:48rpx;
	border: 1px solid #637489;
	border-radius: 24rpx;
	color:#FFFFFF;
	font-size: 22rpx;
	text-align: center;
	line-height: 48rpx;
	margin-top:25rpx;
	margin-right:20rpx;
}
.metss{
	float: left;
	width:130rpx;
	height:48rpx;
	background: #41BEC9;
	border-radius: 24rpx;
	color:#FFFFFF;
	font-size: 22rpx;
	text-align: center;
	line-height: 48rpx;
	margin-top:25rpx;
	margin-right:20rpx;
}
.months{
	
	width:276rpx;
	height:53rpx;
	border: 1rpx solid #41BEC9;
	border-radius: 26.5rpx;
	margin-top:23rpx;
	margin-left:120rpx;
}
.years{
	float: left;
	width:84rpx;
	height:46rpx;
	border: 1rpx solid #637489;
	border-radius: 26.5rpx;
	margin-top:23rpx;
	color:#8796AA;
	font-size: 22rpx;
	margin-right: 12rpx;
	text-align: center;
	line-height: 46rpx;
}
.btn{
	text-align: center;
	float: left;
	width:60rpx;
	line-height: 53rpx;
	color:#41BEC9;
	font-size: 30rpx;
}
.choosemonth{
	width: 156rpx;
	height:60rpx;
	float:left;
	font-size: 22rpx;
	color:#FFFFFF;
	text-align: center;
}
.nums{
	float:left;
	width:276rpx;
	height:60rpx;
	background: #637489;
	border-radius: 5rpx;
	margin-top:23rpx;
}
.red{
	text-align: center;
	float: left;
	width:60rpx;
	line-height: 60rpx;
	color: #333333;
	font-size: 30rpx;
}
.maney{
	width: 156rpx;
	height:60rpx;
	float:left;
	font-size: 22rpx;
	color:#FEFEFE;
	text-align: center;
}
.add{
	text-align: center;
	float: left;
	width:50rpx;
	line-height: 60rpx;
}
.man{
	color:#FF2B2B;
	font-size: 36rpx;
	line-height: 100rpx;
}
.pay{
	width:30rpx;
	height:30rpx;
	display: block;
	float: left;
	margin-top:35rpx;
	margin-right: 20rpx;
}
.coin{
	width:33.5rpx;
	height:33rpx;
	display: block;
}
.buy{
	width:630rpx;
	height:76rpx;
	
	font-size: 28rpx;
	color:#FFFFFF;
}
uni-button:after{
	background: #41BEC9;
	margin:0 auto;
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
	left: 90rpx;
}
.list{
	padding:49rpx 21rpx;
}
.intro{
	line-height: 40rpx;
	color:#FFFFFF;
	font-size: 24rpx;
}
</style>
