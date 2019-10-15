<template>
    <view class="container">     
        <view class="box1">
            <view class="tab">
                <text class="colo">矿机交易</text>
                <text class="many">{{many}}台</text>
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
        font-size: 14rpx;
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
    }
    .btn {
        position: absolute;
        bottom: 20%;
        right: 6%;
        width: 160rpx;
        height: 70rpx;
        line-height: 70rpx;
        font-size: 24rpx;
    }
</style>
