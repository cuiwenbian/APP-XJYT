<template>
	<!-- 转账 -->
	<view class="container">
		<view class="form-list-wrap" :class="{ active: phoneFocusStatus }" :style="{'paddingTop':isFoucs?'20rpx':'60rpx'}">
			<view class="title-box am-flex-row-center">
				<image src="../../static/images/icon-user-n.png" class="icon-img user-n"></image>
				<image src="../../static/images/icon-user-n-active.png" class="icon-img icon-img-active user-n"></image>
				地址
			</view>
			<view class='all'  @click="link">
				<image class='chooseadd'  src="../../static/images/right-machine.png" mode=""></image>
			</view>
			<view class="write-wrap" :style="{'paddingTop':isFoucs?'0':'60rpx'}">
				<input type="phone" @input="getTranferAdd" :value="wallet_value" class="write-input" @focus="formItemFocus('phone')" @blur="formItemBlur('phone')"/>
			</view>
			
		</view>
		<view class="form-list-wrap" :class="{ active: numFocusStatus }">
			<view class="title-box am-flex-row-center">
				<image src="/static/images/icon-trans.png" class="icon-img trans-n"></image>
				<image src="/static/images/icon-trans-active.png" class="icon-img icon-img-active trans-n"></image>
				数量
			</view>
			<view class="all alltran" @click="fusre">全部转账</view>
			<view class="write-wrap"  :style="{'paddingTop':isFoucs?'0':'60rpx'}">
				<input type="number" maxlength="20" @input="getFilNum" v-model="fil_num"  class="write-input" style='padding-right: 120rpx;' @focus="formItemFocus('num')" @blur="formItemBlur('num')"   /></view>
			<view class="other-info am-flex-rc-between">
				<text class="cur-text">
					当前可转：{{ bar }}<text class="tr-num">Fil</text>

				</text>
				<text class="err-tip">手续费：{{ fil_num * fee || '0.00'}}</text>
			</view>
		</view>
		<view class="submit-btn-wrap" :style="{'paddingTop':isFoucs?'30rpx':'130rpx'}"><view class="submit-btn" hover-class="active"  @click="save" >提交</view></view>
		
		<!-- #ifndef H5 -->
		<password-input v-if="passIn" @clo="clo" ref="wrong" @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
		<!-- #endif -->
		<!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
		<!-- #ifdef H5 -->
		<view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" ref="wrong" :list="numberList"></password-input></view>
		<!-- #endif -->
		<!-- 数字键盘 -->
		<keyboard-package ref="number" @onChange="onChange" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
	</view>
</template>

<script>
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
	import {debounce} from '@/common/utils.js'
