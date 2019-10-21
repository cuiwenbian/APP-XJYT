<template>
    <!-- 待付款详情订单 -->
    <view class="container">
        <view class="box">
            <view class="small">
                <text>交易类型:
                    <text class="smallxx">{{type}}</text>
                </text>
                <text class="smallx">状态:
                    <text class="smallxx">{{state}}</text>
                </text>
            </view>
            <view class="small">
                矿机数量:<text class="smallxx">{{mill}}台</text>
            </view>
            <view class="small">
                <text>交易总价:&nbsp;&nbsp;&nbsp;
                    <text class="smallxx">{{price}}</text>
                </text>
                <text class="smallx">人民币:
                    <text class="smallxx">{{rmb}}</text>
                </text>
            </view>
            <view class="small">
                <text>
                    订单编号:<text class="smallxx">{{x}}</text>
                </text>
            </view>
            <view class="small1">
                <text>
                    创建时间:<text class="smallxx">{{time}}</text>
                </text>
            </view>
            <view>
                <button class="primary" @click="btn">查看全部^</button>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                type:'买入',
                state:'待审核',
                mill:'10',
                price:'20000',
                rmb:'',
                x:'xxxxxxxxxxxxxx',
                time:'2019.10.21'
            }
        },
        methods:{
            btn:function () {
                var that = this
            }
        }
    }
</script>

<style>
    page {
        background-color: #DCDCDC;
    }
    .box {
        height: 640rpx;
        width: 100%;
        background-color: #fff;
    }
    .small {
        width: 100%;
        height: 110rpx;
        line-height: 110rpx;
        float: left;
        padding-left: 48rpx;
        font-size: 32rpx;
    }
    .small1{
        width: 100%;
        float: left;
        height: 110rpx;
        padding-left: 48rpx;
        display: none;
        font-size: 32rpx;
    }
    .smallx {
        float: right;
        font-size: 32rpx;
        padding-right: 170rpx;
    }
    .smallxx {
        padding-left: 40rpx;
    }
    .primary {
        width: 180rpx;
        height: 40rpx;
        line-height: 40rpx;
        font-size: 22rpx;
    }
</style>
