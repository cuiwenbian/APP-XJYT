<template>
    <!-- 根据邮箱 修改交易密码 -->
    <view class="container" style="position: relative;">
        <view class="line"></view>
        <view class="list">
            <text class="title">邮箱：</text>
            <text class="email">{{ email }}</text>
        </view>
        <view class="linee"></view>
        <view class="list">
            <input class="code" type="text" @input="getCodeValue" :value="code" placeholder="请输入邮箱验证码" />
            <button class="getcode" @click="getCodeNumber" :disabled="disabled">{{ codename }}</button>
        </view>
        <view class="set">设置交易密码</view>
        <view class="list">
            <input class="code" type="number" :password="isPassword" :value="password" @blur='checkPwd' @input="getPassword" placeholder="请输入交易密码,6位数字组合" />
            <image
                :class="isPassword ? 'close' : 'cloose'"
                :src="isPassword ? '../../static/images/password.png' : '../../static/images/openeye.png'"
                @click="show"
                mode=""
            ></image>
        </view>
        <view class="linee"></view>
        <view class="list">
            <input class="code" type="number" :password="isPassword1" :value="password1" @input="getPassword1" placeholder="请再次输入交易密码" />
            <image
                :class="isPassword1 ? 'close' : 'cloose'"
                :src="isPassword1 ? '../../static/images/password.png' : '../../static/images/openeye.png'"
                @click="show1"
                mode=""
            ></image>
        </view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="setPwd" v-if="allowLogin">确认</view>
			<view class="submit-btn-disable" v-else>确认</view>
		</view>
        <view class="shade" v-show="shade">
            <view class="pop">
                <view class="pop-title">资金密码设置成功</view>
                <view class="pop-btn">确定</view>
            </view>
        </view>
    </view>
</template>

<script>
	import { debounce } from '@/common/utils.js';
export default {
    data() {
        return {
            isPassword: true,
            isPassword1: true,
            email: '',
            email1: '',
            code: '',
            codename: ' 获取验证码',
            password: '',
            password1: '',
            shade: false,
            disabled: false
        };
    },
    onLoad() {
        var _this = this;
        uni.request({
            url: this.url + 'delemails/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success(res) {
                var email = res.data.data;
                var email1 = res.data.data;
                _this.email1 = email1;
                var l = email.split('@');
                email = l[0].substr(0, l[0].length - 5) + '****@' + l[1];
                _this.email = email;
            }
        });
    },
	
    onBackPress(option) {
        plus.key.hideSoftKeybord();
    },
	computed: {
		allowLogin () {
			return !!(this.password && this.password1 && this.code)
		},
	},
    methods: {
        show: function() {
            this.isPassword = !this.isPassword;
        },
        show1: function() {
            this.isPassword1 = !this.isPassword1;
        },
        getCodeValue: function(e) {
            this.code = e.detail.value;
        },
        getPassword: function(e) {
            this.password = e.detail.value;
        },
        getPassword1: function(e) {
            this.password1 = e.detail.value;
        },
		checkPwd:function(e){
			this.password = e.detail.value;
			var f = this.global_.checkPassword(this.password);
			if (!f) {
			    uni.showToast({
			        title: '交易密码为6位数字',
			        icon: 'none',
			        duration: 2000
			    });
			    return false;
			}
		},
        getCode: function() {
            var _this = this;
            uni.request({
                method: 'POST',
                data: {
                    email: this.email1
                },
                //邮箱验证码接口
                url: this.url + 'setemails/',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    //根据code判断
                    var num = 121;
                    var timer = setInterval(function() {
                        num--;
                        if (num <= 0) {
                            clearInterval(timer);
                            (_this.codename = '重新发送'), (_this.disabled = false);
                        } else {
                            _this.codename = num + 's';
                            _this.disabled = true;
                        }
                    }, 1000);
                }
            });
        },
        //获取验证码
		linkToTransfer: debounce(function(e){
			this.getCode();
            var _this = this;
		},500, true),
        getCodeNumber: function(e) {
			this.linkToTransfer(e)
        },
        setPwd: function() {
            if (this.code == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请输入验证码',
                    duration: 2000
                });
                return false;
            }
            if (this.password == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请输入交易密码',
                    duration: 2000
                });
                return false;
            }
			if (this.password && this.password1 && this.password1 !== this.password) {
			    uni.showToast({
			        icon: 'none',
			        title: '两次密码不一致',
			        duration: 2000
			    });
			    return false;
			}
            var f = this.global_.checkPassword(this.password);
            if (!f) {
                uni.showToast({
                    title: '交易密码为6位数字',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.password1 == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请确认交易密码',
                    duration: 2000
                });
                return false;
            }
            uni.request({
                url: this.url + 'setmoneys/',
                method: 'POST',
                data: {
                    email: this.email1,
                    email_msg: this.code,
                    password: this.password,
                    password1: this.password1
                },
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    if (res.statusCode == 200) {
                       
                        uni.navigateBack({
							delta:3
						})
						uni.showToast({
						    title: '资金密码修改成功',
						    icon: 'none',
						    duration: 1500
						});
                    }
                    if (res.statusCode == 400) {
                        uni.showToast({
                            title: '验证码错误',
                            icon: 'none',
                            duration: 2000
                        });
                    }
                }
            });
        }
    }
};
</script>

<style lang="scss">
page {
    background: #edeeee;
}
.line {
    height: 50rpx;
}
.list {
    height: 100rpx;
    width: 100%;
    background: #fff;
    padding-left: 48rpx;
    box-sizing: border-box;
}
.title,
.email {
    line-height: 100rpx;
    font-size: 30rpx;
    color: #333333;
}
.code {
    float: left;
    width: 450rpx;
    height: 100rpx;
    line-height: 100rpx;
    font-size: 30rpx;
}
.getcode {
    float: right;
    border-radius: 50rpx;
    width: 180rpx;
    height: 50rpx;
    font-size: 22rpx;
    background: #797979;
    color: #fff;
    text-align: center;
    line-height: 50rpx;
    margin-right: 48rpx;
    margin-top: 35rpx;
}
button[disabled] {
    background: #797979 !important;
    color: #fff !important;
}
.close {
    float: right;
    display: block;
    width: 34rpx;
    height: 15rpx;
    margin-right: 48rpx;
    margin-top: 40rpx;
}
.cloose {
    float: right;
    display: block;
    width: 34rpx;
    height: 24rpx;
    margin-right: 48rpx;
    margin-top: 40rpx;
}
.linee {
    height: 20rpx;
}
.set {
    line-height: 100rpx;
    font-size: 30rpx;
    margin-left: 48rpx;
}
.submit-btn-wrap {
	padding-top: 130rpx;
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
		// background-image: linear-gradient(to right, #01c774, #01dda9);
		// &.active {
		// 	opacity: 0.4;
		// }
		background-color: rgb(2,213,151);
		transition: all .2s;
		&:active {
			background-color: rgba(2,213,151, .85);
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
		// background-image: linear-gradient(to right, #706f72, #a9a8ab);
		background-color: rgba(2,213,151, .4);
	}
}
.shade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
.pop {
    width: 500rpx;
    height: 250rpx;
    margin: 450rpx auto 0;
    background: #fff;
    border-radius: 20rpx;
}
.pop-title {
    text-align: center;
    font-size: 32rpx;
    color: #121212;
    line-height: 150rpx;
}
.pop-btn {
    width: 126rpx;
    height: 56rpx;
    margin: 20rpx auto 0;
    border-radius: 10rpx;
    background: #121212;
    color: #fff;
    font-size: 30rpx;
    text-align: center;
    line-height: 56rpx;
}
</style>
