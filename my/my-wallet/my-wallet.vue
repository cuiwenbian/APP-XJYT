<template>
	<!-- 资产 -->
	<view class="container">
		<view class='ss' style='background: #F2F2F2;padding-top:35rpx;box-sizing: border-box;'>
		<view class="banner">
			<view class="all">
				总资产
			</view>
			<view class='assets'>{{fil_count}}</view>
			<view class="coins" style='display: flex;'>
				<view style='flex:3' class='availed_num'>可用币：{{ber}}</view>
				<view style='flex:3' class='lock_num'>锁定币：{{nuber}}</view>
				<view style='flex:2'>
					<view :class="n?'transer':'transer1'" @click='btn' @touchstart="next" @touchend="back">转账</view>
				</view>
			</view>
		</view>
		<view class='mill' style="display: flex;">
			<view style="margin-left:60rpx;flex:1">
				<view>
					<image src="../static/images/jnlku.png" class="imag" mode=""></image>
				</view>
				<view class="machine machine-left">
					<view class="machine-mill">服务器收益</view>
					<view class="machine-num">{{fil_counts}}</view>
				</view>
			</view>
			
			<view style="flex:1">
				<view>
					<image src="../static/images/cjfr.png" class="img" mode=""></image>
				</view>
				
				<view class="machine">
					<view class="machine-mill">存力收益</view>
					<view class="machine-num">{{trans}}</view>
				</view>
			</view>
		</view>
		</view>
		<view class="haide">
			<view class="navbar">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
				 @click="tabClick(index)">{{ item.text }}</view>
				 <view class="all_mill">
				 	Fil：{{num}}
				 </view>
			</view>
			<view class="list" v-if="tabCurrentIndex === 0">
				<view>
					<!-- <text class="all1">FIL:{{month_profit}}</text> -->
					<div class="item">
						<dyDatePicker :value="date" timeType="month" @getData="DateChange" :placeholder="date"></dyDatePicker>
					</div>
					<view v-if="flag" class="boxx">
						<image class='transfer' src="../../static/images/no-machine.png" mode=""></image>
						<view class="info">没有记录～</view>
					</view>
					<view v-else class="boxx">
						<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
						<view class="list-one" v-for="(item , index) in ention" :key="index">
							<image class='list-icon' src="../../static/images/wallet_mill.png" mode=""></image>
							<view class='list-txt'>
								<view class='list-info'>收款</view>
								<view class='list-time'>{{item.add_time}}</view>
							</view>
							<view class='list-income'>+{{item.num}}</view>
							<view class="l"></view>
						</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<view class="list" v-if="tabCurrentIndex === 1">
				<scroll-view scroll-y='true'>
					<view>
						<text class="all1">FIL:{{month_profit}}</text>
						<div class="item">
							<dyDatePicker timeType="month" :value="date1" @getData="DateChang" :placeholder="date1"></dyDatePicker>
						</div>
						<view v-if="flag" class="boxx">
							<image class='transfer' src="../../static/images/no-machine.png" mode=""></image>
							<view class="info">没有记录～</view>
						</view>
						<view v-else class="boxx">
							<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
							<view class="list-one" v-for="(item , index) in entin" :key="index">
								<image class='list-icon' src="../../static/images/wallet_mill.png" mode=""></image>
								<view class='list-txt'>
									<view class='list-info'>支出</view>
									<view class='list-time'>{{item.add_time}}</view>
								</view>
								<view class='list-income'>-{{item.num}}</view>
								<view class="l"></view>
							</view>
							</scroll-view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import dyDatePicker from '../../common/dy-Date.vue'
	import {
		debounce
	} from '@/common/utils.js'
	export default {
		data() {
			return {
				n: true,
				fil_count: '0.000000',
				fil_counts:'0.00',
				trans:'0.00',
				num: '0.0000',
				ber: '0.00',
				nuber: '0.00',
				fee: '',
				month_profit: '0',
				numm: '',
				tabCurrentIndex: 0,
				add_item: '',
				profit: '0',
				entin: [{}],
				flag: false,
				ention: '',
				//控制下拉列表的显示隐藏，false隐藏、true显示
				index: 0,
				//选择的下拉列表下标
				navList: [{
						state: 0,
						text: '收入'
					},
					{
						state: 1,
						text: '支出'
					}
				],
				date: '本月',
				date1: '本月',
				teran: '',
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
			}
		},
		components: {
			dyDatePicker
		},
		onShow: function(opetions) {
			var that = this
			var data = new Date()
			var text = data.getFullYear('-')
			var txt = data.getMonth() + 1
			var teran = text + '-' + txt
			that.teran = teran
			uni.request({
				url: this.url + "assets/",
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					that.fil_count = res.data.fil_count
					that.fil_counts = parseFloat(res.data.fil_count).toFixed(2)
					that.ber = parseFloat(res.data.availed_num).toFixed(2)
					that.nuber = parseFloat(res.data.locked_num).toFixed(2)
					that.fee = res.data.fee
				}
			})
			// 这是收入记录请求API
			uni.request({
				url: this.url + 'assets/month/profit/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				data: {
					month: teran
				},
				success(res) {
					var seront = res.data.data
					var ention = res.data.data.profit_records.reverse()
					that.ention = ention
					if (ention.length == 0) {
						that.flag = true
					} else {
						that.flag = false
					}
					that.month_profit = seront.month_profit
				}
			})
		},
		methods: {
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			next: function() {
				this.n = false
			},
			back: function() {
				this.n = true
			},
			tabClick: function(index) {
				var that = this
				var data = new Date()
				var text = data.getFullYear('-')
				var txt = data.getMonth() + 1
				var teran = text + '-' + txt
				that.teran = teran
				if (this.tabCurrentIndex === index) {
					return false
				} else {
					that.tabCurrentIndex = index
				}
				if (this.tabCurrentIndex === 0) {
					that.date = "本月";
					uni.request({
						url: this.url + 'assets/month/profit/',
						method: 'GET',
						header: {
							Authorization: 'JWT' + ' ' + this.global_.token
						},
						data: {
							month: teran
						},
						success(res) {
							var seront = res.data.data
							var ention = res.data.data.profit_records.reverse()
							that.ention = ention
							if (ention.length == 0) {
								that.flag = true
							} else {
								that.flag = false
							}
							that.month_profit = seront.month_profit
						}
					})
				}
				if (this.tabCurrentIndex === 1) {
					that.date1 = "本月";
					uni.request({
						url: this.url + 'assets/month/bill/',
						method: 'GET',
						header: {
							Authorization: 'JWT' + ' ' + this.global_.token
						},
						data: {
							month: teran
						},
						success(res) {
							var seron = res.data.data
							var entin = res.data.data.bill_records
							that.entin = entin
							if (entin.length == 0) {
								that.flag = true
							} else {
								that.flag = false
							}
							that.profit = seron.month_bill
						}
					})
				}
			},
			bindChange(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			linkToTransfer: debounce(function() {
				uni.navigateTo({
					url: '../../my/transfer/transfer?bar=' + this.ber + '&fee=' + this.fee,
				})
			}, 500, true),
			btn() {
				this.linkToTransfer()
			},
			btnCoin() {
				uni.showToast({
					title: '此功能暂未开放',
					duration: 2000,
					icon: 'none'
				})
			},
			optionTap(e) {
				var that = this;
				let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
				var time = this.selectData[Index];
				this.index = Index,
					this.selectShow = !this.selectShow
				uni.request({
					url: this.url + 'month/profit/',
					method: 'GET',
					data: {
						month: that.selectData[that.index]
					},
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					success(res) {}
				})
			},
			DateChange(e) {
				var that = this
				that.date = e
				uni.request({
					url: this.url + 'assets/month/profit/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					data: {
						month: e
					},
					success(res) {
						var seront = res.data.data
						var ention = res.data.data.profit_records.reverse()
						console.log(ention)
						that.ention = ention
						if (ention.length == 0) {
							that.flag = true
						} else {
							that.flag = false
						}
						that.month_profit = seront.month_profit
					}
				})
			},
			DateChang(e) {
				var that = this
				this.date1 = e
				uni.request({
					url: this.url + 'assets/month/bill/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					data: {
						month: e
					},
					success(res) {
						var seron = res.data.data
						var entin = res.data.data.bill_records
						that.entin = entin
						if (entin.length == 0) {
							that.flag = true
						} else {
							that.flag = false
						}
						that.profit = seron.month_bill
					}
				})
			},

		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}
   
	.banner {
		width: 706rpx;
		height: 296rpx;
		display: block;
		margin: 0rpx auto 35rpx;
		background-image: url('../../static/images/sirml.png');
		background-size: 706rpx 296rpx;
		position: relative;
		padding-top: 69rpx;
		padding-left: 60rpx;
		box-sizing: border-box;
	}

	.all {
		font-size: 30rpx;
		color: #FFFFFF;
	}

	.imag {
		width: 76rpx;
		height: 76rpx;
		float: left;
		margin-right: 30rpx;
		margin-left:40rpx;
	}

	.img {
		width: 94rpx;
		height: 68rpx;
		float: left;
		margin-right: 30rpx;
		margin-left:30rpx;
	}

	.assets {
		font-size: 46rpx;
		color: #FFFFFF;
		margin-top: 10rpx;
		font-family: 'myface_bold';
	}

	.coins {
		width: 100%;
		height: 46rpx;
		margin-top: 35rpx;
	}

	.availed_num {
		float: left;
		font-size: 24rpx;
		color: #FFFFFF;
		margin-right: 20rpx;
		font-family: 'myface';
	}

	.lock_num {
		float: left;
		font-size: 24rpx;
		color: #FFFFFF;
		font-family: 'myface';
	}

	.transer {
		float: right;
		width: 110rpx;
		height: 46rpx;
		color: #FFFFFF;
		text-align: center;
		font-size: 22rpx;
		line-height: 50rpx;
		background: #11DEA0;
		margin-top: -8rpx;
		margin-right: 38rpx;
		border-radius: 40px;
	}

	.transer1 {
		float: right;
		width: 110rpx;
		height: 46rpx;
		color: #FFFFFF;
		text-align: center;
		font-size: 22rpx;
		line-height: 46rpx;
		background: rgba(65, 190, 201, 0.5);
		margin-top: -20rpx;
		margin-right: 38rpx;
		border-radius: 40px;
	}

	.mill {
		width: 100%;
		height: 135rpx;
		position: relative;
	}

	.machine {
		
		float: left;
		text-align: left;
	}
	.machine-num {
		font-size: 46rpx;
		color:#35394F;
		line-height: 60rpx;
		font-weight: bold;
		font-family: 'myface_bold';
	}

	.machine-mill {
		font-size: 24rpx;
		line-height: 24rpx;
	}
	.item {
		height: 100rpx;
		font-size: 22rpx;
		padding-top: 20rpx;
		padding-left: 30rpx;
		text-align: left;
		position: relative;
		margin-bottom: 30rpx;
		box-sizing: border-box;
	}
	

	.picker {
		width: 162rpx;
		height: 52rpx;
		margin-top: 40rpx;
		margin-left: 30rpx;
		font-size: 30rpx;
		border: 2rpx solid #CCCCCC;
		border-radius: 26rpx;
	}

	.transfer {
		width: 344rpx;
		height: 252rpx;
		display: block;
		margin: 152rpx auto 35rpx;
	}

	.info {
		text-align: center;
		color: #8796AA;
		font-size: 26rpx;
	}

	.all1 {
		float: right;
		font-size: 24rpx;
		color: #FFFFFF;
		margin-top: 20rpx;
		margin-right: 48rpx;
	}

	.list {
		margin-top:36rpx;
	}
    .boxx{
		width:100%;
		height:calc(100% - 734rpx);
		position: fixed;
		top:734rpx;
		left:0;
	}
	.scroll-view {
		width: 100%;
		height:100%;
	}
	.list-one {
		width: 100%;
		height: 116rpx;
		padding-left: 30rpx;
		box-sizing: border-box;
		position: relative;
		color: #999999;
	}

	.list-icon {
		float: left;
		width: 70rpx;
		height: 70rpx;
		display: block;
		margin-top: 15rpx;
	}

	.list-txt {
		float: left;
		margin-left: 20rpx;
		line-height: 50rpx;
	}

	.list-info {
		font-size: 26rpx;
		color:#000000;
	}

	.list-time {
		font-size: 24rpx;
		color: #8796AA;
		font-family: 'myface_bold';
	}

	.list-income {
		float: right;
		margin-right: 48rpx;
		line-height: 100rpx;
		font-size: 30rpx;
		color: #000000;
		font-weight: bold;
		font-family: 'myface_bold';
	}

	.navbar {
		display: flex;
		height: 98rpx;
		position: relative;
		z-index: 10;
		
		background-color: #F2F2F2;
	}
    .all_mill{
		color:#333333;
		font-size: 24rpx;
		line-height:98rpx;
		flex: 1;
		text-align: right;
		padding-right:30rpx;
		box-sizing: border-box;
		font-family: 'myface';
	}
	.nav-item {
		float: left;
		width: 186rpx;
		height: 112rpx;
		font-size: 26rpx;
		color: #0B0A0A;
		position: relative;
		line-height: 98rpx;
		transition: all .5s;
		margin-left: 30rpx;
		padding-left: 24rpx;
		box-sizing: border-box;
	}
	.current {
		color:#0B0A0A;
		font-size: 32rpx;
		font-weight: bold;
		background-image: url(../../static/images/income_bg.png);
		background-size: 186rpx 112rpx;
	}

	.current:after {
		content: 'SELECTED';
	    color:#999999;
		font-size: 16rpx;
		font-weight: 300;
		letter-spacing: 3rpx;
		position: absolute;
		top: 38rpx;
		left: 24rpx;
	}
</style>
