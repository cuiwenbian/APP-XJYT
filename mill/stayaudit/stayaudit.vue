<template>
    <!-- 待审核详情订单 -->
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
                <text>交易总价:
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
        <view class="box3" v-for="(item , index) in hberd" :key="index">
           <view>
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="small2">
                    专业版:
                    <text class="aa">{{item.name}}</text>
                    <text class="smal">{{item.number}}</text>
                </view>
                <view class="small3">
                    <text class="smalx">已运行{{item.usedays}}天 | <text class="smalx">剩余{{item.residuedays}}天</text></text>
                </view>
                <view class="small3">
                    <text class="smalx">
                        储存{{item.data_hard_disk}} | 
                    </text>
                    <text class="smalx">
                        总容量{{item.usedisk}}T
                    </text>
                </view>  
            </view>
        </view>
        <view class="box4">
            <button class="primary1">审核中</button>
        </view>
    </view>
</template>

<script>
    var getRmb=require('../../common/requset.js')
    export default {
        data(){
            return {
                type:'买入',
                state:'',
                cander:'',
                mill:'',
                price:'',
                hberd:'',
                rmb:'',
                x:'',
                time:'',
                name:'',
                contact:'',
            }
        },
        onLoad(option) {
            var that = this
            console.log(option)
            var cander = JSON.parse(option.dospp)
            that.cander = cander[1]
            console.log(cander)
            
            var hberd = that.cander[1]
            that.hberd = that.cander[1]
            
            that.state = cander[0][0].order_status
            if(that.state == 103) {
                that.state = '待审核'
            }
            that.mill = that.cander[0][0].sale_num
            that.price = that.cander[0][0].sale_money
            that.x = that.cander[0][0].order_num
            that.name = that.cander[0][0].name
            that.contact = that.cander[0][0].mobile
            
            
            that.rmb = getRmb.getrmb(that.price)
        },
        methods:{
            btn:function () {

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
     border-bottom: 1rpx solid #F2F2F2;
     font-size: 28rpx;
 }
 .sam{
     float: right;
     font-size: 28rpx;
     margin-right: 48rpx;
 }
 .aa {
     font-size: 30rpx;
 }
 .lop{
     margin-left: 60rpx;
 }
 .smallx1{
     float: left;
     
 }
 .small1{
     box-sizing: border-box;
     width: 100%;
     float: left;
     height: 80rpx;
     padding-left: 48rpx;
     display: none;
     font-size: 18rpx;
 }
 .smallx {
     box-sizing: border-box;
     float: right;
     font-size: 28rpx;
     padding-right: 48rpx;
 }
 .smallxx {
     box-sizing: border-box;
     color: #E3BA85;
     padding-left: 40rpx;
 }
 .smallxx1{
     margin-left: 48rpx;
 }
 .primary {
     width: 180rpx;
     height: 40rpx;
     line-height: 40rpx;
     margin-top: 60rpx;
     font-size: 22rpx;
 }
 .box1 {
     height: 78rpx;
     padding-left: 48rpx;
     line-height: 78rpx;
     font-size: 32rpx;
     color: #333333;
     background-color: #F6F6F6;
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
     font-size: 28rpx;
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
     font-size: 30rpx;
     padding-left: 20rpx;
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
     padding-left: 34rpx;
     font-size: 26rpx;
     color: #a1a1a1;
 }
 .box4 {
     height: 80rpx;
     line-height: 80rpx;
 }
 .primary1 {
     width: 180rpx;
     height: 60rpx;
     line-height: 60rpx;
     margin-top: 12rpx;
     color: #FFFFFF;
     font-size: 28rpx;
     float: right;
     margin-right: 48rpx;
     background-color: #121212;
 }
</style>
