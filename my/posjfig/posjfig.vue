<template>
	<view>
		<view class="form-list-wrap all03s" :class="{ active: phoneFocusStatus }" :style="{'paddingTop':isFocus?'10rpx':'60rpx'}">
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
		<view class="form-list-wrap all03s" :class="{ active: numFocusStatus }" :style="{'paddingTop':isFocus?'10rpx':'60rpx'}">
			<view class="title-box am-flex-row-center">
				<image src="/static/images/icon-trans.png" class="icon-img trans-n"></image>
				<image src="/static/images/icon-trans-active.png" class="icon-img icon-img-active trans-n"></image>
				数量
			</view>
			<view class="write-wrap">
				<input type="number" value="" class="write-input" @focus="formItemFocus('num')" @blur="formItemBlur('num')" v-model="numVal" maxlength="20" />
			</view>
			<view class="other-info am-flex-rc-between">
				<text class="cur-text">
					当前可用
					<text class="tr-num">{{seere}}T</text>
				</text>
				<text class="err-tip">{{ numErrTip }}</text>
			</view>
		</view>
		<view class="submit-btn-wrap all03s" :style="{'paddingTop':isFocus?'10rpx':'130rpx'}"><view class="submit-btn" hover-class="active" @click="submitForm">下一步</view></view>
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
// 是否为电话号码
const isPhoneNum = phone => /^1[3456789]\d{9}$/.test(phone);
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
export default {
	data() {
		return {
			phoneFocusStatus: false, // 手机号是否获得焦点
			numFocusStatus: false, // 数量是否获得焦点
			phoneErrTip: '', // 手机号错误信息
			numErrTip: '', // 数量错误信息
			phoneVal: '', // 手机号的值
			numVal: '' ,// 数量的值
			data:'',
			seere:'',
			password: '',
			numberList: [],
			length: 6,
			type: 'number',
			passIn: false,
			phone:'',
			// sher:false
			isFocus:false,
		};
	},
	components: {
	    keyboardPackage,
	    passwordInput
	},
	onLoad(option) {
		console.log(option)
		this.data = option.aa
		this.seere = option.ff
		console.log(option.aa)
		console.log(option.ff)
		console.log(this.phoneVal)
	},
	onBackPress(option) {
		plus.key.hideSoftKeybord()
	},
	methods: {
		/**
		 * 获得焦点触发
		 * @param {String} type [phone|num] - 类型
		 */
		formItemFocus(type) {
			this.isFocus=true
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
			this.isFocus=false;
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
		onInput(val) {
		    var that = this;
		    that.numberList.push(val);
		    that.password = that.numberList.join().replace(/,/g, '');
			console.log(that.numVal)
		    if (that.numberList.length >= that.length) {
		        uni.request({
		            url:this.url + 'cloudbuys/',
		            method: 'POST',
		            data: {
						cloudid:that.data,
						number:that.numVal,
						mobile:that.phoneVal,
						way:'1',
		                password: that.password
		            },
		            header: {
		                Authorization: 'JWT' + ' ' + that.global_.token
		            },
		            success(res) {
						console.log(that.data)
						console.log(that.numVal)
						console.log(that.phoneVal)
						console.log(that.password)
						console.log(res)
		                if (res.statusCode == 400) {
		                    that.$refs.wrong.flag = false;
		                    var n = res.data.data.err_num;
		                    var s = 5 - n;
		                    that.$refs.wrong.tip = '密码错误,剩余' + s + '次机会';
		                }
						if(that.seere<that.numVal) {
							that.sher = true
						}
		                if (res.statusCode == 200) {
		                    that.passIn = false;
		                    that.$refs['number'].close();
		                    uni.showToast({
		                        title: '转让完成',
		                        duration: 3000
								
		                    });
							uni.redirectTo({
								url:"../payftz/payftz?ler=" + that.phoneVal + '&cserf=' + that.numVal
							})
		                }
		                if (res.statusCode == 303) {
							that.passIn = false;
							that.$refs['number'].close();
		                    uni.showToast({
		                        icon: 'none',
		                        title: '非绑定销售关系，不可转让'
		                    });
		                }
						if(res.statusCode == 302) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.showToast({
								title:'不允许转让经销商，普通用户，投资人和客户',
								icon:'none'
							})
						}
						if(res.statusCode == 305) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.showToast({
								title:'交易发生错误,请重新创建',
								icon:'none'
							})
						}
						if (res.statusCode == 278) {
							that.passIn = false;
							that.$refs['number'].close();
						    uni.showToast({
						        icon: 'none',
						        title: '该用户不存在'
						    });
						}
						if(res.statusCode == 204) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.showToast({
								title:'不允许转让自己',
								icon:"none"
							})
						}
		                var page = getCurrentPages().pop();
		                if (page == undefined || page == null) return;
		            }
		        });
		        this.numberList.length = 0;
		    }
		},
		// 提交
		submitForm() {
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
			var that = this;
			this.passIn = true;
			this.$refs['number'].open();
			this.onInput(val);
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
.all03s{
	transition:all 0.3s;
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
			font-family: 'myface';
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