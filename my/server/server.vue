<template>
	<view >
		<view class="form-list-wrap" :class="{ active: phoneFocusStatus }">
			<view class="title-box am-flex-row-center">
				<image src="../../static/images/icon-user-n.png" class="icon-img user-n"></image>
				<image src="../../static/images/icon-user-n-active.png" class="icon-img icon-img-active user-n"></image>
				手机
			</view>
			<view class="write-wrap">
				<input type="phone" value="" class="write-input" @focus="formItemFocus('phone')" @blur="formItemBlur('phone')" v-model="phoneVal"  maxlength="11" />
			</view>
			<view class="other-info am-flex-rc-between">
				<text class="cur-text"></text>
				<text class="err-tip">{{ phoneErrTip }}</text>
			</view>
		</view>
		<view class="form-list-wrap" :class="{ active: numFocusStatus }">
			<view class="title-box am-flex-row-center">
				<image src="/static/images/icon-trans.png" class="icon-img trans-n"></image>
				<image src="/static/images/icon-trans-active.png" class="icon-img icon-img-active trans-n"></image>
				数量
			</view>
			<view class="write-wrap">
				<input type="number" value="" class="write-input" @focus="formItemFocus('num')" @blur="formItemBlur('num')" v-model="numVal" maxlength="20" />
			</view>
			<view class="other-info am-flex-rc-between">
				<text class="cur-text"></text>
				<text class="err-tip">{{ numErrTip }}</text>
			</view>
		</view>
		<view class="submit-btn-wrap"><view class="submit-btn" hover-class="active" @click="submitForm">下一步</view></view>
		<!-- #ifndef H5 -->
		<password-input v-if="passIn" ref="wrong" @clo="clo" @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
		<!-- #endif -->
		<!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
		<!-- #ifdef H5 -->
		<view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" :list="numberList" ref="wrong"></password-input></view>
		<!-- #endif -->
		<!-- 数字键盘 -->
		<keyboard-package :isOpacity='0' ref="number" @onChange="onChange" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
	</view>
</template>

<script>
	const isPhoneNum = phone => /^1[3456789]\d{9}$/.test(phone);
	import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
	import passwordInput from '../../components/password-input/password-input.vue';
	
	import {
		debounce
	} from '@/common/utils.js'
	export default {
		data() {
			return {
				numFocusStatus: false, // 数量是否获得焦点
				numErrTip: '', // 数量错误信息
				coloe: '',// 数量的值
				phoneFocusStatus: false, // 手机号是否获得焦点
				numFocusStatus: false, // 数量是否获得焦点
				phoneErrTip: '', // 手机号错误信息
				tel: '',// 手机号的值
				title: '',
				way: '',
				id: '',
				info: {},
				cool:'',
				machine_num:'',
				n: true,
				phone:'',
				numberList: [],
				length: 6,
				type: 'number',
				passIn: false,
				password: '',
			};
		},
		components: {
			keyboardPackage,
			passwordInput
		},
		onLoad(options) {
			console.log(options);
			var title = '';
			if (options.type === '1') {
				title = '转让';
			} else if (options.type === '2') {
				title = '出售';
			} else {
				return false;
			}
			uni.setNavigationBarTitle({
				title: '服务器' + title
			});
			this.title = title;
			this.info = JSON.parse(options.info);
			this.id = parseInt(this.info.id); 
			this.seere=parseInt(this.info.lens);//数量
			this.way = options.type;
			
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord()
			
		},
		methods: {
			formItemFocus(type) {
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
			formItemBlur(type) {
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
			submitForm: function() {
				this.linkToTransfer()
			},
			linkToTransfer: debounce(function() {
				
				if (!isPhoneNum(this.phoneVal)) {
					this.phoneErrTip = '手机号不正确';
				} else {
					this.phoneErrTip = '';
				}
				if (this.numVal=='' || isNaN(this.numVal) || this.numVal>parseFloat(this.seere)) {
					this.numErrTip = '数量不可用';
				}else{
					this.numErrTip = '';
				}
				if (this.phoneErrTip || this.numVal=='' || isNaN(this.numVal) || this.numVal>parseFloat(this.seere)) {
					return;
				}
				this.passIn = true;
				this.$refs['number'].open();
				this.onInput(val);
				
			}, 500, true),
			
			onInput(val) {
				var that = this;
				that.numberList.push(val);
				console.log(that.way)
				that.password = that.numberList.join().replace(/,/g, '');
				if (that.numberList.length >= that.length) {
					uni.request({
						url: this.url + 'usermachine/transfer/',
						method: 'POST',
						data: {
							way: that.way,
							number: that.numVal,
							mobile: that.phoneVal,
							password: that.password,
							type: that.id
						},
						header: {
							Authorization: 'JWT' + ' ' + that.global_.token
						},
						success(res) {
							console.log(that.way)
							console.log(that.numVal)
							console.log(that.phoneVal)
							console.log(that.password)
							console.log(that.id)
							console.log(res)
							if (res.statusCode == 200) {
								uni.redirectTo({
									url: '../sful/sful?numb=' + that.phoneVal + '&cool=' + that.numVal + '&way=' + that.way
								});
							}
							if (res.statusCode == 400) {
								that.$refs.wrong.flag = false;
								var n = res.data.data.err_num;
								var s = 5 - n;
								that.$refs.wrong.tip = '密码错误，剩余' + s + '次机会';
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
							if (res.statusCode == 302) {
								that.passIn = false;
								that.$refs['number'].close();
								uni.showToast({
									title: '不允许出售或者转让经销商',
									icon: 'none'
								});
							}
							if (res.statusCode == 204) {
								that.passIn = false;
								that.$refs['number'].close();
								uni.showToast({
									title: '不允许转让普通用户',
									icon: 'none',
									duration: 2000
								});
							}
							if (res.statusCode == 278) {
								that.passIn = false;
								that.$refs['number'].close();
								uni.showToast({
									title: '该用户不存在',
									icon: 'none',
									duration: 2000
								});
							}
							if (res.statusCode == 305) {
								uni.showToast({
									title: '交易发生错误，请重新创建',
									icon: 'none'
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
		$active-color: #02d393;
		$wrap-pl: 46rpx;
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
			padding-left: $wrap-pl;

			.write-input {
				$box-hei: 45rpx;
				height: $box-hei;
				width: 100%;
				padding: 0 15rpx;
				line-height: $box-hei;
				border-bottom: 1px solid #929097;
				transition: color 0.3s;
			}
		}

		.other-info {
			height: 48rpx;
			padding-left: $wrap-pl;
			padding-top: 15rpx;
			font-size: 26rpx;
			color: #8b8b8d;

			.tr-num {
				padding: 0 28rpx;
				color: $active-color;
				font-weight: 500;
			}

			.err-tip {
				color: #bc2c34;
			}
		}
	}

	.submit-btn-wrap {
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


</style>
