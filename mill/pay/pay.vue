<template>
    <!-- 买单 -->
    <view class="container">
        <view class="box1">
            <view class="colo">买单数量</view>
            <view class="many">{{many}}台</view>		
			<view class="colo1">
                <image class="dx" src="../../static/images/mai.png" mode=""></image>
            </view>
			<view class="many1">买 出</view>
        </view>
        <view class="box3">
            <view class="swiper-tab">
            	<view v-for="(item, index) in navList" :key="index" class="tab-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
            		{{item.text}}
            	</view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 0">
                <scroll-view scroll-y='true' >
                <view v-for="(item , index) in contion" :key="index">
                    <view  class="order" >
                    	<view class="top">
                    		<text class="mation">
                                买家姓名: <text class="cool">{{item.name}}</text>
                            </text>
                    		<text class="cont">
                                联系方式: <text class="cool">{{item.mobile}}</text>
                            </text>
                    	</view>
                    	
                    	<view class="line"></view>
                    	<view class="xi">
                    		<view class="edit">
                                订单编号:<text class="cool">{{item.order_num}}</text>
                            </view>
                    		<view class="numbe">
                                矿机数量:<text class="cool">{{item.sale_money}}</text>
                            </view>
                    		<view class="trading">
                                交易总价:<text class="cool">{{item.sale_num}}</text>
                            </view>
                    		<view class="date">
                                创建日期:<text class="cool">{{item.set_time}}</text>
                            </view>
                    	</view>
                    
                    	<view class="line1"></view>
                    </view>
                    
                    <view class="hz">
                    	<button class="btn1">申诉</button>
                    	<button class="btn2" @click="btn">查看详细</button>
                    </view>
                </view>
                </scroll-view>
                <view class="too"></view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 1">
                <scroll-view scroll-y='true'>
                    <view class="order">
                    	<view class="top">
                    		<text class="mation">买家姓名</text>
                    		<text class="cont">联系方式</text>
                    	</view>
                    	
                    	<view class="line"></view>
                    	<view class="xi">
                    		<view class="edit">订单编号</view>
                    		<view class="numbe">矿机数量</view>
                    		<view class="trading">交易总价</view>
                    		<view class="date">创建日期</view>
                    	</view>
                    
                    	<view class="line1"></view>
                    </view>
                    <view class="hz">
                    	<button class="btn2" @click="btn2">查看详细</button>
                    </view>
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 2">
                <scroll-view scroll-y='true'>
                    <view class="order">
                    	<view class="top">
                    		<text class="mation">买家姓名</text>
                    		<text class="cont">联系方式</text>
                    	</view>
                    	
                    	<view class="line"></view>
                    	<view class="xi">
                    		<view class="edit">订单编号</view>
                    		<view class="numbe">矿机数量</view>
                    		<view class="trading">交易总价</view>
                    		<view class="date">创建日期</view>
                    	</view>
                    
                    	<view class="line1"></view>
                    </view>
                    <view class="hz">
                    	<button class="btn2" @click="btn3">查看详细</button>
                    </view>
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 3">
                <scroll-view scroll-y='true'>
                    <view class="order">
                    	<view class="top">
                    		<text class="mation">买家姓名</text>
                    		<text class="cont">联系方式</text>
                    	</view>
                    	
                    	<view class="line"></view>
                    	<view class="xi">
                    		<view class="edit">订单编号</view>
                    		<view class="numbe">矿机数量</view>
                    		<view class="trading">交易总价</view>
                    		<view class="date">创建日期</view>
                    	</view>
                    
                    	<view class="line1"></view>
                    </view>
                    <view class="hz">
                    	<button class="btn2" @click="btn4">查看详细</button>
                    </view>
                </scroll-view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
    	data() {
    		return {
                many:'0',
                tabCurrentIndex:0,
                contion:'',
                kolo:'',
                flag:false,
                navList: [
                	{
                		state: 0,
                		text: '待付款'
                	
                	},
                	{
                		state: 1,
                		text: '待确认'
                		
                	},
                	{
                		state: 2,
                		text: '待审核'
                		
                	},
                    {
                        state: 3,
                        text:  '已完成'
                    }
                	
                ]
    		};
        },
        onLoad(options) {
            var that = this
            console.log(options)
            uni.request({
                url:this.urll + 'buyall/101',
                method:'GET',
                header:{
                     Authorization: 'JWT'+' '+this.global_.token
                },
                success(res) {
                    console.log(res)
                    var contion = res.data.data
                    console.log(contion)
                    that.contion = contion
                    console.log(contion[0].name)
                }
            })
            uni.request({
                url:this.urll + 'buyall/101',
                method:'GET',
                header:{
                    Authorization: 'JWT'+' '+this.global_.token
                },
                success(res) {
                    console.log(res)
                    var kolo = res.data.data
                    that.kolo = kolo
                }
            })
        },
        methods:{
            tabClick:function (index) {
                var that = this
                if (this.tabCurrentIndex === index) {
                    return false
                }else {
                    that.tabCurrentIndex =index
                }
            },
            btn:function () {
                var that = this
                console.log(that.contion[0].order_num)
                uni.request({
                    url:this.urll + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:that.contion[0].order_num
                    },
                    success(res) {
                        console.log(res) 
                        console.log(res.data.data)
                        var ord = JSON.stringify(res.data.data)
                        uni.navigateTo({
                            url:"../staypay/staypay?mvvp=" + ord
                        })
                    }
                })
                
            },
            btn2:function() {
                uni.navigateTo({
                    url:'../stayconfirm/stayconfirm'
                })
            },
            btn3:function () {
                uni.navigateTo({
                    url:'../stayaudit/stayaudit'
                })
            },
            btn4:function(){
                uni.navigateTo({
                    url:'../completed/completed'
                })
            }
        }
    }
