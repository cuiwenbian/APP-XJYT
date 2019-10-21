<template>
    <view class="container">
        <view class="box1">
            <text class="name">姓名 {{name}}</text>
            <text class="pag">联系方式 {{pag}}</text>
        </view>
        <view class="box">
            <view class="left">
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="right">
                    <text class="info">{{ma}}</text>
                </view>
                <view >
                    <text class="all">已运行{{t}}天 | 剩余{{l}}天</text>
                </view>
                <view>
                    <text class="area">
                        储存{{nc}}T | 总容量{{c}}T
                    </text>
                </view>
            </view>
            <view class="y"></view>
        </view>
        <view class="box">
            <view class="left">
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="right">
                    <text class="info">{{ma}}</text>
                </view>
                <view >
                    <text class="all">已运行{{t}}天 | 剩余{{l}}天</text>
                </view>
                <view>
                    <text class="area">
                        储存{{nc}}T | 总容量{{c}}T
                    </text>
                </view>
            </view>
            <view class="y"></view>
        </view>
        <view class="box">
            <view class="left">
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="right">
                    <text class="info">{{ma}}</text>
                </view>
                <view >
                    <text class="all">已运行{{t}}天 | 剩余{{l}}天</text>
                </view>
                <view>
                    <text class="area">
                        储存{{nc}}T | 总容量{{c}}T
                    </text>
                </view>
            </view>
        </view>
        <view class="boxx">
            <view class="uu">
                交易数量: <text class="ui">{{san}}台</text>
            </view>
            <view class="uu">
                人民币: <text class="ui">{{sun}}</text>
            </view>
            <view class="uu">
                总价: <text class="ui">{{suu}}</text>
            </view>
        </view>
    </view>
</template>

<script>
    var getRmb=require('../../common/requset.js')
    export default {
        data() {
            return {
                ma:"星际王者矿机专业版 MC19090212256",
                t:"50",
                l:"40",
                nc:"3.5",
                c:"4",
                total_price:'',
                san:"3",
                sun:'',
                name:'',
                pag:'',
                suu:'500000'
            }
        },
        onLoad(e) {
            this.sun = getRmb.getrmb(e.suu)
        }
    }
</script>

<style>
    page {
        background-color: #DCDCDC;
    }
    .box1 {
        margin-bottom: 40rpx;
        height: 120rpx;
        background-color: #fff;
    }
    .name {
        float: left;
        width: 120rpx;
        color: #CCCCCC;
        line-height: 120rpx;
        padding-left: 48rpx;
    }
    .pag {
        float: left;
        color: #CCCCCC;
        line-height: 120rpx;
        padding-left: 120rpx;
    }
    
    .box {
        background-color: #fff;
        height: 180rpx;
    }
    .left {
        line-height: 180rpx;
    }
    .img{
        float: left;
        width: 145rpx;
        height: 126rpx;
        margin-left: 48rpx;
        margin-top: 36rpx;
        margin-right: 24rpx;
        border: 1rpx solid #CCCCCC;
        padding: 0 14rpx 0 14rpx;
    }
    .info {
        font-size: 28rpx;
    }
    .right {
        padding-top: 18rpx;
    }
    .all{
        font-size: 24rpx;
        color: #C0C0C0;
    }
    .area {
        font-size: 24rpx;
        color: #C0C0C0;
    }
    .y {
        width: 90%;
        height: 30rpx;
        border-bottom: 2rpx solid #C0C0C0;
        margin: 0 auto;
    }
    .boxx {
        height: 215rpx;
        margin-top: 40rpx;
        background-color: #fff;
    }
    .uu {
        float: left;
        width: 100%;
        color: #CCCCCC;
        padding-left: 48rpx;
        padding-top: 20rpx;
        font-size: 32rpx;
    }
    .ui {
        color: #000000;
        padding-left: 60rpx;
    }
</style>
