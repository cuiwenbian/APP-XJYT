<template>
	<view class="container">
		<swiper indicator-dots autoplay interval="3000" circular indicator-color="rgda(255 , 255 , 255 , .6)">
			<swiper-item v-for="(item, index) in baner" :key="index">
				<image class="ttt" @click="some(item.id)" :src="'https://t.api.ipcn.xyz/media/' + item.cover_pic"></image>
			</swiper-item>
		</swiper>
		<view class="uni-swiper-msg">
			<view class="uni-swiper-msg-icon"><image class="g" src="../../static/images/notice.png" mode="widthFix"></image></view>
			<swiper class="bgc" autoplay="true" circular="true" interval="5000" vertical:true indicator-dots:false>
				<swiper-item class="fz" v-for="(item, index) in csgo" :key="index">
					<text class="clor">{{ item.notice }}</text>
				</swiper-item>
			</swiper>
		</view>
		<view class="borx">
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
		</view>
		<view class="Small"><text class="te">热门资讯</text></view>
		<view class="bt" @click="information(item.id)" v-for="(item, index) in title" :key="index">
			<view class="left">
				<text class="tex">{{ item.title }}</text>
				<view class="desc">
					<text class="yu">{{ item.add_time }}</text>
					<image class="yj" src="../../static/images/eye.png"></image>
					<view class="yjj">{{ item.read_volume }}人看过</view>
				</view>
			</view>
			<view class="right"><image class="ig" :src="'https://t.api.ipcn.xyz/media/' + item.cover_pic"></image></view>
			<view class="b"></view>
		</view>
		<view class="shade">
			<view class="pop">
				<view class='close' style='width:100%;'>
					<image class="close" src="../../static/images/close.png" mode="" @click="quit"></image>
				</view>
				<view class="desc">
					描述dsfs反对过分放大V非得让购打发打发·额说的是那件粉润和你你说你等甲方承诺的时间
					都扫码率方面V客门口某吃饭开始大门口房等果果V法人的官方大哥VV地方svgV
				</view>
				<button class='new now' @click='update'>立即升级</button>
				<button class='new'>暂不更新</button>
			</view>
		</view>
	</view>
</template>

