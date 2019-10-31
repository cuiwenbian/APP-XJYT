<template>
    <view class="container">     
        <view class="box1">
            <view class="colo">矿机交易</view>
            <view class="many">{{many}}台</view>
        </view>
       <view class="box2">
            <view class="market">
                <button class="primary" @click="pay">买单</button>
                <button class="primary1" @click="sale">卖单</button>
            </view>
        </view>
       <view class="box3">
            <text>可出售</text>
            <button class="btn" @click="btn2">去交易</button>
        </view> 
                  
        <view v-if="flag" >
            <image class='transfer' src="../../static/images/no-transfer.png" mode=""></image>
            <view class="infoo">暂无记录</view>
        </view>
       <view v-else class="pagex" v-for="(item , index) in user_id" :key="index">
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

                    <view>
                        储存{{item.freedisk}}T | 总容量{{item.disk}}
                    </view>                    
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
    	data() {
    		return {
    			many: '',
                user_id:'',
                flag:true,
                selectilall: false,
                machine_id:'',
                lo: false,
                arr:[],
                isSelected:false
    		}
    	},
    	onLoad(options) {
            var that = this
            uni.request({
                url:this.urll + 'mainmachine/',
                method:'GET',
                header:{
                    Authorization:'JWT'+' '+this.global_.token
                },
                success(res) {
                    console.log(res)
                    that.user_id = res.data.data
                    console.log(that.user_id.length)
                    that.machine_id=res.data.data[length].machine_id;
                    
                    console.log(that.machine_id)
                    that.many = res.data.data.length
                    if(res.data.data[length].machine_id == ' '){
                        that.many = 0
                    }
                    
                    if(that.user_id.length != 0) {
                        that.flag = false 
                    }

                }
            })
    	},
    	methods: {
            pay:function () {
                uni.navigateTo({
                    url:'../pay/pay'
                })
            },
            sale:function() {
                uni.navigateTo({
                    url:'../sale/sale'
                })
            },

            select:function() {
                var that = this
                let arr = []
                if(that.lo == true) {
                    that.lo = !that.lo
                    console.log(that.lo)
                }else if (that.lo === false) {
                    that.lo = !that.lo
                    for (let i =0; i < that.user_id.length; i++) {
                        console.log(that.machine_id)
                        arr.push(that.user_id[i].machine_id)
                        console.log(arr)
                    }
                    
                    console.log(that.lo)
                }
                this.arr = arr
            },
            btn2:function() {
                var that = this
                console.log(that.arr)
                var a = that.arr.join(',')
                console.log(a)

                uni.request({
                    url:this.urll + 'buildorders/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                          machine_id_list:a
                    },
                    success(res) {
                        console.log(res)
                        console.log(res.data)
                        var asr = JSON.stringify(res.data.data)
                        console.log(asr)
                        if(res.statusCode == 400) {
                            uni.showModal({
                                title:'未进行实名认证',
                                confirmText:'去验证',
                            })
                        }else if(that.arr == 0) {
                            uni.showToast({
                                title:'请选择矿机',
                                icon:'none'
                            })
                        }else if(res.statusCode == 200){
                            uni.navigateTo({
                                url:'../sell/sell?tar=' + asr
                                
                            })
                        }
                    }
                })
            }
    	}
    }
</script>

<style>

    .box1{
        height: 280rpx;
        background-color:#091219;
    }
    .colo {
		float: left;
		width: 100%;
		height: 40rpx;
        font-size: 28rpx;
		text-align: center;	
		padding-top: 120rpx;
        color: #FFFFFF;
    }
   .many{
		float: left;
		width: 100%;
		height: 60rpx;
		padding-left: 348rpx;
        box-sizing: border-box;
		padding-top: 40rpx;
        font-size: 28rpx;
        color: #DCB16E;
    }
    .box2 {
        height: 150rpx;
        width: 100%;
    }
    .market {
        width: 100%;
    }
    .transfer{
    	width:130rpx;
    	height:130rpx;
    	display: block;
    	margin: 150rpx auto 20rpx;
    }
    .infoo{
    	text-align: center;
    	font-size: 32rpx;
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
    .primary{

        width: 220rpx;
        height: 88rpx;
        line-height: 88rpx;
		float: left;
		margin-left: 48rpx;
		margin-top: 40rpx;
    }
    .primary1 {
        width: 220rpx;
        height: 88rpx;
        line-height: 88rpx;
		float: right;
		margin-right: 48rpx;
		margin-top: 40rpx;
        background-color: #121212;
        color: #FFFFFF;
    }
    .box3 {
		width: 100%;
        height: 120rpx;
        background-color: #F6F6F6;
    }
    .box3 text {
		width: 108rpx;
        line-height: 120rpx;
		float: left;
        font-size: 36rpx;
		margin-left: 48rpx;
        border-bottom: 1rpx solid #DCB16E;
    }
    .btn {
		float: right;
		margin-right: 48rpx;
		margin-top: 30rpx;
        width: 160rpx;
        height: 70rpx;
        line-height: 70rpx;
        font-size: 24rpx;
    }
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
    .obh_one {
        font-size: 24rpx;

    }
    .days{
        color: #5ca614;
    }
    .obg_one{
        font-size: 24rpx;

    }
</style>
