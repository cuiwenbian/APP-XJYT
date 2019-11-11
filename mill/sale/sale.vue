<template>
    <!-- 卖单 -->
    <view class="container">
        <view class="box1">
            <view class="colo">卖单数量
                <view class="many">{{many}}台</view>
            </view>
			<view class="colo1"><image class="dx" src="../../static/images/miai.png" mode=""></image></view>
			<view class="many1">卖出</view>
        </view>
        <view class="box3">
            <view class="swiper-tab">
            	<view v-for="(item, index) in navList" :key="index" class="tab-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
            		{{item.text}}
            	</view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 0">
                <scroll-view scroll-y='true'>
                <view class="boss" v-for="(item , index) in dater" :key="index">
                    <view class="order">
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
                                订单编号: <text class="cool">{{item.order_num}}</text>
                            </view>
                            <view class="numbe">
                                矿机数量:<text class="cool">{{item.sale_num}}</text>
                            </view>
                            <view class="trading">
                                交易总价:<text class="cool">{{item.sale_money}}</text>
                            </view>
                            <view class="date">
                                创建日期:<text class="cool">{{item.set_time}}</text>
                            </view>
                        <view class="hz">
                                <button class="btn1">申诉</button>
                                <button class="btn2" @click="btn(item)">查看详细</button>
                        </view>
                        </view>
                        <!-- <view class="line1"></view> -->
                    </view>
                    <view class="tooc"></view>
                </view>				
                
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 1">
                <scroll-view scroll-y='true' v-for="(item , index) in ter" :key="index">
                    <view class="order">
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
                                订单编号: <text class="cool">{{item.order_num}}</text>
                            </view>
                    		<view class="numbe">
                                矿机数量:<text class="cool">{{item.sale_num}}</text>
                            </view>
                    		<view class="trading">
                                交易总价:<text class="cool">{{item.sale_money}}</text>
                            </view>
                    		<view class="date">
                                创建日期:<text class="cool">{{item.set_time}}</text>
                            </view>
                    	</view>
                    
                    	<view class="line1"></view>
                    </view>
                    <view class="hz">
                    	<button class="btn2" @click="btn1">查看详细</button>
                    </view>
                    <view class="too"></view>
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 2">
                <scroll-view scroll-y='true' v-for="(item , index) in delwen" :key="index">
                    <view class="order">
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
                                订单编号: <text class="cool">{{item.order_num}}</text>
                            </view>
                    		<view class="numbe">
                                矿机数量:<text class="cool">{{item.sale_num}}</text>
                            </view>
                    		<view class="trading">
                                交易总价:<text class="cool">{{item.sale_money}}</text>
                            </view>
                    		<view class="date">
                                创建日期:<text class="cool">{{item.set_time}}</text>
                            </view>
                    	</view>
                    	<view class="line1"></view>
                    </view>
                    <view class="hz">
                    	<button class="btn2" @click="btn2">查看详细</button>
                    </view>
                    <view class="too"></view>
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 3">
                <scroll-view scroll-y='true' v-for="(item , index) in delwen" :key="index">
                    <view class="order">
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
                                订单编号: <text class="cool">{{item.order_num}}</text>
                            </view>
                    		<view class="numbe">
                                矿机数量:<text class="cool">{{item.sale_num}}</text>
                            </view>
                    		<view class="trading">
                                交易总价:<text class="cool">{{item.sale_money}}</text>
                            </view>
                    		<view class="date">
                                创建日期:<text class="cool">{{item.set_time}}</text>
                            </view>
                    	</view>
                    
                    	<view class="line1"></view>
                    </view>
                    <view class="hz">
                    	<button class="btn2" @click="btn3">查看详细</button>
                    </view>
                    <view class="too"></view>
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
                dater:'',
                ter:'',
                name:'',
                delwen:'',
                delewen:'',
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
            uni.request({
                url: this.urll + 'saleall/101',
                method:'GET',
                header:{
                    Authorization: 'JWT'+' '+this.global_.token
                },
                success(res) {
                    var dater = res.data.data
                    that.dater = dater
                    console.log(dater.length )
                    that.many = dater.length
                    // console.log(res.data.data)
                    // console.log(that.dater)
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
                if(this.tabCurrentIndex === 1) {
                    uni.request({
                        url:this.urll + 'saleall/102',
                        method:'GET',
                        header:{
                            Authorization: 'JWT'+' '+this.global_.token
                        },
                        success(res) {
                            console.log(res)
                            var ter = res.data.data
                            console.log(ter)
                            that.ter = ter
                            
                            
                        }
                    })
                }
                if(this.tabCurrentIndex === 2) {
                    uni.request({
                        url:this.urll + 'saleall/103',
                        method:'GET',
                        header:{
                            Authorization: 'JWT'+' '+this.global_.token
                        },
                        success(res) {
                            console.log(res)
                            var delwen = res.data.data
                            that.delwen = delwen
                        }
                    })
                }
                if(this.tabCurrentIndex === 3) {
                    uni.request({
                        url:this.urll + 'saleall/104',
                        method:'GET',
                        header:{
                            Authorization: 'JWT'+' '+this.global_.token
                        },
                        success(res) {
                            console.log(res)
                            var delewen = res.data.data
                            that.delewen = delewen
							// that.many = that.delewen
                        }
                    })
                }
            },
            btn:function(item){
                console.log(item)
                var that = this   
                uni.request({
                    url:this.urll + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:item.order_num
                    },
                    success(res) {
                        console.log(res)
                        var order = JSON.stringify(res.data.data)
                        
                        uni.navigateTo({
                            url:'../salepay/salepay?aser=' + order
                        })
                    }
                })
                
            },
            btn1:function(){
                var that = this
                console.log(that.ter[0].order_num)
                uni.request({
                    url:this.urll + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:that.ter[0].order_num
                    },
                    success(res) {
                        console.log(res) 
                        console.log(res.data.data)
                        var ordear = JSON.stringify(res.data.data)
                        uni.navigateTo({
                            url:'../saleconfirm/saleconfirm?mvp=' + ordear
                        })
                    }
                })
               
            },
            btn2:function(){
                var that = this
                console.log(that.delwen[0].order_num)
                uni.request({
                    url:this.urll + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:that.delwen[0].order_num
                    },
                    success(res) {
                       console.log(res) 
                       var nuso = JSON.stringify(res.data.data)
                       uni.navigateTo({
                           url:'../saleaudit/saleaudit?suxang=' + nuso
                       })
                    }
                })
               
            },
            btn3:function(){
                var that = this
                console.log(that.delewen[0].order_num)
                uni.request({
                    url:this.urll + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:that.delewen[0].order_num
                    },
                    success(res) {
                       console.log(res) 
                       var ksa = JSON.stringify(res.data.data)
                       uni.navigateTo({
                           url:'../salecompleted/salecompleted?cshug=' + ksa
                       })
                    }
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
        width: 20%;
        height: 90rpx;
        margin-left: 148rpx;
        margin-top: 62rpx;
        font-size: 32rpx;
    }
    .boss{
        width: 100%;
        height: 640rpx;
    }
    
    .tooc{
        height: 40rpx;
        margin-top: 140rpx;
        background-color: #EDEDED;
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
   .many{
        margin-left: 48rpx;
        line-height: 90rpx;
        color: #DCB16E;
        font-size: 28rpx;
    }    
	.colo1{
    	height: 60rpx;
        padding-top: 50rpx;
        margin-right: 48rpx;
	}
    .dx {
        width: 60rpx;
        height: 60rpx;
        line-height: 60rpx;
        float: right;
        margin-right: 130rpx;
    }
	.many1{
        float: right;
        width: 90rpx;
        height: 60rpx;
        padding-top: 28rpx;
        margin-right: 145rpx;
        font-size: 24rpx;
        color: #ACABAB;
	}
    .box3 {
        height: 90rpx;
        background-color: #F6F6F6;
    }
    .list{
      height: auto;
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
        margin-right: 80rpx;
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
         
        border-bottom: 5rpx solid #B39C01;
     
    }
</style>
