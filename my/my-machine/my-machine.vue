<template>
	<!-- 我的矿机 -->
	<view class="container">
		<view class="tan" @click="prompt" v-if="verify">
			<image src="../../static/images/tan.png" class="tanh"></image>
			<text class="mill">您的矿机数量发生改变，点此验收。</text>
		</view>
		<view v-if="flag">
			<view class="qaz">
				<block v-for="(item, index) in user_machine" :key="index">
					<view class="page" @tap="select(item)" :id="item.machine_id">
						<view class="page1">
							<view>
								<view v-if="item.status == '10'"><image class="te2" src="../../static/images/tuo8.png"></image></view>
								<view v-else-if="item.status == '6' || item.status == '7' || item.status == '5'">
									<image class="te2" src="../../static/images/tuo10.png"></image>
								</view>
								<view v-if="item.status == '11'"><image class="te2" src="../../static/images/tuo7.png"></image></view>
								<view v-if="item.status == '12'"><image class="te2" src="../../static/images/tuo9.png"></image></view>
							</view>
							<view><image class="te" src="../../static/images/jian.png"></image></view>
							<image class="te1" src="../../static/images/kuangji.png"></image>
							<view class="desc">
								<view class="desc1">
									<view class="obg">{{ item.number }}</view>
									<view class="obg2" style="color:red;">{{ item.machine_disk }}T/{{ item.disk }}</view>
								</view>
								<view class="desc1">
									<view class="obg" style="color: #999999;">{{ item.type }}</view>
									<view style="color: #61e458;">
										<view v-if="item.status == '10'"><text class="obg2">正在挖矿</text></view>
										<view v-if="item.status == '11'"><text class="obg2">警告</text></view>
										<view v-if="item.status == '12'"><text class="obg2">异常</text></view>
										<view v-if="item.status == '7'"><text class="obg2">准备上线</text></view>
										<view v-if="item.status == '5'"><text class="obg2">备货中</text></view>
										<view v-if="item.status == '6'"><text class="obg2">备货完成</text></view>
									</view>
								</view>
							</view>
						</view>
						<view class="line1"></view>
					</view>
				</block>
			</view>
		</view>
		<view v-else>
			<view class="box"></view>
			<view>
				<image class="none" src="../../static/images/add.png" mode=""></image>
				<view class="tips">您还没有矿机哦！</view>
			</view>
		</view>
		<view class="shade" v-if="shade" @touchmove.stop.prevent="moveHandle">
			<view class="pop">
				<view class="pop-title">若不阅读和同意协议,无法使用此功能哦</view>
				<view class="pops">
					<view class="pop-btn" @click="cancel">取消</view>
					<view class="pop-btn" @click="sure">去阅读</view>
				</view>
			</view>
		</view>
		<view v-else>
			<!-- #ifdef MP-WEIXIN -->
			<view class="service" @click="sure">服务协议</view>
			<!-- #endif -->
		</view>
		<view class="shade" v-if="sha" @touchmove.stop.prevent="moveHandle">
			<view class="pop">
				<view class="pop-title">您有新的服务器需要验收</view>
				<view class="pops">
					<view class="pop-bt" @click="can">取消</view>
					<view class="pop-btn" @click="validation">验证</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			flag: true,
			user_machine: '',
			machine_id: '',
			user_agreement: '',
			shade: false,
			sha: false,
			ress: '',
			verify: false
		};
	},
	onShow() {
		uni.request({
			url: this.url + 'usermachine/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success: res => {
				this.user_machine = res.data.data.machine_datas[1];
				if (this.user_machine.length == 0) {
					this.flag = false;
				}
				this.user_agreement = res.data.data.user_agreement;
				if (this.user_agreement == 0) {
					this.shade = true;
				} else if (this.user_agreement == 1) {
					this.shade = false;
				}
				this.ress = res.data.data.machine_datas[0];
				if (this.ress == 0) {
					this.verify = true;
				} else {
					this.verify = false;
				}
			}
		});
	},
	methods: {
		moveHandle:function(e){
			e.preventDefault();
			e.stopPropagation();
		},
		sure: function() {
			uni.navigateTo({
				url: '../../pages/agreement/agreement'
			});
		},
		cancel: function() {
			uni.navigateBack({
				url: '../../pages/my/my'
			});
		},
		onNavigationBarButtonTap: function() {
			uni.navigateTo({
				url: '../../pages/agreement/agreement'
			});
		},
		select: function(item) {
			uni.navigateTo({
				url: '../machine-detail/machine-detail?machine_id=' + item.machine_id
			});
		},
		prompt: function() {
			this.sha = true;
		},
		can: function() {
			this.sha = false;
		},
		validation: function() {
			uni.request({
				url: this.url + 'usermachine/affirm/',
				method: 'POST',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {}
			});
			uni.showToast({
				title: '已验证'
			});
			this.sha = false;
			this.verify = false;
		}
	}
};
</script>

