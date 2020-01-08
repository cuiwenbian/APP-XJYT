<template>
	<view class="container">
		<view class="banner">
			<view class="all">
				数量(台)
			</view>
			<view class='assets'>{{num}}</view>
		</view>
		<view v-if="flag">
			<image class='transfer' src="../../static/images/none.png" mode=""></image>
			<view class="nomachine">暂无服务器</view>
		</view>
		<block v-else>
			<checkbox-group class="block" @change="CheckboxChange">
				<view >
					<view class="cu-form-group margin-top">
						<checkbox class="tee" :class="item.checked ? 'checked' : ''" :checked="item.checked ? true : false" :value="item.number"></checkbox>
						<view class="pagex">
							<view class="page1">
								<view class="img"><image class="por" src="../../static/images/kuangji.png"></image></view>
								<view class="info">
									<view class="obg">{{ item.name }} {{ item.number }}</view>
									<view class="obg_one">
										<text class="days">已运行{{ item.data }}天</text>
										| 剩余{{ item.usedata }}天
									</view>
		
									<view class="obg_one">
										<text class="days">储存{{ item.freedisk }}T</text>
										| 总容量{{ item.disk }}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</checkbox-group>
		</block>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				num:'0',
				flag:false
			}
		}
	}
</script>

<style>
	.banner{
		width:100%;
		height:210rpx;
		display: block;
		/* margin:35rpx auto; */
		background-image: url('../../static/images/ban.png');
		background-size: 750rpx 210rpx;
		position: relative;
		padding-top:69rpx;
		padding-left:60rpx;
		box-sizing: border-box;
	}
	.all{
		font-size: 24rpx;
		color:#FFFFFF;
	}
	.assets{
		font-size: 48rpx;
		color:#FFFFFF;
		margin-top:19rpx;
	}
	.transfer {
		width: 130rpx;
		height: 130rpx;
		display: block;
		margin: 152rpx auto 35rpx;
	}
	.nomachine {
		text-align: center;
	    color:#8796AA;
		font-size: 26rpx;
	}
	
	.tee {
		float: right;
		margin-top: 60rpx;
		width: 40rpx;
		height: 40rpx;
		margin-right: 90rpx;
	}
	.pagex {
		width: 100%;
		display: block;
	}
	.page1 {
		height: 180rpx;
		padding-right: 40rpx;
		padding-bottom: 20rpx;
	}
	.img {
		width: 20%;
	}
	.molis {
		float: right;
		margin-bottom: 60rpx;
	}
	.por {
		float: left;
		width: 145rpx;
		height: 126rpx;
		margin-top: 20rpx;
		margin-left: 48rpx;
	}
	.info {
		width: 50%;
		height: 100%;
		margin-left: 20rpx;
		float: left;
	}
	.obg {
		margin-top: 20rpx;
		font-size: 30rpx;
	}
	.days {
		color: #5ca614;
	}
	.obg_one {
		margin-top: 10rpx;
		font-size: 24rpx;
	}
</style>
