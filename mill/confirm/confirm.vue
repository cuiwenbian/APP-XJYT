<template>
    <view class="container">
        <view class="box1">
            <text class="name">
                姓名:  <text class="loo">{{name}}</text> 
            </text>
            <text class="pag">
                联系方式: <text class="loo">{{pag}}</text>
            </text>
        </view>
        <view class="">
        <view class="box"  v-for="(item , index) in data" :key="index">
            <view class="left">
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="right">
                    <text class="info">{{item.name}} {{item.number}}</text>
                </view>
                <view >
                    <text class="all">已运行{{item.usedays}}天 | 剩余{{item.residuedays}}天</text>
                </view>
                <view>
                    <text class="area">
                        储存{{item.data_hard_disk}}T | 总容量{{item.usedisk}}T
                    </text>
                </view>
            </view> 
            <view class="y"></view>
        </view>
           
        </view>
        <view class="boxx">
            <view class="uu">
                交易数量: <text class="ui">{{san}}台</text>
            </view>
            <view class="uu">
                人民币: <text class="ui">{{sun}}</text>
            </view>
            <view class="uu">
                总价: <text class="ui">{{suu}}</text>
            </view>
        </view>
        <view class="brn">
            <button class="primary" @click="btn">确认</button>
            <!-- <best-payment-password :show="payFlag" :forget="true"  :value="paymentPwd" digits="6" @submit="checkPwd" @cancel="togglePayment"></best-payment-password> -->
        </view>
    </view>
</template>

<script>
    // import bestPaymentPassword from '../../components/best-payment-password/best-payment-password.vue'
    var getRmb=require('../../common/requset.js')
    export default {
        data() {
            return {
                name:'',
                pag:'',
                suu:'',
                data:'',
                san:'',
                sun:'',
                payFlag:false,
                paymentPwd:'',
                forget:false,
                password:'123456',
                arr:[]
                
  
            }
        },
        // components: {
        // 	bestPaymentPassword
        // },
        onLoad(option) {
            let arr = []
            var that = this
            var data = JSON.parse(option.ront)
            that.data = data
            var sur=that.data[1];
            console.log(that.data[1])
            that.name = that.data[0][0].name
            that.pag = that.data[0][0].mobile
            that.san = that.data[0][0].sale_num
            that.suu = that.data[0][0].sale_money
            that.data=that.data[1]   
            console.log(that.data[1].machine_id)
            that.sun = getRmb.getrmb(that.suu)
            
          
            for(let i = 0; i < sur.length; i++) {
                console.log(that.data[1].machine_id)
                arr.push(sur[i].machine_id)
                console.log(arr)
            }
          this.arr = arr
        },
        methods:{
            btn:function() {
                var that = this
                var a = that.arr.join()
                console.log(a)
                this.payFlag = true
                uni.request({
                    url:this.urll + 'submitorder/',
                    method:'POST',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token,
                    },
                    data:{
                        password:that.password,
                        machine_id_list:a,
                        name:that.name,
                        mobile:that.pag,
                        sale_num:that.san,
                        sale_money:that.suu
                    },
                    success(res) {
                        console.log(res)
                        if(res.statusCode == 200){
                            uni.switchTab({
                                url:'../mill/mill'
                            })
                        }
                    }
                })
            },
            // togglePayment:function(){}
            
            
        }
    }
</script>

<style>
    page {
        background-color: #DCDCDC;
    }
    .loo {
        color: #121212;
        padding-left: 18rpx;
    }
    .box1 {
        margin-bottom: 40rpx;
        height: 120rpx;
        background-color: #fff;
    }
    .name {
        float: left;
        width: 124rpx;
        color: #A0A0A0;
        line-height: 120rpx;
        padding-left: 48rpx;
    }
    .pag {
        float: left;
        color: #A0A0A0;
        line-height: 120rpx;
        padding-left: 120rpx;
    }
    
    .box {
        background-color: #fff;
        height: 180rpx;
    }
    .left {
        line-height: 180rpx;
    }
    .primary{
        width: 94%;
        margin-top: 60rpx;
        color: #FFFFFF;
        background-color: #0081BB;
    }
    .img{
        float: left;
        width: 145rpx;
        height: 126rpx;
        margin-left: 48rpx;
        margin-top: 36rpx;
        margin-right: 24rpx;
        border: 1rpx solid #CCCCCC;
        padding: 0 14rpx 0 14rpx;
    }
    .info {
        font-size: 28rpx;
    }
    .right {
        padding-top: 18rpx;
    }
    .all{
        font-size: 24rpx;
        color: #C0C0C0;
    }
    .area {
        font-size: 24rpx;
        color: #C0C0C0;
    }
    .y {
        width: 90%;
        height: 30rpx;
        border-bottom: 2rpx solid #C0C0C0;
        margin: 30rpx auto;
    }
    .boxx {
        height: 215rpx;
        margin-top: 40rpx;
        background-color: #fff;
    }
    .uu {
        float: left;
        width: 100%;
        color: #A0A0A0;
        padding-left: 48rpx;
        padding-top: 20rpx;
        font-size: 30rpx;
    }
    .ui {
        color: #121212;
        padding-left: 60rpx;
    }
</style>
