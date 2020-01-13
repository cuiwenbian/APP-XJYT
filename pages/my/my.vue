<template>
    <!-- 我的 -->
    <view class="container" style="position: relative;">
        <view class="height"></view>
        <view class="top">
            <image class="bg" src="../../static/images/background.png" mode="aspectFill">
                <!-- #ifdef APP-PLUS -->
                <image class="logout" src="../../static/images/logout.png" mode="" @click="logout"></image>
                <!-- #endif -->
            </image>
            <view class="avator" @click="personal"><image class="img" src="../../static/images/avator.png" mode=""></image></view>
            <view class="nickname">用户昵称</view>
            <view class="phone">{{ phone }}</view>
        </view>

        <view class="list">
            <view class="listItem" @click="wallet">
                <view class="pic"><image src="../../static/images/icon-wallet.png" style="width:50rpx;height:44rpx;" mode=""></image></view>
                <view class="txt">我的钱包</view>
            </view>
            <view class="listItem" @click="address">
                <view class="pic"><image src="../../static/images/icon-address.png" style="width:40rpx;height:46rpx; " mode=""></image></view>
                <view class="txt">提币地址</view>
            </view>
            <view class="listItem" @click="power">
                <view class="pic"><image src="../../static/images/icon-cunli.png" style="width:44rpx;height:44rpx;" mode=""></image></view>
                <view class="txt">我的存力</view>
            </view>
            <view class="listItem" @click="trans">
                <view class="pic"><image src="../../static/images/icon-trans.png" style="width:44rpx;height:44rpx;" mode=""></image></view>
                <view class="txt">服务器交易</view>
            </view>
            <view class="listItem" @click="mymachine">
                <view class="pic"><image src="../../static/images/icon-machine.png" style="width:46rpx;height:40rpx;" mode=""></image></view>
                <view class="txt">我的服务器</view>
            </view>
            <view class="listItem" @click="machinsale" v-if="categart == 2 || categart == 4">
                <view class="pic"><image src="../../static/images/sale.png" style="width:49rpx;height:38rpx;" mode=""></image></view>
                <view class="txt">服务器出售</view>
            </view>
            <view class="listItem" @click="coupon">
                <view class="pic"><image src="../../static/images/icon-quan.png" style="width:44rpx;height:42rpx;" mode=""></image></view>
                <view class="txt">优惠券</view>
            </view>
            <!-- <view class="listItem" @click="tradePassword">
				<view class="pic">18895657393
					<image  src="../../static/images/icon-trade.png" style="width:41rpx;height:49rpx;" mode=""></image>
				</view>
				<view class="txt" >交易密码</view>
			</view>
			<view class="listItem" @click="loginPassword">
				<view class="pic">
					<image  src="../../static/images/icon-login.png" style="width:41rpx;height:49rpx;" mode=""></image>
				</view>
				<view class="txt" >登录密码</view>
			</view>
			<view class="listItem"  @click="bindEmail" >
				<view class="pic">
					<image   src="../../static/images/icon-emails.png" style="width:46rpx;height:36rpx;" mode=""></image>
				</view>
				<view class="txt" >邮箱绑定</view>
			</view> -->
            <view class="listItem" @click="help">
                <view class="pic"><image src="../../static/images/icon-help.png" style="width:44rpx;height:44rpx;" mode=""></image></view>
                <view class="txt">帮助中心</view>
            </view>
            <!-- <view class="listItem" @click="certification">
				<view class="pic">
					<image  src="../../static/images/icon-identity.png" style="width:48rpx;height:39rpx;" mode=""></image>
				</view>
				<view class="txt" >实名认证</view> 
			</view> -->
            <view class="listItem" @click="suggest">
                <view class="pic"><image src="../../static/images/icon-suggest.png" style="width:44rpx;height:46rpx;" mode=""></image></view>
                <view class="txt">意见反馈</view>
            </view>
            <view class="listItem" @click="set">
                <view class="pic"><image src="../../static/images/set.png" style="width:50rpx;height:47rpx;" mode=""></image></view>
                <view class="txt">设置</view>
            </view>
            <!-- #ifdef MP-WEIXIN -->
            <view class="listItem" @click="logout">
                <view class="pic"><image src="../../static/images/icon-quit.png" style="width:44rpx;height:46rpx;" mode=""></image></view>
                <view class="txt">退出应用</view>
            </view>
            <!-- #endif -->
        </view>
        <view class="shade" v-if="shade">
            <view class="pop">
                <view class="tips">提示</view>
                <view class="pop-title">退出登录？</view>
                <view class="pops">
                    <view class="pop-btn quxiao" @click="cancel">取消</view>
                    <view class="pop-btn yess" @click="sure">退出</view>
                </view>
            </view>
        </view>
    </view>
