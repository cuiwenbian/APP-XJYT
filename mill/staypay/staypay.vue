<template>
    <!-- 待付款详情订单 -->
    <view class="container">
        <view class="box">
            <view class="box1">
                <text class="typ">交易类型: {{buy}}</text>
                <text class="state">状态: {{stat}}</text>
            </view>

            <view class="bor"></view>
            
            <view class="mill">矿机数量:  {{numbb}}</view>
            
            <view class="bor"></view>
            
            <view class="box2">
                <text class="trading">交易总价: {{nber}}</text>
                <text class="rmb">人民币: </text>
            </view>
            
            <view class="x">
                <text class="Serial">订单编号: {{x}}</text>
            </view>
            
            <view class="box3">
                <text>创建时间</text>
                <text>{{time}}</text>
            </view>
            <button class="primary">嘿嘿嘿^</button>
        </view>
       <view class="">
            <text>卖家信息</text>
        </view>
        <view class="">
            <text>姓名: </text>
            <view class="">联系方式: </view>
        </view>
        <view class="">
            商品信息
        </view>
        <view class="">
            
        </view>
        <view class="">
            <button type="primary1">我已付款</button>
        </view>
    </view>
</template>

<script>
    var getRmb=require('../../common/requset.js')
    export default {
        data(){
            return {
                x:'xxxxxxxxxxxxxxxxxx',
                buy:'买入',
                stat:'待付款',
                numbb:"10台",
                nber:'20000.00'
            }
        }
    }
</script>

<style>
    .box{
        width: 100%; 
    }
    .box1 {
        height: 120rpx;
    }
    .typ {
        font-size: 28rpx;
        margin-left: 46rpx;
        line-height: 120rpx;
    }
    .mill {
        height: 85rpx;
        line-height: 85rpx;
        font-size: 28rpx;
        margin-left: 46rpx;
    }
    .state {
        font-size: 28rpx;
        line-height: 40rpx;
        margin-left: 320rpx;
    }
    .box2 {
        height: 105rpx;
    }
    .trading { 
        font-size: 28rpx;
        line-height: 105rpx;
        margin-left: 46rpx;
    }
    .rmb {
        font-size: 28rpx;
        line-height: 105rpx;
        margin-left: 226rpx;
    }
    .x {
        height: 125rpx;
    }
    .Serial {
        font-size: 28rpx;
        line-height: 125rpx;
        margin-left: 46rpx;
    }
    .primary{
        font-size: 16rpx;
        width: 60rpx;
        height: 40rpx;
        border-radius: 30rpx;
    }
</style>
