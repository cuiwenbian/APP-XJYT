<template>
    <!-- 编辑我的地址 -->
    <view class="container" style="position:relative;">
        <view class="line"></view>
        <view class="list">
            <view class="txt">地址昵称:</view>
            <input class="enter" type="text" :value="nickname" @input="getRemark" />
        </view>
        <view class="line"></view>
        <view class="list">
            <view class="txt">我的地址:</view>
            <input class="enter" type="text" :value="address" @input="getAddress" />
        </view>
		<view class="submit-btn-wrap">
			<view class="submit-btn" hover-class="active" @click="save" v-if="allowLogin">保存</view>
			<view class="submit-btn-disable" v-else>保存</view>
		</view>
        <!-- <view class="save" @click="save">保存</view> -->
        <!-- #ifndef H5 -->
        <password-input v-if="passIn" ref="wrong" @tap="openKeyBoard('number')" @clo="clo" :length="length" :gutter="20" :list="numberList"></password-input>
        <!-- #endif -->
        <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
        <!-- #ifdef H5 -->
        <view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" ref="wrong" :gutter="20" :list="numberList"></password-input></view>
        <!-- #endif -->
        <!-- 数字键盘 -->
        <keyboard-package ref="number" @onChange="onChange" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
        
        <!-- #ifndef H5 -->
        <password-input v-if="delShow" ref="wrong" @tap="openKeyBoard('number')" @clo="cloo" :length="length" :gutter="20" :list="numberList"></password-input>
        <!-- #endif -->
        <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
        <!-- #ifdef H5 -->
        <view v-if="delShow" @tap="openKeyBoard('number')" @clo="cloo"><password-input :length="length" ref="wrong" :gutter="20" :list="numberList"></password-input></view>
        <!-- #endif -->
        <!-- 数字键盘 -->
        <keyboard-package ref="numbers" @onChange="onChange1" @onInput="onInput1" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
    </view>
</template>

<script>
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
export default {
    data() {
        return {
            nickname: '',
            address: '',
            password: '',
            id: '',
            user_id: '',
            numberList: [],
            length: 6,
            type: 'number',
            passIn: false,
            delShow: false
        };
    },
    components: {
        keyboardPackage,
        passwordInput
    },
    onLoad(options) {
        this.nickname = options.wallet_key;
        this.address = options.wallet_value;
        this.id = options.id;
        this.user_id = options.user_id;
    },
    onBackPress(option) {
        plus.key.hideSoftKeybord();
    },
	computed: {
		allowLogin () {
			return !!(this.address && this.nickname)
		},
	},
    methods: {
        //返回
        back: function() {
            uni.navigateBack({
                delta: 1
            });
        },
        clo: function() {
            this.passIn = false;
            this.$refs['number'].close();
            this.numberList.length = 0;
        },
        cloo: function() {
            this.delShow = false;
            this.$refs['numbers'].close();
            this.numberList.length = 0;
        },
        onChange(e) {
            if (e.show == false) {
                this.passIn = false;
            }
            this.numberList.length = 0;
        },
        onChange1(e) {
            if (e.show == false) {
                this.delShow = false;
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
        getAddress: function(e) {
            this.address = e.detail.value;
        },
        getRemark: function(e) {
            this.nickname = e.detail.value;
        },
        save: function() {
            if (this.address == '') {
                uni.showToast({
                    title: '请输入我的地址',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.address.length <= 32) {
                uni.showToast({
                    title: '我的地址最少32位',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            if (this.nickname == '') {
                uni.showToast({
                    title: '请输入地址备注',
                    icon: 'none',
                    duration: 2000
                });
                return false;
            }
            this.passIn = true;
            this.$refs['number'].open();
            this.onInput(val);
        },
        onInput(val) {
            var that = this;
            that.numberList.push(val);
            that.password = that.numberList.join().replace(/,/g, '');
            if (that.numberList.length >= that.length) {
                uni.request({
                    url: that.url + 'updatadeleteaddresss/', //编辑地址接口
                    method: 'PUT',
                    data: {
                        wallet_value: that.address,
                        wallet_key: that.nickname,
                        id: that.id,
                        password: that.password,
                        user_id: that.user_id
                    },
                    header: {
                        Authorization: 'JWT' + ' ' + this.global_.token
                    },
                    success(res) {
                        if (res.statusCode == 400) {
                            that.numberList.pop();
                            that.numberList.length = 0;
                            that.$refs.wrong.flag = false;
                            var n = res.data.data.err_num;
                            var s = 5 - n;
                            that.$refs.wrong.tip = '密码错误，剩余' + s + '次机会';
                        }
                        if (res.statusCode == 423) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.showToast({
                                title: '交易密码已锁定,请在今日24:00后进行交易',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        if (res.statusCode == 204) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.navigateBack({
                                delta: 1
                            });
                            uni.showToast({
                                title: '修改成功',
                                icon: 'none',
                                duration: 1500
                            });
                        }
                        var page = getCurrentPages().pop();
                        if (page == undefined || page == null) return;
                        page.onLoad();
                    }
                });
                this.numberList.length = 0;
            }
        },
        //点击删除按钮
        onNavigationBarButtonTap: function() {
            var that = this;
            this.delShow = true;
            this.$refs['numbers'].open();
            this.onInput1(val);
        },
        onInput1(val) {
            var that = this;
            that.numberList.push(val);
            that.password = that.numberList.join().replace(/,/g, '');
            if (that.numberList.length >= that.length) {
                uni.request({
                    url: that.url + 'updatadeleteaddresss/', //删除地址接口
                    method: 'DELETE',
                    data: {
                        id: this.id,
                        password: this.password
                    },
                    header: {
                        Authorization: 'JWT' + ' ' + this.global_.token
                    },
                    success(res) {
                        if (res.statusCode == 204) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.navigateBack({
                                delta: 1
                            });
                            uni.showToast({
                                title: '删除成功',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        if (res.statusCode == 400) {
                            that.numberList.pop();
                            that.numberList.length = 0;
                            that.$refs.wrong.flag = false;
                            var n = res.data.data.err_num;
                            var s = 5 - n;
                            that.$refs.wrong.tip = '剩余' + s + '次机会';
                        }
                        if (res.statusCode == 423) {
                            that.passIn = false;
                            that.$refs['number'].close();
                            uni.showToast({
                                title: '交易密码已锁定,请在今日24:00后进行交易',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        var page = getCurrentPages().pop();
                        if (page == undefined || page == null) return;
                        page.onLoad();
                    }
                });
                this.numberList.length = 0;
            }
        }
    }
};
</script>

<style lang="scss">
page {
    background: #edeeee;
}
.height {
    height: var(--status-bar-height);
    background: #121212;
    z-index: 99;
}
.line {
    height: 30rpx;
}
.list {
    width: 100%;
    height: 120rpx;
    padding-left: 48rpx;
    padding-right: 48rpx;
    box-sizing: border-box;
    background: #fff;
}
.txt {
    width: 150rpx;
    float: left;
    line-height: 120rpx;
    font-size: 30rpx;
    color: #5e5e5e;
}
.enter {
    width: 500rpx;
    height: 120rpx;
    line-height: 120rpx;
    font-size: 30rpx;
    color: #333;
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
