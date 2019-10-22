<template>
    <view class="container">
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
            <view class="y"></view>
        </view>
        <view class="Serial"></view>
        <view class="box1">
            <view class="hide">
                <text class="adr">数量：{{san}}台</text>
                <text class="dj">人民币:{{sun}}</text>
            </view>
            <view class="xn"></view>
            <view class="haide">
                <input class="put" type="number" placeholder="请输入总价" @input="getPriceValue" :value="total_price" />
                <button class="primary" @click="btn">确定出售</button>
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
                sun:''
            }
        },
        methods: {
            getPriceValue: function (e) {
                let total_price = this.total_price
                this.total_price = e.detail.value
                this.sun = getRmb.getrmb(e.detail.value)
            },
            btn:function () {
                uni.navigateTo({
                    url:"../validation/validation"
                })
            }
        }
    }
</script>

<style>
    .box {
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
    .Serial{
        height: 462rpx;
        background-color: #CCCCCC;
    }
    .box1 {
        height: 226rpx;
        width: 100%;
    }
    .hide {
        height: 106rpx;
        border-bottom: 2rpx solid #CCCCCC;
    }
    .adr {
        width: 220rpx;
        line-height: 106rpx;
        float: left;
        padding-left: 54rpx;
        font-size: 34rpx;
    }
    .dj {
        float: left;
        padding-left: 54rpx;
        line-height: 106rpx;
        font-size: 30rpx;
        color: #CCCCCC;
    } 
    .haide {
        width: 100%;
        height: 120rpx;
    }
    .put {
        float: left;
        text-align: center;
        width: 370rpx;
        height: 123rpx;
    }
    .primary {
        float: right;
        line-height: 123rpx;
        color: #FFFFFF;
        background-color: #121212;
        margin-top: 8rpx;
        width: 375rpx;
        height: 123rpx;
    }
</style>
