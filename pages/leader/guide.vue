<template>
    <view class="content">
        <swiper :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000" class="swiper" :style="{'height':windowHeight}"
         @animationfinish="animationfinish">
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
					<image :style="{'height':windowHeight,'width':windowWidth}" src="../../static/images/page3.1.jpg" mode=""></image>
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
            animationfinish(e) {
                console.log(JSON.stringify(e.detail.current));
                //判断到最后一张后，自动转向进入首页
                if (e.detail.current == 3) {
                    console.log('动画已经播放结束');
                    setTimeout(function() {
                        uni.redirectTo({
                            url: '/pages/index/index'
                        });
                    }, 1000)
                }
            }
        }
    }
</script>
<style>
    .swiper {
        width: 100%;
        /*     height: 100vw; */
        background: #161822;
    }
</style>