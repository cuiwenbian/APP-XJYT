<template>
	<view class="container">
		<view class='height'></view>
		<view class='navs'>存储中心</view>
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
			 @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			<view class="boxx" v-for="(item, index) in pool" :key="index" @click="buy(item)">
				<image class="bg" src="../../static/images/bg.png" mode=""></image>
				<div v-if='item.laber==1' class="status hot">
					售罄
				</div>
				<div v-if='item.laber==2' class="status no">
					测试中
				</div>
				<div v-if='item.laber==3' class="status chubei">
					储备中
				</div>
				<view>
					<div class="title">{{ item.name }}</div>
					<div class="content">
						<div class="info">
							<div class="item">
								<div class="num">
									{{item.info}}<span>T</span>
								</div>
								<div class="text">
									存力
								</div>
							</div>
							<div class="item">
								<div class="num">
									{{ item.theory_earnings }}<span>FIL/T</span>
								</div>
								<div class="text">
									日理论收益
								</div>
							</div>
							<div class="item">
								<div class="num">
									{{ item.harduse }}<span>T</span>
								</div>
								<div class="text">
									有效存力
								</div>
							</div>
							<div class="item">
								<div class="num">
									{{ item.hashrate }}<span>T</span>
								</div>
								<div class="text">
									可出售空间
								</div>
							</div>
							<div class="item">
								<div class="num">
									{{ item.price }}<span>RMB</span>
								</div>
								<div class="text">
									每T价格
								</div>
							</div>
							<div class="item">
								<div class="num">
									{{item.areaname}}
								</div>
								<div class="text">
									地区
								</div>
							</div>
						</div>
						<!-- <div class="btn">
							<div class='no' v-if='item.laber==1'>已售罄</div>
							<view class='yes' v-else>立即购买</view>
						</div> -->
					</div>
				</view>
			</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 1">
			<image class="ranking" src="../../static/images/no-machine.png" mode=""></image>
			<view class="updating">暂无排行</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 2">
			<view class="mills">
				<view class="machine">
					<view class="machine-mill">我的存力</view>
					<view class="machine-num">{{my_cunli}}<text class='bridge'>T</text></view>
				</view>
				<view class="machine">
					<view class="machine-mill">存力收益</view>
					<view class="machine-num">{{cunli_trans}}<text class='bridge'>FIL</text></view>
				</view>
			</view>
			<view v-if="flag">
				<block v-if='token'>
					<image class="transfer" src="../../static/images/no-machine.png" mode=""></image>
					<view class="info">暂无购买记录～</view>
				</block>
				<block v-else>
					<image class="transfer" src="../../static/images/no-machine.png" mode=""></image>
					<view class="info">您还没有登录</view>
				</block>
			</view>
			<view v-else>
				<view class="tablist listone">
					<view class="li1">序号</view>
					<view class="li2">存储中心</view>
					<view class="li3">已购存力</view>
					<view class="li4">目前收益</view>
					<view class="li5">剩余天数</view>
					<view class="li6">操作</view>
				</view>
				<view class="tablist listones" v-for="(item,index) in lists" :key='index'>
					<view class="li1" style='padding-left: 20rpx;'>{{len-index}}</view>
					<view class="li2">{{item.name}}</view>
					<view class="li3">{{item.hashrate}}TB</view>
					<view class="li4">{{item.fil_num}}FIL</view>
					<view class="li5">{{item.days}}天</view>
					<view class="li6 give" @click="trans">转让</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wygBottomTab from '@/components/wyg-bottom-tab.vue';
	import TAB_LIST from '../../static/wyg-bottom-tab/js/botoom-list.js'
	import {
		debounce
	} from '@/common/utils.js'
	export default {
		data() {
			return {
				n: true,
				pool: '',
				token:uni.getStorageSync('token'),
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '最新'
					},
					{
						state: 1,
						text: '排行'
					},
					{
						state: 2,
						text: '已购买'
					}
				],
				flag: true,
				tabList: TAB_LIST,
				laber: '',
				outer: '',
				toounre: '',
				lists: '',
				my_cunli: '0.00',
				cunli_trans: '0.00',
				len: ''
			};
		},

		mounted() {
			var that = this;
			uni.request({
				url: this.url + 'cloudinfos/',
				method: 'GET',
				success: res => {
					console.log(res)
					that.pool = res.data.message;
				}
			});
			if(that.token){
				uni.request({
					url: this.url + 'cloudareadys/',           //已购存力接口
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					success: res => {
						console.log(res)
						var poollists = res.data.data;
						this.lists = poollists.reverse()
						this.len = this.lists.length;
						this.my_cunli = res.data.num
						this.cunli_trans = res.data.fil_nums
						if (this.lists.length != 0) {
							that.flag = false
						}
					}
				})
			}
		
			
		},
		components: {
			wygBottomTab
		},
		methods: {
			trans: function() {
				uni.showToast({
					title: '存力转让功能暂未开放',
					icon: 'none',
					duration: 2000
				})
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
			linkToTransfer: debounce(function(item) {
				var d = JSON.stringify(item)
				uni.navigateTo({
					url: '../poolDetails/poolDetails?data=' + d
				});
			}, 500, true),
			buy: function(item) {
				this.linkToTransfer(item)
			}
		}
	};
