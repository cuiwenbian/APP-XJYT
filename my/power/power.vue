<template>
    <!-- 我的存力 -->
    <view class="container">
        <view class="box">
            <image src="../../static/images/fgm.png" class="img">
                <image src="" mode=""></image>
                <view class="power">我的存力</view>
            </image>
            <view class="power2">
                {{ hashrate_total }}
                <view class="power3">我的存力</view>
            </view>
            <view class="x"></view>
            <view class="usage">
                {{ use_avg }}%
                <view class="usage2">使用率</view>
            </view>
        </view>
        <view class="pay">已购存力</view>
        <view class="box2" v-for="(item, index) in contract" :key="index">
            <view class="contract">
                <view class="contract2">
                    合约日期:
                    <text class="time">{{ item.starttime }}至{{ item.endtime }}</text>
                    <button :class="n ? 'transfer' : 'transfer1'" @click="transfer(item)">转让</button>
                </view>
            </view>
            <view class="mill">
                <view class="mill2">
                    <text class="orepool">{{ item.name }}</text>
                    <text>
                        已购数量:
                        <text class="linga">{{ item.hashrate }}TB</text>
                    </text>
                    <text>
                        使用率:
                        <text class="linga">{{ item.use }}%</text>
                    </text>
                    <text>
                        剩余:
                        <text class="linga">{{ item.days }}天</text>
                    </text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            n: true,
            contract: '',
            hashrate_total: '',
            use_avg: ''
        };
    },
    onLoad() {
        var that = this;
        uni.request({
            url: this.url + 'mycloud/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success(res) {
                console.log(res);
                var contract = [];
                var hashrate_total = 0; // 总数
                var use_total = 0;
                var use_avg = 0; // 平均数
                if (res.data.data instanceof Array) {
                    contract = res.data.data.map(item => {
                        item.starttime = item.starttime ? item.starttime.substring(0, 10) : '';
                        item.endtime = item.endtime ? item.endtime.substring(0, 10) : '';
                        hashrate_total += parseFloat(item.hashrate || 0);
                        use_avg += parseFloat(item.use || 0);
                        return item;
                        use_avg = (use_total / res.data.data.length).toFixed(2);
                    });
                }
                that.hashrate_total = hashrate_total;
                that.use_avg = use_avg;
                that.contract = contract;
            }
        });
    },
    methods: {
        transfer: function(item) {
            var that = this;
            console.log(item.days);
            uni.request({
                url: this.url + 'cloudtransfer/',
                method: 'GET',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    console.log(res);
                    if(res.statusCode == 200) {
                        uni.navigateTo({
                            url: '../power-transfer/power-transfer?ids=' + item.id + '&day='+ item.days +'&rate=' + item.hashrate
                        });
                    }
                }
            });
        }
    }
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
page {
    background-color: #0f1e2d;
}
.img {
    position: relative;
    width: 100%;
    height: 326rpx;
}
.box {
    width: 100%;
    height: 326rpx;
}
.power {
    width: 100%;
    position: absolute;
    top: 60rpx;
    text-align: center;
    font-size: 36rpx;
    color: #ffffff;
}
.power2 {
    position: absolute;
    top: 190rpx;
    left: 128rpx;
    float: left;
    text-align: center;
    font-size: 42rpx;
    color: #ffffff;
}
.power3 {
    font-size: 24rpx;
    color: #ffffff;
}
.x {
    width: 3rpx;
    height: 90rpx;
    position: absolute;
    top: 190rpx;
    left: 360rpx;
    background: rgba(151, 162, 231, 1);
}
.usage {
    position: absolute;
    top: 190rpx;
    right: 128rpx;
    float: right;
    text-align: center;
    font-size: 42rpx;
    color: #ffffff;
}
.usage2 {
    font-size: 24rpx;
    color: #ffffff;
}
.pay {
    height: 85rpx;
    background-color: #0f2439;
    line-height: 85rpx;
    padding-left: 48rpx;
    margin-top: 30rpx;
    margin-bottom: 20rpx;
    font-size: 26rpx;
    color: #ffffff;
}
.box2 {
    width: 704rpx;
    height: 222rpx;
    margin: 0 auto;
    margin-bottom: 20rpx;
    background-color: #0f2439;
}
.contract {
    height: 105rpx;
    border-bottom: 1rpx solid #091926;
}
.contract2 {
    line-height: 105rpx;
    padding-left: 20rpx;
    font-size: 24rpx;
    color: #8796aa;
}
.time {
    padding-left: 30rpx;
}
.transfer {
    width: 110rpx;
    height: 44rpx;
    line-height: 44rpx;
    font-size: 22rpx;
    margin-top: 30rpx;
    margin-right: 10rpx;
    float: right;
    color: #41bec9;
    background-color: #0f2439;
    border: 1rpx solid #41bec9;
    border-radius: 5px;
}
.transfer1 {
    width: 110rpx;
    height: 44rpx;
    line-height: 44rpx;
    font-size: 22rpx;
    margin-top: 30rpx;
    margin-right: 10rpx;
    float: right;
    color: #41bec9;
    border: 1rpx solid #41bec9;
    border-radius: 5px;
    background: RGBA(0, 193, 203, 0.5);
}
uni-button {
    text-align: center;
}
.mill {
    position: fixed;
    width: 704rpx;
    height: 116rpx;
}
.mill2 {
    position: fixed;
    line-height: 116rpx;
    font-size: 24rpx;
    color: #ffffff;
    padding-left: 20rpx;
}
.orepool {
    padding-right: 20rpx;
}
.linga {
    padding-right: 20rpx;
    padding-left: 20rpx;
}
</style>
