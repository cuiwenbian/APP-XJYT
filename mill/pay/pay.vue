<template>
    <!-- 买单 -->
    <view class="container">
        <view class="box1">
            <view class="colo">买单数量</view>
            <view class="many">{{many}}台</view>		
			<view class="colo1">买</view>
			<view class="many1">买 出</view>
        </view>
        <view class="box3">
            <view class="swiper-tab">
            	<view v-for="(item, index) in navList" :key="index" class="tab-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
            		{{item.text}}
            	</view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 0">
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
					<button class="btn1">取消订单</button>
					<button class="btn2" @click="btn">查看详细</button>
				</view>
                </scroll-view>
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
                uni.navigateTo({
                    url:"../staypay/staypay"
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
		padding-left: 48rpx;
		padding-top: 80rpx;
        font-size: 24px;
    }
   .many{
		float: left;
		width: 36%;
		height: 60rpx;
		padding-left: 62rpx;
		padding-top: 40rpx;
        font-size: 28rpx;
        color: #DCB16E;
    }    
	.colo1{
		height: 60rpx;
		padding-top: 80rpx;
		padding-left: 552rpx;
	}
	.many1{
		float: right;
		width: 12%;
		height: 60rpx;
		padding-right: 128rpx;
	}
    .box3 {
        height: 90rpx;
        background-color: #F6F6F6;
        position: relative;
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
        padding-right: 208rpx;
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
    
        background: #CCCCCC;  
    }
    .tab-item {
 
         width: 33.3%;
         height:auto;
         text-align: center;
         
         font-size: 34rpx;
         
         color: #777;
    }
    .current {
     
        color: #fff;
         
        border-bottom: 5rpx solid #fff;
     
    }
</style>
