<template>
	<view class="container">
		<image class='bg' src="../../static/images/my-background.png" mode="">
			<view class='back-page' @click='backFront'>
				<image src="../../static/images/zuo.png" mode=""></image>
			</view>
			<view class="title_index">
				服务器交易
			</view>
			<!-- #ifdef APP-PLUS -->
			<view class='jilu' @click='jilu'>记录</view>
			<!-- #endif -->
			<view class="machine-infomation">
				<image class='machine-img' src="../../static/images/machine-icon.png" mode=""></image>
				<view class='machine-nums'>
					<view class="nums">
						{{ lens }} <text class='machine-txt'> 台</text>
					</view>
					<view class='machine-txt'>数量</view>
				</view>
				<view class='all-trans'>
					<!-- <image class='services_img' src="../../static/images/fuwuqi-tran.png" mode=""></image> -->
				    <view class='tranrecord' @click='jilu'>交易记录</view>
				</view>
			</view>
			<view class="my-content" v-if='flag'>
				<image class='nomachine' src="../../static/images/no-machine.png" mode=""></image>
				<view style='color:#111111;font-size:24rpx;text-align: center;line-height: 95rpx;'>暂无服务器</view>
			</view>
			<view class="my-content" v-else>
				<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
					<view class="s-item" @click="handleSelectRadio(server)" v-for="(server, index) in serverList" :key="index">
						<view :class="'si-radios' + (selected.id === server.id ? ' si-radio-selected' : '')"></view>
						<view class="si-imgs" v-if='server.id==2'>
							<image src="/static/images/fuquqi-one.png" mode="aspectFit" class="si-img"></image>
						</view>
						<view class="si-imgs" v-if='server.id==1'>
							<image src="/static/images/fuwuqi-two.png" mode="aspectFit" class="si-img"></image>
						</view>
						<view class="si-imgs" v-if='server.id==3'>
							<image src="/static/images/fuwuqi-three.png" mode="aspectFit" class="si-img"></image>
						</view>
						<view class="si-info">
							<view class="ii-title">{{ server.name }}</view>
							<view class="ii-other">
								<text class="io-1">总容量<text class='numss' style="color:#F6B506;font-size: 32rpx;">{{ server.hard }}</text><text style="color:#F6B506" >T</text></text>
								<text>合约周期：<text class='numss'>365天</text></text>
							</view>
							<view class="ii-other1">数量：<text class='numss'>{{ server.lens }}</text>台</view>
						</view>
					</view>
				</scroll-view>
				<view class="s-btns">
					<view class="sn-btn sn-zr" @click="btn('1')">转让</view>
					<view class="sn-btn sn-cs" @click="btn('2')">出售</view>
				</view>
			</view>

			<view class="tan" @click="prompt" v-if="verify">
				<image src="../../static/images/tan.png" class="tanh"></image>
				<text class="mill">公司为您添加新的服务器，请确认查收。</text>
			</view>
			<!-- 弹框 -->
			<view class="shade" v-if="sha" @touchmove.stop.prevent="moveHandle">
				<view class="pop">
					<view class="pop-title">您有新的服务器需要验收</view>
					<view class="pops">
						<view class="pop-btn" @click="validation">验证</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import {debounce} from '@/common/utils.js';
	export default {
		data() {
			return {
				flag: true,
				verify: false,
				sha: false,
				selected: {},
				serverList: [],
				numb: [],
				id: '',
				lens: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
			};
		},
		onLoad() {
		    this.selected = {};	
		},
		onShow() {
			var _this = this;
			_this.selected = {};
			uni.request({
				url: this.url + 'usermachine/transferlist/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					console.log(res)
					_this.serverList = res.data.data[1];
					_this.numb = res.data.data[0];
					
					let lens = 0;
					for (let i = 0; i < res.data.data[1].length; i++) {
						let item = res.data.data[1][i];
						lens += item.lens;
					}
					_this.lens = lens;
					if (_this.numb == 0) {
						_this.verify = true;
					} else {
						_this.verify = false;
					}
					if (_this.serverList.length != 0) {
						_this.flag = false;
					}else{
						_this.flag = true;
					}

				}
			});
		},
		methods: {
			backFront() {
				uni.navigateBack({
					delta:1
				})
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			moveHandle: function(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			prompt: function() {
				this.sha = true;
			},
			validation: function() {
				uni.request({
					url: this.url + 'usermachine/machinestatus/',
					method: 'POST',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					success(res) {
						if (res.statusCode == 200) {
							uni.showToast({
								title: '已验证'
							});
						}
					}
				});
				this.sha = false;
				this.verify = false;
			},
			handleSelectRadio(item) {
				if (item.id === this.selected.id) {
					this.selected = {};
				} else {
					this.selected = item;
				}
			},
			linkToTransfer: debounce(
				function(type) {
					var that = this;
					if (!this.selected.id) {
						uni.showToast({
							title: '请选中服务器',
							icon: 'none'
						});
						return false;
					}
					uni.request({
						url: this.url + 'usermachine/transfer/',
						method: 'GET',
						header: {
							Authorization: 'JWT' + ' ' + this.global_.token
						},
						success(res) {
							console.log(res)
							if (res.statusCode == 200) {
								uni.navigateTo({
									url: '../server/server?type=' + type + '&info=' + JSON.stringify(that.selected)
								});
							}
							if (res.statusCode == 400) {
								uni.showToast({
									title: '用户实名认证未通过或未设置资金密码',
									icon: 'none'
								});
							}
							if (res.statusCode == 204) {
								uni.showToast({
									title: '有服务器未验收',
									icon: 'none'
								});
							}
						}
					});
				},
				500,
				true
			),
			btn: function(type) {
		        this.linkToTransfer(type);
			},
			linkToTransfer1: debounce(
				function() {
					uni.navigateTo({
						url: '../record/record'
					});
				},
				500,
				true
			),
			jilu: function() {
				this.linkToTransfer1();
			},
			
		}
	};
</script>

<style>
	page {
		background: #ffffff;
	}

	.bg {
		width: 100%;
		height: 612rpx;
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
		font-size: 26rpx;
		color: #FFFFFF;
		position: fixed;
		top: 74rpx;
		right: 24rpx;
		z-index: 99;
	}

	.machine-infomation {
		width: 100%;
		height: auto;
		position: fixed;
		top: 208rpx;
		padding: 0 48rpx;
		box-sizing: border-box;
	}

	.machine-img {
		width: 108rpx;
		height: 108rpx;
		display: block;
		float: left;
	}

	.machine-nums {
		float: left;
		margin-left: 60rpx;
		color: #FFFFFF;
	}

	.all-trans {
		float: right;
		/* margin-left: 115rpx; */
		color: #FFFFFF;
	}

	.services_img {
		width: 274rpx;
		height: 180rpx;
		display: block;
	}
    .tranrecord{
		width: 158rpx;
		height: 66rpx;
		margin-top:85rpx;
		border-radius: 30rpx;
		line-height: 66rpx;
		font-size: 30rpx;
		color: #fff;
		text-align: center;
		background: rgba(255,255,255,0.5);
	}
	.nums {
		font-size: 48rpx;
		line-height: 50rpx;
		letter-spacing: 8rpx;
		font-size: 60rpx;
	}

	.machine-txt {
		font-size: 24rpx;
		letter-spacing: 4rpx;
	}

	.my-content {
		width: 660rpx;
		height: calc(100% - 448rpx);
		background: rgba(255, 255, 255, 0.9);
		border-radius: 13rpx;
		position: absolute;
		top: 408rpx;
		left: 50%;
		margin-left: -330rpx;
		margin-bottom: 50rpx;
		padding: 36rpx 0 164rpx;
		box-sizing: border-box;
		box-shadow: 0 0 50px 10rpx rgba(0, 0, 0, 0.2);
	}

	.scroll-view {
		width: 640rpx;
		height: 100%;
	}

	.nomachine {
		width: 344rpx;
		height: 252rpx;
		display: block;
		margin: 190rpx auto 0;
	}

	.tan {
		width: 100%;
		height: 54rpx;
		position: absolute;
		top: 142rpx;
		background-color: #FFD1A0;
		z-index: 9;
	}

	.tanh {
		width: 26rpx;
		height: 26rpx;
		display: block;
		padding-left: 42rpx;
		margin-top: 18rpx;
		float: left;
	}

	.mill {
		color: #ffffff;
		line-height: 54rpx;
		font-size: 22rpx;
		padding-left: 15rpx;
		text-align: center;
	}

	.s-item {
		width: 620rpx;
		height: 254rpx;
		margin: 20rpx auto;
		position: relative;
		padding: 10rpx;
		box-sizing: border-box;
		border-bottom: 1px solid #f1f1f1;
	}

	.si-radios {
		width: 52rpx;
		height: 52rpx;
		display: block;
		background-image: url(../../static/images/check_m.png);
		background-size: 52rpx 52rpx;
		z-index: 99;
		position: absolute;
		right: 20rpx;
		bottom: 92rpx;
	}

	.si-radio-selected {
		background-image: url(../../static/images/checked_m.png);
	}

	.s-item::last-child {
		border-bottom: none;
	}

	.si-imgs {
		width: 94rpx;
		height: 204rpx;
		display: block;
		float: left;
		margin-left: 20rpx;
	}

	.si-img {
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		display: initial;
	}

	.si-info {
		float: left;
		margin-left: 68rpx;
	}

	.io-1 {
		margin-right: 20rpx;
	}

	.numss {
		font-family: "myface_medium";
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
		color: #111111;
		font-size: 36rpx;
		font-weight:800;
		margin-top: 20rpx;
	}

	.si-info .ii-other {
		color: #666666;
		font-size: 22rpx;
		margin-top: 30rpx;
	}
	.ii-other1 {
		color: #666666;
		font-size: 26rpx;
		margin-top: 30rpx;
	}
	.s-btns {
		width: 100%;
		height: 154rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.8);
		text-align: center;
		z-index: 1;
		padding-top: 60rpx;
		display: flex;
		justify-content: space-around;
	}

	.s-btns .sn-btn {
		width: 274rpx;
		height: 76rpx;
		line-height: 76rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		border-radius: 38rpx;
		transition: all 0.2s;
	}

	.s-btns .sn-btn:active {
		opacity: 0.8;
	}
 
	.sn-zr {
		background-image: linear-gradient(to right, #0195D2, #26b3d2);
	}

	.sn-cs {

		background-image: linear-gradient(to right, #01c774, #01dda9);
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

	/* .banner {
		width: 100%;
		height: 210rpx;
		display: block;
		background-image: url('../../static/images/ban.png');
		background-size: 750rpx 210rpx;
		position: relative;
		padding-top: 69rpx;
		padding-left: 60rpx;
		box-sizing: border-box;
	} */

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
