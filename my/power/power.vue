<template>
	<!-- 我的存力 -->
	<view class="container">
			<image class='banner' src="../../static/images/tutu.png">
				<view class="back-page" @click="backFront"><image src="../../static/images/zuo.png" mode=""></image></view>
				<view class="title_index">我的存力</view>
				<div class="banner_info">
					<image src="../../static/images/service.png" mode=""></image>
					<div class="banner_infoo">
						<div class="num">{{ hashrate_total }}</div>
						<div class="text">我的存力 (T)</div>
					</div>
					<div class="banner_infoo" style='margin-left:120rpx'>
						<div class="num">{{ use_avg }}%</div>
						<div class="text">使用率</div>
					</div>
				</div>
			</image>
		<view class="my-content" v-if='cunli'>
			<image class="nomachine" src="../../static/images/no-machine.png" mode=""></image>
			<view style="color:#111111;font-size:24rpx;text-align: center;line-height: 95rpx;">暂无存力</view>
		</view>
		<view class="my-content" v-else>
			<text class="title" style='font-weight: bold;font-size: 1rem;'>已购存力</text>
			<scroll-view class="scroll-view" scroll-y style='padding: 0 40upx 0 20upx;' @scroll='scroll' :scroll-top="scrollTop">
				<view class="s-item" style='border-right:2px solid #f2f2f2;' v-for="(server, index) in contract" :key="index">
					<div class="left" style='flex:2'>
						<div class="name">
							<image src="../../static/images/ban1.png" mode=""></image>
							<text class="weight">{{ server.name }}</text>
						</div>
						<div class="date">合约日期：{{ server.starttime }}至{{ server.endtime }}</div>
						<div class="expire">剩余时间：{{ server.days }}天</div>
					</div>
					<div class="right" style='flex:1'>
						<div class="text fz-12">已购数量：{{ server.hashrate }}T</div>
						<div class="text fz-12">使用率：{{ server.use }}%</div>
						<div class="btn fz-12" @click="bbctn">转让</div>
					</div>
				</view>
			</scroll-view>
		</view>
		<view class="shade" v-if="shade" @touchmove.stop.prevent="moveHandle"> 
			<view class="pop">
				<view class="pop-title">请阅读并同意存力服务协议，否则无法使用此功能哦</view>
				<view class="pops">
					<view class="pop-btn1" @click="cancel">取消</view>
					<view class="pop-btn2" @click="sure">去阅读</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view class="service" @click="power_serve">服务协议</view>
		</view>
	</view>
</template>

<script>
	import {
		debounce
	} from '@/common/utils.js';
export default {
	data() {
		return {
			n: true,
			contract: [{}, {}],
			hashrate_total: '0',
			use_avg: '0',
			scrollTop: 0,
			old: {
				scrollTop: 0,
			},
			cunli: true,
			categart: '',
			shade:false,
			chnerot:''
		};
	},
	onShow() {
		var that = this;
		uni.request({
			url: this.url + 'usercloudagree/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
			},
			success(res) {
				console.log(res)
				that.chnerot = res.data.data.user_agreement;
				//that.agreement = res.data.data.agreement;
				if (that.chnerot == 0) {
					that.shade = true;
				}else{
					that.shade = false
				}
			}
		});
		
	},
	onLoad() {
		var that = this;
		uni.request({
			url: this.url + 'myclouds/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success(res) {
				console.log(res);
				var contract = [];
				var hashrate_total = 0; // 总数
				var use_total = 0;
				var use_avg = 0; // 平均数
				if (res.data.data && res.data.data.length) {
					contract = res.data.data.map(item => {
						item.starttime = item.starttime ? item.starttime.substring(0, 10) : '';
						item.endtime = item.endtime ? item.endtime.substring(0, 10) : '';
						hashrate_total += parseFloat(item.hashrate || 0);
						use_total += parseFloat(item.use || 0);
						return item;
					});
					use_avg = (use_total / res.data.data.length).toFixed(2);
				}
				that.hashrate_total = hashrate_total;
				that.use_avg = use_avg;
				that.contract = contract;
				if (that.contract.length != 0) {
					that.cunli = false;
				}
			}
		});
	},
	methods: {
		power_serve(){
			uni.navigateTo({
				url:'../powerAgreement/powerAgreement'
			})
		},
		cancel: function() {
			uni.navigateBack({
				delta:1
			})
		},
		linkToTransfer2: debounce(
			function() {
				uni.navigateTo({
					url: '../powerAgreement/powerAgreement'
				});
			},
			500,
			true
		),
		sure: function() {
			this.linkToTransfer2()
		},
		scroll(e) {
			this.old.scrollTop = e.detail.scrollTop
		},
		backFront:function(){
			console.log(123)
			uni.navigateBack({
				delta:1
			})
		},
		transfer: function(item) {
			var that = this;
			uni.request({
				url: this.url + 'cloudtransfers/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					console.log(res);
					if (res.statusCode == 200) {
						uni.navigateTo({
							url: '../power-transfer/power-transfer?ids=' + item.id + '&day=' + item.days + '&rate=' + item.hashrate
						});
					}
					if (res.statusCode == 400) {
						uni.showToast({
							icon: 'none',
							title: '未实名认证通过或未设置资金密码'
						});
					}
				}
			});
		},
		bt: function() {
			uni.navigateBack({
				delta: 1
			});
		},
		bbctn: function() {
			uni.showToast({
				title: '存力转让功能暂未开放',
				icon: 'none',
				duration: 3000
			});
		}
	}
};
</script>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
}

