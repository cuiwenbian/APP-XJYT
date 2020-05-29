<template>
	<!-- 记录 -->
    <view class="container">
        <view class="box">
            <text class="cool1">手机号</text>
            <text class="cool">数量</text>
            <text class="cool">时间</text>
        </view>
        <view class='ll' v-for="(recode, index) in time" :key="index" v-if="fll">
            <text class="time1">{{ recode.name }}</text>
            <text class="time3">{{ recode.num }}台</text>
            <text class="time4">{{ recode.time }}</text>
        </view>
        <view v-else>
            <image class="transfer" src="../../static/images/no-machine.png" mode=""></image>
            <view class="nomachine">暂无记录</view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            time: '',
            fll: true
        };
    },
    onLoad() {
        var that = this;
        uni.request({
            url: this.url + 'cloudrecodes/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success(res) {
                that.time = res.data.data;
                that.time = time.reverse();
                if (that.time.length == 0) {
                    that.fll = false;
                } else {
                    that.fll = true;
                }
            }
        });
    }
};
</script>

<style>
.box {
    width: 100%;
    height: 92rpx;
    background-color: #f6f6f6;
}
.cool {
    line-height: 92rpx;
    font-size: 26rpx;
    color: #333333;
    padding-left: 157rpx;
}
.cool1 {
    line-height: 92rpx;
    font-size: 26rpx;
    color: #333333;
    padding-left: 42rpx;
}
.ll{
	line-height: 50rpx;
}
.time1 {
    font-size: 22rpx;
    padding-left: 22rpx;
}
.time2 {
    font-size: 22rpx;
    padding-left: 90rpx;
}
.time4 {
    font-size: 22rpx;
    padding-left: 90rpx;
}
.time3 {
    font-size: 22rpx;
    padding-left: 120rpx;
}
</style>
