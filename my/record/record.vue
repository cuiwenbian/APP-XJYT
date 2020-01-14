<template>
    <view class="container">
        <view class="box">
            <text class="cool1">手机号</text>
            <text class="cool">数量</text>
            <text class="cool">时间</text>
            <text class="cool2">状态</text>
        </view>
        <view v-for="(recode, index) in time" :key="index" v-if="fll">
            <text class="time1">{{ recode.name }}</text>
            <text class="time3">{{ recode.num }}台</text>
            <text class="time4">{{ recode.time }}</text>
            <text class="time2">{{ recode.status == '1' || '2' ? '已验收' : recode.status == '3' || '0' ? '未验收' : '未知' }}</text>
        </view>
        <view v-else>
            <image class="transfer" src="../../static/images/none.png" mode=""></image>
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
            url: this.url + 'usermachine/recode',
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
.cool2 {
    line-height: 92rpx;
    font-size: 26rpx;
    color: #333333;
    padding-left: 140rpx;
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