.fz-14 {
	font-size: 14px;
}

.fz-12 {
	font-size: 21rpx;
	font-family: 'myface';
}

.fz-16 {
	font-size: 16px;
}
.service {
		width: 170rpx;
		height: 60rpx;
		position: fixed;
		right: 40rpx;
		bottom: 130rpx;
		box-shadow: 1px 5px 5px #888888;
		background-color: #5dbfca;
		color: #fff;
		font-size: 16rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 30rpx;
		z-index: 999;
	}
.servers {
	padding: 30rpx 0;
	margin: 0 40rpx;
	padding-bottom: 120rpx;
	transform: translate(0, -200rpx);
	background: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
	padding: 42rpx 28rpx;
	margin: 0 30rpx;
	padding-bottom: 120rpx;
	transform: translate(0, -200rpx);
	background: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
	box-sizing: border-box;
}
.my-content {
	width: 660rpx;
	height: calc(100% - 428rpx);
	background: rgba(255, 255, 255, 0.9);
	border-radius: 13rpx;
	position: fixed;
	top: 348rpx;
	left: 50%;
	margin-left: -330rpx;
	margin-bottom: 50rpx;

	padding: 36rpx 10rpx 60rpx;
	box-sizing: border-box;
	box-shadow: 0 0 50px 10rpx rgba(0, 0, 0, 0.2);
}
.scroll-view{

	width: 660rpx;
	height:100%;
}
.nomachine {
	width: 344rpx;
	height: 252rpx;
	display: block;
	margin: 190rpx auto 0;
}

 .title {
	margin-left: 20rpx;
	line-height:60rpx;
}

.s-item {
	display: flex;
	height: 186rpx;
	align-items: stretch;
	margin-bottom: 25rpx;
	margin-top:10rpx;
	box-sizing: border-box;
	&:last-child {
		margin-bottom: 0;
	}
}
.s-item .left {
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
	flex: 2;
	background: #ffffff;
	padding: 20rpx;
	box-shadow: 0px 5px 3px -4px #333;
}

.s-item .right {
	flex: 1;
	width: 0;
	background: #ffffff;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	display: flex;
	padding: 20rpx;
	color: #999999;
	font-size: 16rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 5px 7px -4px #333;
	.text {
		padding-bottom: 10rpx;
	}
}

.s-item .right .btn {
	color: #ffffff;
	padding: 10rpx;
	border-radius: 30px;
	background: linear-gradient(0deg, rgba(7, 217, 151, 1), rgba(34, 239, 174, 1));
	width: 110rpx;
	text-align: center;
	align-self: center;
	box-shadow: 6rpx 8rpx 20rpx 2rpx rgba(19, 230, 164, 0.54);
}

.s-item .left .name {
	display: flex;
	align-items: center;
	font-size: 14px;
	margin-left: 10rpx;
}

.s-item .left .name image {
	width: 40rpx;
	height: 40rpx;
	margin-right: 10rpx;
}

.s-item .left .date,
.s-item .left .expire {
	color: #999999;
	font-family: 'myface';
	margin-left: 20rpx;
	font-size: 18rpx;
	padding-top: 10rpx;
	transform: scale(0.78);
	margin-top:10rpx;
}

.s-item::last-child {
	border-bottom: none;
}
.banner{
	width: 100%;
	height: 612rpx;
	position: fixed;
	top: 0;
}

.back-page {
	width: 54rpx;
	height: 52rpx;
	position: fixed;
	top: 74rpx;
	left: 24rpx;
	z-index: 99;
}

.back-page image {
	width: 54rpx;
	height: 52rpx;
	display: block;
}

.title_index {
	height: 64rpx;
	width: 100%;
	text-align: center;
	line-height: 64rpx;
	font-size: 36rpx;
	position: fixed;
	top: 69rpx;
	color: #ffffff;
	z-index: 9;
}

.banner_info {
	color: #fff;
	padding: 90px 20px;
	position: fixed;
	top:0;
	z-index: 9;
}
.banner_infoo{
	float: left;
}
.banner_info > div {
	text-align: left;
	margin-left: 50rpx;
}

