<template>
	<view class="container">
        <view class="height"></view>
        <swiper 
        indicator-dots 
        autoplay interval="3000" 
        circular
        indicator-color="rgda(255 , 255 , 255 , .6)"
        >
            <swiper-item>
                <image class="ttt" src="../../static/images/banner1.png"></image>
            </swiper-item>
            <swiper-item>
                <image class="ttt" src="../../static/images/banner3.png"></image>
            </swiper-item>
            <swiper-item>
                <image class="ttt" src="../../static/images/lb.png"></image>
            </swiper-item>
        </swiper>
        
        
        <view class="uni-swiper-msg">
        	<view class="uni-swiper-msg-icon">
        		<image class="g" src="../../static/images/notice.png" mode="widthFix"></image>
        	</view>
        	<swiper 
            class="bgc"
            autoplay="true" 
            circular="true"  
            interval="5000" 
            vertical:true
             indicator-dots:false
            >
        		<swiper-item class="fz">
        			<text class="clor">{{notice}}</text>
        		</swiper-item>
                <swiper-item>
                	<text class="clor">{{s}}</text>
                </swiper-item>
        	</swiper>
        </view>

        <view class="borx">
            <view class="price">
                <text class="bot">今日币价:</text>
                <text class="Todayprice">{{Todayprice}}</text>
            </view>
            <view class="price1">
                <text class="bot1">
                    昨日交易:
                </text>
                <text class="yesterdayprice , yesterday"> +{{yesterdayprice}}  +{{yesterday}}</text>
            </view>
        </view>
        
        <view class="gg">
            <div class="charts">
            	<view class="qiun-columns">
            			<view class="qiun-charts" >
            				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
            			</view>
            	</view>
            	
            </div>
        </view>
            <view class="Small">
				<text class="te">热门资讯</text> 
            </view>
        <view class="bt">
			<view class="left">
				<text class="tex">时上你io萨的厚爱u山东i阿士东i啊阿萨的徽标u十多i啊收到</text>
				<view>
					<text class="yu">6月</text>
					<image class="yj" src="../../static/images/eye.png"> 
					</image>
					<text class="yjj">1000人看过</text>
				</view>
			</view>
			<view class="right">
				<image class="ig" src="../../static/images/kuangji.png"></image>
			</view>
        </view>
        <text class="b"></text>
        <view class="left">
        	<text class="tex">时上你io萨的厚爱u山东i阿士东i啊阿萨的徽标u十多i啊收到</text>
        	<view>
        		<text class="yu">6月</text>
        		<image class="yj" src="../../static/images/eye.png"> 
        		</image>
        		<text class="yjj">1000人看过</text>
        	</view>
        </view>
        <view class="right">
        	<image class="ig" src="../../static/images/kuangji.png"></image>
        </view>
	</view>
</template>

<script>
    import uCharts from '../../common/u-charts.js';
    var _self;
    var canvaLineA=null;
	export default {
		data() {
			return {      
                Todayprice:"0.05",
                yesterdayprice:"0.52",
                yesterday:"1.0%",
                seven_profit:'',
                total_profit:'',
                cWidth:'',
                cHeight:'',
                pixelRatio:1,
                notice:'',
                s:'123987998449898'
			}
             
		},
        onLoad() {
            _self = this;
            var that = this
            this.cWidth=uni.upx2px(750);
            this.cHeight=uni.upx2px(500);
            this.getServerData();
			console.log(this.global_.token);
			console.log(this.global_.phone)
            
            uni.request({
                url:this.url + 'home/',
                method:'GET',
                header:{
                    Authorization:'JWT'+' '+this.global_.token
                },
                success(res) {
                    console.log(res.data)
                    var opent = res.data
                   
                }
            })
		
        },
		methods: {
			
            getServerData(){
            	uni.request({
            			url: '',
                        msg:'',
            			method: '',
            			header: {
            			  
            			},
            			success: function(res) {
                            console.log(res)
            				console.log(res.data.data[0])
            				var data = res.data.data[0];
            				_self.seven_profit=data.seven_profit;
            				_self.total_profit=data.total_profit;
            				let LineA={seven_list:[]};
            				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
            				LineA.seven_list=res.data.data.seven_list;
            				_self.showLineA("canvasLineA",data);
            			},
            			fail: () => {
            				_self.tips="网络错误，小程序端请检查合法域名";
            			},
            		});
            	},
            	showLineA(canvasId,chartData){
            	
            		canvaLineA=new uCharts({
            			$this:_self,
            			canvasId: canvasId,
            			type: 'line',
            			fontSize:11,
            			legend:{show:false},
            			dataLabel:false,
            			dataPointShape:false,
            			background:'#FFFFFF',
            			pixelRatio:_self.pixelRatio,
            			categories: ["2012", "2013", "2014", "2015", "2016", "2017"],//数据类别(饼图.圆环图不需要)
            			series: [   //数据列表
            			          {
            			            name: "FIL数量", //数据名称
            			            data: [], //数据
            			            color: "#fff" //颜色,不传入则使用系统默认配色方案
            			          }
            			],
            			animation: true,
            			xAxis: {
            				type:'grid',						
            				gridColor:'#f1f1f1',
            				disableGrid:true,
            				gridType:'solid',
            				dashLength:8
            			},
            			yAxis: {
                            // disabled:true, //不绘制Y轴网格
            				gridType:'solid',
            				gridColor:'#f1f1f1',
            				dashLength:8,
            				splitNumber:5,
            				min:0,
            				max:80,
            				format:(val)=>{return val.toFixed(0)}
            			},
            			width: _self.cWidth*_self.pixelRatio,
            			height: _self.cHeight*_self.pixelRatio,
            			extra: {
            				line:{
            					type: 'straight',
            					width:"0.5rpx"
            				}
            			}
            		});
            		
            }
		}
	}
