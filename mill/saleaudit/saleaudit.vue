<template>
    <!-- 卖出待审核详情订单 -->
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
                    <text class="smallxx1">{{information.sale_money}}</text>
                </text>
                <text class="ser">
                    服务器数量:<text class="smallxx1">{{information.sale_num}}</text>台
                </text>
            </view>
            <view class="small">
                <text class="smallx1">人民币:
                    <text class="lop">{{rmb}}</text>
                </text>
            </view>
            <view class="smallss">
                <text>
                    订单编号:<text class="smallxx1">{{information.order_num}}</text>
                </text>
            </view>
            <view  :class="frte?'small1':'smallpo'">
                <text>
                    创建时间:<text class="smallxx1">{{information.set_time}}</text>
                </text>           
                <view>
                    <text>
                        支付时间:<text class="smallxx1">{{information.pay_time}}</text>
                    </text>
                </view>
                <view>
                    <text>
                        确认时间:<text class="smallxx1">{{information.confirm_time}}</text>
                    </text>
                </view>
            </view>
           <button :class="frte?'primary':'primary2'" @click="btn">{{checkall}}<image :src="frte?'../../static/images/Rectangle1.png':'../../static/images/Rectangle.png'" style="width:30rpx;height:25rpx;margin-left: 12rpx;" mode=""></image></button>
        </view>
       <view class="box1">
            买家信息
        </view> 
      <view class="box2">
            <view class="bx">姓名:
                <text class="bxx">{{information.name}}</text>
            </view>
            <view class="bx">联系方式:
                <text class="bxx">{{information.mobile}}</text>
            </view>
        </view>
        <view class="box1">
            商品信息
        </view>
        <view class="box3" v-for="(item , index) in clorn" :key="index">
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
                        储存{{item.usedisk}}T| 
                    </text>
                    <text class="smalx">
                        总容量{{item.data_hard_disk}}
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
                type:'卖出',
                vinda:'',
                state:'',
                price:'',
                rmb:'',
                clorn:'',
                frte:true,
                checkall:'展示完整信息',
				information:''
            }
        },
        onLoad(option) {
            var that = this
            //获取上个页面携带的数据，并复制
            var vinda = JSON.parse(option.suxang)
            that.vinda = vinda
            var clorn = that.vinda[1]
            that.clorn = that.vinda[1]
            that.state = vinda[0][0].order_status
            if(that.state == 103) {
                that.state = '待确认'
            }
			that.information=that.vinda[0][0]
            that.price = that.vinda[0][0].sale_money
            that.rmb = getRmb.getrmb(that.price)
        },
        methods:{
            btn:function () {
                var that = this
                that.frte=!that.frte;
                if(that.frte==false){
                    that.checkall='收起';
                }else{
                    that.checkall='展示完整信息'
                }
            }
        }
    }
</script>

<style>
page {
      background-color: #152437;
      margin-bottom:40rpx;
  }
    .box {
        width: 100%;
        background-color:  #152437;
        padding-bottom:20rpx;
        color: #FFFFFF;
    }
    .primary {
        width: 250rpx;
        height: 40rpx;
        border-radius: 70rpx;
         border: 1rpx solid #000000;
        color: #FFFFFF;
        background-color: #FFFFFF;
        line-height: 40rpx;
         margin-top:20rpx;
        font-size: 22rpx;
    }
    .primary2 {
        width: 180rpx;
        height: 40rpx;
        border-radius:70rpx;
        border: 0.5rpx solid #000000;
        color: #000000;
        background-color: #FFFFFF;
        line-height: 40rpx;
         margin-top:20rpx;
        font-size: 16rpx;
    }
    .smallss{
        box-sizing: border-box;
        width: 100%;
        height: 110rpx;
        line-height: 110rpx;
        float: left;
        padding-left: 48rpx;
        margin-bottom: 20rpx;
        font-size: 28rpx;
    }
  .small {
      box-sizing: border-box;
      width: 100%;
      height: 110rpx;
      line-height: 110rpx;
      float: left;
      padding-left: 48rpx;
      border-bottom: 1rpx solid #121E2C;
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
  .ser {
      float: right;
      margin-right: 48rpx;
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
  .box1 {
      height: 78rpx;
      padding-left: 48rpx;
      line-height: 78rpx;
      font-size: 32rpx;
      color: #FFFFFF;
      background-color: #152437;
  }
  .box2 {
      height: 180rpx;
      width: 100%;
      background-color: #152437;
      color: #FFFFFF;
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
      position: fixed;
      bottom: 0rpx;
      right: 0rpx;
      height: 80rpx;
      width: 100%;
      background-color: #152437;
      line-height: 80rpx;
  }
  .primary1 {
      width: 240rpx;
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
