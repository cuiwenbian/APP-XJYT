<template>
	<!-- 我的服务器 -->
	<view class="container">
		<image class='bg' src="../../static/images/my-background.png" mode="">
			<view class='back-page' @click='backFront'><image src="../../static/images/zuo.png" mode=""></image></view>
			<view class="title_index">
				我的服务器
			</view>
			<!-- #ifndef MP-WEIXIN -->
				<view class='jilu' @click='sure'>服务协议</view>
			<!-- #endif -->
			<view class="machine-infomation">
				<image class='machine-img' src="../../static/images/machine-icon.png" mode=""></image>
				<view class='machine-nums'>
					<view class="nums">
						{{many}} <text class='machine-txt'> 台</text>
					</view>
					<view class='machine-txt'>我的服务器</view>
				</view>
				<view class='all-trans'>
					<view class="nums" style='letter-spacing: 2rpx;'>
						{{num}} <text class='machine-txt'>FIL</text>
					</view>
					<view class='machine-txt'>累计收益</view>
				</view>
			</view>
			<view class="my-content" v-if='flag'>
				<view class="sales">
					<view class='my-content-txt'>可出售</view>
					<view class='my-content-sale' @click="salemachine">出售</view>
				</view>
					<scroll-view class="scroll-view" scroll-y="true" @scroll='scroll' :scroll-top="scrollTop">
						<block v-for="(item, index) in user_machine" :key="index">
						<view class="machine-sale-list" @tap="select(item)" :id="item.machine_id">
							<view class='circlein'>
								<image class='go' src="../../static/images/right-machine.png" mode=""></image>
							</view>
							<image class='machine-pic' src="../../static/images/machine-par.png"></image>
							<view class="machine-desc-info">
								<view class='machine-name'>{{ item.type }} {{ item.number }}</view>
								<view class='machine-in'>
									<view class='a'>已运行<text class='s'>{{ item.usedays }}</text>天</view>
									<view class='a'>剩余<text class='y'>{{ item.freedays }}</text>天</view>
								</view>
								<view class='all-free'> 总容量{{ item.disk }}T</view>
							</view>
						</view>
						</block>
					</scroll-view>
			</view>
			<view class="my-content" v-else>
				<image class='nomachine' src="../../static/images/no-machine.png" mode=""></image>
			    <view style='color:#111111;font-size:24rpx;text-align: center;line-height: 95rpx;'>暂无服务器</view>
			</view>
			<view class="tan" @click="prompt" v-if="verify">
				<image src="../../static/images/tan.png" class="tanh"></image>
				<text class="mill">您的服务器数量发生改变，点此验收。</text>
			</view>
		</image>
		<view class="shade" v-if="shade" @touchmove.stop.prevent="moveHandle">
			<view class="pop">
				<view class="pop-title">若不阅读和同意协议,无法使用此功能哦</view>
				<view class="pops">
					<view class="pop-btn1" @click="cancel">取消</view>
					<view class="pop-btn2" @click="sure">去阅读</view>
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
					<view class="pop-btn1" @click="can">取消</view>
					<view class="pop-btn2" @click="validation">验收</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		debounce
	} from '@/common/utils.js';
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
				scrollTop: 0,
				old: {
					scrollTop: 0,
				},
				verify: false,
				many:'0',
				num:'0.00',
				
			};
		},
		onShow() {
			var that=this;
			uni.request({
				url: this.url + "assets/",
				method:'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					console.log(res)
					that.num = parseFloat(res.data.fil_count).toFixed(2)||'0.00'
				}
			});
			uni.request({
				url: this.url + 'usermachines/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success: res => {
					console.log(res)
					this.user_machine = res.data.data.machine_datas[1];
					this.many=this.user_machine.length;
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
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			backFront(){
				uni.navigateBack({
					delta:1
				})
			},
			salemachine:function(){
			    uni.showToast({
			    	title:'服务器出售功能暂未开放',
					icon:'none',
					duration:3000
			    })	
			},
			moveHandle: function(e) {
				e.preventDefault();
				e.stopPropagation();
			},
			linkToTransfer1: debounce(
				function() {
					uni.navigateTo({
						url: '../../pages/agreement/agreement'
					});
				},
				500,
				true
			),
			sure: function() {
				this.linkToTransfer1()
			},
			cancel: function() {
				uni.navigateBack({
					delta:1
				})
			},
			onNavigationBarButtonTap: function() {
				uni.navigateTo({
					url: '../../pages/agreement/agreement'
				});
			},
			linkToTransfer: debounce(
				function(item) {
					uni.navigateTo({
						url: '../machine-detail/machine-detail?machine_id=' + item.machine_id
					});
				},
				500,
				true
			),
			select: function(item) {
				this.linkToTransfer(item);
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
					title: '已验收'
				});
				this.sha = false;
				this.verify = false;
			}
		}
	};
</script>

