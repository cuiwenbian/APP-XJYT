<template>
	<!-- 待付款详情订单 -->
	<view class="container">
		<view class="box">
			<view class="small">
				<text>
					交易类型:
					<text class="smallxx">{{ type1 }}</text>
				</text>
				<text class="smallx">
					状态:
					<text class="smallxx">{{ state }}</text>
				</text>
			</view>
			<view class="small">
				<text>
					交易总价:
					<text class="smallxx1">{{ laiqi.sale_money }}</text>
				</text>
				<text class="sam">
					矿机数量:
					<text class="smallxx1">{{ laiqi.sale_num }}台</text>
				</text>
			</view>
			<view class="small">
				<view class="smallx1">
					人民币:
					<text class="lop">{{ rmb }}</text>
				</view>
			</view>
			<view class="smallss">
				<text>
					订单编号:
					<text class="smallxx1">{{ laiqi.order_num }}</text>
				</text>
			</view>
			<view :class="frte ? 'small1' : 'smallpo'">
				<text>
					创建时间:
					<text class="smallxx1">{{ laiqi.set_time }}</text>
				</text>
			</view>
			<button :class="frte ? 'primary' : 'primary2'" @click="btn1">{{ checkall }}</button>
		</view>
		<view class="box1">卖家信息</view>
		<view class="box2">
			<view class="bx">
				姓名:
				<text class="bxx">{{ laiqi.bname }}</text>
			</view>
			<view class="bx">
				联系方式:
				<text class="bxx">{{ laiqi.bmobile }}</text>
			</view>
		</view>
		<view class="jiange" style='width:100%;height:50rpx;'></view>
		<view class="box1">商品信息</view>
		<view class="box3" v-for="(item, index) in vior" :key="index">
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
		<view class="box4">
			<button class="primary1" @click="btn">我已付款</button>
			<!-- #ifndef H5 -->
			<password-input v-if="passIn" ref="wrong" @clo="clo" @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
			<!-- #endif -->
			<!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
			<!-- #ifdef H5 -->
			<view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" :list="numberList" ref="wrong"></password-input></view>
			<!-- #endif -->
			<!-- 数字键盘 -->
			<keyboard-package ref="number" @onChange="onChange" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
			<!-- <button class="primary1">我已付款</button> -->
		</view>
		<view class="shade" v-if="shade" @touchmove.stop.prevent="moveHandle">
			<view class="pop">
				<view class="pop-title">未设置资金密码</view>
				<view class="pops">
					<view class="pop-btn" @click="cancel">取消</view>
					<view class="pop-bn" @click="sure">去设置</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
