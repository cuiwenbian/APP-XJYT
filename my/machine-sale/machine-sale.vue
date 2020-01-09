<template>
    <view class="container">
        <!-- 提示 -->
        <view class="tan" @click="prompt" v-if="verify">
            <image src="../../static/images/tan.png" class="tanh"></image>
            <text class="mill">公司为您添加新的服务器，请确认查收。</text>
        </view>
        <view class="banner">
            <view class="all">数量(台)</view>
            <view class="assets">{{ lens }}</view>
        </view>
        <view v-if="flag">
            <image class="transfer" src="../../static/images/none.png" mode=""></image>
            <view class="nomachine">暂无服务器</view>
        </view>
        <view v-else>
            <view>
                <view class="servers">
                    <view class="s-item" @click="handleSelectRadio(server)" v-for="(server, index) in serverList" :key="index">
                        <view class="si-imgs"><image src="../../static/images/kuangji.png" class="si-img"></image></view>
                        <view class="si-info">
                            <view class="ii-title">{{ server.name }}</view>
                            <view class="ii-other">
                                <text class="io-1">{{ server.hard }}</text>
                                <text>合约周期：365天</text>
                            </view>
                            <view class="ii-other">数量：{{ server.lens }}台</view>
                        </view>
                        <view :class="'si-radio' + (selected.id === server.id ? ' si-radio-selected' : '')"></view>
                    </view>
                </view>
                <view class="s-btns">
                    <view class="sn-btn sn-zr" @click="btn('1')">转让</view>
                    <view class="sn-btn sn-cs" @click="btn('2')">出售</view>
                </view>
            </view>
        </view>
        <!-- 弹框 -->
        <view class="shade" v-if="sha">
            <view class="pop">
                <view class="pop-title">您有新的服务器需要验收</view>
                <view class="pops"><view class="pop-btn" @click="validation">验证</view></view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            verify: false,
            sha: false,
            selected: {},
            serverList: [],
            numb: [],
            lens: 0
        };
    },
    onShow() {
        var _this = this;
        uni.request({
            url: this.url + 'usermachine/transferlist/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success(res) {
                console.log(res);
                console.log(res.data.data[1]);
                _this.serverList = res.data.data[1];
                _this.numb = res.data.data[0];
                console.log(_this.numb);
                let lens = 0;
                for (let i = 0; i < res.data.data[1].length; i++) {
                    let item = res.data.data[1][i];
                    console.log(item.lens);
                    lens += item.lens;
                }
                _this.lens = lens;
                console.log(_this.serverList.length);
                if (_this.numb == 0) {
                    _this.verify = true;
                } else {
                    _this.verify = false;
                }
                if (_this.serverList.length === 0) {
                    _this.flag = true;
                }
                if (res.statusCode == 400) {
                    uni.showToast({
                        title: '用户名实名认证未通过或未设置资金密码或',
                        icon: 'none'
                    });
                }
                if (res.statusCode == 204) {
                    uni.showToast({
                        title: '由服务器未验收',
                        icon: 'none'
                    });
                }
            }
        });
    },
    methods: {
        prompt: function() {
            this.sha = true;
            console.log(this.sha);
            // 先解决bug把  不然没法走流程那个红色的提示 点击出弹框 但是现在不出了也不报错不知道为啥
            // 上面显示是true但是没显示  上面设置true就谈一下
        },
        validation: function() {
            uni.request({
                url: this.url + 'usermachine/machinestatus/',
                method: 'POST',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    console.log(res);
                    if (res.statusCode == 200) {
                        uni.showToast({
                            title: '已验证'
                        });
                    }
                }
            });
            this.sha = false;
            this.verify = false;
        },
        handleSelectRadio(item) {
            if (item.id === this.selected.id) {
                this.selected = {};
            } else {
                this.selected = item;
            }
        },
        btn: function(type) {
            if (!this.selected.id) {
                //没有选中，可以弹框提示
                uni.showToast({
                    title: '请选中服务器',
                    icon: 'none'
                });
                return false;
            }
            uni.request({
                url: this.url + 'usermachine/transfer/',
                method: 'GET',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success(res) {
                    console.log(res);
                }
            });
            uni.navigateTo({
                url: '../server/server?type=' + type + '&info=' + JSON.stringify(this.selected)
            });
        },
        onNavigationBarButtonTap: function() {
            uni.navigateTo({
                url: '../record/record'
            });
        }
    }
};
</script>