</template>
<!-- 我的 -->
<script>
export default {
    data() {
        return {
            phone: '',
            shade: false,
            categart: ''
        };
    },
    onShow() {
        var _this = this;
        uni.request({
            url: this.url + 'home/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success(res) {
                _this.categart = res.data.data.categart;
            }
        });
    },
    onLoad() {
        var p = this.global_.phone;
        var p1 = p.split(''); //字符串转为数组
        var phone =
            p1
                .slice(0, 3)
                .join()
                .replace(/,/g, '') +
            '****' +
            p1
                .slice(7, 11)
                .join()
                .replace(/,/g, '');
        this.phone = phone;
    },
    onHide() {
        this.shade = false;
    },
    methods: {
        cancel: function() {
            this.shade = false;
        },
        sure: function() {
            this.global_.token == '';
            uni.removeStorageSync('phone');
            uni.removeStorageSync('token');
            uni.reLaunch({
                url: '../login/login'
            });
        },
        power: function() {
            uni.navigateTo({
                url: '../../my/power/power'
            });
        },
        personal: function() {
            uni.navigateTo({
                url: '../../my/personal/personal?phone=' + this.phone
            });
        },
        wallet: function() {
            uni.navigateTo({
                url: '../../my/my-wallet/my-wallet'
            });
        },
        trans: function() {
            uni.navigateTo({
                url: '../mill/mill'
            });
        },
        machinsale: function() {
            uni.navigateTo({
                url: '../../my/machine-sale/machine-sale'
            });
        },
        address: function() {
            uni.request({
                url: this.url + 'walletaddress/',
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
                            url: '../../my/address/address'
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
        },
        tradePassword: function() {
            var that = this;
            uni.request({
                url: this.url + 'setmoney/',
                method: 'GET',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    if (res.statusCode == 302) {
                        uni.showToast({
                            title: '用户未绑定邮箱',
                            icon: 'none',
                            duration: 2000
                        });
                        return false;
                    }
                    if (res.statusCode == 400) {
                        uni.navigateTo({
                            url: '../../my/change-password/change-password'
                        });
                    }
                    if (res.statusCode == 200) {
                        uni.navigateTo({
                            url: '../../my/trade-password/trade-password'
                        });
                    }
                }
            });
        },
        loginPassword: function() {
            uni.request({
                url: this.url + 'updataloginpassword/',
                method: 'GET',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    if (res.statusCode == 400) {
                        uni.navigateTo({
                            url: '../../my/change-loginPassword/change-loginPassword'
                        });
                    }
                    if (res.statusCode == 200) {
                        uni.navigateTo({
                            url: '../../my/change-pass/change-pass'
                        });
                    }
                }
            });
        },
        bindEmail: function() {
            uni.request({
                url: this.url + 'linkemail/',
                method: 'GET',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    if (res.statusCode == 200 || res.statusCode == 201) {
                        uni.navigateTo({
                            url: '../../my/email/email'
                        });
                    }
                    if (res.statusCode == 400) {
                        uni.navigateTo({
                            url: '../../my/unbindemail/unbindemail'
                        });
                    }
                }
            });
        },
        suggest: function() {
            uni.navigateTo({
                url: '../../my/suggest/suggest'
            });
        },
        help: function() {
            uni.showToast({
                title: '暂未开放',
                icon: 'none',
                duration: 2000
            });
        },
        certification: function() {
            uni.request({
                url: this.url + 'realname/',
                method: 'GET',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success: function(res) {
                    if (res.statusCode == 202) {
                        uni.showToast({
                            title: '已实名认证',
                            icon: 'none',
                            duration: 2000
                        });
                        return false;
                    }
                    if (res.statusCode == 205) {
                        uni.showToast({
                            title: '身份认证审核中，请等待',
                            icon: 'none',
                            duration: 2000
                        });
                        return false;
                    }
                    if (res.statusCode == 200) {
                        uni.navigateTo({
                            url: '../../my/identity/identity'
                        });
                    }
                }
            });
        },
        mymachine: function() {
            uni.navigateTo({
                url: '../../my/my-machine/my-machine'
            });
        },
        logout: function() {
            this.shade = true;
        },
        coupon: function() {
            uni.navigateTo({
                url: '../../my/coupon/coupon',
                success: res => {},
                fail: () => {},
                complete: () => {}
            });
        },
        set: function() {
            uni.navigateTo({
                url: '../set/set'
            });
        }
    }
};
</script>

