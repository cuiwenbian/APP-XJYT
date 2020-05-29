<template>
	<!-- 设置新密码 -->
	<view class="container">
		<view class="header-tit">设置新密码</view>
		<view class="form-list-wrap">
			<ComInputCom :val.sync="newPwd" labelText="输入新密码" :password="!passShow" @onFocus="phoneInputFocus" @onBlur="phoneInputBlur">
				<image src="/static/images/icon-trans.png" slot="defaultIcon" class="item-trans-icon"></image>
				<image src="/static/images/icon-trans-active.png" slot="activeIcon" class="item-trans-active-icon"></image>
				<view class="show-pass-btn" slot="handleBtn" v-show="phoneClearBtnShow" @click="clearPhoneVal">
					<image src="/static/images/icon-pass-show.png" class="show-icon-img" v-show="passShow"></image>
					<image src="/static/images/icon-pass-hide.png" class="hide-icon-img"  v-show="!passShow"></image>
				</view>
			</ComInputCom>
		</view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="next" v-if="newPwd">完成</view>
			<view class="submit-btn-disable" v-else>完成</view>
		</view>
	</view>
</template>

<script>
import ComInputCom from '@/components/ComInputCom.vue';
export default {
	data() {
		return {
			isPassword: true,
			isPassword1: true,
			newPwd: '',
			newPwd1: '',
			iscode: '',
			phone: '',
			passShow: false
		};
	},
	components: {
		ComInputCom
	},
	computed:{
		phoneClearBtnShow(){
			return !!this.newPwd
		}
	},
	onLoad(options) {
		this.iscode = options.code;
		this.phone = options.phone;
	},
	onBackPress(option) {
		plus.key.hideSoftKeybord();
	},
	
	methods: {
	
		newpassword: function(e) {
			this.newPwd = e.detail.value;
		},
		newpassword1: function(e) {
			this.newPwd1 = e.detail.value;
		},
		next() {
			var _this = this;
			if (this.newPwd == '') {
				uni.showToast({
					title: '请输入新密码',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			var str = /^[a-z0-9]{6,16}$/;
			if (!str.test(this.newPwd)) {
				uni.showToast({
					title: '密码为6-16位字母或数字',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			uni.request({
				url: this.url + 'users/forgot/change/',
				method: 'POST',
				data: {
					mobile: this.phone,
					password: this.newPwd,
					sec_password: this.newPwd,
					code: this.iscode
				},
				header: {},
				success(res) {
					if(res.statusCode==200){
						uni.redirectTo({
							url: '../login/login'
						});
						uni.showToast({
							title: '密码找回成功',
							icon: 'none',
							duration: 2000
						});
					}
					
				}
			});
		},
		phoneInputFocus() {
		},
		phoneInputBlur() {

		},
		// 隐藏显示密码
		clearPhoneVal() {
			this.passShow = !this.passShow;
		}
	}
};
</script>

<style lang="scss">
page {
	background: #fff;
}
.pass {
	width: 100%;
	height: 120rpx;
	background: #ffffff;
	position: relative;
}
.title {
	float: left;
	width: 150rpx;
	height: 120rpx;
	line-height: 120rpx;
	text-align: justify;
	text-justify: distribute-all-lines;
	text-align-last: justify;
	margin-left: 48rpx;
	font-size: 34rpx;
}
.phone {
	float: right;
	width: 540rpx;
	height: 120rpx;
	font-size: 30rpx;
}
.line {
	width: 650rpx;
	height: 1rpx;
	border-bottom: 1rpx solid #ededed;
	position: absolute;
	left: 48rpx;
	bottom: 0;
}
.next {
	margin: 100rpx auto;
	width: 690rpx;
	height: 88rpx;
	background: #0a1117;
	border-radius: 80rpx;
	text-align: center;
	line-height: 88rpx;
	color: #fff;
	font-size: 30rpx;
}
$page-plr: 31rpx;

.header-tit {
	padding: 60rpx $page-plr 30rpx;
	font-size: 49rpx;
	font-weight: bold;
	color: #262626;
}

.item-phone-icon {
	display: block;
	width: 19rpx;
	height: 37rpx;
}

.form-list-wrap {
	$active-color: #02d393;
	$wrap-pl: 46rpx;
	padding: 40rpx $page-plr 0;
}
.submit-btn-wrap {
	padding-top: 70rpx;
	text-align: center;
	.submit-btn {
		width: 511rpx;
		height: 98rpx;
		margin: 0 auto;
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
	.submit-btn-disable {
		width: 511rpx;
		height: 98rpx;
		margin: 0 auto;
		line-height: 98rpx;
		text-align: center;
		color: #fff;
		font-size: 30rpx;
		border-radius: 50rpx;
		background-image: linear-gradient(to right, #706f72, #a9a8ab);
	}
}
.show-pass-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50rpx;
	padding-left: 8rpx;
}
.item-trans-icon {
	width: 26rpx;
	height: 25rpx;
}
.item-trans-active-icon {
	width: 26rpx;
	height: 26rpx;
}
.show-icon-img {
	width: 42rpx;
	height: 26rpx;
}
.hide-icon-img {
	width: 42rpx;
	height: 19rpx;
}
</style>