<style>
.servers {
    padding: 30rpx;
    padding-bottom: 120rpx;
}

.s-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx 0;
    border-bottom: 1px solid #f1f1f1;
}

.s-item::last-child {
    border-bottom: none;
}

.si-imgs {
    flex-shrink: 0;
    width: 240rpx;
    height: 180rpx;
}

.si-img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    display: initial;
}

.si-info {
    flex-shrink: 0;
}

.io-1 {
    margin-right: 20rpx;
}

.io-1::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 24rpx;
    background: #999;
    margin-left: 19rpx;
}

.si-info .ii-title {
    color: #333;
    font-size: 14px;
}

.si-info .ii-other {
    color: #888;
    font-size: 12px;
    margin-top: 10rpx;
}

.si-radio {
    width: 30rpx;
    height: 30rpx;
    border-radius: 50px;
    border: 1px solid #999;
    transition: all 0.2s;
}

.si-radio-selected {
    border-color: #007aff;
}

.si-radio-selected::after {
    content: '';
    width: 20rpx;
    height: 20rpx;
    background: #007aff;
    display: block;
    border-radius: 50px;
    margin: 5rpx;
}

.s-btns {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 120rpx;
    text-align: right;
    background: #fff;
    z-index: 1;
    padding-top: 40rpx;
}

.s-btns .sn-btn {
    margin-right: 30rpx;
    display: inline-block;
    font-size: 14px;
    padding: 15rpx 60rpx;
    border-radius: 8rpx;
    transition: all 0.2s;
}

.s-btns .sn-btn:active {
    opacity: 0.8;
}

.sn-zr {
    color: #888;
    border: 1px solid #ddd;
    background: #fff;
}

.sn-cs {
    color: #fff;
    border-color: #000;
    background: #000;
}
.shade {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
}
.banner {
    width: 100%;
    height: 210rpx;
    display: block;
    /* margin:35rpx auto; */
    background-image: url('../../static/images/ban.png');
    background-size: 750rpx 210rpx;
    position: relative;
    padding-top: 69rpx;
    padding-left: 60rpx;
    box-sizing: border-box;
}
.all {
    font-size: 24rpx;
    color: #ffffff;
}
.assets {
    font-size: 48rpx;
    color: #ffffff;
    margin-top: 19rpx;
}
.transfer {
    width: 130rpx;
    height: 130rpx;
    display: block;
    margin: 152rpx auto 35rpx;
}
.nomachine {
    text-align: center;
    color: #8796aa;
    font-size: 26rpx;
}

.tee {
    float: right;
    margin-top: 60rpx;
    width: 40rpx;
    height: 40rpx;
    margin-right: 90rpx;
}
.pagex {
    width: 100%;
    display: block;
}
.page1 {
    height: 180rpx;
    padding-right: 40rpx;
    padding-bottom: 20rpx;
}
.img {
    width: 20%;
}
.molis {
    float: right;
    margin-bottom: 60rpx;
}
.por {
    float: left;
    width: 145rpx;
    height: 126rpx;
    margin-top: 20rpx;
    margin-left: 48rpx;
}
.info {
    width: 50%;
    height: 100%;
    margin-left: 20rpx;
    float: left;
}
.obg {
    margin-top: 20rpx;
    font-size: 30rpx;
}
.days {
    color: #5ca614;
}
.obg_one {
    margin-top: 10rpx;
    font-size: 24rpx;
}
.tan {
    width: 100%;
    height: 66rpx;
    position: fixed;
    background-color: #fbe8e9;
    opacity: 0.9;
    z-index: 9;
    display: flex;
    align-items: center;
}
.tanh {
    width: 32rpx;
    height: 32rpx;
    padding-left: 42rpx;
    /* margin-top: 18rpx; */
}
.mill {
    color: #f3707c;
    font-size: 22rpx;
    padding-left: 15rpx;
    text-align: center;
    display: inline-block;
}
.pop {
    width: 550rpx;
    height: 300rpx;
    margin: 400rpx auto;
    padding: 0 60rpx;
    box-sizing: border-box;
    background: #fff;
    border-radius: 10rpx;
}
.pop-title {
    height: 180rpx;
    line-height: 180rpx;
    text-align: center;
    font-size: 24rpx;
}
.pops {
    height: 100rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.pop-btn {
    width: 158rpx;
    height: 66rpx;
    border-radius: 10rpx;
    line-height: 66rpx;
    font-size: 30rpx;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    background: #121212;
}
</style>
