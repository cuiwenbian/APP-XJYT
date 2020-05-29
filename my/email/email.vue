<template>
    <!-- 邮箱认证 -->
    <view class="container">
        <view class="line"></view>
        <view class="list">
            <view class="icon"><image src="../../static/images/icon-email.png" style="width:38rpx;height:30rpx;" mode=""></image></view>
            <input class="enter" type="text&number" :value="email" @input="getEmailValue" @blur="getEmailStyle" placeholder="请输入邮箱地址" placeholder-style="color:#999999;" />
        </view>
        <view class="line"></view>
        <view class="list">
            <view class="icon" style='margin-top:40rpx;'><image src="../../static/images/icon-code.png" style="width:36rpx;height:42rpx;" mode=""></image></view>
            <input class="enter enter1" type="number" @input="getEmailCode" placeholder="请输入邮箱验证码" placeholder-style="color:#999999;" />
            <button class="getcode" @click="sendcode" :disabled="disabled">{{ codename }}</button>
        </view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="save" v-if="allowLogin">确认</view>
			<view class="submit-btn-disable" v-else>确认</view>
		</view>
    </view>
</template>

<script>
var check = require('../../common/utils.js');
	import { debounce } from '@/common/utils.js';
export default {
    data() {
        return {
            email: '',
            emailCode: '',
			n:true,
            codename: ' 获取验证码',
            disabled: false
        };
    },
    onBackPress(option) {
        plus.key.hideSoftKeybord();
    },
	computed: {
		allowLogin () {
			return !!(this.email && this.emailCode)
		},
	},
    methods: {
		next: function() {
			var that=this;
			that.n = false;
		},
		back: function() {
			var that=this;
			that.n = true;
		},
        getEmailValue: function(e) {
            this.email = e.detail.value;
        },
        getEmailStyle: function(e) {
            var flag = check.checkEmail(this.email);
			if (!this.email) {
				uni.showToast({
				    title: '请输入邮箱',
				    icon: 'none',
				    duration: 2000
				});
				return false;
			}
            if (this.email && !flag) {
                uni.showToast({
                    title: '邮箱格式不正确',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
        },
        getEmailCode: function(e) {
            this.emailCode = e.detail.value;
        },
		linkToTransfer: debounce(function(){
			var that = this;
			if (!that.email) {
			    uni.showToast({
			        title: '请输入邮箱',
			        icon: 'none',
			        duration: 2000
			    });
			    return false;
			}
			var flag = check.checkEmail(that.email);
			if (!flag) {
			    uni.showToast({
			        title: '邮箱格式不正确',
			        icon: 'none',
			        duration: 2000
			    });
			    return false;
			}
			uni.request({
			    //绑定邮箱验证码
			    url: this.url + 'bindings/',
			    method: 'POST',
			    data: {
			        email: that.email
			    },
			    success: function(res) {
			        if (res.statusCode == 200) {
			            var num = 121;
			            var timer = setInterval(function() {
			                num--;
			                if (num <= 0) {
			                    clearInterval(timer);
			                    (that.codename = '重新发送'), (that.disabled = false);
			                } else {
			                    that.codename = num + 's';
			                    that.disabled = true;
			                }
			            }, 1000);
			        }
			        if (res.statusCode == 401) {
			            uni.showToast({
			                title: '该邮箱已被使用',
			                icon: 'none',
			                duration: 2000
			            });
			            return false;
			        }
			    },
			    fail: function(err) {}
			});
		},500, true),
        sendcode: function() {
			this.linkToTransfer()
        },
        save: function() {
            if (this.email == '') {
                uni.showToast({
                    title: '请输入邮箱地址',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.emailCode == '') {
                uni.showToast({
                    title: '请输入验证码',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            uni.request({
                url: this.url + 'linkemails/',
                method: 'POST',
                data: {
                    email: this.email,
                    email_msg: this.emailCode
                },
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    if (res.statusCode == 200) {
                       uni.navigateBack({
                       	  delta:2
                       });
						uni.showToast({
						    title: '邮箱绑定成功',
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
    width: 100%;
    height: 120rpx;
    padding-left: 48rpx;
    padding-right: 48rpx;
    box-sizing: border-box;
    background: #fff;
}
.icon {
    float: left;
    width: 60rpx;
    height: 60rpx;
    margin-right: 20rpx;
    margin-top: 45rpx;
}
.enter {
    float: left;
    width: 550rpx;
    height: 120rpx;
    line-height: 120rpx;
    font-size: 30rpx;
    color: #333;
}
.enter1 {
    width: 300rpx;
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
    margin-top: 35rpx;
}
button[disabled] {
    background: #797979 !important;
    color: #fff !important;
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
</style>
