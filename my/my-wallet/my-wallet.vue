<template>
	<!-- 我的钱包 -->
	<view class="container">
		<view class="bg">
			<view class="line"></view>
			<view class="txt">Filecoin</view>
			<view class="mess">
				<view class="num"><text class="number">{{num}}&nbsp;</text>&nbsp;个</view>
				<view class="trade" @click="transfer">转账</view>
			</view>
		</view>
		<view class="income">
			收支记录
		</view>
		<view>
			<view v-if="flag" >
				<image class='transfer' src="../../static/images/no-transfer.png" mode=""></image>
				<view class="info">暂无记录</view>
			</view>
			<view v-else>
				<view class="linee">
				  <view class="select_box">
					<view class="select" @click="selectTap">
					  <text class="select_text">{{selectData[index]}}</text>
					  <image class="select_img " src="../../static/images/select.png" background-size="contain"></image>
					</view>
					<view class="option_box" :style="'height:' + (selectShow?(selectData.length>5?325:selectData.length*50):0) + 'rpx;'">
					  <text class="option" v-for="(item, index) in selectData" :key="index" :data-index="index" @click="optionTap">{{item}}</text>
					</view>
				  </view>
				  <view class="all1">Filecoin:100</view>
				</view>
				<view class="list-one">
					<image class='list-icon' src="../../static/images/FIL.png" mode=""></image>
					<view class='list-txt'>
						<view class='list-info'>收款</view>
						<view class='list-time'>9-01</view>
					</view>
					<view class='list-income'>+50.50</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				flag:false,
				selectShow: false,
				//控制下拉列表的显示隐藏，false隐藏、true显示
				selectData: ['十二月', '十一月', '十月', '九月', '八月', '七月', '六月', '五月', '四月', '三月', '二月', '一月'],
				//下拉列表的数据
				index: 0,
				//选择的下拉列表下标
				num:'',
				ber:'',
				nuber:'',
				fee:''
			}
		},
		onLoad:function () {
		    var that = this
		    uni.request({
		        url:this.url + "assets/",
		        method:'GET',
		        header:{
		            Authorization:'JWT'+' '+this.global_.token
		        },
		        success(res) {
					console.log('我的钱包')
					console.log(res)
		            that.num = res.data.availed_num
		            that.ber = res.data.fil_count
		            that.nuber = res.data.locked_num
					that.fee=res.data.fee
		        }
		    })
		    uni.request({
		        url:this.url + 'month/profit/',
		        method:'GET',
		        header:{
		            Authorization:'JWT'+' '+this.global_.token
		        },
		        success: (res) => {
					console.log('月收益')
		            console.log(res)
		        }
		    })
		},
		methods: {
			selectTap() {
			    this.selectShow= !this.selectShow
			},
			optionTap(e) {
			    var that = this;
			    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
			    var time = this.selectData[Index];
				this.index= Index,
				this.selectShow= !this.selectShow
			},
		    transfer:function(){
				uni.navigateTo({
					url:'../transfer/transfer?sole='+ this.ber+'&fee='+this.fee
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
		background-image: url('../../static/images/wallet-bg.png');
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
	  color: #333;
	  line-height: 100rpx;
	  margin-right:48rpx;
	  
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
</style>
