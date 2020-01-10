<template>
    <view class="container">
        <image src="../../static/images/cheng.png" class="img"></image>
        <view class="transfer">出售成功</view>
        <view class="box">
            <view class="Accept">接 收 人:
                <text class="name">{{number}}</text>
            </view>
            <view class="Accept">服务器数量:
                <text class="name">{{cool}}台</text>
            </view>
        </view>
        <button class="btn" @click="btn" @touchstart="next" @touchend="back">完成</button>
    </view>
</template>

<script>
    export default {
        data () {
            return {
                number:'',
                cool:''
            }
        },
        onLoad(option) {
            console.log(option)
            this.number = option.numb
            this.cool = option.cool
        },
        methods:{
            btn:function() {
                uni.navigateBack({
                    delta:3
                })
            }
        }
    }
</script>
85295.65 26549
<style>
    .img{
        display: block;
        margin: 166rpx 0 61rpx 310rpx;
        width: 130rpx;
        height: 130rpx;
    }
    .box{
        margin-bottom: 97rpx;
    }
    .transfer{
        text-align: center;
        font-size: 34rpx;
        color: ##333333;
        padding-bottom: 113rpx;
    }
    .Accept{
        padding-left: 102rpx;
        padding-bottom: 61rpx;
        font-size: 26rpx;
        color: #666666;
    }
    .name{
        float: right;
        padding-right: 105rpx;
    }
    .btn{
        width: 690rpx;
        height: 90rpx;
        background-color: #040404;
        font-size: 30rpx;
        color: #FFFFFF;
    }
</style>
