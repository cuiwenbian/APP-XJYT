<template>
	<view class="login-page">
		<image class="pb-img" src="../../static/images/loginbg.jpg" mode="" @click="nofocusbox">
			<view class='back-page' @click='backFront'>
				<image src="../../static/images/zuo.png" mode=""></image>
			</view>
			<view class="mains">
				<view class="np-logo">
					<image src="../../static/images/logo.png" class="pl-img"></image>
					<view class="pl-title">
						<view class="pl-firsttitle">星际矿机</view>
						<view class="pl-secondtitle">全球FIL存储节点与检索节点管理平台</view>
					</view>
					<view :style="{ height: title_height}"></view>
				</view>
				<view class="np-body" :class="item ? 'np-body' : 'np-bodyy'" style="position: relative;z-index:9;">
					<view class="pb-tabs" :class="item ? 'pb-tabs' : 'pb-tabs-focu'">
						<view :class="['bt-tab', sel_tab === '1' ? 'bt-tab-active' : '']" @click="handleSelectTab('1')">快速登录</view>
						<view :class="['bt-tab', sel_tab === '2' ? 'bt-tab-active' : '']" @click="handleSelectTab('2')">密码登录</view>
					</view>
					<view class="pb-form">
						<view class="bf-item">
							<view class="fi-icon">手机号：</view>
							<!-- <image src="../../static/images/php.png" mode="aspectFit" class="fi-icon"></image> -->
							<input v-model="mobile" type="number" :adjust-position='noadjust' @keyboardheightchange='changekyboard'
							 placeholder="请输入手机号码" class="fi-input" @focus="mobile_focus = true" @blur="mobile_focus = false" />
						</view>
						<view :class="item ? 'bf-item-code' : 'bf-item-codes'" v-if="sel_tab === '1'">
							<view class="fi-icon fi-code">验证码：</view>
							<!-- <image src="../../static/images/cooder.png" mode="aspectFit" class="fi-icon"></image> -->
							<input v-model="code" type="number" :adjust-position='noadjust' placeholder="请输入验证码" @keyboardheightchange='changekyboard'
							 class="fi-input" @focus="code_focus = true" @blur="code_focus = false" />
							<view class="fi-sendCode" @click="getCodeBtn">{{ sendBtnText }}</view>
						</view>
						<view :class="item ? 'bf-item' : 'bf-itemm'" v-else>
							<view class="fi-icon">密码：</view>
							<!-- <image src="../../static/images/pswd.png" mode="aspectFit" class="fi-icon"></image> -->
							<input v-model="password" type="password" :password="isPwd" :adjust-position='noadjust' placeholder="请输入密码"
							 @keyboardheightchange='changekyboard' class="fi-input" @focus="password_focus = true" @blur="password_focus = false" />
						</view>
						<!-- <view class='fi-input' @click='passwordfocus'></view> -->
					</view>
					<view :class="item ? 'submit-btn' : 'submit-btns'" @click="handleSubmit">
						<view :class="['tb-mask', submitBtnStatus ? 'disable-btn' : '']"></view>
						<text>立即登录</text>
					</view>
					<view class="pb-bottom"><text v-if="sel_tab === '2'" @click="handleToWJMA" class="pb-wjma">忘记密码？</text></view>
				</view>
			</view>
		</image>
	</view>
</template>