</script>

<style>
    .box1{
        height: 280rpx;
    }
    .colo {
		float: left;
		width: 50%;
		height: 40rpx;
		margin-left: 60rpx;
		margin-top: 80rpx;
        font-size: 36rpx;
    }
   .many{
		float: left;
		width: 36%;
		height: 60rpx;
		padding-left: 120rpx;
		padding-top: 40rpx;
        font-size: 28rpx;
        color: #DCB16E;
    }    
	.colo1{
		height: 60rpx;
		padding-top: 80rpx;
		padding-left: 540rpx;
	}
    .too {
        height: 40rpx;
        margin-top: 40rpx;
        background-color: #EDEDED;
    }
    .cool{
        margin-left: 40rpx;
        color: #B5B5B5;
    }
    .dx {
        width: 60rpx;
        height: 60rpx;
    }
	.many1{
		float: right;
		width: 90rpx;
		height: 60rpx;
        padding-top: 28rpx;
		padding-right: 128rpx;
        font-size: 32rpx;
	}
    .box3 {
        height: 90rpx;
        background-color: #F6F6F6;
        position: relative;
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

    .list{
      height: auto;
    }
    .order{
        width: 100%;
        height: 238rpx;

    }
	.top{
		height: 88rpx;
	}
	.xi {
		height: 360rpx;
	}
    .mation{
        float: left;
		height: 40rpx;
        line-height: 90rpx;
        font-size: 28rpx;
        padding-left: 48rpx;
    }
    .cont{
        float: right;
        font-size: 28rpx;
        line-height: 90rpx;
        padding-right: 60rpx;
    }
    .line{
        width: 92%;
        border: 1rpx solid #CCCCCC;
        margin: 0 auto;
    }
    .edit{
		float: left;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		padding-left: 48rpx;
        font-size: 28rpx;
    }
        
    .numbe{
		float: left;
		height: 90rpx;
		line-height: 90rpx;
		width: 100%;
		padding-left: 48rpx;
        font-size: 28rpx;

    }
    .trading{
		float: left;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		padding-left: 48rpx;
        font-size: 28rpx;

    }
    .date{
		float: left;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		padding-left: 48rpx;
        font-size: 28rpx;

    }
    .line1 {
        width: 92%;
		margin: 6rpx auto;
        border: 1rpx solid #CCCCCC;
    }
    .hz{
        width: 100%;
		height: 80rpx;
    }
    .btn1{
		float: left;
		margin-left: 340rpx;
		margin-top: 40rpx;
        width: 160rpx;
        height: 60rpx;
        font-size: 26rpx;
        line-height: 60rpx;
        color: #CCCCCC;
    }
    .btn2 {
		float: right;
		margin-right: 48rpx;
		margin-top: 40rpx;
        width: 160rpx;
        height: 60rpx;
        font-size: 26rpx;
        line-height: 60rpx;
        color: #FFFFFF;
        background-color: #091219;
    }
    .swiper-tab {
     
        display: flex;
         
        flex-direction: row;
         
        line-height: 80rpx;
    
        background: #EDEDED;  
    }
    .tab-item {
 
         width: 33.3%;
         height:auto;
         text-align: center;
         
         font-size: 34rpx;
         
         color: #777;
    }
    .current {
     
        color: #B39C01;
         
        border-bottom: 2rpx solid #B39C01;
     
    }
</style>
