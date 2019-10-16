<template>
    <view class="container">     
        <view class="box1">
            <view class="tab">
                <text class="colo">矿机交易</text>
                <text class="many">{{many}}<text>台</text></text>
            </view>
        </view>
        <view class="box2">
            <view class="market">
                <button class="primary" >买单</button>
                <button class="primary1">卖单</button>
            </view>
        </view>
        <view class="box3">
            <view class="sold">
                <text>可出售</text>
                <button class="btn">去交易</button>
            </view>
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
    
    	}
    }
</script>

<style>

    .box1{
        height: 280rpx;
        background-color:#091219;
        position: relative;
    }
    .tab {
        width: 100%;
    }
    .colo {
        position: absolute;
        top: 42%;
        left: 41%;
        font-size: 16px;
        color: #FFFFFF;
    }
    .many{
        position: absolute;
        top: 64%;
        left: 47%;
        font-size: 24rpx;
        color: #DCB16E;
    }
    .box2{
        height: 200rpx;
        background-color: #FFFFFF;
        position: relative;
    }
    .market {
        width: 100%;
    }
    .primary {
        position: absolute;
        top: 20%;
        left: 5%;
        width: 300rpx;
        height: 120rpx;
        line-height: 120rpx;
        
    }
    .primary1 {
        position: absolute;
        top: 20%;
        left: 57%;
        width: 300rpx;
        height: 120rpx;
        line-height: 120rpx;
       background-color: #091219;
        color: #FFFFFF;
    }
    .box3 {
        height: 120rpx;
        background-color: #F6F6F6;
        position: relative;
    }
    .box3 text {
        line-height: 120rpx;
        width: 40rpx;
        font-size: 36rpx;
        padding-bottom : 44rpx;
        border-bottom: 1rpx solid #DCB16E;
        border: hidden;
    }
    .btn {
        position: absolute;
        bottom: 10%;
        right: 6%;
        width: 160rpx;
        height: 70rpx;
        line-height: 70rpx;
        font-size: 24rpx;
    }
    .pagex {
        width: 100%;
        margin-left: -10rpx;
        margin-right: 10rpx;
        display: inline-block;
    }
    .page1 {
        height: 180rpx;
        margin-left: 50rpx;
        margin-top: 40rpx;
        padding-right: 40rpx;
        padding-bottom: 20rpx;
        display: flex;
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
        margin-left: 30rpx;
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
    }
</style>