export default {
	data() {
		return {
			phoneFocusStatus: false, // 手机号是否获得焦点
			numFocusStatus: false, // 数量是否获得焦点
			bar: '',
			moder: '',
			fee: '',
			password: '',
			numberList: [],
			length: 6,
			type: 'number',
			passIn: false,
			fil_num: '', //提币数量的值
			wallet_value: '',  //转账地址的值
			isFoucs:false,
		};
	},
	components: {
		keyboardPackage,
		passwordInput
	},
	onLoad(res) {
		this.bar = res.bar;
		this.fee = res.fee;
		this.wallet_value = res.wallet_value;
	},
	onBackPress(option) {
		plus.key.hideSoftKeybord();
	},
	methods: {
		/**
		 * 获得焦点触发
		 * @param {String} type [phone|num] - 类型
		 */
		formItemFocus(type) {
			this.isFoucs=true
			switch (type) {
				case 'phone':
					this.phoneFocusStatus = true;
					break;
				case 'num':
					this.numFocusStatus = true;
					break;
				default:
					break;
			}
		},
		/**
		 * 失去焦点触发
		 * @param {String} type [phone|num] - 类型
		 */
		formItemBlur(type) {
			this.isFoucs=false
			switch (type) {
				case 'phone':
					this.phoneFocusStatus = false;
					break;
				case 'num':
					this.numFocusStatus = false;
					break;
				default:
					break;
			}
		},
		getFilNum: function(e) {
			this.fil_num = e.detail.value;
		},
		getTranferAdd: function(e) {
			this.wallet_value = e.detail.value;
		},
		linkToTransfer: debounce(function(){
			var that = this;
			uni.request({
				url: this.url + 'walletaddresss/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					if (res.statusCode == 400) {
						uni.showToast({
							title: '用户未实名认证',
							icon: 'none',
							duration: 2000
						});
					}
					if (res.statusCode == 201) {
						uni.showToast({
							title: '身份认证审核中，请等待',
							icon: 'none',
							duration: 2000
						});
					}
					if (res.statusCode == 200) {
						uni.navigateTo({
							url: '../choose-address/choose-address?bar=' + that.bar + '&fee=' + that.fee
						});
					}
					if (res.statusCode == 302) {
						uni.showToast({
							title: '用户未设置资金密码',
							icon: 'none',
							duration: 2000
						});
					}
				}
			});
		},500, true),
		link() {
			this.linkToTransfer()
		},
		fusre() {
			this.fil_num = this.bar;
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
					url: that.url + 'assets/capitalcode/',
					method: 'POST',
					data: {
						capital_code: that.password
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
							that.$refs.wrong.tip = '密码错误,剩余' + s + '次机会';
						}
						if (res.statusCode == 423) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.showToast({
								title: '交易密码已锁定,请在今日24:00后进行交易',
								icon: 'none',
								duration: 2000
							});
						}
						if (res.statusCode == 201) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.redirectTo({
								url: '../commit/commit?fil_num=' + that.fil_num + '&wallet_value=' + that.wallet_value
							});
						}
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
						page.onLoad();
					}
				});
				this.numberList.length = 0;
			}
		},
		save: function() {
			var that = this;
			var b = parseFloat(that.bar);
			var f = parseFloat(that.fil_num);
			if (that.wallet_value == '') {
				uni.showToast({
					title: '转账地址不能为空',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (that.fil_num == '') {
				uni.showToast({
					title: '提币数量不能为空',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (that.fil_num < 0.001) {
				uni.showToast({
					title: '提币数量无效',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			if (f > b) {
				uni.showToast({
					title: '提币数量余额不足',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			uni.request({
				url: that.url + 'assets/transfer/',
				method: 'POST',
				data: {
					fil_num: that.fil_num,
					address: that.wallet_value
				},
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					if (res.statusCode == 411) {
						uni.showToast({
							title: '未进行实名认证',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 412) {
						uni.showToast({
							title: '实名认证中，请耐心等待',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 403) {
						uni.showToast({
							title: '资金密码未设置',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 400) {
						uni.showToast({
							title: '输入信息有误(地址最少32位)',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 423) {
						uni.showToast({
							title: '交易密码已锁定,请在今日24:00后进行交易',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					if (res.statusCode == 200) {
						that.passIn = true;
						that.$refs['number'].open();
						that.onInput(val);
					}
				}
			});
		}
	}
};
</script>
<style lang="scss">
$page-plr: 31rpx;

page,
view,
text,
image,
scroll-view,
swiper,
swiper-item,
navigator,
textarea,
movable-view,
cover-view,
cover-image,
icon,
rich-text,
button,
checkbox-group,
checkbox,
label,
picker,
textarea,
input {
	box-sizing: border-box;
}

.am-flex-row-center {
	display: flex;
	align-items: center;
}
.am-flex-rc-between {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.form-list-wrap {
	transition: 0.3s all;
	position: relative;
	$active-color: #02d393;
	$wrap-pl: 26rpx;
	padding: 60rpx $page-plr 0;
	&.active {
		.title-box {
			color: $active-color;
			.icon-img {
				display: none;
			}
			.icon-img-active {
				display: inline-block;
			}
		}
		.write-wrap {
			.write-input {
				border-color: $active-color;
			}
		}
	}
	.title-box {
		color: #333;
		transition: color 0.3s;

		.icon-img {
			margin-right: 18rpx;
			&.user-n {
				width: 26rpx;
				height: 31rpx;
			}
			&.trans-n {
				width: 26rpx;
				height: 25rpx;
			}
			&-active {
				display: none;
				margin-right: 18rpx;
				&.trans-n {
					width: 26rpx;
					height: 26rpx;
				}
			}
		}
	}
	.write-wrap {
		padding-top: 60rpx;
		padding-left: 10rpx;
		position: relative;
		transition: 0.3s all;
		.write-input {
			$box-hei:90rpx;
			height: $box-hei;
			width: 100%;
			padding: 0 30rpx 0 30rpx;
			border-bottom: 1px solid #929097;
			transition: color 0.3s;
		}
		
	}
	.other-info {
		height: 48rpx;
		padding-left: 24rpx;
		padding-top: 15rpx;
		font-size: 26rpx;
		color: #999999;
		.tr-num {
			padding: 0 5rpx;
			// color: $active-color;
			font-weight: 500;
			font-family: 'myface';

		}
		.err-tip {
			color: #999999;
			font-family: 'myface';
			padding-right: 10rpx;
		}
	}
}
.submit-btn-wrap {
	transition: 0.3s all;
	padding-top: 130rpx;
	text-align: center;
	.submit-btn {
		display: inline-block;
		width: 511rpx;
		height: 98rpx;
		line-height: 98rpx;
		text-align: center;
		color: #fff;
		font-size: 30rpx;
		border-radius: 50rpx;
		box-shadow: 0 0 15rpx 15rpx rgba(#cdf7eb, 0.3);
		background-image: linear-gradient(to right, #01c774, #01dda9);
		&.active {
			opacity: 0.4;
		}
	}
}
.all{
	width:100rpx;
	height:80rpx;
	position: absolute;
	bottom:30rpx;
	right:30rpx;
	z-index:99;
}
.chooseadd{
	width:18rpx;
	height:22rpx;
	display: block;
	margin-top:50rpx;
	margin-left:80rpx;
}
.alltran{
	color:#F5AD00;
	font-size: 24rpx;
}
</style>