.banner_infoo .num {
	font-size: 28px;
	font-family: 'myface_bold';
}

.banner_infoo .text {
	font-size: 24rpx;
}

.banner_info image {
	width: 120rpx;
	height: 120rpx;
	float: left;
}

.img {
	position: relative;
	width: 100%;
	height: 326rpx;
}

.box {
	width: 100%;
	height: 326rpx;
}

.cter {
	position: absolute;
	left: 0;
	top: 0;
	width: 96rpx;
	height: 124rpx;
	z-index: 1;
}

.images {
	width: 16rpx;
	height: 31rpx;
	position: absolute;
	top: 70rpx;
	left: 30rpx;
}

.power {
	width: 100%;
	position: absolute;
	top: 60rpx;
	text-align: center;
	font-size: 36rpx;
	color: #ffffff;
}

.power2 {
	position: absolute;
	top: 190rpx;
	left: 128rpx;
	float: left;
	text-align: center;
	font-size: 42rpx;
	color: #ffffff;
}

.power3 {
	font-size: 24rpx;
	color: #ffffff;
}

.x {
	width: 3rpx;
	height: 90rpx;
	position: absolute;
	top: 190rpx;
	left: 360rpx;
	background: rgba(151, 162, 231, 1);
}

.usage {
	position: absolute;
	top: 190rpx;
	right: 128rpx;
	float: right;
	text-align: center;
	font-size: 42rpx;
	color: #ffffff;
}

.usage2 {
	font-size: 24rpx;
	color: #ffffff;
}

.pay {
	height: 85rpx;
	background-color: #0f2439;
	line-height: 85rpx;
	padding-left: 48rpx;
	margin-top: 30rpx;
	margin-bottom: 20rpx;
	font-size: 26rpx;
	color: #ffffff;
}

.box2 {
	width: 704rpx;
	height: 222rpx;
	margin: 0 auto;
	margin-bottom: 20rpx;
	background-color: #0f2439;
}

.contract {
	height: 105rpx;
	border-bottom: 1rpx solid #091926;
}

.contract2 {
	line-height: 105rpx;
	padding-left: 20rpx;
	font-size: 24rpx;
	color: #8796aa;
}

.time {
	padding-left: 30rpx;
}

.transfer {
	width: 110rpx;
	height: 44rpx;
	line-height: 44rpx;
	font-size: 22rpx;
	margin-top: 30rpx;
	margin-right: 10rpx;
	float: right;
	color: #41bec9;
	background-color: #0f2439;
	border: 1rpx solid #41bec9;
	border-radius: 5px;
}

.transfer1 {
	width: 110rpx;
	height: 44rpx;
	line-height: 44rpx;
	font-size: 22rpx;
	margin-top: 30rpx;
	margin-right: 10rpx;
	float: right;
	color: #41bec9;
	border: 1rpx solid #41bec9;
	border-radius: 5px;
	background: RGBA(0, 193, 203, 0.5);
}

uni-button {
	text-align: center;
}

.mill {
	position: fixed;
	width: 704rpx;
	height: 116rpx;
}

.mill2 {
	position: fixed;
	line-height: 116rpx;
	font-size: 24rpx;
	color: #ffffff;
	padding-left: 20rpx;
}

.orepool {
	padding-right: 20rpx;
}

.linga {
	padding-right: 20rpx;
	padding-left: 20rpx;
}

.no-cunli {
	width: 231rpx;
	height: 162rpx;
	display: block;
	margin: 152rpx auto 35rpx;
}

.nobuys {
	text-align: center;
	color: #8796aa;
	font-size: 26rpx;
}
.weight{
	font-weight: bold;
}
//弹框
.shade {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
	}

	.pop {
		width: 550rpx;
		height: 300rpx;
		margin: 400rpx auto;
		padding: 0 60rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 10rpx;
	}

	.pop-title {
		width:100%;
		height: 200rpx;
		padding-top: 50rpx;
		box-sizing: border-box;
		line-height: 60rpx;
		text-align: center;
		font-size: 24rpx;
	}

	.pops {
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.pop-btn1 {
		width: 158rpx;
		height: 66rpx;
		border-radius: 50rpx;
		line-height: 66rpx;
		font-size: 26rpx;
		color: #333;
		text-align: center;
	}
	.pop-btn2{
		width: 158rpx;
		height: 66rpx;
		border-radius: 50rpx;
		line-height: 66rpx;
		font-size: 26rpx;
		color: #fff;
		text-align: center;
		background-image: linear-gradient(to right, #01c774, #01dda9);
	}

	.pop-bt {
		width: 158rpx;
		height: 66rpx;
		border-radius: 10rpx;
		line-height: 66rpx;
		font-size: 30rpx;
		color: #999999;
		text-align: center;
		background: #fff;
	}
</style>