<script>
	//import vKeyboard from '@/components/VKeyboard/VKeyboard.vue
	const cutdownTime = 60;
	export default {
		data() {
			return {
			
				ispwd: false,
				mobile: '',
				noadjust: false,
				code: '',
				keybord: 0,
				mobile_focus: false,
				password_focus: false,
				code_focus: false,
				
				lol: '',
				password: '',
				item: true,
				sel_tab: '1',
				sendCodeLoading: false, // 正在发送短信
				cutdownIng: false, // 正在倒计时中，
				cutDownTiemr: '', // 倒计时定时器
				sendBtnText: '获取验证码',
				disabled: false,
				text: '150',
				ktxStatusHeight: '',
				navigationHeight: ''

			}
		},
		onLoad() {

			// #ifdef MP-WEIXIN
			let systemInfo = uni.getSystemInfoSync()
			// px转换到rpx的比例
			let pxToRpxScale = 750 / systemInfo.windowWidth;
			// 状态栏的高度
			let ktxStatusHeight = systemInfo.statusBarHeight * pxToRpxScale
			// 导航栏的高度
			let navigationHeight = 44 * pxToRpxScale
			this.navigationHeight = navigationHeight + 'rpx';
			console.log(ktxStatusHeight)
			console.log(navigationHeight)
			// #endif

		},

		computed: {
			style() {
				let _style = `height: ${this.navigationHeight}px;`
				return _style
			},
			submitBtnStatus() {
				if (this.sel_tab === '1') {
					if (this.mobile && this.code) return true;
				} else {
					if (this.mobile && this.password) return true;
				}
				return false;
			},
			title_height() {
				var that = this;
				//console.log(this.text)
				if (this.mobile_focus || this.code_focus || this.password_focus) {
					that.item = false;
				}
				if (this.mobile_focus == false && this.code_focus == false && this.password_focus == false) {
					that.item = true;
				}
			},

		},

		/* onShow() {
			var that=this;
			console.log('onsho34334w')
			uni.onKeyboardHeightChange(res => {
				console.log('onshow')
				that.lol = res.height
				console.log(res.height,that.phonefocus,that.passwordfocus)
				if (that.item==false && res.height== 0  && that.phonefocus==true && that.passwordfocus==false ) {
					console.log('0')
					
					that.item=true
					}
				else if ( res.height!= 0  && that.phonefocus==true && that.passwordfocus==false ) {
					 console.log('1')
					that.item=false
				}
				else if ( res.height!= 0 && that.phonefocus==false && that.passwordfocus==true ) {
					console.log('2')
					that.item=false
				}
				else{
					that.item=true
				}
			});
			
		}, */
		onShow() {
			var that = this;
			uni.onKeyboardHeightChange(res => {
				console.log(res.height)
				if (res.height == 0) {
					that.itme = true
				} else {
					that.itme = false
				}
			})
		},
		methods: {
			
		
			// 返回
			backFront() {
				uni.navigateBack({
					delta: 1
				})
			},
			nofocusbox() {
				this.item = true
				this.lol = 0
			},
			
			getCodeBtn() {
				if (this.sendCodeLoading || this.cutdownIng) return;
				// if (this.disabled) return false;
				if (!this.mobile) {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						mask: true,
						duration: 2000
					});
					return false;
				}
				const myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
				if (!myreg.test(this.mobile)) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
						mask: true,
						duration: 2000
					});
					return false;
				}
				const _this = this;
				uni.request({
					method: 'POST',
					data: {
						mobile: _this.mobile
					},
					//短信接口
					url: _this.url + 'users/login/sms/',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success(res) {
						//根据code判断
						console.log(res);
						var ocode = res.statusCode;
						if (ocode == 200) {
							_this.iscode = res.data.data || _this.codess;
							_this.disabled = true;
							let surTime = cutdownTime;
							_this.cutdownIng = true;
							_this.sendBtnText = `${surTime}s`;
							_this.cutDownTiemr = setInterval(() => {
								surTime--;
								_this.sendBtnText = `${surTime}s`;
								if (surTime <= 0) {
									clearInterval(_this.cutDownTiemr);
									_this.disabled = false;
									_this.cutdownIng = false;
									_this.sendBtnText = '重新获取';
									_this.cutDownTiemr = '';
								}
							}, 1000);
							/* var num = 61;
							var timer = setInterval(function() {
								num--;
								if (num <= 0) {
									clearInterval(timer);
									_this.codename = '重新发送';
									_this.disabled = false;
								} else {
									_this.codename = num + 's';
									_this.disabled = true;
								}
							}, 1000); */
						} else if (ocode == 400) {
							uni.showToast({
								title: '用户不存在',
								icon: 'none',
								duration: 2000
							});
							return false;
						} else if (ocode == 411) {
							uni.showToast({
								title: '操作太频繁，请稍候重试',
								icon: 'none',
								duration: 2000
							});
							return false;
						}
					}
				});
			},
			/**
			 * 选择tab
			 * @param {Object} tab
			 */
			handleSelectTab(tab) {
				this.sel_tab = tab;
				this.item = true
			},

			/**
			 * 跳转忘记密码页面
			 */
			handleToWJMA() {
				uni.navigateTo({
					url: '../getBackPassword/getBackPassword'
				});
			},
			inot() {
				this.fonter = false;
			},
			/**
			 * 提交
			 */
			handleSubmit() {
				const _this = this;
				if (this.mobile == '') {
					uni.showToast({
						icon: 'none',
						title: '您还没有输入手机号码'
					});
					return;
				}
				// if (this.submitBtnStatus) {

				const myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
				if (!myreg.test(this.mobile)) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
						mask: true,
						duration: 2000
					});
					return false;
				}
				//const params = { mobile: this.mobile };
				if (this.sel_tab === '1') {
					// 快速登录
					if (!this.code) {
						uni.showToast({
							title: '请输入验证码',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					//params.code = this.code;
				} else {
					// 密码登录
					if (this.password == "") {
						console.log(this.password)
						uni.showToast({
							title: '请输入密码',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
					//params.password = this.password;
				}
				if (this.sel_tab === '1') {
					uni.request({
						url: this.url + 'users/login/',
						method: 'POST',
						data: {
							mobile: _this.mobile,
							code: _this.code
						},
						headers: {
							'Content-Type': 'application/json'
						},
						success: res => {
							console.log(res);
							
							if (res.statusCode == 400) {
								uni.showToast({
									title: '验证码不正确',
									icon: 'none'
								});
							}
							if (res.statusCode == 401) {
								uni.showToast({
									title: '请用手机短信快速登录,并设置密码',
									icon: 'none',
									duration: 3000
								});
							}
							if (res.statusCode == 402) {
								uni.showToast({
									title: '用户名或密码错误',
									icon: 'none',
									duration: 3000
								});
							}
							if (res.statusCode == 412) {
								uni.showToast({
									title: '请用手机短信快速登录,并设置密码',
									icon: 'none'
								});
							}
							if (res.statusCode == 200) {
								let setTime = new Date().getTime();
								uni.setStorageSync('nowtime', setTime);
								uni.setStorageSync('phone', _this.mobile);
								uni.setStorageSync('token', res.data.data);
								console.log(res.data.data);
								console.log(_this.mobile);
								_this.global_.phone = uni.getStorageSync('phone');
								_this.global_.token = uni.getStorageSync('token');
								uni.reLaunch({
									url: '../index/index'
								});
							}
						}
					});
				} else if (this.sel_tab === '2') {
					uni.request({
						url: this.url + 'users/login/',
						method: 'POST',
						data: {
							mobile: _this.mobile,
							password: _this.password
						},
						headers: {
							'Content-Type': 'application/json'
						},
						success: res => {
							console.log(res);
							
							if (res.statusCode == 401) {
								uni.showToast({
									title: '请用手机短信快速登录,并设置密码',
									icon: 'none',
									duration: 3000
								});
							}
							if (res.statusCode == 402) {
								uni.showToast({
									title: '用户名或密码错误',
									icon: 'none',
									duration: 3000
								});
							}
							if (res.statusCode == 200) {
								let setTime = new Date().getTime();
								uni.setStorageSync('nowtime', setTime);
								uni.setStorageSync('phone', _this.mobile);
								uni.setStorageSync('token', res.data.token);
								console.log(res.data.token);
								console.log(_this.mobile);
								_this.global_.phone = _this.mobile;
								_this.global_.token = uni.getStorageSync('token');
								uni.reLaunch({
									url: '../index/index'
								});
							}
							if (res.statusCode == 412) {
								uni.showToast({
									title: '请用手机短信快速登录,并设置密码',
									icon: 'none'
								});
							}
						}
					});
				}
				// }
			}
		}
	};
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}

	.login-page {
		width: 100%;
		height: 100%;
	}

	.pb-img {
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
		top: 0;
	}

	.back-page {
		width: 54rpx;
		height: 52rpx;
		position: fixed;
		top: 74rpx;
		left: 24rpx;
		z-index: 99;
	}

	.back-page image {
		width: 54rpx;
		height: 52rpx;
		display: block;
	}

	.mains {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
	}

	/* .back {
		background-color: #0081FF;
		position: fixed;
		top: var(--status-bar-height);
		z-index: 99;
	}

	.back-bg {
		width: 24rpx;
		height: 24rpx;
		border-top: 3rpx solid #FFFFFF;
		border-left: 3rpx solid #FFFFFF;
		transform: rotate(-45deg);
		margin: 15rpx 0 0 26rpx;
		position: absolute;
		z-index: 1;
	} */


	.np-logo {
		width: 75%;
		height: 138rpx;
		z-index: 9;
		position: fixed;
		top: 161rpx;
		left: calc(25% / 2);
		/* overflow: hidden; */
	}

	.pl-img {
		width: 149rpx;
		height: 138rpx;
		float: left;
		/* border-radius: 50%; */
		/* background-color: #ffffff; */
	}

	.pl-title {
		width: 410rpx;
		height: 100%;
		text-align: left;
		padding: 20rpx 0 0 20rpx;
		box-sizing: border-box;
		/* font-size: 64rpx;
	color: #ffffff;
	display: inline-block;
	margin-top: 30rpx;
	height: 130rpx;
	transition: height 0.2s ease; */
		overflow: hidden;
		float: left;
	}

	.pl-firsttitle {
		font-size: 29px;
		font-weight: 600;
		color: rgba(255, 255, 255, 1);
	}

	.pl-secondtitle {
		font-size: 20rpx;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 0.7;
	}

	.np-body {
		width: 95%;
		height: auto;
		margin: 408rpx auto 0 auto;
		/* box-shadow: 0 2rpx 14rpx #01c97b; */
		padding: 60rpx 40rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.np-bodyy {
		width: 95%;
		height: auto;
		overflow: hidden;
		margin: 160rpx auto 0 auto;
		/* box-shadow: 0 2rpx 14rpx #01c97b; */
		padding: 30rpx 40rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
	}

	.pb-tabs {
		margin-bottom: 108rpx;
		overflow: hidden;
		display: flex;
		text-align: center;
	}

	.pb-tabs-focu {
		margin-bottom: 48rpx;
		overflow: hidden;
	}

	.bt-tab {
		/* float: left; */
		/* line-height:40rpx; */
		/* margin-right: 64rpx; */
		border-bottom: 2rpx solid #ebebeb;
		padding: 20rpx 30rpx;
		flex: 1;
		transition: all 0.2s ease;
		position: relative;
	}

	.bt-tab-active {
		color: #01c777;
		font-weight: bolder;
	}

	.bt-tab-active::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -2rpx;
		z-index: 1;
		height: 8rpx;
		background-color: #01c777;
	}

	.bf-item {
		width: 98%;
		background-color: #f3f3f3;
		border-radius: 49rpx;
		display: flex;
		padding: 30rpx 0;
		margin: 40rpx 0;
		align-items: center;
		border-bottom: 2rpx solid #ebebeb;
		position: relative;
	}

	.bf-item-code {
		width: 98%;
		background-color: #f3f3f3;
		border-radius: 49rpx;
		display: flex;
		margin: 40rpx 0;
		align-items: center;
		border-bottom: 2rpx solid #ebebeb;
		position: relative;
	}

	.bf-item-codes {
		width: 98%;
		background-color: #f3f3f3;
		border-radius: 49rpx;
		display: flex;
		margin: 10rpx auto;
		align-items: center;
		border-bottom: 2rpx solid #ebebeb;
		position: relative;
	}

	.bf-itemm {
		width: 98%;
		background-color: #f3f3f3;
		border-radius: 49rpx;
		display: flex;
		padding: 30rpx 0;
		margin: 10rpx auto;
		align-items: center;
		border-bottom: 2rpx solid #ebebeb;
		position: relative;
	}

	.fi-icon {
		width: 30%;
		font-family: PingFang SC;
		text-align: right;
		font-weight: 800;
		font-size: 28rpx;
		color: rgba(51, 51, 51, 1);
	}

	.fi-input {
		width: 100%;
		padding-left: 20rpx;
	}

	.pb-bottom {
		text-align: right;
		padding: 15rpx 0;
		font-size: 26rpx;
		font-weight: 800;
		color: rgba(51, 51, 51, 1);
	}

	.pb-wjma {
		color: #888888;
	}

	.submit-btn {
		margin-top: 135rpx;
		width: 100%;
		color: #ffffff;
		height: 99rpx;
		line-height: 99rpx;
		text-align: center;
		border-radius: 49rpx;
		position: relative;
		background: linear-gradient(55deg, rgba(1, 199, 116, 1), rgba(1, 221, 171, 1));
		overflow: hidden;
	}

	.submit-btns {
		margin-top: 40rpx;
		width: 100%;
		color: #ffffff;
		height: 99rpx;
		line-height: 99rpx;
		text-align: center;
		border-radius: 49rpx;
		position: relative;
		background: linear-gradient(55deg, rgba(1, 199, 116, 1), rgba(1, 221, 171, 1));
		overflow: hidden;
	}

	.tb-mask {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		background-color: rgba(255, 255, 255, 0.3);
		transition: all 0.1s ease;
	}

	.disable-btn {
		background-color: rgba(255, 255, 255, 0);
	}

	.disable-btn:active {
		background-color: rgba(0, 0, 0, 0.3);
	}

	.fi-code {
		width: 65%;
	}

	.fi-sendCode {
		width: 229rpx;
		height: 104.6rpx;
		line-height: 104.6rpx;
		background: linear-gradient(55deg, rgba(1, 199, 116, 1), rgba(1, 221, 171, 1));
		border-radius: 49px;
		text-align: center;
		color: #ffffff;
		font-size: 28rpx;
		flex-shrink: 0;
	}

	.fi-sendCode:active {
		opacity: 0.8;
	}
</style>
