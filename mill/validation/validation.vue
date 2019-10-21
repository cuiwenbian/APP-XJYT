<template>
    <view class="container">
        <view class="box">
            <text class="name">姓名</text><input type="text" placeholder="请输入买家姓名" class="inp" @input="end">
            <view class="name1">联系方式<input type="number" placeholder="请输入手机号" class="int"/></view>
        </view>
        <view>
            <text class="stop">提示:交易需要买家和卖家进行实名认证</text>
        </view>
        <view class="btn">
            <button class="primary" @click="end1">确认</button>
        </view>
    </view>
</template>


<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            end:function (e) {
                this.name = e.detail.value.length
            },
            end1:function () {
                if(this.name > 0) {
                    uni.showToast({
                        title:"用户不存在",
                        icon:"none"
                    })
                }else {
                    uni.navigateTo({
                        url:'../confirm/confirm'
                    })
                }
            }
        }
    }
</script>


<style>
    page{
        background-color: #DCDCDC;
    }
    .box {
        width: 650rpx;
        height: 300rpx;
        border: 2rpx solid #FFFFFF;
        background-color: #FFFFFF;
        margin: 40rpx auto;
        border-radius: 15px;
    }
    .name{
        float: left;
        height: 150rpx;
        line-height: 150rpx;
        padding-left: 48rpx;
        
    }
    .name1 {
        float: left;
        height: 150rpx;
        line-height: 150rpx;
        padding-left: 48rpx;
    }
    .inp {
         width: 300rpx;
         padding-right: 90rpx;
         height: 150rpx;
        float: right;
    }
    .int {
        width: 300rpx;
        height: 150rpx;
        float: right;
        padding-left: 60rpx;
    }
    .stop {
        float: left;
        padding-left: 96rpx;
        font-size: 26rpx;
    }
    .btn{
        height: 120rpx;
    }
    .primary {
        width: 650rpx;
        height: 100rpx;
        margin: 340rpx auto;
        color: #FFFFFF;
        background-color: #121212;
    }
</style>