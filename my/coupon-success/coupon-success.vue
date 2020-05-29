<template>
    <view class="container">
        <image src="../static/images/tubiao.png" class="img"></image>
        <view class="transfer">转让成功</view>
        <button :class="n ? 'btn' : 'btn1'" @touchstart="next" @touchend="back" @click="already">完成</button>
    </view>
</template>

<script>
export default {
    data() {
        return {
            n: true
        };
    },
    methods: {
        next: function() {
            this.n = false;
        },
        back: function() {
            this.n = true;
        },
        already: function() {
            uni.navigateBack({
                delta: 2
            });
        }
    }
};
</script>

<style>
page {
    background-color: #0f1e2d;
}
.img {
    display: block;
    margin: 166rpx auto 61rpx;
    width: 257rpx;
    height: 166rpx;
}
.transfer {
    text-align: center;
    font-size: 34rpx;
    color: #ffffff;
    padding-bottom: 113rpx;
}
.btn {
    width: 550rpx;
    height: 88rpx;
    background-color: #41bec9;
    font-size: 30rpx;
    color: #ffffff;
    line-height: 88rpx;
}
.btn1 {
    width: 550rpx;
    height: 88rpx;
    background-color: rgba(65, 190, 201, 0.5);
    font-size: 30rpx;
    color: #ffffff;
    line-height: 88rpx;
}
</style>