</script>

<style scoped>
	page {
		background: #f7f7f7;
		padding-bottom: 2.9rem;
		box-sizing: border-box;
	}

	.height {
		height: var(--status-bar-height);
		background: #ffffff;
	}

	.container {
		position: relative;
	}

	.navs {
		width: 100%;
		height: 196rpx;
		position: fixed;
		top: 0;
		line-height: 196rpx;
		font-size: 36rpx;
		text-align: center;
		background-color: #FAFBFC;
		color: #000000;
		z-index: 9;
	}

	.list {
		padding-top: 266rpx;
	}

	.navbar {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		padding: 0 124rpx;
		box-sizing: border-box;
		color: #333333;
		position: fixed;
		background: #f7f7f7;
		left: 0;
		/* #ifdef MP-WEIXIN */
		top: 196rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		top: 196rpx;
		/* #endif */
		z-index: 9;
		display: flex;
		justify-content: space-around;
	}

	.nav-item {
		transition: all .5s;
		line-height: 100rpx;

	}

	.current {
		color: #000000;
		font-size: 18px;
		font-weight: bold;
	}

	.boxx {
		background: #ffffff;
		margin: 0rpx 12rpx 24rpx;
		border-radius: 8rpx;
		position: relative;
		padding: 9px;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
	}

	.boxx .bg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
	}

	.boxx .status {
		position: absolute;
		right: 3px;
		top: 12px;
		width: 60px;
		line-height: 30px;
		text-align: center;
		padding-left: 5px;
		font-size: 24rpx;
		color: #ffffff;
		height: 27px;
		box-sizing: border-box;
		background-size: 100% 100%;

	}

	.boxx .status.hot {
		background-image: url(../../static/images/icon1.png);
	}

	.boxx .status.no {
		background-image: url(../../static/images/icon2.png);
	}

	.boxx .status.chubei {
		background-image: url(../../static/images/icon3.png);
	}

	.boxx>view {
		border: .5px solid #f5f5f5;
		border-radius: 8rpx;
		display: flex;
		flex: 1;
		padding: 0 4px 12px 12px;
		flex-direction: column;
	}

	.boxx>view .content {
		display: flex;
		flex: 1;
	}

	.boxx>view .content .info {
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		justify-content: space-between
	}

	.boxx>view .content .info .item {
		text-align: left;
		color: #333333;
		flex: 0 0 calc(33.3333333% - 7px);
		margin-bottom: 5px;
	}

	.boxx>view .content .info .item .num {
		font-size: 38rpx;
		font-weight: bold;
		color: #000000;
		font-family: 'myface_bold';
	}

	.boxx>view .content .info .item .num span {
		font-size: 18rpx;
	}

	.boxx>view .content .info .item .text {
		color: #C4C2C2;
		font-size: 24rpx;
	}

	.boxx>view .content .btn {
		flex: none;
		display: flex;
		align-items: center;
		width: 84px;
	}

	.boxx>view .content .btn>div {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		background: #000;
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		border-radius: 64rpx;
		border-radius: 72rpx;
	}

	.boxx>view .content .btn .yes {
		width: 221rpx;
		height: 70rpx;
		text-align: center;
		line-height: 70rpx;
		font-size: 26rpx;
		color: #FFFFFF;
		background: linear-gradient(0deg, rgba(7, 217, 151, 1), rgba(34, 239, 174, 1));
		box-shadow: 6rpx 8rpx 20rpx 2rpx rgba(19, 230, 164, 0.54);
		border-radius: 36px;
	}

	.boxx>view .content .btn .no {
		background: #D6D3D4;
	}

	.tag {
		position: absolute;
		top: 8rpx;
		right: -32rpx;
		width: 124rpx;
		height: 38rpx;
		color: #d31507;
		font-size: 22rpx;
		line-height: 38rpx;
		text-align: center;
		background-color: #fab735;
		transform: rotate(45deg);
	}

	.title {
		font-size: 36rpx;
		font-weight: bold;
		color: #000000;
		padding: 20px 0;
	}

	.opts {
		width: 100%;
		height: auto;
		margin-top: 36rpx;
	}

	.lists {
		width: 33%;
		height: 160rpx;
		float: left;
	}

	.dates {
		font-size: 42rpx;
		color: #ffffff;
		text-align: center;
		line-height: 60rpx;
	}

	.room {
		font-size: 22rpx;
		color: #8796aa;
		text-align: center;
		line-height: 60rpx;
	}

	.buys {
		clear: both;
		background: #41bec9;
		width: 630rpx;
		height: 76rpx;
		line-height: 76rpx;
		font-size: 28rpx;
		text-align: center;
		color: #ffffff;
	}

	.buys.active {
		background: rgba(65, 190, 201, 0.5);
	}

	.buysall {
		background: #b1b1b1;
		color: #333333;
	}

	.ranking {
		width: 344rpx;
		height: 252rpx;
		margin: 138rpx auto 0;
		display: block;
	}

	.updating {
		color: #111111;
		text-align: center;
		line-height: 100rpx;
		font-size: 26rpx;
	}

	.mills {
		width: 710rpx;
		height: 390rpx;
		margin: 0rpx auto;
		position: relative;
		background-image: url('../../static/images/buy_cunli.png');
		background-size: 710rpx 390rpx;
		padding-top: 109rpx;
		box-sizing: border-box;
	}

	.machine {
		width: 50%;
		height: 100%;
		float: left;
		padding-left: 80rpx;
		box-sizing: border-box;
	}

	.machine-mill {
		font-size: 24rpx;
		color: #ffffff;
	}

	.machine-num {
		font-size: 68rpx;
		line-height: 100rpx;
		color: #ffffff;
		font-family: 'myface_bold';
	}

	.bridge {
		font-size: 24rpx;
	}

	.transfer {
		width: 234rpx;
		height: 147rpx;
		display: block;
		margin: 152rpx auto 35rpx;
	}

	.info {
		text-align: center;
		color: #8796aa;
		font-size: 26rpx;
	}

	.tablist {
		height: 107rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.tablist:first-child {
		border-bottom: 1rpx solid #DCDCDC;
	}

	.listone {
		float: left;
		color: #2F2F2F;
		font-size: 24rpx;
		text-align: center;
		opacity: 0.77;
		padding-left: 14rpx;
		box-sizing: border-box;
	}

	.listones {
		float: left;
		color: #2F2F2F;
		font-size: 24rpx;
		text-align: left;
	}

	.li1 {
		width: 10%;
		text-align: left;
		line-height: 107rpx;
	}

	.li2 {
		width: 18%;
		line-height: 107rpx;
		text-align: left;
	}

	.li3 {
		width: 16%;
		line-height: 107rpx;
	}

	.li4 {
		width: 16%;
		line-height: 107rpx;
	}

	.li5 {
		width: 16%;
		line-height: 107rpx;
	}

	.li6 {
		width: 16%;
		line-height: 107rpx;
	}

	.give {
		width: 76rpx;
		height: 34rpx;
		border: 1rpx solid #41bec9;
		border-radius: 5rpx;
		color: #41bec9;
		font-size: 20rpx;
		margin-top: 36rpx;
		margin-right: 24rpx;
		line-height: 34rpx;
		text-align: center;
	}
</style>
