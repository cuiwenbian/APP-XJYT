<template>
	<!-- 矿机详情 -->
	<view class="content">
		<!-- 头部 -->
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
				{{ item.text}}
			</view>
		</view>
		<!-- 显示区域 -->
		<view class="list"  v-if="tabCurrentIndex === 0">
			
				 <view class='pagex'>
					<view class="nav_right_items">
						<text class='te'>名称 ：</text>
						<text class='te1'>{{machine_config.name}}</text>
					</view>
					 <view class="line1"></view>
					<view class="nav_right_items">
						<text class='te'>编号 ：</text>
						<text class='te1'>{{machine_config.number}}</text>
					</view>
					 <view class="line1"></view>
					 <view class="nav_right_items">
						<text class='te'>批次 ：</text>
						<text class='te1'>{{machine_config.batch}}</text>
					</view>
					 <view class="line1"></view>
					 <view class="nav_right_items">
						<text class='te'>型号 ：</text>
						<text class='te1'>{{machine_config.type}}</text>
					</view>
					 <view class="line1"></view>
					 <view class="nav_right_items">
						<text class='te'>CPU ：</text>
						<text class='te1'>{{machine_config.cpu}}</text>
					</view>
					 <view class="line1"></view>
					 <view class="nav_right_items">
						<text class='te'>内存 ：</text>
						<text class='te1'>{{machine_config.memory}}</text>
					</view>
					 <view class="line1"></view>
					 <view class="nav_right_items">
						<text class='te'>系统硬盘 ：</text>
						<text class='te1'>{{machine_config.system_hard_disk}}</text>
					</view>
					 <view class="line1"></view>
					  <view class="nav_right_items">
						<text class='te'>数据硬盘 ：</text>
						<text class='te1'>{{machine_config.data_hard_disk}}</text>
					 </view>
					 <view class="line1"></view>
				    
					 <view class="nav_right_items">
						<text class='te'>地区 ：</text>
						<text class='te1'>{{machine_config.area}}</text>
					</view>
					 <view class="line1"></view>
					<view class="nav_right_items">
						<text class='te'>矿场 ：</text>
						<text class='te1'>{{machine_config.machine_area}}</text>
					</view>
					<view class="line1"></view>
				</view>
			   
			   
		</view>
		<view class="list"  v-if="tabCurrentIndex === 1">
			 <view class='pagex' >
					  <view class="nav_right_items">
						 <text class='te'>CPU占有率 ：</text>
						 <text class='te1'>{{machine_status.cpu_share}}</text>
					  </view>
					  <view class="line1"></view>
					  <view class="nav_right_items">
						 <text class='te'>硬盘占有率 ：</text>
						 <text class='te1'>{{machine_status.data_share}}</text>
					  </view>
					  <view class="line1"></view>
					 <view class="nav_right_items">
						 <text class='te'>网络占有率 ：</text>
						 <text class='te1'>{{machine_status.memory_share}}</text>
					  </view>
					  <view class="line1"></view>
					 <view class="nav_right_items">
						 <text class='te'>内存占有率 ：</text>
						 <text class='te1'>{{machine_status.vf_share}}</text>
					  </view>
					  <view class="line1"></view>
			 </view>
		</view> 
		<view class="list"  v-if="tabCurrentIndex === 2">
			
		</view>
	</view>
</template>

<script>
	var that
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				machine_config:'',
				machine_status:'',
				machine_id:'',
				navList: [
					{
						state: 0,
						text: '矿机配置',
						orderList: []
					},
					{
						state: 1,
						text: '矿机状态',
						orderList: []
					},
					{
						state: 2,
						text: '矿机记录',
						orderList: []
					},
					
				]
			};
		}, 
		onLoad(options) {
			that=this;
			 this.machine_id=options.machine_id;
			 console.log(this.machine_id)
			 this.tabCurrentIndex = 0;         // 页面显示是默认选中第一个	 
			  uni.request({
			  	url:this.urll+'usermachineinfo/'+'1/'+ this.machine_id,
				method:'GET',
				header:{
					Authorization:'JWT'+' '+this.global_.token 
				},
				success(res) {
					console.log(res)
					that.machine_config=res.data.data
					console.log(that.machine_config)
				}
			  }) 
			  uni.request({
			  	url:this.urll+'usermachineinfo/'+'2/'+ this.machine_id,
			  	method:'GET',
			  	header:{
			  		Authorization:'JWT'+' '+this.global_.token 
			  	},
			  	success(res) {
			  		console.log(res)
					that.machine_status=res.data.data	
					
			  	}			
			  }) 
			 
		}, 
		methods: {
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				that.tabCurrentIndex = index;
				
			}
		}
	};
</script>

<style>
	.content {
		background:#fff;
		height: 100%;
	}
	
	.swiper-box {
		height: calc(100% - 40px);
	}
	.list-scroll-content {
		height: 100%;
	}
	
	.navbar {
		display: flex;
		height: 80rpx;
		background: #CCCCCC;
		color:a0a0a0;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
		position: relative;
		z-index: 10;
		
	}
	.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 34rpx;
			color: #121212;
			position: relative;
	}
	.current{
		color:#fff;
	}
	.current:after{  
	  content: "";  
	  display: block;  
	  position: absolute;  
	  bottom: 0;  
	  left: 0;  
	  right: 0;  
	  height: 4rpx;  
	  background: #fff;  
	}
	.uni-swiper-item {
		height: auto;
	}
	 
	.line1{
	  width: 100%;
	  height: 3rpx;
	  background-color: #f2f2f2;
	}
	.nav_right_items{
	  width: 100%;
	  height: 120rpx;  
	}
	.nav_righ{
	 overflow: hidden;
	}
	.te{
	   float: left;  
	   margin-top: 43rpx;
	   margin-left: 50rpx;
	   color: #888;
	   font-size:30rpx;
	
	}
	.te1{
	  float: right;
	  margin-top: 43rpx;
	  margin-right: 50rpx;
	  font-size:30rpx;
	}
	.nodata_text
	{
	  color: black;
	  font-size: 34rpx;  
	  text-align: center;  
	} 
	.swiper-tab {
	 
	display: flex;
	 
	flex-direction: row;
	 
	line-height: 80rpx;
	
	background: #01c0dd;  
	 
	/* border-bottom: 2rpx solid #777; */
	 
	}
	 .tab-item {
	 
	width: 33.3%;
	 
	text-align: center;
	 
	font-size: 34rpx;
	 
	color: #777;
	 
	}
	.swiper {
	 
	height: 100%;
	overflow: hidden;
	}
	.swiper-1{
	  background: #fff;
	   height: 100%;
	}
	 
	  .on {
	 
	color: #fff;
	 
	border-bottom: 5rpx solid #fff;
	 
	}
</style>
