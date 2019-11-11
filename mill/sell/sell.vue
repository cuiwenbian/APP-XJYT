<template>
    <view class="container">
       <view  class="pagex" v-for="(item , index) in data" :key="index">
           <view class="page1" >
                <view class="img">
                    <image class="por" src="../../static/images/kuangji.png"></image>
                </view>
                <view class="info">
                    <view class="obg">
                        {{item.name}} {{item.number}}
                    </view>
                    <view class="obg_one">
                        <text class="days">已运行{{item.usedays}}天</text> | 剩余{{item.residuedays}}天
                    </view>
       
                    <view class="obg_one">
                        <text class="days">储存{{item.usedisk}}T | 总容量{{item.data_hard_disk}}</text>
                    </view>                    
                </view>
            </view>
        </view>
        <view class="box1">
            <view class="hide">
                <text class="adr">数量：{{san}}台</text>
                <text class="dj">人民币:{{sun}}</text>
            </view>
            <view class="xn"></view>
            <view class="haide">
                
            </view>
            <input class="put" type="number" placeholder="请输入总价" @input="getPriceValue" :value="total_price" />
            <button class="primary" @click="btn">确定出售</button>
        </view>
    </view>
</template>

<script>
    var getRmb=require('../../common/requset.js')
    export default {
        data() {
            return {
                san:'',
                sun:'',
                data:'',
                total_price:'',
                machine_id:'',
                arr:[],
               
            }
        },
        onLoad(option) {
            let arr = []
            var that = this
            var data = JSON.parse(option.tar);
            console.log(option)
            // console.log(option.tar)
            
            that.data=data;
            console.log(that.data)
            that.san = data.length
             console.log(that.data.length)
            for (let i = 0; i < that.data.length; i++) {
               
                console.log(that.data)
                    console.log(that.data[i].machine_id)
                    arr.push(that.data[i].machine_id)
                    console.log(that.data[i].machine_id)
            }
            this.arr = arr
        },
        methods: {
            getPriceValue: function (e) {
                var that = this
                let total_price = this.total_price
                this.total_price = e.detail.value
                this.sun = getRmb.getrmb(e.detail.value)
                console.log(that.total_price)
            },
            btn:function () {
                var that = this
                console.log(that.arr)
                var sunt = JSON.stringify(that.san) 
                var tilo = JSON.stringify(that.total_price) 
                var a = that.arr.join(',')
                var app = JSON.stringify(a)
                console.log(app)
                if(that.total_price == ''){
                    uni.showToast({
                        title:'总价不能为空',
                        icon:'none'
                    })
                }else{
                    uni.navigateTo({
                        url:"../validation/validation?app=" + app + '&sunt='+ sunt + '&tilo='+tilo
                    })
                }
               
            },
        }
    }
</script>

<style>
.pagex {
        display: block;
        width: 100%;
    }
    .page1 {
        height: 180rpx;
        padding-right: 40rpx;
        padding-bottom: 20rpx;

    }
    .img{
        width: 20%;

    },
    .molis{
        float: right;
        margin-bottom: 60rpx;
    }
    .por{
        float: left;
        width: 145rpx;
        height: 126rpx;
        margin-top: 20rpx;
        margin-left: 48rpx;
    }
    .info{
        width: 70%;
        height: 100%;
        float: right;
    }
    .obg{
        margin-top: 20rpx;
        font-size: 30rpx;
        
    }
    .te{

      float: right;
      margin-top: -4rpx;
      width:40rpx;
      height:40rpx;
      margin-right:28rpx;
    }
    .tee{
        float: right;
        margin-top: -4rpx;
        width: 40rpx;
        height: 40rpx;
        margin-right: 20rpx;
    }
    .obh_one {
        font-size: 24rpx;

    }
    .days{
        color: #5ca614;
    }
    .obg_one{
        margin-top: 10rpx;
        font-size: 24rpx;

    }
    .y {
        width: 90%;
        height: 30rpx;
        border-bottom: 2rpx solid #C0C0C0;
        margin: 0 auto;
    }
    .box1 {
        height: 226rpx;
        margin-top: 420rpx;
        position: fixed;
        bottom: 0;
        left:0;
        width: 100%;
        background-color: #fff;
    }
    .hide {
        
        display: block;
        border-bottom: 2rpx solid #CCCCCC;
    }
    .adr {
        display: block;
        float: left;
        margin-top: 10rpx;
        margin-left: 48rpx;
        font-size: 30rpx;
    }
    .dj {
        width: 680rpx;
        float: left;
        margin-top: 60rpx;
        margin-left: -140rpx;
        font-size: 30rpx;
        color: #CCCCCC;
    } 
    .haide {
        width: 100%;
        height: 106rpx;
        border-bottom: 2rpx solid #CCCCCC;
    }
    .put {
        float: left;
        text-align: center;
        width: 370rpx;
        height: 120rpx;
        /* margin-top: 20rpx; */
    }
    .primary {
        float: right;
        line-height: 123rpx;
        color: #FFFFFF;
        border-radius: 0;
        background-color: #121212;
        width: 375rpx;
        height: 123rpx;
    }
</style>
