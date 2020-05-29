<template>
	<view>
		<view class="banner">
			<swiper class="card-swiper"  :circular="true"
			 :autoplay="true" interval="3000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
			 indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item" @tap="some(item.id)">
						<image :src="item.cover_pic" mode="aspectFill"></image>
						<!-- <video :src="item.cover_pic" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" ></video> -->
					</view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import {
		debounce
	} from '@/common/utils.js';
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList:[],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		mounted() {
			var that=this;
			uni.request({
				url: this.url + 'home/rotation/',
				method: 'GET',
				// header: {
				// 	Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
				// },
				success(res) {
					console.log(res);
					that.swiperList = res.data;
					console.log(that.swiperList)
				}
			});
		},
		methods: {
			linkToTransfer4: debounce(
				function(item) {
					console.log(item);
					var that = this;
					uni.request({
						url: this.url + 'home/rotation/details/' + item + '/',
						method: 'GET',
						success(res) {
							console.log(res);
							var link = res.data.link;
							var text_content = res.data.text_content.replace(/=/g, '_');
							if (link == null || link == '') {
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
				500,
				true
			),
			some: function(item) {
				console.log(item)
				this.linkToTransfer4(item);
			},
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}
	.banner{
		height: 300rpx;
	}
</style>
