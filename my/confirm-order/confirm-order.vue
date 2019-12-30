<template>
    <view class="container">
        <view class="box">
            <view class="transfer">转让详情</view>
            <view class="name">接收姓名:
                <text class="name1">张三</text>
            </view>
            <view class="name">手机号码:
                <text class="name1">1756702165</text>
            </view>
            <view class="name">算力空间:
                <text class="name1">10</text>
            </view>
            <view class="name">剩余空间:
                <text class="name1">5T</text>
            </view>
            <view class="name">剩余时间:
                <text class="name1">365天</text>
            </view>
        </view>
        <button class="btn" @click="btn">确认</button>
    </view>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        onLoad(){
            
        },
        methods:{
            btn:function  () {
                uni.navigateTo({
                    url:'../successful/successful'
                })
            }
        }
    }
</script>

<style>
    page{
        background-color: #0F1E2D;
    }
    .box{
        width: 704rpx;
        height: 652rpx;
        background-color: #0F2439;
        margin: 0 auto;
        margin-top: 20rpx;
        font-size: 26rpx;
        margin-bottom: 127rpx;
        color: #FFFFFF;
    }
    .transfer{
        height: 111rpx;
        line-height: 111rpx;
        padding-left: 48rpx;
        border-bottom: 1rpx solid #091926;
    }
    .name{
        padding-top: 57rpx;
        padding-left: 48rpx;
    }
    .name1{
        padding-left: 40rpx;
    }
    .btn{
        width: 706rpx;
        height: 88rpx;
        background-color: #41BEC9;
        font-size: 30rpx;
        color: #FFFFFF;
    }
</style>
