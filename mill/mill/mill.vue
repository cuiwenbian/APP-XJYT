<template>
    <view class="container">     
        <view class="box1">
            <view class="colo">矿机交易</view>
            <view class="many">{{many}}台</view>
        </view>
       <view class="box2">
            <view class="market">
                <button class="primary" @click="pay">买单</button>
                <button class="primary1" @click="sale">卖单</button>
            </view>
        </view>
       <view class="box3">
            <text>可出售</text>
            <button class="btn">去交易</button>
        </view>
       <view class="pagex" v-for="(item , index) in user_id" :key="index">
            <view class="page1">
                <view class="img">
                    <image src="../../static/images/kuangji.png"></image>
                </view>
                <view class="info">
                    <view class="obg">
                        {{item.machin_name}} {{item.number}}
                    </view>
                    <view class="obg_one">
                        <text class="days">已运行{{item.run_time}}天</text> | 剩余{{item.remaining_time}}天
                    </view>
                    <view class="obg_two">
                        储存{{item.fs_used}}T | 总容量{{item.fs_total}}T
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
    	data() {
    		return {
    			many: '0'
    		}
    	},
    	onLoad() {
    
    	},
    	methods: {
            pay:function () {
                uni.navigateTo({
                    url:'../pay/pay'
                })
            },
            sale:function() {
                uni.navigateTo({
                    url:'../sale/sale'
                })
            }
    	}
    }
</script>

<style>

    .box1{
        height: 280rpx;
        background-color:#091219;
    }
    .colo {
		float: left;
		width: 100%;
		height: 40rpx;
        font-size: 28rpx;
		text-align: center;	
		padding-top: 120rpx;
        color: #FFFFFF;
    }
   .many{
		float: left;
		width: 100%;
		height: 60rpx;
		padding-left: 348rpx;
        box-sizing: border-box;
		padding-top: 40rpx;
        font-size: 28rpx;
        color: #DCB16E;
    }
    .box2 {
        height: 150rpx;
        width: 100%;
    }
    .market {
        width: 100%;
    }
    .primary{

        width: 220rpx;
        height: 88rpx;
        line-height: 88rpx;
		float: left;
		margin-left: 48rpx;
		margin-top: 40rpx;
    }
    .primary1 {
        width: 220rpx;
        height: 88rpx;
        line-height: 88rpx;
		float: right;
		margin-right: 48rpx;
		margin-top: 40rpx;
        background-color: #121212;
        color: #FFFFFF;
    }
    .box3 {
		width: 100%;
        height: 120rpx;
        background-color: #F6F6F6;
    }
    .box3 text {
		width: 108rpx;
        line-height: 120rpx;
		float: left;
        font-size: 36rpx;
		margin-left: 48rpx;
        border-bottom: 1rpx solid #DCB16E;
    }
    .btn {
		float: right;
		margin-right: 48rpx;
		margin-top: 30rpx;
        width: 160rpx;
        height: 70rpx;
        line-height: 70rpx;
        font-size: 24rpx;
    }
/*    .pagex {

        width: 100%;
        display: block;
    }
    .page1 {

        height: 180rpx;

        padding-right: 40rpx;
        padding-bottom: 20rpx;

    }
    .img{
        width: 20%;
        height: 100%;
        float: left;
    }
    .info{

        width: 70%;
        height: 100%;
        float: right;
    }
    .obg{
        font-size: 30rpx;
        line-height: 50rpx;
    }
    .obh_one {
        font-size: 24rpx;
        line-height: 50rpx;
    }
    .days{
        color: #5ca614;
    }
    .obg_one{
        font-size: 24rpx;
        line-height: 50rpx;
    } */
</style>
