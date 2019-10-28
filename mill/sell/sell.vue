<template>
    <view class="container">
       <view  class="pagex" v-for="(item , index) in user_id" :key="index">
           <view class="page1" >
                <view class="img">
                    <image class="por" src="../../static/images/kuangji.png"></image>
                </view>
                <view class="info">
                    <view class="obg">
                        {{item.name}} {{item.number}}
                    </view>
                <view class='boo_img3'  @tap='select'>
                    <image v-if="lo" class="tee" src="../../static/images/zu7.png"></image>
                    <image v-else  class='te' src='../../static/images/tuo5.png'></image>
				</view>
                    <view class="obg_one">
                        <text class="days">已运行{{item.data}}天</text> | 剩余{{item.usedata}}天
                    </view>

                    <view class="obg_two">
                        储存{{item.freedisk}}T | 总容量{{item.disk}}
                    </view>                    
                </view>
            </view>
        </view>
        <view class="Serial"></view>
        <view class="box1">
            <view class="hide">
                <text class="adr">数量：{{san}}台</text>
                <text class="dj">人民币:{{sun}}</text>
            </view>
            <view class="xn"></view>
            <view class="haide">
                <input class="put" type="number" placeholder="请输入总价" @input="getPriceValue" value="total_price" />
                <button class="primary" @click="btn">确定出售</button>
            </view>
        </view>
    </view>
</template>

<script>
    var getRmb=require('../../common/requset.js')
    export default {
        data() {
            return {
                name:'',
                number:'',
                user_id:'',
                data:'',
                usedata:'',
                freedisk:'',
                disk:'',
                
                san:'',
                sun:''
            }
        },
        onLoad(options) {
            console.log(options)
            uni.request({
                url:this.urll + 'buildorders/',
                method:'GET',
                header:{
                     Authorization: 'JWT'+' '+this.global_.token
                },
                data:{
                    
                },
                success(res) {
                    console.log(res)
                }
            })
        },
        methods: {
            getPriceValue: function (e) {
                let total_price = this.total_price
                this.total_price = e.detail.value
                this.sun = getRmb.getrmb(e.detail.value)
            },
            btn:function () {
                uni.navigateTo({
                    url:"../validation/validation"
                })
            },
        }
    }
</script>

<style>
.pagex {

        width: 100%;
        display: block;
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
      display: block;
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
        /* display: none; */
    }
    .obh_one {
        font-size: 24rpx;

    }
    .days{
        color: #5ca614;
    }
    .obg_one{
        font-size: 24rpx;

    }
    .y {
        width: 90%;
        height: 30rpx;
        border-bottom: 2rpx solid #C0C0C0;
        margin: 0 auto;
    }
    .Serial{
        height: 820rpx;
        background-color: #CCCCCC;
    }
    .box1 {
        height: 226rpx;
        width: 100%;
    }
    .hide {
        height: 106rpx;
        border-bottom: 2rpx solid #CCCCCC;
    }
    .adr {
        width: 220rpx;
        line-height: 106rpx;
        float: left;
        padding-left: 54rpx;
        font-size: 34rpx;
    }
    .dj {
        float: left;
        padding-left: 54rpx;
        line-height: 106rpx;
        font-size: 30rpx;
        color: #CCCCCC;
    } 
    .haide {
        width: 100%;
        height: 120rpx;
    }
    .put {
        float: left;
        text-align: center;
        width: 370rpx;
        height: 123rpx;
    }
    .primary {
        float: right;
        line-height: 123rpx;
        color: #FFFFFF;
        background-color: #121212;
        margin-top: 8rpx;
        width: 375rpx;
        height: 123rpx;
    }
</style>