<script>
import uCharts from '../../common/u-charts.js';
import appUpdate from '../../common/appUpdate.js';
var _self;
var canvaArea = null;
export default {
	data() {
		return {
			Todayprice: '',
			yesterdayprice: '',
			yesterday: '',
			seven_profit: '',
			title: '',
			total_profit: '',
			cWidth: '',
			cHeight: '',
			pixelRatio: 1,
			notice: '',
			csgo: '',
			time: [],
			price: [],
			price_all: [],
			hure: [],
            According:false,
			feck: [],
			usd: '',
            link:'',
			suner: '',
            // version:'',
            // andri:'',
            weak:'',
			baner: '',
			hige: '',
			minn: '',
			version:''
		};
	},
    onLoad(){ 
        // _self = this;
        //  uni.getSystemInfo({  
        //         success:(res) => {  
        //             console.log(res.platform);  
        //                 //检测当前平台，如果是安卓则启动安卓更新  
        //             if(res.platform=="android"){  
        //                 this.download();  
        //            }  
        //         }  
        //     })  
        
        // uni.request({
        // 	url:'http://192.168.1.208:8000/api/v1.1.0/home/',
        // 	method: 'GET',
        // 	header: {
        // 		Authorization: 'JWT' + ' ' + this.global_.token
        // 	},
        // 	success(res) { 
        //         console.log(res)
        //         _self.version = res.data.data.version
        //         _self.andri = uni.getStorageSync('version')
        //         console.log(_self.andri)
        //         console.log(_self.version)
        //         //这个是当前版本
        //         //这是个后台获取的版本
        //         if(_self.andri != _self.version) {
        //             //判断当前版本号
        //             uni.request({
        //                 url: 'http://192.168.1.208:8000/api/v1.1.0/version/',
        //                 method: 'GET',
        //                 header: {
        //                 	Authorization: 'JWT' + ' ' + _self.global_.token
        //                 },
        //                 success: res => {
        //                     console.log(res)
        //                     _self.weak = res.data
        //                     _self.link = _self.weak[0].link
        //                 },
        //             });
        //             _self.According = true;
        //         }
        // 		var csgo = res.data;
        // 		_self.csgo = csgo;
        // 	}
        // });
    },
	onShow() {
		_self = this;
		var that = this;
		this.cWidth = uni.upx2px(750);
		this.cHeight = uni.upx2px(550);
		_self.getServerData();
		uni.request({
			url: this.url + 'home/rotation/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success(res) {
				_self.baner = res.data;
			}
		});
		uni.request({
			url: this.url + '/home/news/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success: res => {
				
				that.title = res.data;
			}
		});
	 
		                
		
	},
	methods: {
		quit(){
			plus.runtime.quit();  //退出应用
		},
		update(){
			var _self=this;
			uni.request({
					//请求地址，设置为自己的服务器链接
			        url:'http://192.168.1.208:8000/api/v1.1.0/home/',
			        method: 'GET',
			        header: {
			           Authorization: 'JWT' + ' ' + this.global_.token
			        },  
			        success: resMz => {
						var server_version = resMz.data.data.version;
						console.log(server_version)
						_self.version = uni.getStorageSync('version')
						console.log(_self.version)
						_self.checkVersionToLoadUpdate(server_version, _self.version);
						//var currTimeStamp = resMz.data.data.timestamp;
						// 判断缓存时间
						// uni.getStorage({
						// 	key: 'tip_version_update_time',
						// 	success: function (res) {
						// 		var lastTimeStamp = res.data;
						// 		//定义提醒的时间间隔，避免烦人的一直提示，一个小时：3600；一天：86400
						// 		var tipTimeLength = 3600;
						// 		if((lastTimeStamp+tipTimeLength) > currTimeStamp){
						// 			//避免多次提醒，不要更新
						// 			console.log("避免多次提醒，不要更新");
						// 		}else{
						// 			//重新设置时间戳
						// 			_this.setStorageForAppVersion(currTimeStamp);
						// 			//进行版本型号的比对 以及下载更新请求
						// 			_this.checkVersionToLoadUpdate(server_version, _this.version);
						// 		}
						// 	},
						// 	fail:function(res){
						// 		_this.setStorageForAppVersion(currTimeStamp);
						// 	}
						// });
			        },  
			        fail: () => {},  
			        complete: () => {}  
			    });  
			},  
			/**
			 * //设置应用版本号对应的缓存信息
			 * @param {Object} currTimeStamp 当前获取的时间戳
			 */
			// setStorageForAppVersion:function(currTimeStamp){
			// 	uni.setStorage({
			// 		key: 'tip_version_update_time',
			// 		data: currTimeStamp,
			// 		success: function () {
			// 			console.log('setStorage-success');
			// 		}
			// 	});
			// },
			/**
			 * 进行版本型号的比对 以及下载更新请求
			 * @param {Object} server_version 服务器最新 应用版本号
			 * @param {Object} curr_version 当前应用版本号
			 */
			checkVersionToLoadUpdate:function(server_version,curr_version){
				if(server_version != curr_version){
					//TODO 此处判断是否为 WIFI连接状态
				    if(plus.networkinfo.getCurrentType()!=3){
				        uni.showToast({  
				            title: '有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止自动更新，将在您连接WIFI之后重新检测更新',  
				            mask: true,  
				            duration: 5000,
							icon:"none"
				        });  
				        return;  
				    }else{
						uni.showModal({
							title: "版本更新",
							content: '有新的版本发布，检测到您当前为Wifi连接，是否立即进行新版本下载？',
							confirmText:'立即更新',
							cancelText:'稍后进行',
							success: function (res) {
								if (res.confirm) {
									uni.showToast({
										icon:"none",
										mask: true,
									    title: '有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序',  
									    duration: 5000,  
									}); 
									//设置 最新版本apk的下载链接
									var downloadApkUrl = 'https://service.dcloud.net.cn/build/download/7f5d6840-22ef-11ea-931c-55b9610690aa';
									var dtask = plus.downloader.createDownload( downloadApkUrl, {}, function ( d, status ) {  
									        // 下载完成  
									        if ( status == 200 ) {   
									            plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename),{},{},function(error){  
									                uni.showToast({  
									                    title: '安装失败', 
									                    duration: 1500  
									                });  
									            })
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

        information:function (item) {
            uni.request({
                url: this.url +'home/news/details/' + item+'/',
                method: 'PUT',
                header:{
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success: res => {
                    var ingym = res.data.data
                    var link2 = ingym.link
                    var read_volume = ingym.read_volume
                    var text_content2 = ingym.text_content.replace(/=/g, '_');
                    var add_time = ingym.add_time
                    var title = ingym.title
                   
                    if(link2 == null){
                        uni.navigateTo({
                            url: '../banner2/banner2?volume=' + read_volume + '&cont='+ encodeURIComponent(text_content2) + '&add=' + add_time + '&title=' + title
                        });
                    }else {
						uni.navigateTo({
							url: `../web2/web2?url=${link2}`
						});
					}
				}
			});
		},
		getServerData() {
			var that = this;
			var timestamp = Date.parse(new Date()) / 1000;
			var date2 = new Date();
			var date4 = 86400 * 6;
			var date3 = timestamp - date4; //时间差的毫秒数
			uni.request({
				url: `https://gateio.org/json_svr/query/?u=10&c=9137018&type=tvkline&symbol=fil_usdt&from=${date3}&to=${timestamp}&interval=28800`,
				method: 'POST',
				success: function(res) {
					//转换时间戳
					function formatDate(v) {
						let date = new Date(v);
						let y = date.getFullYear();
						let MM = date.getMonth() + 1;
						MM = MM < 10 ? '0' + MM : MM;
						let d = date.getDate();
						d = d < 10 ? '0' + d : d;
						let h = date.getHours();
						h = h < 10 ? '0' + h : h;
						let m = date.getMinutes();
						m = m < 10 ? '0' + m : m;
						return MM + '-' + d;
					}
					var a = res.data.split('\n');
					that.usd = a;
					var time = [];
					var price = [];
					var price_all = [];
					var hure = [];
					var feck = [];
					for (let i = 1; i < that.usd.length - 1; i++) {
						var date = a[i].split(',')[0];
						var t = formatDate(parseInt(date));
						time.push(t);
						that.time = time;
						var day1 = new Date();
						day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
						var s1 = day1.getFullYear() + '-' + (day1.getMonth() + 1) + '-' + day1.getDate();
					}
					for (let j = 1; j < that.usd.length - 1; j++) {
						var data1 = a[j].split(',')[2];

						var cert = parseFloat(data1);
						price.push(cert);
						that.price = price;
					}

					for (let j = 1; j < that.usd.length - 1; j++) {
						var numss = a[j].split(',')[2];
						var certss = parseFloat(numss);
						price_all.push(certss);
						that.price_all = price_all.sort();
						var arrs = that.price_all.sort();
						var mins = arrs[0];   //最小值
						var maxs = arrs[arrs.length - 1];   //最大值
					}
					_self.hige = parseFloat(maxs) + 0.5;
					_self.minn = parseFloat(mins) - 0.5;
					for (let o = 1; o < that.usd.length - 1; o++) {
						var data3 = a[o].split(',')[1];
						var tert = parseFloat(data3);
						feck.push(tert);
						that.feck = feck;
					}
					for (let n = 1; n < that.usd.length - 1; n++) {
						var min = a[n].split(',')[3];
					}
					var now_price = parseFloat(a[a.length - 2].split(',')[4]);
					var yesterday_price = parseFloat(a[a.length - 6].split(',')[4]);
					var incrace = now_price - yesterday_price;
					var yest = incrace.toFixed(2);
					var thi = (now_price / data3 - 1) * 100;
					var t = thi.toFixed(2) + '%';

					

					that.Todayprice = now_price;
					that.yesterday = t;
					that.yesterdayprice = yest;
					if (yest > 0 || t > 0) {
						that.yest = '+' + that.yest;
					}
					let Area = { list: [] };
					//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
					Area.list = that.usd;
					_self.showArea('canvasArea', that.usd);
				}
			});
		},
		showArea(canvasId, chartData) {
			canvaArea = new uCharts({
				$this: _self,
				canvasId: canvasId,
				type: 'area',
				fontSize: 11,
				legend: true,
				dataLabel: false,
				legend: { show: false },
				dataPointShape: false,
				legend: { show: false },
				pixelRatio: _self.pixelRatio,
				categories: _self.time, //数据类别(饼图.圆环图不需要)
				series: [
					//数据列表
					{
						name: 'FIL价格', //数据名称
						data: _self.price, //数据 
						color: '#58f4e3' //颜色,不传入则使用系统默认配色方案
					}
				],
				animation: true,
				xAxis: {
					type: 'grid',
					gridColor: '#333535',
					disableGrid: true,
					gridType: 'solid',
					dashLength: 8,
					axisLineColor: '#333535',
					itemCount: 20,
					labelCount: 8
				},
				yAxis: {
					type: 'grid',
					gridType: 'solid',
					gridColor: '#333535',
					dashLength: 8,
					splitNumber: 4,
					min: _self.minn,
					max: _self.hige,
					axisLineColor: 'red',
					format: val => {
						return val.toFixed(1);
					}
				},
				width: _self.cWidth * _self.pixelRatio,
				height: _self.cHeight * _self.pixelRatio,
				extra: {
					tooltip:{
						gridColor:'#5d5d5d',//辅助线颜色
					},
					area: {
						type: 'straight',
						opacity: 0.2,
						addLine: true,
						width: 1,
						gradient: true
					},
                    toolTip:{
                        gridColor:'#f4645f'
                    }
				}
			});
		},
		touchCandle(e) {
			canvaArea.scrollStart(e);
		},
		moveCandle(e) {
			canvaArea.scroll(e);
		},
		touchEndCandle(e) {
			canvaArea.scrollEnd(e);
			//下面是toolTip事件，如果滚动后不需要显示，可不填写
			canvaArea.showToolTip(e, {
				format: function(item, category) {
					return category + ' ' + item.name + ':' + item.data;
				}
			});
		},
		touchArea(e) {
			canvaArea.showToolTip(e, {
				format: function(item, category) {
					return category + ' ' + item.name + ':' + item.data;
				}
			});
		}
	}
};
</script>

<style>
/* #ifndef APP-PLUS-NVUE */
@import url('../../common/uni.css');
.qiun-charts {
	width: 750upx;
	height: 500upx;
	background-color: #FFFFFF;
}
page {
	background-color: #1c1c1c;
}
.shade{
	width:100%;
	height:100%;
	background: rgba(0,0,0,0.5);
	position: fixed;
	top: 0;
	left:0;
}
.pop{
	width:600rpx;
	height:auto;
	margin:200rpx auto;
	background: #fff;
	border-radius: 20rpx;
	padding:20rpx;
	box-sizing: border-box;
}
.close{
	width:40rpx;
	height:40rpx;
	display: block;
	float:right;
}
.desc{
	line-height: 80rpx;
	font-size: 24rpx;
}
uni-button:after{
	border: none;
}
button{
	width:480rpx;
	height:60rpx;
	line-height: 60rpx;
	border: none;
	border-radius: 20rpx;
	/* font-size: 24rpx; */
}
.new{
	font-size: 24rpx;
	margin-bottom: 20rpx;
}
.now{
	background: #C0C0C0;
	color:#fff;
	margin-top:20rpx;
}
.charts {
	width: 750upx;
	height: 600rpx;
	background: linear-gradient(to bottom, #232323, #343434);
	position: relative;
}
.fz {
	line-height: 40rpx;
}
.bgc {
	height: 40rpx;
	line-height: 40rpx;
	margin-right: 20rpx;
	background-color: #333333;
	font-size: 14rpx;
	margin-left: 20rpx;
	border-radius: 8rpx;
}
.swiper {
	width: 720rpx;
	height: 270rpx;
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
	width: 720rpx;
	height: 300rpx;
	margin-top: 20rpx;
	margin-left: 15rpx;
	border-radius: 8rpx;
}
.g {
	width: 28rpx;
	height: 28rpx;
	float: left;
	margin-left: 23rpx;
	margin-top: 5rpx;
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
.clor {
	color: #f2f2f2;
	float: left;
	height: 90rpx;
	margin-left: 20rpx;
	font-size: 22rpx;
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
}
.left {
	float: left;
	width: 70%;
}
.tex {
	margin-left: 30rpx;
	font-size: 26rpx;
	color: #d7d7d7;
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
	margin-top: 20rpx;
}
.desc {
	padding: 5rpx 40rpx;
	box-sizing: border-box;

	float: left;
}
.yu {
	float: left;
	font-size: 14rpx;
	color: #5a5a5a;
	margin-top: 14rpx;
}
.bobx {
	margin-top: 10rpx;
}
.yj {
	width: 36rpx;
	margin-top: 14rpx;
	height: 26rpx;
	float: left;
	margin-left: 40rpx;
}
.yjj {
	font-size: 14rpx;
	float: left;
	color: #5a5a5a;
	margin-top: 14rpx;
	margin-left: 14rpx;
}
.b {
	display: block;
	width: 96%;
	float: right;
	border-bottom: 1rpx solid #333333;
}
/*  #endif */
</style>
