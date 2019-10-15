<template>
	<view class="content">
		<swiper class="activeImg" indicator-dots="true" autoplay="true" interval="2000" circular="true">
		    <block v-for="(item, id) in bnrUrl" :key="id">
		        <swiper-item>
		            <image :src="item.url" class="u-img-slide" mode="aspectFill"></image>
		        </swiper-item>
		    </block>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"bnrUrl":[{
                    "url":"../../static/images/lb.png"
                }]
			}
		},

		methods: {

		}
	}
</script>

<style>
    .big{
        
    }
    .activeImg{
      width:720rpx;
      height:270rpx;
      margin:0rpx auto;
    }
    .u-img-slide {
      width: 100%;
      height:100%;
    }
</style>
