<template>
    <!-- 待确认详情订单 -->
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
                <text>交易总价:
                    <text class="smallxx1">{{price}}</text>
                </text>
                <text class="ser">
                    矿机数量:<text class="smallxx1">{{mill}}</text>台
                </text>
            </view>
            <view class="small">
                <text class="smallx1">人民币:
                    <text class="lop">{{rmb}}</text>
                </text>
            </view>
            <view class="small">
                <text>
                    订单编号:<text class="smallxx1">{{x}}</text>
                </text>
            </view>
            <view :class="frte?'small1':'smallpo'">
                <view>
                    <text>
                        创建时间:<text class="samkx">{{set_time}}</text>
                    </text>
                </view>
                <view >
                    <text>
                        支付时间:<text class="samkx">{{pay_time}}</text>
                    </text>
                </view>
            </view>
            <view>
                <button class="primary" @click="btn">{{checkall}}</button>
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
        <view class="box3" v-for="(item , index) in ig" :key="index">
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
            <button class="primary1">等待买家确认收款</button>
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
                mill:'',
                rmb:'',
                x:'',
                fanta:'',
                pay_time:'',
                price:'',
                set_time:'',
                name:'',
                contact:'',
                ig:'',
                frte:true,
                checkall:'查看全部'
            }
        },
        onLoad(option) {
            var that = this
            var fanta = JSON.parse(option.main)
            console.log(fanta)
            that.fanta = fanta
            var ig = that.fanta[1]
            that.ig = that.fanta[1]
            that.state = fanta[0][0].order_status
            if(that.state == 102) {
                that.state = '待确认'
            }
            that.mill = fanta[0][0].sale_num
            that.price = fanta[0][0].sale_money
            that.x = fanta[0][0].order_num
            that.name = fanta[0][0].name
            that.contact = fanta[0][0].mobile
            that.set_time = fanta[0][0].set_time
            that.pay_time = fanta[0][0].pay_time
            that.rmb = getRmb.getrmb(that.price)
        },
        methods:{
            btn:function () {
                var that = this
                that.frte=!that.frte;
                if(that.frte==false){
                    that.checkall='收起';
                }else{
                    that.checkall='查看全部'
                }
            }
        }
    }
</script>

<style>
 page {
     background-color: #DCDCDC;
     margin-bottom:40rpx;
 }
 .box {
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
     font-size: 28rpx;
 }
 .smallpo{
     display: block;
     line-height: 80rpx;
     font-size: 28rpx;
     padding-left: 48rpx;
     font-size: 28rpx;
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
     padding-left: 48rpx;
 }
 .samkx{
     padding-left: 48rpx;
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
 .ser {
     float: right;
     margin-right: 48rpx;
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
      position: fixed;
      bottom: 0rpx;
      right: 0rpx;
      height: 80rpx;
      width: 100%;
      background-color: #F6F6F6;
      line-height: 80rpx;
  }
 .primary1 {
     width: 280rpx;
     height: 60rpx;
     line-height: 60rpx;
     margin-top: 12rpx;
     color: #FFFFFF;
     font-size: 28rpx;
     float: right;
     margin-right: 48rpx;
     background-color: #999999;
 }
</style>
