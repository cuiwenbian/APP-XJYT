<template> 
<!-- 卖出已确认订单详情 -->
    <view class="container">
        <view class="box">
            <view class="small">
                <text>交易类型:
                    <text class="smallxx">{{type}}</text>
                </text>
                <text class="smallx">状态:
                    <text class="smallxx">{{state}}</text>
                </text>
            </view>
            <view class="small">
                矿机数量:<text class="smallxx">{{mill}}台</text>
            </view>
            <view class="small">
                <text>交易总价:&nbsp;&nbsp;&nbsp;
                    <text class="smallxx">{{price}}</text>
                </text>
                <text class="smallx1">人民币:
                    <text class="lop">{{rmb}}</text>
                </text>
            </view>
            <view class="small">
                <text>
                    订单编号:<text class="smallxx">{{x}}</text>
                </text>
            </view>
            <view class="small1">
                <text>
                    创建时间:<text class="smallxx">{{time}}</text>
                </text>
            </view>
            <view class="small1">
                <text>
                    支付时间：<text class="smallxx">{{time}}</text>
                </text>
            </view>
            <view class="small1">
                <text>
                    确认时间：<text class="smallxx">{{time}}</text>
                </text>
            </view>
            <view>
                <button class="primary" @click="btn">查看全部^</button>
            </view>
        </view>
        <view class="box1">
            买家信息
        </view>
        <view class="box2">
            <view class="bx">姓名:
                <text class="bxx">{{name}}</text>
            </view>
            <view class="bx">联系方式:
                <text class="bxx">{{contact}}</text>
            </view>
        </view>
        <view class="box1">
            商品信息
        </view>
        <view class="box3" v-for="(item , index) in italn" :key="index">
            <view>
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view class="sm">
                <view class="small2">
                    专业版:
                    <text class="aa">{{num}}</text>
                    <text class="smal">{{xx}}</text>
                </view>
                <view class="small3">
                    <text class="smalx">已运行{{day}}天 | <text class="smalx">剩余{{remaining}}天</text></text>
                </view>
                <view class="small3">
                    <text class="smalx">
                        储存{{usedisk}} | 
                    </text>
                    <text class="smalx">
                        总容量{{poirk}}T
                    </text>
                </view>  
            </view>
        </view>
    </view>
</template>

<script>
    var getRmb=require('../../common/requset.js')
    export default {
        data(){
            return {
                type:'卖出',
                state:'',
                mill:'',
                price:'',
                rmb:'',
                x:'',
                xx:'',
                time:'',
                name:'',
                contact:'',
                num:'',
                day:'',
                remaining:'',
                usedisk:'',
                poirk:'',
                italn:'',
            }
        },
        onLoad(option) {
            var that = this
            console.log(option);
            var italn = JSON.parse(option.cshug)
            console.log(italn)
            that.italn = italn[1]
            that.state = italn[0][0].order_status
            if(that.state == 104) {
                that.state = '已完成'
            }
            that.mill = italn[0][0].sale_num
            that.price = italn[0][0].sale_money
            that.x = italn[0][0].order_num
            that.name = italn[0][0].name
            that.contact = italn[0][0].mobile
            
            that.num = italn[1][1].name
            that.xx = italn[1][1].number
            that.day = italn[1][1].usedays
            that.remaining = italn[1][1].residuedays
            that.usedisk = italn[1][1].data_hard_disk
            that.poirk = italn[1][1].usedisk
            
            that.rmb = getRmb.getrmb(that.price)
        },
        methods:{
            btn:function () {
                var that = this
            }
        }
    }
</script>

<style>
  page {
        background-color: #DCDCDC;
    }
    .box {
        height: 560rpx;
        width: 100%;
        background-color: #fff;
    }
    .small {
        box-sizing: border-box;
        width: 100%;
        height: 110rpx;
        line-height: 110rpx;
        float: left;
        padding-left: 48rpx;
        font-size: 32rpx;
    }
    .aa {
        font-size: 30rpx;
    }
    .lop{
        font-size: 20rpx;
        margin-right: 48rpx;
    }
    .smallx1{
        float: right;
        margin-left: 16rpx;
    }
    .sm{
        height: 100%;
    }
    .small1{
        box-sizing: border-box;
        width: 100%;
        float: left;
        height: 80rpx;
        padding-left: 48rpx;
        display: none;
        font-size: 32rpx;
    }
    .smallx {
        float: right;
        font-size: 32rpx;
        box-sizing: border-box;
        padding-right: 48rpx;
    }
    .smallxx {
        box-sizing: border-box;
        padding-left: 40rpx;
    }
    .primary {
        width: 180rpx;
        height: 40rpx;
        line-height: 40rpx;
        font-size: 22rpx;
    }
    .box1 {
        height: 80rpx;
        font-size: 34rpx;
        padding-left: 48rpx;
        line-height: 80rpx;
    }
    .box2 {
        height: 180rpx;
        width: 100%;
        background-color: #fff;
    }
    .bx {
        height: 90rpx;
        line-height: 90rpx;
        padding-left: 48rpx;
        font-size: 32rpx;
    }
    .bxx {
        padding-left: 30rpx;
    }
    .box3{
        width: 100%;
        height: 260rpx;
        background-color: #fff;
    }
    .img {
        width: 160rpx;
        height: 160rpx;
        float: left;
        padding-left: 48rpx;
        padding-top: 40rpx;
    }
     .small2 {
         float: left;
         width: 66%;
         font-size: 34rpx;
         padding-left: 20rpx;
         margin-right: 20rpx;
         padding-top: 40rpx;
     }
     .small3 {
         float: left;
         padding-top: 20rpx;
         font-size: 32rpx;
     }
     .smal {
         padding-left: 20rpx;
     }
     .smalx {
         margin-left: 30rpx;
         font-size: 32rpx;
         color: #CCCCCC;
     }

</style>