<style>
.service {
	width:170rpx;
	height:60rpx;
	position: fixed;
	right:40rpx;
	bottom:130rpx;
	box-shadow: 1px 5px 5px #888888;
	background-color: #5DBFCA;
	color:#fff;
	font-size: 16rpx;
	text-align: center;
	line-height: 60rpx;
	border-radius: 30rpx;
	z-index: 999;
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
	margin: 400rpx auto;
	padding: 0 60rpx;
	box-sizing: border-box;
	background: #fff;
	border-radius: 10rpx;
}
.pop-title {
	height: 180rpx;
	line-height: 180rpx;
	text-align: center;
	font-size: 24rpx;
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
	border-radius: 10rpx;
	line-height: 66rpx;
	font-size: 30rpx;
	color: #fff;
	text-align: center;
	background: #121212;
}
.pop-bt {
	width: 158rpx;
	height: 66rpx;
	border-radius: 10rpx;
	line-height: 66rpx;
	font-size: 30rpx;
	color: #999999;
	text-align: center;
	background: #fff;
}
.box {
	height: 200rpx;
}
.none {
	display: block;
	width: 250rpx;
	height: 150rpx;
	margin: 0 auto;
}
.tips {
	margin-top: 50rpx;
	text-align: center;
	color: #bfbfbf;
	font-size: 28rpx;
}
.line1 {
	width: 100%;
	height: 5rpx;
	background-color: #f2f2f2;
}
.page1 {
	height: 100rpx;
	margin-left: 75rpx;
	margin-top: 40rpx;
	padding-right: 40rpx;
	padding-bottom: 20rpx;
	position: relative;
}
.te1 {
	position: relative;
	display: block;
	float: left;
	width: 100rpx;
	height: 100rpx;
}
.te {
	display: block;
	float: right;
	margin-top: 30rpx;
	width: 25rpx;
	height: 32rpx;
	margin-right: -8rpx;
}

.desc {
	width: 100%;
	height: 100%;
}
.desc1 {
	height: 50%;
	line-height: 100%;
}
.obg {
	font-size: 32rpx;
	display: block;
	float: left;
	padding-left: 45rpx;
}
.obg2 {
	font-size: 32rpx;
	float: right;
}

/* .obg1 {
	position: relative;
	display: block;
	float: left;
	margin-left: -206rpx;
	font-size: 30rpx;
	margin-top: 64rpx;
	color: #999999;
}
.obg2 {
	position: relative;
	left: 50rpx;
	font-size: 34rpx;
	display: block;
	float: right;
	margin-right: 60rpx;
	margin-top: -3rpx;
	color: #e5543f;
}
.obg3 {
	position: relative;
	display: block;
	float: right;
	font-size: 30rpx;
	margin-top: 18rpx;
	color: #61e458;
} */
.te2 {
	position: relative;
	display: block;
	float: left;
	margin-top: 36rpx;
	width: 20rpx;
	height: 20rpx;
	margin-left: -45rpx;
}
.tan {
	width: 100%;
	height: 66rpx;
	position: fixed;
	background-color: #fbe8e9;
	opacity: 0.9;
	z-index: 9;
}
.tanh {
	width: 32rpx;
	height: 32rpx;
	padding-left: 42rpx;
	margin-top: 18rpx;
}
.mill {
	color: #f3707c;
	line-height: 66rpx;
	font-size: 22rpx;
	padding-left: 15rpx;
	text-align: center;
}
</style>
