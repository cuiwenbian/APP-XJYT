<template>
	<view class="container">
		<view class="boxe">
			<dyDatePicker timeType="month" :value="mydate" @getData="DateChang" :placeholder="mydate"></dyDatePicker>
			<view class="tet">
				<text class="text">转让：{{transfer}}台</text>
				<text>出售：{{sallnum}}台</text>
			</view>
		</view>
		<view  class='recordTrade' v-if="fll">
			<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
			<view class="vox" v-for="(recode, index) in time" :key="index">
				<image :src="'../../static/images/'+(recode.status == 1 ?'zc':'zr')+'.png'" mode=""></image>
				<!-- <image else src="../../static/images/zc.png" mode=""></image> -->
				<view class="box">
					<view class="well">
					<text class="well">{{recode.status == 1 ? '转让' : '出售'}}给{{ recode.name }}</text>
					</view>
					<text class="well1">{{ recode.time | formatDate }}
					<text class="weel">{{ recode.status == 3 ? '未验收':'已验收'}}</text>
					</text>
				</view>
				<view class="box1">{{ recode.num }}台</view>
			</view>
			</scroll-view>
		</view>

		<!-- <view class="solid"></view> -->
		<!--        <view class="box">A
                    <image src="../../components/static/wyg-bottom-tab/img/wel-on.png" mode=""></image>
                    <text class="item">转让-转让给15035858525</text>
                    <view class="item1">
                        4-17 2:222 玉米矿池
                    </view>
                </view>
         -->
		<!--        <view class="box">
                    <text class="cool1">手机号</text>
                    <text class="cool">数量</text>
                    <text class="cool">时间</text>
                    <text class="cool2">状态</text>
                </view>
                <view class='ll' v-for="(recode, index) in time" :key="index" v-if="fll">
                    <text class="time1">{{ recode.name }}</text>
                    <text class="time3">{{ recode.num }}台</text>
                    <text class="time4">{{ recode.time }}</text>
                    <text class="time2">{{ recode.status == '1' || '2' ? '已验收' : recode.status == '3' || '0' ? '未验收' : '未知' }}</text>
                </view> -->

		<view v-else class="aaa">
			<image class="transfer" src="../../static/images/no-machine.png" mode=""></image>
			<view class="nomachine">暂无记录</view>
		</view>
	</view>
</template>

<script>
	import dyDatePicker from '../../common/dy-Data.vue'
	export default {
		data() {
			return {
				time: '',
				fll: true,
				date1: '',
				mydate: '',
				mydate1: '',
				times: '',
				transfer: '0',
				sallnum: '0',
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
			};
		},
		components: {
			dyDatePicker
		},
		onLoad() {
			var that = this;
			var date = new Date;
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			month = (month < 10 ? "0" + month : month);
			that.mydate = (year.toString() + '年' + month.toString() + '月');
			that.mydate1 = (year.toString() + '-' + month.toString());
			console.log(that.mydate1)
			var that = this;
			uni.request({
				url: this.url + 'usermachine/recode/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				},
				data: {
					month: that.mydate1
				},
				success(res) {
					console.log(res)
					that.time = res.data.data;
					that.sallnum = res.data.sallnum
					that.transfer = res.data.transfer
					that.time = that.time.reverse();
					console.log(res.data)
					if (that.time.length == 0) {
						that.fll = false;
					} else {
						that.fll = true;
					}
				}
			});
		},
		methods: {
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			DateChang(e) {
				var that = this;
				that.mydate = e
				uni.request({
					url: this.url + 'usermachine/recode',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					data: {
						month: e
					},
					success(res) {
						console.log(res.data.sallnum)
						console.log(res.data.transfer)
						that.time = res.data.data;
						that.times = res.data
						that.sallnum = res.data.sallnum
						that.transfer = res.data.transfer
						that.time = that.time.reverse();
						console.log(res.data)
						if (that.time.length == 0) {
							that.fll = false;
						} else {
							that.fll = true;
						}
					}
				});
			}
		},
		filters: {
			formatDate(n) {
				n = n.substr(5, 11)
				n = n.replace('-', '月').replace(' ', '日 ')
				return n
			}
		},
		
		
	};
</script>

<style>
	.boxe {
		width: 100%;
		height: 200rpx;
		padding-top: 60rpx;
		box-sizing: border-box;
		position: relative;
		position: fixed;
		top:0;
		padding-left: 48rpx;
		background-color: #f6f6f6;
	}

	.tet {
		color: #A1A1A1;
		padding-top: 20rpx;
		font-size: 28rpx;
	}

	.text {
		padding-left: 40rpx;
		padding-right: 40rpx;
	}
    .recordTrade{
    	width: 100%;
    	height: calc(100% - 200rpx);
    	position: fixed;
    	bottom:0;
    }
    .scroll-view {
    	width: 100%;
    	height: 100%;
    }
	.vox {
		width: 96%;
		height: 160rpx;
		padding-top: 28rpx;
		padding-left: 16rpx;
		margin-left: 18rpx;
		border-bottom: 1rpx solid #F2F2F2;
		/* background-color: #000000; */
	}

	.vox image {
		width: 90rpx;
		height: 90rpx;
		float: left;
	}

	.box {
		float: left;
		margin-left: 20rpx;
		line-height: 50rpx;
	}

	.box1 {
		float: right;
		line-height: 120rpx;
		padding-right: 38rpx;
		font-size: 40rpx;
		font-family: DIN;
		font-weight: bold;
	}

	.solid {
		width: 78%;
		margin-left: 144rpx;
	}

	.well {
		font-size: 30rpx;
		margin-right: 20rpx;
		font-family: PingFang SC;
		font-weight: bold;
	}
	.wells{
		font-size: 30rpx;
		margin-right: 20rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color:#007AFF;
	}

	.well1 {
		font-size: 20rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(177, 177, 177, 1);
}
	.well3 {
		font-size: 20rpx;
		font-family: PingFang SC;
		padding-left: 60rpx;
		font-weight: bold;
		color: rgba(177, 177, 177, 1);
	}
	.weel {
		margin-left: 20rpx;
	}
	.aaa {
		padding-top: 400rpx;
	}

	.transfer {
		display: block;
		margin: 0 auto;
		width: 300rpx;
		height: 260rpx;
	}

	.nomachine {
		padding-top: 20rpx;
		text-align: center;
	}
</style>
