<template>
	<view class="container">
		<view class='height'></view>
		<swiper indicator-dots autoplay interval="3000" circul                                                                                                                                            ar indicator-color="rgda(255 , 255 , 255 , .6)">
			<swiper-item v-for="(item, index) in baner" :key="index"><image class="ttt" @click="some(item.id)" :src="urll + item.cover_pic"></image></swiper-item>
		</swiper>
		<view class="uni-swiper-msg">
			<view class="uni-swiper-msg-icon"><image class="g" src="../../static/images/notice.png" mode="widthFix"></image></view>
			<swiper class="bgc" autoplay="true" circular="true" interval="5000" vertical:true indicator-dots:false>
				<swiper-item class="fz">
					<text class="clor">公告：{{ csgo }}</text>
				</swiper-item>
			</swiper>
		</view>
		<view class="hotPool">
			热销矿池
		</view>
			<scroll-view class='pools' scroll-x="true">
				<view  class="listItem" v-for="(item, index) in pool" :key="index" >
					<image class="hots" src="../../static/images/hot.png" mode=""></image>
					<view class="poolName">
					  {{item.name}}
					</view>
					<view class="datess">
						<view class='area'>
							<view class="dayTrans">{{item.theory_of_income}}<text class="fil">FIL</text></view>
							<view class="txx">日理论收益</view>
						</view>
						<view class='area'>
							<view class="dayTrans">{{item.cloud_hard_disk}}<text class="fil">T</text></view>
							<view class="txx">存储能力</view>
						</view>
						<view class='area'>
							<view class="dayTrans">{{item.hardfree}}<text class="fil">T</text></view>
							<view class="txx">矿池总空间</view>
						</view>
						<view class='area'>
							<view class="dayTrans">{{item.harduse}}<text class="fil">T</text></view>
							<view class="txx">可出售空间</view>
						</view>
						<view :class="n?'buy':'buy1'" @click="buy(item.cloudid)" >
							立即购买
						</view>
					</view>
				</view>
			</scroll-view>
					
		<view class="line"></view>
		<view class="hotPool">
			热门资讯
		</view>
		<!-- <view class="borx">
			<view class="price">
				<text class="bot">今日币价:</text>
				<text class="Todayprice">{{ Todayprice }}</text>
			</view>
			<view class="price1">
				<text class="bot1">较昨日:</text>
				<text class="yesterdayprice">
					<text class="yesterday">{{ yesterdayprice }}</text>
					{{ yesterday }}
				</text>
			</view>
		</view>
		<view class="gg">
			<div class="charts">
				<view class="qiun-columns">
					<view class="qiun-charts">
						<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchCandle" @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
					</view>
				</view>
			</div>
		</view> -->
		<!-- <view class="Small"><text class="te">热门资讯</text></view> -->
		<view class="bt" @click="information(item.id)" v-for="(item, index) in title" :key="index">
			<!-- <view class="b"></view> -->
			<view class="left">
				<text class="tex">{{ item.title }}</text>
				<view class="desc">
					<text class="yu">{{ item.add_time }}发布</text>
					<image class="yj" src="../../static/images/eye.png"></image>
					<view class="yjj">{{ item.read_volume }}人看过</view>
				</view>
			</view>
			<view class="right"><image class="ig" :src="urll + item.cover_pic"></image></view>
		</view>
		<!-- #ifdef APP-PLUS -->

		<view class="shade" v-if="According">
			<image class="pop" src="../../static/images/update.png" mode="">
				<view class="desc1" >
					<view class='one'>{{remark}}</view>
				</view>
				<view class="pops">
					<view class="pop-btn quxiao" @click="noupdate">暂不更新</view>
					<view class="pop-btn yess" @click="update">立即升级</view>
				</view>
				<view class='tishi'>您的当前版本过低影响使用，请立即更新</view>
			</image>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