var getRmb = require('../../common/requset.js');
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
export default {
	data() {
		return {
			laiqi: '',
			type1: '买入',
			state: '',
			price: '',
			vior: '',
			x: '',
			rmb: '',
			numberList: [],
			length: 6,
			stuse: '',
			type: 'number',
			passIn: false,
			shade: false,
			frte: true,
			checkall: '展示完整信息'
		};
	},
	components: {
		keyboardPackage,
		passwordInput
	},
	onLoad(option) {
		var that = this;
		//获取上个页面携带的数据，并复制
		var ction = JSON.parse(option.mvvp);
		that.ction = ction;
		var vior = that.ction[1];
		that.vior = that.ction[1];
		that.state = ction[0][0].order_status;
		if (that.state == 101) {
			that.state = '待付款';
		}
		that.laiqi = that.ction[0][0];
		that.price = that.laiqi.sale_money;
		that.x = that.laiqi.order_num;
		that.rmb = getRmb.getrmb(that.price);
	},
	methods: {
		moveHandle:function(e){
			e.preventDefault();
			e.stopPropagation();
		},
		clo: function() {
			this.passIn = false;
			this.$refs['number'].close();
			this.numberList.length = 0;
		},
		onChange(e) {
			if (e.show == false) {
				this.passIn = false;
			}
			this.numberList.length = 0;
		},
		onDelete() {
			this.numberList.pop();
		},
		onConfirm() {
			if (this.numberList.length != 6) {
				uni.showToast({
					title: '请输入六位交易密码！',
					duration: 2000,
					icon: 'none'
				});
			}
		},
		onInput(val) {
			var that = this;
			that.numberList.push(val);
			that.password = that.numberList.join().replace(/,/g, '');
			if (that.numberList.length >= that.length) {
				uni.request({
					url: that.url + 'buyaffirm/',
					method: 'POST',
					data: {
						order_num: that.x,
						password: that.password
					},
					header: {
						Authorization: 'JWT' + ' ' + that.global_.token
					},
					success(res) {
						if (res.statusCode == 400) {
							that.numberList.pop();
							that.numberList.length = 0;
							that.$refs.wrong.flag = false;
							var n = res.data.data.err_num;
							var s = 5 - n;
							that.$refs.wrong.tip = '剩余' + s + '次机会';
						}
						if (res.statusCode == 401) {
							that.passIn = false;
							that.$refs['number'].close();
							that.shade = true;
							that.stuse = res.statusCode;
						}
						if (res.statusCode == 423) {
							uni.showToast({
								title: '交易密码已锁定,请在今日24:00后进行交易',
								icon: 'none',
								duration: 2000
							});
						}
						if (res.statusCode == 201) {
							that.success = true;
						}
						if (res.statusCode == 200) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.navigateBack({
								delta: 2
							});
							uni.showToast({
								title: '付款完成',
								duration: 3000
							});
						}
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
					}
				});
				this.numberList.length = 0;
			}
		},
		btn: function() {
			var that = this;
			this.passIn = true;
			this.$refs['number'].open();
			this.onInput(val);
		},
		cancel: function() {
			this.shade = false;
		},
		sure: function() {
			if (this.stuse == 401) {
				uni.switchTab({
					url: '../../pages/my/my'
				});
			}
		},
		btn1: function() {
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
.shade {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
}
.pop {
	width: 550rpx;
	height: 300rpx;
	margin: 500rpx auto;
	padding: 0 60rpx;
	box-sizing: border-box;
	background: #fff;
	border-radius: 10rpx;
}
.pop-title {
	height: 180rpx;
	line-height: 180rpx;
	text-align: center;
	font-size: 26rpx;
}
.pops {
	height: 100rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.pop-btn {
	width: 158rpx;
	height: 66rpx;
	border-radius: 5rpx;
	line-height: 66rpx;
	font-size: 30rpx;
	color: #797979;
	text-align: center;
}
.pop-bn {
	width: 158rpx;
	height: 66rpx;
	border-radius: 10rpx;
	line-height: 66rpx;
	font-size: 28rpx;
	color: #ffffff;
	background-color: #000000;
	text-align: center;
}
.box {
	width: 100%;
	color: #ffffff;
	background-color: #152437;
	padding-bottom: 20rpx;
}
.primary {
	width: 250rpx;
	height: 50rpx;
	border-radius: 70rpx;
	border: 0.5rpx solid #000000;
	background-color: #41bec9;
	color: #ffffff;
	line-height: 50rpx;
	margin-top: 20rpx;
	font-size: 20rpx;
}
.primary2 {
	width: 180rpx;
	height: 50rpx;
	border-radius: 70rpx;
	border: 0.5rpx solid #000000;
	color: #ffffff;
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
.small1 {
	box-sizing: border-box;
	width: 100%;
	float: left;
	height: 80rpx;
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
	background-color: #152437;
}
.bx {
	height: 90rpx;
	line-height: 90rpx;
	padding-left: 48rpx;
	color: #ffffff;
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
	font-size: 30rpx;
	padding-left: 20rpx;
	color: #ffffff;
	padding-top: 40rpx;
}
.small3 {
	float: left;
	padding-top: 20rpx;
	color: #ffffff;
	font-size: 32rpx;
}
.smal {
	padding-left: 20rpx;
}
.smalx {
	padding-left: 34rpx;
	font-size: 26rpx;
	color: #ffffff;
}
.malx {
	display: none;
	box-sizing: border-box;
	color: #e3ba85;
	padding-left: 40rpx;
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
	background-color: #41bec9;
}
</style>
