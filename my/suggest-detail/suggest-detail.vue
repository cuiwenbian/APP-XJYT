<template>
    <!-- 反馈详情 -->
    <view class="container" style="position: relative;">
        <view v-if="hidden">
            <view class="t"></view>
            <view class="suggest-list" style="line-height: 280rpx;font-size: 30rpx;">请耐心等待平台回复...</view>
        </view>
        <view v-else>
            <view class="t"></view>
            <view class="suggest-list">
                <view class="top" style="height:20rpx;"></view>
                <view style="width:100%;">
                    <view class="tit" style="width:150rpx;line-height: 50rpx;color:#DCB16E">平台回复：</view>
                    <view class="answer1" >{{ message.reply }}</view>
                </view>
                <view class="submit-time">{{ message.updated_time }}</view>
            </view>
        </view>
        <view class="t"></view>
        <view class="suggest-list">
            <view class="time">
                <view class="submit-time">提交时间：{{ message.add_time }}</view>
                <view class="status" v-show="message.company_submit == 1">提交成功</view>
                <view class="status" v-show="message.company_submit == 2">已回复</view>
            </view>
            <view class="question">
                <view class="tit">标题：</view>
                <view class="answer">{{ message.title }}</view>
            </view>
            <view class="question">
                <view class="tit" >描述：</view>
                <view class="answer" >{{ message.message }}</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            hidden: true,
            message: ''
        };
    },
    onLoad(options) {
        var a = options.message;
        var b = JSON.parse(a);
        this.message = b;
        if (this.message.reply != null) {
            this.hidden = false;
        }
    }
};
</script>

<style>
page {
    background: #edeeee;
}
.t {
    height: 30rpx;
}
.suggest-list {
    width: 100%;
    height: auto;
    background: #fff;
    padding: 20rpx 48rpx;
    overflow: hidden;
    box-sizing: border-box;
}
.time {
    height: 90rpx;
    width: 100%;
    border-bottom: 1rpx solid #f2f2f2;
}
.submit-time {
    height: 90rpx;
    width: 520rpx;
    line-height: 90rpx;
    float: left;
    font-size: 28rpx;
    color: #a0a0a0;
}
.status {
    height: 90rpx;
    line-height: 90rpx;
    float: right;
    color: #dcb16e;
    font-size: 28rpx;
}
.question{
	color: #121212;
	font-size: 28rpx;
	overflow: hidden;
	line-height: 50rpx;
}
.tit{
	width:20%;
	float: left;
	height:auto;
}
.answer{
	width:80%;
	float: left;
	height:auto;
}
.answer1 {
    width: 500rpx;
    float: right;
    font-size: 28rpx;
    line-height: 50rpx;
    word-break: break-all;
    word-wrap: break-word;
}
</style>