<style>
	page {
		background: #ffffff;
		position: relative;
	}

	.bg {
		width: 100%;
		height: 612rpx;
		position: fixed;
		top:0;
		left:0;
	}
    .back-page{
		width:54rpx;
		height:52rpx;
		position: fixed;
		top: 74rpx;
		left:24rpx;
		z-index: 99;
	}
	.back-page image{
		width:54rpx;
		height:52rpx;
		display:block ;
	}
	.title_index {
		height: 64rpx;
		width: 100%;
		text-align: center;
		line-height: 64rpx;
		font-size: 36rpx;
		position: fixed;
		top: 69rpx;
		color: #ffffff;
		z-index: 9;
	}
    .jilu {

    	width: 120rpx;
    	height: 52rpx;
    	text-align: center;
    	line-height: 52rpx;
    	font-size:0.7rem;
    	color: #FFFFFF;
    	position: absolute;
    	top: 74rpx;
    	right: 24rpx;
    	z-index: 99;
    }
	.machine-infomation {
		width: 100%;
		height: 108rpx;
		position: fixed;
		top: 208rpx;
		padding: 0 48rpx;
		box-sizing: border-box;
	}

	.machine-img {
		width: 108rpx;
		height: 108rpx;
		display: block;
		float: left;
	}

	.machine-nums {
		float: left;
		margin-left: 40rpx;
		color: #FFFFFF;
		font-family: 'myface_bold';
	}

	.all-trans {
		float: left;
		width:300rpx;
		margin-left: 30rpx;
		color: #FFFFFF;
	}

	.nums {
		font-size: 48rpx;
		line-height: 50rpx;
		letter-spacing: 8rpx;
		font-family: 'myface_bold';
	}

	.machine-txt {
		font-size: 24rpx;
	}

	.my-content {
		width: 660rpx;
		height: calc(100% - 388rpx);
		background: rgba(255, 255, 255, 0.9);
		border-radius: 13rpx;
		position: fixed;
		top: 348rpx;
		left: 50%;
		margin-left: -330rpx;
		margin-bottom:50rpx;
		padding: 36rpx 16rpx 120rpx;
		box-sizing: border-box;
		box-shadow: 0 0 50px 10rpx rgba(0, 0, 0, 0.2);
	}
    .nomachine{
		width:344rpx;
		height:252rpx;
		display: block;
		margin:190rpx auto 0;
	}
	.sales {
		width: 100%;
		height: 80rpx;
		overflow: hidden;
	}

	.my-content-txt {
		font-size: 38rpx;
		color: #111111;
		float: left;
		line-height: 79rpx;
		height: 80rpx;
	}

	.my-content-sale {
		width: 240rpx;
		height: 79rpx;
		background-image: linear-gradient(to right, #01c774, #01dda9);
		border-radius: 38rpx;
		font-size: 26rpx;
		text-align: center;
		line-height: 79rpx;
		color: #FFFFFF;
		float: right;
	}
	.scroll-view {
		width: 640rpx;
		height: 100%;
	}
	.machine-sale-list {
		width: 640rpx;
		height: 216rpx;
		margin: 30rpx auto;
		border-bottom: 1rpx solid #E1E1E1;
		position: relative;
	}
    .circlein{
		width:52rpx;
		height:52rpx;
		background-color: #F3F3F3;
		border-radius: 50%;
		position: absolute;
		right:39rpx;
		bottom:50rpx;
	}
	.go{
		width:16rpx;
		height:26rpx;
		display: block;
		margin-top:15rpx;
		margin-left:20rpx;
	}
	.machine-pic {
		width: 166rpx;
		height: 140rpx;
		display: block;
		float: left;
		margin-top: 25rpx;
	}

	.machine-desc-info {
		float: left;
		margin-left: 20rpx;
	}
	.machine-name {
		color: #111111;
		font-size: 32rpx;
		line-height: 50rpx;
		font-family: 'myface_bold';
	}
	.machine-in {
		overflow: hidden;
		line-height: 70rpx;
	}

	.a {
		float: left;
		margin-right: 30rpx;
		color: #666666;
		font-size: 18rpx;
		letter-spacing: 5rpx;
	}

	.s {
		color: #F6B506;
		font-size: 32rpx;
		letter-spacing: 5rpx;
		font-family: 'myface_bold';
	}

	.y {
		color: #01C97A;
		font-size: 32rpx;
		font-family: 'myface_bold';
	}

	.all-free {
		color: #F60808;
		font-size: 18rpx;
		line-height: 60rpx;
		font-family: 'myface_bold';
	}
    .tan {
    	width: 100%;
    	height: 54rpx;
    	position: absolute;
    	top:142rpx;
    	background-color:#FFD1A0;
    	z-index: 9;
    }
    
    .tanh {
    	width: 26rpx;
    	height: 26rpx;
		display: block;
    	padding-left: 42rpx;
    	margin-top: 18rpx;
		float: left;
    }

    .mill {
    	color: #ffffff;
    	line-height: 54rpx;
    	font-size: 22rpx;
    	padding-left: 15rpx;
    	text-align: center;
    }


	.service {
		width: 170rpx;
		height: 60rpx;
		position: fixed;
		right: 40rpx;
		bottom: 130rpx;
		box-shadow: 1px 5px 5px #888888;
		background-color: #5dbfca;
		color: #fff;
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

	.pop-btn1 {
		width: 158rpx;
		height: 66rpx;
		border-radius: 50rpx;
		line-height: 66rpx;
		font-size: 26rpx;
		color: #333;
		text-align: center;
	}
	.pop-btn2{
		width: 158rpx;
		height: 66rpx;
		border-radius: 50rpx;
		line-height: 66rpx;
		font-size: 26rpx;
		color: #fff;
		text-align: center;
		background-image: linear-gradient(to right, #01c774, #01dda9);
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

	.te2 {
		position: relative;
		display: block;
		float: left;
		margin-top: 36rpx;
		width: 20rpx;
		height: 20rpx;
		margin-left: -45rpx;
	}

	
</style>
