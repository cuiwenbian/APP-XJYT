<template>
    <!-- 解绑邮箱 -->
    <view class="container">
        <view class="line"></view>
        <view class="list">
            <view class="icon"><image src="../../static/images/icon-email.png" style="width:38rpx;height:30rpx;" mode=""></image></view>
            <view class="enter" :value="email">{{ email }}</view>
        </view>
        <view class="line"></view>
        <view class="list">
            <view class="icon" style='margin-top: 37rpx;'><image src="../../static/images/icon-code.png" style="width:36rpx;height:42rpx;" mode=""></image></view>
            <input class="enter enter1" type="number" :value="emailCode" @input="getEmailCode" placeholder="请输入邮箱验证码" />
            <button class="getcode" @click="sendcode" :disabled="disabled">{{ codename }}</button>
        </view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="unbind" v-if="allowLogin">确认</view>
			<view class="submit-btn-disable" v-else>确认</view>
		</view>
    </view>
</template>

<script>
var check = require('../../common/utils.js');
	import {debounce} from '@/common/utils.js'
export default {
    data() {
        return {
            email: '',
            email1: '',
			n:true,
            emailCode: '',
            codename: ' 获取验证码',
            disabled: false
        };
    },
    onShow() {
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
			return !!(this.emailCode)
		},
	},
    methods: {
		next: function() {
			var that = this;
			that.n = false;
		},
		back: function() {
			var that = this;
			that.n = true;
		},
        getEmailCode: function(e) {
            this.emailCode = e.detail.value;
        },
		linkToTransfer: debounce(function(){
			var that = this;
			uni.request({
			    //解除绑定邮箱验证码
			    url: this.url + 'deleteemails/',
			    method: 'POST',
			    data: {
			        email: that.email,
			        email_msg: that.emailCode
			    },
			    header: {
			        Authorization: 'JWT' + ' ' + this.global_.token
			    },
			    success: function(res) {
			        var num = 121;
			        var timer = setInterval(function() {
			            num--;
			            if (num <= 0) {
			                clearInterval(timer);
			                (that.codename = '重新发送'), (that.disabled = false);
			            } else {
			                that.disabled = true;
			                that.codename = num + 's';
			            }
			        }, 1000);
			    },
			    fail: function(err) {}
			});
		},500, true),
        sendcode: function() {
			this.linkToTransfer()
        },
        unbind: function() {
            if (this.emailCode == '') {
                uni.showToast({
                    title: '请输入验证码',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            uni.request({
                url: this.url + 'delemails/', //解除绑定接口
                method: 'POST',
                data: {
                    email: this.email1,
                    email_msg: this.emailCode
                },
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    if (res.statusCode == 400) {
                        uni.showToast({
                            title: '验证码错误',
                            icon: 'none',
                            duration: 2000
                        });
                        return false;
                    }
                    if (res.statusCode == 200) {
						uni.navigateBack({
							delta:2
						});
                        uni.showToast({
                            title: '邮箱解绑成功',
                            icon: 'none',
                            duration: 1500
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
			background-color: rgb(2,213,151);
			    transition: all .2s;
			    &:active {
			        background-color: rgba(2,213,151, .85);
			    }
			// background-image: linear-gradient(to right, #01c774, #01dda9);
			// &.active {
			// 	opacity: 0.4;
			// }
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
			background-color: rgba(2,213,151, .4);
			// background-image: linear-gradient(to right, #706f72, #a9a8ab);
		}
	}
</style>
