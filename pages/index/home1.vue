<template>
	<view class="container">
		<uni-nav-bar backgroundImage="url('../../static/images/shang.jpg')" color="#ffffff"  fixed="true" :title="xjyt"></uni-nav-bar>
		<!-- <uni-nav-bar backgroundImage='url("../../static/images/shang.jpg")' color="#ffffff"  fixed="true" :title="xjyt"></uni-nav-bar> -->
		<view class="back_index">
			<image src="../../static/images/top_index.jpg" mode=""></image>
			<bw-swiper style="width:100%;height:300rpx;position: absolute;top:96rpx;"></bw-swiper>
			<!-- <swiper :indicator-dots='dots' easing-function='easeInCubic' autoplay interval="3000" previous-margin='20rpx' next-margin='20rpx' circul ar indicator-color="rgda(255 , 255 , 255 , .6)"
			 :circular='circular'>
				<swiper-item v-for="(item, index) in baner" :key="index">
					<image class="ttt" @click="some(item.id)" :src=" item.cover_pic"></image>
				</swiper-item>
			</swiper> -->
		</view>
		<!-- 快捷入口 -->
		<view class="quick-button">
			<view class="mymachine" @click="wallet">
				<image class="machine-imgs" src="../../static/images/Z2.png" mode=""></image>
				<view class="m-machine">我的资产</view>
			</view>
			<view class="mymachine" @click="mycunli">
				<image class="machine-imgs" src="../../static/images/Z3.png" mode=""></image>
				<view class="m-machine">我的存力</view>
			</view>
			<view class="mymachine " @click="mymachine">
				<view class="right-line"></view>
				<image class="machine-imgs" src="../../static/images/Z4.png" mode=""></image>
				<view class="m-machine">我的服务器</view>
			</view>
			<view class="mymachine" @click="help">
				<image class="machine-imgs" src="../../static/images/Z1.png" mode=""></image>
				<view class="m-machine">帮助中心</view>
			</view>

		</view>
		<!-- 公告 -->
		<view class="notice-swiper-msg">
			<image class="notice-tip" src="../../static/images/notice_tip.png" mode="widthFix"></image>
			<image class="notice-icon-g" src="../../static/images/notice.png" mode="widthFix"></image>
			<view class="notice-wrap">
				<view class='notice-tit'>
					<text>最新公告</text>
					<image src="../../static/images/notice_icon.png" mode=""></image>
				</view>
				<anNoticeBar color='#768699' bgColor='rgba(255,255,255,0)' switchTime=3 @go='go'></anNoticeBar>
			</view>
		</view>
		<view class="hotPool">热销存储中心</view>
		<scroll-view class="pools" scroll-x="true">
			<!-- <block v-for="(item, index) in pool" :key="index"> -->
			<view class="listItem" v-for="(item, index) in pool" :key="index">
				<view @click="buy(item)">
					<image class='bap' lazy-load='true' src="../../static/images/pool_background.png" mode="aspectFill"></image>
					<view class='list_border_red' :style="{'borderColor':item.laber==1?'rgba(255, 51, 75, 0.41)':item.laber==2?'rgba(50, 108, 239, 0.41)':'rgba(2, 203, 142, 0.41)'}">
						<view class="hots">
							<image mode='widthFix' style='top:6rpx' :src="'../../static/assets/icon'+item.laber+'.png'"></image>
							<view class="hh">{{item.laber==1?'售罄':item.laber==2?'测试中':'储备中'}}</view>
						</view>
						<!-- <image v-show='item.laber==1' class="hots" src="../../static/images/hot1.png" mode="">
							<view v-show='item.laber==1' class='hh'>售罄</view>
						</image>
						<image v-show='item.laber==2' class="hots" src="../../static/assets/icon.svg" mode="">
							<view v-show='item.laber==2' class='hh'>测试</view>
						</image>
						<image v-show='item.laber==3' class="hots" src="../../static/images/hot.png" mode="">
							<view v-show='item.laber==3' class='hh'>储备中</view>
						</image> -->
						<view class="poolName">{{ item.name }}</view>
						<view class="datess">
							<view class="area">
								<view class="dayTrans">
									{{ item.theory_earnings }}
									<text class="fil">FIL/T</text>
								</view>
								<view class="txx">日理论收益</view>
							</view>
							<view class="area">
								<view class="dayTrans">
									{{ item.harduse }}
									<text class="fil">T</text>
								</view>
								<view class="txx">有效存力</view>
							</view>
							<view class="area">
								<view class="dayTrans">
									{{ item.info }}
									<text class="fil">T</text>
								</view>
								<view class="txx">存力</view>
							</view>
							<view class="area">
								<view class="dayTrans">
									{{ item.hashrate }}
									<text class="fil">T</text>
								</view>
								<view class="txx">可出售空间</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- </block> -->
		</scroll-view>
		<view class="hotPool">热门资讯<text class='more' @click="moreNews">更多</text></view>
		<view class="bt" @click="information(item.id)" v-for="(item, index) in title" :key="index">
			<view class="left">
				<text class="tex">{{ item.title }}</text>
				<view class="desc">{{ item.add_time }}
				</view>
				<view class="yjj">
					{{ item.essay_describe}}
				</view>
			</view>
			<view class="right">
				<image class="ig" :src=" item.cover_pic"></image>
			</view>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="shade" v-if="According" @touchmove.stop.prevent="moveHandle">
			<image class="pop" src="../../static/images/update.png" mode="">
				<view class="desc1">
					<view class="one">{{ remark }}</view>
				</view>
				<view class="pops">
					<view class="pop-btn quxiao" @click="noupdate">暂不更新</view>
					<view class="pop-btn yess" @click="update">立即升级</view>
				</view>
				<view class="tishi">您的当前版本过低影响使用，请立即更新</view>
			</image>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import bwSwiper from '@/colorui/components/swiper.vue'
	import {
		debounce
	} from '@/common/utils.js';
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
	import anNoticeBar from '@/components/an-notice-bar.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	var _self;
	var canvaArea = null;
	export default {
		data() {
			return {
				xjyt:'星际云通',
				scr: true,
				n: true,
				title: '',
				notice: '',
				link: '',
				baner: '',
				version: '',
				remark: '',
				urll: this.urll,
				pool: '',
				circular: true,
				dots: false,
				coo: '',
				len: ''

			};
		},
		components: {
			uniNoticeBar,
			anNoticeBar,
			bwSwiper,
			uniNavBar
		},
		mounted() {
			var that = this;

			that.global_.token = uni.getStorageSync('token');

			// uni.request({
			// 	url: this.url + 'home/',
			// 	method: 'GET',
			// 	header: {
			// 		Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
			// 	},
			// 	success(res) {
			// 		console.log(res);
			// 		that.csgo = res.data;
			// 		that.len = res.data.length;
			// 		console.log(that.csgo)

			// 	}
			// });
			//轮播图接口
			// uni.request({
			// 	url: this.url + 'home/rotation/',
			// 	method: 'GET',
			// 	header: {
			// 		Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
			// 	},
			// 	success(res) {
			// 		console.log(res);
			// 		that.baner = res.data;
			// 	}
			// });
			//新闻接口
			uni.request({
				url: this.url + 'home/news/',
				method: 'GET',
				success: res => {
					console.log(res);
					that.title = res.data.slice(-2);
				}
			});
			//存储中心接口
			uni.request({
				url: this.url + 'cloudinfos/',
				method: 'GET',
				success: res => {
					console.log(res);
					that.pool = res.data.message;
				}
			});
		},
		methods: {
			next: function() {
				this.n = false;
			},
			back: function() {
				this.n = true;
			},
			help: function() {
				uni.showToast({
					title: '暂未开放',
					icon: 'none',
					duration: 2000
				});
			},
			linkToTransfer5: debounce(
				function(item) {
					var d = JSON.stringify(item)
					uni.navigateTo({
						url: '../poolDetails/poolDetails?data=' + d
					});
				},
				500,
				true
			),
			buy: function(item) {
				this.linkToTransfer5(item);
			},
			linkToTransfer3: debounce(
				function() {
					if (this.global_.token) {
						uni.navigateTo({
							url: '../../my/my-wallet/my-wallet'
						});
					} else {
						uni.showToast({
							title: '您还没有登录',
							icon: 'none',
							duration: 2000
						})
					}
				},
				500,
				true
			),
			wallet: function() {
				this.linkToTransfer3();
			},
			linkToTransfer: debounce(
				function() {
					if (this.global_.token) {
						uni.navigateTo({
							url: '../../my/my-machine/my-machine'
						});
					} else {
						uni.showToast({
							title: '您还没有登录',
							icon: 'none',
							duration: 2000
						})
					}
				},
				500,
				true
			),
			mymachine: function() {
				this.linkToTransfer();
			},
			linkToTransfer1: debounce(
				function() {
					if (this.global_.token) {
						uni.navigateTo({
							url: '../../my/power/power'
						});
					} else {
						uni.showToast({
							title: '您还没有登录',
							icon: 'none',
							duration: 2000
						})
					}
				},
				500,
				true
			),
			mycunli: function() {
				this.linkToTransfer1();
			},


			linkToTransfer9: debounce(
				function(item) {
					console.log(item);
					uni.request({
						url: this.url + 'home/news/details/' + item + '/',
						method: 'PUT',
						success: res => {
							var ingym = res.data.data;
							this.coo = ingym.text_content;
							var link2 = ingym.link;
							var read_volume = ingym.read_volume;
							var text_content2 = ingym.text_content.replace(/=/g, '_');
							var add_time = ingym.add_time;
							var title = ingym.title;
							if (link2 == null || link2 == '') {
								uni.navigateTo({
									url: '../banner2/banner2?volume=' + read_volume + '&cont=' + encodeURIComponent(text_content2) + '&add=' +
										add_time + '&title=' + title
								});
							} else {
								uni.navigateTo({
									url: `../web2/web2?url=${link2}`
								});
							}
						}
					});
				},
				500,
				true
			),
			information: function(item) {
				this.linkToTransfer9(item);
			},
			moreNews: function() {
				this.linkToTransfer2();
			},
			linkToTransfer2: debounce(
				function() {
					uni.navigateTo({
						url: '../moreNews/moreNews'
					});
				},
				500,
				true
			),
			go: function(e) {
				console.log(e)
				var id = parseInt(e)
				uni.request({
					url: this.url + 'home/userhome/details/' + id + '/',
					method: 'GET',
					success(res) {
						console.log(res);
						var text_content2 = res.data.text_content.replace(/=/g, '_');
						if (res.statusCode == 200) {
							uni.navigateTo({
								url: '../banner3/banner3?volume=' + res.data.read_volume + '&cont=' + encodeURIComponent(text_content2) +
									'&add=' +
									res.data.add_time + '&title=' + res.data.title
							});
						}
					}
				});
			},
		}
	};
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */
	@import url('../../common/uni.css');

	page {
		background-color: #F8F8F8;
		padding-bottom: 2.9rem;
		box-sizing: border-box;
	}

	.back_index {
		width: 100%;
		height: 300rpx;
		position: relative;
	}

	.back_index image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.back_index>.title_index {
		height: 68rpx;
		width: 100%;
		text-align: center;
		line-height: 68rpx;
		font-size: 36rpx;
		position: absolute;
		top: 96rpx;
		color: #ffffff;
		z-index: 9;
	}

	/* .back_index>swiper {
		width: 660rpx;
		height: 360rpx;
		position: absolute;
		top: 180rpx;
		left: 50%;
		margin-left: -330rpx;
	}

	swiper-item .ttt {
		width: 100%;
		height: 100%;
		border-radius: 20rpx;
	} */


	/* 快速入口 */
	.quick-button {
		width: 100%;
		height: 255rpx;
		margin-top: 90rpx;
		padding: 0 48rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;

	}

	.mymachine {
		width: 25%;
		height: 100%;
		position: relative;
	}

	.machine-imgs {
		width: 116rpx;
		height: 116rpx;
		display: block;
		margin: 30rpx auto 0;
	}

	.m-machine {
		text-align: center;
		font-size: 28rpx;
		color: #9DA8B5;
		line-height: 80rpx;
	}

	/* 公告 */
	.notice-swiper-msg {
		display: flex;
		align-items: center;
		width: 656rpx;
		height: 114rpx;
		margin: 10rpx auto 40rpx;
		background-image: linear-gradient(to right, #F9F9F8, #FFFFFF);
		border-radius: 12rpx;
		position: relative;
		box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
		border: 1px solid #f2f2f2;
	}

	.notice-tip {
		width: 42rpx;
		height: 42rpx;
		display: block;
		position: absolute;
		top: 20rpx;
		right: 20rpx;
	}

	.notice-icon-g {
		width: 78rpx;
		height: 82rpx;
		margin-left: 14rpx;
		flex-shrink: 0;
	}

	.notice-wrap {
		flex: 1;
		width: 0;
	}

	.notice-tit {
		margin-left: 20rpx;
		line-height: 40rpx;
		overflow: hidden;
	}

	.notice-tit text {
		display: inline-block;
		float: left;
		font-size: 30rpx;
		font-weight: bold;
		color: #111111;
	}

	.notice-tit image {
		width: 18rpx;
		height: 18rpx;
		margin-left: 20rpx;
		margin-top: 15rpx;
		float: left;
	}

	.notice-content {
		width: 460rpx;
		height: 40rpx;
		line-height: 40rpx;
		margin-left: 20rpx;
		color: #768699;
		font-size: 20rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal !important;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}


	/* 热销存储中心 */
	.hotPool {
		width: 90%;
		height: 80rpx;
		margin-left: 48rpx;
		font-size: 22px;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
		color: #111111;
		line-height: 80rpx;
		overflow: hidden;
	}

	.more {
		color: #111111;
		font-size: 12.5px;
		float: right;
		margin-right: 48rpx;
		line-height: 80rpx;
	}

	.pools {
		width: auto;
		height: 375rpx;
		margin-top: 30rpx;
		margin-bottom: 50rpx;
		padding-left: 48rpx;
		box-sizing: border-box;
		white-space: nowrap;
		position: relative;
	}


	.listItem {
		width: 285rpx;
		height: 365rpx;
		background-color: #FFFFFF;
		border-radius: 6rpx;
		margin-right: 27rpx;
		position: relative;
		display: inline-block;
		overflow: hidden;
		z-index: 99;
		box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.2);
	}

	.bap {
		width: 212rpx;
		height: 266rpx;
		display: block;
		overflow: hidden;
		margin: 8rpx auto;
		opacity: 0.5;
		position: absolute;
		top: 0;
		left: 0rpx;
	}

	.list_border_red {
		width: 270rpx;
		height: 350rpx;
		margin: 7rpx auto;
		border: 0.6rpx solid rgba(255, 51, 75, 0.41);
		border-radius: 6rpx;
	}

	.list_border_blue {
		width: 212rpx;
		height: 288rpx;
		margin: 7rpx auto;
		border: 0.6rpx solid #326CEF;
		border-radius: 6rpx;
	}

	.list_border_green {
		width: 212rpx;
		height: 288rpx;
		margin: 7rpx auto;
		border: 0.6rpx solid #02CB8E;
		border-radius: 6rpx;
	}

	.hots {
		width: 100rpx;
		height: 40rpx;
		position: absolute;
		top: 10rpx;
		right: 0;
		background-size: 100%;
	}

	.hh {
		width: 100rpx;
		height: 40rpx;
		color: #FFFFFF;
		font-size: 20rpx;
		line-height: 40rpx;
		text-align: center;
		position: absolute;
		top: 10rpx;
		right: 0;
	}

	.poolName {
		height: 29rpx;
		text-align: left;
		margin-top: 18rpx;
		text-indent: 0.3em;
		line-height: 29rpx;
		font-size: 30rpx;
		font-weight: 600;
		color: #111111;
	}

	.datess {
		width: 100%;
		height: 163rpx;
		margin-top: 70rpx;

	}

	.area {
		width: 50%;
		margin-bottom: 20rpx;
		padding: 0 12rpx;
		box-sizing: border-box;
		/* height: 100rpx; */
		float: left;
		position: relative;
	}


	.dayTrans {
		height: 26rpx;
		text-align: left;
		color: #111111;
		font-weight: 500;
		font-size: 35rpx;
		font-family: 'myface_bold';
	}

	.fil {
		font-size: 17rpx;
		font-weight: 200;
		margin-left: 5rpx;
	}

	.txx {
		height: 23px;
		margin-top: 16rpx;
		text-align: left;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(17, 17, 17, 1);
		opacity: 0.34;
	}

	/* 热门资讯 */
	.bt {
		width: 660rpx;
		height: 250rpx;
		margin: 32rpx auto;
		border-radius: 26rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 50rpx -5rpx rgba(0, 0, 0, 0.15);
	}

	.left {
		float: left;
		width: 65%;
	}

	.tex {
		margin-left: 30rpx;
		font-size: 30rpx;
		margin-top: 16rpx;
		line-height: 50rpx;
		color: #111111;
		box-sizing: border-box;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal !important;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.desc {
		margin-left: 30rpx;
		margin-top: 8rpx;
		font-size: 24rpx;
		color: #111111;
		opacity: 0.24;
		line-height: 35rpx;
	}

	.yjj {
		margin-left: 30rpx;
		margin-top: 8rpx;
		font-size: 24rpx;
		color: #111111;
		opacity: 0.72;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal !important;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.right {
		float: right;
	}

	.ig {
		width: 164rpx;
		height: 200rpx;
		margin-top: 16rpx;
		margin-right: 14rpx;
		border-radius: 6rpx;
	}

	/*  #endif */
</style>