<style>
.shade {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
}
.pop {
    width: 636rpx;
    height: 368rpx;
    margin: 335rpx auto;
    padding: 47rpx 40rpx 48rpx;
    box-sizing: border-box;
    background: #fff;
    border-radius: 5rpx;
}
.tips {
    text-align: center;
    font-size: 30rpx;
    color: #333333;
    font-weight: bold;
}
.pop-title {
    height: 160rpx;
    line-height: 160rpx;
    text-align: center;
    font-size: 28rpx;
    color: #666666;
}
.pops {
    height: 100rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.pop-btn {
    width: 260rpx;
    height: 72rpx;
    border-radius: 5rpx;
    line-height: 72rpx;
    font-size: 26rpx;
    color: #666666;
    background: #cacaca;
    text-align: center;
}
.yess {
    background: #41bec9;
    color: #ffffff;
}
/* .quxiao{
		color:rgba(137,137,137,1);
	} */
.height {
    height: var(--status-bar-height);
    background: #121212;
}
page {
    background: #121e2c;
}
.top {
    width: 100%;
    height: 516rpx;
    position: relative;
}
.bg {
    width: 100%;
    height: 100%;
    position: relative;
}
.logout {
    width: 36rpx;
    height: 32rpx;
    position: absolute;
    right: 26rpx;
    top: 33rpx;
}
.avator {
    width: 100%;
    height: 146rpx;
    z-index: 9;
    position: absolute;
    top: 124rpx;
    border-radius: 50%;
}
.img {
    width: 146rpx;
    height: 146rpx;
    display: block;
    margin: 0 auto;
    border-radius: 50%;
}
.nickname {
    width: 100%;
    height: 30rpx;
    position: absolute;
    top: 305rpx;
    text-align: center;
    line-height: 30rpx;
    color: #ffffff;
    font-size: 30rpx;
}
.phone {
    width: 100%;
    height: 30rpx;
    position: absolute;
    top: 356rpx;
    text-align: center;
    line-height: 30rpx;
    font-size: 24rpx;
    color: #ffffff;
}
.line {
    width: 100%;
    height: 10rpx;
    background: #edeeee;
}
.list {
    width: 100%;
    height: 500rpx;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 50rpx;
    box-sizing: border-box;
}
.listItem {
    width: 25%;
    height: 50%;
    box-sizing: border-box;
}
.pic {
    display: block;
    width: 52rpx;
    height: 52rpx;
    margin: 30rpx auto;
}
.txt {
    line-height: 20rpx;
    font-size: 24rpx;
    text-align: center;
    color: #ffffff;
}
</style>
