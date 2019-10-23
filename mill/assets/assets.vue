<template>
    <view class="container">

		 <view class="height"></view>
        <view class="box">
            <text class="assets">总资产</text>
            <view class="number">{{num}}  FIL</view>
            <text class="coin">可用币  {{ber}}</text>
            <text class="lock">锁定  {{nuber}}</text>

        </view>
        <view class="btn">
            <button class="primary">提交</button>
            <button class="primary1" @click="btn">转账</button>
        </view>
        <view class="haide">
            <text class="income">收入记录</text>
            <text class="pointed">支出记录</text>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                num:'',
                ber:'',
                nuber:''
            }
        },
        onLoad:function (opetions) {
            this.num = opetions.num
            this.ber = opetions.ber
            this.nuber = opetions.nuber
            uni.request({
                url:this.url + "assets/?num" + this.num + this.nuber,
                method:'GET',
                header:{
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization":"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjE3NjIxODk4NTg3IiwiZXhwIjoxNTcyMDcyODU2LCJ1c2VyX2lkIjoyLCJtb2JpbGUiOiIxNzYyMTg5ODU4NyJ9.GY5K2WX5zenC_EkJ6hhIMcEebLBkMfuNgpLBXrK9tIo"
                },
                success(res) {
                    
                }
            })
        },
        methods:{
            btn(){
                uni.navigateTo({
                    url:'/my/transfer/transfer'
                })
            }
        }
    }
</script>

<style>
	.height {
		height: var(--status-bar-height);
		background-color: #121212;
	}
    .box{
        width: 100%;
        height: 400rpx;
        background-color: #121212;
    }
    .assets{
        text-align: center;
		height: 60rpx;
		width: 100%;
		float: left;
        color: #FFFFFF;
    }
    .number{
		height: 300rpx;
		padding-left: 268rpx;
		padding-top: 40rpx;
        color: #F0AD4E;
    }
    .coin{
		float: left;
		padding-left: 48rpx;
        font-size: 24rpx;
        color: #FFFFFF;
    }
    .lock {
		float: right;
		padding-right: 48rpx;
        font-size: 24rpx;
        color: #FFFFFF;
    }
    .btn {
        height: 150rpx;
        width: 100%;
    }
    .primary{
        width: 220rpx;

        height: 88rpx;
		float: left;
		margin-left: 48rpx;

		margin-top: 40rpx;
    }
    .primary1 {
        width: 220rpx;

        height: 88rpx;
		float: right;
		margin-right: 48rpx;

		margin-top: 40rpx;
        background-color: #121212;
        color: #FFFFFF;
    }
    .haide {
        width: 100%;
        height: 80rpx;
        background-color: #EDEDED;
    }
    .income{
        font-size: 30rpx;
        padding-bottom: 20rpx;
        margin-left: 46rpx;
        line-height: 80rpx;
        border-bottom: 1rpx solid #B39C01;
        border: hidden;
    }
    .pointed {
        font-size: 30rpx;
        padding-bottom: 20rpx;
        margin-left: 110rpx;
        line-height: 80rpx;
        border-bottom: 1rpx solid #B39C01;
        border: hidden;
    }
</style>
