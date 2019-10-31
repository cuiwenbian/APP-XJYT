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
        <view class="box1">
            买家信息
        </view>
        <view class="box2">
            <view class="bx">姓名:
                <text class="bxx">{{name}}</text>
            </view>
            <view class="bx">联系方式:
                <text class="bxx">{{contact}}</text>
            </view>
        </view>
        <view class="box1">
            商品信息
        </view>
        <view class="box3">
            <view>
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="small2">专业{{num}}
                    <text class="smal">{{x}}</text>
                </view>
                <view class="small3">
                    <text class="smalx">已运行{{day}}天 | <text class="smalx">剩余{{remaining}}天</text></text>
                </view>
            </view>
        </view>
        <view class="box3">
            <view>
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="small2">专业{{num}}
                    <text class="smal">{{x}}</text>
                </view>
                <view class="small3">
                    <text class="smalx">已运行{{day}}天 | <text class="smalx">剩余{{remaining}}天</text></text>
                </view>
            </view>
        </view>
        <view class="box3">
            <view>
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="small2">专业{{num}}
                    <text class="smal">{{x}}</text>
                </view>
                <view class="small3">
                    <text class="smalx">已运行{{day}}天 | <text class="smalx">剩余{{remaining}}天</text></text>
                </view>
            </view>
        </view>
        <view class="box4">
            <button class="primary1">待付款</button>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                type:'买入',
                state:'',
                mill:'',
                price:'',
                rmb:'',
                x:'',
                time:'',
                name:'',
                contact:'',
                num:'',
                day:'',
                remaining:''
            }
        },
        onLoad(option) {
            var that = this
            console.log(option)
            var ction = JSON.parse(option.mvvp)
            that.ction = ction
            console.log(ction)
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
        height: 560rpx;
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
    .box1 {
        height: 100rpx;
        padding-left: 48rpx;
        line-height: 100rpx;
    }
    .box2 {
        height: 180rpx;
        width: 100%;
        background-color: #fff;
    }
    .bx {
        height: 90rpx;
        line-height: 90rpx;
        padding-left: 48rpx;
        font-size: 32rpx;
    }
    .bxx {
        padding-left: 30rpx;
    }
    .box3{
        width: 100%;
        height: 300rpx;
        background-color: #fff;
    }
    .small2 {
        height: ;
    }
    .img {
        width: 220rpx;
        height: 200rpx;
        float: left;
        padding-left: 48rpx;
        padding-top: 40rpx;
    }
    .small2 {
        float: left;
        padding-left: 20rpx;
        padding-top: 40rpx;

    }
    .small3 {
        float: left;

        padding-top: 40rpx;
    }
    .smal {
        padding-left: 20rpx;
    }
    .smalx {
        padding-left: 20rpx;
        color: #CCCCCC;
    }
    .box4 {
        height: 80rpx;
        line-height: 80rpx;
    }
    .primary1 {
        width: 180rpx;
        height: 60rpx;
        line-height: 60rpx;
        margin-top: 12rpx;
        color: #FFFFFF;
        font-size: 28rpx;
        float: right;
        margin-right: 48rpx;
        background-color: #121212;
    }
</style>
