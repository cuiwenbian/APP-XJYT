<template>
	<!-- 存储中心详情 -->
	<view class="container">
		<div class="header">
			<image class="banner" src="../../static/images/my-background.png" mode="">
			</image>
			<view class="desc">
				<div class="info">
					<view class="name">{{poolDetail.name}}</view>
					<progress class="progress-box" border-radius="10" :percent="persent" activeColor="#FDFBFC" backgroundColor="#0CB180" />
					<view class="sale">可出售空间：{{ poolDetail.hashrate }}T/{{ poolDetail.info  }}T</view>
				</div>
				<div class="img">
					<image src="../../static/images/banner.png" mode=""></image>
				</div>
			</view>
		</div>
		<view class="info">
			<view class="opts">
				<view class="every">
					<view class="mark">每T售价/年</view>
					<view class="date">{{ poolDetail.price }}</view>
				</view>
				<view class="every">
					<view class="mark">每T㊐理论收益(FIL)</view>
					<view class="date">{{ poolDetail.theory_earnings }}</view>
				</view>
				<view class="every">
					<view class="mark">存储能力(TB)</view>
					<view class="date">{{ poolDetail.harduse }}</view>
				</view>
				<view class="every">
					<view class="mark">技术服务费</view>
					<view class="date">{{ poolDetail.proportion*100 }}%</view>
				</view>
			</view>
			<view class="item">
				<view class="listItem">
					<view class="time">购买时间：</view>
					<view class="metss" @tap='toggleYear(index)' v-for='(item,index) in yearList' :key='index'>{{item}}</view>
				</view>
				
				<view class="listItem">
					<view class="time">购买份数：</view>
					<view class="nums">
						<view class="red" @click="buynum_reduce">-</view>
						<input class="maney" type='number'@input='getNum' :value="number" />
						<view class="red" @click="buynum_add">+</view>
					</view>
				</view>
				<view class="listItem">
					<view class="time">付款金额：</view>
					<view class="man">￥{{ poolDetail.price*number*3 || 0}}</view>
				</view>
				<view class="listItem">
					<view class="time">付款方式：</view>
					<div class="payway">
						<div>
							<image style='width:44rpx;height: 34rpx;' src="../../static/images/aplay.png" mode=""></image>
						</div>
						<div style='background-color: #F2F2F2;'>
							<image style='width:26rpx;height: 38rpx;' src="../../static/images/coin.png" mode=""></image>
						</div>
					</div>
				</view>
			</view>
			
			<!-- <block v-if='poolDetail.laber==1'>
				<view class="buy1">售罄</view>
			</block>
			<block v-else>
				<view class="buy" @click="buynow" hover-class="active" >立即购买</view>
			</block> -->
		</view>
		<view class="info">
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
				 @click="tabClick(index)">{{ item.text }}</view>
			</view>
			<view class="list" v-if="tabCurrentIndex === 0">
				<rich-text :nodes="introduce"></rich-text>
			</view>
			<view class="list" v-if="tabCurrentIndex === 1">
				<rich-text :nodes="details"></rich-text>
			</view>
			<view class="list" v-if="tabCurrentIndex === 2" >
				<rich-text :nodes="question"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				persent: '60',
				n: true,
				number: 1,
				id: '',
				question: '',
				details: '',
				introduce: '',
				poolDetail: '',
				month: false,
				year: false,
				num: '6',
				numlist: [6, 12, 24, 36],
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '存储中心介绍'
					},
					{
						state: 1,
						text: '存力介绍'
					},
					{
						state: 2,
						text: '常见问题'
					}
				],
				yearList: ['三年'],
				yearIndex: 0,
				laber: ''
			};
		},
		onLoad(option) {
			this.poolDetail = JSON.parse(option.data);
			this.id = this.poolDetail.id;
			this.laber = this.poolDetail.laber
			this.persent = parseInt((this.poolDetail.hashrate / this.poolDetail.info) * 100);
			console.log(this.poolDetail)
			console.log(this.id)
			//存储中心介绍
			uni.request({
				url: this.url + 'cloudintroduces/',
				method: 'GET',
				data: {
					cloudid: this.id
				},
				success: res => {
					console.log(res)
					this.introduce = res.data.message.introduce;
					this.details = res.data.message.details;
					this.question = res.data.message.question;
				}
			});
			//常见问题
			/* uni.request({
				url: this.url + 'cloudask/',
				method: 'GET',
				data: {
					cloudid: this.id
				},
				success: res => {
					console.log(res)
					this.question = res.data.data;
				}
			}); */
		},
		methods: {
			toggleYear(index) {
				this.yearIndex = index;
			},
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
			buynow: function() {
				uni.showToast({
					title: '预购即将开启',
					icon: 'none',
					duration: 3000
				});
			},
			buy_month: function() {
				var that = this;
				that.month = true;
				that.year = false;
			},
			buy_year: function() {
				this.year = true;
				this.month = false;
			},
			
			num_reduce() {
				if (this.num == 6) {
					uni.showToast({
						icon: 'none',
						title: '不能更小了'
					})
				} else if (this.num == 12) {
					this.num = 6
				} else if (this.num == 24) {
					this.num = 12
				} else if (this.num == 36) {
					this.num = 24
				}

			},
			
			add_num() {
				if (this.num == 36) {
					uni.showToast({
						icon: 'none',
						title: '不能更大了'
					})
				} else if (this.num == 24) {
					this.num = 36
				} else if (this.num == 12) {
					this.num = 24
				} else if (this.num == 6) {
					this.num = 12
				}

			},
			getNum:function(e){
				this.number=e.detail.value;
			},
			buynum_add() {
				this.number++;
				console.log(this.number)
			},
			buynum_reduce() {
				if (this.number <= 1) {
					uni.showToast({
						icon: 'none',
						title: '不能更小了'
					})
				} else {
					this.number--;
				}
				console.log(this.number)
			}
		}
	};
