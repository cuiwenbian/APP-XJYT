<template>
    <!-- 注册 -->
    <view class="container">
        <image class="logo" src="../../static/images/FIL.png" mode=""></image>
        <image class="fil" src="../../static/images/filecoin.png" mode=""></image>
        <view class="enter">
            <text class="title">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</text>
            <input class="number" type="number" maxlength="11" @input="getPhoneValue" :value="phone" placeholder="请输入手机号" />
        </view>
        <view class="enter">
            <text class="title">登录密码</text>
            <input class="number" type="password" @input="getPwdValue" :value="pwd" placeholder="6-16位数字,字母组合" />
        </view>
        <view class="enter">
            <text class="title">确认密码</text>
            <input class="number" type="password" @input="getPwdValue1" :value="pwd1" placeholder="请再次输入登录密码" />
        </view>
        <view class="enter" style="position: relative;">
            <text class="title">验 &nbsp;证&nbsp; 码</text>
            <button :class="c ? 'getcode' : 'getcode1'"  @click="getCodeBtn" @touchstart="nextCode" @touchend="backCode" :disabled="disabled">{{ codename }}</button>
            <input class="number" style="width:250rpx;float: left;margin-left:10rpx" type="text" @input="getCodeValue" :value="code" placeholder="请输入短信验证码" />
        </view>
        <view :class="n ? 'btn' : 'btn1'" @click="register" @touchstart="next" @touchend="back">注册</view>

        <view  @click='backLogin' class="goback">已有账号，返回登录</view>
        <view class="shade" v-show="shade" @touchmove.stop.prevent="moveHandle">
            <view class="pop">
                <view class="pop-title">注册成功</view>
                <view class="pop-btn" @click="sure">去登录</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
			n:true,
			c:true,
            show: false,
            shade: false,
            phone: '',
            pwd: '',
            pwd1: '',
            code: '',
            iscode: '', //用于存放验证码接口里获取到的code
            codename: ' 获取验证码 ',
            disabled: false,
            flag: true
        };
    },
    methods: {
		moveHandle:function(e){
			e.preventDefault();
			e.stopPropagation();
		},
		next: function() {
		    this.n = false;
		},
		back: function() {
		    this.n = true;
		},
		nextCode: function() {
		    this.c = false;
		},
		backCode: function() {
		    this.c = true;
		},
        getPhoneValue: function(e) {
            this.phone = e.detail.value;
        },
        getPwdValue: function(e) {
            this.pwd = e.detail.value;
        },
        getPwdValue1: function(e) {
            this.pwd1 = e.detail.value;
        },
        getCodeValue: function(e) {
            this.code = e.detail.value;
        },
		backLogin:function(){
			uni.navigateBack({
				delta:1
			});
		},
        getCode: function() {
            var _this = this;
            //判断手机号格式
            var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
            if (this.phone == '') {
                uni.showToast({
                    title: '手机号不能为空',
                    icon: 'none',
                    duration: 1000
                });
                return false;
            } else if (!myreg.test(this.phone)) {
                uni.showToast({
                    title: '请输入正确的手机号',
                    icon: 'none',
                    duration: 1000
                });
                return false;
            } else {
                uni.request({
                    //短信接口
                    url: _this.url + 'users/regist/sms/',
                    method: 'POST',
                    data: {
                        mobile: this.phone
                    },
                    header: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    success(res) {
                        //根据code判断
                        var ocode = res.statusCode;
                        if (ocode == 200) {
                            _this.iscode = res.data.data;
                            var num = 61;
                            var timer = setInterval(function() {
                                num--;
                                if (num <= 0) {
                                    clearInterval(timer);
                                    (_this.codename = '重新发送'), (_this.disabled = false);
                                } else {
                                    (_this.codename = num + 's'), (_this.disabled = true);
                                }
                            }, 1000);
                        } else if (ocode == 411) {
                            uni.showToast({
                                title: '操作太频繁，请稍候重试',
                                icon: 'none',
                                duration: 2000
                            });
                            return false;
                        } else if (ocode == 400) {
                            uni.showToast({
                                title: '手机号已注册',
                                icon: 'none',
                                duration: 2000
                            });
                            return false;
                        }
                    }
                });
            }
        },
        //获取验证码
        getCodeBtn: function(e) {
            this.getCode();
        },
        register() {
            var _self = this;
            if (this.phone == '') {
                uni.showToast({
                    title: '请输入手机号',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
            if (!myreg.test(this.phone)) {
                uni.showToast({
                    title: '请输入正确的手机号',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.pwd == '') {
                uni.showToast({
                    title: '请输入登录密码',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            var str = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
            if (!str.test(this.pwd)) {
                uni.showToast({
                    title: '密码格式不正确',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.pwd1 == '') {
                uni.showToast({
                    title: '请确认登录密码',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.pwd1 !== this.pwd) {
                uni.showToast({
                    title: '两次密码不一致',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.code == '') {
                uni.showToast({
                    title: '验证码不能为空',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.code != this.iscode) {
                uni.showToast({
                    title: '验证码错误',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            uni.request({
                url: this.url + 'users/regist/',
                method: 'POST',
                data: {
                    mobile: this.phone,
                    password: this.pwd,
                    sec_password: this.pwd1,
                    code: this.code
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                success: res => {
                    _self.global_.phone = this.phone;
                    _self.global_.token = res.data.token;
                    if (res.statusCode == 400) {
                        uni.showToast({
                            title: '验证码已过期',
                            icon: 'none'
                        });
                    }
                    if (res.statusCode == 201) {
                        this.shade = true;
                    }
                },
                fail: () => {},
                complete: () => {}
            });
        },
        sure: function() {
            uni.navigateBack({
            	delta:1
            });
        }
    }
};
</script>

<style>
page {
    background: #121212;
}
.logo {
    width: 185rpx;
    height: 185rpx;
    margin-top: 135rpx;
    margin-left: calc((100% - 185rpx) / 2);
}
.fil {
    width: 250rpx;
    height: 100rpx;
    display: block;
    margin: 0 auto 100rpx;
}
.enter {
    width: 600rpx;
    height: 100rpx;
    margin: 10rpx auto;
}
.title {
    float: left;
    color: #fff;
    width: 150rpx;
    line-height: 80rpx;
    font-size: 30rpx;
}
.number {
    float: right;
    width: 450rpx;
    height: 80rpx;
    line-height: 80rpx;
    border-bottom: 1rpx solid #555555;
    color: #fff;
    font-size: 24rpx;
}
.getcode {
    border-radius: 50rpx;
    width: 180rpx;
    height: 50rpx;
    font-size: 22rpx;
    background: rgba(243, 243, 243, 0.5);
    color: #fff;
    text-align: center;
    line-height: 50rpx;
    position: absolute;
    bottom: 20rpx;
    right: 0;
}
.getcode1 {
    border-radius: 50rpx;
    width: 180rpx;
    height: 50rpx;
    font-size: 22rpx;
    background: rgba(243, 243, 243, 0.3);
    color: RGBA(255, 255, 255, 0.5);
    text-align: center;
    line-height: 50rpx;
    position: absolute;
    bottom: 20rpx;
    right: 0;
}
button[disabled] {
    background: rgba(243, 243, 243, 0.5) !important;
    color: #fff !important;
}

.btn {
    width: 664rpx;
    height: 88rpx;
    background: #fff;
    border-radius: 50rpx;
    margin: 40rpx auto;
    color: #333;
    text-align: center;
    line-height: 88rpx;
}
.btn1 {
    width: 664rpx;
    height: 88rpx;
    background: RGBA(255, 255, 255, 0.5);
    border-radius: 50rpx;
    margin: 40rpx auto;
    color: #333;
    text-align: center;
    line-height: 88rpx;
}
.goback {
    width: 263rpx;
    height: 58rpx;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 29px;
    margin: 60rpx auto;
    font-weight: 400;
    font-size: 24rpx;
    color: rgba(177, 177, 177, 1);
    line-height: 58rpx;
    text-align: center;
}
.shade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
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
    text-align: center;
    font-size: 32rpx;
    color: #121212;
    line-height: 160rpx;
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
    margin: 0 auto;
}
</style>
