<template>
	<!-- 我的存力 -->
	<view class="container">
        <view class="box">
            <image src="../../static/images/fgm.png" class="img">
                <view class="power">我的存力</view>
            </image>
            <view class="power2">257
                <view class="power3">我的存力</view>
            </view>
            <view class="x"></view>
            <view class="usage">72%
                <view class="usage2">使用率</view>
            </view>
        </view>
        <view class="pay">已购存力</view>
        <view class="box2">
            <view class="contract">
                <text class="contract2">合约日期:
                    <text class="time">2019-12-30至2019-12-30</text>
                    <button class="transfer" @click="transfer">转让</button>
                </text>
            </view>
            <view class="mill">
                <view class="mill2">
                    <text class="orepool">矿池名称</text>
                    <text>已购数量:   
                        <text class="linga"> 10TB</text>
                    </text>
                    <text>使用率:
                        <text class="linga">0%</text>
                    </text>
                    <text>剩余:
                        <text class="linga">360天</text>
                    </text>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
    export default {
        data () {
           return {
               
           } 
        },
       onLoad() {
           
       },
       methods:{
           transfer:function () {
               uni.navigateTo({
                   url:'../power-transfer/power-transfer'
               })
           }
       }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    page{
        background-color: #0F1E2D;
    }
    .img{
        position: relative;
        width: 100%;
        height: 326rpx;
    }
    .box{
        width: 100%;
        height: 326rpx;
    }
    .power{
        width: 100%;
        position: absolute;
        top: 30rpx;
        text-align: center;
        font-size: 36rpx;
        color: #FFFFFF;
    }
    .power2{
        position: absolute;
        top: 190rpx;
        left: 128rpx;
        float: left;
        text-align: center;
        font-size: 42rpx;
        color: #FFFFFF;
    }
    .power3{
        font-size: 24rpx;
        color: #FFFFFF;
    }
    .x{
        width: 3rpx;
        height: 90rpx;
        position: absolute;
        top: 190rpx;
        left: 360rpx;
        background:rgba(151,162,231,1);
    }
    .usage{
        position: absolute;
        top: 190rpx;
        right: 128rpx;
        float: right;
        text-align: center;
        font-size: 42rpx;
        color: #FFFFFF;

    }
    .usage2{
        font-size: 24rpx;
        color: #FFFFFF;
     }
     .pay{
         height: 85rpx;
         background-color: #0F2439;
         line-height: 85rpx;
         padding-left: 48rpx;
         margin-top: 30rpx;
         margin-bottom: 20rpx;
         font-size: 26rpx;
         color: #FFFFFF;
     }
     .box2 {
         width: 704rpx;
         height: 222rpx;
         margin: 0 auto;
         background-color: #0F2439;
     }
     .contract{
         height: 105rpx;
         border-bottom: 1rpx solid #091926;
     }
     .contract2{
         line-height: 105rpx;
         padding-left: 20rpx;
         font-size: 24rpx;
         color: #8796AA;
     }
     .time{
         padding-left: 30rpx;
     }
     .transfer{
         width: 103rpx;
         height: 44rpx;
         font-size: 22rpx;
         margin-top: 30rpx;
         margin-right: 10rpx;
         float: right;
         color: #41BEC9;
         background-color: #0F2439;
         border: 1rpx solid #41BEC9;
         border-radius:5px;
     }
     uni-button{
         line-height: 1.6;
     }
     .mill{
         position: fixed;
         width: 704rpx;
         height: 116rpx;
     }
     .mill2{
         position: fixed;
         line-height: 116rpx;
         font-size: 24rpx;
         color: #FFFFFF;
         padding-left: 20rpx;
     }
     .orepool{
         padding-right: 20rpx;
     }
     .linga{
         padding-right: 20rpx;
         padding-left: 20rpx;
     }
</style>
