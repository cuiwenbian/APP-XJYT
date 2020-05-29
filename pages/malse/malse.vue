<template>
	<view class="container">
		<!-- 提示 -->
		<image class='banner' src="../../static/images/tutu.png" mode="">
			<view class='back-page' @click='backFront'>
				<image src="../../static/images/zuo.png" mode=""></image>
			</view>
			<view class="title_index">
				存力交易
			</view>
			<!-- #ifdef APP-PLUS -->
			<view class='jilu' @click='jilu'>记录</view>
			<!-- #endif -->
			<div class="banner_info">
				<image class='cunli_image' src="../../static/images/service.png" mode=""></image>
				<div>
					<div class="num">{{logsr}}</div>
					<div class="text">可售总存力 (T)</div>
				</div>
				<view class='record_image' @click='jilu' style='text-align: center;'>交易记录</view>
			</div>
		</image>
        <view  v-if="flag" class="servers">
        	<image class='transferss' src="../../static/images/no-machine.png" mode=""></image>
        	<view class="infoss">没有记录～</view>
        </view>
		<view v-else class="servers">
			<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
				<view class="s-item" v-for="(item , index) in sectir" :key="index">
					<div class="left">
						<div class="name">
							<image src="../../static/images/ban1.png" mode=""></image>
							<text>{{item.name}}</text>
						</div>
						<div class="ram">
							{{item.hashrate}}T
						</div>
						<div class="date">
							合约日期：{{item.start_time}}--{{item.end_time}}
						</div>
						<div class="expire">
						  剩余时间：{{item.remain_time}}天
						</div>
					</div>
					<div class="right">
						<view class="btn fz-12" @click="btn(item)">转让</view>
						<view class="btn fz-13" @click="btn2(item)">出售</view>
					</div>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {debounce} from '@/common/utils.js';
	export default {
		data() {
			return {
				sectir: [],
				cloud: '',
				trye: '',
				cesrg: '',
				number: '',
				shade:false,
				flag: false,
				number2: '',
				lerst:'',
				stus: '',
				cancl:'取消',
				greed:'',
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
				hashrateTotal: 0,
				logsr: '0'
			};
		},
		onShow() {
			let that = this
			uni.request({
				url: that.url + 'cloud/dealersales/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + that.global_.token
				},
				success(res) {
					console.log(res)
					console.log(res.data.data.user_hashrate)
					if(res.data.data.user_hashrate==''){
						console.log('ccc')
						that.flag=true
					}else{
						that.sectir = res.data.data.user_hashrate
						that.logsr = res.data.data.total_hashrate
					}
				}
			})
		},
		methods: {

			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			backFront() {
				uni.navigateBack({
					delta: 1
				})
			},
			linkToTransfer1: debounce(
				function() {
					uni.navigateTo({
						url: '../../my/cunli_record/cunli_record'
					});
				},
				500,
				true
			),
			jilu: function() {
				this.linkToTransfer1();
			},
			btn: function(item) {
			    this.linkToTransfer(item);
			},
			linkToTransfer: debounce(
				function(item) {
					var that = this
					uni.request({
						url:this.url + 'cloudbuys',
						method:'GET',
						header:{
							Authorization: 'JWT' + ' ' + that.global_.token
						},
						success(res) {
							console.log(item)
							that.cloud = item.id
							that.number = item.hashrate
							console.log(that.number)
							if (res.statusCode == 200) {
								uni.navigateTo({
									url: '../../my/posjfig/posjfig?aa=' + that.cloud + '&ff=' + that.number
								})
							}
							if (res.statusCode == 400) {
								uni.showToast({
									title:'用户未实名认证或未设置资金密码',
									icon:'none'
								})
							}
						}
					})
				},
				1000,
				true
			),
			btn2: function(item) {
			    this.linkToTransfer2(item);
			},
			linkToTransfer2: debounce(
				function(item) {
					var that = this
					uni.request({
						url:this.url + 'cloudbuys',
						method:'GET',
						header:{
							Authorization: 'JWT' + ' ' + that.global_.token
						},
						success(res) {
							if (res.statusCode == 200) {
								that.trye = item.id
								that.number2 = item.hashrate
								uni.navigateTo({
									url: '../../my/poder/poder?ss=' + that.trye + '&cc=' + that.number2
								})
							}
							if (res.statusCode == 400) {
								uni.showToast({
									title:'用户未实名认证或未设置资金密码',
									icon:'none'
								})
							}
						}
					})
				},
				1000,
				true
			),
		
		}
	};
