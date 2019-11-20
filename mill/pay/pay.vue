<template>
    <!-- 买单 -->
    <view class="container">
        <view class="box1">
            <view class="colo">买单数量
                <view class="many">{{many}}个</view>
            </view>
			<view class="colo1">
                <image class="dx" src="../../static/images/mai.png" mode=""></image>
            </view>
			<view class="many1">买 入</view>
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
                    	<button class="btn1" @click="bt">取消订单</button>
                    	<button class="btn2" @click="btn(item)">查看详细</button>
                    </view>
                    <view class="too"></view>
                </view>
                </scroll-view>
                
            </view>
            <view class="list" v-if="tabCurrentIndex === 1">
                <scroll-view scroll-y='true' v-for="(item , index) in kolo" :key="index">
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
                                订单编号:<text class="cool">{{item.order_num}}</text>
                            </view>
                    		<view class="numbe">
                                矿机数量:<text class="cool">{{item.sale_num}}</text>
                            </view>
                    		<view class="trading">
                                交易总价:<text class="cool">{{item.sale_money }}</text>
                            </view>
                    		<view class="date">
                                创建日期:<text class="cool">{{item.set_time}}</text>
                            </view>
                    	</view>
                    
                    	<view class="line1"></view>
                    </view>
                    <view class="hz">
                    	<button class="btn2" @click="btn2(item)">查看详细</button>
                    </view>
                    <view class="too"></view>
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 2">
                <scroll-view scroll-y='true' v-for="(item , index) in lornd" :key="index">
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
                                订单编号:<text class="cool">{{item.order_num}}</text>
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
                    	<button class="btn2" @click="btn3(item)">查看详细</button>
                    </view>
                    <view class="too"></view>
                </scroll-view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 3">
                <scroll-view scroll-y='true' v-for="(item , index) in daker" :key="index">
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
                                订单编号:<text class="cool">{{item.order_num}}</text>
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
                    	<button class="btn2" @click="btn4(item)">查看详细</button>
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
                many:'',
                tabCurrentIndex:0,
                contion:'',
                daker:'',
                lornd:'',
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
            var that=this;
            this.getData()
            uni.request({
                url:this.urll + 'ordernum/1',
                method:'GET',
                header:{
                    Authorization: 'JWT'+' '+this.global_.token
                },
                success(res) {
                    console.log(res.data.data)
                    that.many = res.data.data
                }
            })
        },
        methods:{
            getData(){
                var that=this;
                uni.request({
                    url:this.url + 'buyall/101',
                    method:'GET',
                    header:{
                         Authorization: 'JWT'+' '+this.global_.token
                    },
                    success(res) {
                        console.log(res)
                        var contion = res.data.data
                        console.log(contion)
                        that.contion = contion.reverse()
                        console.log(that.contion[0].set_time)
                    }
                })
                
               
            },
            tabClick:function (index) {
                var that = this
                if (this.tabCurrentIndex === index) {
                    return false
                }else {
                    that.tabCurrentIndex =index
                }
                if(this.tabCurrentIndex === 1) {
                    uni.request({
                        url:this.url + 'buyall/102',
                        method:'GET',
                        header:{
                            Authorization: 'JWT'+' '+this.global_.token
                        },
                        success(res) {
                            console.log(res)
                            var kolo = res.data.data
                            that.kolo = kolo.reverse()
                        }
                    })
                }
                if(this.tabCurrentIndex === 2) {
                    uni.request({
                        url:this.url + 'buyall/103',
                        method:'GET',
                        header:{
                            Authorization: 'JWT'+' '+this.global_.token
                        },
                        success(res) {
                            console.log(res)
                            var lornd = res.data.data
                            console.log(lornd)
                            that.lornd = lornd.reverse()
                        }
                    })
                }
                if(this.tabCurrentIndex === 3) {
                    uni.request({
                        url:this.url + 'buyall/104',
                        method:'GET',
                        header:{
                            Authorization: 'JWT'+' '+this.global_.token
                        },
                        success(res) {
                            console.log(res)
                            var daker = res.data.data
                            that.daker = daker.reverse()
                        }
                    })
                }

            },
            btn:function (item) {
                var that = this
                console.log(that.contion[0].order_num)
                uni.request({
                    url:this.url + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:item.order_num
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
            bt:function(val) {
                var that = this
                uni.request({
                    url:this.url + 'ordercancel/',
                    method:'POST',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:that.contion[0].order_num
                    },
                    success(res) {
                        console.log(res)
                        if(res.statusCode == 200) {
                            uni.showToast({
                                title:'删除成功',
                                icon:'none',
                                duration:2000
                            })
                        }else if(res.statusCode == 400) {
                            uni.showToast({
                                title:'该订单不可删除',
                                icon:'none',
                                duration:2000
                            })
                        }
                        that.getData()
                    }
                })
               
            },
            btn2:function(item) {
                var that = this
                uni.request({
                    url:this.url + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:item.order_num
                    },
                    success(res) {
                        console.log(res)
                        console.log(res.data.data)
                        var supers = JSON.stringify(res.data.data)
                        uni.navigateTo({
                            url:'../stayconfirm/stayconfirm?main=' + supers
                        })
                    }
                })
                
            },
            btn3:function (item) {
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
                        console.log(res.data.data)
                        var doink = JSON.stringify(res.data.data)
                        uni.navigateTo({
                            url:'../stayaudit/stayaudit?dospp=' + doink
                        })
                    }
                })
               
            },
            btn4:function(item){
                var that = this
                uni.request({
                    url:this.url + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:item.order_num
                    },
                    success(res) {
                        console.log(res)
                        console.log(res.data.data)
                        var blone = JSON.stringify(res.data.data)
                        uni.navigateTo({
                            url:'../completed/completed?deattr=' + blone
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
   		margin-top: 74rpx;
        color: #000000;
        font-size: 36rpx;
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
           height: 20rpx;
           margin-top: 40rpx;
           background-color: #EDEDED;
       }
       .cool{
           margin-left: 40rpx;
           font-size: 30rpx;
           color: #949494;
       }
      .many{

        margin-left: 48rpx;
        line-height: 90rpx;
        color: #DCB16E;
        font-size: 34rpx;
       }    
   	.colo1{
   		height: 60rpx;
        box-sizing: border-box;
        padding-top: 50rpx;
        margin-right: 48rpx;
   	}
       .dx {
           width: 68rpx;
           height: 68rpx;
           line-height: 60rpx;
           float: right;
           margin-right: 130rpx;
       }
   	.many1{
   		float: right;
   		width: 90rpx;
   		height: 60rpx;
        box-sizing: border-box;
        padding-top: 28rpx;
   		margin-right: 145rpx;
        font-size: 20rpx;
        color: #979797;
   	}
       .box3 {
           height: 90rpx;
           background-color: #F6F6F6;
           position: relative;
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
        font-size: 30rpx;
        color: 333333;
        box-sizing: border-box;
        padding-left: 48rpx;
       }
       .cont{
           float: right;
           font-size: 30rpx;
           color: #333333;
           line-height: 90rpx;
           margin-right: 80rpx;
       }
       .line{
           width: 92%;
           border: 1rpx solid #F2F2F2;
           margin: 0 auto;
       }
       .edit{
   		float: left;
   		width: 100%;
   		height: 90rpx;
        box-sizing: border-box;
   		line-height: 90rpx;
   		padding-left: 48rpx;
        font-size: 28rpx;
        color: #333333;
       }
           
       .numbe{
   		float: left;
   		height: 90rpx;
   		line-height: 90rpx;
   		width: 100%;
        box-sizing: border-box;
   		padding-left: 48rpx;
        font-size: 28rpx;
        color: #333333;
   
       }
       .trading{
   		float: left;
   		width: 100%;
   		height: 90rpx;
        box-sizing: border-box;
   		line-height: 90rpx;
   		padding-left: 48rpx;
        font-size: 28rpx;
        color: #333333;
   
       }
       .date{
   		float: left;
   		width: 100%;
   		height: 90rpx;
   		line-height: 90rpx;
        box-sizing: border-box;
   		padding-left: 48rpx;
        font-size: 28rpx;
        color: #333333;
   
       }
       .line1 {
            width: 92%;
            margin: 6rpx auto;
            border: 1rpx solid #F2F2F2;
       }
       .hz{
           width: 100%;
           height: 80rpx;
       }
       .btn1{
            float: left;
            margin-left: 340rpx;
            margin-top: 40rpx;
            width: 170rpx;
            height: 60rpx;
            font-size: 20rpx;
            border-radius: 3rpx;
            line-height: 60rpx;
            color: #CCCCCC;
       }
       .btn2 {
   		float: right;
   		margin-right: 48rpx;
   		margin-top: 40rpx;
           width: 170rpx;
           height: 60rpx;
           font-size: 20rpx;
           line-height: 60rpx;
           border-radius: 6rpx;
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
    
            width: 33%;
            height:auto;
            text-align: center;
            font-size: 32rpx;
            color: #333333;
       }
       .current {
           color: #B39C01;
           border-bottom: 1rpx solid #B39C01;
       }
</style>
