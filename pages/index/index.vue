<template>
    <view class="container">
        <view class="height"></view>
        <swiper indicator-dots autoplay interval="3000" circul ar indicator-color="rgda(255 , 255 , 255 , .6)">
            <swiper-item v-for="(item, index) in baner" :key="index"><image class="ttt" @click="some(item.id)" :src="urll+ item.cover_pic"></image></swiper-item>
        </swiper>
        <view class="uni-swiper-msg">
            <view class="uni-swiper-msg-icon"><image class="g" src="../../static/images/notice.png" mode="widthFix"></image></view>
            <swiper class="bgc" autoplay="true" circular="true" interval="5000" vertical:true indicator-dots:false>
                <swiper-item class="fz">
                    <text class="clor">公告：{{ csgo }}</text>
                </swiper-item>
            </swiper>
        </view>
		<view class="quick-button">
			<view class="mymachine " @click="mymachine">
				<view class="right-line"></view>
				<image class='machine-imgs' src="../../static/images/kuangji-index.png" mode=""></image>
				<view class='m-machine'>我的服务器</view>
			</view>
			<view class="mymachine" @click="mycunli">
				<image class='machine-imgs' src="../../static/images/my-cunli.png" mode=""></image>
				<view class='m-machine'>我的存力</view>
			</view>
			<view class="mymachine" @click="machinetrans">
				<image class='machine-imgs' src="../../static/images/my-trans.png" mode=""></image>
				<view class='m-machine'>服务器交易</view>
			</view>
			<view class="mymachine" @click="wallet">
				<image class='machine-imgs' src="../../static/images/qianbao.png" mode=""></image>
				<view class='m-machine'>我的资产</view>
			</view>
		</view>
		<view class="line"></view>
        <view class="hotPool">热销矿池</view>
        <scroll-view class="pools" scroll-x="true">
			<block v-for="(item, index) in pool" :key="index" >
            <view class="listItem" @click='buy(item.cloudid)'>
				<view class="hots">测试</view>
                <!-- <image class="hots" src="../../static/images/hot.png" mode=""></image> -->
                <view class="poolName">{{ item.name }}</view>
                <view class="datess">
                    <view class="area">
                        <view class="dayTrans">
                            {{ item.theory_of_income }}
                            <text class="fil">FIL</text>
                        </view>
                        <view class="txx">日理论收益</view>
                    </view>
                    <view class="area">
                        <view class="dayTrans">
                            {{ item.harduse }}
                            <text class="fil">T</text>
                        </view>
                        <view class="txx">存储能力</view>
                    </view>
                    <view class="area">
                        <view class="dayTrans">
                            {{ item.cloud_hard_disk }}
                            <text class="fil">T</text>
                        </view>
                        <view class="txx">矿池总空间</view>
                    </view>
                    <view class="area">
                        <view class="dayTrans">
                            {{ item.hardfree }}
                            <text class="fil">T</text>
                        </view>
                        <view class="txx">可出售空间</view>
                    </view>
                    <!-- <view :class="n ? 'buy' : 'buy1'" @click="buy(item.cloudid)">立即购买</view> -->
                </view>
            </view>
            </block>
		</scroll-view>
        <view class="line"></view>
        <view class="hotPool">热门资讯</view>
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
            <view class="right"><image class="ig" :src="urll+item.cover_pic"></image></view>
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
import uCharts from '../../common/u-charts.js';
var _self;
var canvaArea = null;
export default {
    data() {
        return {
            scr: true,
            n: true,
            title: '',
            notice: '',
            csgo: '',
            According: false,
            diro: true,
            link: '',
            baner: '',
            version: '',
            remark: '',
            urll: this.urll,
            pool: ''
        };
    },
    onLoad() {
        _self = this;
        _self.global_.token = uni.getStorageSync('token');
        uni.getSystemInfo({
            success: res => {
                //检测当前平台，如果是安卓则启动安卓更新
            }
        });
        uni.request({
            url: this.url + 'home/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
            },
            success(res) {
                // _self.categart = res.data.data.categart
                //字段名字就是categart这里面有三个状态 1  2 4  1是隐藏  24显示 隐藏的是矿机出售
                _self.csgo = res.data.data.notice;
                _self.daern = res.data.data.must;
                if (_self.daern == 1) {
                    _self.diro = false;
                }
                _self.version = res.data.data.version;
				console.log(_self.version)
                _self.andri = uni.getStorageSync('version');
                //这个是当前版本
                //这是个后台获取的版本
                if (_self.andri != _self.version) {
                    //判断当前版本号
                    _self.According = true;
                    //uni.hideTabbar()
                    uni.request({
                        url: _self.url + 'version/',
                        method: 'GET',
                        header: {
                            Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
                        },
                        success: res => {
                            _self.remark = res.data[0].remark;
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
                that.title = res.data;
            }
        });
        uni.request({
            url: this.url + 'cloudinfo/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success: res => {
                that.pool = res.data.data;
            }
        });
    },
    methods: {
		moveHandle:function(e){
			e.preventDefault();
			e.stopPropagation();
		},
        next: function() {
            this.n = false;
        },
        back: function() {
            this.n = true;
        },
        buy: function(item) {
            uni.navigateTo({
                url: '../poolDetails/poolDetails?cloudid=' + item
            });
        },
		wallet: function() {
		    uni.navigateTo({
		        url: '../../my/my-wallet/my-wallet'
		    });
		},
		mymachine: function() {
		    uni.navigateTo({
		        url: '../../my/my-machine/my-machine'
		    });
		},
		mycunli: function() {
		    uni.navigateTo({
		        url: '../../my/power/power'
		    });
		},
		machinetrans: function() {
		    uni.navigateTo({
		        url: '../mill/mill'
		    });
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
                    _self.link = resMz.data[0].link;
                    _self.version = uni.getStorageSync('version');
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
								console.log(downloadApkUrl)
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
			console.log(item)
            var that = this;
            uni.request({
                url: this.url + 'home/rotation/details/' + item + '/',
                method: 'GET',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
					console.log(res)
                    var link = res.data.link;
                    var text_content = res.data.text_content.replace(/=/g, '_');
                    if (link == null||link == "") {
                        uni.setStorageSync('index-banner-content', text_content);
                        uni.navigateTo({
                            url: '../banner/banner'
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
			console.log(item)
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
                    var add_time = ingym.add_time;
                    var title = ingym.title;
                    if (link2 == null||link2 == "") {
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
    background-color: #ffffff;
}
page {
    background-color: #121e2c;
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
.one {
    width: 100%;
    height: 50rpx;
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
.tishi {
    width: 100%;
    height: 109rpx;
    position: absolute;
    top: 805rpx;
    text-align: center;
    color: #ff3333;
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
    color: #ffffff;
}
.clor {
    margin-left: 20rpx;
    font-size: 22rpx;
    line-height: 81rpx;
}
.quick-button{
	width:100%;
	height:207rpx;
	display: flex;
	justify-content: space-between;
}
.mymachine{
	width:25%;
	height:100%;
	/* float: left; */
	position: relative;
}
/* .right-line{
	position: absolute;
	top:74rpx;
	right:0;
	width:2rpx;
	height:70rpx;
	background-color: #182A42;
} */
.machine-imgs{
	width:64rpx;
	height:62rpx;
	display: block;
	margin: 60rpx auto 0;
}
.m-machine{
	text-align: center;
	font-size: 22rpx;
	color:#FFFFFF;
	line-height:80rpx;
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
    margin: 24rpx auto;
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
.hotPool {
    margin-left: 22rpx;
    font-size: 28rpx;
    font-weight: bold;
    color: #ffffff;
    line-height: 80rpx;
}
.line {
    width: 100%;
    height: 16rpx;
    background: #091926;
}

.pools {
    width: auto;
    height: 338rpx;
    overflow: hidden;
    padding: 0 22rpx;
    box-sizing: border-box;
    white-space: nowrap;
}
.listItem {
    width: 330rpx;
    height: 282rpx;
    background: #070e17;
    margin-right: 22rpx;
    position: relative;
    display: inline-block;
	overflow: hidden;
}
.hots {
    width: 88rpx;
    height: 25rpx;
	text-align: center;
	line-height: 25rpx;
	font-size: 10rpx;
	color:#d31507;
	background-color: #fab735;
	transform:rotate(-45deg);
	overflow: hidden;
    /* display: block; */
    position: absolute;
    top: 12rpx;
    left: -22rpx;
}
.poolName {
    text-align: center;
    line-height: 67rpx;
    color: #ffffff;
}
.datess {
    width: 100%;
    height: 222rpx;
    background: #182a42;
    padding: 10rpx;
    box-sizing: border-box;
}
.area {
    width: 136rpx;
    height: 100rpx;
    margin-right: 15rpx;
    float: left;
    position: relative;
}
.datess > .area:nth-child(odd):after {
    content: '';
    width: 3rpx;
    height: 61rpx;
    background: #091926;
    position: absolute;
    right: -10rpx;
    top: 20rpx;
}
.dayTrans {
    text-align: center;
    color: #ffffff;
    font-size: 34rpx;
    font-weight: bold;
}
.fil {
    font-size: 20rpx;
    font-weight: 200;
}
.txx {
    text-align: center;
    color: #8796aa;
    font-size: 20rpx;
}
.buy {
    clear: both;
    width: 302rpx;
    height: 48rpx;
    background: #41bec9;
    color: #ffffff;
    text-align: center;
    font-size: 24rpx;
    line-height: 48rpx;
    border-radius: 5rpx;
}

.buy1 {
    clear: both;
    width: 302rpx;
    height: 48rpx;
    background: rgba(65, 190, 201, 0.5);
    color: #ffffff;
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
    color: #ffffff;
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
    width: 100%;
    height: 81rpx;
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
    font-size: 20rpx;
    color: #8796aa;
    margin-top: 14rpx;
}
.bobx {
    margin-top: 10rpx;
}
.yj {
    width: 29rpx;
    margin-top: 20rpx;
    height: 18rpx;
    float: left;
    margin-left: 40rpx;
}
.yjj {
    font-size: 20rpx;
    float: left;
    color: #8796aa;
    margin-top: 14rpx;
    margin-left: 14rpx;
}

/*  #endif */
</style>