</script>

<style lang="scss">
	.fz-14 {
		font-size: 14px
	}

	.fz-12 {
		font-size: 12px;
		background-image: linear-gradient(to right, #0195D2, #26b3d2);
	}
	.fz-13{
		font-size: 12px;
		background-image: linear-gradient(to right, #01c774, #01dda9);
	}

	.fz-16 {
		font-size: 16px
	}

	.servers {
		width: 660rpx;
		height: calc(100% - 388rpx);
		background: rgba(255, 255, 255, 0.9);
		border-radius: 13rpx;
		position: fixed;
		top: 348rpx;
		left: 50%;
		margin-left: -330rpx;
		margin-bottom: 50rpx;
		padding: 36rpx 16rpx;
		box-sizing: border-box;
		box-shadow: 0 0 50px 10rpx rgba(0, 0, 0, 0.2);
	}
	.transferss {
		width: 344rpx;
		height: 252rpx;
		display: block;
		margin: 152rpx auto 35rpx;
	}
	
	.infoss {
		text-align: center;
		color: #8796AA;
		font-size: 26rpx;
	}
    .scroll-view{
	   width:100%;
	   height:100%;
	}
	.servers .title {
		margin-left: 20rpx;
	}

	.s-item {
		display: flex;
		height: 222rpx;
		align-items: stretch;
		margin-bottom: 25rpx;
		box-sizing: border-box;

		&:last-child {
			margin-bottom: 20rpx;
		}

		// justify-content: space-between;
		// padding: 20rpx;
		// padding-top: 0;
	}

	.s-item .left {
		background: #FFFFFF;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		width: 390rpx;
		flex-shrink: 0;
		padding: 30rpx 20rpx 0;
		box-shadow: 0px 5px 3px -4px #333;
	}

	.s-item .right {
		flex: 1;
		width: 0;
		background: #FFFFFF;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		display: flex;
		padding: 20rpx;
		color: #999999;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0px 5px 7px -4px #333;
	}

	.s-item .right::before,
	.s-item .right::after {
		content: '';
		display: block;
	}

	.s-item .right .btn {
		color: #FFFFFF;
		padding: 10rpx;
		border-radius: 30px;
		width: 110rpx;
		text-align: center;
		align-self: center;
	}

	.s-item .right .btn:last-child {
		background: #07cf90;
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

	.s-item .left .ram {
		padding-top: 15rpx;
		margin-left: 62rpx;
		font-family: 'myface_bold';
	}

	.s-item .left .date,
	.s-item .left .expire {
		font-size: 12px;
		color: #999999;
		margin-left: 62rpx;
		font-size: 18rpx;
		white-space: nowrap;
		padding-top: 10rpx;
		font-family: 'myface';
	}

	.s-item::last-child {
		border-bottom: none;
	}

	.si-imgs {
		flex-shrink: 0;
		width: 240rpx;
		height: 180rpx;
	}

	.si-img {
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		display: initial;
	}

	.si-info {
		flex-shrink: 0;
	}

	.io-1 {
		margin-right: 20rpx;
	}

	.io-1::after {
		content: '';
		display: inline-block;
		width: 1px;
		height: 24rpx;
		background: #999;
		margin-left: 19rpx;
	}

	.si-info .ii-title {
		color: #333;
		font-size: 14px;
	}

	.si-info .ii-other {
		color: #888;
		font-size: 12px;
		margin-top: 10rpx;
	}

	.si-radio {
		width: 30rpx;
		height: 30rpx;
		border-radius: 50px;
		border: 1px solid #999;
		transition: all 0.2s;
	}

	.si-radio-selected {
		border-color: #007aff;
	}

	.si-radio-selected::after {
		content: '';
		width: 20rpx;
		height: 20rpx;
		background: #007aff;
		display: block;
		border-radius: 50px;
		margin: 5rpx;
	}

	.s-btns {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 120rpx;
		text-align: right;
		background: #fff;
		z-index: 1;
		padding-top: 40rpx;
	}

	.s-btns .sn-btn {
		margin-right: 30rpx;
		display: inline-block;
		font-size: 14px;
		padding: 15rpx 60rpx;
		border-radius: 8rpx;
		transition: all 0.2s;
	}

	.s-btns .sn-btn:active {
		opacity: 0.8;
	}

	.sn-zr {
		color: #888;
		border: 1px solid #ddd;
		background: #fff;
	}

	.sn-cs {
		color: #fff;
		border-color: #000;
		background: #000;
	}

	.shade {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
	}

	.banner {
		width: 100%;
		height: 612rpx;
		display: block;
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

	.jilu {
		width: 54rpx;
		height: 52rpx;
		text-align: center;
		line-height: 52rpx;
		font-size: 20rpx;
		color: #FFFFFF;
		position: fixed;
		top: 74rpx;
		right: 24rpx;
		z-index: 99;
	}

	.banner_info {
	    width: 660rpx;
		display: flex;
		color: #fff;
		justify-content: space-between;
		position: fixed;
		top: 198rpx;
		left:calc((100% - 660rpx)/2);
	}

	.banner_info>div {
		flex: 1;
	}

	.banner_info .num {
		font-size: 28px;
		font-family: 'myface_bold';
	}

	.banner_info .text {
		font-size: 14px;
	}

	.banner_info >.cunli_image {
		width: 120rpx;
		height: 120rpx;
		// margin-left: 41rpx;
		margin-right: 20rpx;
	}
	.banner_info >.record_image {
		width: 158rpx;
		height: 66rpx;
		margin-right: 0rpx;
		margin-top: 50rpx;
		border-radius: 30rpx;
		line-height: 66rpx;
		font-size: 30rpx;
		color: #fff;
		text-align: center;
		background: rgba(255,255,255,0.5);
	}

	.all {
		font-size: 24rpx;
		color: #ffffff;
	}

	.assets {
		font-size: 48rpx;
		color: #ffffff;
		margin-top: 19rpx;
	}

	.transfer {
		width: 130rpx;
		height: 130rpx;
		display: block;
		margin: 152rpx auto 35rpx;
	}

	.nomachine {
		text-align: center;
		color: #8796aa;
		font-size: 26rpx;
	}

	.tee {
		float: right;
		margin-top: 60rpx;
		width: 40rpx;
		height: 40rpx;
		margin-right: 90rpx;
	}

	.pagex {
		width: 100%;
		display: block;
	}

	.page1 {
		height: 180rpx;
		padding-right: 40rpx;
		padding-bottom: 20rpx;
	}

	.img {
		width: 20%;
	}

	.molis {
		float: right;
		margin-bottom: 60rpx;
	}

	.por {
		float: left;
		width: 145rpx;
		height: 126rpx;
		margin-top: 20rpx;
		margin-left: 48rpx;
	}

	.info {
		width: 50%;
		height: 100%;
		margin-left: 20rpx;
		float: left;
	}

	.obg {
		margin-top: 20rpx;
		font-size: 30rpx;
	}

	.days {
		color: #5ca614;
	}

	.obg_one {
		margin-top: 10rpx;
		font-size: 24rpx;
	}

	.tan {
		width: 100%;
		height: 66rpx;
		position: fixed;
		background-color: #fbe8e9;
		opacity: 0.9;
		z-index: 9;
		display: flex;
		align-items: center;
	}

	.tanh {
		width: 32rpx;
		height: 32rpx;
		padding-left: 42rpx;
	}

	.mill {
		color: #f3707c;
		font-size: 22rpx;
		padding-left: 15rpx;
		text-align: center;
		display: inline-block;
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
		height: 180rpx;
		line-height: 180rpx;
		text-align: center;
		font-size: 24rpx;
	}

	.pops {
		height: 100rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.pop-btn {
		width: 158rpx;
		height: 66rpx;
		border-radius: 10rpx;
		line-height: 66rpx;
		font-size: 30rpx;
		margin: 0 auto;
		color: #fff;
		text-align: center;
		background: #121212;
	}
</style>
