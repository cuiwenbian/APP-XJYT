<template>
    <view class="container">
        <image src="../../static/images/tubiao.png" class="img"></image>
        <view class="transfer">转让成功</view>
        <view class="box">
            <view class="Accept">接 收 人:
                <text class="name">张三</text>
            </view>
            <view class="Accept">存力空间
                <text class="name">10TB</text>
            </view>
        </view>
        <button class="btn" @click="btn">完成</button>
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
            btn:function() {
                uni.navigateBack({
                    delta:1
                })
            }
        }
    }
</script>

<style>
    page{
        background-color: #0F1E2D;
    }
    .img{
        display: block;
        margin: 166rpx 0 61rpx 247rpx;
        width: 257rpx;
        height: 166rpx;
    }
    .box{
        margin-bottom: 97rpx;
    }
    .transfer{
        text-align: center;
        font-size: 34rpx;
        color: #FFFFFF;
        padding-bottom: 113rpx;
    }
    .Accept{
        padding-left: 104rpx;
        padding-bottom: 61rpx;
        font-size: 26rpx;
        color: #FFFFFF;
    }
    .name{
        float: right;
        padding-right: 105rpx;
    }
    .btn{
        width: 550rpx;
        height: 88rpx;
        background-color: #41BEC9;
        font-size: 30rpx;
        color: #FFFFFF;
    }
</style>