</script>

<style lang="scss">
	page {}

	.header {
		position: relative;
	}

	.banner {
		width: 100%;
		height: 480rpx;
		position: absolute;
		top: 0;
	}

	.desc {
		position: relative;
		display: flex;
	}

	.desc image {
		width: 240rpx;
		height: 200rpx;
	}

	.header .info {
		flex: 3;
		padding: 20px;
		margin-top: 20px;
	}

	.header .img {
		flex: 2;
		display: flex;
		justify-content: center;
		margin-top: 24px;
	}

	.name {
		color: #ffffff;
		font-size: 36rpx;
	}

	.progress-box {
		height: 9rpx;
		display: block;
		border-radius: 10px;
		margin: 20rpx 0;
	}

	.sale {
		color: #ffffff;
		font-size: 20rpx;
	}

	.container>.info {
		background: #ffffff;
		margin: 20px;
		position: relative;
		background: rgba(255, 255, 255, .8);
		border-radius: 5px;
		padding: 15px 20px;
		margin: 0 20px;

		box-shadow: 0px 5px 10px 3px #e0e0e0;
	}

	.container>.info:last-child {
		margin-top: 20px;
		margin-bottom: 20rpx;
	}

	.opts {
		display: flex;
		flex-wrap: wrap;
	}

	.every {
		flex: 0 0 50%;
		box-sizing: border-box;
		margin-bottom: 30rpx;
	}

	.date {
		font-size: 40rpx;
		color: #000000;
		text-align: left;
		font-weight: bolder;
		font-family: 'myface_bold';
	}

	.mark {
		font-size: 22rpx;
		color: #8796aa;
		text-align: left;
		line-height: 40rpx;
	}

	.line {
		width: 100%;
		height: 1rpx;
		background: #091926;
	}

	.item {
		box-sizing: border-box;
	}

	.listItem {
		width: 100%;
		height: 100rpx;
	}

	.time {
		float: left;
		font-size: 30rpx;
		color: #000000;
		line-height: 100rpx;
	}

	.mets {
		float: left;
		width: 140rpx;
		height: 68rpx;
		background: #e9e9e9;
		border-radius: 64rpx;
		color: #000000;
		font-size: 22rpx;
		text-align: center;
		line-height: 68rpx;
		margin-top: 25rpx;
		margin-right: 20rpx;
	}

	.metss {
		float: right;
		width: 140rpx;
		height: 56rpx;
		background: #313b3c;
		border-radius: 64rpx;
		color: #ffffff;
		font-size: 22rpx;
		text-align: center;
		line-height: 56rpx;
		margin-top: 25rpx;
		margin-right: 20rpx;
	}

	.months {
		width: 276rpx;
		height: 53rpx;
		border: 1rpx solid #41bec9;
		border-radius: 26.5rpx;
		margin-top: 23rpx;
		margin-left: 120rpx;
	}

	.years {
		float: left;
		width: 84rpx;
		height: 46rpx;
		border: 1rpx solid #637489;
		border-radius: 26.5rpx;
		margin-top: 23rpx;
		color: #8796aa;
		font-size: 22rpx;
		margin-right: 12rpx;
		text-align: center;
		line-height: 46rpx;
	}

	.yearss {
		float: left;
		width: 84rpx;
		height: 46rpx;
		border: 1rpx solid #41bec9;
		border-radius: 26.5rpx;
		margin-top: 23rpx;
		color: #8796aa;
		font-size: 22rpx;
		margin-right: 12rpx;
		text-align: center;
		line-height: 46rpx;
	}

	.btn {
		text-align: center;
		float: left;
		width: 60rpx;
		line-height: 53rpx;
		color: #41bec9;
		font-size: 38rpx;
	}

	.choosemonth {
		width: 166rpx;
		height: 60rpx;
		line-height: 56rpx;
		float: left;
		font-size: 22rpx;
		color: #000000;
		text-align: center;
	}

	.nums {
		float: right;
		// width: 138px;
		height: 30px;
		border-radius: 2px;
		margin-top: 11px
	}

	.red {
		text-align: center;
		float: left;
		margin-right: 10rpx;
		margin-left:10rpx;
		width: 30px;
		font-size: 52rpx;
		line-height: 30px;
		color: #333333;
	}

	.maney {
		width: 120rpx;
		height: 64rpx;
		background-color: #EAEAEA;
		float: left;
		font-size: 22rpx;
		color: #333333;
		text-align: center;
	}

	.add {
		text-align: center;
		float: left;
		width: 50rpx;
		line-height: 60rpx;
	}

	.man {
		color: #ff2b2b;
		font-size: 36rpx;
		line-height: 100rpx;
		float: right;
		margin-right: 42rpx;
		font-family: 'myface_bold';
	}

	.payway {
		float: right;
		margin-right: 32rpx;
	}

	.payway>div {
		float: left;
		margin-left: 20rpx;
		margin-top: 10rpx;
		width: 104rpx;
		height: 64rpx;
		background-color: #4F5D6C;
		border-radius: 38px;
		padding-top: 15rpx;
		padding-left: 30rpx;
		box-sizing: border-box;
	}

	.payway>div:last-child {
		padding-left: 40rpx;
	}

	.pay {
		width: 30rpx;
		height: 30rpx;
		display: block;
		float: left;
		margin-top: 35rpx;
		margin-right: 20rpx;
	}

	.coin {
		width: 33.5rpx;
		height: 33rpx;
		display: block;
	}

	.buy {
		width: 568rpx;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 24rpx;
		color: #ffffff;
		margin-top: 10px;
		border-radius: 44rpx;
		box-shadow: 0 0 15rpx 15rpx rgba(#cdf7eb, 0.3);
		background-image: linear-gradient(to right, #01c774, #01dda9);

		&.active {
			opacity: 0.4;
		}
	}
	.buy1 {
		width: 568rpx;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 24rpx;
		color: #ffffff;
		margin-top: 10px;
		border-radius: 44rpx;
        background-image: linear-gradient(to right, #706f72, #a9a8ab);	
		&.active {
			opacity: 0.4;
		}
	}

	.navbar {
		display: flex;
		height: 80rpx;
		color: #000000;
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
		color: #000000;
		position: relative;
	}
	.current {
		color: #333333;
	}
	.current:after {
		content: '';
		width: 156rpx;
		height: 3rpx;
		background: #14E7B6;
		position: absolute;
		top: 80rpx;
		left: 24rpx;
	}
	.list {
		padding: 29rpx 21rpx;
	}

	.intro {
		line-height: 50rpx;
		color: #000000;
		font-size: 24rpx;
	}
</style>
