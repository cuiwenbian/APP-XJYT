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
                windowHeight: '603px'  ,//定义手机屏幕高度值变量
				windowWidth:'375px',
				indicator:true
				
            }
        },
        onLoad() {
            var _me = this;
            uni.getSystemInfo({//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高
                success: function(res) {
                    console.log(res.model);
                    console.log(res.pixelRatio);
                    console.log(res.windowWidth);
                    console.log(res.windowHeight);//这里是手机屏幕高度
                    console.log(res.language);
                    console.log(res.version);
                    console.log(res.platform);
                    _me.windowHeight = res.windowHeight + 'px';
					_me.windowWidth = res.windowWidth + 'px';
                    console.log('手机屏幕高度为' + _me.windowHeight);
                }
            });
			
        },
        methods: {
            change(e) {
                console.log(JSON.stringify(e.detail.current));
                //判断到最后一张后，自动转向进入首页
                if (e.detail.current == 2) {
					this.indicator=false;
                    console.log('动画已经播放结束');
                    setTimeout(function() {
                        uni.redirectTo({
                            url: '/pages/index/index'
                        });
                    }, 1000)
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