// import 'swiper/dist/css/swiper.min.css';
import uCharts from '../../common/u-charts.js';
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.min.css'
var _self;
var canvaArea = null;
export default {
	data() {
		return {
			scr:true,
			n:true,
			// Todayprice: '',
			// yesterdayprice: '',
			// yesterday: '',
			//seven_profit: '',
			title: '',
			//total_profit: '',
			//cWidth: '',
			//cHeight: '',
			//pixelRatio: 1,
			notice: '',
			csgo: '',
			//time: [],
			//price: [],
			//price_all: [],
			//hure: [],
			According: false,
			diro: true,
			//feck: [],
			//usd: '',
			link: '',
			//suner: '',
			//weak: '',
			baner: '',
			//hige: '',
			//minn: '',
			version: '',
			remark: '',
			urll: this.urll,
			pool:''
			
		};
	},
	onLoad() {
		_self = this;
		uni.getSystemInfo({
			success: res => {
				console.log(res.platform);
				//检测当前平台，如果是安卓则启动安卓更新
				//  if(res.platform=="android"){
				//      this.download();
				// }
			}
		});
		uni.request({
			url: this.url + 'home/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success(res) {
				console.log(res);
				_self.csgo = res.data.data.notice;
				console.log(_self.csgo);
				_self.daern = res.data.data.must;
				if (_self.daern == 1) {
					_self.diro = false;
					console.log(_self.diro);
				}
				_self.version = res.data.data.version;
				_self.andri = uni.getStorageSync('version');
				console.log(_self.andri);
				console.log(_self.version);
				//这个是当前版本
				//这是个后台获取的版本
				if (_self.andri != _self.version) {
					//判断当前版本号
					_self.According = true;
					//uni.hideTabbar()
					console.log(_self.According);
					uni.request({
						url: _self.url + 'version/',
						method: 'GET',
						header: {
							Authorization: 'JWT' + ' ' + _self.global_.token
						},
						success: res => {
							console.log(res);
							_self.remark = res.data[0].remark;
							console.log(_self.remark);
						}
					});
				}
			}
		});
	},
	onShow() {
		var that = this;
		uni.request({
			url: this.url + 'home/rotation/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success(res) {
				that.baner = res.data;
			}
		});
		uni.request({
			url: this.url + 'home/news/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success: res => {
                console.log(res)
				that.title = res.data;
				console.log(that.title)
			}
		});
		uni.request({
			url: this.url + 'cloudinfo/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success: res => {
				that.pool=res.data.data
				console.log(res.data.data);
			}
		});
	},
	methods: {
		next:function(){
			this.n=false
		},
		back:function(){
		   this.n=true
		},
		buy:function(item){
			uni.navigateTo({
				url:'../poolDetails/poolDetails?cloudid='+item
			})
		},
		quit() {
			if (this.daern == 1) {
				plus.runtime.quit(); //退出应用
			} else {
				this.According = false;
			}
		},
		update() {
			var _self = this;
			uni.request({
				//请求地址，设置为自己的服务器链接
				url: this.url + 'version/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success: resMz => {
					var server_version = resMz.data[0].version;
					console.log(server_version);
					_self.link = resMz.data[0].link;
					console.log(_self.link);
					_self.version = uni.getStorageSync('version');
					console.log(_self.version);
					_self.checkVersionToLoadUpdate(server_version, _self.version);
				},
				fail: () => {},
				complete: () => {}
			});
		},
		checkVersionToLoadUpdate: function(server_version, curr_version) {
			var that = this;
			if (server_version != curr_version) {
				//TODO 此处判断是否为 WIFI连接状态
				if (plus.networkinfo.getCurrentType() != 3) {
					uni.showToast({
						title: '有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止更新，将在您连接WIFI之后重新检测更新',
						mask: true,
						duration: 5000,
						icon: 'none'
					});
					return;
				} else {
					uni.showModal({
						title: '版本更新',
						content: '有新的版本发布，检测到您当前为Wifi连接，是否立即进行新版本下载？',
						confirmText: '立即更新',
						cancelText: '稍后进行',
						success: function(res) {
							if (res.confirm) {
								uni.showToast({
									icon: 'none',
									mask: true,
									title: '有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序',
									duration: 5000
								});
								//设置 最新版本apk的下载链接
								var downloadApkUrl = that.link;
								console.log(downloadApkUrl);
								var dtask = plus.downloader.createDownload(downloadApkUrl, {}, function(d, status) {
									// 下载完成
									if (status == 200) {
										plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, {}, function(error) {
											uni.showToast({
												title: '安装失败',
												duration: 1500
											});
										});
									} else {
										uni.showToast({
											title: '更新失败',
											duration: 1500
										});
									}
								});
								dtask.start();
							} else if (res.cancel) {
								console.log('稍后更新');
							}
						}
					});
				}
			}
		},
		noupdate() {
			this.According = false;
		},
		some: function(item) {
			var that = this;
			uni.request({
				url: this.url + 'home/rotation/details/' + item + '/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					var link = res.data.link;
					var text_content = res.data.text_content.replace(/=/g, '_');
					if (link == null) {
						uni.navigateTo({
							url: '../banner/banner?content=' + encodeURIComponent(text_content)
						});
					} else {
						uni.navigateTo({
							url: `../web1/web1?url=${link}`
						});
					}
				}
			});
		},

		information: function(item) {
			uni.request({
				url: this.url + 'home/news/details/' + item + '/',
				method: 'PUT',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},   
				success: res => {
					var ingym = res.data.data;
					var link2 = ingym.link;
					var read_volume = ingym.read_volume;
					var text_content2 = ingym.text_content.replace(/=/g, '_');
					console.log(res)
					var add_time = ingym.add_time;
					var title = ingym.title;

					if (link2 == null) {
						uni.navigateTo({
							url: '../banner2/banner2?volume=' + read_volume + '&cont=' + encodeURIComponent(text_content2) + '&add=' + add_time + '&title=' + title
						});
					} else {
						uni.navigateTo({
							url: `../web2/web2?url=${link2}`
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
.qiun-charts {
	width: 750upx;
	height: 500upx;
	background-color: #ffffff;
}
page {
	background-color:#121E2C;
}
.shade {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
}
.pop {
	width: 632rpx;
	height: 769rpx;
	margin: 88rpx auto;
	display: block;
	position: relative;
}
.desc1 {
	width: 570rpx;
	height: 150rpx;
	position: absolute;
	top: 504rpx;
	left: 100rpx;
	font-size: 24rpx;
}
.one{
	width:100%;
	height:50rpx;
	overflow: hidden;
	line-height: 50rpx;
}
.pops {
	width: 570rpx;
	height: 72rpx;
	position: absolute;
	top: 704rpx;
	left: 100rpx;
	display: flex;
	justify-content: space-between;
}
.pop-btn {
	width: 260rpx;
	height: 72rpx;
	border-radius: 5rpx;
	line-height: 72rpx;
	font-size: 26rpx;
	color: #666666;
	background: #cacaca;
	text-align: center;
}
.yess {
	background: #41bec9;
	color: #ffffff;
}
.tishi{
	width:100%;
	height:109rpx;
	position: absolute;
	top:805rpx;
	text-align: center;
	color:#FF3333;
	font-size: 24rpx;
}
.charts {
	width: 750upx;
	height: 600rpx;
	background: linear-gradient(to bottom, #232323, #343434);
	position: relative;
}

.bgc {
	height: 81rpx;
	line-height: 81rpx;
	margin-right: 20rpx;
	font-size: 22rpx;
	margin-left: 20rpx;
	color:#FFFFFF;
}
.clor {
	margin-left: 20rpx;
	font-size: 22rpx;
	line-height: 81rpx;
}
.swiper {
	width: 706rpx;
	height: 300rpx;
	margin: 20rpx auto;
	}
swiper-item image {
	width: 100%;
	height: 100%;
}
.notice {
	height: 60rpx;
}
.ttt {
	width: 706rpx;
	height: 300rpx;
	margin:24rpx auto;
	margin-left: 22rpx;
	border-radius: 8rpx;
}
.g {
	width: 40rpx;
	height: 40rpx;
	float: left;
	margin-left: 22rpx;
	margin-top: 20rpx;
}
.hotPool{
	margin-left:22rpx;
	font-size: 28rpx;
	font-weight: bold;
	color:#FFFFFF;
	line-height:80rpx;
}
.line{
	width:100%;
	height:16rpx;
	background: #091926;
}


.pools{
	width:auto;
	height:438rpx;
	overflow: hidden;
	padding-left:22rpx; 
	box-sizing: border-box;
	white-space: nowrap;
 }
.listItem{
	width:342rpx;
	height:388rpx;
	background: #070E17;
	margin-right:22rpx;
	position: relative;
	display: inline-block;
}
.hots{
	width: 68rpx;
    height:60rpx;
	display: block;
	position: absolute;
	top:0;
	left:0;
}
.poolName{
	text-align: center;
	line-height: 67rpx;
	color: #FFFFFF;
}
.datess{
	width:100%;
	height:321rpx;
	background: #182A42;
	padding:20rpx;
	box-sizing: border-box;
}
.area{
	width:136rpx;
	height:120rpx;
	margin-right:15rpx;
	float: left;
	position: relative;
}
.datess>.area:nth-child(odd):after{
	content:'';
	width:3rpx;
	height:61rpx;
	background: #091926;
	position: absolute;
	right:-10rpx;
	top:20rpx;
}
.dayTrans{
	text-align: center;
	color:#FFFFFF;
	font-size: 34rpx;
	font-weight: bold;
}
.fil{
	font-size: 20rpx;
	font-weight: 200;
}
.txx{
	text-align: center;
	color: #8796AA;
	font-size: 20rpx;
}
.buy{
	clear: both;
	width: 302rpx;
	height:48rpx;
	background: #41BEC9;
	color:#FFFFFF;
	text-align: center;
	font-size: 24rpx;
	line-height: 48rpx;
	border-radius: 5rpx;
}

.buy1{
	clear: both;
	width: 302rpx;
	height:48rpx;
	background: rgba(65, 190, 201, 0.5);
	color:#FFFFFF;
	text-align: center;
	font-size: 24rpx;
	line-height: 48rpx;
	border-radius: 5rpx;
}

.i {
	width: 600rpx;
	height: 40rpx;
	background-color: #bcbcbc;
	margin-left: 52rpx;
	margin-top: 20rpx;
	border-radius: 50rpx;
}
.m {
	float: left;
	padding-top: 17rpx;
	margin-left: 90rpx;
	font-size: 24rpx;
	color: #ffffff;
}

.bor {
	width: 94%;
	margin: 0 auto;
	border: 2rpx solid #cccccc;
}
.borx {
	width: 100%;
	height: 120rpx;
	background: linear-gradient(to bottom, #121212, #232323);
}
.price {
	margin-left: 24rpx;
}
.bot {
	float: left;
	line-height: 120rpx;
	font-size: 26rpx;
	color: #f2f2f2;
}

.Todayprice {
	float: left;
	line-height: 120rpx;
	text-align: center;
	font-size: 38rpx;
	margin-left: 20rpx;
	color: #e3ba85;
}
.price1 {
	float: right;
	margin-right: 24rpx;
}
.bot1 {
	float: left;
	padding-right: 20rpx;
	line-height: 120rpx;
	font-size: 24rpx;
	color: #f2f2f2;
}

.yesterdayprice {
	float: left;
	line-height: 120rpx;
	text-align: center;
	font-size: 38rpx;
	margin-left: 20rpx;
	color: #e3ba85;
}
.yesterday {
	padding-right: 48rpx;
}
.gg {
	width: 100%;
	height: 600rpx;
	background: #007aff;
}
.Small {
	width: 100%;
	height: 80rpx;
	margin-top: 14rpx;
}
.te {
	float: left;
	color: #ffffff;
	line-height: 80rpx;
	font-size: 32rpx;
	width: 96%;
	margin-left: 30rpx;
	border-bottom: 1rpx solid #bcbcbc;
}
.bt {
	width: 100%;
	height: 184rpx;
	border-bottom: 1rpx solid #091926;
}
.left {
	float: left;
	width: 70%;
}
.tex {
	margin-left: 30rpx;
	font-size: 24rpx;
	color: #FFFFFF;
	margin-top: 20rpx;
	margin-left: 24rpx;
	box-sizing: border-box;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	white-space: normal !important;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.right {
	float: right;
}
.ig {
	width: 190rpx;
	height: 127rpx;
	margin-top: 28rpx;
	margin-right: 20rpx;
}
.uni-swiper-msg {
	width:100%;
	height:81rpx;
	margin-top: 24rpx;
	background: #091926;
}
.desc {
	padding: 5rpx 40rpx;
	box-sizing: border-box;

	float: left;
}
.yu {
	float: left;
	font-size: 14rpx;
	color: #8796AA;
	margin-top: 14rpx;
}
.bobx {
	margin-top: 10rpx;
}
.yj {
	width: 27rpx;
	margin-top: 20rpx;
	height: 15rpx;
	float: left;
	margin-left: 40rpx;
}
.yjj {
	font-size: 14rpx;
	float: left;
	color: #8796AA;
	margin-top: 14rpx;
	margin-left: 14rpx;
}

/*  #endif */
</style>
