<template>
	<!-- 服务器详情 -->
	<view class="content">
		<image class='bg' src="../../static/images/my-background.png" mode="">
			<view class='back-page' @click='backFront'>
				<image src="../../static/images/zuo.png" mode=""></image>
			</view>
			<view class="title_index">
				服务器详情
			</view>
			<view class="machine-infomation">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }"
				 @click="tabClick(index)">{{ item.text }}</view>
			</view>
			<!-- 显示区域 -->
			<view class="my-content" v-if="tabCurrentIndex === 0">
				<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
					<view class="pagex">
						<view class="nav_right_items">
							<text class="te">名称 ：</text>
							<text class="te1">{{ machine_config.name }}</text>
						</view>
						<view class="line1"></view>
						<view class="nav_right_items">
							<text class="te">编号 ：</text>
							<text class="te1">{{ machine_config.number }}</text>
						</view>
						<view class="line1"></view>
						<view class="nav_right_items">
							<text class="te">批次 ：</text>
							<text class="te1">{{ machine_config.batch }}</text>
						</view>
						<view class="line1"></view>
						<view class="nav_right_items">
							<text class="te">型号 ：</text>
							<text class="te1">{{ machine_config.type }}</text>
						</view>
						<view class="line1"></view>
						<view class="nav_right_items">
							<text class="te">CPU ：</text>
							<text class="te1">{{ machine_config.cpu }}</text>
						</view>
						<view class="line1"></view>
						<view class="nav_right_items">
							<text class="te">内存 ：</text>
							<text class="te1">{{ machine_config.memory }}</text>
						</view>
						<view class="line1"></view>
						<view class="nav_right_items">
							<text class="te">系统硬盘 ：</text>
							<text class="te1">{{ machine_config.system_hard_disk }}</text>
						</view>
						<view class="line1"></view>
						<view class="nav_right_items">
							<text class="te">数据硬盘 ：</text>
							<text class="te1">{{ machine_config.data_hard_disk }}T</text>
						</view>
						<view class="line1"></view>
						<view class="nav_right_items">
							<text class="te">地区 ：</text>
							<text class="te1">{{ machine_config.area }}</text>
						</view>
						<view class="line1"></view>
						<view class="nav_right_items">
							<text class="te">矿场 ：</text>
							<text class="te1">{{ machine_config.machine_area }}</text>
						</view>
						<view class="line1"></view>
					</view>
				</scroll-view>
				
			</view>
			<view class="my-content" v-if="tabCurrentIndex === 1">
				<view class="pagex">
					<view class="nav_right_items">
						<text class="te">CPU占有率 ：</text>
						<text class="te1" style='color:#04CC8A;'>{{ machine_status.cpu_share }}</text>
					</view>
					<view class="line1"></view>
					<view class="nav_right_items">
						<text class="te">硬盘占有率 ：</text>
						<text class="te1" style='color:#FAAB01;'>{{ machine_status.data_share }}</text>
					</view>
					<view class="line1"></view>
					<view class="nav_right_items">
						<text class="te">网络占有率 ：</text>
						<text class="te1" style='color:#D70A0A;'>{{ machine_status.memory_share }}</text>
					</view>
					<view class="line1"></view>
					<view class="nav_right_items">
						<text class="te">内存占有率 ：</text>
						<text class="te1" style='color:#06D795;'>{{ machine_status.vf_share }}</text>
					</view>
					<view class="line1"></view>
				</view>
			</view>
			<view class="my-content" v-if="tabCurrentIndex === 2"></view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				machine_config: '',
				machine_status: '',
				machine_id: '',
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
				navList: [{
						state: 0,
						text: '服务器配置',
						orderList: []
					},
					{
						state: 1,
						text: '服务器状态',
						orderList: []
					},
					{
						state: 2,
						text: '服务器记录',
						orderList: []
					}
				]
			};
		},
		onLoad(options) {
			that = this;
			this.machine_id = options.machine_id;
			this.tabCurrentIndex = 0; // 页面显示是默认选中第一个
			uni.request({
				url: this.url + 'usermachineinfo/',
				method: 'GET',
				data:{
					machine_id:this.machine_id,
					methods:1
				},
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					that.machine_config = res.data.data;
				}
			});
			uni.request({
				url: this.url + 'usermachineinfo/',
				method: 'GET',
				data:{
					machine_id:this.machine_id,
					methods:2
				},
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					that.machine_status = res.data.data;
				}
			});
		},
		methods: {
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			tabClick(index) {
				that.tabCurrentIndex = index;
			},
			backFront(){
				console.log('back')
				uni.navigateBack({
					delta:1
				})
			}
		}
	};
</script>

<style>
	.content {
		background: #fff;
	}

	.bg {
		width: 100%;
		height: 612rpx;
		position: fixed;
		top:0;
		left:0;
	}

	.back-page {
		width: 54rpx;
		height: 52rpx;
		position: fixed;
		top: 74rpx;
		left: 24rpx;
		z-index:99;
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
	.machine-infomation {
		width: 100%;
		height: 76rpx;
		position: fixed;
		top: 210rpx;
		padding: 0 48rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}
	.my-content {
		width: 660rpx;
		height: calc(100% - 388rpx);
		background: rgba(255, 255, 255, 0.9);
		border-radius: 13rpx;
		position: fixed;
		top: 348rpx;
		left: 50%;
		margin-left: -330rpx;
		margin-bottom:50rpx;
		padding: 36rpx 16rpx;
		box-sizing: border-box;
		box-shadow: 0 0 50px 10rpx rgba(0, 0, 0, 0.2);
	}
	.scroll-view {
		width: 660rpx;
		height: 100%;
	}

	.nav-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 32rpx;
		color: #FFFFFF;
		position: relative;
	}

	.current {
		width:240rpx;
		height:76rpx;
		background-image: linear-gradient(to right, #3369FF, #11a7d4);
		border-radius: 38rpx;
		color: #fff;
	}

	.uni-swiper-item {
		height: auto;
	}

	.line1 {
		width: 100%;
		height: 3rpx;
		background-color: #f2f2f2;
	}

	.nav_right_items {
		width: 100%;
		height: 120rpx;
	}

	.nav_righ {
		overflow: hidden;
	}

	.te {
		float: left;
		margin-top: 43rpx;
		margin-left: 50rpx;
		color:#666666;
		font-size: 32rpx;
	}

	.te1 {
		float: right;
		margin-top: 43rpx;
		margin-right: 50rpx;
		font-size: 32rpx;
		color:#111111;
	}

	.nodata_text {
		color: black;
		font-size: 34rpx;
		text-align: center;
	}

	.swiper-tab {
		display: flex;
		flex-direction: row;
		line-height: 80rpx;
		background: #01c0dd;
	}

	.tab-item {
		width: 33.3%;
		text-align: center;
		font-size: 34rpx;
		color: #777;
	}

	.swiper {
		height: 100%;
		overflow: hidden;
	}

	.swiper-1 {
		background: #fff;
		height: 100%;
	}

	.on {
		color: #fff;
		border-bottom: 5rpx solid #fff;
	}
</style>
