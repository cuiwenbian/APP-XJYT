<template>
	<view class="bottom-tab">
		<Index1 v-if='active==1'></Index1>
		<Pool v-if='active==2'></Pool>
		<Order v-if='active==3'></Order>
		<My v-if='active==4'></My>
		<!-- <view class="bottom-tab-item" @click="changeTap(item)" v-for="(item,index) in tabList" :key="index"> -->
		<view class="bottom-tab-item" @click="curTab=item.id" v-for="(item,index) in tabList" :key="index">
			<!-- <image v-if="curTab==item.id" class="first-img" :src="item.imgOn"></image>
			<image v-if="curTab!=item.id" class="first-img" :src="item.imgOff"></image> -->
			<image class="first-img" :src="curTab==item.id ? item.imgOn : item.imgOff"></image>
			<text class='text-position' :class="{'text-on':curTab==item.id}">{{item.name}}</text>
			<!-- <text :class="curTab==item.id?'text-position text-on':'text-position'">{{curTab,item.imgOn,item.imgOff}}</text> -->
		</view>
	</view>
</template>

<script>
	import LIST from "../static/wyg-bottom-tab/js/botoom-list.js"
	import Index1 from './../pages/index/index'
	import Pool from './../pages/pool/pool'
	import Order from './../pages/order/order'
	import My from './../pages/my/my'
	export default {
		components: {
			Index1,
			Pool,
			Order,
			My,
		},
		name: "wyg-bottom-tab",
		props: {
			tabIndex: {
				//图片的尺寸
				type: String,
				default: "1"
			},
			tabListParent: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				curTab: 1,
				tabList: [{
						id: 1,
						name: "首页",
						imgOff: "../../static/img/bottom-tab-img/icon_01.png",
						imgOn: "../../static/img/bottom-tab-img/icon_01_f.png",
						"url": "/pages/index/index"
					},
					{
						id: 2,
						name: "存储中心",
						imgOff: "../../static/img/bottom-tab-img/icon_02.png",
						imgOn: "../../static/img/bottom-tab-img/icon_02_f.png",
						"url": "/pages/pool/pool"
					},
					{
						id: 3,
						name: "订单",
						imgOff: "../../static/img/bottom-tab-img/icon_03.png",
						imgOn: "../../static/img/bottom-tab-img/icon_03_f.png",
						"url": "/pages/order/order"
					},
					{
						id: 4,
						name: "我的",
						imgOff: "../../static/img/bottom-tab-img/icon_04.png",
						imgOn: "../../static/img/bottom-tab-img/icon_04_f.png",
						"url": "/pages/my/my"
					}
				]

			}
		},
		created() {
			this.curTab = new Number(this.tabIndex);
			if (this.tabListParent.length > 0) {
				this.tabList = this.tabListParent;
			}
		},
		mounted() {
			if (uni.setStorageSync('tabNum')) {
				console.log(1)
				this.curTab = uni.setStorageSync('tabNum')
			}
		},
		methods: {
			onTabBar:function(){
				var _curPageArr = getCurrentPages();
				console.log(_curPageArr)
			},
			$redirect(_url) {
				uni.redirectTo({
					"url": _url
				})
			},
			changeTap(e) {
				// this.curTab = e.id;
				this.$redirect(e.url);
				uni.setStorageSync('tabNum', this.curTab);
				console.log(e.url)
				console.log(this.curTab)
			}

		}
	}
</script>

<style lang="scss">
	.bottom-tab {
		position: fixed;
		background-image: url(../static/wyg-bottom-tab/img/tabbar_bg.png);
		background-size: 100% 2.9rem;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2.9rem;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.bottom-tab-item {
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.first-img {
				width: 1.5rem;
				height: 1.5rem;
			}

			.text-position {
				margin-top: 0rem;
				font-size: 0.6rem;
				color: #FFFFFF;
				line-height: 1;
			}

			.text-on {
				color: #01D290;
			}

		}


	}
</style>

 