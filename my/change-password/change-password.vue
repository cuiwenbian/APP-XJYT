<template>
    <!-- 根据现有密码  修改资金密码 -->
    <view class="container">
        <view class="line">验证现有密码</view>
        <view class="list"><input class="code" type="number" password :value="password" @input="getPassword" placeholder="请输入现有密码" /></view>
        <view class="set">设置新密码</view>
        <view class="list">
            <view class="title">交易密码:</view>
            <input class="code" type="digit" :password="isPassword" :value="newPassword" @input="getNewPassword" @blur='checkPwd' placeholder="请输入新的交易密码" />
            <image
                :class="isPassword ? 'close' : 'cloose'"
                :src="isPassword ? '../../static/images/password.png' : '../../static/images/openeye.png'"
                @click="show"
                mode=""
            ></image>
        </view>
        <view class="linee"></view>
        <view class="list">
            <view class="title">确认密码:</view>
            <input class="code" type="digit" :password="isPassword1" :value="newPassword1" @input="getNewPassword1" placeholder="请再次输入新密码" />
            <image
                :class="isPassword1 ? 'close' : 'cloose'"
                :src="isPassword1 ? '../../static/images/password.png' : '../../static/images/openeye.png'"
                @click="show1"
                mode=""
            ></image>
        </view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="changePassword" v-if="allowLogin">确认修改</view>
			<view class="submit-btn-disable" v-else>确认修改</view>
		</view>
        <view class="other" @click="other">找回密码</view>
    </view>
</template>

<script>
	import { debounce } from '@/common/utils.js';
export default {
    data() {
        return {
            isPassword: true,
            isPassword1: true,
			n:true,
            password: '',
            newPassword: '',
            newPassword1: ''
        };
    },
    onBackPress(option) {
        plus.key.hideSoftKeybord();
    },
	computed: {
		allowLogin () {
			return !!(this.password && this.newPassword && this.newPassword1)
		},
	},
    methods: {
        show: function() {
            this.isPassword = !this.isPassword;
        },
        show1: function() {
            this.isPassword1 = !this.isPassword1;
        },
        getPassword: function(e) {
            this.password = e.detail.value;
        },
        getNewPassword: function(e) {
            this.newPassword = e.detail.value;
        },
        getNewPassword1: function(e) {
            this.newPassword1 = e.detail.value;
        },
		checkPwd:function(e){
			this.newPassword = e.detail.value;
			var f = this.global_.checkPassword(this.newPassword);
			if (!f) {
			    uni.showToast({
			        title: '交易密码为6位数字',
			        icon: 'none',
			        duration: 2000
			    });
			    return false;
			}
		},
		next: function() {
			var that=this;
			that.n = false;
		},
		back: function() {
			var that=this;
			that.n = true;
		},
        changePassword: function() {
            if (this.password == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请输入现有密码',
                    duration: 2000
                });
                return false;
            }
            if (this.newPassword == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请输入新的交易密码',
                    duration: 2000
                });
                return false;
            }
			if (this.newPassword && this.newPassword1 && this.newPassword1 !== this.newPassword) {
			    uni.showToast({
			        icon: 'none',
			        title: '两次密码不一致',
			        duration: 2000
			    });
			    return false;
			}
            var f = this.global_.checkPassword(this.newPassword);
            if (!f) {
                uni.showToast({
                    title: '交易密码为6位数字',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.newPassword1 == '') {
                uni.showToast({
                    icon: 'none',
                    title: '请确认新的交易密码',
                    duration: 2000
                });
                return false;
            }
           
            uni.request({
                url: this.url + 'updatapasswods/',
                method: 'POST',
                data: {
                    password1: this.password,
                    password2: this.newPassword,
                    password3: this.newPassword1
                },
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    if (res.statusCode == 200) {
                       
                        uni.navigateBack({
							dekta:2
						})
						uni.showToast({
						    title: '资金密码修改成功',
						    icon: 'none',
						    duration: 1500
						});
                    }
                    if (res.statusCode == 400) {
                        uni.showToast({
                            title: '现有密码错误，或是新旧密码一样',
                            icon: 'none',
                            duration: 2000
                        });
                    }
                }
            });
        },
		linkToTransfer: debounce(function(){
			uni.navigateTo({
			    url: '../change-otherPassword/change_otherPassword'
			});
		},500, true),
        other: function() {
			this.linkToTransfer()
        }
    }
};
</script>

<style lang="scss">
page {
    background: #edeeee;
}
.line {
    line-height: 100rpx;
    margin-left: 48rpx;
    font-size: 30rpx;
}
.list {
    height: 100rpx;
    width: 100%;
    background: #fff;
    padding-left: 48rpx;
    box-sizing: border-box;
}
.title {
    float: left;
    line-height: 100rpx;
    font-size: 30rpx;
    width: 150rpx;
}
.code {
    float: left;
    width: 450rpx;
    height: 100rpx;
    line-height: 100rpx;
    font-size: 30rpx;
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
.open {
    height: 40rpx;
    margin-top: 30rpx;
}
.linee {
    height: 20rpx;
}
.set {
    margin-top: 50rpx;
    line-height: 100rpx;
    font-size: 30rpx;
    margin-left: 48rpx;
}
.submit-btn-wrap {
		padding-top: 110rpx;
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
			// background-image: linear-gradient(to right, #706f72, #a9a8ab);
			background-color: rgba(2,213,151, .4);
		}
	}

.other {
    line-height: 100rpx;
    float: right;
    margin-right: 48rpx;
    color: #41bec9;
    font-size: 24rpx;
}
</style>
