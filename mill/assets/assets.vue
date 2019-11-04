<template>
    <view class="container">

		 <view class="height"></view>
        <view class="box">
            <text class="assets">总资产</text>
            <view class="number">{{num}}   FIL</view>
            <text class="coin">可用币  {{ber}}</text>
            <text class="lock">锁定币  {{nuber}}</text>

        </view>
        <view class="btn">
            <button class="primary">提交</button>
            <button class="primary1" @click="btn">转账</button>
        </view>
        <view class="haide">
            <view class="swiper-tab">
            	<view v-for="(item, index) in navList" :key="index" class="tab-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
            		{{item.text}}
            	</view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 0" >
                    <view>
                    	<view v-if="flag" >
                    		<image class='transfer' src="../../static/images/no-transfer.png" mode=""></image>
                    		<view class="info">暂无记录</view>
                    	</view>
                   	<view v-else class="boxx" >
                    		<view class="linee">
                              <view class="cu-form-group">
                              	<picker mode="date" :value="date"   @change="DateChange">
                              		<view class="picker">
                              			{{date}}
                              		</view>
                              	</picker>
                              </view>
                    		  <text class="all1">Filecoin:{{month_profit}}</text>
                    		</view>
                    		<view class="list-one"  v-for="(item , index) in ention" :key="index">
                    			<image class='list-icon' src="../../static/images/FIL.png" mode=""></image>
                    			<view class='list-txt'>
                    				<view class='list-info'>收款</view>
                    				<view class='list-time'>{{item.add_time}}</view>
                    			</view>
                    			<view class='list-income'>+{{item.num}}</view>
                    		</view>
                    </view>
                </view>
            </view>
            <view class="list" v-if="tabCurrentIndex === 1">
                <scroll-view scroll-y='true'>
                    <view>
                        	<view v-if="flag" >
                        		<image class='transfer' src="../../static/images/no-transfer.png" mode=""></image>
                        		<view class="info">暂无记录</view>
                        	</view>
                       	<view v-else class="boxx" >
                        		<view class="linee">
                                  <view class="cu-form-group">
                                  	<picker mode="date" :value="date" start="2015-09" end="2020-09" fields="month" @change="DateChang">
                                  		<view class="picker">
                                  			{{date}}
                                  		</view>
                                  	</picker>
                                  </view>
                        		  <text class="all1">Filecoin:{{month_profit}}</text>
                        		</view>
                        		<view class="list-one"  v-for="(item , index) in entin" :key="index">
                        			<image class='list-icon' src="../../static/images/FIL.png" mode=""></image>
                        			<view class='list-txt'>
                        				<view class='list-info'>收款</view>
                        				<view class='list-time'>{{item.add_time}}</view>
                        			</view>
                        			<view class='list-income'>+{{item.num}}</view>
                        		</view>
                        </view>
                    </view>
                </scroll-view>
            </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            
            return {
                num:'',
                ber:'',
                nuber:'',
				fee:'',
                month_profit:'',
                numm:'',
                tabCurrentIndex:0,
                add_item:'',
                entin:'',
                flag:false,
                ention:'',
                selectShow: false,
                //控制下拉列表的显示隐藏，false隐藏、true显示
               
                //下拉列表的数据
                index: 0,
                //选择的下拉列表下标
                navList: [
                	{
                		state: 0,
                		text: '收入记录'
                	
                	},
                	{
                		state: 1,
                		text: '支出记录'
                		
                	}
                ],
                date: '本月',
                teran:''
               
            }
        },
        onLoad:function (opetions) {
            var that = this

            var data = new Date()
            var text = data.getFullYear('-')
            var txt = data.getMonth()
            var teran = text+ '-' +txt
            that.teran = teran

            uni.request({
                url:this.url + "assets/",
                method:'GET',
                header:{
                    Authorization:'JWT'+' '+this.global_.token
                },
                success(res) {

                   console.log(res)
                   that.num = res.data.availed_num
                   that.ber = res.data.fil_count
                   that.nuber = res.data.locked_num
                   that.fee=res.data.fee

                }
            })
            uni.request({
                url:this.url + 'assets/month/profit/',
                method:'GET',
				data:{
					month:that.selectData[that.index]
				},
                header:{
                    Authorization:'JWT'+' '+this.global_.token
                },
                data:{
                    month:teran
                },
                success(res) {
                   console.log(res.data.data)
                   var seront = res.data.data
                   var ention = res.data.data.profit_records
                   that.ention = ention
                   console.log('cc')
                   console.log(ention)
                   that.month_profit = seront.month_profit
                   that.add_item = ention[0].add_time
                   that.numm = ention[0].num
                }
            })
            uni.request({
                url:this.url + 'assets/month/bill/',
                method:'GET',
                header:{
                    Authorization:'JWT'+' '+this.global_.token
                },
                data:{
                    month:teran
                },
                success(res) {
                    console.log(res)
                    console.log(res.data.data)
                    var seron = res.data.data
                    var entin = res.data.data.bill_records
                    that.entin = entin
                    console.log('cc')
                    console.log(entin)
                    that.month_profit = seron.month_bill
                    that.add_item = entin[0].add_time
                    that.numm = entin[0].num
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
            bindChange (e) {
                const val = e.detail.value
                this.year = this.years[val[0]]
                this.month = this.months[val[1]]
                this.day = this.days[val[2]]
            },
            btn(){
                uni.navigateTo({
                    url:'/my/transfer/transfer?sole=' + this.ber+'&fee='+this.fee,
                })
            },			
            selectTap() {
			    this.selectShow= !this.selectShow
			},
			optionTap(e) {
			    var that = this;
			    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
			    var time = this.selectData[Index];
				this.index= Index,
				this.selectShow= !this.selectShow
                uni.request({
                    url:this.url + 'month/profit/',
                    method:'GET',
                	data:{
                		month:that.selectData[that.index]
                	},
                    header:{
                        Authorization:'JWT'+' '+this.global_.token
                    },
                    success(res) {
                        console.log(res)
                    }
                })
			},
            DateChange(e) {
                var that = this
                console.log(e)
            	this.date = e.detail.value
                uni.request({
                    url:this.url + 'assets/month/profit/',
                    method:'GET',
                    header:{
                        Authorization:'JWT'+' '+this.global_.token
                    },
                    data:{
                        month:e.detail.value
                    },
                    success(res) {
                        console.log(res.data.data)
                        var seront = res.data.data
                        var ention = res.data.data.profit_records
                        that.ention = ention
                        console.log(ention.num)
                        that.month_profit = seront.month_profit
                        that.add_item = ention[0].add_time
                        that.numm = ention[0].num
                        
                        
                    }
                })
                
            },
            DateChang(e) {
                var that = this
                console.log(e)
            	this.date = e.detail.value
                uni.request({
                    url:this.url + 'assets/month/bill/',
                    method:'GET',
                    header:{
                        Authorization:'JWT'+' '+this.global_.token
                    },
                    data:{
                        month:e.detail.value
                    },
                    success(res) {
                        console.log(res.data.data)
                        var seront = res.data.data
                        var entin = res.data.data.bill_records
                        // that.ention = ention
                        // console.log(ention.num)
                        that.month_profit = seront.month_bill
                        // that.add_item = ention[0].add_time
                        // that.numm = ention[0].num
                        
                        
                    }
                })
                
            },
		    transfer:function(){
				uni.navigateTo({
					url:'../transfer/transfer'
				})
			}
            
        }
    }
</script>

<style>
	.height {
		height: var(--status-bar-height);
		background-color: #121212;
	}
    .box{
        width: 100%;
        height: 400rpx;
        background-color: #121212;
    }
    .boxx {

        height: 100%;
    }
    picker-view {
        width: 100%;
        height: 600upx;
        margin-top:20upx;
    }
    .item {
        line-height: 100upx;
        text-align: center;
    }
    .assets{
        text-align: center;
        padding-top: 80rpx;
		height: 60rpx;
		width: 100%;
		float: left;
        color: #FFFFFF;
    }
    .number{
		height: 300rpx;
		padding-left: 268rpx;
		padding-top: 40rpx;
        color: #F0AD4E;
    }
    .coin{
		float: left;
		padding-left: 48rpx;
        font-size: 24rpx;
        color: #FFFFFF;
    }
    .lock {
		float: right;
		padding-right: 48rpx;
        font-size: 24rpx;
        color: #FFFFFF;
    }
    .btn {
        height: 150rpx;
        width: 100%;
    }
    .picker{
        width: 30%;
        text-align: center;
        margin-top: 40rpx;
        margin-left: 40rpx;
        font-size: 30rpx;
        border: 2rpx solid #CCCCCC;
        border-radius: 25rpx;
    }
    .primary{
        width: 220rpx;

        height: 88rpx;
		float: left;
		margin-left: 48rpx;

		margin-top: 40rpx;
    }
    .primary1 {
        width: 220rpx;

        height: 88rpx;
		float: right;
		margin-right: 48rpx;

		margin-top: 40rpx;
        background-color: #121212;
        color: #FFFFFF;
    }
    .haide {
        width: 100%;
        height: 80rpx;
        background-color: #EDEDED;
    }
    .transfer{
    	width:130rpx;
    	height:130rpx;
    	display: block;
    	margin: 150rpx auto 20rpx;
    }
    .info{
    	text-align: center;
    	font-size: 32rpx;
    }
    .linee {
      width: 100%;
      height: 100rpx;
    }
    
    .select_box{
      width:130rpx;
      height:50rpx;
      margin-top:25rpx;
      border-radius: 50rpx;
      background:rgba(255,255,255,1);
      border: 4rpx solid rgba(220,220,220,1);
      position: relative;
      float: left;
      margin-left:48rpx;
    }
    .select_box .select{
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 8rpx;
      display: flex;
      align-items: center;
      padding: 0 10rpx;
      z-index:9;
    }
    
    .select_box .select .select_text{
      font-size: 26rpx;
      color: #777777;
      line-height: 28rpx;
      flex: 1;
      
    }
    
     .select_img{
    
      width: 30rpx;
      height: 30rpx;
      display: block;
      transition:transform 0.3s;
    }
     .select_img_rotate{
      transform:rotate(180deg); 
    }
    .select_box .option_box{
      position: absolute;
      top: calc(100% - 1px);
      width: 100%;
      background: #fff;
      box-sizing: border-box;
      height: 0;
      overflow-y: auto;
      background: #fff;
      /* z-index: 9; */
      transition: height 0.3s;
      border-left:1px solid #efefef;
      border-right:1px solid #efefef;
    }
    .select_box .option_box .option{
      display: block;
      line-height: 30rpx; 
      font-size: 26rpx;
      border-top: 1px solid #efefef;
      border-bottom: 1px solid #efefef;
      padding: 10rpx;
      color:#333;
    }
    
    .all1 {
      float: right;
      font-size: 30rpx;
      line-height: 10rpx;
      color: #333;

      margin-right:48rpx;
      
    }
    .list{
      height: 100;
    }
    .list-one{
    	width:100%;
    	height:116rpx;
    	background: #fff;
    	padding-left: 50rpx;
    	box-sizing: border-box;
    	
    }
    .list-icon{
    	float: left;
    	width:70rpx;
    	height:70rpx;
    	display: block;
    	margin-top:15rpx;
    }
    .list-txt{
    	float: left;
    	margin-left:20rpx;
    	color:#121212;
    	line-height: 50rpx;
    }
    .list-info{
    	font-size: 30rpx;
    }
    .list-time{
        font-size: 30rpx;	
    }
    .list-income{
    	float:right;
    	margin-right:48rpx;
    	line-height: 100rpx;
    	color:#41BEC9;
    	font-size: 34rpx;
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
    .cu-form-group .title {
    	min-width: calc(4em + 15px);
    }
</style>
