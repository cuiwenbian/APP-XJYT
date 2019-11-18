<template>
	<!-- 我的钱包 -->
	<view class="container">
		<image class="bg" src="../../static/images/wallet-bg.png" mode="">
			<view class="bgTop">
				<view class="line"></view>
				<view class="txt">Filecoin</view>
				<view class="mess">
					<view class="num"><text class="number">{{num}}&nbsp;</text>&nbsp;个</view>
					<view class="trade" @click="transfer">转账</view>
				</view>
			</view>
		</image>
		<view class="income">
			收支记录
		</view>
		<view>
			<text class="all1">Filecoin:{{month_profit}}</text>
			<div class="item">
				<dyDatePicker timeType="month" :value="date" @getData="DateChang" :placeholder="date" ></dyDatePicker>
			</div>
			<view v-if="flag">
				<image class='transfer' src="../../static/images/no-transfer.png" mode=""></image>
				<view class="info">暂无记录</view>
			</view>
			<view v-else class="boxx">
				<view class="list-one" v-for="(item , index) in profit_records" :key="index">
					<image class='list-icon' src="../../static/images/FIL.png" mode=""></image>
					<view class='list-txt'>
						<view class='list-info'>收款</view>
						<view class='list-time'>{{item.add_time}}</view>
					</view>
					<view class='list-income'>+{{item.num}}</view>
					<view class='l'></view>
				</view>
				
				<view class="list-one" v-for="(item , index) in bill_records" :key="index">
					<image class='list-icon' src="../../static/images/FIL.png" mode=""></image>
					<view class='list-txt'>
						<view class='list-info'>收款</view>
						<view class='list-time'>{{item.add_time}}</view>
					</view>
					<view class='list-income'>-{{item.num}}</view>
					<view class='l'></view>
				</view>       	
			</view>
			
		</view>
	</view>
</template>

<script>
	 import dyDatePicker from '../../common/dy-Date.vue'
	export default{
		data(){
			return{
				flag:false,
				date:'本月',
				num:'',
				ber:'',
				nuber:'',
				fee:'',
				entin:'',
				teran: '',
				month_profit:'0',
				profit_records:[],
				month_bill:'',
				bill_records:[],
				length:'',
				length1:''
			}
		},
		components: {
			dyDatePicker
		},
		onLoad:function () {
		    var that = this
		    var data = new Date()
		    var text = data.getFullYear('-')
		    var txt = data.getMonth()+1
		    var teran = text + '-' + txt
			console.log(teran)
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
				url: this.url + 'assets/month/profit/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				data: {
					month: teran
				},
				success(res) {
					console.log(res)
					that.month_profit = res.data.data.month_profit
					that.profit_records = res.data.data.profit_records
					that.length=res.data.data.profit_records.length
				}
		   })
		   uni.request({
				url: this.url + 'assets/month/bill/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				data: {
					month: teran
				},
				success(res) {
					console.log(res)
					that.month_bill = res.data.data.month_bill
					that.bill_records = res.data.data.bill_records
					that.length1=res.data.data.bill_records.length	
					console.log(that.length1)		 
					console.log(that.length)
					if(that.length==0 && that.length1==0){
						that.flag=true
					}else{
						that.flag=false
					}
				}
		   })
		  
		   

		},
		methods: {
			DateChang(e) {
				var that = this
				console.log(e)
				that.date = e
				uni.request({
					url: this.url + 'assets/month/profit/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					data: {
						month: e
					},
					success(res) {
						console.log(res)
						that.month_profit = res.data.data.month_profit
						that.profit_records = res.data.data.profit_records
						that.length=res.data.data.profit_records.length
						if(that.length==0 && that.length1==0){
							that.flag=true
						}else{
							that.flag=false
						}
					}			
				})
				uni.request({
					url: this.url + 'assets/month/bill/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					data: {
						month: e
					},
					success(res) {
						console.log(res)
						that.month_bill = res.data.data.month_bill
						that.bill_records = res.data.data.bill_records
						that.length1=res.data.data.bill_records.length	
						if(that.length==0 && that.length1==0){
							that.flag=true
						}else{
							that.flag=false
						}
					}			
				})
			  
			},
		    transfer:function(){
				uni.navigateTo({
					url:'../transfer/transfer?bar='+ this.num+'&fee='+this.fee
				})
			}
			
		}
	}
</script>

<style>
	page{
		background:#EDEEEE;
	}
	
	.bg{
		width:100%;
		height:300rpx;
		position: relative;
	}
	.bgTop{
		width:100%;
		height:300rpx;
		z-index:99;
		position: absolute;
		top:0;
		left:0;
	}
	.line{
		height:100rpx;
	}
	.txt{
		line-height: 50rpx;
		margin-left:56rpx;
	}
	.mess{
		width:654rpx;
		height:70rpx;
		margin:0 auto;
	}
	.num{
		float: left;
		color:#121212;
		font-size: 30rpx;
		line-height:70rpx;
	}
	.number{
		color:#F0AD4E;
		font-size: 42rpx;
		
	}
	.trade{
		float: right;
		width:130rpx;
		height:60rpx;
		border-radius: 10rpx;
		background: #121212;
		color:#fff;
		text-align: center;
		line-height: 60rpx;
		font-size: 30rpx;
	}
	.income{
		width:100%;
		height:80rpx;
		padding-left: 48rpx;
		box-sizing: border-box;
		line-height: 80rpx;
		background: #FFFFFF;
		color:#F0AD4E;
		font-size: 30rpx;
		position: relative;
	}
	.income::after{
		content: '';
		width:140rpx;
		height:4rpx;
		background: #F0AD4E;
		position: absolute;
		top:78rpx;
		left:40rpx;
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
	.item {
		height: 80rpx;
	    font-size: 22rpx;
		background-color: #EDEDED;
	    padding-top: 20rpx;
	    padding-left: 45rpx;
		/* margin-bottom: 20rpx; */
		text-align: left;
		position: relative;
	}
	
	.all1 {
	  float: right;
	  font-size: 30rpx;
	  color: #333;
	  line-height: 90rpx;
	  margin-right:48rpx;
	  
	}
	.list-one{
		width:100%;
		height:116rpx;
		background: #fff;
		padding-left: 50rpx;
		box-sizing: border-box;
		position: relative;
	}
	.l{
		width:90%;
		height:1rpx;
		background: rgba(0,0,0,0.1);
		position: absolute;
		right:0;
		bottom:0;
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
	
</style>