</script>

<style>
    /* #ifndef APP-PLUS-NVUE */
    @import url("../../common/uni.css");
    .qiun-charts {
    	width: 750upx;
    	height: 500upx;
    	background-color: #FFFFFF;
    }
    
    .charts {
    	width: 750upx;
    	height: 500upx;
    	background-color: #FFFFFF;
    }
    page {
        background-color: #121212;
    }
    .charts {
      width: 100%;
      height: 600rpx;
      padding-left:20rpx;
      padding-right: 20rpx;
      /* padding-top:10rpx; */
      box-sizing: border-box;
      background: linear-gradient(to bottom,#28c1d8, #86ced9); 
      position: relative;
    }
    .fz{
        line-height: 40rpx;
    }
    .bgc{
        height: 40rpx;
        line-height: 40rpx;
        margin-right: 20rpx;
        background-color: #333333;
        font-size: 14rpx;
        margin-left: 20rpx;
        border-radius: 8rpx;
    }
	.height {
		height: var(--status-bar-height);
	}
    .swiper{
		width:720rpx;
		height:270rpx;
		margin:20rpx auto;
    }
	swiper-item image {
		width: 100%;
		height:100%;
   }
   .notice{
        height: 60rpx;
    }
    .ttt{
        width: 720rpx;
        height: 300rpx;
        margin-top: 20rpx;
        margin-left: 15rpx;
        border-radius: 8rpx;
    }

    .g {
        width: 28rpx;
        height: 28rpx;
        float: left;
        padding-left: 23rpx;
        padding-top: 5rpx;
    }
    .i{
        width: 600rpx;
        height: 40rpx;        
        background-color: #BCBCBC;
        margin-left: 52rpx;
        padding-top: 20rpx;
        border-radius: 50rpx;  
    }
    .m {
        float: left;
        padding-top: 17rpx;
        margin-left: 90rpx;
        font-size: 24rpx;

        color: #FFFFFF;
    }
    .clor{
        color: #F2F2F2;
         float: left;
         height: 90rpx;
    }
    .bor {
		width: 94%;
        margin: 0 auto;
        border: 2rpx solid #CcCcCc;
    }
    .borx {
        width: 100%;
        height: 120rpx;

    }
    .price{
        padding-left: 24rpx;
    }
    /* 白 */
    .bot{
        float: left;
        line-height: 120rpx;
        font-size: 20rpx;
        color: #F2F2F2;
    }
    /* 2 */
    .price1{
        float: right;
        padding-right: 24rpx;
    }
    /* 黄 */
    .Todayprice{
			float: left;
			line-height: 120rpx;
			font-size: 38rpx;
            margin-left: 20rpx;
			color: #e3ba85;
	}
    .bot1 {
        color: #FFFFFF;
        margin-bottom: 12rpx;
        font-size: 20rpx;
    }
    .yesterdayprice {
        font-size: 38rpx;
        margin-left: 10rpx;
        line-height: 120rpx;
        color: #DCB16E;
    }
	.gg{
        width: 100%;
        height: 608rpx;
    }

    .Small{
        width: 100%;
		height: 80rpx;
        margin-top: 14rpx;
    }
    .te {
		float: left;
        color: #FFFFFF;
        font-size: 32rpx;
        width: 96%;
        margin-left: 30rpx;
        border-bottom: 1rpx solid #F2F2F2;
    }
    .bt{
		width: 100%;
        height: 184rpx;
    }
	.left {
		float: left;
		width: 70%;
	}
    .tex {
        margin-left: 30rpx;
        font-size: 26rpx;
        color: #D7D7D7;
        padding-top: 20rpx;
        padding-left: 24rpx;
		
       display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
	.right {
		float: right;
	}
    .ig {
        width: 190rpx;
        height: 127rpx;
		/* padding-top: 30rpx; */
		/* padding-left: 48rpx; */
        margin-top: 28rpx;
        margin-right: 20rpx;
    }
 
	.yu {
		float: left;
		padding-top: 8rpx;
		padding-left: 48rpx;
        font-size: 14rpx;
        color: #5A5A5A;
    }
    .yj {
        width: 36rpx;
        height: 26rpx;
		padding-left: 90rpx;
		padding-top: 14rpx;
    }
    .yjj {
		float: right;
		padding-right: 180rpx;
		padding-top: 8rpx;
        font-size: 14rpx;
        color: #5A5A5A;
    }
    .b {
        display: block;
        width: 96%; 
        margin: 0 auto;
        margin-left: 46rpx;
        /* margin-top: rpx; */
        border-bottom: 1rpx solid #333333;
    }
    /*  #endif  */
</style>
