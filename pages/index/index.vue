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
        		<swiper-item class="fz" v-for="(item , index) in csgo" :key="index">
        			<text class="clor">{{item.notice}}</text>
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
                    较昨日:
                </text>
                <text class="yesterdayprice"> {{yesterdayprice}}  {{yesterday}}</text>
            </view>
        </view>
        <view class="gg">
            <div class="charts">
            	<view class="qiun-columns">
            		<view class="qiun-charts" >
            			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchCandle" @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
                    </view>
            	</view>
            </div>
        </view>
            <view class="Small">
				<text class="te">热门资讯</text> 
            </view>
        <view class="bt" @click="web1">
			<view class="left">
				<text class="tex">2018年第四季度，官方对IPFS项目进行了新的规划，更加清晰地定义了今年的愿景、目标和路线图</text>
				<view class="desc">
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
		<view class="bt" @click="web2">
        <view class="left">
        	<text class="tex">协议实验室Protocol labs推出IPFS-星际文件系统以来，其在链圈、币圈的关注度就像火箭一样腾飞</text>
        	<view class="desc">
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
	</view>
</template>

<script>
    import uCharts from '../../common/u-charts.js';
    var _self;
    var canvaArea=null;
	export default {
		data() {
			return {      
                Todayprice:"",
                yesterdayprice:"",
                yesterday:"",
                seven_profit:'',
                total_profit:'',
                cWidth:'',
                cHeight:'',
                pixelRatio:1,
                notice:'',
                csgo:'',
                time:[],
                price:[],
				hure:[],
                feck:[],
                usd:'',
                hige:'',
                minn:'',
			}
		},
        onLoad() {
            _self = this;
            var that = this
            this.cWidth=uni.upx2px(750);
            this.cHeight=uni.upx2px(500);
            _self.getServerData();
            uni.request({
                url:this.url + 'home/',
                method:'GET',
                header:{
                    Authorization:'JWT'+' '+this.global_.token
                },
                success(res) {
                    var csgo = res.data
                    that.csgo = csgo
                }
            })
        },
		methods: {
			web1:function(){
				uni.navigateTo({
					url:'../web1/web1'
				})
			},
			web2:function(){
				uni.navigateTo({
					url:'../web2/web2'
				})
			},
            getServerData(){
                var that=this;
				var timestamp = Date.parse(new Date())/1000;
				var date2=new Date();     
				var date4=86400*6;
				var date3=timestamp - date4 //时间差的毫秒数
            	uni.request({
            			url: `https://gateio.org/json_svr/query/?u=10&c=9137018&type=tvkline&symbol=fil_usdt&from=${date3}&to=${timestamp}&interval=28800`,
            			method: 'POST',
            			success: function(res) {
							//转换时间戳
							function formatDate(v) {
							    let date = new Date(v);
							    let y = date.getFullYear();
							    let MM = date.getMonth() + 1;
							    MM = MM < 10 ? ('0' + MM) : MM;
							    let d = date.getDate();
							    d = d < 10 ? ('0' + d) : d;
							    let h = date.getHours();
							    h = h < 10 ? ('0' + h) : h;
							    let m = date.getMinutes();
							    m = m < 10 ? ('0' + m) : m;
							    return  MM + '-' + d ;
							};
							var a=res.data.split("\n");
							that.usd = a
							var time=[];
							var price=[];
							var hure = []
                            var feck = []
							for(let i=1;i<that.usd.length-1;i++){
									var date=a[i].split(",")[0];
									var t=formatDate(parseInt(date));
									time.push(t);
									that.time=time;
                                    var day1 = new Date();
                                    day1.setTime(day1.getTime()-24*60*60*1000);
                                    var s1 = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate();
							}
							for (let j = 1; j < that.usd.length-1; j++) {
								var data1 = a[j].split(",")[2];
								var cert = parseFloat(data1)
								price.push(cert);
								that.price = price;
							} 
                            for (let o = 1; o <that.usd.length-1; o++) {
                            	var data3 = a[o].split(",")[1]
                            	var tert = parseFloat(data3)
                            	feck.push(tert) 
                            	that.feck = feck
                            }
                            for (let n = 1; n < that.usd.length-1; n++) {
                                var min = a[n].split(",")[3]
                            }
                            var now_price =parseFloat(a[a.length-2].split(",")[4]) 
                            var yesterday_price = parseFloat(a[a.length-6].split(",")[4])
                            var incrace = now_price-yesterday_price
                            var yest = incrace.toFixed(2)
                            var thi = (now_price/data3 - 1)*100;
                            var t= thi.toFixed(2)+'%'
                            _self.hige =parseFloat(data1)  + 1
                            _self.minn =parseFloat(min)  - 1
                            that.Todayprice=now_price
                            that.yesterday = t
                            that.yesterdayprice = yest
                            if(yest>0 || t > 0 ) {
                                that.yest = '+' + that.yest 
                            }
                                 let Area={list:[]};
                                 //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                                 Area.list=that.usd;
                                 _self.showArea("canvasArea",that.usd);                      
                            },
            		});
            	},
            	showArea(canvasId,chartData){
					canvaArea=new uCharts({
										$this:_self,
										canvasId: canvasId,
										type: 'area',
										fontSize:11,
										legend:true,
										dataLabel:false,
                                        legend:{show:false},
										dataPointShape:false,
										legend:{show:false},
										pixelRatio:_self.pixelRatio,
										categories: _self.time,//数据类别(饼图.圆环图不需要)
										series: [   //数据列表
										          {
										            name: "FIL价格", //数据名称
										            data: _self.price, //数据 //数据
										            color: "#58f4e3" //颜色,不传入则使用系统默认配色方案
										          },
										],
										animation: true,
										xAxis: {
										    type:'grid',
											gridColor:'#333535',
											disableGrid:true,
											gridType:'solid',    
											dashLength:8,
											axisLineColor:'#333535',
											itemCount:20,
											labelCount:8,
										},
										yAxis: {
											type:'grid',
											gridType:'solid',
											gridColor:'#333535',
											dashLength:8,
											splitNumber:4,
											min:_self.minn,
											max:_self.hige,
											axisLineColor:'#333',		
											format:(val)=>{return val.toFixed(1)}
										},
										width: _self.cWidth*_self.pixelRatio,
										height: _self.cHeight*_self.pixelRatio,
										extra: {
											area:{
												type: 'straight',
												opacity:0.2,
												addLine:true,
												width:1,
												gradient:true
											}
										}
									});
            	 },
				       touchCandle(e){
				       				canvaArea.scrollStart(e);
				       			},
				       			moveCandle(e) {
				       				canvaArea.scroll(e);
				       			},
				       			touchEndCandle(e) {
				       				canvaArea.scrollEnd(e);
				       				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				       				canvaArea.showToolTip(e, {
				       					format: function (item, category) {
				       						return category + ' ' + item.name + ':' + item.data 
				       					}
				       				});
				       			},    
                     touchArea(e) {
                     	canvaArea.showToolTip(e, {
                     		format: function (item, category) {
                     			return category + ' ' + item.name + ':' + item.data  
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
    page {
        background-color: #1c1c1c;
    }
    .charts {
      width: 750upx;
      height: 600rpx;
      background: linear-gradient(to bottom,#232323, #343434);
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
        margin-left: 23rpx;
        margin-top: 5rpx;
    }
    .i{
        width: 600rpx;
        height: 40rpx;        
        background-color: #BCBCBC;
        margin-left: 52rpx;
        margin-top: 20rpx;
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
         margin-left: 20rpx;
         font-size: 22rpx;
    }
    .bor {
		width: 94%;
        margin: 0 auto;
        border: 2rpx solid #CCCCCC;
    }
    .borx {
        width: 100%;
        height: 120rpx;
        background: linear-gradient(to bottom,#121212, #232323);
    }
    .price{
        margin-left: 24rpx;
    }
    .bot{
        float: left;
        line-height: 120rpx;
        font-size: 20rpx;
        color: #F2F2F2;
    }
    .price1{
        float: right;
        margin-right: 24rpx;
    }
    .Todayprice{
			float: left;
			line-height: 120rpx;
            text-align: center;
			font-size: 38rpx;
            margin-left: 20rpx;
			color: #e3ba85;
	}
    .bot1 {
        color: #FFFFFF;
        font-size: 20rpx;
    }
    .yesterdayprice {
        font-size: 38rpx;
        margin-left: 10rpx;
        padding-top: 20rpx;
        line-height: 120rpx;
        color: #DCB16E;
    }
	.gg{
        width: 100%;
        height: 600rpx;
    }
    .Small{
        width: 100%;
		height: 80rpx;
		margin-top: 14rpx;
    }
    .te {
		float: left;
        color: #FFFFFF;
		line-height:80rpx;
        font-size: 32rpx;
        width: 96%;
        margin-left: 30rpx;
        border-bottom: 1rpx solid #BCBCBC;
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
        margin-top: 20rpx;
        margin-left: 24rpx;
		box-sizing: border-box;
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
        margin-top: 28rpx;
        margin-right: 20rpx;
    }
    .uni-swiper-msg{
        margin-top: 20rpx;
    }
	.desc{
		padding: 5rpx 40rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}
	.yu {
        font-size: 14rpx;
        color: #5A5A5A;
    }
    .yj {
        width: 36rpx;
        height: 26rpx;
		margin-left: 280rpx;

    }
    .yjj {
        font-size: 14rpx;
        color: #5A5A5A;
    }
    .b {
        display: block;
        width: 96%; 
		float:right;
        border-bottom: 1rpx solid #333333;
    }
    /*  #endif  */
</style>
