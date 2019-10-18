<template>
    <!-- 卖单 -->
    <view class="container">
        <view class="box1">
            <view class="tab">
                <text class="colo">买单数量</text>
                <text class="many">{{many}}<text>台</text></text>
                <text class="colo1">卖</text>
                <text class="many1">卖出</text>
            </view>
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
                        <text class="mation">卖家姓名</text>
                        <text class="contact">联系方式</text>
                        <view class="line"></view>
                        
                        <view class="edit">订单编号</view>
                        <view class="numbe">矿机数量</view>
                        <view class="trading">交易总价</view>
                        <view class="date">创建日期</view>
                        <view class="line1"></view>
                    </view>
                    <view class="hz">
                        <button class="btn1">取消订单</button>
                        <button class="btn2">查看详细</button>
                    </view>
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 1">
                <scroll-view scroll-y='true'>
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 2">
                <scroll-view scroll-y='true'>
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 3">
                <scroll-view scroll-y='true'>
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
                		text: '可出售'
                	
                	},
                	{
                		state: 1,
                		text: '出售中'
                		
                	},
                	{
                		state: 2,
                		text: '已完成'
                		
                	},
                    {
                        state: 3,
                        text:  '待付款'
                    }
                	
                ]
    		};
        }
    }
</script>

<style>
    .box1{
        height: 280rpx;
        position: relative;
    }
    .tab {
        width: 100%;
    }
    .colo {
        position: absolute;
        top: 42%;
        left: 17%;
        font-size: 16px;
    }
    .many{
        position: absolute;
        top: 64%;
        left: 20%;
        font-size: 48rpx;
        color: #DCB16E;
    }
    .colo1{
        position: absolute;
        top: 42%;
        left: 70%;
        font-size: 28rpx;
    }
    .many1{
        position: absolute;
        top: 60%;
        left: 70%;
        font-size: 16rpx;
    }
    .box3 {
        height: 90rpx;
        background-color: #F6F6F6;
        position: relative;
    }
    .box3 text {
        float: left;
        padding-left: 90rpx;
        line-height: 90rpx;
        font-size: 28rpx;
        padding-bottom : 40rpx;
    }

    .list{
      height: auto;
    }
    .order{
        width: 100%;
        position: relative;
        background: #000000;
        height:100%;
    }
    .mation{
        float:left;
        font-size: 28rpx;
        padding-left: 82rpx;
    }
    .contact{
        float: right;
        font-size: 28rpx;
        margin-left: 136rpx;
    }
    .line{
        position: absolute;
        top: 90rpx;
        left: 20rpx;
        width: 92%;
        border: 1rpx solid #CCCCCC;
        margin: 0 auto;
    }
    .edit{
        position: absolute;
        top: 142rpx;
        font-size: 28rpx;
        left: 82rpx;
    }
        
    .numbe{
        position: absolute;
        top: 246rpx;
        font-size: 28rpx;
        left: 82rpx;
    }
    .trading{
        position: absolute;
        top: 350rpx;
        font-size: 28rpx;
        left: 82rpx;
    }
    .date{
        position: absolute;
        top: 456rpx;
        font-size: 28rpx;
        left: 82rpx;
    }
    .line1 {
        position: absolute;
        top: 500rpx;
        left: 20rpx;
        width: 92%;
        border: 1rpx solid #CCCCCC;
    }
    .hz{
        position: relative;
        
    }
    .btn1{
        position: relative;
        top: 300rpx;
        left: 84rpx;
        width: 160rpx;
        height: 60rpx;
        font-size: 26rpx;
        line-height: 60rpx;
        color: #CCCCCC;
    }
    .btn2 {
        position: absolute;
        top: 300rpx;
        left: 550rpx;
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
