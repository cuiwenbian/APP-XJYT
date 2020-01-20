<template>
	<!-- 待确认买入详情订单 -->
	<view class="container">
		<view>
			<view class="box">
				<view class="small">
					<text>
						交易类型:
						<text class="smallxx">{{ type }}</text>
					</text>
					<text class="smallx">
						状态:
						<text class="smallxx">{{ state }}</text>
					</text>
				</view>
				<view class="small">
					<text>
						交易总价:
						<text class="lop">{{ labnrv.sale_money }}</text>
					</text>
					<text class="ser">
						矿机数量:
						<text class="lop">{{ labnrv.sale_num }}</text>
						台
					</text>
				</view>
				<view class="small">
					<text class="smallx1">
						人民币:
						<text class="lop">{{ rmb }}</text>
					</text>
				</view>
				<view class="smallss">
					<text>
						订单编号:
						<text class="lop">{{ labnrv.order_num }}</text>
					</text>
				</view>
				<view :class="frte ? 'small1' : 'smallpo'">
					<text>
						创建时间:
						<text class="smallxx1">{{ labnrv.set_time }}</text>
					</text>
					<view>
						支付时间:
						<text class="smallxx1">{{ labnrv.pay_time }}</text>
					</view>
				</view>
				<button :class="frte ? 'primary' : 'primary2'" @click="btn">{{ checkall }}</button>
			</view>
			<view class="box1">卖家信息</view>
			<view class="box2">
				<view class="bx">
					姓名:
					<text class="bxx">{{ labnrv.bname }}</text>
				</view>
				<view class="bx">
					联系方式:
					<text class="bxx">{{ labnrv.bmobile }}</text>
				</view>
			</view>
			<view class="jiange" style='width:100%;height:50rpx;'></view>
			<view class="box1">商品信息</view>
			<view class="box3" v-for="(item, index) in stw" :key="index">
				<view><image class="img" src="../../static/images/kuangji.png" mode=""></image></view>
				<view>
					<view class="small2">
						专业版:
						<text class="aa">{{ item.name }}</text>
						<text class="smal">{{ item.number }}</text>
					</view>
					<view class="small3">
						<text class="smalx">
							已运行{{ item.usedays }}天 |
							<text class="smalx">剩余{{ item.residuedays }}天</text>
						</text>
					</view>
					<view class="small3">
						<text class="smalx">储存{{ item.usedisk }}T|</text>
						<text class="smalx">总容量{{ item.data_hard_disk }}</text>
					</view>
				</view>
			</view>
			<view class="box4"><button class="primary1">等待卖家确认</button></view>
		</view>
	</view>
</template>

<script>
var getRmb = require('../../common/requset.js');
export default {
	data() {
		return {
			labnrv: '',
			type: '买入',
			datn: '',
			state: '',
			stw: '',
			price: '',
			rmb: '',
			frte: true,
			checkall: '展示完整信息'
		};
	},
	onLoad(option) {
		var that = this;
		//获取上个页面携带的数据，并复制
		var datn = JSON.parse(option.aser);
		that.datn = datn;
		var stw = that.datn[1];
		that.stw = that.datn[1];

		that.labnrv = that.datn[0][0];
		that.state = that.datn[0][0].order_status;
		if (that.state) {
			that.state = '待确认';
		}
		that.price = that.datn[0][0].sale_money;
		if (that.state == 101) {
			that.state = '待付款';
		}
		that.rmb = getRmb.getrmb(that.price);
	},
	methods: {
		btn: function() {
			var that = this;
			that.frte = !that.frte;
			if (that.frte == false) {
				that.checkall = '收起';
			} else {
				that.checkall = '展示完整信息';
			}
		}
	}
};
</script>

<style>
page {
	background-color: #152437;
	margin-bottom: 40rpx;
}
.box {
	width: 100%;
	background-color: #152437;
	color: #ffffff;
	padding-bottom: 20rpx;
}
.primary {
	width: 240rpx;
	height: 50rpx;
	border-radius: 70rpx;
	border: 1rpx solid #41bec9;
	color: #ffffff;
	background-color: #41bec9;
	line-height: 50rpx;
	margin-top: 20rpx;
	font-size: 20rpx;
}
.primary2 {
	width: 180rpx;
	height: 50rpx;
	border-radius: 70rpx;
	color: #ffffff;
	border: 0.5rpx solid #41bec9;
	background-color: #41bec9;
	line-height: 50rpx;
	margin-top: 20rpx;
	font-size: 20rpx;
}
.smallss {
	box-sizing: border-box;
	width: 100%;
	height: 110rpx;
	line-height: 110rpx;
	float: left;
	padding-left: 48rpx;
	margin-bottom: 20rpx;
	font-size: 28rpx;
}
.small {
	box-sizing: border-box;
	width: 100%;
	height: 110rpx;
	line-height: 110rpx;
	float: left;
	padding-left: 48rpx;
	border-bottom: 1rpx solid #121e2c;
	font-size: 28rpx;
}
.sam {
	float: right;
	font-size: 28rpx;
	margin-right: 48rpx;
}
.aa {
	font-size: 30rpx;
}
.lop {
	margin-left: 60rpx;
}
.smallx1 {
	float: left;
}
.ser {
	float: right;
	margin-right: 48rpx;
}
.small1 {
	box-sizing: border-box;
	width: 100%;
	float: left;
	height: 80rpx;
	font-size: 28rpx;
	padding-left: 48rpx;
	display: none;
	font-size: 28rpx;
}
.smallpo {
	display: block;
	line-height: 80rpx;
	font-size: 28rpx;
	padding-left: 48rpx;
	font-size: 28rpx;
}
.smallx {
	box-sizing: border-box;
	float: right;
	font-size: 28rpx;
	padding-right: 48rpx;
}
.smallxx {
	box-sizing: border-box;
	color: #e3ba85;
	padding-left: 40rpx;
}
.smallxx1 {
	margin-left: 48rpx;
}
.box1 {
	height: 78rpx;
	padding-left: 48rpx;
	line-height: 78rpx;
	font-size: 32rpx;
	color: #ffffff;
	background-color: #152437;
}
.box2 {
	height: 180rpx;
	width: 100%;
	color: #ffffff;
	background-color: #152437;
}
.bx {
	height: 90rpx;
	line-height: 90rpx;
	padding-left: 48rpx;
	font-size: 28rpx;
}
.bxx {
	padding-left: 30rpx;
}
.box3 {
	width: 100%;
	height: 260rpx;
	background-color: #152437;
}
.img {
	width: 160rpx;
	height: 160rpx;
	float: left;
	padding-left: 48rpx;
	padding-top: 40rpx;
}
.small2 {
	float: left;
	color: #ffffff;
	font-size: 30rpx;
	padding-left: 20rpx;
	padding-top: 40rpx;
}
.small3 {
	float: left;
	color: #ffffff;
	padding-top: 20rpx;
	font-size: 32rpx;
}
.smal {
	color: #ffffff;
	padding-left: 20rpx;
}
.smalx {
	padding-left: 34rpx;
	font-size: 26rpx;
	color: #ffffff;
}
.box4 {
	position: fixed;
	bottom: 0rpx;
	right: 0rpx;
	height: 80rpx;
	width: 100%;
	background-color: #152437;
	line-height: 80rpx;
}
.primary1 {
	width: 240rpx;
	height: 60rpx;
	line-height: 60rpx;
	margin-top: 12rpx;
	color: #ffffff;
	font-size: 28rpx;
	float: right;
	margin-right: 48rpx;
	background-color: #bfbfbf;
}
</style>
