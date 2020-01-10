<template>
    <view class="container">
        <view class="login-icon">
            <image class="login-img" src="../../static/images/xiao.png"></image>
            <text class="login-text">欢迎来到星际云通</text>
        </view>
		<image class='img' src='../../static/images/hosting.svg'></image>
		  <view class='txt'>
		  <text class='item'>矿机在线管理</text>
		  <text class='item'>|</text>
		  <text class='item'>收益实时查询</text>
		  </view>
        <!-- <view class="iti"></view> -->
        <!--注册-->
        <button class="changeBtn" size="default" open-type="getUserInfo" @getuserinfo="autuWXLogin">授权登录</button>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    onLoad() {
        console.log(111)
    },
    methods: {
        autuWXLogin(e) {
            var _self = this;
            console.log('用户信息', e.detail);
            uni.login({
                success: res => {
                    console.log(res.code); // code
                    uni.request({
                        url:this.url +'users/authorization/',
                        method: 'POST',
                        data: {
                            code: res.code
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        success: res => {
                            console.log(res);
                            // uni.setStorageSync('phone', this.phone);
                            uni.setStorageSync('token', res.data.token);
                            // _self.global_.phone = this.phone;
                            _self.global_.token = res.data.token;
                            if (res.statusCode == 200) {
                                console.log(res);
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            }
                        },
                        fail: () => {},
                        complete: () => {}
                    });
                }
            });
        }
    }
};
</script>

<style>
page {
    height: 100%;
    width: 100%;
}
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    box-sizing: border-box;
    background-color: #121E2C;
}

/*登录图片*/
.login-icon {
    flex: none;
    margin-top: 120rpx;
    display: flex;
    align-items: center;
}
.login-img {
    width: 92rpx;
    height: 80rpx;
    margin-top: 120rpx;
    margin-left: 120rpx;
}
.iti{
    height: 800rpx;
}
.login-text {
    font-weight: bold;
    font-size: 50rpx;
    color: #01c0dd;
    margin-top: 100rpx;
}
/* 矿机图片 */
.img {
    width: 500rpx;
    height: 500rpx;
    margin: 10px auto;
}

.txt {
    height: 100rpx;
    line-height: 100rpx;
    color: #01c0dd;
    display: flex;
    justify-content: space-around;
}
.item {
    font-size: 30rpx;
    margin-left: 50rpx;
}
/*按钮*/
.changeBtn {
    /* 一 */
    width: 80%;
    height: 80rpx;
    background-color: #41BEC9;
    color: #fff;
    border-radius: 30rpx;
    margin: 100rpx auto;
    line-height: 80rpx;
    font-size: 42rpx;
}
</style>
