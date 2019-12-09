<template>
    <view class="content">
        <swiper :indicator-dots="indicator"   :autoplay="false" indicator-color="#fff" indicator-active-color="#3891ef"  :duration="150" class="swiper" :style="{'height':windowHeight}"
         @change="change">
            <swiper-item>
                <view class="swiper-item" :style="{'height':windowHeight,'width':windowWidth}">
					<image :style="{'height':windowHeight,'width':windowWidth}" src="../../static/images/page1.jpg" mode=""></image>
				</view>
            </swiper-item>
            <swiper-item>
                <view class="swiper-item" :style="{'height':windowHeight,'width':windowWidth}">
            		<image :style="{'height':windowHeight,'width':windowWidth}" src="../../static/images/page2.jpg" mode=""></image>
            	</view>
            </swiper-item>
			<swiper-item>
			    <view class="swiper-item" :style="{'height':windowHeight,'width':windowWidth}">
					<image :style="{'height':windowHeight,'width':windowWidth}" src="../../static/images/page3.1.jpg" mode="">
						<view class="experice" @click="go">
							<image  class="experices" src="../../static/images/ty.png" mode=""></image>
						</view>
					</image>
				</view>
			</swiper-item>  
        </swiper>
  
    </view>
</template>
<script>
    export default {
        data() {
            return {
                windowHeight: ''  ,//定义手机屏幕高度值变量
				windowWidth:'',
                titleBarHeight:'',
                zheight:'',
				indicator:true
            }
        },
        onLoad() {
            var _me = this;
            uni.getSystemInfo({//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高
                success: function(res) {
                    
                    _me.windowHeight = res.windowHeight + 20 + 'px';
					_me.windowWidth = res.windowWidth + 'px';
                    _me.titleBarHeight = res.titleBarHeight + 'px'
                    // _me.zheight = _me.windowHeight + 50
                    console.log( _me.windowHeight )
                    console.log( res )
                }
            });
        },
        methods: {
            change(e) {
                //判断到最后一张后，自动转向进入首页
                if (e.detail.current == 2) {
					this.indicator=false;
                }else{
					this.indicator=true;
				}
            },
			go(){
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
        }
    }                                                             
</script>
<style scoped>
    .swiper {
        width: 100%;
		background: #161822;
    }
	.experice{
		width:200px;
		height:44px;
		position: fixed;
		left:88px;
		bottom:50px;
		z-index: 999;
	}
	.experices{
		width:200px;
		height:44px;
		display: block;
		z-index: 999;
	}
	.uni-swiper .uni-swiper-dots-horizontal{
		background: #fff;
		bottom:100px;
	}
</style>